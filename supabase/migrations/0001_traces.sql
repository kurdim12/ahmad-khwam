-- Trace wall — «أنت الأثر». Consented visitor marks that join Ahmad's أثر.
-- DEFERRED: apply this when you're ready to make the wall collective & permanent.
--   supabase db push   (or paste into the SQL editor)
-- Then set NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY in the site env.

create extension if not exists pgcrypto;

create table if not exists public.traces (
  id          uuid primary key default gen_random_uuid(),
  mark        text not null check (char_length(btrim(mark)) between 1 and 24),
  locale      text not null default 'ar' check (locale in ('ar', 'en')),
  -- Light moderation: new marks land as 'pending' and only show once you approve.
  status      text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at  timestamptz not null default now()
);

create index if not exists traces_approved_idx
  on public.traces (created_at desc) where status = 'approved';

alter table public.traces enable row level security;

-- The public may READ only approved marks. No direct anon insert/update/delete.
drop policy if exists "read approved traces" on public.traces;
create policy "read approved traces"
  on public.traces for select
  using (status = 'approved');

-- Writes go ONLY through this controlled RPC: validates, lightly guards, queues
-- as 'pending'. SECURITY DEFINER so it can insert past RLS in a contained way.
create or replace function public.leave_trace(p_mark text, p_locale text default 'ar')
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_mark text := btrim(p_mark);
begin
  if char_length(v_mark) < 1 or char_length(v_mark) > 24 then
    raise exception 'mark must be between 1 and 24 characters';
  end if;

  if p_locale not in ('ar', 'en') then
    p_locale := 'ar';
  end if;

  -- Coarse flood guard: cap pending backlog created in the last 10 seconds.
  if (select count(*) from public.traces
      where status = 'pending' and created_at > now() - interval '10 seconds') >= 5 then
    raise exception 'too many traces just now, try again shortly';
  end if;

  insert into public.traces (mark, locale, status)
  values (v_mark, p_locale, 'pending');
end;
$$;

revoke all on function public.leave_trace(text, text) from public;
grant execute on function public.leave_trace(text, text) to anon, authenticated;

-- To approve a mark:    update public.traces set status = 'approved' where id = '…';
-- To approve the queue: update public.traces set status = 'approved' where status = 'pending';
-- To remove a mark:     delete from public.traces where id = '…';

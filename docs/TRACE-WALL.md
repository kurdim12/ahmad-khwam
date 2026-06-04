# The Trace Wall — «أنت الأثر»

The closing band invites every visitor to leave a short, **consented** mark. Those
marks become a wall of real traces — the people who *are* Ahmad's أثر.

## Two modes

| | On-device (default, now) | Collective (later) |
|---|---|---|
| Storage | the visitor's browser (`localStorage`) | Supabase Postgres |
| Visible to others | no | yes, after you approve |
| Setup | none | one migration + 2 env vars |

The UI is identical; `lib/traces.ts` picks the mode based on whether the Supabase
env vars are present. Nothing to change in components.

## Turning on the collective wall (when ready)

1. Create/choose a Supabase project.
2. Apply the migration: `supabase/migrations/0001_traces.sql`
   (`supabase db push`, or paste it into the SQL editor).
3. Set these in the site's environment (e.g. Vercel/Cloudflare project settings):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<publishable anon key>
   ```
4. Redeploy. New marks arrive as **pending**; approve them:
   ```sql
   update public.traces set status = 'approved' where status = 'pending';
   ```

## Privacy & consent (by design)

- Submitting requires an explicit consent checkbox.
- Only the **mark** (what they type, ≤ 24 chars), the locale, and a timestamp are
  stored. **No** IP, no account, no other personal data.
- Writes go through the `leave_trace` RPC only (no raw anon insert); reads are
  restricted by RLS to approved rows. You can delete any mark at any time.

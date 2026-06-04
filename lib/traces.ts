import type { Locale } from "./i18n";

/**
 * Trace wall data layer. Backend is DEFERRED: when the Supabase env vars are set,
 * traces persist to Postgres (via the `leave_trace` RPC, moderated) and the wall
 * reads approved marks. Until then it runs in on-device mode (localStorage) so the
 * interaction is real today and lights up the moment the database is connected.
 *
 * Apply supabase/migrations/0001_traces.sql and set:
 *   NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
 */
export type TraceMark = { mark: string; locale: string; created_at?: string };

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const LOCAL_KEY = "ahmad.trace.marks";
export const MAX_MARK = 24;

export const backendEnabled = (): boolean => Boolean(URL && ANON);

export function sanitizeMark(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_MARK);
}

function readLocal(): TraceMark[] {
  if (typeof window === "undefined") return [];
  try {
    const v = window.localStorage.getItem(LOCAL_KEY);
    return v ? (JSON.parse(v) as TraceMark[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(marks: TraceMark[]) {
  try {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(marks.slice(0, 60)));
  } catch {
    /* ignore quota/availability */
  }
}

/** Approved traces for the wall (newest first). On-device list when no backend. */
export async function fetchTraces(): Promise<TraceMark[]> {
  if (!backendEnabled()) return readLocal();
  try {
    const res = await fetch(
      `${URL}/rest/v1/traces?select=mark,locale,created_at&status=eq.approved&order=created_at.desc&limit=60`,
      { headers: { apikey: ANON as string }, cache: "no-store" }
    );
    if (!res.ok) return [];
    return (await res.json()) as TraceMark[];
  } catch {
    return [];
  }
}

export type LeaveResult = "pending" | "local" | "error";

/** Submit a consented mark. Backend → moderation queue ('pending'); else on-device ('local'). */
export async function leaveTrace(rawMark: string, locale: Locale): Promise<LeaveResult> {
  const mark = sanitizeMark(rawMark);
  if (!mark) return "error";

  if (!backendEnabled()) {
    const next = [{ mark, locale, created_at: new Date().toISOString() }, ...readLocal()];
    writeLocal(next);
    return "local";
  }

  try {
    const res = await fetch(`${URL}/rest/v1/rpc/leave_trace`, {
      method: "POST",
      headers: {
        apikey: ANON as string,
        Authorization: `Bearer ${ANON}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_mark: mark, p_locale: locale }),
    });
    return res.ok ? "pending" : "error";
  } catch {
    return "error";
  }
}

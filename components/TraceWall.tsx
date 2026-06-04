"use client";

import { useEffect, useState } from "react";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import {
  fetchTraces,
  leaveTrace,
  sanitizeMark,
  MAX_MARK,
  type TraceMark,
} from "@/lib/traces";

type Phase = "idle" | "sending" | "local" | "pending" | "error";
type Mark = TraceMark & { pending?: boolean };

export function TraceWall({ locale }: { locale: Locale }) {
  const w = copy.trace.wall;
  const [marks, setMarks] = useState<Mark[]>([]);
  const [value, setValue] = useState("");
  const [consent, setConsent] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    let alive = true;
    fetchTraces().then((m) => alive && setMarks(m));
    return () => {
      alive = false;
    };
  }, []);

  const clean = sanitizeMark(value);
  const canSubmit = clean.length > 0 && consent && phase !== "sending";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setPhase("sending");
    const result = await leaveTrace(clean, locale);
    if (result === "error") {
      setPhase("error");
      return;
    }
    // Show the visitor their own mark immediately.
    setMarks((prev) => [{ mark: clean, locale, pending: result === "pending" }, ...prev]);
    setValue("");
    setConsent(false);
    setPhase(result);
  }

  const message =
    phase === "local"
      ? `${w.done[locale]} ${w.localNote[locale]}`
      : phase === "pending"
      ? `${w.done[locale]} ${w.pending[locale]}`
      : phase === "error"
      ? w.error[locale]
      : "";

  return (
    <div className="mt-16 w-full max-w-2xl">
      {/* The wall of real traces */}
      <ul
        className="flex flex-wrap items-center justify-center gap-2.5"
        aria-label={w.prompt[locale]}
      >
        {marks.length === 0 ? (
          <li className="text-sm text-bone-faint" dir="auto">
            {w.empty[locale]}
          </li>
        ) : (
          marks.map((m, i) => (
            <li
              key={`${m.mark}-${i}`}
              dir="auto"
              className={`rounded-full border px-3.5 py-1.5 font-quote text-base ${
                m.pending
                  ? "border-dashed border-gold/30 text-bone-faint"
                  : "border-line text-bone"
              }`}
              title={m.pending ? w.pending[locale] : undefined}
            >
              {m.mark}
            </li>
          ))
        )}
      </ul>

      {/* The consent-gated form */}
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-10 flex flex-col items-stretch gap-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="trace-input">
            {w.placeholder[locale]}
          </label>
          <input
            id="trace-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={MAX_MARK}
            dir="auto"
            autoComplete="off"
            placeholder={w.placeholder[locale]}
            className="h-12 flex-1 rounded-full border border-line bg-ink-raised px-5 text-center font-quote text-lg text-bone placeholder:text-bone-faint focus:border-gold/40 sm:text-start"
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="h-12 shrink-0 rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-[transform,opacity] duration-300 ease-editorial enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {phase === "sending" ? w.submitting[locale] : w.submit[locale]}
          </button>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-start text-sm text-bone-muted">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--gold)]"
          />
          <span dir="auto">{w.consent[locale]}</span>
        </label>

        <p dir="auto" className="text-xs text-bone-faint">
          {w.privacy[locale]}
        </p>

        <p
          aria-live="polite"
          dir="auto"
          className="min-h-5 text-sm text-gold"
        >
          {message}
        </p>
      </form>
    </div>
  );
}

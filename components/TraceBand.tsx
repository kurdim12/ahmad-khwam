import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { TraceWall } from "./TraceWall";

/**
 * The turn outward. His mission «أكون الأثر» becomes the visitor's: by passing
 * through, you have left a trace and joined the others who are his أثر. A quiet,
 * unnumbered interstitial — it reframes the whole page from "portfolio" to "trace"
 * without breaking the browsable structure.
 */
export function TraceBand({ locale }: { locale: Locale }) {
  const c = copy.trace;

  return (
    <section
      aria-label={c.title[locale]}
      data-trace-node="trace"
      className="relative overflow-hidden border-y border-line py-28 sm:py-36"
    >
      <div aria-hidden className="texture-dots pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,75,0.10),transparent)]"
      />

      <div className="shell relative flex flex-col items-center text-center">
        <MotionReveal>
          <span className="eyebrow mb-6 inline-flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            {c.label[locale]}
          </span>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <h2
            dir="auto"
            className="font-display text-5xl font-semibold leading-[1.05] text-bone sm:text-7xl md:text-8xl"
          >
            {c.title[locale]}
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.14}>
          <p
            dir="auto"
            className="mt-8 max-w-xl text-lg leading-relaxed text-bone-muted sm:text-xl"
          >
            {c.body[locale]}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <p dir="auto" className="mt-6 max-w-md text-sm leading-relaxed text-bone-faint">
            {c.audience[locale]}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.26} className="flex w-full justify-center">
          <TraceWall locale={locale} />
        </MotionReveal>
      </div>
    </section>
  );
}

import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { PaperPattern } from "./PaperPattern";
import { RevealText } from "./RevealText";
import { TraceField } from "./TraceField";

/**
 * The impact centerpiece. «٨٤٫٥ ألف إنسان» reframed from a vanity metric into the
 * living trace — a real number standing inside a field of marks that represent the
 * people he has touched. They are the trace.
 */
export function AudienceField({ locale }: { locale: Locale }) {
  const c = copy.audience;

  return (
    <section
      id="audience"
      data-trace-node="audience"
      className="relative overflow-hidden border-y border-line bg-ink-soft py-20 sm:py-28"
    >
      <PaperPattern className="opacity-60" />

      <div className="shell relative flex flex-col items-center text-center">
        <MotionReveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            {c.label[locale]}
          </span>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <p
            dir="auto"
            className="mt-5 max-w-xl font-quote text-xl leading-relaxed text-bone sm:text-2xl"
          >
            {c.lead[locale]}
          </p>
        </MotionReveal>

        {/* The number, standing inside its own field of marks */}
        <div className="relative mt-10 w-full">
          <div className="absolute inset-0 -z-0">
            <TraceField count={540} />
          </div>
          <div className="relative z-10 flex flex-col items-center py-12">
            <RevealText
              as="div"
              text={c.big[locale]}
              className="font-display text-7xl leading-none text-gold sm:text-8xl md:text-[8rem]"
            />
            <p dir="auto" className="mt-3 font-quote text-2xl text-bone-muted sm:text-3xl">
              {c.unit[locale]}
            </p>
          </div>
        </div>

        <MotionReveal delay={0.1}>
          <p dir="auto" className="mt-8 text-sm text-bone-faint">
            {c.caption[locale]}
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}

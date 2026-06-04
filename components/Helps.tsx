import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { RevealText } from "./RevealText";
import { SectionLabel } from "./SectionLabel";

/**
 * Impact-led section: not "his work", but what changes in the person. Framing copy
 * in the site's voice (never quotes attributed to Ahmad), in his spare register.
 */
export function Helps({ locale }: { locale: Locale }) {
  const c = copy.helps;

  return (
    <section id="impact" className="shell scroll-mt-24 py-20 sm:py-28">
      <div className="mb-12 max-w-prose">
        <div className="mb-5">
          <SectionLabel label={c.label[locale]} locale={locale} />
        </div>
        <RevealText
          as="h2"
          text={c.title[locale]}
          className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]"
        />
        <p dir="auto" className="mt-4 font-quote text-lg leading-relaxed text-bone-muted sm:text-xl">
          {c.lead[locale]}
        </p>
      </div>

      <ol className="grid gap-5 md:grid-cols-3">
        {c.items.map((item, i) => (
          <MotionReveal as="li" key={i} delay={i * 0.08}>
            <div className="card-glow trace-card relative flex h-full flex-col rounded-card border border-line bg-ink-raised p-7">
              <span className="ltr-num font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                dir="auto"
                className="mt-4 font-display text-2xl font-medium text-bone"
              >
                {item.title[locale]}
              </h3>
              <p
                dir="auto"
                className="mt-3 font-quote text-lg leading-relaxed text-bone-muted"
              >
                {item.body[locale]}
              </p>
            </div>
          </MotionReveal>
        ))}
      </ol>
    </section>
  );
}

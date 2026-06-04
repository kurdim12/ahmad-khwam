import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { RevealText } from "./RevealText";
import { SectionLabel } from "./SectionLabel";

export function About({ locale }: { locale: Locale }) {
  const c = copy.about;
  // Illuminated incipit: rubricate the opening word (keeps the word intact — no
  // detached Arabic letters, unlike a Western drop-cap).
  const [incipit, ...restWords] = c.p1[locale].split(" ");
  const p1Rest = restWords.join(" ");

  return (
    <section id="about" data-trace-node="about" className="shell scroll-mt-24 py-20 sm:py-28">
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <div className="mb-5">
            <SectionLabel index={1} label={c.label[locale]} locale={locale} />
          </div>

          <RevealText
            as="h2"
            text={c.title[locale]}
            className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]"
          />

          <MotionReveal delay={0.08}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bone-muted">
              <p dir="auto">
                <span className="font-display text-2xl font-bold text-gold">
                  {incipit}
                </span>{" "}
                {p1Rest}
              </p>
              <p dir="auto">{c.p2[locale]}</p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <figure className="mt-10 [border-inline-start:2px_solid_var(--gold)] ps-5">
              <blockquote
                dir="auto"
                className="font-quote text-[1.65rem] leading-snug text-bone sm:text-[2rem]"
              >
                {c.pullquote[locale]}
              </blockquote>
            </figure>
          </MotionReveal>
        </div>

        {/* Portrait slot — elegant typographic block until the asset arrives */}
        <MotionReveal delay={0.12}>
          <figure className="relative aspect-[3/4] overflow-hidden rounded-card border border-line bg-ink-raised">
            <div className="texture-dots absolute inset-0 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(178,58,46,0.12),transparent)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <span
                aria-hidden
                className="font-display text-[7rem] leading-none text-gold/25 sm:text-[9rem]"
              >
                إنسان
              </span>
              <figcaption className="text-xs uppercase tracking-[0.3em] text-bone-faint">
                {c.portraitNote[locale]}
              </figcaption>
            </div>
          </figure>
        </MotionReveal>
      </div>
    </section>
  );
}

import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";

export function About({ locale }: { locale: Locale }) {
  const c = copy.about;

  return (
    <section id="about" className="shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="eyebrow">{c.label[locale]}</span>
          </div>

          <MotionReveal>
            <h2
              dir="auto"
              className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]"
            >
              {c.title[locale]}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bone-muted">
              <p dir="auto">{c.p1[locale]}</p>
              <p dir="auto">{c.p2[locale]}</p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <figure className="mt-10 [border-inline-start:2px_solid_var(--gold)] ps-5">
              <blockquote
                dir="auto"
                className="font-display text-2xl font-light leading-snug text-bone sm:text-[1.75rem]"
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
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(201,162,75,0.14),transparent)]" />
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

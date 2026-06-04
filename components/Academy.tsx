import { copy } from "@/content/copy";
import { formatDate, heartsLabel } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { getAcademyJournal } from "@/lib/manifest";
import { ArrowIcon, WhatsappIcon } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { SectionLabel } from "./SectionLabel";

export function Academy({ locale }: { locale: Locale }) {
  const c = copy.academy;
  const journal = getAcademyJournal();

  return (
    <section
      id="academy"
      data-trace-node="academy"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="texture-dots pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <div className="shell">
        {/* Positioning */}
        <div className="mb-5">
          <SectionLabel index={4} label={c.label[locale]} locale={locale} />
        </div>

        <MotionReveal>
          <h2
            dir="auto"
            className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-bone sm:text-5xl md:text-6xl"
          >
            {c.positioning[locale]}
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <p dir="auto" className="mt-5 max-w-2xl text-lg text-bone-muted">
            {c.sub[locale]}
          </p>
        </MotionReveal>

        {/* Four pillars */}
        <div className="mt-14">
          <h3 className="eyebrow mb-6">{c.pillarsTitle[locale]}</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pillars.map((p, i) => (
              <MotionReveal as="li" key={p.no} delay={i * 0.07}>
                <div className="card-glow trace-card relative h-full rounded-card border border-line bg-ink-raised p-6">
                  <span className="ltr-num font-display text-sm text-gold">{p.no}</span>
                  <p dir="auto" className="mt-4 font-display text-xl font-medium leading-snug text-bone">
                    {p.title[locale]}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </ul>
        </div>

        {/* Accreditation strip */}
        <MotionReveal delay={0.1}>
          <div className="mt-12 rounded-card border border-line bg-ink-soft px-6 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <span className="eyebrow shrink-0">{c.accreditationTitle[locale]}</span>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {c.accreditation.map((a, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-bone-muted">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-clay" />
                    <span dir="auto">{a[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionReveal>

        {/* دفتر الرحلة — journal */}
        <div className="mt-20">
          <h3 dir="auto" className="font-display text-2xl font-medium text-bone sm:text-3xl">
            {c.journalTitle[locale]}
          </h3>
          <p dir="auto" className="mt-2 text-bone-muted">{c.journalLead[locale]}</p>

          {journal.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {journal.map((item, i) => (
                <MotionReveal as="li" key={item.shortcode ?? i} delay={(i % 3) * 0.07}>
                  <a
                    href={item.permalink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glow trace-card group relative flex h-full flex-col rounded-card border border-line bg-ink-raised p-6"
                  >
                    {item.date ? (
                      <span className="ltr-num text-xs text-bone-faint">
                        {formatDate(item.date, locale)}
                      </span>
                    ) : null}
                    <p dir="auto" className="mt-2 line-clamp-3 font-quote text-xl leading-snug text-bone">
                      {item.caption}
                    </p>
                    <span className="mt-auto flex items-center justify-between gap-3 pt-5">
                      {item.hearts > 0 ? (
                        <span dir="auto" className="text-xs text-gold">
                          {heartsLabel(item.hearts, locale)}
                        </span>
                      ) : (
                        <span />
                      )}
                      <ArrowIcon className="h-4 w-4 text-bone-faint rtl:-scale-x-100" />
                    </span>
                  </a>
                </MotionReveal>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Participant voices — labeled placeholders, never invented */}
        <div className="mt-20">
          <h3 dir="auto" className="font-display text-2xl font-medium text-bone sm:text-3xl">
            {c.voicesTitle[locale]}
          </h3>
          <p dir="auto" className="mt-2 max-w-2xl text-bone-muted">{c.voicesLead[locale]}</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <MotionReveal as="li" key={i} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-card border border-dashed border-line/70 p-6">
                  <span
                    dir="auto"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs text-gold"
                  >
                    {c.voicePlaceholder[locale]}
                  </span>
                  <p dir="auto" className="mt-4 text-sm leading-relaxed text-bone-faint">
                    {c.voicePlaceholderNote[locale]}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </ul>
        </div>

        {/* Enroll CTA */}
        <MotionReveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <a
              href={copy.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
            >
              <WhatsappIcon className="h-5 w-5" />
              {c.enroll[locale]}
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

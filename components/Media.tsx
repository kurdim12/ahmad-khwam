import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { getMedia } from "@/lib/manifest";
import { ArrowIcon } from "./icons";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

const kindLabel = (kind: string | undefined, locale: Locale) => {
  if (kind === "podcast") return locale === "ar" ? "بودكاست" : "Podcast";
  if (kind === "radio") return locale === "ar" ? "إذاعة" : "Radio";
  if (kind === "interview") return locale === "ar" ? "حوار" : "Interview";
  return locale === "ar" ? "ظهور" : "Appearance";
};

export function Media({ locale }: { locale: Locale }) {
  const items = getMedia();

  return (
    <section id="media" data-trace-node="media" className="scroll-mt-24 border-y border-line bg-ink-soft py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          index={3}
          label={copy.media.label[locale]}
          title={copy.media.title[locale]}
          lead={copy.media.lead[locale]}
          locale={locale}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <MotionReveal as="article" key={item.shortcode ?? i} delay={i * 0.08}>
              <a
                href={item.permalink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow trace-card group relative flex h-full flex-col rounded-card border border-line bg-ink-raised p-6"
              >
                <span className="eyebrow">{kindLabel(item.kind, locale)}</span>
                <h3
                  dir="auto"
                  className="mt-3 font-display text-2xl font-medium text-bone"
                >
                  {item.outlet || item.caption}
                </h3>
                {item.caption && item.outlet ? (
                  <p dir="auto" className="mt-2 line-clamp-2 text-sm text-bone-muted">
                    {item.caption}
                  </p>
                ) : null}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs text-bone-faint transition-colors group-hover:text-bone">
                  {copy.media.listen[locale]}
                  <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                </span>
              </a>
            </MotionReveal>
          ))}

          {/* Reserved slots for upcoming appearances — clearly labeled, not invented. */}
          {[copy.media.soonRadio, copy.media.soonInterview].map((label, i) => (
            <MotionReveal
              as="article"
              key={`soon-${i}`}
              delay={(items.length + i) * 0.08}
            >
              <div className="flex h-full flex-col rounded-card border border-dashed border-line/70 bg-transparent p-6">
                <span className="eyebrow text-bone-faint">{copy.media.label[locale]}</span>
                <h3 dir="auto" className="mt-3 font-display text-xl font-medium text-bone-muted">
                  {label[locale]}
                </h3>
                <p dir="auto" className="mt-auto pt-6 text-xs text-bone-faint">
                  {copy.media.soonNote[locale]}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

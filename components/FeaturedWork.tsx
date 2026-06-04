import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { getFeatured } from "@/lib/manifest";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import { WorkCard } from "./WorkCard";

export function FeaturedWork({ locale }: { locale: Locale }) {
  const items = getFeatured();
  const features = items.filter((i) => (i.rank ?? 99) <= 2);
  const rest = items.filter((i) => (i.rank ?? 99) > 2);

  return (
    <section id="work" data-trace-node="work" className="shell scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        index={2}
        label={copy.work.label[locale]}
        title={copy.work.title[locale]}
        lead={copy.work.lead[locale]}
        locale={locale}
      />

      {items.length === 0 ? (
        <p className="text-bone-faint" dir="auto">
          {copy.work.empty[locale]}
        </p>
      ) : (
        <div className="space-y-6">
          {features.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((item, i) => (
                <MotionReveal as="article" key={item.shortcode ?? i} delay={i * 0.08}>
                  <WorkCard item={item} locale={locale} feature />
                </MotionReveal>
              ))}
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item, i) => (
                <MotionReveal as="article" key={item.shortcode ?? i} delay={(i % 3) * 0.07}>
                  <WorkCard item={item} locale={locale} />
                </MotionReveal>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

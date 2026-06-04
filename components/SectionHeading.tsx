import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { SectionLabel } from "./SectionLabel";

export function SectionHeading({
  index,
  label,
  title,
  lead,
  locale,
}: {
  index?: number;
  label: string;
  title: string;
  lead?: string;
  locale: Locale;
}) {
  return (
    <MotionReveal className="mb-12 max-w-prose">
      <div className="mb-5">
        <SectionLabel index={index} label={label} locale={locale} />
      </div>
      <h2
        dir="auto"
        className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p dir="auto" className="mt-4 text-base leading-relaxed text-bone-muted sm:text-lg">
          {lead}
        </p>
      ) : null}
    </MotionReveal>
  );
}

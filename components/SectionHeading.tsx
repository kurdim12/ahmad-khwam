import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { RevealText } from "./RevealText";
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
      <RevealText
        as="h2"
        text={title}
        className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]"
      />
      {lead ? (
        <p dir="auto" className="mt-4 text-base leading-relaxed text-bone-muted sm:text-lg">
          {lead}
        </p>
      ) : null}
    </MotionReveal>
  );
}

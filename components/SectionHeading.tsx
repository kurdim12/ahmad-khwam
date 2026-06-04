import { MotionReveal } from "./MotionReveal";

export function SectionHeading({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <MotionReveal className="mb-12 max-w-prose">
      <div className="mb-4 flex items-center gap-3">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="font-display text-3xl font-medium leading-tight text-bone sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-bone-muted sm:text-lg">
          {lead}
        </p>
      ) : null}
    </MotionReveal>
  );
}

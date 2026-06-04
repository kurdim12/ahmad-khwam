import { formatIndex } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

/**
 * Editorial section marker: a numbered index, a gold node, a hairline rule, and the
 * label. Numbers render in locale digits. Tracking on the label is Latin-only (set in CSS).
 */
export function SectionLabel({
  index,
  label,
  locale,
}: {
  index?: number;
  label: string;
  locale: Locale;
}) {
  return (
    <div className="flex items-center gap-3">
      {typeof index === "number" ? (
        <span className="ltr-num font-display text-xs text-gold">
          {formatIndex(index, locale)}
        </span>
      ) : null}
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="eyebrow">{label}</span>
      <span aria-hidden className="hairline ms-1 hidden max-w-24 flex-1 sm:block" />
    </div>
  );
}

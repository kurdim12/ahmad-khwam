import type { Locale } from "./i18n";

const numberLocale = (locale: Locale) => (locale === "ar" ? "ar-JO" : "en-US");

/** Format an integer with locale digits (Arabic-Indic in `ar`). */
export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(numberLocale(locale), {
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Metrics → meaning. Engagement (likes + comments) becomes a "trace in N hearts".
 * The number is rendered in locale digits; the framing is never a raw count.
 */
export function heartsLabel(hearts: number, locale: Locale): string {
  const n = formatNumber(hearts, locale);
  return locale === "ar" ? `أثرٌ في ${n} قلب` : `A trace in ${n} hearts`;
}

/** Format an ISO date string into a quiet, locale-aware month-year-ish label. */
export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(numberLocale(locale), {
    year: "numeric",
    month: "long",
  }).format(date);
}

/** Engagement = likes + comments, with a defensive fallback. */
export function heartsOf(item: {
  likes?: number;
  comments?: number;
  engagement?: number;
}): number {
  if (typeof item.engagement === "number" && item.engagement > 0) {
    return item.engagement;
  }
  return (item.likes ?? 0) + (item.comments ?? 0);
}

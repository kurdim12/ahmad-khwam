import { copy } from "@/content/copy";
import { formatDate, heartsLabel } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import type { WorkItem } from "@/lib/manifest";
import { ArrowIcon, HeartIcon } from "./icons";

/**
 * Typography-first work card. The caption IS the face — verbatim, as large display type.
 * A future `cover` sits behind the type at low opacity, never replacing it.
 */
export function WorkCard({
  item,
  locale,
  feature = false,
}: {
  item: WorkItem;
  locale: Locale;
  feature?: boolean;
}) {
  const href = item.permalink || "#";
  const date = item.date ? formatDate(item.date, locale) : "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glow group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-line bg-ink-raised p-7 sm:p-8"
    >
      {item.cover ? (
        <span
          aria-hidden
          className="absolute inset-0 -z-0 bg-cover bg-center opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.14]"
          style={{ backgroundImage: `url(${item.cover})` }}
        />
      ) : null}

      <div className="relative">
        <span className="eyebrow">{copy.work.label[locale]}</span>
        <p
          dir="auto"
          className={`mt-5 line-clamp-3 font-display font-medium leading-[1.3] text-bone ${
            feature ? "text-3xl sm:text-4xl md:text-[2.6rem]" : "text-2xl sm:text-[1.75rem]"
          }`}
        >
          {item.caption}
        </p>
      </div>

      <div className="relative mt-8 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          {item.hearts > 0 ? (
            <span className="inline-flex items-center gap-2 text-sm text-gold">
              <HeartIcon className="h-4 w-4" />
              <span dir="auto">{heartsLabel(item.hearts, locale)}</span>
            </span>
          ) : null}
          {date ? (
            <span className="ltr-num text-xs text-bone-faint">{date}</span>
          ) : null}
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-bone-faint transition-colors duration-300 group-hover:text-bone">
          {copy.work.readMore[locale]}
          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
        </span>
      </div>
    </a>
  );
}

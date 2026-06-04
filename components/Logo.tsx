import Link from "next/link";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

/** Logo mark: a gold dot + the name. The dot is the recurring accent of the whole site. */
export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}#top`}
      className="group inline-flex items-center gap-2.5 text-bone"
      aria-label={copy.nav.brand[locale]}
    >
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_14px_2px_var(--gold-soft)] transition-transform duration-500 ease-editorial group-hover:scale-125"
      />
      <span className="font-display text-lg font-medium tracking-tight">
        {copy.nav.brand[locale]}
      </span>
    </Link>
  );
}

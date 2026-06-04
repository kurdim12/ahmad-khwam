"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/content/copy";
import { otherLocale, type Locale } from "@/lib/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const next = otherLocale(locale);
  // Swap only the leading locale segment, preserve the rest (incl. #hash isn't in pathname).
  const target = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${next}`);

  return (
    <Link
      href={target}
      hrefLang={next}
      aria-label={copy.nav.toggleLabel[locale]}
      className="group inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-line px-3 text-sm font-medium text-bone-muted transition-colors duration-300 hover:border-gold/40 hover:text-bone"
    >
      <span className="ltr-num leading-none">{copy.nav.toggleTo[locale]}</span>
    </Link>
  );
}

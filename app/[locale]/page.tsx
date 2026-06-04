import { notFound } from "next/navigation";
import { copy } from "@/content/copy";
import { isLocale, type Locale } from "@/lib/i18n";
import { About } from "@/components/About";
import { Academy } from "@/components/Academy";
import { AudienceField } from "@/components/AudienceField";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Helps } from "@/components/Helps";
import { Hero } from "@/components/Hero";
import { Media } from "@/components/Media";
import { TraceBand } from "@/components/TraceBand";
import { CursorTrace } from "@/components/effects/CursorTrace";
import { ScrollTrace } from "@/components/effects/ScrollTrace";
import { flags } from "@/lib/flags";

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {copy.nav.skip[locale]}
      </a>

      {flags.scrollTrace ? <ScrollTrace /> : null}
      {flags.cursorTrace ? <CursorTrace /> : null}

      <Header locale={locale} />

      <main className="relative">
        <Hero locale={locale} />
        <AudienceField locale={locale} />
        <About locale={locale} />
        <Helps locale={locale} />
        <FeaturedWork locale={locale} />
        <Media locale={locale} />
        <Academy locale={locale} />
        <TraceBand locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}

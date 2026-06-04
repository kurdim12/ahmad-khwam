import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { body, display, serifArabic, serifLatin } from "../fonts";
import { copy } from "@/content/copy";
import { dir, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const SITE = "https://ahmadkahtan.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "ar") as Locale;
  const title = copy.meta.title[locale];
  const description = copy.meta.description[locale];

  return {
    metadataBase: new URL(SITE),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en", "x-default": "/ar" },
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: `${SITE}/${locale}`,
      locale: locale === "ar" ? "ar_JO" : "en_US",
      siteName: copy.nav.brand[locale],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ locale }: { locale: Locale }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: copy.nav.brand[locale],
        alternateName: "Ahmad Kahtan",
        jobTitle: copy.hero.eyebrow[locale],
        url: `${SITE}/${locale}`,
        sameAs: [copy.links.instagram, copy.links.youtube],
      },
      {
        "@type": "EducationalOrganization",
        name: "Think Quality Academy",
        description: copy.academy.sub[locale],
        url: `${SITE}/${locale}#academy`,
        founder: { "@type": "Person", name: copy.nav.brand[locale] },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${display.variable} ${body.variable} ${serifArabic.variable} ${serifLatin.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <JsonLd locale={locale} />
        {children}
      </body>
    </html>
  );
}

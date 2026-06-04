"use client";

import { useEffect, useState } from "react";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const anchors = [
  { id: "about", label: copy.nav.about },
  { id: "work", label: copy.nav.work },
  { id: "media", label: copy.nav.media },
  { id: "academy", label: copy.nav.academy },
  { id: "contact", label: copy.nav.contact },
] as const;

export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on resize to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ease-editorial ${
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="shell flex h-[4.5rem] items-center justify-between gap-4"
          aria-label={copy.nav.brand[locale]}
        >
          <Logo locale={locale} />

          <ul className="hidden items-center gap-1 md:flex">
            {anchors.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  className="relative rounded-full px-3.5 py-2 text-sm text-bone-muted transition-colors duration-300 hover:text-bone focus-visible:text-bone"
                >
                  {a.label[locale]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle locale={locale} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={copy.nav.menu[locale]}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-bone-muted transition-colors hover:text-bone md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-3 h-px bg-current transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile sheet */}
        <div
          className={`overflow-hidden border-line bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 ease-editorial md:hidden ${
            open ? "max-h-80 border-t" : "max-h-0"
          }`}
        >
          <ul className="shell flex flex-col gap-1 py-3">
            {anchors.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-bone-muted transition-colors hover:bg-ink-raised hover:text-bone"
                >
                  {a.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

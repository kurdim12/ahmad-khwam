import { copy } from "@/content/copy";
import { formatIndex } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { InstagramIcon, WhatsappIcon, YoutubeIcon } from "./icons";
import { MotionReveal } from "./MotionReveal";

export function Footer({ locale }: { locale: Locale }) {
  const c = copy.contact;
  const year = new Date().getFullYear();

  const socials = [
    { href: copy.links.whatsapp, label: c.whatsapp[locale], Icon: WhatsappIcon },
    { href: copy.links.instagram, label: c.instagram[locale], Icon: InstagramIcon },
    { href: copy.links.youtube, label: c.youtube[locale], Icon: YoutubeIcon },
  ];

  return (
    <footer id="contact" data-trace-node="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="shell flex flex-col items-center text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="ltr-num font-display text-xs text-gold">
            {formatIndex(5, locale)}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow">{c.label[locale]}</span>
        </div>

        <MotionReveal>
          <p
            dir="auto"
            className="mx-auto max-w-2xl font-quote text-[1.7rem] leading-relaxed text-bone sm:text-[2.1rem]"
          >
            {c.dua[locale]}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-bone-muted transition-colors duration-300 hover:border-gold/40 hover:text-bone"
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <div className="mt-14 flex w-full flex-col items-center gap-2 border-t border-line pt-8 text-xs text-bone-faint sm:flex-row sm:justify-between">
          <span dir="auto">
            <span className="ltr-num">© {year}</span> · {c.rights[locale]}
          </span>
          <span dir="auto">{c.built[locale]}</span>
        </div>
      </div>
    </footer>
  );
}

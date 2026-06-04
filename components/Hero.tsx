import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { MotionReveal } from "./MotionReveal";
import { InstagramIcon, VerifiedIcon, YoutubeIcon } from "./icons";

/** Renders his signature trailing «…» as a living gold mark, verbatim text preserved. */
function TrailingStatement({ text }: { text: string }) {
  const idx = text.indexOf("…");
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="ellipsis-trace" aria-label="…">
        <span aria-hidden>.</span>
        <span aria-hidden>.</span>
        <span aria-hidden>.</span>
      </span>
      {text.slice(idx + 1)}
    </>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const c = copy.hero;

  return (
    <section
      id="top"
      data-trace-node="top"
      aria-label={c.sectionLabel[locale]}
      className="relative overflow-hidden"
    >
      {/* Calm gold wash + faint dotted texture behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="texture-dots absolute inset-0 opacity-40" />
        <div className="absolute -top-1/3 start-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(178,58,46,0.10),transparent)]" />
      </div>

      <div className="shell flex min-h-[92svh] flex-col justify-center pb-20 pt-32 sm:pt-36">
        <MotionReveal delay={0.05}>
          <p className="eyebrow mb-6" dir="auto">
            {c.eyebrow[locale]}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <h1 className="flex flex-wrap items-end gap-x-4 gap-y-2 font-display text-[3.25rem] font-semibold leading-[0.95] text-bone sm:text-7xl md:text-8xl">
            <span dir="auto" className="relative inline-block">
              {c.name[locale]}
              {/* hand-drawn gold underline — the first trace */}
              <svg
                aria-hidden="true"
                className="draw-underline absolute inset-x-0 -bottom-2 h-3 w-full text-gold sm:-bottom-3"
                viewBox="0 0 600 14"
                fill="none"
                preserveAspectRatio="none"
                style={{ ["--len" as string]: "640" }}
              >
                <path
                  d="M4 9C110 3 210 13 320 7S520 4 596 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            <span
              className="inline-flex items-center pb-2 text-gold"
              title={c.verified[locale]}
              aria-label={c.verified[locale]}
            >
              <VerifiedIcon className="h-7 w-7 sm:h-9 sm:w-9" />
            </span>
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <p
            dir="auto"
            className="mt-8 max-w-2xl font-quote text-[1.7rem] leading-snug text-bone-muted sm:text-[2.1rem]"
          >
            <TrailingStatement text={c.statement[locale]} />
          </p>
        </MotionReveal>

        <MotionReveal delay={0.28}>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <a
                href={copy.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
                {c.ctaInstagram[locale]}
              </a>
              <a
                href={copy.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-bone transition-colors duration-300 hover:border-gold/40"
              >
                <YoutubeIcon className="h-[18px] w-[18px]" />
                {c.ctaYoutube[locale]}
              </a>
            </div>

            <div className="flex items-center gap-3 ps-0 sm:ps-6 sm:[border-inline-start:1px_solid_var(--line)]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay" />
              <span className="text-sm text-bone-faint" dir="auto">
                {c.followers[locale]}
              </span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

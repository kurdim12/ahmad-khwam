import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm-ink editorial palette
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          raised: "var(--ink-raised)",
        },
        bone: {
          DEFAULT: "var(--bone)",
          muted: "var(--bone-muted)",
          faint: "var(--bone-faint)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
          deep: "var(--gold-deep)",
        },
        clay: "var(--clay)",
        line: "var(--line)",
      },
      fontFamily: {
        // Headings: Latin glyphs resolve to Newsreader, Arabic glyphs to Aref Ruqaa.
        display: ["var(--font-serif-latin)", "var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // His voice: Latin glyphs resolve to Newsreader, Arabic glyphs to Amiri.
        quote: ["var(--font-serif-latin)", "var(--font-serif-ar)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
        shell: "76rem",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        lift: "0 24px 60px -30px rgba(36,26,15,0.45)",
        glow: "0 0 0 1px var(--gold-soft), 0 18px 50px -28px rgba(36,26,15,0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%, 1%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s var(--ease, cubic-bezier(0.22,1,0.36,1)) both",
      },
    },
  },
  plugins: [],
};

export default config;

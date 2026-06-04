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
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        latin: ["var(--font-latin)", "serif"],
      },
      maxWidth: {
        prose: "68ch",
        shell: "76rem",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(0,0,0,0.65)",
        glow: "0 0 0 1px var(--gold-soft), 0 18px 50px -24px rgba(201,162,75,0.35)",
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

import {
  Reem_Kufi,
  IBM_Plex_Sans_Arabic,
  Amiri,
  Newsreader,
} from "next/font/google";

/** Geometric Kufi — brand & structure: the name, nav, section titles. */
export const display = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Clean Arabic body — functional UI text; carries Latin numerals/handles cleanly. */
export const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/** Classical Naskh — reserved for HIS words: quotes, the dua, captions. Literary gravitas. */
export const serifArabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-ar",
  display: "swap",
});

/** Editorial Latin serif — the English counterpart to Amiri for his translated words. */
export const serifLatin = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif-latin",
  display: "swap",
});

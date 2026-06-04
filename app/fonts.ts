import { Reem_Kufi, IBM_Plex_Sans_Arabic } from "next/font/google";

/** Characterful Arabic display — the voice of headings and the logo mark. */
export const display = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Clean, legible Arabic body — also carries Latin numerals/handles cleanly. */
export const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/** Latin display falls back to the same body family for cohesion. */
export const latin = body;

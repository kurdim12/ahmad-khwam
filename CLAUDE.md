# CLAUDE.md — Ahmad Kahtan portfolio build

## What this is

A portfolio website for Ahmad Kahtan — Jordanian researcher/writer/trainer in human behavior — and his Think Quality Academy. Arabic-first, RTL, bilingual. Sticky nav, anchored sections, browsable in any order.

It is NOT a story, a slideshow, scene choreography, or a scroll-jacked experience. If a decision pushes it toward a linear narrative or presentation, the decision is wrong.

Read `docs/PORTFOLIO.md` first, fully — it has the exact sitemap, section specs, copy (verbatim Arabic), design language, and content rules. Build to it.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- shadcn/ui spirit as the component base (hand-built primitives, re-skinned — no default look)
- Framer Motion for restrained in-view reveals and hover states only
- Fonts: high-quality typefaces via `next/font/google` — distinctive Arabic display (Reem Kufi) + clean Arabic body (IBM Plex Sans Arabic). Never system/Arial for Arabic.
- i18n: `app/[locale]/` with `ar` default; set `dir`/`lang` in the locale layout; all UI strings in `content/copy.ts` as `{ ar, en }`, lifted verbatim from `docs/PORTFOLIO.md`
- Deploy target: Cloudflare Pages or Vercel

## Chosen visual direction

**Warm-ink editorial dark.** Warm near-black ground, bone text, a single antique-gold accent
(the "gold dot"). Reem Kufi display + IBM Plex Sans Arabic body. Subtle film grain + faint gold
hairlines. Restrained in-view motion. A thinker's portfolio — calm, premium, meaning-driven —
not a flashy influencer page. Tokens live as CSS variables in `app/globals.css`.

## Data

- `content/manifest.json` — curated Instagram content. Fields: `profile, shortcode, permalink, caption, likes, comments, engagement, date, owner, rank` (+ optional `cover`, `video` later).
- `profile === "ahmadkahtan_"` → Featured work (S3), ranks 1–2 as large feature cards, 3–8 standard; rank 9 (the مع معاذ podcast item) → Media strip (S4).
- `profile === "thinkquality_academyy"` → Academy journal (S5 «دفتر الرحلة»).
- Refresh: new Apify export (include `displayUrl`/`videoUrl` next time) → `python tools/apify_to_manifest.py export1.json export2.json --top 9 -o content/manifest.json`

> NOTE: The committed `manifest.json` is seeded only with Ahmad's **verbatim** words sourced from
> the spec. Replace it with the full Apify export when available — every section is data-driven and
> will re-populate automatically.

## Hard rules

1. RTL: logical properties only (`ms/me/ps/pe/start-*/end-*`); never `ml/mr/left/right`. `dir="auto"` on every caption. Numbers/handles/URLs LTR.
2. Content: captions verbatim; never invent quotes. Testimonials = labeled placeholders until real + consented.
3. Metrics → meaning: engagement as «أثرٌ في {n} قلب», followers as «٨٤٫٥ ألف إنسان يستمعون» — `Intl.NumberFormat('ar-JO'|'en-US')`. No raw counts as primary numbers.
4. Motion is restrained: in-view fades, staggered cards, hover lifts. No scroll-jacking, no intro animation. `prefers-reduced-motion` static path is required. An optional cursor-trace flourish (accent color) is phase 5 only, behind a flag.
5. Commit to one bold, cohesive visual direction. Avoid generic AI/SaaS aesthetics.
6. Performance/a11y: Lighthouse ≥ 90 mobile; AA contrast; keyboard focus; semantic landmarks; per-locale metadata + OG + JSON-LD (Person, EducationalOrganization) + hreflang.

## Build phases

1. Scaffold — Next + TS + Tailwind; fonts; tokens as CSS vars; `[locale]` routing (`ar` default); `content/copy.ts`.
2. Frame — sticky header + nav anchors + language toggle + hero (S1) + footer (S6).
3. Static sections — About (S2), Academy pillars/accreditation/placeholder voices + WhatsApp CTA (S5 minus data).
4. Data-driven — Featured work grid (S3) + Media strip (S4) + Academy journal (S5) from `manifest.json`.
5. Polish & ship — motion pass, responsive, a11y, SEO, optional trace flourish, deploy.

## File map

```
docs/PORTFOLIO.md          ← the spec; read first
content/manifest.json      ← curated Instagram data
content/copy.ts            ← all {ar,en} strings from the spec
tools/apify_to_manifest.py ← data pipeline
```

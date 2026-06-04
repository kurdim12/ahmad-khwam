# Ahmad Kahtan — Portfolio Specification

**This is a portfolio website** — sticky navigation, anchored sections, browsable in any order. It is **NOT** a slideshow, a linear story, a scroll-jacked experience, or scene choreography. A visitor lands, understands who Ahmad is in 5 seconds, and can jump straight to his work, the academy, or contact.

Arabic-first (`lang="ar" dir="rtl"`) with an English toggle.

---

## 1. The voice (informs copy & design — NOT the structure)

These facts shape tone only. All quoted Arabic is verbatim from his bio/captions — never rewrite him.

- His bio's first word is **«إنسان»** (human). His professional line (from his podcast intro): **«باحث · كاتب · مدرّب في السلوك الإنساني»** — *Researcher · Writer · Trainer in human behavior.*
- His mission: **«رسالتي … أكون الأثر»** (أثر = the trace that remains). His bio dua: **«اللهم علّمنا ما ينفعنا، وأنفع وأثّر بنا»**.
- His captions trail off in «…» — short, warm, merciful. The site's copy follows that register: short lines, no hype, no "10 hacks" energy.
- **Metrics → meaning:** engagement renders as **«أثرٌ في {likes+comments} قلب»** (*a trace in N hearts*), followers as **«٨٤٫٥ ألف إنسان يستمعون»**. Raw counts never appear as the primary number. Arabic-Indic digits in `ar` (Intl `ar-JO`).
- **Typography-first work cards:** his content is talk, not imagery — so featured posts lead with the caption as large type, not a thumbnail. (Covers, once available, sit behind/beside the type, never replace it.)

---

## 2. Sitemap & sections

**Sticky header:** logo mark (gold dot + أحمد قحطان) · nav anchors: عن أحمد · كلماته · الإعلام · الأكاديمية · تواصل · language toggle.

**S1 — Hero (الرئيسية)**
Big: **أحمد قحطان** (+ verified mark) · eyebrow **«باحث · كاتب · مدرّب في السلوك الإنساني»** · one-line statement **«رسالتي … أكون الأثر.»** · meaning-stat **«٨٤٫٥ ألف إنسان يستمعون»** · CTAs: Instagram (`https://instagram.com/ahmadkahtan_`), YouTube (`https://youtube.com/@ahmadkahtan_`).

**S2 — عن أحمد (About)**
Compact: 2 short paragraphs max. Who he is, what he works on (السلوك الإنساني، التواصل، الإلقاء), founder of Think Quality Academy. Include his line «لنرى بعض المعاني في معانينا». Portrait slot (asset to come; elegant typographic block until then).

**S3 — كلماتٌ تركت أثراً (Featured work)** `[data: profile=ahmadkahtan_]`
The portfolio core. An editorial grid/list of his posts ordered by `rank`:
- **Ranks 1–2** (≈13K & 12K hearts) = two large feature cards spanning wide.
- **Ranks 3–8** = standard cards in a responsive grid.
- Card anatomy: caption verbatim as the headline (Reem Kufi, generous size, `dir="auto"`, clamp ~3 lines) · «أثرٌ في {hearts} قلب» · date · the whole card links to `url` (new tab). Hover: slight lift + gold border glow.
- No thumbnail-first layouts. Type is the face of each card.

**S4 — الإعلام والظهور (Media & appearances)** `[data: rank 9 of ahmadkahtan_ + future entries]`
Small horizontal strip: podcast **مع معاذ** card (its real caption + link), with room for radio (إذاعة هوا اربد) and interviews later. Each: outlet · one-liner · link.

**S5 — Think Quality Academy (الأكاديمية)**
- Positioning: **«أطلق المتحدّث ( الإنسان ) بداخلك»** — keep the parenthesis. Sub: «أول مجتمع متخصّص بتطوير الشخصية والفكر بداخلك».
- Four pillars (from their captions): **كسر حاجز الرهبة · العمق النفسي · أسرار الكاريزما · لغة الإقناع**.
- Accreditation strip: Kensington Academic Pathways · CFP Certified · شهادة بريطانية معتمدة.
- **دفتر الرحلة** `[data: profile=thinkquality_academyy]`: compact journal-style cards (date · caption excerpt · trace-count · link).
- Participant voices: 3 placeholder cards clearly labeled «اقتباس حقيقي + موافقة» — never invent quotes.
- Enroll CTA: **«ابدأ رحلتك»** → `https://wa.me/962791995030`.

**S6 — تواصل (Contact / footer)**
The dua, centered and quiet: «اللهم علّمنا ما ينفعنا، وأنفع وأثّر بنا.» · WhatsApp + Instagram + YouTube · small print.

---

## 3. Visual direction — yours to own

There is **no prescribed palette, typeface, or texture.** Define the visual identity yourself, drawing on the inspiration links in `CLAUDE.md` (Skiper UI, Cult UI, Nucleo, Ali Imam) and award-grade portfolio work. Color, type, texture, and motion style are your creative call — commit to one **bold, cohesive** direction and execute it precisely.

Let it fit *who Ahmad is* (section 1): premium, human, warm, calm, meaning-driven — a thinker's portfolio, not a flashy influencer page. Avoid generic AI/SaaS aesthetics (no default-shadcn look, no template feel).

Hold these — they are craft/function, not aesthetic dictation:
- **Arabic typography quality:** distinctive, high-quality Arabic fonts — pair a characterful display with a clean body. Never system fonts / Arial / Times for Arabic. (Options if useful, your pick: Reem Kufi, Tajawal, IBM Plex Sans Arabic, Aref Ruqaa, El Messiri.)
- **Content-forward, typography-led work cards:** Ahmad's content is *talk*, not imagery, and there are no cover images yet — so cards lead with the caption as type, not a faux thumbnail. (Covers, when added later, sit behind/beside the type.)
- **Metrics → meaning:** engagement as «أثرٌ في {likes+comments} قلب», followers as «٨٤٫٥ ألف إنسان يستمعون». Real numbers, meaning-framed, Arabic-Indic in `ar`. Numbers / handles / URLs stay LTR.
- **Restrained, purposeful motion** with a required `prefers-reduced-motion` static path. **Full RTL** (logical properties; `dir="auto"` on captions). **AA contrast & legibility.**

## 4. Content rules (non-negotiable)

1. Captions verbatim from `content/manifest.json`. No invented or rewritten quotes — his or participants'.
2. Testimonials stay labeled placeholders until real quotes with consent exist.
3. Real numbers, meaning-framed presentation (formulas above).
4. Cover images, when a future export includes them: behind/beside type at low opacity — never replacing the typographic card.

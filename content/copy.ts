import type { Locale } from "@/lib/i18n";

/**
 * All UI strings as { ar, en }. Arabic is lifted VERBATIM from docs/PORTFOLIO.md —
 * never rewrite Ahmad's words. English is a faithful, quiet translation in the same
 * register (short, warm, no hype).
 */
export type Bilingual = { ar: string; en: string };

export const t = (s: Bilingual, locale: Locale) => s[locale];

export const copy = {
  meta: {
    title: {
      ar: "أحمد قحطان — باحث وكاتب ومدرّب في السلوك الإنساني",
      en: "Ahmad Kahtan — Researcher, Writer & Trainer in Human Behavior",
    },
    description: {
      ar: "أحمد قحطان: باحثٌ وكاتبٌ ومدرّبٌ في السلوك الإنساني، ومؤسّس أكاديمية Think Quality. رسالتي … أكون الأثر.",
      en: "Ahmad Kahtan: researcher, writer and trainer in human behavior, and founder of Think Quality Academy. My message … to be the trace that remains.",
    },
  },

  nav: {
    about: { ar: "عن أحمد", en: "About" },
    work: { ar: "كلماته", en: "Words" },
    media: { ar: "الإعلام", en: "Media" },
    academy: { ar: "الأكاديمية", en: "Academy" },
    contact: { ar: "تواصل", en: "Contact" },
    brand: { ar: "أحمد قحطان", en: "Ahmad Kahtan" },
    // The target language, named in its own script (i18n best practice).
    toggleTo: { ar: "English", en: "العربية" },
    toggleLabel: { ar: "التبديل إلى الإنجليزية", en: "Switch to Arabic" },
    skip: { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
    menu: { ar: "القائمة", en: "Menu" },
  },

  hero: {
    sectionLabel: { ar: "الرئيسية", en: "Home" },
    name: { ar: "أحمد قحطان", en: "Ahmad Kahtan" },
    eyebrow: {
      ar: "باحث · كاتب · مدرّب في السلوك الإنساني",
      en: "Researcher · Writer · Trainer in human behavior",
    },
    statement: { ar: "رسالتي … أكون الأثر.", en: "My message … to be the trace." },
    verified: { ar: "حساب موثّق", en: "Verified" },
    followers: { ar: "٨٤٫٥ ألف إنسان يستمعون", en: "84.5K people are listening" },
    ctaInstagram: { ar: "إنستغرام", en: "Instagram" },
    ctaYoutube: { ar: "يوتيوب", en: "YouTube" },
  },

  // Impact centerpiece: the audience as the living trace (real number, representational field).
  audience: {
    label: { ar: "الأثر الحيّ", en: "The living trace" },
    big: { ar: "٨٤٫٥ ألف", en: "84.5K" },
    unit: { ar: "إنسانٍ يستمعون", en: "people listening" },
    lead: {
      ar: "ليسوا رقماً، ولا متابعين. هم أثرٌ يمشي على قدمين.",
      en: "Not a number, not followers. A trace that walks on two feet.",
    },
    caption: {
      ar: "كلُّ علامةٍ هنا تمثّل أناساً مسّهم أثره.",
      en: "Each mark here stands for people his trace has touched.",
    },
  },

  about: {
    label: { ar: "عن أحمد", en: "About" },
    title: { ar: "إنسان، قبل كل شيء.", en: "Human, before anything." },
    p1: {
      ar: "أحمد قحطان باحثٌ وكاتبٌ ومدرّبٌ في السلوك الإنساني. يشتغل على ما يجمعنا حقًّا: التواصل، والإلقاء، وفهم النفس وما يتحرّك خلف الكلمات.",
      en: "Ahmad Kahtan is a researcher, writer and trainer in human behavior. He works on what truly connects us: communication, public speaking, and understanding the self and what moves behind our words.",
    },
    p2: {
      ar: "ومن هذا الشغف وُلدت أكاديمية Think Quality — مساحةٌ لتطوير الإنسان فينا. دعوته بسيطة: لنرى بعض المعاني في معانينا.",
      en: "From that passion came Think Quality Academy — a space to develop the human within us. His invitation is simple: let us see some meanings within our meanings.",
    },
    pullquote: {
      ar: "لنرى بعض المعاني في معانينا",
      en: "Let us see some meanings within our meanings",
    },
    portraitNote: {
      ar: "صورة أحمد — قريبًا",
      en: "Ahmad's portrait — coming soon",
    },
  },

  work: {
    label: { ar: "كلماته", en: "His words" },
    title: { ar: "كلماتٌ تركت أثراً", en: "Words that left a trace" },
    lead: {
      ar: "مختاراتٌ من حديثه — كما قالها، دون تنميق. اضغط أيّ بطاقة لقراءتها في مصدرها.",
      en: "A selection from his talk — as he said it, unpolished. Tap any card to read it at its source.",
    },
    readMore: { ar: "اقرأ على إنستغرام", en: "Read on Instagram" },
    empty: {
      ar: "ستظهر المختارات هنا بمجرّد تحديث البيانات.",
      en: "Featured words will appear here once the data is refreshed.",
    },
  },

  media: {
    label: { ar: "الإعلام والظهور", en: "Media & appearances" },
    title: { ar: "الإعلام والظهور", en: "Media & appearances" },
    lead: {
      ar: "ظهوراتٌ ولقاءات — بودكاست، وإذاعة، وحوارات.",
      en: "Appearances and conversations — podcast, radio, and interviews.",
    },
    listen: { ar: "استمع", en: "Listen" },
    soonRadio: {
      ar: "إذاعة هوا اربد — قريبًا",
      en: "Hawa Irbid Radio — coming soon",
    },
    soonInterview: { ar: "حوارات — قريبًا", en: "Interviews — coming soon" },
    soonNote: {
      ar: "مساحةٌ محفوظة لظهوراتٍ قادمة.",
      en: "A space reserved for upcoming appearances.",
    },
  },

  academy: {
    label: { ar: "Think Quality Academy", en: "Think Quality Academy" },
    positioning: {
      ar: "أطلق المتحدّث ( الإنسان ) بداخلك",
      en: "Release the speaker ( the human ) within you",
    },
    sub: {
      ar: "أول مجتمع متخصّص بتطوير الشخصية والفكر بداخلك",
      en: "The first community dedicated to developing the personality and thought within you",
    },
    pillarsTitle: { ar: "أربع ركائز", en: "Four pillars" },
    pillars: [
      {
        title: { ar: "كسر حاجز الرهبة", en: "Breaking the fear barrier" },
        no: "01",
      },
      { title: { ar: "العمق النفسي", en: "Psychological depth" }, no: "02" },
      { title: { ar: "أسرار الكاريزما", en: "The secrets of charisma" }, no: "03" },
      { title: { ar: "لغة الإقناع", en: "The language of persuasion" }, no: "04" },
    ] as { title: Bilingual; no: string }[],
    accreditationTitle: { ar: "اعتمادات", en: "Accreditation" },
    accreditation: [
      { ar: "Kensington Academic Pathways", en: "Kensington Academic Pathways" },
      { ar: "CFP Certified", en: "CFP Certified" },
      { ar: "شهادة بريطانية معتمدة", en: "Accredited British certificate" },
    ] as Bilingual[],
    journalTitle: { ar: "دفتر الرحلة", en: "Journey journal" },
    journalLead: {
      ar: "من يوميّات الأكاديمية — لحظاتٌ من الطريق.",
      en: "From the academy's days — moments along the way.",
    },
    voicesTitle: { ar: "أصواتُ المشاركين", en: "Participant voices" },
    voicesLead: {
      ar: "نَعِدُكم: لا اقتباس هنا قبل أن يكون حقيقيًّا وبموافقة صاحبه.",
      en: "Our promise: no quote appears here until it is real and shared with consent.",
    },
    voicePlaceholder: {
      ar: "اقتباس حقيقي + موافقة",
      en: "Real quote + consent",
    },
    voicePlaceholderNote: {
      ar: "مكانٌ محفوظٌ لكلمة مشاركٍ حقيقي، تُنشر بموافقته.",
      en: "A slot reserved for a real participant's words, published with their consent.",
    },
    enroll: { ar: "ابدأ رحلتك", en: "Begin your journey" },
  },

  // The turn outward: his mission «أكون الأثر» extended to whoever passes through.
  // Curatorial UI copy — deliberately NOT in the Amiri "his words" voice.
  trace: {
    label: { ar: "الأثر", en: "The trace" },
    title: { ar: "أنت الأثر", en: "You are the trace" },
    body: {
      ar: "هذه ليست صفحةً تُتصفَّح، بل أثرٌ يُترَك. كلُّ من مرَّ من هنا ترك أثراً… وأنت الآن منهم.",
      en: "This is not a page to browse, but a trace to leave. Everyone who passed here left a mark … and now you are one of them.",
    },
    audience: {
      ar: "هم ليسوا رقماً — هم أثره. وأنت تنضمّ إليهم الآن.",
      en: "They are not a number — they are his trace. And now you join them.",
    },
    wall: {
      prompt: { ar: "اترك أثرك", en: "Leave your trace" },
      placeholder: { ar: "اسمك، أو كلمة…", en: "Your name, or a word…" },
      consent: {
        ar: "أوافق على نشر أثري علنًا على هذا الموقع.",
        en: "I agree to publish my trace publicly on this site.",
      },
      privacy: {
        ar: "لا نحفظ سوى ما تكتبه هنا — لا شيء آخر.",
        en: "We store only what you write here — nothing else.",
      },
      submit: { ar: "اترك أثري", en: "Leave my trace" },
      submitting: { ar: "…يُترك", en: "Leaving…" },
      done: {
        ar: "تركتَ أثرك. شكراً لمرورك.",
        en: "You left your trace. Thank you for passing through.",
      },
      pending: {
        ar: "أثرك قيد المراجعة، وسيظهر قريباً.",
        en: "Your trace is under review and will appear soon.",
      },
      localNote: {
        ar: "محفوظٌ على جهازك حتى يُفعَّل الجدار.",
        en: "Saved on your device until the wall goes live.",
      },
      empty: { ar: "كن أوّل من يترك أثراً.", en: "Be the first to leave a trace." },
      error: {
        ar: "تعذّر ترك الأثر الآن. حاول لاحقاً.",
        en: "Couldn't leave the trace right now. Try again later.",
      },
    },
  },

  contact: {
    label: { ar: "تواصل", en: "Contact" },
    dua: {
      ar: "اللهم علّمنا ما ينفعنا، وأنفع وأثّر بنا.",
      en: "O Allah, teach us what benefits us, and let us benefit and leave a trace.",
    },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    instagram: { ar: "إنستغرام", en: "Instagram" },
    youtube: { ar: "يوتيوب", en: "YouTube" },
    rights: {
      ar: "أحمد قحطان · جميع الحقوق محفوظة",
      en: "Ahmad Kahtan · All rights reserved",
    },
    built: {
      ar: "أُنشئ بعناية — عربيٌّ أولًا.",
      en: "Crafted with care — Arabic first.",
    },
  },

  links: {
    instagram: "https://instagram.com/ahmadkahtan_",
    youtube: "https://youtube.com/@ahmadkahtan_",
    whatsapp: "https://wa.me/962791995030",
    instagramHandle: "@ahmadkahtan_",
    academyHandle: "@thinkquality_academyy",
  },
} as const;

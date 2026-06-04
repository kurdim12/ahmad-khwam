import raw from "@/content/manifest.json";
import { heartsOf } from "./format";

export type ManifestItem = {
  profile: string;
  shortcode?: string;
  permalink?: string;
  caption: string;
  likes?: number;
  comments?: number;
  engagement?: number;
  date?: string;
  owner?: string;
  rank?: number;
  outlet?: string;
  kind?: string;
  cover?: string;
  video?: string;
};

export type WorkItem = ManifestItem & { hearts: number };

const AHMAD = "ahmadkahtan_";
const ACADEMY = "thinkquality_academyy";
const MEDIA_RANK = 9;

/** Accept either a bare array or an object with `items` (so the seed `_note` survives). */
function readItems(): ManifestItem[] {
  if (Array.isArray(raw)) return raw as ManifestItem[];
  if (raw && Array.isArray((raw as { items?: unknown }).items)) {
    return (raw as { items: ManifestItem[] }).items;
  }
  return [];
}

const items = readItems();

const byRank = (a: ManifestItem, b: ManifestItem) =>
  (a.rank ?? Number.MAX_SAFE_INTEGER) - (b.rank ?? Number.MAX_SAFE_INTEGER);

const withHearts = (i: ManifestItem): WorkItem => ({ ...i, hearts: heartsOf(i) });

/** S3 — Featured work: ahmadkahtan_ posts excluding the media-strip rank, by rank. */
export function getFeatured(): WorkItem[] {
  return items
    .filter((i) => i.profile === AHMAD && i.rank !== MEDIA_RANK && i.caption.trim())
    .sort(byRank)
    .map(withHearts);
}

/** S4 — Media strip: the مع معاذ podcast (rank 9) plus any future appearances. */
export function getMedia(): WorkItem[] {
  return items
    .filter((i) => i.profile === AHMAD && (i.rank === MEDIA_RANK || i.kind))
    .sort(byRank)
    .map(withHearts);
}

/** S5 — Academy journal «دفتر الرحلة»: thinkquality_academyy posts, by rank. */
export function getAcademyJournal(): WorkItem[] {
  return items
    .filter((i) => i.profile === ACADEMY && i.caption.trim())
    .sort(byRank)
    .map(withHearts);
}

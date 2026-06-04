#!/usr/bin/env python3
"""Convert one or more Apify Instagram-scraper exports into content/manifest.json.

Usage:
    python tools/apify_to_manifest.py export1.json [export2.json ...] --top 9 -o content/manifest.json

Each Apify export is a list of post objects. We keep the fields the site needs,
compute `engagement = likes + comments`, rank within each profile by engagement,
and emit the curated top-N per profile. Captions are copied VERBATIM — never edited.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


def load(paths: list[str]) -> list[dict]:
    posts: list[dict] = []
    for p in paths:
        data = json.loads(Path(p).read_text(encoding="utf-8"))
        if isinstance(data, dict) and "items" in data:
            data = data["items"]
        if not isinstance(data, list):
            raise SystemExit(f"{p}: expected a JSON array of posts")
        posts.extend(data)
    return posts


def normalize(post: dict) -> dict | None:
    owner = (
        post.get("ownerUsername")
        or post.get("owner", {}).get("username")
        or post.get("username")
    )
    if not owner:
        return None
    likes = int(post.get("likesCount") or post.get("likes") or 0)
    comments = int(post.get("commentsCount") or post.get("comments") or 0)
    shortcode = post.get("shortCode") or post.get("shortcode") or ""
    permalink = post.get("url") or (
        f"https://instagram.com/p/{shortcode}" if shortcode else f"https://instagram.com/{owner}"
    )
    item = {
        "profile": owner,
        "shortcode": shortcode,
        "permalink": permalink,
        "caption": (post.get("caption") or "").strip(),  # verbatim
        "likes": likes,
        "comments": comments,
        "engagement": likes + comments,
        "date": (post.get("timestamp") or post.get("date") or "")[:10],
        "owner": owner,
    }
    # Optional media (kept when present so covers can sit behind type later).
    if post.get("displayUrl"):
        item["cover"] = post["displayUrl"]
    if post.get("videoUrl"):
        item["video"] = post["videoUrl"]
    return item


def curate(posts: list[dict], top: int) -> list[dict]:
    items = [n for n in (normalize(p) for p in posts) if n and n["caption"]]
    by_profile: dict[str, list[dict]] = {}
    for it in items:
        by_profile.setdefault(it["profile"], []).append(it)

    out: list[dict] = []
    for profile, group in by_profile.items():
        group.sort(key=lambda x: x["engagement"], reverse=True)
        for rank, it in enumerate(group[:top], start=1):
            it["rank"] = rank
            out.append(it)
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("exports", nargs="+", help="Apify export JSON files")
    ap.add_argument("--top", type=int, default=9, help="top N posts per profile")
    ap.add_argument("-o", "--out", default="content/manifest.json")
    args = ap.parse_args()

    posts = load(args.exports)
    items = curate(posts, args.top)
    payload = {
        "_seedNote": "Generated from Apify export(s). Captions are verbatim.",
        "items": items,
    }
    Path(args.out).write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Wrote {len(items)} items to {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

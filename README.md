# The Daily Shelf

A tiny, zero-infra static content site (Next.js, static export) that publishes
free, genuinely-useful how-to guides and funnels readers to done-for-you
**ebooks, kids activity printables, and courses** on Gumroad.

It is auto-fed by the Money Machine pipeline's SEO content agent (`agents/content.py`):
each live product gets a couple of topical articles whose CTA links to the
product. Same zero-infra model as `notion-student-hub` — the two sites cover
different product niches so each stays topically focused.

## Deploy (one-time)
1. Import this repo in Vercel (Framework preset: Next.js — defaults work).
2. After the first deploy, set `site.url` in `lib/site.ts` to the real domain.

## Local
`npm install && npm run build` → static output in `out/`.

# Distil

A personal library of distilled book ideas — read closely, boiled down, and wired together so ideas talk to each other. Built with [Astro](https://astro.build). Content is plain Markdown, so writing a new summary is just adding a file.

This is **Phase 1**: a fast, static reading experience that deploys free on Vercel. The data model is already designed to grow into logins, reading stats, and subscriptions without a rewrite (see Roadmap).

---

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Adding a summary (your weekly ritual)

1. Copy `summary-template.md` into `src/content/summaries/`.
2. Rename it to a slug, e.g. `thinking-fast-and-slow.md`. **The filename is the URL** and the id other books use to link to it.
3. Fill in the frontmatter and write the body. Save. That's it — it appears in the library, its topics get pages, and any `connections` render as link cards.

The frontmatter is the important part — it feeds both the website **and** your analog Zettelkasten:

- `keyPrinciples` → atomic notes, each with a stable `#id` you can cite from a physical card.
- `connections` → the links between books. This is the synthesis layer no summary app does well; it's your differentiator.

## Project structure

```
src/
  content/
    summaries/          ← your Markdown summaries live here (this is the DB)
  content.config.ts     ← the schema for a summary (frontmatter contract)
  layouts/BaseLayout.astro
  components/SummaryCard.astro
  pages/
    index.astro         ← library + "Idea of the day"
    summaries/[...slug].astro   ← the reading view
    topics/             ← auto-generated topic pages
  styles/global.css     ← the whole design system (CSS variables, light/dark)
summary-template.md     ← copy this to write a new summary
```

To re-skin the site, edit the CSS variables at the top of `src/styles/global.css`.

---

## Deploy to GitHub + Vercel

Create the repo (empty, no README) on GitHub, then from this folder:

```bash
git remote add origin https://github.com/<you>/distil.git
git branch -M main
git push -u origin main
```

Then connect Vercel:

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** the `distil` repo.
2. Vercel auto-detects Astro — no config needed. Framework: *Astro*, Build: `astro build`, Output: `dist`.
3. Click **Deploy**. Every future `git push` redeploys automatically.

Once live, set your real domain in `astro.config.mjs` (`site:`) so the sitemap and social tags are correct.

---

## Roadmap

**Phase 1 — reading (this repo).** Static, fast, free. Markdown in, polished reading out.

**Phase 2 — engagement.** Add a database + auth (Supabase or Vercel Postgres both have generous free tiers) for logins, reading progress, streaks, and spaced-repetition resurfacing of `keyPrinciples`. Astro adds interactive React "islands" only where needed — no rewrite.

**Phase 3 — subscriptions.** Add Stripe on top of the existing auth. A weekend once Phase 2 exists.

The single decision that makes all three phases share one codebase: **every summary is richly-structured Markdown**, so the static site and the future app read from the same well-typed source.

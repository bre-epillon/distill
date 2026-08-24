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

## The data model: sources and notes

Two collections, two kinds of thing:

- **`summaries/`** — a **source** you consumed: a book, article, or video (`kind:`). Carries provenance and your long-form take.
- **`notes/`** — one **atomic idea**, one file. Carries meaning. This is what the graph draws.

The split is the whole design. A graph whose nodes are books gives you five fat nodes and vague edges; a graph whose nodes are single claims is a thinking tool. Sources differ only in how you *cite* them — page number, section, timestamp — never in the shape of a note, which is what lets a note from a video and a note from a book connect as equals.

Note links are **typed and directed**, from a deliberately small vocabulary (`src/lib/relations.ts`):

| relation | meaning |
| --- | --- |
| `extends` | takes the other idea further |
| `supports` | is evidence for it |
| `contradicts` | can't both be right |
| `example-of` | is a concrete case of it |
| `prerequisite-of` | the other doesn't work until this holds |

Untyped links are the one real weakness of Obsidian's graph — they decay into "vaguely related." `contradicts` is the highest-value verb here: unresolved tension between two sources is where your own thinking has to show up.

Declare each link **once**, on whichever note it reads more naturally from. The reverse direction is derived at build time, so there's never a pair of frontmatter blocks to keep in sync.

## Your weekly ritual

1. **Add the source.** Copy `summary-template.md` into `src/content/summaries/<slug>.md`. The filename is the URL and the id notes point at.
2. **Split out the ideas.** For each atomic claim, copy `note-template.md` into `src/content/notes/<slug>.md` with `sources: ["<source-slug>"]`. They appear on the source page automatically — nothing to list twice.
3. **Link them.** Add `links:` entries with a `rel:` and a `note:` explaining *why* the edge exists. Pointing at a note that doesn't exist yet is fine: `/graph` lists those under **Loose ends** as your to-write queue, alongside notes with no links at all.

Step 3 is the one that compounds. Steps 1 and 2 are transcription; step 3 is thinking.

## Project structure

```
src/
  content/
    summaries/          ← sources: books, articles, videos
    notes/              ← atomic ideas, one per file (the graph nodes)
  content.config.ts     ← frontmatter contract for both collections
  lib/
    relations.ts        ← the link vocabulary + colors
    graph.ts            ← resolves nodes, edges, backlinks at build time
  layouts/BaseLayout.astro
  components/SummaryCard.astro
  pages/
    index.astro         ← library + "Idea of the day"
    graph.astro         ← the force-directed idea graph
    notes/[id].astro    ← a single note + its typed links and backlinks
    summaries/[...slug].astro   ← the reading view
    topics/             ← auto-generated topic pages
  styles/global.css     ← the whole design system (CSS variables, light/dark)
summary-template.md     ← copy this to add a source
note-template.md        ← copy this to add an atomic note
```

The graph is a hand-rolled force simulation on `<canvas>` — no dependencies. Node color is inherited from its first source, node size is its link count, and the layout is seeded deterministically so it looks the same on every reload and you can build spatial memory of where your ideas live.

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

**Phase 2 — engagement.** Add a database + auth (Supabase or Vercel Postgres both have generous free tiers) for logins, reading progress, streaks, and spaced-repetition resurfacing of individual notes. Astro adds interactive React "islands" only where needed — no rewrite.

**Phase 3 — subscriptions.** Add Stripe on top of the existing auth. A weekend once Phase 2 exists.

The single decision that makes all three phases share one codebase: **every summary is richly-structured Markdown**, so the static site and the future app read from the same well-typed source.

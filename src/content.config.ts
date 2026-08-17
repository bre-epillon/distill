import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The "summaries" collection is the single source of truth for the whole app.
 * Its frontmatter is designed to feed BOTH the reading UI and your analog
 * Zettelkasten: each `keyPrinciples` entry is an atomic note with a stable id,
 * and `connections` are the links between books (your synthesis layer / moat).
 */
const summaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/summaries' }),
  schema: z.object({
    // --- Core ---
    title: z.string(),
    author: z.string(),
    // One distilled sentence — the hook shown on cards and at the top.
    oneLine: z.string(),
    // Longer teaser used on the library cards.
    summary: z.string().optional(),

    // --- Presentation ---
    // An emoji or short glyph used as a lightweight "cover".
    cover: z.string().default('📘'),
    // Accent color (hex) used to tint the card + header for this book.
    accent: z.string().default('#4f46e5'),

    // --- Metadata / stats ---
    topics: z.array(z.string()).default([]),
    readingTime: z.coerce.number().default(6), // minutes to read the summary
    // Your personal 1–5 rating of the book (optional).
    rating: z.number().min(1).max(5).optional(),
    // When you published the summary (drives ordering + "new" badges).
    publishDate: z.coerce.date(),
    // When you actually read the book (optional, for your own records).
    readDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),

    // --- Zettelkasten wiring ---
    // Atomic, linkable notes. `id` should be stable so you can reference it
    // from your analog cards and from spaced-repetition later.
    keyPrinciples: z
      .array(
        z.object({
          id: z.string(),
          text: z.string(),
        }),
      )
      .default([]),
    // Cross-book connections — the synthesis that no summary app does well.
    // `slug` points at another summary; `note` explains the link.
    connections: z
      .array(
        z.object({
          slug: z.string(),
          note: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { summaries };

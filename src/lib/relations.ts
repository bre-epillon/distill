/**
 * The closed link vocabulary for note-to-note edges.
 *
 * Untyped links decay into "vaguely related", which is the one real weakness of
 * Obsidian's graph. Keep this list small — if every edge wants a new verb, the
 * verbs aren't doing any work.
 *
 * `contradicts` is the valuable one: unresolved tension between two sources is
 * where your own thinking has to show up.
 *
 * Lives here rather than in content.config.ts so pages can import it without
 * pulling in Astro's content-config module.
 */
export const RELATIONS = [
  'extends',
  'supports',
  'contradicts',
  'example-of',
  'prerequisite-of',
] as const;

export type Relation = (typeof RELATIONS)[number];

/** Label shown on the reverse edge when a link is rendered as a backlink. */
export const INVERSE_LABEL: Record<Relation, string> = {
  extends: 'extended by',
  supports: 'supported by',
  contradicts: 'contradicted by',
  'example-of': 'has example',
  'prerequisite-of': 'requires',
};

export const RELATION_COLOR: Record<Relation, string> = {
  extends: '#4f46e5',
  supports: '#0ea5a4',
  contradicts: '#e0672f',
  'example-of': '#a855f7',
  'prerequisite-of': '#64748b',
};

export const KIND_LABEL = {
  book: 'Book',
  article: 'Article',
  video: 'Video',
} as const;

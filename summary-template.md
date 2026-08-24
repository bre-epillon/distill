---
# ─────────────────────────────────────────────────────────────
# SOURCE TEMPLATE  (book · article · video)
# Copy this file into src/content/summaries/your-source-slug.md
# The filename (minus .md) becomes the URL and the id that notes
# and other sources reference. Keep it lowercase-with-dashes.
#
# This file is the SOURCE. The atomic ideas from it are separate
# files in src/content/notes/ — see note-template.md.
# ─────────────────────────────────────────────────────────────

title: Source Title
author: Author Name
oneLine: "One distilled sentence — the hook. Quote it if it contains a colon."
summary: "A 1–2 sentence teaser shown on the library card."

kind: book            # book | article | video
# sourceUrl: https://...   # permalink for articles and videos

cover: "📘"          # any emoji — your lightweight cover
accent: "#4f46e5"    # hex color that tints this source's card + page
                     # also colors its notes in the graph, so pick
                     # something you'll recognize as a cluster

topics: ["topic-one", "topic-two"]   # drives the Topics pages + cross-linking
readingTime: 7        # minutes to read YOUR summary
rating: 4             # optional, your personal 1–5
publishDate: 2026-01-01   # when you publish the summary (drives ordering)
readDate: 2026-01-01      # optional, when you consumed the source

# Source-level narrative links: the essay-length "how do these two
# argue with each other" take. Precise note-to-note links live in
# the note files instead.
connections:
  - slug: some-other-source-slug
    note: "How this source agrees with / contradicts / completes that one."
---

## The one idea

Open with the single load-bearing insight of the book, in your voice.

## How it works

The mechanics. What's the argument, the model, the method?

## My take

Your personal verdict — this section is what separates you from an AI summary
farm. What landed? What would you tell a friend?

## Where it gets thin

The steelman of the critics. What does the book overclaim, ignore, or get wrong?
(This is one of the "sections the original book didn't have.")

## The distilled principle

> End with one quotable line someone could pin to their wall.

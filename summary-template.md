---
# ─────────────────────────────────────────────────────────────
# WEEKLY SUMMARY TEMPLATE
# Copy this file into src/content/summaries/your-book-slug.md
# The filename (minus .md) becomes the URL and the id used in
# other books' `connections`. Keep it lowercase-with-dashes.
# ─────────────────────────────────────────────────────────────

title: Book Title
author: Author Name
oneLine: "One distilled sentence — the hook. Quote it if it contains a colon."
summary: "A 1–2 sentence teaser shown on the library card."

cover: "📘"          # any emoji — your lightweight book cover
accent: "#4f46e5"    # hex color that tints this book's card + page

topics: ["topic-one", "topic-two"]   # drives the Topics pages + cross-linking
readingTime: 7        # minutes to read YOUR summary
rating: 4             # optional, your personal 1–5
publishDate: 2026-01-01   # when you publish the summary (drives ordering)
readDate: 2026-01-01      # optional, when you read the book

# Atomic notes — each becomes a card in your Zettelkasten.
# Give every one a stable `id` so you can cite it from analog cards
# and (later) resurface it via spaced repetition.
keyPrinciples:
  - id: short-stable-slug
    text: "A single, self-contained idea stated in your own words."
  - id: another-note
    text: "Another atomic idea."

# The synthesis layer — your moat. Link this book to others by their
# filename/slug and explain WHY they connect.
connections:
  - slug: some-other-book-slug
    note: "How this book agrees with / contradicts / completes that one."
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

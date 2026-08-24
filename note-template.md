---
# ─────────────────────────────────────────────────────────────
# NOTE TEMPLATE — one atomic idea
# Copy into src/content/notes/your-note-slug.md
# The filename becomes the note's global id, the graph label, and
# the target other notes point at. Keep it short and lowercase.
#
# The test for "atomic": if the claim needs an "and", it's two notes.
# ─────────────────────────────────────────────────────────────

claim: "The whole idea in one sentence, in your own words."

# Which sources this came from — filenames in src/content/summaries/.
# Leave empty for your own original thought. Those are the best notes,
# which is why this isn't required.
sources: ["some-source-slug"]

# How to find it again in the original. This is the only field whose
# shape depends on the medium:
#   book    → "p. 84" or "ch. 3"
#   article → "§ Tradeoffs"
#   video   → "18:42"
locator: "p. 1"

topics: ["topic-one"]

# The synthesis layer. Declare each link ONCE, on whichever note it
# reads more naturally from — the reverse direction is generated.
#
#   extends          this note takes that one further
#   supports         this note is evidence for that one
#   contradicts      these two can't both be right (the valuable one)
#   example-of       this note is a concrete case of that one
#   prerequisite-of  that one doesn't work until this one holds
#
# Pointing at a note that doesn't exist yet is fine — the graph page
# lists those under "Loose ends" as a to-write queue.
links:
  - to: another-note-slug
    rel: extends
    note: "Why this edge exists. Write the reasoning, not just the fact."
---

Optional elaboration. Two or three sentences at most — if it needs more, the
extra material is probably its own note with a link back to this one.

Good things to put here: the pressure test you'd apply to the claim, the
counter-example that worries you, or where you've actually used it.

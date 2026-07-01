---
name: weekly-content-research
description: Research the week's top AI news and turn it into a content plan — one long-form video plus five short-form clips. Use when the user wants weekly content research, video topic ideas for their AI news channel, or transcript talking points. Runs in three stages with a topic-approval gate before any transcript points are written, and targets a grade-4 readability score.
---

# Weekly Content Research

Turn the week's AI news into ready-to-film content: **1 long-form video** and **5 short-form clips**, with talking points the creator can riff on (not a full script).

Reference style: fast, punchy weekly AI-news roundups (e.g. "AI News: An INSANE Week… Here's What Matters").

## Golden rules

- **Never skip the approval gate.** Propose topics first. Do not write transcript points until the user replies "approve" (or edits the list).
- **Points, not scripts.** Give short bullet talking points the creator can keep up with and say in their own words. Always leave a `💬 Your view:` prompt so they add their own opinion.
- **Readability = grade 4.** Short lines. Plain words. One idea per line. Verify with the readability script before finishing (see Stage 3).
- **Cite everything.** Every claim needs a source link. No made-up numbers, dates, or quotes. If unsure, mark it `⚠️ verify`.

## Where output goes

Save all files under `content/<YYYY>-W<week>/` (ISO week number). Get the folder name with:

```bash
date +%G-W%V
```

Files in that folder:
- `research.md` — raw findings + source links
- `topics.md` — the proposal shown for approval
- `transcript-points.md` — the final deliverable (written only after approval)

---

## Stage 1 — Research (run this first)

Goal: find the 6–10 most content-worthy AI stories of the **last 7 days**.

1. Run several `WebSearch` queries. Vary them, e.g.:
   - `AI news this week` / `AI announcements <current month year>`
   - `new AI model release <this week>`
   - `OpenAI OR Anthropic OR Google DeepMind news <this week>`
   - `AI product launch / funding / controversy this week`
2. For promising stories, `WebFetch` the source article to confirm the facts (what, who, when, the number that matters).
3. Rank stories by **content potential**, not just importance. A story is strong if it has: a clear hook, a surprising number, a "this changes things" angle, or something people will argue about.
4. Write `research.md`: for each story capture — headline, 1–2 fact bullets, the standout stat/quote, why it matters, and the source URL(s).

Prefer primary sources (company blogs, papers, official posts) over aggregators. Note the publish date so nothing older than a week sneaks in.

## Stage 2 — Propose topics (approval gate)

Fill in `templates/topics-template.md` and save it as `content/<week>/topics.md`, then show it in chat.

- **1 long-form video** = the weekly umbrella. Pick a title with a curiosity hook, an opening hook line, and the running order of stories.
- **5 short-form clips** = the 5 strongest single stories, each able to stand alone in 30–45s. Each needs a hook and the ONE point it makes.

End the message with: *"Reply **approve** to lock these in, or tell me what to swap."* Then stop and wait. Do not continue to Stage 3 on your own.

## Stage 3 — Transcript points (only after approval)

Once approved, fill in `templates/transcript-points-template.md` and save as `content/<week>/transcript-points.md`.

**Long-form** — each story gets **~1 minute of speaking time** (roughly 130–150 words of talking points, about 8–12 short bullets). Give enough to fill the minute without a full script:
- A **hook** line for the first ~10 seconds (video-level).
- Per story: what happened, the key numbers/details, a bit of context, why it matters — as short, plain bullets, one idea each.
- Label each story block with `(~1 min)` so the creator can pace it.
- A **`💬 Your view:`** prompt per story that nudges the creator's opinion (e.g. "Hype or real?", "Who does this hurt?").
- A closing **CTA** line.

**Shorts** — keep each tight for 30–45s: hook + the one point + a `💬 Your view:` + CTA. Do not pad these to a minute; the short format is the point.

**Then check readability** — this is required:

```bash
python .claude/skills/weekly-content-research/scripts/readability.py content/<week>/transcript-points.md
```

Aim for a Flesch-Kincaid grade level of **~4** (pass if ≤ 4.5). If it's higher: split long sentences, swap big words for small ones, cut filler. Re-run until it passes, then report the final score to the user.

---

## Running it every week

This skill is the weekly routine. To run it:
- Invoke `/weekly-content-research` at the start of each week, **or**
- Ask to schedule it (the `/loop` skill or a cron hook can trigger it on a weekly cadence — offer this once the workflow is working).

Each run creates a fresh dated folder, so past weeks stay archived for reference.

# Visual Identity — Product Motion Reel

## Palette

| Token              | Hex       | Use                                                |
| ------------------ | --------- | -------------------------------------------------- |
| `cream`            | `#F2EDE3` | Background base, text on dark surfaces             |
| `cream-warm`       | `#E8DFCE` | Italic text on dark, muted captions                |
| `cream-muted`      | `#B8AE9A` | Secondary text on dark                             |
| `grid-line`        | `rgba(26,38,34,0.06)` | Isometric background grid             |
| `surface`          | `#1A2622` | Primary dark surface (cards, tiles, pills)         |
| `surface-deep`     | `#0F1A17` | Deeper surface for inner contrast                  |
| `surface-edge`     | `rgba(255,255,255,0.06)` | Inner top bevel highlight               |
| `accent`           | `#E87B50` | Buttons, status dots, "today" deltas               |
| `accent-deep`      | `#C0613B` | Hover/pressed accent variant                       |
| `text-dark`        | `#1A2622` | Text on cream surfaces                             |
| `glow-teal`        | `#5DD9D6` | Mascot halo                                        |
| `chip-warm-1`      | `#E8B16C` | Avatar tint                                        |
| `chip-warm-2`      | `#D88660` | Avatar tint                                        |
| `chip-cool-1`      | `#6A8FB5` | Avatar tint                                        |
| `chip-cool-2`      | `#7AA38B` | Avatar tint                                        |
| `chip-warm-3`      | `#C67A5C` | Avatar tint                                        |
| `chip-cool-3`      | `#5E7C7A` | Avatar tint                                        |

## Background

- Warm off-white cream `#F2EDE3`.
- Faint isometric grid: thin lines ~6% opacity (`rgba(26,38,34,0.06)`), ~80px spacing.
- Background is consistent across all scenes — only the floating content changes.

## Surfaces

- Dark forest/charcoal green base `#1A2622`, `#0F1A17` for deeper steps.
- Subtle inner top bevel: `inset 0 2px 0 rgba(255,255,255,0.06)`.
- Soft bottom drop shadow: `0 30px 50px rgba(20,30,25,0.25)`.
- Combined float shadow used on every elevated element:
  `0 24px 40px rgba(15, 22, 18, 0.28), 0 2px 0 rgba(255,255,255,0.05) inset`.

## Typography

- **Italic serif** — `"Playfair Display", "Cormorant Garamond", Georgia, serif`, weight 500 italic.
  - Used for: pill labels, button labels, tab labels, decorative headers.
- **Sans-serif** — `Inter, system-ui, sans-serif`.
  - Used for: data, numbers, body copy, names, emails.

## Corners

- Pills: `999px` (full round)
- Cards / tiles: `28px`
- Big icon tiles: `32px`

## Corner accents

- Small coral LED dot in the top-left corner of "stack" tiles in scene 1.

## Motion character

- Soft, purposeful, slightly playful.
- Primary transitions: vertical push and blur crossfade — "smooth" preset (0.5s, `power2.inOut`).
- Easing palette: `back.out(1.7)` (icon pops), `power3.out` (drops), `power2.out` (subtle slides), `expo.out` (cascade rows), `elastic.out(1, 0.6)` (mascot bounce).

## Scale (portrait 1080x1920)

- Hero numbers: 120–180px.
- Section headings on dark cards: 80–96px.
- Body / pill text: 36–48px.
- Captions / labels: 24–32px.

## What NOT to do

- No hard cuts between scenes.
- No exit animations except in scene 5 final fade.
- No invented colors — use the palette above.
- No `Math.random`, `Date.now`, `repeat: -1`.

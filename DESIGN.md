# Portfolio Design Spec

Calm, technical-editorial look. Cream background, red text, charcoal accent. Large serif display type with italic accent words, clean sans body, mono labels.

## Tokens
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F6EBCE` | Page background |
| `--ink` / `--accent` | `#C12A1B` | Text, rules, buttons, headings |
| `--charcoal` | `#2A2931` | Footer, hover states, italic display words (under 5%) |

No pure white. No dark mode.

## Type
- Display: Instrument Serif, tight leading, italic for accent word.
- Body: Geist. Labels: Geist Mono, uppercase, 12.5px, 0.06em tracking.

## Layout
- Max width 1320px, side padding 40px (20px mobile). Sections 112px apart (72px mobile).
- Hairline 1px rules instead of boxes. Pill buttons.

## Components
- Header: sticky, blurred paper, logo mark, availability dot, nav, Contact pill.
- Hero: three-line serif headline (staggered rise), statement, CTAs, stack spec table.
- Project row: index, serif title, client, category, year. Hover shifts title, shows art preview.
- Case study: facts bar, overview, process, results, learnings, full-bleed next-project band.
- Footer: ink block, big serif CTA, email, socials, live clock.

## Motion
Headline line rise on load, scroll fade-up 20px, row hover. All off under `prefers-reduced-motion`.

## Imagery
Abstract blueprint tiles (`.art--0..3`) are placeholders. Replace with real screenshots, 16:9 hero, 4:3 row preview.

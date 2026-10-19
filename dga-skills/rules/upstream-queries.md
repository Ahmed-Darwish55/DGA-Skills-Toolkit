# UI/UX Pro Max query hygiene (verified 2026-10-08)
The dataset is keyword-matched, not semantic. Query wording decides the whole design system.

## Rules
1. **Describe the subject, not the ambition.** Use what the page is about (ecosystem, nature, conservation, storytelling, government service, map) — never quality adjectives. Verified failure: `"... premium ... government"` returned Liquid Glass + black/gold + Cormorant (luxury); `"environmental nature nonprofit storytelling"` returned nature green + storytelling guidance.
2. 2–5 meaningful terms, one dominant intent per query. Never bundle a checklist.
3. One `--design-system` run per page, plus focused `--domain` runs. Verify `**Found:**` and the top result category before using anything.
4. Retry once with narrower wording on `Found: 0` or off-target output. If still empty, report "no dataset match" and stop; do not loop keywords.
5. Never query with private project data or user content.
6. `design_system.py` has no dial flags; dials (`--motion/--variance/--density`) exist only on `search.py`.

## Query templates for this project family (Arabic RTL environmental / GIS storytelling)
| Purpose | Command |
|---|---|
| System | `search.py "environmental nature conservation storytelling" --design-system -p "<Project>" --motion 7` |
| Pattern | `search.py "Scroll-Triggered Storytelling" --domain landing` |
| Style | `search.py "nature organic editorial immersive" --domain style -n 4` |
| Motion | `search.py "scroll pin storytelling" --domain gsap -n 3` and `search.py "scroll reveal stagger" --domain gsap` |
| Maps / data | `search.py "map geographic comparison" --domain chart` |
| Informational only | `--domain color`, `--domain typography` → quoted as rejected-for-chrome |

## What NOT to take from upstream
- Fonts (Noto/Outfit/Cormorant…): DGA mandates IBM Plex Sans Arabic → [DGA SNAPSHOT: 01-foundations.md §5].
- Hex palettes (`#15803D`, `#D97706`, …): UI chrome uses `references/dga-live/foundations/dga-tokens.css` only.
- "Nature Distilled" terracotta/cream: close to the generic AI tell flagged by frontend-design; scene use only.
- RTL guidance: none exists upstream; use Ahmed rules.

# PROJECT IDENTITY — DGA Skills Toolkit

| Field | Value |
|---|---|
| Product name | **DGA Skills Toolkit** |
| Skill id / install folder | `dga-skills` (`<CLAUDE_CONFIG_DIR>/skills/dga-skills`) |
| Per-project settings | `.claude/dga-skills.json` (legacy `.claude/ahmed-skills.json` migrated by `tools/project_settings.py`) |
| Managed CLAUDE.md block | `<!-- DGA-SKILLS:BEGIN … -->` … `<!-- DGA-SKILLS:END -->` (legacy `AHMED-SKILLS` block replaced in place) |
| Version | see `VERSION` (5.x) |
| Created and developed by | **Ahmed Darwish** |
| Previous name | *Ahmed Skills* (`ahmed-skills`); legacy installs are migrated automatically. |

## Disclaimer (keep verbatim in README, SKILL.md, installer and release notes)

> **Independent project. Not affiliated with, endorsed by, or certified by the Saudi Digital Government Authority (DGA).**
> "DGA" in the name identifies the design system this toolkit follows (DGA Platforms Code, published by DGA on Figma Community); it does not claim approval, partnership or trademark rights. Output produced with the toolkit is described as *DGA-aligned*, never *DGA-certified*.

## Attribution of third-party material (summary; terms in `LICENSES.md`)

| Party | What | How it is used | Status |
|---|---|---|---|
| Saudi Digital Government Authority (DGA) | Platforms Code design system (Figma Community files) | read-only extraction into `references/dga-live/` (values, variants, tokens, template instructions) | source of truth for UI chrome; Figma Community licence of the files **not reviewed** (UNKNOWN); no official status claimed |
| `@platformscode/*` package authors (npm) | `@platformscode/core`, `platformscode-new-react`, `@platformscode/icons` … | referenced as project dependencies, measured, defects catalogued; never vendored or patched | official DGA publisher status **NOT VERIFIED**; `@platformscode/icons` is `UNLICENSED` (not redistributed) |
| Hugeicons | Hugeicons Free (`@hugeicons/core-free-icons`, MIT) | fallback icon source by name mapping | Pro set never bundled or substituted |
| Anthropic | Claude Code, `frontend-design` plugin skill | host runtime; optional upstream skill (invoked only when present) | detection ≠ invocation |
| NextLevelBuilder — UI/UX Pro Max (`nextlevelbuilder/ui-ux-pro-max-skill`, MIT) | optional research skill | installed only by `tools/deps.py setup` with the user's consent, from its own marketplace; never bundled | source + licence verified 2026-10-17 (commit 56ea9cf, v2.15.0) |
| Anthropic — Frontend Design plugin (`claude-plugins-official`, Apache-2.0) | optional art-direction skill | installed only by `tools/deps.py setup` with consent, from the official marketplace; never bundled | verified 2026-10-17 (commit ea10b21) |
| IBM Plex Sans Arabic | typeface named by the design system | loaded by the project | SIL OFL 1.1 |
| GSAP / Three.js | motion / 3D libraries | only when the project installs them and the mode allows | licences of the installed versions apply |

## Ownership and licensing of the toolkit's own files

The rules, tools, installer, patterns, templates, `lib/` adapters, QA engine, docs and test suites are the original work of
Ahmed Darwish and are released under the **MIT licence** (`LICENSE` at the repository root). Third-party material keeps its
own terms (`LICENSES.md`); the DGA design data is used under CC BY 4.0 with attribution.

## Brand / name rules

1. "DGA Skills Toolkit" is the project name chosen by the owner, who approved the public GitHub release on 2026-10-19.
   "DGA" only names the design system the toolkit follows; it is not a registered mark of this project and no formal
   trademark review has been made.
2. No public listing, no claim of DGA approval, no use of DGA logos or the national emblem inside the toolkit.
3. The disclaimer above travels with every distributed copy (README, SKILL.md, installer banner, release notes).
4. Do not present generated pages as officially compliant or certified; the toolkit checks against the published specs only.

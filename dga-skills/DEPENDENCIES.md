# Dependencies — DGA Skills Toolkit (`dga-skills`)

Machine-readable copy: `MANIFEST.json` → `dependencies`. Live status on a given machine: `python3 tools/self_check.py --project <root>`.

## Runtime of the skill itself
| Dependency | Required? | Why | If missing |
|---|---|---|---|
| Claude Code (skills support) | **required** | loads `SKILL.md` | — |
| Python ≥ 3.8 (stdlib only) | **required for installer/self-check/settings helper**; optional for normal answers | `install.py`, `tools/self_check.py`, `tools/project_settings.py` | settings file can be read/written as plain JSON; installer cannot run |
| Network | **not required** | knowledge base is local (`references/dga-live/`) | — |
| Figma / Storybook | **not required** in normal use | only for optional visual comparison | — |

## Optional upstream skills
| Skill | Detection | Fallback when absent | Flag |
|---|---|---|---|
| `ui-ux-pro-max` | `<claude dir>/skills/ui-ux-pro-max/SKILL.md` or `<project>/.claude/skills/ui-ux-pro-max/SKILL.md` + `search.py --help` runs | `rules/design-intelligence.md` | `UPSTREAM_UIUX_NOT_INSTALLED` / `UPSTREAM_UIUX_NOT_RUNNABLE` |
| `frontend-design` (Anthropic plugin `frontend-design:frontend-design`, or local skill) | plugin cache / `installed_plugins.json` / local `SKILL.md`; the session's skill list is final authority | `rules/art-direction.md` | `UPSTREAM_FRONTEND_NOT_INSTALLED` |

Detection ≠ invocation. A report may say "invoked" only when the Skill tool was actually called in that session.

## Per-project packages (never installed without user approval)
| Package | Validated version | Status |
|---|---|---|
| `platformscode-new-react` | 0.1.45 | official publisher NOT VERIFIED |
| `@platformscode/core` | 0.0.52 (nested in the React package) · 0.0.53 top-level seen | loader lacks `setAssetPath`; two copies risk |
| `@platformscode/icons` | 0.0.11 | primary icon source (D1); `UNLICENSED` field |
| `@hugeicons/core-free-icons` | 4.3.5 (MIT) | fallback icons (D2) |
| `@platformscode/react` | 0.1.18 (depends on core 0.0.53) | same vendor findings as 0.0.52 except PKG-INPUT-02 and PKG-MODAL-02, which are fixed in 0.0.53 |
| `@platformscode/core` 0.0.53 standalone | 0.0.53 | usable with the vanilla path (Vue / Svelte / Lit / Next.js) |
| `platformscode-new-angular` | 2.0.0 | not tested (Angular uses the custom-elements build, `lib/angular`) |
| `gsap`, `three`, `@arcgis/core`, `jimu-core` | project-defined | used only if present/approved (`rules/motion-engineering.md`, `rules/project-detection.md`) |

## Dependency states
`tools/self_check.py` reports four distinct states and never changes the machine:
- **NOT INSTALLED** — not found (upstream skill, runtime or package); the documented local fallback applies.
- **DETECTED** — files found but not proven to run (e.g. a skill folder whose script fails `--help`).
- **VERIFIED RUNNABLE** — a probe command succeeded (`python --version`, `node --version`, `npm --version`, `search.py --help`).
- **INVOKED** — recorded only per session when the Skill tool was actually called (never by a check).

Installing an optional dependency (Playwright browsers, `@axe-core/playwright`, `ui-ux-pro-max`, GSAP, Three.js) is always a
user decision: the toolkit prints the exact command (`DEPENDENCIES.md`, `tools/qa/README.md`) and waits for approval. Claude
Code itself needs its own connection; "offline" here means **the DGA knowledge base and the toolkit's checks need no network**
not that the assistant runs offline.

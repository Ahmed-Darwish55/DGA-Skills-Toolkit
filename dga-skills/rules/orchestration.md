# Specialist orchestrator: what is actually installed?
Never fake upstream execution. `dga-skills` (DGA Skills Toolkit) is the coordinator; the three skills are not merged by merely mentioning their names. Run the discovery below at the start of every design task and record the result in the report.

## 1. UI/UX Pro Max — discovery and invocation
- Installed if `python3 ${CLAUDE_SKILL_DIR}/tools/deps.py status` finds it — as the Claude Code plugin `ui-ux-pro-max@ui-ux-pro-max-skill` (skill `ui-ux-pro-max:ui-ux-pro-max`), a user/project `skills/ui-ux-pro-max/SKILL.md`, or a skill synced by Claude Desktop / Cowork (`<claude dir>/skills/synced/<bucket>/ui-ux-pro-max`, listed in that bucket's `manifest.json`), or a skill provided by the host app — AND its `scripts/search.py --help` runs (Python 3 required). Install path (Claude Code only): `tools/deps.py ensure` — automatic, verified source + licence, run by `install.py install`; a turned-off helper is never turned on automatically. In Claude Desktop / Cowork nothing can be installed from a skill (platform limit) — use what is turned on, else the fallback, without asking.
- INVOKE the skill with the Skill tool (`ui-ux-pro-max`), then RUN its scripts. Reading SKILL.md alone is "read", not "invoked".
- Required runs, in this order (see `rules/upstream-queries.md` for query wording):
  1. `search.py "<subject terms>" --design-system -p "<Project>" [--motion n --variance n]`
  2. `search.py "<pattern>" --domain landing`, `--domain style`, `--domain gsap`
  3. `--domain color` / `--domain typography` ONLY to document what upstream suggests; their output is informational and is NOT applied to UI chrome (see §4).
- Record for each run: exact query, flags, result count, top result identity, and whether it was ON-TARGET or OFF-TARGET. An empty result (`Found: 0`) is reported as "no dataset match", retried once with narrower wording, then dropped.
- Known dataset limits (verified 2026-10-08): no RTL rows in `--domain ux`, no animation rows in `--stack react`, IBM Plex Sans Arabic not surfaced by `--domain google-fonts`. Do not keep querying for these; Ahmed rules cover them.
- If missing: flag `UPSTREAM_UIUX_NOT_INSTALLED`, use `rules/design-intelligence.md` fallback, state the reduced capability.

## 2. frontend-design — discovery and invocation
Accept ANY of these as "installed", in priority order:
1. The official Anthropic plugin listed in the session's available skills as **`frontend-design:frontend-design`** (plugin cache: `~/.claude/plugins/cache/claude-plugins-official/frontend-design/...`). This is the normal, preferred source.
2. A local or global `frontend-design/SKILL.md` (optional; NOT required when the plugin is available).
- INVOKE it with the Skill tool (`frontend-design:frontend-design`, or `frontend-design` for the local copy). It is process guidance (plan → review against brief → build → critique), not a dataset; record that it was invoked and the design plan it produced.
Also accepted: a skill synced by Claude Desktop / Cowork (`skills/synced/<bucket>/frontend-design`, in the bucket `manifest.json`) or the host's public skill (`/mnt/skills/public/frontend-design`).
- If neither exists: flag `UPSTREAM_FRONTEND_NOT_INSTALLED`, use `rules/art-direction.md` scorecard. Claude Code: `tools/deps.py ensure` installs it automatically (see SKILL.md §0 item 4). Claude Desktop / Cowork: continue with the fallback; do not ask the user to set anything up.

## 2b. Dependency truth table (report each column separately — never merge them)
| column | meaning | evidence |
|---|---|---|
| core available | `dga-skills` works on its own (local rules + references + tools) | `tools/self_check.py` required parts OK |
| detected | the helper's files/plugin are present; state is one of INSTALLED (+ RUNNABLE) / INSTALLED BUT DISABLED / INSTALLED, NOT RUNNABLE / NOT INSTALLED (Claude Code) / NOT AVAILABLE IN THIS SESSION (Cowork: not installed or turned off — the host hides turned-off skills) | `tools/deps.py status` |
| installed by setup | the helper was installed by `deps.py ensure` (automatic, run by `install.py install`) or `deps.py setup` | `<claude-dir>/dga-skills-install/dependencies-state.json` |
| invoked | the Skill tool was actually called for the helper in this session | the session transcript only |
| host (Cowork / claude.ai) | the helper is synced into the session (`skills/synced/<bucket>/manifest.json`) or provided by the app | `tools/deps.py status` → via `host-synced-skill` / `host-provided-skill` |

## 3. DGA snapshot
`references/dga-live/` is read-only reference material. Never edit it. Treat it as the constraint filter per `rules/dga-guard.md`.

## 4. Precedence when upstream and DGA disagree
- Fonts, colour tokens, spacing, radius, shadows, component anatomy, shell/identity: **DGA wins, always.** Upstream palettes and font pairings are quoted in the research document under "[UPSTREAM DESIGN ADVICE — rejected for UI chrome]". They may inform photography mood, scene grading or illustration only.
- Narrative pattern, section geometry, motion presets, art direction: upstream + Ahmed house rules, tagged [UPSTREAM DESIGN ADVICE] / [AHMED HOUSE].
- Arabic RTL: enforced by `rules/art-direction.md` and `rules/dga-guard.md` regardless of upstream silence.

## 5. Output
Document in `DESIGN-RESEARCH.md` (temporary/approved location): discovery table (skill | invoked? | source path | evidence), every upstream query with result, 3 compositions, palette mapping to DGA, visual critique, risk and source tags.
**Do not install packages or skills without permission.**

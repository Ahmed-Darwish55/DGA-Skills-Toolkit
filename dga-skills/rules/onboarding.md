# Onboarding gate — Design Mode first, then Technology

Runs at the start of every task that **creates or substantially changes UI** in a project. It decides the design mode (`rules/design-modes.md`) and the technology adapter, saves them per project, and reuses them silently afterwards.

## 0. Locate the project and the settings file

- Project root = the nearest folder (from the working directory upward) containing `.git`, `package.json`, `angular.json` or `.claude/`. If none, use the working directory.
- Settings file: `<project root>/.claude/dga-skills.json` (schema `dga-skills/project-settings@2`, see `registry/project-settings.schema.json`). A legacy `.claude/ahmed-skills.json` is migrated by `tools/project_settings.py get` (if both exist with different choices the tool returns `conflict`, exit 4 — tell the user, change nothing, do not re-ask the onboarding questions as a way around it).
- Helper (Python 3, standard library only, works offline): `python3 <skill dir>/tools/project_settings.py get --project <root>` → prints the saved settings or `{"status":"missing"}`. If Python is unavailable, read/write the JSON file directly with the same fields.

## 1. Settings exist → reuse, do not ask

If the file exists and validates: announce in one line, e.g.
`DGA Skills Toolkit — project settings: DGA Exact · React (saved 2026-10-17). Say "change design mode" or "change technology" to switch.`
and continue with the task. **Do not ask the onboarding questions again** in this or later sessions.

If the file exists but is invalid (unknown value, broken JSON): say so, show the problem, and ask only the question whose answer is invalid.

## 2. No settings + UI task → ask, in this exact order

Ask **one question at a time**: the first message contains ONLY the Design Mode question (no technology option list, not even as a preview). Never combine them, never ask technology before mode, never start writing UI code before both answers (or the documented defaults below) exist.

**Question 1 — Design Mode** (ask first, always):

> Which design mode should I use for this project? / تحب أشتغل بأي وضع تصميم في المشروع ده؟
> 1. **DGA Exact** — نسخة مطابقة لمكتبة الحكومة الرقمية (خدمات، نماذج، بوابات)
> 2. **DGA Enhanced** — مكونات DGA كما هي + تكوين وحركة أقوى (صفحات عامة، داشبورد)
> 3. **DGA Creative** — توجيه فني وقصصي حر حول مكونات DGA الصحيحة (حملات، 3D، GIS)

**Question 2 — Technology** (only after Question 1 is answered):

> Which technology is this project? / المشروع بأي تقنية؟
> 1. React · 2. Angular · 3. ArcGIS Experience Builder · 4. Other (name it) · 5. Auto Detect

Use the AskUserQuestion tool when it is available; otherwise ask in plain text and **stop the turn** to wait for the answer.

When the user chooses **Auto Detect**: run `python3 <skill dir>/tools/project_settings.py detect --project <root>`, report the detected stack and evidence (manifest + versions + DGA packages found), and save it with `technology: "auto-detect"` and the `detected` block. If detection finds nothing, say so and ask Question 2 again without the Auto option.

## 3. Save

After both answers (always via the helper, as one standalone command — never Edit/Write on `.claude/dga-skills.json`):
`python3 <skill dir>/tools/project_settings.py set --project <root> --mode <dga-exact|dga-enhanced|dga-creative> --tech <react|angular|arcgis-exb|other|auto-detect> [--tech-other "<name>"]`
Then confirm in one line what was saved and where. Never save values the user did not choose (except the unattended rule in §5, which is labelled).

## 4. Change later

Triggers: "change design mode", "switch to DGA Creative", "غير وضع التصميم", "غير التقنية", "change technology", "reset dga skills settings" (legacy wording "reset ahmed skills settings" still counts).
- If the user already named the new value ("switch to DGA Creative"), do not ask again — save it directly.
- Save **only** with the helper as a single command, e.g. `python3 <skill dir>/tools/project_settings.py set --project <root> --mode dga-creative` (history is appended automatically). Do **not** edit `.claude/dga-skills.json` with Edit/Write or ad-hoc scripts: Claude Code protects files under `.claude/` and may refuse those edits. If even the helper is refused, show the exact command for the user to run.
- Ask only the question being changed when the new value was not named.
- `reset` → `python3 … project_settings.py reset --project <root>`; the next UI task asks again.
- Never restyle already-delivered work silently after a mode change: list the affected files and ask.

## 5. When NOT to ask

Do **not** run the onboarding questions for:
- minor edits: typo/text change, a single CSS value, renaming, a one-line bug fix, comments, formatting;
- questions and explanations ("what is the DGA primary colour?", "which states does Tabs have?");
- reviews/audits that change nothing;
- work outside UI (backend, data scripts, build config).

For these, use the saved settings if present; if absent, answer/edit directly and do not create a settings file. If a minor edit touches DGA components, still follow the component spec.

**Unattended sessions** (scheduled, headless, user unavailable): do not block. Use `dga-exact` + `auto-detect`, state at the top of the report "Assumed DGA Exact + Auto Detect (user not available) — not saved", and do **not** write the settings file.

## 5b. Government or non-government?

There is **no mandatory third question**. The two saved choices plus the project itself normally decide the shell (digital-signature bar, national-portal link, government footer). Ask "Is this a government entity site or a non-government client?" **only** when it materially changes the output and nothing in the brief says so (e.g. the brief asks for the full government shell but the client is a private company). For non-government clients: DGA is a *design reference* they chose, not a compliance obligation — never present the result as government-compliant or certified, and drop government-only chrome (digital signature strip, "official government website" banner) unless they ask for it.

## 6. Record

The final report of each UI task starts with the active settings line and the QA gates required by the mode, each marked PASS / FAIL / NOT VERIFIED with evidence (`rules/design-modes.md`).

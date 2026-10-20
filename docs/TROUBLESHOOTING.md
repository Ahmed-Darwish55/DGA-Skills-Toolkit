**English** | [العربية](TROUBLESHOOTING.ar.md)

# Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `ABORT: package integrity check failed: modified …` | a file under `dga-skills/` changed after the last seal | if you changed it on purpose: `python3 build.py`; otherwise re-download — the installer is protecting you |
| `ABORT: installed version … is newer than package` | downgrade attempt | use `--force` only if you really want the older version |
| `conflict` / exit 4 from project settings | both the legacy `.claude/ahmed-skills.json` and `.claude/dga-skills.json` exist with different values | keep the one you want, delete the other, run again — nothing is merged automatically |
| Claude does not use the skill | skill not installed in this profile, or an old `ahmed-skills` still active | `python3 install.py self-check`; it flags `LEGACY_SKILL_PRESENT` — re-run `install.py install` |
| Mode change ("switch to Creative") not saved | the session edited `.claude/dga-skills.json` directly and Claude Code blocked it as a protected file | say "use dga-skills and change the design mode to Creative", or run `python3 ~/.claude/skills/dga-skills/tools/project_settings.py set --project . --mode dga-creative` |
| `optional ui-ux-pro-max: NOT INSTALLED` although you installed it | a different profile, or the plugin is disabled | `python3 install.py deps status --claude-dir <profile>`; `claude plugin list` |
| `REFUSED (SOURCE …)` during deps setup | marketplace name, plugin entry or licence text did not match | do not override; check the source repository — this is the tamper protection |
| `The claude CLI is not on PATH` (exit 7) | running outside Claude Code (e.g. Cowork sandbox) | use the in-app steps: `python3 install.py deps cowork` |
| New skills not visible after setup | the session was started before the install | start a new Claude Code session or run `/reload-plugins` |
| Cowork upload rejected | ZIP layout or description length | rebuild with `python3 build_cowork.py`; report the exact error (description is 607 chars) |
| `check_dga_props.py` reports UNKNOWN PROP | the code uses a prop the installed package does not have | use the prop from `registry/packages/platformscode-core@<version>.json`; never invent one |
| QA report: R1 FAIL at 390 px LTR (`dga-footer`) | vendor defect PKG-FOOTER-02 | known, attributed; not fixable without patching the package |

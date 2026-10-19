# Installation

DGA Skills Toolkit is one skill folder, `dga-skills/`. You can install it in two places:

| Host | How | Optional helpers |
|---|---|---|
| **Claude Code** (terminal, IDE, desktop Code tab) | `install.py` copies the skill into your Claude profile | installed automatically from their official marketplaces |
| **Claude Desktop / Cowork / claude.ai** | upload one ZIP in **Customize › Skills** | detected when you have turned them on in your account; never installed by the skill |

Arabic versions: [Claude Code](installation/claude-code.ar.md) · [Cowork](installation/cowork.ar.md).

---

## 1. Claude Code

### Requirements

| Need | Why | Check |
|---|---|---|
| Claude Code, signed in | runs the skill | `claude --version` |
| Python 3.8 or newer | installer, self-check, project settings, dependency manager (standard library only) | `python3 --version` · Windows: `py --version` |
| Git | to clone this repository (or download the release ZIP instead) | `git --version` |
| Internet | only for the optional helpers | — |
| Node.js 18+ | only for the QA engine and your own project builds | `node --version` |

### Install — macOS / Linux

```bash
git clone https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit.git
cd DGA-Skills-Toolkit
cat dga-skills/VERSION        # 5.0.3
python3 install.py install    # or: ./install.sh install
```

### Install — Windows

PowerShell:

```powershell
git clone https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit.git
cd DGA-Skills-Toolkit
Get-Content dga-skills\VERSION    # 5.0.3
.\install.ps1 install
```

If PowerShell blocks local scripts, run `powershell -ExecutionPolicy Bypass -File .\install.ps1 install`, or use the Command Prompt wrapper: `install.cmd install`. Both wrappers call `install.py` with `py -3` or `python`.

> The Windows wrappers are not yet confirmed on a real Windows host. Please report any problem.

Without Git, download `DGA-Skills-Toolkit-V5.0.3-FINAL.zip` from the [release page](https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit/releases/tag/v5.0.3), extract it, and run the same install command inside the extracted folder.

### What the install command does

The command asks no questions.

1. **Integrity check.** Every file in `dga-skills/` must match `dga-skills/CHECKSUMS.sha256`. If any file was changed, the install stops and nothing is touched.
2. **Backup.** Existing skill folders and `CLAUDE.md` are copied first, with their SHA-256 recorded.
3. **Install.** The skill goes to `~/.claude/skills/dga-skills`. One managed block is written to `~/.claude/CLAUDE.md`; text outside that block is kept byte for byte.
4. **Legacy migration.** An older install under the previous name (`skills/ahmed-skills`) is backed up and replaced, so two skills never answer the same prompt.
5. **Optional helpers (automatic).** See [§3](#3-optional-helpers).
6. **Start a new Claude Code session** so the skill is loaded.

Use another profile with `--claude-dir <path>` (or the `CLAUDE_CONFIG_DIR` variable). Preview without changing anything: `python3 install.py install --dry-run`.

### Verify

```bash
python3 install.py verify        # installed files match the checksums; one managed block
python3 install.py self-check    # required parts OK, integrity OK, helper status
python3 install.py deps status   # where each optional helper was found
```

Then open any project in Claude Code and type a UI request without naming the skill:

```text
Build a DGA dropdown for a government service form.
```

The skill should start by itself and ask **only** for the design mode. The next reply asks for the technology. Both answers are saved in `.claude/dga-skills.json` in your project. More checks: [PROMPT-EXAMPLES.md › Behaviour checks](PROMPT-EXAMPLES.md#behaviour-checks).

### Everyday commands

| Command | What it does |
|---|---|
| `python3 install.py install` | install or upgrade (backup first) |
| `python3 install.py install --no-deps` | install without the optional helpers |
| `python3 install.py verify` | compare installed files with the checksums |
| `python3 install.py self-check [--project DIR] [--json]` | offline readiness and helper status |
| `python3 install.py deps ensure` | install missing helpers now (verified sources) |
| `python3 install.py list-backups` | list backups |
| `python3 install.py rollback [--backup ID]` | restore a backup, hash-identical |
| `python3 install.py uninstall` | remove the skill and its managed block (backups are kept) |

On Windows, replace `python3 install.py` with `.\install.ps1` or `install.cmd`.

---

## 2. Claude Desktop / Cowork

### Requirements

- A plan where custom skills are available, with **code execution** turned on.
- `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` from the [release page](https://github.com/Ahmed-Darwish55/DGA-Skills-Toolkit/releases/tag/v5.0.3). Check it against `SHA256SUMS-V5.0.3.txt` from the same release.

You can also build the ZIP yourself from a clone (same command on all systems; use `py` instead of `python3` on Windows):

```bash
python3 build.py                          # re-seal the package checksums
python3 build_cowork.py --out release-out # → release-out/DGA-Skills-Toolkit-COWORK-UPLOAD.zip (+ .sha256 and a validation report)
```

### Upload

1. Open Claude (web or desktop app) → **Customize › Skills**.
2. If the legacy skill `ahmed-skills` is listed, turn it **off**.
3. **＋ › Upload skill** → choose the ZIP.
4. Turn **dga-skills** on.
5. Start a new task with a UI request, for example *"Build a DGA service page for a building permit, Arabic first."*

Do not upload `SKILL.md` or reference files separately; everything is inside the ZIP.

### About the ZIP

Cowork accepts uploads of at most about **200 files** and **30 MB** unpacked, with one `SKILL.md` and no `@` in file names. The Cowork ZIP fits these limits **without dropping any content**: reference pages are combined into catalogue files and raw data is packed into `DATA-PACK.json.gz`. The tools read both layouts.

### Platform limitation: helpers in Cowork

A skill running inside Cowork **cannot install or enable other skills**, and the toolkit does not try to work around this. Helpers you have turned on in your account are detected and used; a helper you turned off is reported as turned off, not as missing. If you want the helpers (optional):

| Helper | Licence | How to add in Claude |
|---|---|---|
| Frontend Design (Anthropic) | Apache-2.0 | **Customize › Plugins › Add marketplace** → `anthropics/claude-plugins-official` → `frontend-design` |
| UI/UX Pro Max (nextlevelbuilder) | MIT | **Customize › Plugins › Add marketplace** → `nextlevelbuilder/ui-ux-pro-max-skill` → `ui-ux-pro-max` |

`python3 install.py deps cowork` prints the same steps.

### Verify in Cowork

| # | Do | Pass when |
|---|---|---|
| C1 | Upload the ZIP | it is accepted, and `dga-skills` is listed and on |
| C2 | New task: *"Build a DGA dropdown"* | the skill runs by itself; the first question is the design mode only |
| C3 | Same task | it never asks you to upload `SKILL.md` or references |
| C4 | *"According to the Platforms Code, what states does the Dropdown have?"* | the answer cites the skill's own `references/` files |
| C5 | *"Run the toolkit self-check"* | `required parts: OK; integrity: OK`, with the real helper state |


---

## 3. Optional helpers

| Helper | Publisher | Licence | Used for |
|---|---|---|---|
| Frontend Design | Anthropic | Apache-2.0 | art direction in Enhanced and Creative modes |
| UI/UX Pro Max | nextlevelbuilder | MIT | searchable UI/UX research data |

The toolkit works without them; when one is missing it uses its own local rules and says so in one line.

**Claude Code — automatic.** `install.py install` runs `deps ensure`:

- already installed → left as is; installed but turned off → left off;
- missing → the marketplace name, plugin entry and licence text are verified first, then the helper is installed with the official `claude plugin install` command;
- on any mismatch, or without network, nothing is installed and the built-in fallback is used;
- every step is printed and recorded in `~/.claude/dga-skills-install/dependencies-state.json`.

Opt out with `--no-deps` or `DGA_SKILLS_NO_AUTO_DEPS=1`. If the helpers could not be installed during setup, the skill runs `deps ensure` itself on the first design request (Claude Code asks for permission once).

**Cowork — detection only.** See [§2](#platform-limitation-helpers-in-cowork).


---

## 4. Use the library in a project

```bash
S=~/.claude/skills/dga-skills
python3 $S/tools/find_existing.py --project .                                     # reuse what the project already has
python3 $S/tools/copy_lib.py --framework react --dest src/dga-skills --with-patterns
python3 $S/tools/check_dga_props.py --project .                                   # must print: OK — no invented props
```

Install the DGA packages in **your** project: `npm i platformscode-new-react` (React) or `npm i @platformscode/core` (Angular, vanilla, ArcGIS Experience Builder). See [GETTING-STARTED.md](GETTING-STARTED.md).

## 5. Upgrade, rollback, uninstall

Run `install.py install` from a newer copy to upgrade; a backup is made first. `install.py rollback` restores the newest backup (or `--backup ID`). Downgrades are refused unless you add `--force`. Problems: [TROUBLESHOOTING.md](TROUBLESHOOTING.md).

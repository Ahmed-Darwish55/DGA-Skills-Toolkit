# Security notes — DGA Skills Toolkit

## What the toolkit does on a machine
- **Installer (`install.py`)**: standard library only, no network. Writes only inside the chosen Claude profile (`--claude-dir`, default `~/.claude`): `skills/dga-skills/`, the managed block in `CLAUDE.md`, and `dga-skills-install/` (state + backups). Never runs `npm`, `pip` or any download.
- **Package integrity**: every file is listed in `CHECKSUMS.sha256`; the installer refuses a tampered or unlisted file.
- **ZIP extraction** (`install.py extract --zip … --to …`): refuses absolute paths, `..` segments and symlinks.
- **Rollback**: backups are copied before any change; rollback restores files hash-identical, also after an interrupted install.
- **Project settings** (`.claude/dga-skills.json`): plain JSON validated against `registry/project-settings.schema.json`; conflicting legacy/new files stop migration (exit 4) instead of merging.
- **Optional dependencies** (`tools/deps.py`, `install.py deps …`, `install.py install --setup-deps`): detection is read-only. An install happens only (1) with consent for that dependency — interactive y/N or `--accept <id>` (recorded in `<claude-dir>/dga-skills-install/dependencies-state.json`), (2) from the trusted marketplace in `registry/dependencies.json`, (3) after the fetched source passes the marketplace-name, plugin-entry and licence checks (tampered sources are refused), (4) through the official `claude plugin` CLI. Claude Code itself refuses a non-`anthropics` source named `claude-plugins-official`. Nothing from these dependencies is copied into the toolkit. npm packages (DGA packages, Playwright, GSAP, Three.js) are still installed only by the user in their own project.

## Code that runs in pages
- `lib/core/icons.js` validates icon payloads before registration: only `data:image/svg+xml` SVG without `<script>`, `on*=` handlers, `javascript:` or external references is accepted ; load failures fall back to the mapped Hugeicons Free glyph with a console warning, never to an arbitrary icon.
- `lib/core/dropdown-a11y.js` (opt-in): sets ARIA attributes and keyboard handlers in the component's *open* shadow root; it never injects HTML or styles and self-disables outside the tested package anatomy.
- No `eval`, no remote code loading. Three.js and GSAP are imported only by projects that installed them (`lib/motion` lazy-imports Three.js).

## What is NOT in the package
- No secrets, tokens, `.npmrc` credentials, map-server tokens or personal paths.
- No `node_modules`, no `@platformscode/icons` SVG files (UNLICENSED), no Hugeicons Pro.

## npm audit
Run `npm audit` in your own project — the toolkit does not pin your dependency tree.

## Reporting
Security issues in the toolkit → privately through the repository's Security tab (see `SECURITY.md`). Issues in `@platformscode/*` → that package's maintainers (see `docs/KNOWN-LIMITATIONS.md` in the repository).

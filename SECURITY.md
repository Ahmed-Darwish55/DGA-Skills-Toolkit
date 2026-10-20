**English** | [العربية](SECURITY.ar.md)

# Security

## Reporting
Please report a vulnerability **privately**, not in a public issue: use **Security › Report a vulnerability** on the GitHub repository. If that option is not shown, open an issue that asks for a private contact, without any details of the problem. Include the version (`dga-skills/VERSION`), the steps to reproduce and the impact. Problems inside `@platformscode/*` go to that package's maintainers.

## What the toolkit guarantees
- The installer (`install.py`) uses the standard library only and downloads nothing itself. It writes only inside the chosen Claude profile. The only network use is the optional-helper step, which calls the official `claude plugin` CLI (see below).
- **Tamper refusal.** Every packaged file is checked against `dga-skills/CHECKSUMS.sha256` before install.
- **Backups.** A backup is taken before any change, and rollback restores files hash-identical.
- **Safe ZIP extraction.** Absolute paths, `..` segments and symlinks are refused.
- **Optional helpers** are installed automatically by the one install command (opt out: `--no-deps` / `DGA_SKILLS_NO_AUTO_DEPS=1`) — only from a listed marketplace, after source and licence verification, through the official `claude plugin` CLI. A helper the user turned off is never re-enabled. Nothing is installed from inside Cowork.
- No secrets, tokens or credentials are in the repository.
- Page code: icon payloads are validated (no `<script>`, event handlers, `javascript:` or external references). The dropdown accessibility layer is opt-in and changes attributes only.

Details: [`dga-skills/SECURITY-NOTES.md`](dga-skills/SECURITY-NOTES.md).

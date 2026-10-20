**English** | [العربية](CONTRIBUTING.ar.md)

# Contributing

DGA Skills Toolkit is maintained by Ahmed Darwish. Issues and pull requests are welcome. By contributing you agree that your contribution is released under the project's [MIT License](LICENSE).

For larger changes, open an issue first so the approach can be agreed before you spend time on it.

## Ground rules
1. **Never edit `node_modules`** or vendor packages. Record vendor problems in `dga-skills/registry/packages.json`, with a workaround.
2. **No invented props or states.** Run `python3 dga-skills/tools/check_dga_props.py --project <app>` and expect `OK — no invented props`.
3. **No unverified claims.** "DGA compliant", "100 %" and "official" need the QA evidence the mode requires. A subjective gate is REVIEW REQUIRED, never PASS.
4. **No restricted assets.** Do not commit Figma SVG exports, `@platformscode/icons` SVGs or Hugeicons Pro.
5. **Re-seal after changing the skill.** After any change under `dga-skills/`, run `python3 build.py`. The installer refuses an unsealed package.

## Before a pull request
```bash
python3 build.py                                            # seal checksums + manifest
python3 dga-skills/tools/registry_integrity.py
python3 dga-skills/tools/validate_skill_package.py dga-skills
python3 dga-skills/tools/code_quality_check.py --path .     # 0 findings
python3 install.py install --claude-dir /tmp/dga-profile --no-deps && python3 install.py verify --claude-dir /tmp/dga-profile
```

## Commits
Use one logical change per commit, with a message that says *why*. When a policy changes, update `dga-skills/rules/policies.md`.

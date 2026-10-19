#!/usr/bin/env python3
"""Validate a skill folder or an upload ZIP against the documented Claude skill rules (stdlib only, read-only).

  python3 validate_skill_package.py <skill-folder | skill.zip> [--json] [--profile cowork]

Rules checked (sources: claude.com/docs/skills/how-to, agentskills.io/specification, claude.com/docs/plugins/platform-support):
  ZIP-ROOT      the archive's only top-level entry is the skill folder (<name>/SKILL.md), not loose files
  NAME          frontmatter `name`: lowercase letters, digits, hyphens, ≤ 64 chars, equals the folder name
  DESCRIPTION   frontmatter `description`: present, ≤ 1,024 chars (an older support article says 200 — reported as a WARNING)
  FIELDS        only spec fields in the frontmatter (name, description, license, compatibility, metadata, allowed-tools)
  LENGTH        SKILL.md ≤ 500 lines (docs recommendation)
  REFS          every relative file/folder path SKILL.md points to exists inside the package
  SELF-CONTAINED  SKILL.md and rules/ contain no machine paths (~/.claude/skills/…, /home/…, C:\\Users\\…) and no instruction to
                ask the user to upload SKILL.md / references
  SIZE          ≤ 5,000 files and ≤ 200 MB (Cowork / claude.ai plugin limits — the skill-upload limit itself is not documented)
  SAFE          no symlinks, no absolute or parent paths, no node_modules / __pycache__, no restricted files (Figma SVG exports,
                @platformscode/icons SVGs, Hugeicons Pro)
  --profile cowork adds the Claude Desktop / Cowork upload limits observed on 2026-10-17 (the working upload package's notes:
  uploads were rejected above them; not published as documentation):
  COWORK-ENTRIES ≤ 200 ZIP entries · COWORK-UNCOMPRESSED ≤ 30 MB · COWORK-ONE-SKILL-MD exactly one SKILL.md ·
  COWORK-NAMES file names use only A-Z a-z 0-9 . _ - / (no '@', spaces or non-ASCII)
  REFS also accepts files stored losslessly in the edition's catalogs / DATA-PACK (tools/dga_res.py).
Exit 0 = PASS (warnings allowed), 1 = FAIL.
"""
import sys; sys.dont_write_bytecode = True
import gzip, json, os, re, shutil, tempfile, zipfile

SPEC_FIELDS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}
MACHINE_PATH = re.compile(r"(~/\.claude/skills/|/home/[a-z0-9_-]+/|/Users/[A-Za-z0-9_-]+/|[A-Z]:\\\\Users\\\\|/root/\.claude/)")
ASK_UPLOAD = re.compile(r"(please|ask the user to|have the user)\s+(upload|attach|paste)\s+(the\s+)?(SKILL\.md|references|registr)", re.I)
RESTRICTED = re.compile(r"(figma-icons|@platformscode/icons/|hugeicons-pro|@hugeicons-pro|/png/.*icon)", re.I)


def frontmatter(txt):
    if not txt.startswith("---"):
        return None, "SKILL.md does not start with YAML frontmatter"
    end = txt.find("\n---", 3)
    if end < 0:
        return None, "frontmatter not closed"
    fields = {}
    for line in txt[3:end].strip().splitlines():
        if not line.strip() or line.startswith((" ", "\t", "#")):
            continue
        key, _, value = line.partition(":")
        fields[key.strip()] = value.strip().strip('"').strip("'")
    return fields, None


def packed_paths(root):
    """Logical paths stored in a packed edition (catalog markers + DATA-PACK), so REFS can resolve them."""
    out = set()
    live = os.path.join(root, "references", "dga-live")
    for cat in ("WEB-CATALOG.md", "MOBILE-CATALOG.md", "TEMPLATES-CATALOG.md"):
        file_path = os.path.join(live, cat)
        if os.path.isfile(file_path):
            out |= set(re.findall(r"<!-- DGA-REF:BEGIN (\S+) ", open(file_path, encoding="utf-8").read()))
    file_path = os.path.join(live, "DATA-PACK.json.gz")
    if os.path.isfile(file_path):
        out |= set(json.loads(gzip.decompress(open(file_path, "rb").read()).decode("utf-8"))["files"])
    return out


def check_folder(root, results, zip_mode=False):
    def add(cid, passed, evidence, level="FAIL"):
        results.append({"id": cid, "status": "PASS" if passed else level, "evidence": str(evidence)[:400]})
    skill = os.path.join(root, "SKILL.md")
    if not os.path.isfile(skill):
        add("SKILL-MD", False, "SKILL.md missing at the skill folder root"); return
    txt = open(skill, encoding="utf-8").read()
    fields, err = frontmatter(txt)
    if err:
        add("FRONTMATTER", False, err); return
    name, description = fields.get("name", ""), fields.get("description", "")
    folder = os.path.basename(os.path.normpath(root))
    add("NAME", bool(re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", name)) and len(name) <= 64 and name == folder, f"name={name!r} folder={folder!r}")
    add("DESCRIPTION", 0 < len(description) <= 1024, f"{len(description)} chars (limit 1,024)")
    add("DESCRIPTION-200", len(description) <= 200, f"{len(description)} chars — an older support article states 200; the current docs and spec say 1,024", level="WARNING")
    extra = set(fields) - SPEC_FIELDS
    add("FIELDS", not extra, f"non-spec frontmatter fields: {sorted(extra) or 'none'}")
    n_lines = txt.count("\n") + 1
    add("LENGTH", n_lines <= 500, f"{n_lines} lines")
    body = txt[txt.find("\n---", 3) + 4:]
    refs = set(re.findall(r"`((?:rules|references|registry|patterns|templates|lib|tools|adapters)/[A-Za-z0-9_./@<>-]+)`", body))
    missing = []
    packed = packed_paths(root)
    packed_dirs = {directory for packed_path in packed for directory in [packed_path.rsplit("/", i)[0] for i in range(1, packed_path.count("/") + 1)]}
    exists = lambda reference: os.path.exists(os.path.join(root, reference)) or reference in packed or reference.rstrip("/") in packed_dirs
    for reference in sorted(refs):
        reference_path = reference.split(" ")[0].rstrip(".,;:)")
        if "<" in reference_path or "*" in reference_path:          # templated paths such as registry/packages/platformscode-core@<installed>.json
            base = reference_path.split("<")[0].rstrip("/")
            if base and not (exists(base) or exists(os.path.dirname(base))):
                missing.append(reference_path)
            continue
        if not exists(reference_path):
            missing.append(reference_path)
    add("REFS", not missing, f"{len(refs)} referenced paths ({len(packed)} stored packed); missing: {missing[:8] or 'none'}")
    bad_paths, ask = [], []
    for directory_path, _, file_names in os.walk(root):
        for file_name in file_names:
            relative_path = os.path.relpath(os.path.join(directory_path, file_name), root).replace(os.sep, "/")
            if not (relative_path == "SKILL.md" or relative_path.startswith("rules/")) or not file_name.endswith(".md"):
                continue
            text = open(os.path.join(directory_path, file_name), encoding="utf-8", errors="ignore").read()
            for i, line in enumerate(text.splitlines(), 1):
                if MACHINE_PATH.search(line) and "legacy" not in line.lower() and "e.g." not in line:
                    bad_paths.append(f"{relative_path}:{i}")
                if ASK_UPLOAD.search(line) and not re.search(r"never|do not|don't", line, re.I):
                    ask.append(f"{relative_path}:{i}")
    add("SELF-CONTAINED-PATHS", not bad_paths, f"machine paths in SKILL.md/rules: {bad_paths[:8] or 'none'}")
    add("NO-UPLOAD-REQUEST", not ask, f"instructions asking the user to upload skill files: {ask[:8] or 'none'}")
    files, size, links, junk, restricted = 0, 0, [], [], []
    for directory_path, directory_names, file_names in os.walk(root):
        for directory_name in directory_names:
            if directory_name in ("node_modules", "__pycache__", ".git"):
                junk.append(os.path.relpath(os.path.join(directory_path, directory_name), root))
        for file_name in file_names:
            file_path = os.path.join(directory_path, file_name); relative_path = os.path.relpath(file_path, root).replace(os.sep, "/")
            if os.path.islink(file_path): links.append(relative_path); continue
            files += 1; size += os.path.getsize(file_path)
            if RESTRICTED.search(relative_path) or file_name.lower().endswith((".svg", ".png")) and "icon" in relative_path.lower():
                restricted.append(relative_path)
    add("SIZE", files <= 5000 and size <= 200 * 1024 * 1024, f"{files} files, {size / 1e6:.1f} MB")
    add("SAFE", not links and not junk, f"symlinks {links[:5] or 'none'}; build/cache folders {junk[:5] or 'none'}")
    add("RESTRICTED", not restricted, f"restricted third-party files: {restricted[:5] or 'none'}")
    skill_mds = []
    bad_names = []
    for directory_path, _, file_names in os.walk(root):
        for file_name in file_names:
            relative_path = os.path.relpath(os.path.join(directory_path, file_name), root).replace(os.sep, "/")
            if file_name == "SKILL.md": skill_mds.append(relative_path)
            if not re.fullmatch(r"[A-Za-z0-9._/-]+", relative_path): bad_names.append(relative_path)
    return {"name": name, "descriptionChars": len(description), "files": files, "bytes": size, "skillMdFiles": skill_mds, "badNames": bad_names}


def main():
    if len(sys.argv) < 2:
        print(__doc__); return 2
    target = sys.argv[1]; as_json = "--json" in sys.argv
    cowork = "--profile" in sys.argv and sys.argv[sys.argv.index("--profile") + 1] == "cowork"
    entries = None
    results, meta = [], {}
    if target.endswith(".zip"):
        with zipfile.ZipFile(target) as archive:
            names = archive.namelist(); entries = len(names)
            tops = sorted({entry_name.split("/")[0] for entry_name in names if entry_name.strip("/")})
            bad = [entry_name for entry_name in names if entry_name.startswith("/") or ".." in entry_name.split("/")]
            results.append({"id": "ZIP-ROOT", "status": "PASS" if len(tops) == 1 and f"{tops[0]}/SKILL.md" in names else "FAIL",
                            "evidence": f"top-level entries: {tops[:5]}; SKILL.md at {tops[0] + '/SKILL.md' if tops else '?'}"})
            results.append({"id": "ZIP-PATHS", "status": "PASS" if not bad else "FAIL", "evidence": f"unsafe entries: {bad[:5] or 'none'}"})
            results.append({"id": "ZIP-CRC", "status": "PASS" if archive.testzip() is None else "FAIL", "evidence": "testzip"})
            extract_dir = tempfile.mkdtemp(prefix="skill-validate-")
            archive.extractall(extract_dir)
        meta = check_folder(os.path.join(extract_dir, tops[0]), results, True) or {}
        meta["zipBytes"] = os.path.getsize(target)
        shutil.rmtree(extract_dir, ignore_errors=True)
    else:
        meta = check_folder(os.path.abspath(target), results) or {}
    if cowork:
        lim = "observed Claude Desktop / Cowork upload limit (2026-10-17)"
        results.append({"id": "COWORK-ENTRIES", "status": "PASS" if entries is not None and entries <= 200 else "FAIL",
                        "evidence": f"{entries} ZIP entries (≤ 200 — {lim})" if entries is not None else "needs a ZIP"})
        results.append({"id": "COWORK-UNCOMPRESSED", "status": "PASS" if meta.get("bytes", 0) <= 30 * 1000 * 1000 else "FAIL",
                        "evidence": f"{meta.get('bytes', 0) / 1e6:.2f} MB uncompressed (≤ 30 MB — {lim})"})
        results.append({"id": "COWORK-ONE-SKILL-MD", "status": "PASS" if meta.get("skillMdFiles") == ["SKILL.md"] else "FAIL",
                        "evidence": f"SKILL.md files: {meta.get('skillMdFiles')}"})
        results.append({"id": "COWORK-NAMES", "status": "PASS" if not meta.get("badNames") else "FAIL",
                        "evidence": f"names outside [A-Za-z0-9._/-]: {meta.get('badNames', [])[:5] or 'none'}"})
    fail = [result for result in results if result["status"] == "FAIL"]
    out = {"target": target, "status": "FAIL" if fail else "PASS", "meta": meta, "checks": results}
    if as_json:
        print(json.dumps(out, indent=1, ensure_ascii=False))
    else:
        for result in results: print(f"  [{result['status']}] {result['id']}: {result['evidence']}")
        print(f"{out['status']} — {target}")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())

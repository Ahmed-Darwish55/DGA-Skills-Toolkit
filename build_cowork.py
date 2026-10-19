#!/usr/bin/env python3
"""Build DGA-Skills-Toolkit-COWORK-UPLOAD.zip — the self-contained skill ZIP for Claude Desktop / Cowork / claude.ai
(Customize > Skills > Upload skill). Run `python3 build.py` first so CHECKSUMS.sha256 of the full skill is current.

  python3 build_cowork.py [--out release-out]

Lossless Cowork edition. Cowork accepts uploads of at most 200 ZIP entries, 30 MB uncompressed, exactly one SKILL.md and
plain file names. This build meets those limits WITHOUT deleting anything:
  references/dga-live/{web,mobile,templates}/*.md  → references/dga-live/{WEB,MOBILE,TEMPLATES}-CATALOG.md  (plain Markdown, same bytes)
  references/dga-live/data/**/*.json                → references/dga-live/DATA-PACK.json.gz                 (gzip JSON, same bytes)
  registry/packages/platformscode-core@<v>.json      → registry/packages/platformscode-core-v<v>.json        ('@' not used in names)
Every packed file keeps its SHA-256; tools read both layouts through tools/dga_res.py / tools/qa/lib/dga-res.mjs.
The build proves losslessness (every original file of the full release ↔ identical bytes in the edition), writes a fresh
CHECKSUMS.sha256 + MANIFEST.json for the edition, zips WITHOUT directory entries, validates with --profile cowork, then runs
self_check / registry_integrity / dga_res verify from the extracted ZIP.

Layout: DGA-Skills-Toolkit-COWORK-UPLOAD.zip └── dga-skills/ SKILL.md · rules/ · references/ · registry/ · patterns/ · templates/ · lib/ · tools/ …
"""
import sys; sys.dont_write_bytecode = True
import argparse, gzip, hashlib, json, os, re, shutil, subprocess, tempfile, zipfile

ROOT = os.path.dirname(os.path.abspath(__file__))
SKILL = os.path.join(ROOT, "dga-skills")
SKIP_DIRS = {"__pycache__", "node_modules", ".git"}
LIVE = "references/dga-live"
CATALOGS = [("web", "WEB-CATALOG.md", "DGA Platforms Code — web component reference pages"),
            ("mobile", "MOBILE-CATALOG.md", "DGA Platforms Code — mobile component reference pages"),
            ("templates", "TEMPLATES-CATALOG.md", "DGA Platforms Code — page template reference pages")]
TEXT_EXT = (".md", ".json")
ZIP_DATE = (2026, 10, 18, 0, 0, 0)


def sha(content_bytes):
    return hashlib.sha256(content_bytes).hexdigest()


def tree(base):
    out = []
    for directory, subdirectories, file_names in os.walk(base):
        subdirectories[:] = sorted(name for name in subdirectories if name not in SKIP_DIRS)
        for file_name in sorted(file_names):
            full_path = os.path.join(directory, file_name)
            if os.path.islink(full_path) or file_name.endswith(".pyc"):
                continue
            out.append(os.path.relpath(full_path, base).replace(os.sep, "/"))
    return out


NOTICE = """0b. **Claude Desktop / Cowork edition (lossless)** — this upload stores some reference files packed so the skill fits the app's upload limits; nothing was removed. Reference pages `references/dga-live/web|mobile|templates/<slug>.md` are inside `references/dga-live/WEB-CATALOG.md`, `MOBILE-CATALOG.md`, `TEMPLATES-CATALOG.md` (search `Reference: <slug>`), raw Figma data `references/dga-live/data/**.json` is inside `references/dga-live/DATA-PACK.json.gz`, and package APIs are named `registry/packages/platformscode-core-v<version>.json`. To open any original path exactly, run `python3 ${CLAUDE_SKILL_DIR}/tools/dga_res.py cat <path>` (SHA-256 verified); the tools in `tools/` already read both layouts. Details: `COWORK-EDITION.md`.
"""


def build_stage(stage):
    """Copy the skill into stage/dga-skills and transform it. Returns (skill_dir, mapping {original rel: where}, notes)."""
    dst = os.path.join(stage, "dga-skills")
    files = tree(SKILL)
    mapping = {}
    for relative_path in files:
        os.makedirs(os.path.dirname(os.path.join(dst, relative_path)), exist_ok=True)
        shutil.copyfile(os.path.join(SKILL, relative_path), os.path.join(dst, relative_path))
    # 1) reference pages → catalogs (byte-exact sections)
    for sub, cat, title in CATALOGS:
        section_dir = os.path.join(dst, LIVE, sub)
        pages = sorted(name for name in os.listdir(section_dir) if name.endswith(".md"))
        parts = [f"# {title} (Claude Desktop / Cowork edition)\n\n",
                 f"Each section is ONE original file of the full release, byte for byte, between its BEGIN/END markers. "
                 f"Find a page with `Reference: <slug>`, or print it exactly: `python3 tools/dga_res.py cat {LIVE}/{sub}/<slug>.md`.\n\n",
                 "Pages: " + ", ".join(f"`{page[:-3]}`" for page in pages) + "\n\n"]
        for page in pages:
            relative_path = f"{LIVE}/{sub}/{page}"
            raw = open(os.path.join(section_dir, page), "rb").read()
            text = raw.decode("utf-8")
            parts.append(f"\n---\n## Reference: {page[:-3]}\n<!-- DGA-REF:BEGIN {relative_path} sha256={sha(raw)} bytes={len(raw)} -->\n{text}\n<!-- DGA-REF:END {relative_path} -->\n")
            mapping[relative_path] = f"{LIVE}/{cat}"
        open(os.path.join(dst, LIVE, cat), "w", encoding="utf-8", newline="").write("".join(parts))
        shutil.rmtree(section_dir)
    # 2) raw data → one gzip JSON pack
    data_dir = os.path.join(dst, LIVE, "data")
    pack = {}
    for relative_path in tree(data_dir):
        full = f"{LIVE}/data/{relative_path}"
        raw = open(os.path.join(data_dir, relative_path), "rb").read()
        pack[full] = {"sha256": sha(raw), "bytes": len(raw), "text": raw.decode("utf-8")}
        mapping[full] = f"{LIVE}/DATA-PACK.json.gz"
    blob = json.dumps({"schema": "dga-skills/data-pack@1", "note": "original files of references/dga-live/data, byte for byte (UTF-8 text)",
                       "files": pack}, ensure_ascii=False, sort_keys=True).encode("utf-8")
    with open(os.path.join(dst, LIVE, "DATA-PACK.json.gz"), "wb") as pack_file:
        with gzip.GzipFile(filename="", mode="wb", fileobj=pack_file, mtime=0, compresslevel=9) as gzip_file:
            gzip_file.write(blob)
    shutil.rmtree(data_dir)
    # 3) '@' in file names
    renames = {}
    packages_dir = os.path.join(dst, "registry", "packages")
    for file_name in sorted(os.listdir(packages_dir)):
        if "@" in file_name:
            new = file_name.replace("@", "-v")
            os.rename(os.path.join(packages_dir, file_name), os.path.join(packages_dir, new))
            renames[f"registry/packages/{file_name}"] = f"registry/packages/{new}"
    mapping.update(renames)
    # 5) rewrite references to renamed files in Markdown / JSON (code reads both names through dga_res / _pkg_api)
    rename_pattern = re.compile("|".join(re.escape(name) for name in sorted(renames, key=len, reverse=True)))
    edited = set()
    for relative_path in tree(dst):
        if not relative_path.endswith(TEXT_EXT) or relative_path.endswith("DATA-PACK.json.gz"):
            continue
        file_path = os.path.join(dst, relative_path)
        file_text = open(file_path, encoding="utf-8", newline="").read()
        updated_text = rename_pattern.sub(lambda match: renames[match.group(0)], file_text)
        if updated_text != file_text:
            open(file_path, "w", encoding="utf-8", newline="").write(updated_text); edited.add(inv_name(relative_path, renames))
    # 6) SKILL.md notice (after item 0) + INDEX.md note
    skill_md_path = os.path.join(dst, "SKILL.md"); skill_md_text = open(skill_md_path, encoding="utf-8").read()
    anchor = "\n1. **Onboarding gate**"
    assert anchor in skill_md_text, "SKILL.md anchor for the Cowork notice not found"
    skill_md_text = skill_md_text.replace(anchor, "\n" + NOTICE.rstrip("\n") + anchor, 1)
    open(skill_md_path, "w", encoding="utf-8").write(skill_md_text)
    index_path = os.path.join(dst, LIVE, "INDEX.md"); file_text = open(index_path, encoding="utf-8").read()
    file_text = ("> **Claude Desktop / Cowork edition:** the `web/…`, `mobile/…`, `templates/…` pages linked below are stored byte for byte in "
         "`WEB-CATALOG.md`, `MOBILE-CATALOG.md`, `TEMPLATES-CATALOG.md` (search `Reference: <slug>`), raw data in `DATA-PACK.json.gz`; "
         "`python3 tools/dga_res.py cat references/dga-live/<path>` prints any of them exactly.\n\n") + file_text
    open(index_path, "w", encoding="utf-8").write(file_text)
    edited |= {"SKILL.md", f"{LIVE}/INDEX.md"}
    return dst, mapping, renames, edited


def inv_name(relative_path, renames):
    return {renamed: original for original, renamed in renames.items()}.get(relative_path, relative_path)


def seal(dst, mapping, renames, version, src_checks):
    edition = {"edition": "cowork-lossless", "version": version, "builtFrom": "full release CHECKSUMS.sha256 " + src_checks[:16],
               "limits": {"zipEntries": 200, "uncompressedBytes": 30 * 1000 * 1000, "skillMdFiles": 1, "fileNames": "[A-Za-z0-9._/-]"},
               "limitsSource": "observed on a real Claude Desktop / Cowork account (working upload package notes, 2026-10-17); not published documentation",
               "packed": {original: stored_in for original, stored_in in sorted(mapping.items()) if original not in renames}, "renamed": renames}
    json.dump(edition, open(os.path.join(dst, "COWORK-EDITION.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    open(os.path.join(dst, "COWORK-EDITION.md"), "w", encoding="utf-8").write(
        "# Claude Desktop / Cowork edition — lossless\n\n"
        f"Version {version}. Same content as the full release; only the storage of some files differs so the upload fits the app limits "
        "of Cowork uploads (≤ 200 ZIP entries, ≤ 30 MB uncompressed, one SKILL.md, plain file names).\n\n"
        "| original path | stored in |\n|---|---|\n"
        f"| `{LIVE}/web/*.md` ({sum(1 for original in mapping if original.startswith(LIVE + '/web/'))} files) | `{LIVE}/WEB-CATALOG.md` |\n"
        f"| `{LIVE}/mobile/*.md` ({sum(1 for original in mapping if original.startswith(LIVE + '/mobile/'))} files) | `{LIVE}/MOBILE-CATALOG.md` |\n"
        f"| `{LIVE}/templates/*.md` ({sum(1 for original in mapping if original.startswith(LIVE + '/templates/'))} files) | `{LIVE}/TEMPLATES-CATALOG.md` |\n"
        f"| `{LIVE}/data/**/*.json` ({sum(1 for original in mapping if original.startswith(LIVE + '/data/'))} files) | `{LIVE}/DATA-PACK.json.gz` |\n"
        + "".join(f"| `{original}` | `{renamed}` (renamed) |\n" for original, renamed in sorted(renames.items()))
        + "\nCheck: `python3 tools/dga_res.py verify` (every packed file vs its SHA-256). Rebuild the original tree: "
          "`python3 tools/dga_res.py extract --to <dir>`. Full map: `COWORK-EDITION.json`.\n")
    manifest = json.load(open(os.path.join(dst, "MANIFEST.json"), encoding="utf-8"))
    manifest.update({"edition": "cowork-lossless", "releaseStage": manifest.get("releaseStage", "release"),
              "coworkEdition": {"notes": "COWORK-EDITION.md", "map": "COWORK-EDITION.json", "lossless": True,
                                "packedFiles": len(mapping) - len(renames), "renamedFiles": len(renames)}})
    files = sorted(relative_path for relative_path in tree(dst) if relative_path not in ("CHECKSUMS.sha256", "MANIFEST.json"))
    manifest["fileCount"] = len(files) + 2
    json.dump(manifest, open(os.path.join(dst, "MANIFEST.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    files.append("MANIFEST.json"); files.sort()
    with open(os.path.join(dst, "CHECKSUMS.sha256"), "w", encoding="utf-8") as checksum_file:
        for relative_path in files:
            checksum_file.write(f"{sha(open(os.path.join(dst, relative_path), 'rb').read())}  {relative_path}\n")


def lossless_proof(dst, renames):
    """Every file of the full release (per its CHECKSUMS.sha256) is in the edition with identical bytes — as a file, a renamed file
    or a packed entry. Files that the edition intentionally edits (SKILL.md notice, INDEX.md note, reference rewrites) are listed."""
    sys.path.insert(0, os.path.join(dst, "tools"))
    for module_name in [module_name for module_name in sys.modules if module_name == "dga_res"]:
        del sys.modules[module_name]
    import dga_res  # the edition's own resolver
    edited, missing, identical_count = [], [], 0
    for line in open(os.path.join(SKILL, "CHECKSUMS.sha256"), encoding="utf-8"):
        digest, relative_path = line.rstrip("\n").split("  ", 1)
        if relative_path in ("CHECKSUMS.sha256", "MANIFEST.json"):
            continue
        rel2 = renames.get(relative_path, relative_path)
        try:
            content_bytes = dga_res.read_bytes(rel2)
        except FileNotFoundError:
            missing.append(relative_path); continue
        if sha(content_bytes) == digest:
            identical_count += 1
        else:
            edited.append(relative_path)
    sys.path.pop(0)
    return {"originalFiles": identical_count + len(edited) + len(missing), "identical": identical_count, "editedForEdition": edited, "missing": missing}


def main():
    parser = argparse.ArgumentParser(); parser.add_argument("--out", default=os.path.join(ROOT, "release-out")); options = parser.parse_args()
    os.makedirs(options.out, exist_ok=True)
    zip_path = os.path.join(options.out, "DGA-Skills-Toolkit-COWORK-UPLOAD.zip")
    if os.path.exists(zip_path): os.remove(zip_path)
    version = open(os.path.join(SKILL, "VERSION")).read().strip()
    src_checks = sha(open(os.path.join(SKILL, "CHECKSUMS.sha256"), "rb").read())
    stage = tempfile.mkdtemp(prefix="dga-cowork-stage-")
    try:
        dst, mapping, renames, edited = build_stage(stage)
        proof = lossless_proof(dst, renames)
        seal(dst, mapping, renames, version, src_checks)
        files = tree(dst)
        with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as zip_file:     # files only — no directory entries
            for relative_path in files:
                zip_info = zipfile.ZipInfo("dga-skills/" + relative_path, date_time=ZIP_DATE); zip_info.compress_type = zipfile.ZIP_DEFLATED
                zip_info.external_attr = (0o755 if relative_path.endswith((".py", ".sh", ".mjs")) else 0o644) << 16
                zip_file.writestr(zip_info, open(os.path.join(dst, relative_path), "rb").read())
    finally:
        shutil.rmtree(stage, ignore_errors=True)
    zsha = sha(open(zip_path, "rb").read())
    open(zip_path + ".sha256", "w").write(f"{zsha}  {os.path.basename(zip_path)}\n")
    validation_run = subprocess.run([sys.executable, "-B", os.path.join(SKILL, "tools", "validate_skill_package.py"), zip_path, "--json", "--profile", "cowork"],
                       capture_output=True, text=True)
    validation = json.loads(validation_run.stdout)
    # functional check from the extracted ZIP (exactly what the app would hold)
    extract_dir = tempfile.mkdtemp(prefix="dga-cowork-check-")
    try:
        with zipfile.ZipFile(zip_path) as zip_file: zip_file.extractall(extract_dir)
        skill_dir = os.path.join(extract_dir, "dga-skills"); functional = {}
        for cid, args in (("SELF-CHECK", ["tools/self_check.py", "--json", "--claude-dir", os.path.join(extract_dir, "no-profile")]),
                          ("REGISTRY-INTEGRITY", ["tools/registry_integrity.py", "--json"]),
                          ("DGA-RES-VERIFY", ["tools/dga_res.py", "verify", "--json"])):
            check_run = subprocess.run([sys.executable, "-B"] + [os.path.join(skill_dir, args[0])] + args[1:], capture_output=True, text=True, cwd=extract_dir)
            try: out = json.loads(check_run.stdout)
            except Exception: out = {"raw": check_run.stdout[-400:] + check_run.stderr[-400:]}
            functional[cid] = {"exit": check_run.returncode, "summary": {field: out.get(field) for field in ("requiredOk", "integrity", "ok", "status", "packedFiles", "layout", "counts") if field in out}}
    finally:
        shutil.rmtree(extract_dir, ignore_errors=True)
    func_ok = all(check["exit"] == 0 for check in functional.values())
    loss_ok = not proof["missing"] and set(proof["editedForEdition"]) == edited
    proof["editedReason"] = "SKILL.md: Cowork-edition notice added; INDEX.md: storage note added; others: references to renamed files updated (registry/packages '@' → '-v', legacy SKILL.md name)"
    validation.update({"zip": os.path.basename(zip_path), "sha256": zsha, "filesInZip": len(files), "version": version, "edition": "cowork-lossless",
              "losslessProof": proof, "losslessStatus": "PASS" if loss_ok else "FAIL", "functionalFromZip": functional,
              "functionalStatus": "PASS" if func_ok else "FAIL",
              "uploadToRealAccount": "NOT VERIFIED by the build"})
    json.dump(validation, open(os.path.join(options.out, "COWORK-ZIP-VALIDATION.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    for check in validation["checks"]: print(f"  [{check['status']}] {check['id']}: {check['evidence'][:110]}")
    print(f"  lossless: {proof['identical']}/{proof['originalFiles']} original files byte-identical; edited for the edition: {proof['editedForEdition']}; missing: {proof['missing'] or 'none'}")
    for check_id, result in functional.items(): print(f"  [{'PASS' if result['exit'] == 0 else 'FAIL'}] {check_id} (from extracted ZIP): {json.dumps(result['summary'], ensure_ascii=False)[:160]}")
    print(f"{zip_path}\n  sha256 {zsha}\n  {os.path.getsize(zip_path) / 1e6:.1f} MB zipped, {len(files)} files → validation {validation['status']}, lossless {validation['losslessStatus']}, functional {validation['functionalStatus']}")
    return 0 if validation["status"] == "PASS" and loss_ok and func_ok else 1


if __name__ == "__main__":
    sys.exit(main())

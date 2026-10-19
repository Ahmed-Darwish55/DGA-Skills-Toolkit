#!/usr/bin/env python3
"""DGA Skills Toolkit (`dga-skills`) global installer — cross-platform (Windows / macOS / Linux), Python ≥ 3.8, stdlib only.
Created and developed by Ahmed Darwish. Independent project — not affiliated with, endorsed by, or certified by the Saudi DGA.

Commands
  install       [--claude-dir DIR] [--no-claude-md] [--force] [--no-deps]
                                                                  install/upgrade with backup + verification, then installs the
                                                                  missing optional helpers automatically (Zero-Manual-Dependency-Setup)
  verify        [--claude-dir DIR]                               installed files vs CHECKSUMS.sha256 + version
  self-check    [--claude-dir DIR] [--project DIR] [--json]      offline readiness + optional dependency status
  list-backups  [--claude-dir DIR]
  rollback      [--claude-dir DIR] [--backup ID]                 restore a backup (default: newest), SHA-256 verified
  uninstall     [--claude-dir DIR]                               back up, then remove skill + CLAUDE.md block (backups/state kept)
  extract       --zip FILE --to DIR                               safe extraction of a release ZIP (path-traversal refused)
  deps          status|plan|ensure|setup|verify-source|cowork     optional upstream skills (UI/UX Pro Max, Frontend Design):
                                                                  detect, verify source + licence, install (ensure = automatic)
  install --setup-deps | --accept-deps ids|all                    interactive: ask y/N per helper / install only the named ones

Options: --dry-run (install: print what would change, change nothing)
Target profile: --claude-dir, else $CLAUDE_CONFIG_DIR, else ~/.claude.
Legacy migration: an installed legacy `skills/ahmed-skills` and its `AHMED-SKILLS` CLAUDE.md block are backed up,
then replaced by `skills/dga-skills` + the `DGA-SKILLS` block, so only ONE skill answers the same prompts. Text outside the
managed block is preserved byte for byte. The toolkit itself is never downloaded. After it is installed and verified, the
same command installs the missing optional helpers through the official `claude plugin` CLI — only from the trusted
marketplaces in registry/dependencies.json and only after their source and licence verify (refused otherwise). It prints
every step and records it; opt out with --no-deps or DGA_SKILLS_NO_AUTO_DEPS=1. Turned-off helpers are left turned off.
"""
import sys; sys.dont_write_bytecode = True  # keep installed tree identical to CHECKSUMS
import argparse, datetime, hashlib, json, os, shutil, subprocess, sys

PKG_DIR = os.path.dirname(os.path.abspath(__file__))
NAME = "dga-skills"                      # skill id = installed folder name
LEGACY_NAME = "ahmed-skills"             # legacy folder name (migrated, never left active next to the new one)
SRC = os.path.join(PKG_DIR, NAME)
SNIPPET = os.path.join(PKG_DIR, "GLOBAL-CLAUDE-SNIPPET.md")
BEGIN = "<!-- DGA-SKILLS:BEGIN (managed by the DGA Skills Toolkit installer; edit outside this block) -->"
END = "<!-- DGA-SKILLS:END -->"
LEGACY_BEGIN = "<!-- AHMED-SKILLS:BEGIN"   # prefix: the legacy marker carried a free-text comment after it
LEGACY_END = "<!-- AHMED-SKILLS:END -->"
STATE_DIR = "dga-skills-install"
LEGACY_STATE_DIR = "ahmed-skills-install"


# ---------- helpers ----------
def log(message):
    print(message, flush=True)


def now_id():
    return datetime.datetime.now().strftime("%Y%m%d-%H%M%S-%f")


def sha256_file(file_path):
    digest = hashlib.sha256()
    with open(file_path, "rb") as stream:
        for chunk in iter(lambda: stream.read(1 << 20), b""):
            digest.update(chunk)
    return digest.hexdigest()


def tree_files(root):
    out = []
    for directory, dirs, files in os.walk(root):
        dirs.sort()
        dirs[:] = [name for name in dirs if name != "__pycache__"]
        for file_name in sorted(files):
            full_path = os.path.join(directory, file_name)
            out.append(os.path.relpath(full_path, root).replace(os.sep, "/"))
    return sorted(out)


def tree_sha(root):
    """SHA-256 over 'relpath\\0filesha\\n' for every file (order-independent of OS)."""
    if not os.path.isdir(root):
        return None
    digest = hashlib.sha256()
    for relative_path in tree_files(root):
        digest.update(relative_path.encode("utf-8") + b"\0" + sha256_file(os.path.join(root, relative_path)).encode() + b"\n")
    return digest.hexdigest()


def read_version(skill_dir):
    version_path = os.path.join(skill_dir, "VERSION")
    return open(version_path, encoding="utf-8").read().strip() if os.path.isfile(version_path) else None


def vtuple(version_text):
    import re
    if not version_text:
        return (0,)
    nums = [int(digits) for digits in re.findall(r"\d+", version_text.split("-")[0])]
    pre = 0 if "-" in version_text else 1          # a pre-release sorts before the release
    return tuple(nums + [pre])


def claude_dir(arg):
    if arg:
        return os.path.abspath(os.path.expanduser(arg))
    if os.environ.get("CLAUDE_CONFIG_DIR"):
        return os.path.abspath(os.environ["CLAUDE_CONFIG_DIR"])
    return os.path.join(os.path.expanduser("~"), ".claude")


def paths(cdir):
    state_dir = os.path.join(cdir, STATE_DIR)
    legacy_state_dir = os.path.join(cdir, LEGACY_STATE_DIR)
    return {
        "skills": os.path.join(cdir, "skills"),
        "target": os.path.join(cdir, "skills", NAME),
        "legacy_target": os.path.join(cdir, "skills", LEGACY_NAME),
        "claude_md": os.path.join(cdir, "CLAUDE.md"),
        "state_dir": state_dir,
        "state": os.path.join(state_dir, "state.json"),
        "backups": os.path.join(state_dir, "backups"),
        "legacy_state": os.path.join(legacy_state_dir, "state.json"),
        "legacy_backups": os.path.join(legacy_state_dir, "backups"),
    }


def load_state(profile_paths):
    if os.path.isfile(profile_paths["state"]):
        return json.load(open(profile_paths["state"], encoding="utf-8"))
    state = {"installs": [], "backups": []}
    if os.path.isfile(profile_paths["legacy_state"]):
        # read-only import of the legacy installer history; the legacy folder itself is never modified or deleted
        try:
            old = json.load(open(profile_paths["legacy_state"], encoding="utf-8"))
            state["legacyState"] = {"path": profile_paths["legacy_state"], "installs": old.get("installs", []), "backups": old.get("backups", []),
                                 "note": "history of the ahmed-skills installer (read-only); its backups stay under " + profile_paths["legacy_backups"]}
        except Exception as error:
            state["legacyState"] = {"path": profile_paths["legacy_state"], "error": str(error)}
    return state


def save_state(profile_paths, state):
    os.makedirs(profile_paths["state_dir"], exist_ok=True)
    temporary_path = profile_paths["state"] + ".tmp"
    json.dump(state, open(temporary_path, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    os.replace(temporary_path, profile_paths["state"])


def verify_source():
    man = os.path.join(SRC, "CHECKSUMS.sha256")
    if not os.path.isfile(man):
        return False, ["CHECKSUMS.sha256 missing in package"]
    bad = []
    listed = set()
    for line in open(man, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line:
            continue
        digest, relative_path = line.split("  ", 1)
        listed.add(relative_path)
        file_path = os.path.join(SRC, relative_path)
        if not os.path.isfile(file_path):
            bad.append("missing " + relative_path)
        elif sha256_file(file_path) != digest:
            bad.append("modified " + relative_path)
    extra = [relative_path for relative_path in tree_files(SRC) if relative_path not in listed and relative_path != "CHECKSUMS.sha256"]
    bad += ["unlisted " + relative_path for relative_path in extra]
    return not bad, bad


def snippet_block():
    body = open(SNIPPET, encoding="utf-8").read().strip()
    return f"{BEGIN}\n{body}\n{END}"


def has_legacy_block(text):
    return LEGACY_BEGIN in text and LEGACY_END in text


def strip_legacy_block(text):
    """Remove the AHMED-SKILLS managed block (legacy) and nothing else: the bytes before and after it are kept."""
    if not has_legacy_block(text):
        return text
    pre = text.split(LEGACY_BEGIN, 1)[0]
    post = text.split(LEGACY_END, 1)[1]
    # the legacy block was inserted as "\n\n<block>\n" — take back exactly that framing when it is there
    if pre.endswith("\n\n") and post.startswith("\n"):
        return pre[:-1] + post[1:]
    return pre + post


def merge_claude_md(text, block):
    if has_legacy_block(text) and not (BEGIN in text and END in text):
        # legacy block → replaced IN PLACE by the new one (one skill, one block); bytes before/after it untouched
        pre = text.split(LEGACY_BEGIN, 1)[0]
        post = text.split(LEGACY_END, 1)[1]
        return pre + block + post
    text = strip_legacy_block(text)                      # both present (should not happen): keep the new block only
    if BEGIN in text and END in text:
        pre = text.split(BEGIN, 1)[0]
        post = text.split(END, 1)[1]
        return pre + block + post
    if not text.strip():
        return block + "\n"
    return text.rstrip("\n") + "\n\n" + block + "\n"


def remove_block(text):
    if BEGIN in text and END in text:
        pre = text.split(BEGIN, 1)[0].rstrip("\n")
        post = text.split(END, 1)[1].lstrip("\n")
        return (pre + ("\n\n" if pre and post else "\n" if pre else "") + post) if (pre or post) else ""
    return text


def make_backup(profile_paths, reason, state):
    """Copy current skill folder and CLAUDE.md into a new backup. Returns backup meta."""
    bid = now_id()
    bdir = os.path.join(profile_paths["backups"], bid)
    os.makedirs(bdir)
    meta = {"id": bid, "reason": reason, "createdAt": datetime.datetime.now().isoformat(timespec="seconds"),
            "hadSkill": os.path.isdir(profile_paths["target"]), "hadLegacySkill": os.path.isdir(profile_paths["legacy_target"]),
            "hadClaudeMd": os.path.isfile(profile_paths["claude_md"])}
    if meta["hadSkill"]:
        shutil.copytree(profile_paths["target"], os.path.join(bdir, NAME))
        meta["skillVersion"] = read_version(profile_paths["target"]) or "unknown (pre-5.0, no VERSION file)"
        meta["treeSha"] = tree_sha(profile_paths["target"])
        assert tree_sha(os.path.join(bdir, NAME)) == meta["treeSha"], "backup copy hash mismatch"
    if meta["hadLegacySkill"]:
        shutil.copytree(profile_paths["legacy_target"], os.path.join(bdir, LEGACY_NAME))
        meta["legacySkillVersion"] = read_version(profile_paths["legacy_target"]) or "unknown (pre-5.0, no VERSION file)"
        meta["legacyTreeSha"] = tree_sha(profile_paths["legacy_target"])
        assert tree_sha(os.path.join(bdir, LEGACY_NAME)) == meta["legacyTreeSha"], "legacy backup copy hash mismatch"
    if meta["hadClaudeMd"]:
        shutil.copy2(profile_paths["claude_md"], os.path.join(bdir, "CLAUDE.md"))
        meta["claudeMdSha"] = sha256_file(profile_paths["claude_md"])
    json.dump(meta, open(os.path.join(bdir, "backup.json"), "w", encoding="utf-8"), indent=2)
    state["backups"].append(meta)
    return meta


# ---------- commands ----------
def cmd_install(options):
    cdir = claude_dir(options.claude_dir)
    profile_paths = paths(cdir)
    log(f"DGA Skills Toolkit installer — target profile: {cdir}" + ("  [DRY RUN — nothing will change]" if options.dry_run else ""))
    verified, problems = verify_source()
    if not verified:
        log("ABORT: package integrity check failed:\n  " + "\n  ".join(problems[:20]))
        return 2
    new_v = read_version(SRC)
    src_sha = tree_sha(SRC)
    log(f"  package version {new_v}, tree sha256 {src_sha}")
    state = load_state(profile_paths)

    cur_v = read_version(profile_paths["target"]) if os.path.isdir(profile_paths["target"]) else None
    cur_sha = tree_sha(profile_paths["target"])
    legacy = os.path.isdir(profile_paths["legacy_target"])
    legacy_v = read_version(profile_paths["legacy_target"]) if legacy else None
    block = snippet_block() if not options.no_claude_md else None
    cm_text = open(profile_paths["claude_md"], encoding="utf-8").read() if os.path.isfile(profile_paths["claude_md"]) else ""
    cm_new = merge_claude_md(cm_text, block) if block else cm_text
    legacy_block = has_legacy_block(cm_text)

    if cur_sha == src_sha and cm_new == cm_text and not legacy:
        log("  already installed and identical — nothing changed (no backup created).")
        if not options.dry_run:
            state["installs"].append({"at": datetime.datetime.now().isoformat(timespec="seconds"), "version": new_v,
                                   "treeSha": src_sha, "action": "noop"})
            save_state(profile_paths, state)
            return helpers_step(options, profile_paths, cdir)
        return 0

    if cur_v and vtuple(cur_v) > vtuple(new_v) and not options.force:
        log(f"ABORT: installed version {cur_v} is newer than package {new_v}. Use --force to downgrade.")
        return 3

    if legacy:
        log(f"  legacy skill found: skills/{LEGACY_NAME} ({legacy_v or 'pre-5.0'}) — it will be backed up and removed after the new skill is verified")
    if legacy_block:
        log("  legacy AHMED-SKILLS block found in CLAUDE.md — it will be replaced by the DGA-SKILLS block (text outside it untouched)")
    if options.dry_run:
        log("  would: " + ("replace" if cur_sha else "install") + f" skills/{NAME} ({cur_v or 'none'} -> {new_v})" +
            ("; update CLAUDE.md block" if block and cm_new != cm_text else "; CLAUDE.md unchanged") +
            (f"; back up + remove skills/{LEGACY_NAME}" if legacy else ""))
        log("  dry run complete — no files were written.")
        return 0

    os.makedirs(profile_paths["skills"], exist_ok=True)
    backup = None
    if os.path.isdir(profile_paths["target"]) or legacy or (block and cm_new != cm_text and os.path.isfile(profile_paths["claude_md"])):
        backup = make_backup(profile_paths, "pre-install", state)
        save_state(profile_paths, state)                                 # the backup record is on disk BEFORE anything is replaced (rollback after a crash)
        log(f"  backup {backup['id']}: skill={backup['hadSkill']} ({backup.get('skillVersion')}), legacy={backup['hadLegacySkill']} ({backup.get('legacySkillVersion')}), CLAUDE.md={backup['hadClaudeMd']}")

    if cur_sha != src_sha:
        staging = os.path.join(profile_paths["skills"], f".{NAME}.staging-{os.getpid()}")
        if os.path.exists(staging):
            shutil.rmtree(staging)
        shutil.copytree(SRC, staging)
        if tree_sha(staging) != src_sha:
            shutil.rmtree(staging)
            log("ABORT: staging copy hash mismatch; nothing changed.")
            return 4
        if os.environ.get("DGA_INSTALL_FAULT") == "after-staging":      # fault-injection hook: crash before anything is replaced
            shutil.rmtree(staging)
            raise RuntimeError("injected fault after staging")
        if os.path.isdir(profile_paths["target"]):
            shutil.rmtree(profile_paths["target"])          # already copied into the backup above
        os.replace(staging, profile_paths["target"])
    if os.environ.get("DGA_INSTALL_FAULT") == "after-skill":            # fault-injection hook: crash between skill swap and CLAUDE.md
        raise RuntimeError("injected fault after skill swap (backup exists; rollback restores)")
    if block and cm_new != cm_text:
        temporary_path = profile_paths["claude_md"] + ".dga-tmp"
        open(temporary_path, "w", encoding="utf-8").write(cm_new)
        os.replace(temporary_path, profile_paths["claude_md"])
        log("  CLAUDE.md: DGA-SKILLS block " + ("updated" if BEGIN in cm_text else ("migrated from AHMED-SKILLS block" if legacy_block else "added")))

    inst_sha = tree_sha(profile_paths["target"])
    verified = inst_sha == src_sha and (not block or open(profile_paths["claude_md"], encoding="utf-8").read().count(BEGIN) == 1)
    migrated = None
    if verified and legacy:
        # new skill verified → retire the legacy folder so two skills never compete for the same prompts
        shutil.rmtree(profile_paths["legacy_target"])
        migrated = {"from": LEGACY_NAME, "version": legacy_v, "treeSha": backup.get("legacyTreeSha") if backup else None, "backup": backup["id"] if backup else None}
        log(f"  legacy skills/{LEGACY_NAME} removed (restorable: rollback --backup {backup['id'] if backup else '?'})")
    state["installs"].append({"at": datetime.datetime.now().isoformat(timespec="seconds"), "version": new_v,
                           "treeSha": inst_sha, "action": "upgrade" if cur_v or cur_sha or legacy else "install",
                           "previousVersion": cur_v or legacy_v, "migratedLegacy": migrated,
                           "backup": backup["id"] if backup else None, "verified": verified})
    state["current"] = {"version": new_v, "treeSha": inst_sha}
    save_state(profile_paths, state)
    log(f"  installed {NAME} {new_v} -> {profile_paths['target']}")
    log(f"  verification: {'OK' if verified else 'FAILED'} (installed tree sha256 {inst_sha})")
    if not verified:
        return 5
    sys.path.insert(0, os.path.join(profile_paths["target"], "tools"))
    import self_check  # noqa
    check_result = self_check.run(None, cdir)
    log(f"  self-check: required={'OK' if check_result['requiredOk'] else 'BROKEN'}; optional flags: {check_result['flags'] or 'none'}")
    log("  nothing else was installed (no plugins, no skills, no npm packages).")
    if not check_result["requiredOk"]:
        return 6
    return helpers_step(options, profile_paths, cdir)


def helpers_step(options, profile_paths, cdir):
    """Optional helpers after a successful install — also on a no-op re-install, so re-running the ONE command completes setup."""
    deps_py = os.path.join(profile_paths["target"], "tools", "deps.py")
    if getattr(options, "setup_deps", False) and not getattr(options, "accept_deps", ""):
        # interactive guided flow: asks y/N for each helper
        log("\n== optional helpers (UI/UX Pro Max, Frontend Design) — guided setup ==")
        exit_code = subprocess.call([sys.executable, "-B", deps_py, "setup", "--claude-dir", cdir])
        log(f"  helper setup finished (exit {exit_code}); the toolkit itself is installed either way.")
    elif getattr(options, "accept_deps", ""):
        log("\n== optional helpers — installing the ones named in --accept-deps ==")
        exit_code = subprocess.call([sys.executable, "-B", deps_py, "setup", "--claude-dir", cdir, "--accept", options.accept_deps])
        log(f"  helper setup finished (exit {exit_code}); the toolkit itself is installed either way.")
    elif getattr(options, "no_deps", False) or os.environ.get("DGA_SKILLS_NO_AUTO_DEPS", "") not in ("", "0"):
        log("  optional helpers: automatic install skipped (--no-deps / DGA_SKILLS_NO_AUTO_DEPS). Later: python3 install.py deps ensure")
    else:
        # Zero-Manual-Dependency-Setup: same command, no questions — verified official sources only (tools/deps.py ensure)
        log("\n== optional helpers (UI/UX Pro Max, Frontend Design) — automatic, from their verified official sources ==")
        exit_code = subprocess.call([sys.executable, "-B", deps_py, "ensure", "--claude-dir", cdir])
        log("  helpers: " + {0: "ready (or nothing needed)", 5: "a source failed verification — NOT installed; built-in fallback in use",
                             6: "an install failed — built-in fallback in use; retry: python3 install.py deps ensure --force",
                             7: "the `claude` CLI is not on PATH — built-in fallback in use; after installing Claude Code: python3 install.py deps ensure"}
            .get(exit_code, f"exit {exit_code}") + ". The toolkit itself is installed either way.")
    return 0


def cmd_deps(options):
    """Optional upstream skills — delegates to tools/deps.py (installed copy if present, else the package copy)."""
    cdir = claude_dir(options.claude_dir)
    inst = os.path.join(cdir, "skills", NAME, "tools", "deps.py")
    deps_py = inst if os.path.isfile(inst) else os.path.join(SRC, "tools", "deps.py")
    args = [sys.executable, "-B", deps_py, options.action] + (["--claude-dir", cdir] if options.action in ("status", "plan", "setup", "ensure") else []) + list(options.rest or [])
    return subprocess.call(args)


def cmd_verify(options):
    cdir = claude_dir(options.claude_dir)
    profile_paths = paths(cdir)
    if not os.path.isdir(profile_paths["target"]):
        log("NOT INSTALLED"); return 3
    state = load_state(profile_paths)
    man = os.path.join(profile_paths["target"], "CHECKSUMS.sha256")
    bad = []
    if not os.path.isfile(man):
        bad.append("CHECKSUMS.sha256 missing")
    else:
        listed = set()
        for line in open(man, encoding="utf-8"):
            if not line.strip():
                continue
            digest, relative_path = line.rstrip("\n").split("  ", 1)
            listed.add(relative_path)
            file_path = os.path.join(profile_paths["target"], relative_path)
            if not os.path.isfile(file_path):
                bad.append("missing " + relative_path)
            elif sha256_file(file_path) != digest:
                bad.append("modified " + relative_path)
        bad += ["unlisted " + relative_path for relative_path in tree_files(profile_paths["target"]) if relative_path not in listed and relative_path != "CHECKSUMS.sha256"]
    installed_version = read_version(profile_paths["target"])
    state_version = (state.get("current") or {}).get("version")
    if state_version and state_version != installed_version:
        bad.append(f"version mismatch: state {state_version} vs installed {installed_version}")
    claude_md_text = open(profile_paths["claude_md"], encoding="utf-8").read() if os.path.isfile(profile_paths["claude_md"]) else ""
    blocks = claude_md_text.count(BEGIN)
    log(f"installed version: {installed_version}; files bad: {len(bad)}; CLAUDE.md managed blocks: {blocks}")
    for problem in bad[:30]:
        log("  " + problem)
    return 0 if not bad and blocks <= 1 else 1


def cmd_self_check(options):
    cdir = claude_dir(options.claude_dir)
    profile_paths = paths(cdir)
    tools = os.path.join(profile_paths["target"] if os.path.isdir(profile_paths["target"]) else SRC, "tools")
    cmd = [sys.executable, os.path.join(tools, "self_check.py"), "--claude-dir", cdir]
    if options.project:
        cmd += ["--project", options.project]
    if options.json:
        cmd.append("--json")
    return subprocess.call(cmd)


def cmd_list(options):
    profile_paths = paths(claude_dir(options.claude_dir))
    state = load_state(profile_paths)
    if not state["backups"]:
        log("no backups"); return 0
    for backup in state["backups"]:
        log(f"{backup['id']}  reason={backup['reason']}  skill={backup.get('skillVersion', '-') if backup['hadSkill'] else '(none)'}  "
            f"CLAUDE.md={'yes' if backup['hadClaudeMd'] else 'no'}  treeSha={backup.get('treeSha', '-')}")
    return 0


def cmd_rollback(options):
    cdir = claude_dir(options.claude_dir)
    profile_paths = paths(cdir)
    state = load_state(profile_paths)
    cands = [candidate for candidate in state["backups"] if candidate["reason"] != "pre-rollback"] if not options.backup else \
            [candidate for candidate in state["backups"] if candidate["id"] == options.backup]
    if not cands:
        log("no backup to roll back to"); return 3
    backup = cands[-1]
    bdir = os.path.join(profile_paths["backups"], backup["id"])
    log(f"rolling back to backup {backup['id']} (skill {backup.get('skillVersion', 'none')}, legacy {backup.get('legacySkillVersion', 'none')})")
    safety = make_backup(profile_paths, "pre-rollback", state)
    log(f"  safety backup of current state: {safety['id']}")
    for tgt in (profile_paths["target"], profile_paths["legacy_target"]):
        if os.path.isdir(tgt):
            shutil.rmtree(tgt)
    if backup["hadSkill"]:
        shutil.copytree(os.path.join(bdir, NAME), profile_paths["target"])
    if backup.get("hadLegacySkill"):
        shutil.copytree(os.path.join(bdir, LEGACY_NAME), profile_paths["legacy_target"])
    if backup["hadClaudeMd"]:
        shutil.copy2(os.path.join(bdir, "CLAUDE.md"), profile_paths["claude_md"])
    elif os.path.isfile(profile_paths["claude_md"]):
        os.remove(profile_paths["claude_md"])
    got = tree_sha(profile_paths["target"]); got_legacy = tree_sha(profile_paths["legacy_target"])
    verified = (got == backup.get("treeSha")) if backup["hadSkill"] else (got is None)
    verified = verified and ((got_legacy == backup.get("legacyTreeSha")) if backup.get("hadLegacySkill") else (got_legacy is None))
    if backup["hadClaudeMd"]:
        verified = verified and sha256_file(profile_paths["claude_md"]) == backup["claudeMdSha"]
    state["current"] = {"version": read_version(profile_paths["target"]) if backup["hadSkill"] else None, "treeSha": got,
                     "legacy": {"version": read_version(profile_paths["legacy_target"]), "treeSha": got_legacy} if backup.get("hadLegacySkill") else None}
    state["installs"].append({"at": datetime.datetime.now().isoformat(timespec="seconds"), "action": "rollback",
                           "to": backup["id"], "verified": verified})
    save_state(profile_paths, state)
    log(f"  restored skill treeSha {got} (expected {backup.get('treeSha')}); legacy {got_legacy} (expected {backup.get('legacyTreeSha')}); CLAUDE.md restored={backup['hadClaudeMd']}")
    log(f"  rollback verification: {'OK' if verified else 'FAILED'}")
    return 0 if verified else 5


def cmd_uninstall(options):
    cdir = claude_dir(options.claude_dir)
    profile_paths = paths(cdir)
    state = load_state(profile_paths)
    if not os.path.isdir(profile_paths["target"]) and not (os.path.isfile(profile_paths["claude_md"]) and BEGIN in open(profile_paths["claude_md"], encoding="utf-8").read()):
        log("nothing to uninstall (backups, installer state and project settings are never removed)"); return 0
    backup = make_backup(profile_paths, "pre-uninstall", state)
    if os.path.isdir(profile_paths["target"]):
        shutil.rmtree(profile_paths["target"])
    if os.path.isfile(profile_paths["claude_md"]):
        claude_md_text = open(profile_paths["claude_md"], encoding="utf-8").read()
        open(profile_paths["claude_md"], "w", encoding="utf-8").write(remove_block(claude_md_text))
    state["current"] = None
    save_state(profile_paths, state)
    log(f"uninstalled; backup {backup['id']} (use rollback --backup {backup['id']} to restore)")
    return 0


def safe_extract(zip_path, dest):
    """Extract a release ZIP refusing absolute paths, '..' segments, symlinks and names that escape dest."""
    import zipfile, stat
    dest = os.path.abspath(dest)
    os.makedirs(dest, exist_ok=True)
    extracted_count = 0
    with zipfile.ZipFile(zip_path) as archive:
        for info in archive.infolist():
            name = info.filename.replace("\\", "/")
            if name.startswith("/") or os.path.isabs(name) or ".." in name.split("/") or ":" in name.split("/")[0]:
                raise ValueError("refused unsafe member path: " + info.filename)
            if stat.S_ISLNK(info.external_attr >> 16):
                raise ValueError("refused symlink member: " + info.filename)
            target = os.path.abspath(os.path.join(dest, name))
            if not (target == dest or target.startswith(dest + os.sep)):
                raise ValueError("refused member escaping destination: " + info.filename)
            archive.extract(info, dest)
            extracted_count += 1
    return extracted_count


def cmd_extract(options):
    try:
        extracted_count = safe_extract(options.zip, options.to)
    except (ValueError, Exception) as error:  # noqa
        log(f"ABORT: {error}"); return 2
    log(f"extracted {extracted_count} members into {os.path.abspath(options.to)}")
    return 0


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)
    subparser = sub.add_parser("install"); subparser.add_argument("--claude-dir"); subparser.add_argument("--no-claude-md", action="store_true"); subparser.add_argument("--force", action="store_true"); subparser.add_argument("--dry-run", action="store_true")
    subparser.add_argument("--no-deps", action="store_true", help="do not install the optional helpers automatically")
    subparser.add_argument("--setup-deps", action="store_true", help="instead of the automatic install, ask y/N for each optional helper")
    subparser.add_argument("--accept-deps", default="", help="non-interactive consent: comma list of dependency ids (or 'all') that setup may install")
    subparser = sub.add_parser("deps", help="optional helpers: status | plan | ensure (automatic) | setup [--accept ids] [--dry-run] | verify-source | cowork")
    subparser.add_argument("action", choices=["status", "plan", "ensure", "setup", "verify-source", "cowork"]); subparser.add_argument("rest", nargs=argparse.REMAINDER)
    subparser.add_argument("--claude-dir")
    subparser = sub.add_parser("verify"); subparser.add_argument("--claude-dir")
    subparser = sub.add_parser("self-check"); subparser.add_argument("--claude-dir"); subparser.add_argument("--project"); subparser.add_argument("--json", action="store_true")
    subparser = sub.add_parser("list-backups"); subparser.add_argument("--claude-dir")
    subparser = sub.add_parser("rollback"); subparser.add_argument("--claude-dir"); subparser.add_argument("--backup")
    subparser = sub.add_parser("uninstall"); subparser.add_argument("--claude-dir")
    subparser = sub.add_parser("extract"); subparser.add_argument("--zip", required=True); subparser.add_argument("--to", required=True)
    options = parser.parse_args()
    if sys.version_info < (3, 8):
        print("Python 3.8+ required"); return 2
    return {"install": cmd_install, "verify": cmd_verify, "self-check": cmd_self_check, "list-backups": cmd_list,
            "rollback": cmd_rollback, "uninstall": cmd_uninstall, "extract": cmd_extract, "deps": cmd_deps}[options.cmd](options)


if __name__ == "__main__":
    sys.exit(main())

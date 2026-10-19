#!/usr/bin/env python3
"""DGA Skills Toolkit — dependency manager for optional upstream skills (stdlib only).

  python3 deps.py status        [--claude-dir DIR] [--project DIR] [--json]
  python3 deps.py plan          [--claude-dir DIR]                      # what setup would do, nothing changes
  python3 deps.py verify-source [ID ...] [--json]                       # fetch source, check marketplace + plugin + licence
  python3 deps.py setup         [--claude-dir DIR] [--accept ID[,ID]|all] [--dry-run] [--json]
  python3 deps.py ensure        [--claude-dir DIR] [--dry-run] [--force] [--json]   # automatic: install missing helpers, no questions
  python3 deps.py cowork                                                # what happens in Claude Desktop / Cowork

Rules (registry/dependencies.json → "policy"):
  * Zero-Manual-Dependency-Setup: `ensure` — run automatically by `install.py install` — installs every missing helper
    without a question (running the setup is the request; opt out: --no-deps / DGA_SKILLS_NO_AUTO_DEPS=1). It prints what it does
    and records it in <claude-dir>/dga-skills-install/dependencies-state.json. `setup` keeps the per-helper y/N flow;
  * turned-off helpers are reported as INSTALLED BUT DISABLED (never NOT INSTALLED) and are never turned on automatically;
  * in Claude Desktop / Cowork nothing is installed (platform limit): turned-on synced skills are used, the rest falls back;
  * installs only from the trusted marketplace listed in the registry, through the official `claude plugin` CLI;
  * verifies the source first (marketplace name, plugin entry, licence text) and refuses on any mismatch;
  * copies nothing into the toolkit; "installed" never means "invoked" — invocation is only proven by a session transcript.
Exit codes: 0 ok · 2 usage · 5 source verification refused · 6 install failed · 7 claude CLI not available.
"""
import sys; sys.dont_write_bytecode = True
import argparse, datetime, glob, json, os, shutil, subprocess, tempfile

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
REG_PATH = os.path.join(SKILL, "registry", "dependencies.json")
HOST_SKILL_ROOTS = [root for root in os.environ.get("DGA_DEPS_HOST_ROOTS", "/mnt/skills").split(os.pathsep) if root]
# claude.ai / Cowork sandboxes mount account + Anthropic skills under /mnt/skills. Those only count when THIS skill is itself
# running from such a mount (i.e. we are inside that host); a Claude Code session never loads /mnt/skills.
def running_on_host():
    real = os.path.realpath(SKILL)
    return (any(os.path.abspath(SKILL).startswith(os.path.abspath(root) + os.sep) for root in HOST_SKILL_ROOTS)
            or (os.sep + os.path.join("skills", "synced") + os.sep) in real)   # Claude Desktop / Cowork sync our own skill there
OPT_OUT_ENV = "DGA_SKILLS_NO_AUTO_DEPS"   # set to 1 to stop the automatic install of optional helpers
DISABLED_WORDS = ("disabled", "off", "inactive")


def synced_buckets(cdir):
    """Skill folders a host app (Claude Desktop / Cowork / claude.ai) synced for this account.
    Layout observed 2026-10-18 on a real Cowork session: <claude dir>/skills/synced/<org>_<user>/{manifest.json, <skill>/SKILL.md},
    also mounted as /mnt/skills/{user,organization,private,plugins}. manifest.json lists the account's skills
    ({skillId, name, source, backingPluginId?}). Buckets inside the claude dir always count (the host loads them); buckets found only
    through /mnt/skills count when this skill itself runs on that host."""
    patterns = [os.path.join(cdir, "skills", "synced", "*", "manifest.json")]
    if running_on_host():
        patterns += [os.path.join(root, "*", "manifest.json") for root in HOST_SKILL_ROOTS]
    out, seen = [], set()
    for pattern in patterns:
        for manifest_path in sorted(glob.glob(pattern)):
            bucket = os.path.realpath(os.path.dirname(manifest_path))
            man = jload(manifest_path, None)
            if bucket in seen or not isinstance(man, dict) or not isinstance(man.get("skills"), list):
                continue
            seen.add(bucket); out.append((bucket, man))
    return out


def manifest_enabled(entry):
    """True / False from an explicit flag on a manifest entry; None when the entry carries no flag (listed = synced = on)."""
    if entry is None:
        return None
    if entry.get("enabled") is False or entry.get("disabled") is True or entry.get("isEnabled") is False:
        return False
    if str(entry.get("status") or entry.get("state") or "").lower() in DISABLED_WORDS:
        return False
    return True
TEST_SOURCES_ENV = "DGA_DEPS_TEST_SOURCES"  # tests only: JSON {id: local git path} replacing the GitHub source


def now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")


def registry():
    return json.load(open(REG_PATH, encoding="utf-8"))


def claude_dir(arg):
    return os.path.abspath(os.path.expanduser(arg or os.environ.get("CLAUDE_CONFIG_DIR") or "~/.claude"))


def jload(path, default=None):
    try:
        return json.load(open(path, encoding="utf-8"))
    except Exception:
        return default


def source_of(dep):
    over = os.environ.get(TEST_SOURCES_ENV)
    if over:
        sources = json.loads(over)
        if dep["id"] in sources:
            return sources[dep["id"]], True
    return dep["marketplace"]["source"], False


# ---------------------------------------------------------------- detection
def detect(dep, cdir, project=None):
    """Return where the dependency is present. Never runs the skill, never touches the network."""
    found = []
    plugin, mkt = dep["plugin"], dep["marketplace"]["name"]
    inst = (jload(os.path.join(cdir, "plugins", "installed_plugins.json"), {}) or {}).get("plugins", {})
    enabled = (jload(os.path.join(cdir, "settings.json"), {}) or {}).get("enabledPlugins", {}) or {}
    for key, recs in inst.items():
        name, _, from_mkt = key.partition("@")
        if name != plugin:
            continue
        for record in recs if isinstance(recs, list) else [recs]:
            path = record.get("installPath") or ""
            skills = glob.glob(os.path.join(path, "**", "SKILL.md"), recursive=True) if path else []
            found.append({"via": "claude-code-plugin", "id": key, "trustedSource": from_mkt == mkt, "enabled": bool(enabled.get(key, False)),
                          "version": record.get("version"), "commit": record.get("gitCommitSha"), "path": path, "skillFiles": len(skills)})
    for base, via in ((os.path.join(cdir, "skills"), "user-skill"), (os.path.join(project, ".claude", "skills") if project else None, "project-skill")):
        if base and os.path.isfile(os.path.join(base, dep["id"], "SKILL.md")):
            found.append({"via": via, "path": os.path.join(base, dep["id"]), "enabled": True, "trustedSource": None})
    seen = {os.path.realpath(location["path"]) for location in found if location.get("path")}
    # skills synced by Claude Desktop / Cowork / claude.ai for this account (skills/synced/<bucket>/ + manifest.json)
    for bucket, man in synced_buckets(cdir):
        entry = next((skill_entry for skill_entry in man["skills"] if isinstance(skill_entry, dict) and dep["id"] in (skill_entry.get("name"), skill_entry.get("skillId"))), None)
        folder = os.path.join(bucket, dep["id"])
        has_files = os.path.isfile(os.path.join(folder, "SKILL.md"))
        if entry is None and not has_files:
            continue
        real_folder = os.path.realpath(folder)
        if real_folder in seen:
            continue
        flag = manifest_enabled(entry)
        enabled = False if (flag is False or entry is None) else True        # folder present but not in the manifest = turned off / stale
        found.append({"via": "host-synced-skill", "path": folder, "enabled": enabled, "trustedSource": None,
                      "manifestEntry": bool(entry), "source": (entry or {}).get("source"), "skillId": (entry or {}).get("skillId"),
                      "backingPluginId": (entry or {}).get("backingPluginId"), "filesPresent": has_files,
                      "note": None if enabled else ("listed as turned off in the host manifest" if entry else "folder present but not listed in the host manifest")})
        seen.add(real_folder)
    # skills provided by the host app itself (e.g. /mnt/skills/public) and siblings of this skill's own install folder
    roots = ([os.path.join(root, "*") for root in HOST_SKILL_ROOTS] + [os.path.dirname(SKILL)]) if running_on_host() else []
    for pattern in roots:
        for folder in glob.glob(os.path.join(pattern, dep["id"])) if "*" in pattern else [os.path.join(pattern, dep["id"])]:
            real_folder = os.path.realpath(folder)
            if os.path.isfile(os.path.join(folder, "SKILL.md")) and real_folder not in seen and real_folder != os.path.realpath(SKILL):
                found.append({"via": "host-provided-skill", "path": folder, "enabled": None, "trustedSource": None}); seen.add(real_folder)
    runnable = None
    script_path = None
    runnable_check = dep.get("runnableCheck")
    if runnable_check and found:
        scripts = []
        want = runnable_check["script"].replace("**/", "").split("/")          # e.g. ui-ux-pro-max/scripts/search.py
        for location in found:                                              # os.walk, not glob: plugin skills live under hidden .claude/
            for directory_path, directory_names, file_names in os.walk(location["path"]):
                directory_names[:] = [directory_name for directory_name in directory_names if directory_name not in ("node_modules", ".git")]
                if want[-1] in file_names and directory_path.replace(os.sep, "/").endswith("/".join(want[:-1])):
                    scripts.append(os.path.join(directory_path, want[-1]))
        runnable = False
        script_path = scripts[0] if scripts else None
        for script in scripts[:1]:
            try:
                record = subprocess.run([sys.executable, script] + runnable_check["args"], capture_output=True, text=True, timeout=30)
                runnable = record.returncode == 0
            except Exception:
                runnable = False
    active = [location for location in found if location.get("enabled") is not False]
    host = running_on_host()
    if not found and host:
        # Claude Desktop / Cowork do not show turned-off skills to the session, so absence cannot be told apart from "turned off".
        state = "NOT AVAILABLE IN THIS SESSION (not installed, or turned off in Customize > Skills)"
    elif not found:
        state = "NOT INSTALLED"
    elif not active:
        state = "INSTALLED BUT DISABLED"
    elif runnable is False:
        state = "INSTALLED, NOT RUNNABLE"
    else:
        state = "INSTALLED" + (" + RUNNABLE" if runnable else "")
    untrusted = [location for location in found if location.get("trustedSource") is False]
    return {"id": dep["id"], "state": state, "available": bool(active) and runnable is not False, "runnable": runnable, "locations": found,
            "untrustedSource": bool(untrusted), "script": script_path, "invocation": "NOT PROVEN BY DETECTION (only a session transcript proves invocation)",
            "fallback": None if active else dep["fallback"], "flag": None if active else dep["flag"]}


def environment(cdir):
    if running_on_host():
        return "claude-desktop-cowork"            # this skill itself was synced/uploaded into the host app
    return "claude-code"


def next_action(dep, detection, env):
    """One imperative line for the session: what to do NOW with this helper (Zero-Manual-Dependency-Setup)."""
    if detection["available"]:
        names = dep["skillNames"][0] if any(location["via"] == "claude-code-plugin" for location in detection["locations"]) else dep["id"]
        line = (f"USE NOW (Enhanced/Creative design work, before choosing a direction): Skill tool \"{names}\""
                + ("" if names != dep["id"] else f" (the session may list it with a prefix, e.g. \"<prefix>:{dep['id']}\")"))
        if detection.get("script"):
            line += f"; then run: python3 {detection['script']} \"<subject terms>\" --design-system -p \"<Project>\""
        return line
    if detection["state"].startswith("INSTALLED"):
        return f"turned off by the user — do not re-enable; use the built-in fallback {dep['fallback']} and say so in one line"
    if env == "claude-code":
        return (f"NEXT (automatic — do not ask the user, do not tell them to install anything): python3 {os.path.join(SKILL, 'tools', 'deps.py')} ensure"
                f"  — installs it from the verified official source for the NEXT session; continue THIS task with {dep['fallback']}")
    return (f"built-in fallback {dep['fallback']} — platform limit: skills cannot be installed from inside a skill here; "
            "do not ask the user to install or configure anything")


def status(cdir, project=None):
    reg = registry()
    return {"claudeDir": cdir, "claudeCli": shutil.which("claude"), "checked": now(), "hostSandbox": running_on_host(),
            "environment": environment(cdir), "syncedBuckets": [bucket for bucket, _ in synced_buckets(cdir)],
            "dependencies": [detect(dependency, cdir, project) for dependency in reg["dependencies"]]}


# ---------------------------------------------------------------- source verification
def verify_source(dep, timeout=180):
    src, is_test = source_of(dep)
    url = src if (is_test or "://" in src or os.path.isdir(src)) else f"https://github.com/{src}.git"
    out = {"id": dep["id"], "source": src, "testSource": is_test, "checks": []}
    work_dir = tempfile.mkdtemp(prefix="dga-deps-verify-")
    def chk(cid, passed, evidence):
        out["checks"].append({"id": cid, "status": "PASS" if passed else "FAIL", "evidence": str(evidence)[:300]})
    try:
        git = shutil.which("git")
        if not git:
            out["status"] = "NOT VERIFIED"; out["reason"] = "git not available"; return out
        clone_result = subprocess.run([git, "clone", "--quiet", "--depth", "1", "--filter=blob:none", "--sparse", url, os.path.join(work_dir, "r")], capture_output=True, text=True, timeout=timeout)
        if clone_result.returncode != 0:
            out["status"] = "NOT VERIFIED"; out["reason"] = "source not reachable (offline or blocked): " + (clone_result.stderr or clone_result.stdout).strip()[:200]; return out
        repo = os.path.join(work_dir, "r")
        paths = [".claude-plugin", dep["licence"]["file"]] + ([dep["pluginPath"]] if dep.get("pluginPath") not in (None, ".") else [])
        is_file = lambda path_entry: os.path.basename(path_entry).upper().startswith("LICENSE") or bool(os.path.splitext(path_entry)[1])
        patterns = ["/" + path_entry.strip("/") + ("" if is_file(path_entry) else "/") for path_entry in paths]
        subprocess.run([git, "-C", repo, "sparse-checkout", "set", "--no-cone"] + patterns, capture_output=True, text=True, timeout=timeout)
        head = subprocess.run([git, "-C", repo, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
        out["commit"] = head
        marketplace = jload(os.path.join(repo, ".claude-plugin", "marketplace.json"), {}) or {}
        chk("marketplace-name", marketplace.get("name") == dep["marketplace"]["name"], f"marketplace.json name={marketplace.get('name')!r}, expected {dep['marketplace']['name']!r}")
        entry = next((plugin for plugin in marketplace.get("plugins", []) if plugin.get("name") == dep["plugin"]), None)
        chk("plugin-entry", entry is not None, f"plugin {dep['plugin']!r} {'listed' if entry else 'NOT listed'} in marketplace.json")
        lic = os.path.join(repo, dep["licence"]["file"])
        txt = open(lic, encoding="utf-8", errors="ignore").read() if os.path.isfile(lic) else ""
        chk("licence", dep["licence"]["match"] in txt, f"{dep['licence']['file']}: {'contains' if dep['licence']['match'] in txt else 'does NOT contain'} {dep['licence']['match']!r} (expected {dep['licence']['spdx']})")
        if dep["licence"].get("verifiedCommit"):
            out["reviewedCommit"] = dep["licence"]["verifiedCommit"]
            out["sameAsReviewed"] = head == dep["licence"]["verifiedCommit"]
        out["status"] = "VERIFIED" if all(check["status"] == "PASS" for check in out["checks"]) else "REFUSED"
        return out
    except subprocess.TimeoutExpired:
        out["status"] = "NOT VERIFIED"; out["reason"] = "timeout"; return out
    finally:
        shutil.rmtree(work_dir, ignore_errors=True)


# ---------------------------------------------------------------- setup
def run_claude(args, cdir, timeout=600):
    cli = shutil.which("claude")
    env = dict(os.environ, CLAUDE_CONFIG_DIR=cdir)
    completed = subprocess.run([cli] + args, capture_output=True, text=True, timeout=timeout, env=env)
    last = (completed.stdout.strip().splitlines() or [""])[-1]
    try:
        parsed = json.loads(last)
    except Exception:
        parsed = None
    return completed.returncode, parsed, (completed.stdout + completed.stderr)[-800:]


def card(dep):
    return "\n".join([
        f"  • {dep['displayName']}  [{dep['id']}]",
        f"    what for : {dep['purpose']}",
        f"    needed   : {dep['requiredFor']}",
        f"    publisher: {dep['publisher']}   trust: {dep['trust']}",
        f"    source   : {dep['marketplace']['url']}  (marketplace {dep['marketplace']['name']})",
        f"    licence  : {dep['licence']['spdx']} (reviewed {dep['licence']['verified']})",
        f"    commands : " + "  &&  ".join(dep["claudeCode"]["commands"]),
        f"    without it: {dep['fallback']} (local fallback, reduced capability)"])


def last_auto_failure(cdir, dep_id, days=7):
    hist = jload(os.path.join(cdir, "dga-skills-install", "dependencies-state.json"), {"runs": []}) or {"runs": []}
    for run in reversed(hist.get("runs", [])):
        if run.get("mode") != "auto":
            continue
        for item in run.get("items", []):
            if item.get("id") == dep_id and item.get("result", "").startswith(("INSTALL FAILED", "REFUSED")):
                try:
                    started_at = datetime.datetime.fromisoformat(run["started"])
                    if (datetime.datetime.now(datetime.timezone.utc) - started_at).days < days:
                        return item["result"]
                except Exception:
                    return item["result"]
            elif item.get("id") == dep_id:
                return None
    return None


def setup(cdir, accept, dry_run, as_json, auto=False, force=False):
    """auto=True is the Zero-Manual-Dependency-Setup path (`deps.py ensure`, run by `install.py install`): every missing helper is
    installed without a question, because running the toolkit setup is the request — but ONLY from the trusted marketplace in the
    registry, ONLY after its source and licence verify, and never on a host app (Cowork) where installing is not possible."""
    reg = registry(); current_status = status(cdir)
    by_id = {dependency["id"]: dependency for dependency in reg["dependencies"]}
    missing = [detection for detection in current_status["dependencies"] if not detection["available"]]
    report = {"claudeDir": cdir, "started": now(), "items": [], "dryRun": dry_run, "mode": "auto" if auto else "guided",
              "environment": current_status["environment"]}
    log = (lambda *a: None) if as_json else (lambda *a: print(*a))
    if auto and os.environ.get(OPT_OUT_ENV, "") not in ("", "0"):
        log(f"Automatic helper install switched off ({OPT_OUT_ENV}). The toolkit uses its built-in fallback.")
        report["result"] = "OPTED OUT"; return 0, report
    if not missing:
        log("Optional helpers: all available — nothing to install.")
        report["result"] = "NOTHING TO DO"; return 0, report
    if auto and current_status["environment"] != "claude-code":
        # Platform limit: a skill cannot install or turn on other skills in Claude Desktop / Cowork / claude.ai.
        for detection in missing:
            report["items"].append({"id": detection["id"], "before": detection["state"], "result": "NOT INSTALLABLE HERE (host app manages skills)"})
        log("Running inside Claude Desktop / Cowork: helpers that are turned on are used automatically; missing ones are replaced by the "
            "built-in fallback. Skills cannot be installed from inside a skill on this platform.")
        report["result"] = "HOST APP — FALLBACK"; return 0, report
    if not shutil.which("claude") and not dry_run:
        log("The `claude` CLI is not on PATH, so nothing can be installed from here.\n"
            "Claude Desktop / Cowork users: run `python3 deps.py cowork` for the in-app steps.")
        report["result"] = "CLAUDE CLI NOT AVAILABLE"; return 7, report
    interactive = sys.stdin.isatty() and not as_json and not auto
    acc = set() if not accept else ({dependency["id"] for dependency in reg["dependencies"]} if accept == ["all"] else set(accept))
    log("DGA Skills Toolkit — optional helpers: installing missing ones from their verified official sources.\n" if auto else
        "DGA Skills Toolkit — optional dependency setup. Nothing is installed without your consent.\n")
    rc_final = 0
    for detection in missing:
        dep = by_id[detection["id"]]; item = {"id": dep["id"], "before": detection["state"]}
        log(card(dep))
        if auto and detection["state"].startswith("INSTALLED"):
            # turned off or not runnable: that is the user's choice / an environment problem — never overridden automatically
            log(f"    → left as is ({detection['state']}). Turn it on yourself if you want it: claude plugin enable {dep['plugin']}@{dep['marketplace']['name']}\n")
            item["result"] = "LEFT AS IS (" + detection["state"] + ")"; report["items"].append(item); continue
        if auto and not force and last_auto_failure(cdir, dep["id"]):
            log(f"    → skipped: an automatic attempt failed recently ({last_auto_failure(cdir, dep['id'])}). Retry: deps.py ensure --force\n")
            item["result"] = "SKIPPED (RECENT FAILURE)"; report["items"].append(item); continue
        if auto:
            consent, how = True, "toolkit setup (install.py install / deps.py ensure) — automatic; opt out with --no-deps or " + OPT_OUT_ENV + "=1"
        elif dep["id"] in acc:
            consent, how = True, "--accept flag"
        elif interactive:
            consent = input(f"    Install {dep['displayName']} now? [y/N] ").strip().lower() in ("y", "yes"); how = "interactive prompt"
        else:
            consent, how = False, "no consent (non-interactive and not named in --accept)"
        item["consent"] = {"given": consent, "how": how, "at": now()}
        if not consent:
            log("    → skipped (no consent). The toolkit will use its local fallback.\n")
            item["result"] = "SKIPPED (NO CONSENT)"; report["items"].append(item); continue
        verification = verify_source(dep); item["sourceVerification"] = verification
        if verification["status"] != "VERIFIED":
            log(f"    → source {verification['status']}: {verification.get('reason') or [check for check in verification['checks'] if check['status'] != 'PASS']} — NOT installed.\n")
            item["result"] = "REFUSED (SOURCE " + verification["status"] + ")"; report["items"].append(item); rc_final = max(rc_final, 5); continue
        log(f"    source verified at commit {verification.get('commit', '?')[:12]}" + ("" if verification.get("sameAsReviewed", True) else " (newer than the reviewed commit — licence re-checked)"))
        src, _ = source_of(dep)
        known = jload(os.path.join(cdir, "plugins", "known_marketplaces.json"), {}) or {}
        steps = ([] if dep["marketplace"]["name"] in known else [["plugin", "marketplace", "add", src, "--json"]]) + [["plugin", "install", f"{dep['plugin']}@{dep['marketplace']['name']}", "--json"]]
        item["commands"] = ["claude " + " ".join(command_args[:-1]) for command_args in steps]
        if dry_run:
            log("    → dry run: would run " + "  &&  ".join(item["commands"]) + "\n"); item["result"] = "DRY RUN"; report["items"].append(item); continue
        succeeded = True
        for command_args in steps:
            exit_code, parsed, tail = run_claude(command_args, cdir)
            item.setdefault("cli", []).append({"args": command_args, "exit": exit_code, "outcome": (parsed or {}).get("outcome"), "tail": tail[-300:]})
            if exit_code != 0 or (parsed and parsed.get("outcome") not in (None, "ok")):
                succeeded = False; break
        after = detect(dep, cdir); item["after"] = after["state"]
        item["result"] = "INSTALLED" if succeeded and after["available"] else "INSTALL FAILED"
        if item["result"] != "INSTALLED": rc_final = max(rc_final, 6)
        log(f"    → {item['result']} ({after['state']})\n")
        report["items"].append(item)
    report["finished"] = now(); report["result"] = "DONE"
    state_dir = os.path.join(cdir, "dga-skills-install"); os.makedirs(state_dir, exist_ok=True)
    state_path = os.path.join(state_dir, "dependencies-state.json"); hist = jload(state_path, {"runs": []}) or {"runs": []}
    hist["runs"].append(report); json.dump(hist, open(state_path, "w", encoding="utf-8"), indent=1)
    if any(i["result"] == "INSTALLED" for i in report["items"]):
        log("Start a NEW Claude Code session (or run /reload-plugins) so the new skills are loaded.")
    return rc_final, report


def cowork_text():
    reg = registry()
    lines = ["DGA Skills Toolkit in Claude Desktop / Cowork", "",
             "1) Upload the skill once: Customize > Skills > + > Upload skill → DGA-Skills-Toolkit-COWORK-UPLOAD.zip (turned on by default).",
             "   Everything the skill needs (rules, DGA references, registries, patterns, templates, tools, raw data) is inside that ZIP.",
             "   If the legacy 'ahmed-skills' skill (pre-5.0 name) is listed, turn it OFF so the two do not compete.", "",
             "2) Optional helpers — nothing to do for the toolkit to work:",
             "   • helpers that are already turned on in your account are found and used automatically;",
             "   • missing or turned-off helpers are replaced by the toolkit's built-in fallback (no question, no manual step);",
             "   • platform limit: a skill cannot install or turn on other skills in Claude Desktop / Cowork, so the toolkit never tries.",
             "   Only if you WANT the extra design research, add them yourself (optional):"]
    for dependency in reg["dependencies"]:
        lines.append(f"   • {dependency['displayName']} — {dependency['licence']['spdx']} — {dependency['marketplace']['url']}")
        for option in dependency["cowork"]["options"]:
            lines.append(f"       - {option}")
    lines += ["", "Status: helper detection verified on a real Cowork session (synced skills); upload of this ZIP and the optional",
              "Customize steps are NOT VERIFIED from here (they change the account) — see the Cowork install guide checklist."]
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)
    for name in ("status", "plan", "setup"):
        entry = sub.add_parser(name); entry.add_argument("--claude-dir"); entry.add_argument("--json", action="store_true")
        if name == "status": entry.add_argument("--project")
        if name == "setup": entry.add_argument("--accept", default=""); entry.add_argument("--dry-run", action="store_true")
    ensure_parser = sub.add_parser("ensure", help="Zero-Manual-Dependency-Setup: install missing helpers automatically (verified sources only)")
    ensure_parser.add_argument("--claude-dir"); ensure_parser.add_argument("--json", action="store_true"); ensure_parser.add_argument("--dry-run", action="store_true")
    ensure_parser.add_argument("--force", action="store_true", help="retry even if an automatic attempt failed in the last 7 days")
    verify_parser = sub.add_parser("verify-source"); verify_parser.add_argument("ids", nargs="*"); verify_parser.add_argument("--json", action="store_true")
    sub.add_parser("cowork")
    arguments = parser.parse_args()
    if arguments.cmd == "cowork":
        print(cowork_text()); return 0
    if arguments.cmd == "verify-source":
        reg = registry(); ids = arguments.ids or [dependency["id"] for dependency in reg["dependencies"]]
        results = [verify_source(dependency) for dependency in reg["dependencies"] if dependency["id"] in ids]
        if arguments.json: print(json.dumps(results, indent=1))
        else:
            for result in results: print(f"{result['id']}: {result['status']} {result.get('commit', '')[:12]} {result.get('reason', '')} " + " ".join(f"{check['id']}={check['status']}" for check in result["checks"]))
        return 0 if all(result["status"] == "VERIFIED" for result in results) else 5
    cdir = claude_dir(arguments.claude_dir)
    if arguments.cmd == "status":
        current_status = status(cdir, arguments.project)
        if arguments.json: print(json.dumps(current_status, indent=1))
        else:
            print(f"environment: {current_status['environment']}" + (f" (synced skills: {len(current_status['syncedBuckets'])} bucket)" if current_status["syncedBuckets"] else ""))
            reg = {dependency_entry["id"]: dependency_entry for dependency_entry in registry()["dependencies"]}
            for detection in current_status["dependencies"]:
                where = ", ".join(sorted({location["via"] for location in detection["locations"]})) or "—"
                print(f"optional {detection['id']}: {detection['state']} (via {where})" + (f" -> flag {detection['flag']}, fallback {detection['fallback']}" if detection["flag"] else "") + (" [WARNING: installed from an unlisted marketplace]" if detection["untrustedSource"] else ""))
                print("   → " + next_action(reg[detection["id"]], detection, current_status["environment"]))
            print("installed ≠ invoked: invocation is only proven by a session transcript.")
        return 0
    if arguments.cmd == "plan":
        reg = registry(); current_status = status(cdir)
        miss = [detection for detection in current_status["dependencies"] if not detection["available"]]
        if not miss: print("All optional dependencies are available."); return 0
        print("Missing optional dependencies (setup asks before installing each one):")
        for entry in miss: print(card(next(dependency for dependency in reg["dependencies"] if dependency["id"] == entry["id"])))
        print("\nRun:  python3 install.py deps setup        (interactive)\n  or: python3 install.py deps setup --accept frontend-design,ui-ux-pro-max")
        return 0
    if arguments.cmd == "ensure":
        exit_code, rep = setup(cdir, [], arguments.dry_run, arguments.json, auto=True, force=arguments.force)
        if arguments.json: print(json.dumps(rep, indent=1))
        return exit_code
    if arguments.cmd == "setup":
        acc = [accepted_id.strip() for accepted_id in arguments.accept.split(",") if accepted_id.strip()]
        exit_code, rep = setup(cdir, acc, arguments.dry_run, arguments.json)
        if arguments.json: print(json.dumps(rep, indent=1))
        return exit_code
    return 2


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""DGA Skills Toolkit — resource resolver (stdlib only, offline, read-only unless `extract`).

The full release keeps every reference file as its own file. The Claude Desktop / Cowork edition (build_cowork.py) must fit the
upload limits (≤200 ZIP entries, ≤30 MB uncompressed, no nested SKILL.md, plain file names), so it stores the SAME bytes in fewer files:
  references/dga-live/{web,mobile,templates}/*.md  →  references/dga-live/{WEB,MOBILE,TEMPLATES}-CATALOG.md   (plain Markdown, readable)
  references/dga-live/data/**/*.json                →  references/dga-live/DATA-PACK.json.gz                  (gzip JSON)
  registry/packages/platformscode-core@<v>.json      →  registry/packages/platformscode-core-v<v>.json
Every packed file carries its original SHA-256; reads are verified. Tools call exists()/read_text() and work in both layouts.

  python3 tools/dga_res.py cat  references/dga-live/web/buttons.md      # print one original file (either layout)
  python3 tools/dga_res.py list [PREFIX]                                 # list logical files
  python3 tools/dga_res.py verify [--json]                               # every packed file matches its recorded SHA-256
  python3 tools/dga_res.py extract --to DIR                              # rebuild the full original tree of packed files
  python3 tools/dga_res.py pkg-api 0.0.52                                # path of the registry API file for @platformscode/core
"""
import sys; sys.dont_write_bytecode = True
import argparse, fnmatch, gzip, hashlib, json, os

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
LIVE = "references/dga-live"
CATALOGS = {f"{LIVE}/web/": f"{LIVE}/WEB-CATALOG.md", f"{LIVE}/mobile/": f"{LIVE}/MOBILE-CATALOG.md",
            f"{LIVE}/templates/": f"{LIVE}/TEMPLATES-CATALOG.md"}
DATA_PREFIX = f"{LIVE}/data/"
DATA_PACK = f"{LIVE}/DATA-PACK.json.gz"
BEGIN, END = "<!-- DGA-REF:BEGIN ", "<!-- DGA-REF:END "
_cat_cache, _pack_cache = {}, {}


def sha(data):
    return hashlib.sha256(data).hexdigest()


def _norm(relative_path):
    return relative_path.replace(os.sep, "/").lstrip("./") if not relative_path.startswith("../") else relative_path


def _catalog(path):
    """{rel: (sha256, text)} parsed from one catalog file."""
    if path not in _cat_cache:
        out, catalog_file = {}, os.path.join(SKILL, path)
        if os.path.isfile(catalog_file):
            text = open(catalog_file, encoding="utf-8", newline="").read()
            i = 0
            while True:
                begin_index = text.find(BEGIN, i)
                if begin_index < 0: break
                eol = text.index("-->\n", begin_index)
                head = text[begin_index + len(BEGIN):eol].split()
                relative_path, digest = head[0], next(field.split("=", 1)[1] for field in head if field.startswith("sha256="))
                start = eol + 4
                stop = text.index("\n" + END + relative_path + " -->", start)
                out[relative_path] = (digest, text[start:stop]); i = stop + 1
        _cat_cache[path] = out
    return _cat_cache[path]


def _pack():
    if "p" not in _pack_cache:
        pack_path = os.path.join(SKILL, DATA_PACK)
        _pack_cache["p"] = json.loads(gzip.decompress(open(pack_path, "rb").read()).decode("utf-8"))["files"] if os.path.isfile(pack_path) else {}
    return _pack_cache["p"]


def _packed(relative_path):
    """(sha256, text) for a packed file, or None."""
    for pre, cat in CATALOGS.items():
        if relative_path.startswith(pre):
            return _catalog(cat).get(relative_path)
    if relative_path.startswith(DATA_PREFIX):
        entry = _pack().get(relative_path)
        return (entry["sha256"], entry["text"]) if entry else None
    return None


def exists(relative_path):
    relative_path = _norm(relative_path)
    return os.path.isfile(os.path.join(SKILL, relative_path)) or _packed(relative_path) is not None


def read_bytes(relative_path):
    relative_path = _norm(relative_path)
    file_path = os.path.join(SKILL, relative_path)
    if os.path.isfile(file_path):
        return open(file_path, "rb").read()
    hit = _packed(relative_path)
    if hit is None:
        raise FileNotFoundError(relative_path)
    data = hit[1].encode("utf-8")
    if sha(data) != hit[0]:
        raise ValueError(f"{relative_path}: packed content does not match its recorded SHA-256")
    return data


def read_text(relative_path):
    return read_bytes(relative_path).decode("utf-8")


def listing(prefix=""):
    """Logical file list (on-disk files + packed files), relative to the skill."""
    seen = set()
    for directory_path, directory_names, file_names in os.walk(SKILL):
        directory_names[:] = [directory_name for directory_name in directory_names if directory_name not in ("__pycache__", "node_modules", ".git")]
        for file_name in file_names:
            seen.add(os.path.relpath(os.path.join(directory_path, file_name), SKILL).replace(os.sep, "/"))
    for cat in CATALOGS.values():
        seen |= set(_catalog(cat))
    seen |= set(_pack())
    return sorted(logical_path for logical_path in seen if logical_path.startswith(prefix))


def glob_rel(pattern):
    """Like glob for one directory level, e.g. glob_rel("references/dga-live/web/*.md")."""
    directory, name_pattern = pattern.rsplit("/", 1)
    return [logical_path for logical_path in listing(directory + "/") if "/" not in logical_path[len(directory) + 1:] and fnmatch.fnmatchcase(logical_path[len(directory) + 1:], name_pattern)]


def pkg_api(version):
    """Path of the registry API file for @platformscode/core@<version> in either naming, or None."""
    for name in (f"platformscode-core@{version}.json", f"platformscode-core-v{version}.json"):
        file_path = os.path.join(SKILL, "registry", "packages", name)
        if os.path.isfile(file_path):
            return file_path
    return None


def layout():
    packed = any(os.path.isfile(os.path.join(SKILL, catalog)) for catalog in CATALOGS.values()) or os.path.isfile(os.path.join(SKILL, DATA_PACK))
    return "packed (Claude Desktop / Cowork edition)" if packed else "files (full release)"


def verify():
    report = {"layout": layout(), "packedFiles": 0, "bad": []}
    for cat in CATALOGS.values():
        for relative_path, (digest, text) in _catalog(cat).items():
            report["packedFiles"] += 1
            if sha(text.encode("utf-8")) != digest: report["bad"].append(relative_path)
    for relative_path, entry in _pack().items():
        report["packedFiles"] += 1
        if sha(entry["text"].encode("utf-8")) != entry["sha256"]: report["bad"].append(relative_path)
    report["status"] = "OK" if not report["bad"] else "FAILED"
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)
    cat_parser = sub.add_parser("cat"); cat_parser.add_argument("rel")
    list_parser = sub.add_parser("list"); list_parser.add_argument("prefix", nargs="?", default="")
    verify_parser = sub.add_parser("verify"); verify_parser.add_argument("--json", action="store_true")
    extract_parser = sub.add_parser("extract"); extract_parser.add_argument("--to", required=True)
    pkg_api_parser = sub.add_parser("pkg-api"); pkg_api_parser.add_argument("version")
    arguments = parser.parse_args()
    if arguments.cmd == "cat":
        sys.stdout.buffer.write(read_bytes(arguments.rel)); return 0
    if arguments.cmd == "list":
        print("\n".join(listing(arguments.prefix))); return 0
    if arguments.cmd == "verify":
        report = verify()
        print(json.dumps(report, indent=1) if arguments.json else f"{report['layout']}: {report['packedFiles']} packed files, {len(report['bad'])} bad → {report['status']}")
        return 0 if report["status"] == "OK" else 1
    if arguments.cmd == "extract":
        count = 0
        for relative_path in [logical_path for cat in CATALOGS.values() for logical_path in _catalog(cat)] + list(_pack()):
            dst = os.path.abspath(os.path.join(arguments.to, relative_path))
            if not dst.startswith(os.path.abspath(arguments.to) + os.sep): continue
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            open(dst, "wb").write(read_bytes(relative_path)); count += 1
        print(f"extracted {count} files into {os.path.abspath(arguments.to)}"); return 0
    if arguments.cmd == "pkg-api":
        api_path = pkg_api(arguments.version); print(api_path or "NOT FOUND"); return 0 if api_path else 1
    return 2


if __name__ == "__main__":
    sys.exit(main())

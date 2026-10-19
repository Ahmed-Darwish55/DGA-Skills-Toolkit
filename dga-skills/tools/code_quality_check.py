#!/usr/bin/env python3
"""Code-quality gate for DGA Skills Toolkit code and for code generated in a project (rules/code-quality.md).

Checks (each finding has a rule id; exit 1 when any finding exists):
  NAME-SHORT     a declared name (const/let/var, function, parameter) of one letter (except i, j, _) or a known
                 abbreviation (tmp, fn, val, srv, el, btn, cfg, …)
  NAME-CASE      a declared name that is not camelCase, PascalCase (components/classes/types) or UPPER_SNAKE_CASE (constants)
  DEAD-CODE      a local declaration that is never read (declared once, never referenced), incl. unused React state pairs
  DUP-HELPER     the same module-level helper name defined in more than one file of one project (move it to one shared module)
  DUP-BLOCK      the same 3 consecutive non-trivial lines in two places (extract a function / component / data module)
  DUP-TEXT       the same user-facing text literal (12+ chars, Arabic or sentence) in more than one file (one labels/data module)
  SITE-CHROME    a page template that passes header / footer design props or renders the shared header / footer itself
                 (footerBackground, secondNav=, background=, links=, logo=, stamp=, <SiteHeader, <SiteFooter, siteHeader(, siteFooter()

Usage:
  python3 tools/code_quality_check.py                    # the toolkit's own lib/ (default)
  python3 tools/code_quality_check.py --path <project>/src [--pages <dir>] [--json]
Duplicate rules compare files of one project (nearest package.json); separate apps under one --path are not compared with each other.
Scope: .js .jsx .ts .tsx .mjs; skips node_modules, dist, build, *.d.ts, the embedded logo data module and vendored toolkit copies
(folders holding dga-skills-lib.json — the library is checked by the toolkit's own tests).
"""
import argparse
import json
import os
import re
import sys

SKILL_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE_EXTENSIONS = (".js", ".jsx", ".ts", ".tsx", ".mjs")
SKIPPED_DIRECTORIES = {"node_modules", "dist", "build", ".angular", ".next", "__pycache__"}
SKIPPED_FILES = {"default-logo.js"}
ALLOWED_SHORT_NAMES = {"i", "j", "_", "$"}
ABBREVIATIONS = {
    "tmp", "temp", "fn", "func", "val", "srv", "arr", "obj", "res", "ret", "cb", "cfg", "conf", "btn", "el", "elm", "ev", "evt",
    "idx", "cnt", "str", "msg", "num", "len", "lst", "sp", "ok", "clr", "acts", "svc", "rel", "pg", "sec", "hdr", "itm", "opt",
    "opts", "prm", "attr", "attrs", "tb", "lab", "fw", "kv", "rx", "nn", "foo", "bar", "doc", "ctx", "desc", "curr", "prev", "cnt",
}
TWO_LETTER_WORDS = {"id", "go", "on", "up", "to", "in", "at", "of", "is", "as", "by", "no", "or"}   # real words, not abbreviations
ABBREVIATION_PATTERNS = (re.compile(r"^data\d+$"), re.compile(r"^[a-z]+Arr$"), re.compile(r"^[a-z]{1,2}\d$"))
NAME_PATTERN = re.compile(r"^(?:[a-z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*|_[a-zA-Z0-9]+)$")
DESIGN_OPTIONS = r"(?:background|footerBackground|logo|gov|links|secondNav|stamp|groups|social|accessibility|extraLinks|logos|copyright|entity|showEntityTitle)"
CHROME_PROP_PATTERNS = (
    re.compile(r"footerBackground"),
    re.compile(r"<(?:SiteHeader|SiteFooter|PageShell)\b[^>]*\b" + DESIGN_OPTIONS + r"="),
    re.compile(r"\b(?:siteHeader|siteFooter|pageShell)\(\s*[\w.]+\s*,\s*\{[^}]*\b" + DESIGN_OPTIONS + r"\s*:"),
    re.compile(r"(?<!function )\bcreateSiteConfig\("),
)
KEYWORDS = {"const", "let", "var", "function", "return", "new", "async", "await", "typeof", "in", "of", "this", "true", "false", "null", "undefined"}


def display_path(file, root):
    return os.path.basename(file) if os.path.isfile(root) else os.path.relpath(file, root)


def iter_source_files(root):
    if os.path.isfile(root):
        if root.endswith(SOURCE_EXTENSIONS) and not root.endswith(".d.ts"):
            yield root
        return
    for directory, subdirectories, files in os.walk(root):
        subdirectories[:] = [name for name in subdirectories if name not in SKIPPED_DIRECTORIES
                             and not os.path.isfile(os.path.join(directory, name, "dga-skills-lib.json"))]   # vendored toolkit copy (copy_lib.py): checked by the toolkit's own tests
        for file_name in sorted(files):
            if file_name.endswith(SOURCE_EXTENSIONS) and not file_name.endswith(".d.ts") and file_name not in SKIPPED_FILES:
                yield os.path.join(directory, file_name)


def strip_strings_and_comments(source):
    """Blank out comments and string/template text (line numbers kept); code inside ${…} stays, so names used there count."""
    output = []
    _strip_code(source, 0, output, stop_at_brace=False)
    return "".join(output)


def _strip_code(source, position, output, stop_at_brace):
    depth = 0
    length = len(source)
    while position < length:
        char = source[position]
        pair = source[position:position + 2]
        if pair == "//":
            end = source.find("\n", position)
            end = length if end < 0 else end
            output.append(" " * (end - position)); position = end; continue
        if pair == "/*":
            end = source.find("*/", position + 2)
            end = length if end < 0 else end + 2
            output.append(re.sub(r"[^\n]", " ", source[position:end])); position = end; continue
        if char in "'\"":
            end = position + 1
            while end < length and source[end] != char and source[end] != "\n":
                end += 2 if source[end] == "\\" else 1
            end = min(end + 1, length)
            output.append(char + " " * max(0, end - position - 2) + (char if end - position > 1 else "")); position = end; continue
        if char == "`":
            output.append("`"); position += 1
            while position < length and source[position] != "`":
                if source[position] == "\\":
                    output.append("  "); position += 2; continue
                if source[position:position + 2] == "${":
                    output.append("${"); position = _strip_code(source, position + 2, output, stop_at_brace=True); continue
                output.append("\n" if source[position] == "\n" else " "); position += 1
            output.append("`"); position += 1; continue
        if stop_at_brace:
            if char == "{": depth += 1
            elif char == "}":
                if depth == 0:
                    output.append("}"); return position + 1
                depth -= 1
        output.append(char); position += 1
    return position


def split_parameter_names(parameter_text):
    """Names bound by a parameter list or a destructuring pattern (defaults removed, renames resolved)."""
    names = []
    depth = 0; current = ""
    for char in parameter_text:
        if char in "([{": depth += 1
        if char in ")]}": depth -= 1
        if char == "," and depth == 0:
            names.extend(_names_in_parameter(current)); current = ""
        else:
            current += char
    names.extend(_names_in_parameter(current))
    return [name for name in names if name and name not in KEYWORDS]


def _names_in_parameter(parameter):
    parameter = parameter.strip()
    if not parameter:
        return []
    parameter = re.sub(r"=[^,{}\[\]]*$", "", parameter).strip()   # default value
    parameter = parameter.lstrip(".")                              # rest
    if parameter.startswith(("{", "[")):
        inner = parameter[1:-1] if parameter.endswith(("}", "]")) else parameter[1:]
        found = []
        for part in split_top_level(inner):
            part = re.sub(r"=.*$", "", part, flags=re.S).strip().lstrip(".")
            if ":" in part:
                part = part.split(":", 1)[1].strip()
            if part.startswith(("{", "[")):
                found.extend(_names_in_parameter(part))
            elif re.match(r"^[A-Za-z_$][\w$]*$", part):
                found.append(part)
        return found
    match = re.match(r"^([A-Za-z_$][\w$]*)", parameter)
    return [match.group(1)] if match else []


def split_top_level(text):
    parts, depth, current = [], 0, ""
    for char in text:
        if char in "([{": depth += 1
        if char in ")]}": depth -= 1
        if char == "," and depth == 0:
            parts.append(current); current = ""
        else:
            current += char
    parts.append(current)
    return parts


def declarations(code):
    """(name, line, kind) for const/let/var (incl. destructuring), function names and parameters, arrow parameters."""
    found = []
    line_of = lambda offset: code.count("\n", 0, offset) + 1
    for match in re.finditer(r"\b(?:const|let|var)\s+(\[[^\]]*\]|\{[^}]*\}|[A-Za-z_$][\w$]*)", code):
        for name in _names_in_parameter(match.group(1)):
            found.append((name, line_of(match.start()), "variable"))
    for match in re.finditer(r"\bfunction\s*\*?\s*([A-Za-z_$][\w$]*)?\s*\(", code):
        if match.group(1):
            found.append((match.group(1), line_of(match.start()), "function"))
        parameters = balanced_parentheses(code, match.end() - 1)
        for name in split_parameter_names(parameters):
            found.append((name, line_of(match.start()), "parameter"))
    for match in re.finditer(r"\(([^()]*(?:\([^()]*\)[^()]*)*)\)\s*(?::\s*[\w<>\[\]|. ]+)?\s*=>", code):
        for name in split_parameter_names(match.group(1)):
            found.append((name, line_of(match.start()), "parameter"))
    for match in re.finditer(r"(?<![\w$.)\]])([A-Za-z_$][\w$]*)\s*=>", code):
        found.append((match.group(1), line_of(match.start()), "parameter"))
    for match in re.finditer(r"\bcatch\s*\(\s*([A-Za-z_$][\w$]*)", code):
        found.append((match.group(1), line_of(match.start()), "parameter"))
    return found


def balanced_parentheses(code, open_index):
    depth = 0
    for index in range(open_index, len(code)):
        if code[index] == "(": depth += 1
        elif code[index] == ")":
            depth -= 1
            if depth == 0:
                return code[open_index + 1:index]
    return ""


def is_abbreviation(name):
    lowered = name.lower()
    return lowered in ABBREVIATIONS or any(pattern.match(name) for pattern in ABBREVIATION_PATTERNS)


def check_names(path, code, findings):
    for name, line, kind in declarations(code):
        if name.startswith("_") and name != "_":
            continue
        if len(name) == 1 and name not in ALLOWED_SHORT_NAMES:
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' — use a full, descriptive name"))
        elif len(name) == 2 and name.lower() not in TWO_LETTER_WORDS:
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' — two letters: use a full, descriptive name"))
        elif len(name) > 1 and is_abbreviation(name):
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' is an abbreviation — use a full, descriptive name"))
        elif len(name) > 1 and not NAME_PATTERN.match(name):
            findings.append(("NAME-CASE", path, line, f"{kind} '{name}' — camelCase, PascalCase or UPPER_SNAKE_CASE"))


def check_dead_code(path, code, findings):
    code = code.replace("...", " ")   # spread / rest: `...name` is a use
    exported = set(re.findall(r"\bexport\s+(?:const|let|function|class)\s+([A-Za-z_$][\w$]*)", code))
    exported |= {name.strip().split(" as ")[0] for group in re.findall(r"\bexport\s*\{([^}]*)\}", code) for name in group.split(",")}
    for match in re.finditer(r"\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=", code):
        name = match.group(1)
        if name in exported or name == "_":
            continue
        if len(re.findall(r"(?<![\w$.])" + re.escape(name) + r"(?![\w$])", code)) == 1:
            findings.append(("DEAD-CODE", path, code.count("\n", 0, match.start()) + 1, f"'{name}' is declared but never used"))
    for match in re.finditer(r"\bconst\s+\[\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*\]\s*=\s*useState", code):
        for name in match.groups():
            if len(re.findall(r"(?<![\w$.])" + re.escape(name) + r"(?![\w$])", code)) == 1:
                findings.append(("DEAD-CODE", path, code.count("\n", 0, match.start()) + 1, f"React state '{name}' is never used"))
    for match in re.finditer(r"^import\s+(?:type\s+)?(?:\{([^}]*)\}|([A-Za-z_$][\w$]*))", code, flags=re.M):
        names = [re.sub(r"^type\s+", "", part.strip().split(" as ")[-1].strip()) for part in (match.group(1) or match.group(2)).split(",") if part.strip()]
        for name in names:
            if name and len(re.findall(r"(?<![\w$.])" + re.escape(name) + r"(?![\w$])", code)) == 1 and name != "React":
                findings.append(("DEAD-CODE", path, code.count("\n", 0, match.start()) + 1, f"import '{name}' is never used"))


def module_helpers(code):
    names = set(re.findall(r"^(?:export\s+)?(?:const|let)\s+([a-z][\w$]*)\s*=\s*(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>", code, flags=re.M))
    names |= set(re.findall(r"^(?:export\s+)?(?:async\s+)?function\s+([a-z][\w$]*)\s*\(", code, flags=re.M))
    return names


def normalised_lines(code):
    """Non-trivial source lines (raw text, so data rows with different strings are different)."""
    lines = []
    for number, line in enumerate(code.split("\n"), 1):
        compact = re.sub(r"\s+", " ", line).strip()
        if len(compact) < 30 or compact.startswith(("import ", "export {", "}", ")", "<", "/*", "*")):
            continue
        lines.append((number, compact))
    return lines


def check_duplication(sources, raw_sources, findings):
    helper_owners = {}
    for path, code in sources.items():
        for name in module_helpers(code):
            helper_owners.setdefault(name, []).append(path)
    for name, owners in sorted(helper_owners.items()):
        if len(owners) > 1:
            findings.append(("DUP-HELPER", owners[0], 0, f"helper '{name}' is defined in {len(owners)} files: {', '.join(os.path.relpath(owner, start=os.path.dirname(owners[0])) for owner in owners)}"))
    windows = {}
    for path, code in raw_sources.items():
        lines = [(number, text) for number, text in normalised_lines(code) if not text.startswith("//")]
        for index in range(len(lines) - 2):
            key = "\n".join(text for _, text in lines[index:index + 3])
            windows.setdefault(key, []).append((path, lines[index][0]))
    reported = set()
    for key, places in windows.items():
        distinct = sorted(set(places))
        if len(distinct) > 1 and distinct[0] not in reported:
            reported.add(distinct[0])
            others = "; ".join(f"{os.path.basename(path)}:{line}" for path, line in distinct[1:])
            findings.append(("DUP-BLOCK", distinct[0][0], distinct[0][1], f"3 identical lines also at {others}"))


TEXT_LITERAL = re.compile(r"'([^'\\\n]{12,})'|\"([^\"\\\n]{12,})\"|`([^`$\\]{12,})`")
USER_TEXT = re.compile(r"[\u0600-\u06FF]|^[A-Z][a-z]+(?: [a-zA-Z]+){2,}")


def strip_comments(source):
    """Remove // and /* */ comments, keep string literals (for the text rule)."""
    return re.sub(r"(\"(?:\\.|[^\"\\\n])*\"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|//[^\n]*|/\*.*?\*/", lambda match: match.group(1) or "", source, flags=re.S)


def check_duplicate_text(raw_sources, findings):
    owners = {}
    for path, raw_code in raw_sources.items():
        if re.search(r"\.(test|spec)\.[cm]?[jt]sx?$", path):   # expected values in tests repeat the texts they check
            continue
        code = strip_comments(raw_code)
        for match in TEXT_LITERAL.finditer(code):
            text = next(group for group in match.groups() if group)
            if USER_TEXT.search(text) and not text.startswith(("http", "data:", "var(", "--")) and "TODO(content)" not in text:   # generated placeholders are replaced per page
                owners.setdefault(text, set()).add(path)
    for text, paths in sorted(owners.items()):
        if len(paths) > 1:
            paths = sorted(paths)
            findings.append(("DUP-TEXT", paths[0], 0, f"text '{text[:40]}' repeated in {', '.join(os.path.basename(path) for path in paths)}"))


def check_site_chrome(pages_root, sources, findings):
    """Pages may not set header / footer design: no design options on the shared chrome, no per-page site configuration."""
    for path, code in sources.items():
        if not os.path.abspath(path).startswith(os.path.abspath(pages_root) + os.sep):
            continue
        if os.path.splitext(os.path.basename(path))[0] in ("content", "site-config"):   # the one module that builds the site configuration
            continue
        for pattern in CHROME_PROP_PATTERNS:
            for match in pattern.finditer(code):
                findings.append(("SITE-CHROME", path, code.count("\n", 0, match.start()) + 1, f"page sets shared header/footer design ('{match.group(0)[:40]}') — use the site configuration"))


PYTHON_ABBREVIATIONS = ABBREVIATIONS | {"ap", "fp", "fh", "dp", "dns", "fns", "pat", "rx", "pkg"}
SNAKE_CASE = re.compile(r"^_{0,2}[a-z][a-z0-9_]*$")
UPPER_SNAKE = re.compile(r"^_?[A-Z][A-Z0-9_]*$")
PASCAL = re.compile(r"^_?[A-Z][A-Za-z0-9]*$")


def check_python(path, source, findings):
    """Python files: the same naming rules with PEP 8 casing (snake_case, PascalCase classes, UPPER_SNAKE constants) and unused imports / locals."""
    import ast
    try:
        tree = ast.parse(source)
    except SyntaxError as error:
        findings.append(("SYNTAX", path, error.lineno or 0, f"not valid Python: {error.msg}"))
        return
    bound = []   # (name, line, kind)

    def bind_target(target, kind):
        for node in ast.walk(target):
            if isinstance(node, ast.Name) and isinstance(node.ctx, ast.Store):
                bound.append((node.id, node.lineno, kind))

    module_level = {id(node) for node in tree.body}
    for node in ast.walk(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            bound.append((node.name, node.lineno, "function"))
            for argument in node.args.posonlyargs + node.args.args + node.args.kwonlyargs + [node.args.vararg, node.args.kwarg]:
                if argument is not None and argument.arg not in ("self", "cls"):
                    bound.append((argument.arg, argument.lineno, "parameter"))
        elif isinstance(node, ast.Lambda):
            for argument in node.args.args:
                bound.append((argument.arg, node.lineno, "parameter"))
        elif isinstance(node, ast.ClassDef):
            bound.append((node.name, node.lineno, "class"))
        elif isinstance(node, ast.Assign):
            for target in node.targets:
                bind_target(target, "constant" if id(node) in module_level else "variable")
        elif isinstance(node, (ast.AnnAssign, ast.AugAssign, ast.NamedExpr)):
            bind_target(node.target, "constant" if id(node) in module_level else "variable")
        elif isinstance(node, (ast.For, ast.AsyncFor, ast.comprehension)):
            bind_target(node.target, "variable")
        elif isinstance(node, ast.withitem) and node.optional_vars is not None:
            bind_target(node.optional_vars, "variable")
        elif isinstance(node, ast.ExceptHandler) and node.name:
            bound.append((node.name, node.lineno, "variable"))
        elif isinstance(node, (ast.Import, ast.ImportFrom)):
            for alias in node.names:
                if alias.asname:
                    bound.append((alias.asname, node.lineno, "import alias"))
    seen = set()
    for name, line, kind in bound:
        if (name, line) in seen or name == "_" or (name.startswith("__") and name.endswith("__")):
            continue
        seen.add((name, line))
        bare = name.lstrip("_")
        if len(bare) == 1 and bare not in ALLOWED_SHORT_NAMES:
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' — use a full, descriptive name"))
        elif len(bare) == 2 and bare.lower() not in TWO_LETTER_WORDS:
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' — two letters: use a full, descriptive name"))
        elif bare.lower() in PYTHON_ABBREVIATIONS:
            findings.append(("NAME-SHORT", path, line, f"{kind} '{name}' is an abbreviation — use a full, descriptive name"))
        elif kind == "class" and not PASCAL.match(name):
            findings.append(("NAME-CASE", path, line, f"class '{name}' — PascalCase"))
        elif kind == "constant" and not (UPPER_SNAKE.match(name) or SNAKE_CASE.match(name)):
            findings.append(("NAME-CASE", path, line, f"constant '{name}' — UPPER_SNAKE_CASE or snake_case"))
        elif kind not in ("class", "constant") and not SNAKE_CASE.match(name):
            findings.append(("NAME-CASE", path, line, f"{kind} '{name}' — snake_case"))
    loaded = {node.id for node in ast.walk(tree) if isinstance(node, ast.Name) and isinstance(node.ctx, ast.Load)}
    attribute_roots = {node.value.id for node in ast.walk(tree) if isinstance(node, ast.Attribute) and isinstance(node.value, ast.Name)}
    exported = set()
    for node in tree.body:
        if isinstance(node, ast.Assign) and any(isinstance(target, ast.Name) and target.id == "__all__" for target in node.targets):
            exported = {element.value for element in getattr(node.value, "elts", []) if isinstance(element, ast.Constant)}
    for node in tree.body:
        if isinstance(node, (ast.Import, ast.ImportFrom)) and not (isinstance(node, ast.ImportFrom) and node.module == "__future__"):
            for alias in node.names:
                name = alias.asname or alias.name.split(".")[0]
                if name != "*" and name not in loaded and name not in attribute_roots and name not in exported:
                    findings.append(("DEAD-CODE", path, node.lineno, f"import '{name}' is never used"))
    for function in [node for node in ast.walk(tree) if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))]:
        stored, used, declared = {}, set(), set()
        for node in ast.walk(function):
            if isinstance(node, (ast.Global, ast.Nonlocal)):
                declared.update(node.names)
            if isinstance(node, ast.Name):
                if isinstance(node.ctx, ast.Store):
                    stored.setdefault(node.id, node.lineno)
                else:
                    used.add(node.id)
        for name, line in stored.items():
            if name not in used and name not in declared and name != "_" and not name.startswith("_"):
                findings.append(("DEAD-CODE", path, line, f"'{name}' is assigned but never used"))


def group_by_project(scan_root, file_paths):
    """Files grouped by their project: the nearest folder (inside the scan root) holding a package.json, else the scan root."""
    scan_root = os.path.abspath(scan_root if os.path.isdir(scan_root) else os.path.dirname(scan_root))
    groups = {}
    for file_path in file_paths:
        directory = os.path.dirname(os.path.abspath(file_path))
        while directory != scan_root and directory.startswith(scan_root + os.sep) and not os.path.isfile(os.path.join(directory, "package.json")):
            directory = os.path.dirname(directory)
        groups.setdefault(directory, []).append(file_path)
    return [groups[project] for project in sorted(groups)]


def run(path, pages_root):
    sources, raw_sources = {}, {}
    findings = []
    python_files = [path] if os.path.isfile(path) and path.endswith(".py") else [] if os.path.isfile(path) else [
        os.path.join(directory, name) for directory, _subdirectories, names in os.walk(path) for name in sorted(names)
        if name.endswith(".py") and not any(part in SKIPPED_DIRECTORIES for part in directory.split(os.sep))
        and not os.path.isfile(os.path.join(directory, "dga-skills-lib.json"))]
    for file_path in python_files:
        with open(file_path, encoding="utf-8") as handle:
            check_python(file_path, handle.read(), findings)
    for file_path in iter_source_files(path):
        with open(file_path, encoding="utf-8") as handle:
            raw_sources[file_path] = handle.read()
        sources[file_path] = strip_strings_and_comments(raw_sources[file_path])
    for file_path, code in sources.items():
        check_names(file_path, code, findings)
        check_dead_code(file_path, code, findings)
    for project_files in group_by_project(path, sources):   # separate apps (own package.json) cannot share a module: compare within each
        check_duplication({file_path: sources[file_path] for file_path in project_files}, {file_path: raw_sources[file_path] for file_path in project_files}, findings)
        check_duplicate_text({file_path: raw_sources[file_path] for file_path in project_files}, findings)
    if pages_root and os.path.isdir(pages_root):
        check_site_chrome(pages_root, sources, findings)
    return {**sources, **{file_path: "" for file_path in python_files}}, findings


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--path", default=os.path.join(SKILL_DIR, "lib"))
    parser.add_argument("--pages", default=None, help="directory of page templates (SITE-CHROME rule); default <path>/templates when present")
    parser.add_argument("--json", action="store_true")
    arguments = parser.parse_args()
    pages_root = arguments.pages or os.path.join(arguments.path, "templates")
    sources, findings = run(arguments.path, pages_root)
    if arguments.json:
        print(json.dumps({"files": len(sources), "findings": [dict(rule=rule, file=display_path(file, arguments.path), line=line, message=message) for rule, file, line, message in findings]}, ensure_ascii=False, indent=1))
    else:
        for rule, file, line, message in findings:
            print(f"{rule:12} {display_path(file, arguments.path)}:{line}  {message}")
        counts = {}
        for rule, *_ in findings:
            counts[rule] = counts.get(rule, 0) + 1
        print(f"code quality: {len(sources)} files, {len(findings)} findings {json.dumps(counts)} → {'OK' if not findings else 'FAIL'}")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main())

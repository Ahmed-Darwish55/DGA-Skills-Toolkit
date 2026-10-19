#!/usr/bin/env python3
"""Release build step: regenerate dga-skills/CHECKSUMS.sha256 and dga-skills/MANIFEST.json.
Run after any change inside dga-skills/ and before packaging. Stdlib only."""
import hashlib, json, os, datetime
ROOT = os.path.dirname(os.path.abspath(__file__)); SKILL_DIR = os.path.join(ROOT, "dga-skills")
def sha(file_path):
    digest = hashlib.sha256(); digest.update(open(file_path, "rb").read()); return digest.hexdigest()
files = []
for directory, dirs, file_names in os.walk(SKILL_DIR):
    dirs.sort()
    for file_name in sorted(file_names):
        relative_path = os.path.relpath(os.path.join(directory, file_name), SKILL_DIR).replace(os.sep, "/")
        if relative_path in ("CHECKSUMS.sha256", "MANIFEST.json") or "__pycache__" in relative_path: continue
        files.append(relative_path)
files.sort()
version = open(os.path.join(SKILL_DIR, "VERSION"), encoding="utf-8").read().strip()
manifest = {
  "name": "dga-skills", "displayName": "DGA Skills Toolkit", "author": "Ahmed Darwish", "legacyName": "ahmed-skills", "version": version, "built": datetime.date.today().isoformat(),
  "releaseStage": "release",
  "entry": "SKILL.md",
  "fileCount": len(files) + 1,
  "knowledgeBase": {"path": "references/dga-live", "source": "DGA Platforms Code Figma Community files (24), CC BY 4.0",
                    "status": "EXTRACTED-FROM-FIGMA", "componentSets": 210, "variants": 10499, "templates": 20,
                    "requiresNetwork": False, "requiresFigmaOrStorybook": False},
  "dependencies": {
    "required": [{"name": "Claude Code with skills support"}, {"name": "python", "version": ">=3.8", "scope": "installer, self-check, settings helper; stdlib only"}],
    "optionalSkills": [
      {"name": "ui-ux-pro-max", "detect": ["<claude dir>/skills/ui-ux-pro-max/SKILL.md", "<project>/.claude/skills/ui-ux-pro-max/SKILL.md"], "fallback": "rules/design-intelligence.md", "flag": "UPSTREAM_UIUX_NOT_INSTALLED", "installedByAhmedSkills": False},
      {"name": "frontend-design", "detect": ["plugin frontend-design:frontend-design", "<claude dir>/skills/frontend-design/SKILL.md"], "fallback": "rules/art-direction.md", "flag": "UPSTREAM_FRONTEND_NOT_INSTALLED", "installedByAhmedSkills": False}],
    "projectPackages": [
      {"name": "platformscode-new-react", "validated": "0.1.45", "officialPublisher": "NOT VERIFIED"},
      {"name": "@platformscode/core", "validated": "0.0.52", "note": "nested in platformscode-new-react; 0.0.53 also seen"},
      {"name": "@platformscode/icons", "validated": "0.0.11", "role": "primary icons (D1)", "license": "UNLICENSED"},
      {"name": "@hugeicons/core-free-icons", "validated": "4.3.5", "role": "fallback icons (D2)", "license": "MIT", "officialDgaMandate": "NOT VERIFIED"}]},
  "projectSettingsFile": ".claude/dga-skills.json", "legacyProjectSettingsFile": ".claude/ahmed-skills.json",
  "designModes": ["dga-exact", "dga-enhanced", "dga-creative"],
  "technologies": ["react", "angular", "arcgis-exb", "other", "auto-detect"],
}
json.dump(manifest, open(os.path.join(SKILL_DIR, "MANIFEST.json"), "w", encoding="utf-8"), indent=2, ensure_ascii=False)
files.append("MANIFEST.json"); files.sort()
with open(os.path.join(SKILL_DIR, "CHECKSUMS.sha256"), "w", encoding="utf-8") as checksum_file:
    for relative_path in files: checksum_file.write(f"{sha(os.path.join(SKILL_DIR, relative_path))}  {relative_path}\n")
print(f"version {version}: {len(files)} files checksummed")

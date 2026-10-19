# Framework compatibility gate

Before implementing UI: identify package manager + package manifests; framework and version; build tool; installed official DGA component packages; existing shared UI; CSS isolation model; GSAP/Three availability; RTL strategy; test/browser access. Record findings, do not assume.

## React
Reuse existing installed official or project-approved components and inspect real API/types. Never create a replacement DGA button just because its visuals are described in the registry.

## Angular
Check Angular version, standalone/modules, encapsulation and whether official DGA web components are actually installed and compatible. Never paste React JSX.

## ArcGIS Experience Builder
Check ExB version and Jimu/UI environment, map view ownership, extensions lifecycle, widget-scoped CSS, dependencies at client root, and ArcGIS 2D/3D conventions. Do not load a second React version or duplicate map effects.

## All projects
Use global skill references relative to this SKILL.md, NOT a hard-coded `.claude/skills/` path. Project-specific CLAUDE.md retains only local constraints. Stop and ask before installing new runtimes. Global skill knowledge does not install component code in any app.

# Statistics & figures — `StatsStrip` / `statsStrip()`

## Which composition (decide BEFORE writing code)
| Page | Use | Figma source |
|---|---|---|
| Portal pages — home, about the entity, service landing, any "numbers about us" block | **`variant="template"` (default)** | `templates/home-page.md` › **About us Section › Cards** (also in about-entity, hajj, national-day, founding-day, life-journeys templates); raw frame tree `data/templates/home-page.json` |
| Dashboards / analytics screens (KPI with trend, chart, actions) | `variant="metric"` | `web/metric.md` (DgaMetric) |

**Never** render portal figures as shadowed/bordered metric cards with the label above the number — that is the dashboard Metric, not the DGA page template (owner correction 2026-10-18).

## `variant="template"` — DGA template "About us" figures (all modes)
Figma (home-page, RTL desktop 1440): section fill `background-white`, pad 40/80, gap 32; Title row (`Display sm` bold 30/38 + outline button) and description; **Cards** row `H / MAX / CENTER`, width 992, **gap 32**; each Card **224 × 204**, `V / CENTER / CENTER`, padding 16 (`spacing-xl`), gap 24 (`card-lg-gap`), radius 16 (`radius-lg`), fill `background-card` #ffffff, **no stroke, no shadow**; children: **Featured icon** `Size=x Large, Color=Brand, Style=Light, Circle=True` (56, `Icon/background-brand-light` #f3fcf6) → **Content** (`V`, gap 8): number → label. Image / Tags / Rating / Actions / Swap Placeholder exist in the Card but are **hidden**.
Package: `DgaFeaturedIcon size="xl" color="brand" variant="light" circle` + text; the cell is a plain element with the Card frame values (the package Card adds chrome the template hides).
Text styles below the Content frame were not captured by the extraction. Measured from the owner's rendering of the template: number **Display xl 48/60 regular, `primary-sa-flag-800` #14573a**; label **Text md 16/24, `text-display` #1f2a37** → status **REVIEW REQUIRED** (confirm in Figma when available).
Mobile (430): cells wrap 2 per row, number 36/44.
Each figure: `{ value, label, icon }` — `icon` must be in `registry/icons/icon-map.json` (default `user`).

## `variant="metric"` — dashboards only
Exact: real `dga-metric` grid (`label`, `percentage` = value string, `showChart=false`, `showActions=false`), grid `auto-fit minmax(min(100%,360px),1fr)` because the package sets `min-width: 360px`.
Enhanced/Creative [AHMED HOUSE]: `.ah-stat` tiles (white, border neutral-secondary, radius lg, 4 px inline-start accent `--ahmed-stat-accent`).
Package issues: PKG-METRIC-01 (`featuredIcon` prints the raw value as text → icon disabled), PKG-METRIC-02 (trend hard-coded "100%" → hidden).

Rule for both: numbers must be real and sourced; examples use "—" + "(placeholder)".

# Tags — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `12:539`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 12-539

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Tags

> Tags is a visual indicator that communicates a status or description of an associated component. They use short text, color, and icons for quick recognition and are placed near the relevant content.

> Resources

## Component sets on this page (2)

- **Tag** — 288 variants · `421:110968`
- **Status Badge** — 90 variants · `10381:52385`

---
## Tag

### Properties

| Property | Type / options |
|---|---|
| 🔁 Lead icon | INSTANCE_SWAP=10750:62197 |
| 🔁 Tail icon | INSTANCE_SWAP=10750:62197 |
| Lead icon | BOOLEAN=false |
| Tail icon | BOOLEAN=false |
| Label EN | TEXT=Label |
| Label AR | TEXT=وسم |
| RTL | VARIANT: False · True |
| Size | VARIANT: Medium · Small · x Small |
| Color | VARIANT: Gray · Brand/Success · Destructive · Warning · On-color · Info |
| Outline | VARIANT: False · True |
| Rounded | VARIANT: False · True |
| Icon only | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=False, Icon only=False`)

- `RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=False, Icon only=False` [COMP] — 42×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
    - `elements` [GROU] — 6×5
      - `Icon` [VECT] — 6×5 · fill=Tag/tag-icon-neutral=#1f2a37
  - `Text` [TEXT] — 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"
  - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
    - `elements` [GROU] — 6×5
      - `Icon` [VECT] — 6×5 · fill=Tag/tag-icon-neutral=#1f2a37

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Color=Warning, Outline=False, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=False, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Color=Warning, Outline=False, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=False, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Color=Warning, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Color=Warning, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=True, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=True, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=True, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=True, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=True, Rounded=False, Icon only=False (+1 more) | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=True, Rounded=True, Icon only=False (+1 more) | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=True, Rounded=False, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=True, Rounded=True, Icon only=False | 42×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Color=Gray, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Color=Brand/Success, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=True, Rounded=False, Icon only=True (+1 more) | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Color=Destructive, Outline=True, Rounded=True, Icon only=True (+1 more) | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Color=Info, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=False, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=False, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=False, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=False, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Color=Warning, Outline=False, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=False, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Color=Warning, Outline=False, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=False, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Color=Warning, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Color=Warning, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=True, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=True, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=True, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=True, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=True, Rounded=False, Icon only=False (+1 more) | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=True, Rounded=True, Icon only=False (+1 more) | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=True, Rounded=False, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=True, Rounded=True, Icon only=False | 46×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Color=Gray, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Color=Brand/Success, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=True, Rounded=False, Icon only=True (+1 more) | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Color=Destructive, Outline=True, Rounded=True, Icon only=True (+1 more) | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Color=Info, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Medium, Color=Gray, Outline=False, Rounded=False, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Medium, Color=Gray, Outline=False, Rounded=True, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Medium, Color=Brand/Success, Outline=False, Rounded=False, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Medium, Color=Brand/Success, Outline=False, Rounded=True, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Medium, Color=Destructive, Outline=False, Rounded=False, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Medium, Color=Destructive, Outline=False, Rounded=True, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Medium, Color=Warning, Outline=False, Rounded=False, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Medium, Color=Info, Outline=False, Rounded=False, Icon only=False | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| … 52 more distinct rows (see data JSON) | | | | | | |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=False, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=False, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-success=#085d3a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Brand/Success, Outline=False, Rounded=True, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-success=#085d3a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=False, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-error=#912018 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Destructive, Outline=False, Rounded=True, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-error=#912018 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Warning, Outline=False, Rounded=False, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

**RTL=False, Size=x Small, Color=Info, Outline=False, Rounded=False, Icon only=False**
- `Text`: 26×14 · fill=Tag/tag-text-info=#1849a9 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Status Badge

### Properties

| Property | Type / options |
|---|---|
| Label EN | TEXT=Status |
| Label AR | TEXT=حالة |
| Size | VARIANT: Medium · Small · x Small |
| Status | VARIANT: Neutral · Green · Blue · Yellow · Red |
| Style | VARIANT: Inverted · Subtle · Ghost |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `Size=Medium, Status=Neutral, Style=Subtle, RTL=False`)

- `Size=Medium, Status=Neutral, Style=Subtle, RTL=False` [COMP] — 98×32 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-none, paddingRight:spacing-xl, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Status indicator` [ELLI] — 10×10 · fill=Tag/tag-background-neutral=#4d5761
  - `Text` [TEXT] — 48×24 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Medium, Status=Neutral, Style=Subtle, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| Size=Medium, Status=Neutral, Style=Ghost, RTL=False (+4 more) | 66×32 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| Size=Medium, Status=Neutral, Style=Inverted, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| Size=Small, Status=Neutral, Style=Subtle, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| Size=Small, Status=Neutral, Style=Ghost, RTL=False (+4 more) | 60×24 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| Size=Small, Status=Neutral, Style=Inverted, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| Size=x Small, Status=Neutral, Style=Subtle, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| Size=x Small, Status=Neutral, Style=Ghost, RTL=False (+4 more) | 48×20 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| Size=x Small, Status=Neutral, Style=Inverted, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| Size=Medium, Status=Blue, Style=Subtle, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| Size=Medium, Status=Blue, Style=Inverted, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| Size=Small, Status=Blue, Style=Subtle, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| Size=Small, Status=Blue, Style=Inverted, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| Size=x Small, Status=Blue, Style=Subtle, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| Size=x Small, Status=Blue, Style=Inverted, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| Size=Medium, Status=Yellow, Style=Subtle, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| Size=Medium, Status=Yellow, Style=Inverted, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| Size=Small, Status=Yellow, Style=Subtle, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| Size=Small, Status=Yellow, Style=Inverted, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| Size=x Small, Status=Yellow, Style=Subtle, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| Size=x Small, Status=Yellow, Style=Inverted, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| Size=Medium, Status=Green, Style=Subtle, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| Size=Medium, Status=Green, Style=Inverted, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| Size=Small, Status=Green, Style=Subtle, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| Size=Small, Status=Green, Style=Inverted, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| Size=x Small, Status=Green, Style=Subtle, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| Size=x Small, Status=Green, Style=Inverted, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| Size=Medium, Status=Red, Style=Subtle, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| Size=Medium, Status=Red, Style=Inverted, RTL=False | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |
| Size=Small, Status=Red, Style=Subtle, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| Size=Small, Status=Red, Style=Inverted, RTL=False | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |
| Size=x Small, Status=Red, Style=Subtle, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| Size=x Small, Status=Red, Style=Inverted, RTL=False | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |

### State changes (axis `Status`; each state compared with the Default/first state of the same variant group)

States: Neutral · Green · Blue · Yellow · Red

#### Neutral → **Blue**  · applies to 3 group(s): Size=Medium, Style=Subtle, RTL=False; Size=Small, Style=Subtle, RTL=False; Size=x Small, Style=Subtle, RTL=False
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → Tag/tag-background-info-light=#eff8ff
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-info=#1849a9
- Text: fill: Tag/tag-text-neutral=#1f2a37 → Tag/tag-text-info=#1849a9

#### Neutral → **Yellow**  · applies to 3 group(s): Size=Medium, Style=Subtle, RTL=False; Size=Small, Style=Subtle, RTL=False; Size=x Small, Style=Subtle, RTL=False
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → Tag/tag-background-warning-light=#fffaeb
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-warning=#93370d
- Text: fill: Tag/tag-text-neutral=#1f2a37 → Tag/tag-text-warning=#93370d

#### Neutral → **Green**  · applies to 3 group(s): Size=Medium, Style=Subtle, RTL=False; Size=Small, Style=Subtle, RTL=False; Size=x Small, Style=Subtle, RTL=False
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → Tag/tag-background-success-light=#ecfdf3
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-success=#085d3a
- Text: fill: Tag/tag-text-neutral=#1f2a37 → Tag/tag-text-success=#085d3a

#### Neutral → **Red**  · applies to 3 group(s): Size=Medium, Style=Subtle, RTL=False; Size=Small, Style=Subtle, RTL=False; Size=x Small, Style=Subtle, RTL=False
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → Tag/tag-background-error-light=#fef3f2
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-error=#912018
- Text: fill: Tag/tag-text-neutral=#1f2a37 → Tag/tag-text-error=#912018

#### Neutral → **Blue**  · applies to 3 group(s): Size=Medium, Style=Ghost, RTL=False; Size=Small, Style=Ghost, RTL=False; Size=x Small, Style=Ghost, RTL=False
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-info=#1849a9

#### Neutral → **Yellow**  · applies to 3 group(s): Size=Medium, Style=Ghost, RTL=False; Size=Small, Style=Ghost, RTL=False; Size=x Small, Style=Ghost, RTL=False
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-warning=#93370d

#### Neutral → **Green**  · applies to 3 group(s): Size=Medium, Style=Ghost, RTL=False; Size=Small, Style=Ghost, RTL=False; Size=x Small, Style=Ghost, RTL=False
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-success=#085d3a

#### Neutral → **Red**  · applies to 3 group(s): Size=Medium, Style=Ghost, RTL=False; Size=Small, Style=Ghost, RTL=False; Size=x Small, Style=Ghost, RTL=False
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-icon-error=#912018

#### Neutral → **Blue**  · applies to 3 group(s): Size=Medium, Style=Inverted, RTL=False; Size=Small, Style=Inverted, RTL=False; Size=x Small, Style=Inverted, RTL=False
- (root): fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-background-info=#1570ef

#### Neutral → **Yellow**  · applies to 3 group(s): Size=Medium, Style=Inverted, RTL=False; Size=Small, Style=Inverted, RTL=False; Size=x Small, Style=Inverted, RTL=False
- (root): fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-background-warning=#b54708

#### Neutral → **Green**  · applies to 3 group(s): Size=Medium, Style=Inverted, RTL=False; Size=Small, Style=Inverted, RTL=False; Size=x Small, Style=Inverted, RTL=False
- (root): fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-background-success=#067647

#### Neutral → **Red**  · applies to 3 group(s): Size=Medium, Style=Inverted, RTL=False; Size=Small, Style=Inverted, RTL=False; Size=x Small, Style=Inverted, RTL=False
- (root): fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-background-error=#d92d20

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Medium, Status=Neutral, Style=Subtle, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 48×24 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status"

**Size=Medium, Status=Neutral, Style=Ghost, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 48×24 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status"

**Size=Medium, Status=Neutral, Style=Inverted, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-dot=#ffffff@0.6
- `Text`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status"

**Size=Small, Status=Neutral, Style=Subtle, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status"

**Size=Small, Status=Neutral, Style=Ghost, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status"

**Size=Small, Status=Neutral, Style=Inverted, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-dot=#ffffff@0.6
- `Text`: 42×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status"

**Size=x Small, Status=Neutral, Style=Subtle, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 30×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"

**Size=x Small, Status=Neutral, Style=Ghost, RTL=False**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 30×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"

### Interactions & motion

*No prototype reactions defined on this component set.*

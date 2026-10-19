# Tags — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `12:539`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 12-539

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Tags

> Tags is a visual indicator that communicates a status or description of an associated component. They use short text, color, and icons for quick recognition and are placed near the relevant content.

> Resources

> Status Tag

## Component sets on this page (2)

- **Tag** — 288 variants · `421:110968`
- **Status Tag** — 90 variants · `5698:52957`

---
## Tag

**Description (component description field):**

> Tags visually convey important information or actions related to components. They use brief text, color, and icons to offer quick insights or alerts to users. Positioned near relevant content, tags grab attention and aid comprehension.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Swap Lead Icon | INSTANCE_SWAP=13758:242431 |
| Lead icon | BOOLEAN=true |
| Trail icon | BOOLEAN=false |
| Label EN | TEXT=Label |
| Label AR | TEXT=وسم |
| 🔁 Swap Trail Icon | INSTANCE_SWAP=13758:242431 |
| RTL | VARIANT: False · True |
| Size | VARIANT: Medium · Small · x Small |
| Style | VARIANT: Neutral · Success · Info · Warning · Error · On-Color |
| Outline | VARIANT: False · True |
| Rounded | VARIANT: False · True |
| Icon only | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False`)

- `RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False` [COMP] — 56×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** — 10×10
    - `elements` [GROU] — 9×9
      - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616
  - `Text` [TEXT] — 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
  - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
    - `elements` [GROU] — 9×9
      - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=False, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=False, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=False, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=False, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=True, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=True, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=True, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=True, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=True, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=True, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=True, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=True, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=True, Rounded=False, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=True, Rounded=True, Icon only=False | 56×20 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Style=Neutral, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Style=Success, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Style=Error, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=x Small, Style=Warning, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=True, Rounded=False, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=x Small, Style=Info, Outline=True, Rounded=True, Icon only=True | 20×20 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=False, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=False, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=False, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=False, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=False, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=False, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=False, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=False, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-neutral-light=#f9fafb | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-success-light=#ecfdf3 | Tag/tag-border-success-light=#abefc6 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-error-light=#fef3f2 | Tag/tag-border-error-light=#fecdca 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-warning-light=#fffaeb | Tag/tag-border-warning-light=#fedf89 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=False, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=False, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 | Tag/tag-background-info-light=#eff8ff | Tag/tag-border-info-light=#b2ddff 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=True, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=True, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=True, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=True, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=True, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=True, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=True, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=True, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=True, Rounded=False, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=True, Rounded=True, Icon only=False | 64×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Style=Neutral, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-neutral=#4d5761 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Style=Success, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-success=#067647 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Style=Error, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-error=#b42318 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=Small, Style=Warning, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-warning=#b54708 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=True, Rounded=False, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 4 |  | Tag/tag-border-info=#175cd3 1 |  |
| RTL=False, Size=Small, Style=Info, Outline=True, Rounded=True, Icon only=True | 24×24 | H/CENTER/CENTER · 0 2 0 2 · 4 | 9999 |  | Tag/tag-border-info=#175cd3 1 |  |
| … 64 more distinct rows (see data JSON) | | | | | | |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Text`: 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Text`: 26×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=False, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-success=#085d3a
- `Text`: 26×14 · fill=Tag/tag-text-success=#085d3a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Success, Outline=False, Rounded=True, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-success=#085d3a
- `Text`: 26×14 · fill=Tag/tag-text-success=#085d3a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=False, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-error=#912018
- `Text`: 26×14 · fill=Tag/tag-text-error=#912018 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Error, Outline=False, Rounded=True, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-error=#912018
- `Text`: 26×14 · fill=Tag/tag-text-error=#912018 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=False, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-warning=#93370d
- `Text`: 26×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=x Small, Style=Warning, Outline=False, Rounded=True, Icon only=False**
- `Lead icon`: 10×10
- `Lead icon › elements`: 9×9
- `Lead icon › elements › Icon`: 9×9 · fill=Tag/tag-icon-warning=#93370d
- `Text`: 26×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Status Tag

**Description (component description field):**

> Used to visually indicate the status or condition of an element, task, or process. These tags provide quick and easily understandable indicators to users, enabling them to grasp important information swiftly.

### Properties

| Property | Type / options |
|---|---|
| Label EN | TEXT=Status |
| Label AR | TEXT=حالة |
| RTL | VARIANT: False · True |
| Style | VARIANT: Neutral · Green · Blue · Yellow · Red |
| Status | VARIANT: Inverted · Subtle · Ghost |
| Size | VARIANT: Small · x Small · Medium |

### Anatomy (first variant: `RTL=False, Style=Neutral, Status=Subtle, Size=Medium`)

- `RTL=False, Style=Neutral, Status=Subtle, Size=Medium` [COMP] — 98×32 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-none, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Status indicator` [ELLI] — 10×10 · fill=Tag/tag-background-neutral=#4d5761
  - `Text` [TEXT] — 48×24 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Style=Neutral, Status=Subtle, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| RTL=False, Style=Neutral, Status=Ghost, Size=Medium (+4 more) | 66×32 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| RTL=False, Style=Neutral, Status=Inverted, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| RTL=False, Style=Neutral, Status=Subtle, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| RTL=False, Style=Neutral, Status=Ghost, Size=Small (+4 more) | 60×24 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| RTL=False, Style=Neutral, Status=Inverted, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| RTL=False, Style=Neutral, Status=Subtle, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral-light=#f9fafb |   |  |
| RTL=False, Style=Neutral, Status=Ghost, Size=x Small (+4 more) | 48×20 | H/MIN/CENTER · 0 0 0 0 · 8 | 9999 |  |   |  |
| RTL=False, Style=Neutral, Status=Inverted, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-neutral=#4d5761 |   |  |
| RTL=False, Style=Blue, Status=Subtle, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| RTL=False, Style=Blue, Status=Inverted, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| RTL=False, Style=Blue, Status=Subtle, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| RTL=False, Style=Blue, Status=Inverted, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| RTL=False, Style=Blue, Status=Subtle, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info-light=#eff8ff |   |  |
| RTL=False, Style=Blue, Status=Inverted, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-info=#1570ef |   |  |
| RTL=False, Style=Yellow, Status=Subtle, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| RTL=False, Style=Yellow, Status=Inverted, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| RTL=False, Style=Yellow, Status=Subtle, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| RTL=False, Style=Yellow, Status=Inverted, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| RTL=False, Style=Yellow, Status=Subtle, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning-light=#fffaeb |   |  |
| RTL=False, Style=Yellow, Status=Inverted, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-warning=#b54708 |   |  |
| RTL=False, Style=Green, Status=Subtle, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| RTL=False, Style=Green, Status=Inverted, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| RTL=False, Style=Green, Status=Subtle, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| RTL=False, Style=Green, Status=Inverted, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| RTL=False, Style=Green, Status=Subtle, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success-light=#ecfdf3 |   |  |
| RTL=False, Style=Green, Status=Inverted, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-success=#067647 |   |  |
| RTL=False, Style=Red, Status=Subtle, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| RTL=False, Style=Red, Status=Inverted, Size=Medium | 98×32 | H/MIN/CENTER · 0 16 0 16 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |
| RTL=False, Style=Red, Status=Subtle, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| RTL=False, Style=Red, Status=Inverted, Size=Small | 76×24 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |
| RTL=False, Style=Red, Status=Subtle, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error-light=#fef3f2 |   |  |
| RTL=False, Style=Red, Status=Inverted, Size=x Small | 64×20 | H/MIN/CENTER · 0 8 0 8 · 8 | 9999 | Tag/tag-background-error=#d92d20 |   |  |

### State changes (axis `Status`; each state compared with the Default/first state of the same variant group)

States: Inverted · Subtle · Ghost

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Medium
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → —; pad: 0 16 0 16 → 0 0 0 0; w: 98 → 66

#### Subtle → **Inverted**  · applies to 3 group(s): RTL=False, Style=Neutral, Size=Medium; RTL=False, Style=Neutral, Size=Small; RTL=False, Style=Neutral, Size=x Small
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → Tag/tag-background-neutral=#4d5761
- Status indicator: fill: Tag/tag-background-neutral=#4d5761 → Tag/tag-dot=#ffffff@0.6
- Text: fill: Tag/tag-text-neutral=#1f2a37 → Text/text-oncolor-primary=#ffffff

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Small
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → —; pad: 0 8 0 8 → 0 0 0 0; w: 76 → 60

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=x Small
- (root): fill: Tag/tag-background-neutral-light=#f9fafb → —; pad: 0 8 0 8 → 0 0 0 0; w: 64 → 48

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Blue, Size=Medium
- (root): fill: Tag/tag-background-info-light=#eff8ff → —; pad: 0 16 0 16 → 0 0 0 0; w: 98 → 66
- Text: fill: Tag/tag-text-info=#1849a9 → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Inverted**  · applies to 3 group(s): RTL=False, Style=Blue, Size=Medium; RTL=False, Style=Blue, Size=Small; RTL=False, Style=Blue, Size=x Small
- (root): fill: Tag/tag-background-info-light=#eff8ff → Tag/tag-background-info=#1570ef
- Status indicator: fill: Tag/tag-icon-info=#1849a9 → Tag/tag-dot=#ffffff@0.6
- Text: fill: Tag/tag-text-info=#1849a9 → Text/text-oncolor-primary=#ffffff

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Blue, Size=Small
- (root): fill: Tag/tag-background-info-light=#eff8ff → —; pad: 0 8 0 8 → 0 0 0 0; w: 76 → 60
- Text: fill: Tag/tag-text-info=#1849a9 → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Blue, Size=x Small
- (root): fill: Tag/tag-background-info-light=#eff8ff → —; pad: 0 8 0 8 → 0 0 0 0; w: 64 → 48
- Text: fill: Tag/tag-text-info=#1849a9 → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Yellow, Size=Medium
- (root): fill: Tag/tag-background-warning-light=#fffaeb → —; pad: 0 16 0 16 → 0 0 0 0; w: 98 → 66
- Text: fill: Tag/tag-text-warning=#93370d → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Inverted**  · applies to 3 group(s): RTL=False, Style=Yellow, Size=Medium; RTL=False, Style=Yellow, Size=Small; RTL=False, Style=Yellow, Size=x Small
- (root): fill: Tag/tag-background-warning-light=#fffaeb → Tag/tag-background-warning=#b54708
- Status indicator: fill: Tag/tag-icon-warning=#93370d → Tag/tag-dot=#ffffff@0.6
- Text: fill: Tag/tag-text-warning=#93370d → Text/text-oncolor-primary=#ffffff

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Yellow, Size=Small
- (root): fill: Tag/tag-background-warning-light=#fffaeb → —; pad: 0 8 0 8 → 0 0 0 0; w: 76 → 60
- Text: fill: Tag/tag-text-warning=#93370d → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Yellow, Size=x Small
- (root): fill: Tag/tag-background-warning-light=#fffaeb → —; pad: 0 8 0 8 → 0 0 0 0; w: 64 → 48
- Text: fill: Tag/tag-text-warning=#93370d → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Green, Size=Medium
- (root): fill: Tag/tag-background-success-light=#ecfdf3 → —; pad: 0 16 0 16 → 0 0 0 0; w: 98 → 66
- Text: fill: Tag/tag-text-success=#085d3a → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Inverted**  · applies to 3 group(s): RTL=False, Style=Green, Size=Medium; RTL=False, Style=Green, Size=Small; RTL=False, Style=Green, Size=x Small
- (root): fill: Tag/tag-background-success-light=#ecfdf3 → Tag/tag-background-success=#067647
- Status indicator: fill: Tag/tag-icon-success=#085d3a → Tag/tag-dot=#ffffff@0.6
- Text: fill: Tag/tag-text-success=#085d3a → Text/text-oncolor-primary=#ffffff

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Green, Size=Small
- (root): fill: Tag/tag-background-success-light=#ecfdf3 → —; pad: 0 8 0 8 → 0 0 0 0; w: 76 → 60
- Text: fill: Tag/tag-text-success=#085d3a → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Green, Size=x Small
- (root): fill: Tag/tag-background-success-light=#ecfdf3 → —; pad: 0 8 0 8 → 0 0 0 0; w: 64 → 48
- Text: fill: Tag/tag-text-success=#085d3a → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Red, Size=Medium
- (root): fill: Tag/tag-background-error-light=#fef3f2 → —; pad: 0 16 0 16 → 0 0 0 0; w: 98 → 66
- Text: fill: Tag/tag-text-error=#912018 → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Inverted**  · applies to 3 group(s): RTL=False, Style=Red, Size=Medium; RTL=False, Style=Red, Size=Small; RTL=False, Style=Red, Size=x Small
- (root): fill: Tag/tag-background-error-light=#fef3f2 → Tag/tag-background-error=#d92d20
- Status indicator: fill: Tag/tag-icon-error=#912018 → Tag/tag-dot=#ffffff@0.6
- Text: fill: Tag/tag-text-error=#912018 → Text/text-oncolor-primary=#ffffff

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Red, Size=Small
- (root): fill: Tag/tag-background-error-light=#fef3f2 → —; pad: 0 8 0 8 → 0 0 0 0; w: 76 → 60
- Text: fill: Tag/tag-text-error=#912018 → Tag/tag-text-neutral=#1f2a37

#### Subtle → **Ghost**  · applies to 1 group(s): RTL=False, Style=Red, Size=x Small
- (root): fill: Tag/tag-background-error-light=#fef3f2 → —; pad: 0 8 0 8 → 0 0 0 0; w: 64 → 48
- Text: fill: Tag/tag-text-error=#912018 → Tag/tag-text-neutral=#1f2a37

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Style=Neutral, Status=Subtle, Size=Medium**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 48×24 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Style=Neutral, Status=Subtle, Size=Small**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Style=Neutral, Status=Subtle, Size=x Small**
- `Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Text`: 30×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Style=Blue, Status=Subtle, Size=Medium**
- `Status indicator`: 10×10 · fill=Tag/tag-icon-info=#1849a9
- `Text`: 48×24 · fill=Tag/tag-text-info=#1849a9 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Style=Blue, Status=Subtle, Size=Small**
- `Status indicator`: 10×10 · fill=Tag/tag-icon-info=#1849a9
- `Text`: 42×20 · fill=Tag/tag-text-info=#1849a9 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Style=Blue, Status=Subtle, Size=x Small**
- `Status indicator`: 10×10 · fill=Tag/tag-icon-info=#1849a9
- `Text`: 30×14 · fill=Tag/tag-text-info=#1849a9 · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Style=Yellow, Status=Subtle, Size=Medium**
- `Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `Text`: 48×24 · fill=Tag/tag-text-warning=#93370d · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Style=Yellow, Status=Subtle, Size=Small**
- `Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `Text`: 42×20 · fill=Tag/tag-text-warning=#93370d · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

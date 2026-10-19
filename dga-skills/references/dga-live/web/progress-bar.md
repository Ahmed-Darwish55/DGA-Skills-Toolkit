# Progress Bar — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `17620:3282`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 17620-3282

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Progress Bar

> A progress bar is a visual representation used to indicate the progress of a task or process, such as a file download, data processing, or form submission.

> Resources

## Component sets on this page (2)

- **Circular Progress Bar** — 40 variants · `17732:3370`
- **Progress Bar** — 48 variants · `17686:3283`

---
## Circular Progress Bar

**Description (component description field):**

> A Circular Progress Bar is a circular visual element that represents progress as a circle.

### Properties

| Property | Type / options |
|---|---|
| Text EN | TEXT=Active users  |
| Percentage | TEXT=50% |
| Show Text | BOOLEAN=true |
| Text AR | TEXT=مستخدم نشط |
| RTL | VARIANT: No · Yes |
| Size | VARIANT: 200px · 160px · 120px · 80px · 64px |
| Style | VARIANT: Primary · Neutral · Success · Error |

### Anatomy (first variant: `RTL=No, Size=64px, Style=Primary`)

- `RTL=No, Size=64px, Style=Primary` [COMP] — 64×64
  - `Track` [ELLI] — 64×64 · fill=Background/background-neutral-100=#f3f4f6
  - `Tail` [ELLI] — 64×64 · r=4 · fill=Background/background-primary=#1b8354 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
  - `50%` [TEXT] — 31×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="50%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Size=64px, Style=Primary (+7 more) | 64×64 |  ·  ·  |  |  |   |  |
| RTL=No, Size=80px, Style=Primary (+7 more) | 80×80 |  ·  ·  |  |  |   |  |
| RTL=No, Size=120px, Style=Primary (+7 more) | 120×120 |  ·  ·  |  |  |   |  |
| RTL=No, Size=160px, Style=Primary (+7 more) | 160×160 |  ·  ·  |  |  |   |  |
| RTL=No, Size=200px, Style=Primary (+7 more) | 200×200 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Size=64px, Style=Primary**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-primary=#1b8354 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `50%`: 31×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="50%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Size=64px, Style=Primary**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-primary=#1b8354 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `50%`: 31×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="50%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=No, Size=64px, Style=Neutral**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Button/button-background-black-selected=#384250 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `50%`: 31×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="50%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Size=64px, Style=Neutral**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Button/button-background-black-selected=#384250 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `50%`: 31×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="50%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=No, Size=64px, Style=Success**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-success=#079455 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Feedback Icon`: 24×24
- `Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Feedback Icon › Icon`: 22×22 · fill=Icon/icon-success=#067647

**RTL=No, Size=64px, Style=Error**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-error=#d92d20 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Feedback Icon`: 24×24
- `Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Feedback Icon › Icon`: 22×22 · fill=Icon/icon-error=#b42318

**RTL=Yes, Size=64px, Style=Success**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-success=#079455 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Feedback Icon`: 24×24
- `Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Feedback Icon › Icon`: 22×22 · fill=Icon/icon-success=#067647

**RTL=Yes, Size=64px, Style=Error**
- `Track`: 64×64 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 64×64 · r=4 · fill=Background/background-error=#d92d20 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Feedback Icon`: 24×24
- `Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Feedback Icon › Icon`: 22×22 · fill=Icon/icon-error=#b42318

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Progress Bar

**Description (component description field):**

> A progress bar is a visual representation used to indicate the progress of a task or process, such as a file download, data processing, or form submission.

### Properties

| Property | Type / options |
|---|---|
| Helper Text | BOOLEAN=true |
| Show label | BOOLEAN=true |
| RTL | VARIANT: No · Yes |
| Size | VARIANT: Small · Medium · Large |
| Style | VARIANT: Primary · Neutral |
| Percentage | VARIANT: 20% · 50% · 100% - Success · 0% - Error |
| Error | VARIANT: Yes · No |
| Success | VARIANT: Yes · No |

### Anatomy (first variant: `RTL=No, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes`)

- `RTL=No, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes` [COMP] — 320×50 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
  - `Label` [FRAM] — 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Frame 4` [FRAM] — 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
    - `Progress Bar` [FRAM] — 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Progress` [FRAM] — 320×4 · r=4 · fill=Background/background-success=#079455 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Helper Text` [FRAM] — 320×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Success-check, Style=Container, Size=16, Ring=No** — 16×16
      - `bg` [VECT] — 15×15 · fill=Icon/icon-oncolor=#ffffff
      - `Icon` [VECT] — 15×15 · fill=Icon/icon-success=#067647
    - `Text wrapper` [FRAM] — 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Success` [TEXT] — 296×18 · fill=Text/text-success=#067647 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Success" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+7 more) | 320×50 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| RTL=Yes, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+7 more) | 320×50 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=No, Size=Medium, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+3 more) | 320×56 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| RTL=Yes, Size=Medium, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+3 more) | 320×56 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=No, Size=Large, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+7 more) | 320×68 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| RTL=Yes, Size=Large, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes (+7 more) | 320×68 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=No, Size=Medium, Style=Primary, Percentage=20%, Error=No, Success=No (+1 more) | 320×60 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| RTL=Yes, Size=Medium, Style=Primary, Percentage=20%, Error=No, Success=No (+1 more) | 320×60 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=No, Size=Medium, Style=Neutral, Percentage=20%, Error=No, Success=No (+1 more) | 320×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=Yes, Size=Medium, Style=Neutral, Percentage=20%, Error=No, Success=No (+1 more) | 320×68 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes**
- `Label`: 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-success=#079455 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-success=#067647
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › Success`: 296×18 · fill=Text/text-success=#067647 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Success" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=Yes, Size=Small, Style=Primary, Percentage=100% - Success, Error=No, Success=Yes**
- `Label`: 320×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-success=#079455 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Text wrapper`: 296×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › نجاح`: 296×18 · fill=Text/text-success=#067647 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نجاح" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-success=#067647

**RTL=No, Size=Small, Style=Neutral, Percentage=100% - Success, Error=No, Success=Yes**
- `Label`: 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-success=#079455 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-success=#067647
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › Success`: 296×18 · fill=Text/text-success=#067647 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Success" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=Yes, Size=Small, Style=Neutral, Percentage=100% - Success, Error=No, Success=Yes**
- `Label`: 320×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-success=#079455 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Text wrapper`: 296×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › نجاح`: 296×18 · fill=Text/text-success=#067647 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نجاح" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-success=#067647

**RTL=No, Size=Small, Style=Neutral, Percentage=0% - Error, Error=Yes, Success=No**
- `Label`: 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-error=#d92d20 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-error=#b42318
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › Error`: 296×18 · fill=Text/text-error=#b42318 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Error" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=Yes, Size=Small, Style=Neutral, Percentage=0% - Error, Error=Yes, Success=No**
- `Label`: 320×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-error=#d92d20 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › حدث خطأ`: 296×18 · fill=Text/text-error=#b42318 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="حدث خطأ" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-error=#b42318

**RTL=No, Size=Small, Style=Primary, Percentage=0% - Error, Error=Yes, Success=No**
- `Label`: 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-error=#d92d20 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-error=#b42318
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › Error`: 296×18 · fill=Text/text-error=#b42318 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Error" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=Yes, Size=Small, Style=Primary, Percentage=0% - Error, Error=Yes, Success=No**
- `Label`: 320×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 4`: 320×4 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4
- `Frame 4 › Progress Bar`: 320×4 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 4 › Progress Bar › Progress`: 320×4 · r=4 · fill=Background/background-error=#d92d20 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Helper Text`: 320×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Text wrapper`: 296×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › حدث خطأ`: 296×18 · fill=Text/text-error=#b42318 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="حدث خطأ" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper Text › Feedback Icon`: 16×16
- `Helper Text › Feedback Icon › bg`: 15×15 · fill=Icon/icon-oncolor=#ffffff
- `Helper Text › Feedback Icon › Icon`: 15×15 · fill=Icon/icon-error=#b42318

### Interactions & motion

*No prototype reactions defined on this component set.*

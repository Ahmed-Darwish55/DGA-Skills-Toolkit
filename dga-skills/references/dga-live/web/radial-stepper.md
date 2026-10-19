# Radial Stepper — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `19868:572`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 19868-572

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Radial Stepper

> A Radial Stepper is a UI component that visually represents progress or steps in a circular format. It's commonly used in applications to indicate a multi-step process. Each step in the process is marked on the circumference of the circle, and users can track their progress as they move through the steps.

> Resources

## Component sets on this page (2)

- **Radial Stepper** — 30 variants · `19896:813`
- **Circular Stepper** — 120 variants · `19902:6822`

---
## Radial Stepper

### Properties

| Property | Type / options |
|---|---|
| Show Step Name | BOOLEAN=true |
| Show Description | BOOLEAN=true |
| Step Description EN | TEXT=this is step description |
| Step Description AR | TEXT=وصف الخطوة |
| Step Name EN | TEXT=Step One |
| Step Name AR | TEXT=الخطوة الأولى |
| Show Pre Step | BOOLEAN=false |
| Show Next Step | BOOLEAN=true |
| Pre Step Name EN | TEXT=Previous: |
| Next Step Name EN | TEXT=Next: |
| Pre Step Name AR | TEXT=السابق: |
| Next Step Name AR | TEXT=التالي: |
| RTL | VARIANT: False · True |
| Size | VARIANT: 120px · 40px · 48px · 64px · 80px |
| Style | VARIANT: Primary · Neutral |
| On-Color | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Size=64px, Style=Primary, On-Color=False`)

- `RTL=False, Size=64px, Style=Primary, On-Color=False` [COMP] — 210×64 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
  - `Circular Stepper` [INST] ⟶ instance of **Circular Stepper / RTL=No, Style=Primary, Indicator=1 of 4, Size=64px** — 64×64
    - `Track` [ELLI] — 64×64 · fill=Background/background-neutral-200=#e5e7eb
    - `Tail` [ELLI] — 64×64 · r=4 · fill=Background/background-primary=#1b8354 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
    - `1 of 4` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="1 of 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Text` [FRAM] — 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
    - `Previous:` [TEXT] *(hidden)* — 50×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Previous:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Step number` [TEXT] — 60×20 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `this is step description` [TEXT] — 122×18 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Next:` [TEXT] — 29×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=64px, Style=Primary, On-Color=False (+2 more) | 210×64 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=48px, Style=Primary, On-Color=False (+2 more) | 194×64 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=40px, Style=Primary, On-Color=False (+2 more) | 165×54 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=80px, Style=Primary, On-Color=False (+2 more) | 246×80 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=120px, Style=Primary, On-Color=False (+2 more) | 286×120 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=64px, Style=Primary, On-Color=False**
- `Circular Stepper`: 64×64
- `Circular Stepper › Track`: 64×64 · fill=Background/background-neutral-200=#e5e7eb
- `Circular Stepper › Tail`: 64×64 · r=4 · fill=Background/background-primary=#1b8354 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Circular Stepper › 1 of 4`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="1 of 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=64px, Style=Primary, On-Color=True**
- `Circular Stepper`: 64×64
- `Circular Stepper › Track`: 64×64 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Circular Stepper › Tail`: 64×64 · r=4 · fill=Background/surface-oncolor=#ffffff · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Circular Stepper › 1 of 4`: 37×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="1 of 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Text/text-oncolor-secondary=#ffffff@0.8 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Text/text-oncolor-tertiary=#ffffff@0.7 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=64px, Style=Neutral, On-Color=False**
- `Circular Stepper`: 64×64
- `Circular Stepper › Track`: 64×64 · fill=Background/background-neutral-200=#e5e7eb
- `Circular Stepper › Tail`: 64×64 · r=4 · fill=Background/background-black=#161616 · rot=90 · tokens{cornerRadius:Radius/radius-sm}
- `Circular Stepper › 1 of 4`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="1 of 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=48px, Style=Primary, On-Color=False**
- `Circular Stepper`: 48×48
- `Circular Stepper › Track`: 48×48 · fill=Background/background-neutral-200=#e5e7eb
- `Circular Stepper › Tail`: 48×48 · r=3 · fill=Background/background-primary=#1b8354 · rot=90
- `Circular Stepper › 1 of 4`: 28×15 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=10.5 · lh=15 · txt="1 of 4"
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=48px, Style=Primary, On-Color=True**
- `Circular Stepper`: 48×48
- `Circular Stepper › Track`: 48×48 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Circular Stepper › Tail`: 48×48 · r=3 · fill=Background/surface-oncolor=#ffffff · rot=90
- `Circular Stepper › 1 of 4`: 28×15 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=10.5 · lh=15 · txt="1 of 4"
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Text/text-oncolor-secondary=#ffffff@0.8 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Text/text-oncolor-tertiary=#ffffff@0.7 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=48px, Style=Neutral, On-Color=False**
- `Circular Stepper`: 48×48
- `Circular Stepper › Track`: 48×48 · fill=Background/background-neutral-200=#e5e7eb
- `Circular Stepper › Tail`: 48×48 · r=3 · fill=Background/background-black=#161616 · rot=90
- `Circular Stepper › 1 of 4`: 28×15 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=10.5 · lh=15 · txt="1 of 4"
- `Text`: 138×64 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 60×20 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text › this is step description`: 122×18 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › Next:`: 29×18 · fill=Stepper/stepper-text-tertiary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=40px, Style=Primary, On-Color=False**
- `Circular Stepper`: 40×40
- `Circular Stepper › Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Circular Stepper › Tail`: 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
- `Circular Stepper › 1 of 4`: 23×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"
- `Text`: 117×54 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 51×18 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › this is step description`: 101×14 · fill=Stepper/stepper-text-secondary=#384250 · font=IBM Plex Sans Arabic Regular · fs=10 · lh=14 · ts=Text 2xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
- `Text › Next:`: 24×14 · fill=Stepper/stepper-text-tertiary=#6c737f · font=IBM Plex Sans Arabic Regular · fs=10 · lh=14 · ts=Text 2xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, Size=40px, Style=Primary, On-Color=True**
- `Circular Stepper`: 40×40
- `Circular Stepper › Track`: 40×40 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Circular Stepper › Tail`: 40×40 · r=2.5 · fill=Background/surface-oncolor=#ffffff · rot=90
- `Circular Stepper › 1 of 4`: 23×13 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"
- `Text`: 117×54 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 51×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Text › this is step description`: 101×14 · fill=Text/text-oncolor-secondary=#ffffff@0.8 · font=IBM Plex Sans Arabic Regular · fs=10 · lh=14 · ts=Text 2xs/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
- `Text › Next:`: 24×14 · fill=Text/text-oncolor-tertiary=#ffffff@0.7 · font=IBM Plex Sans Arabic Regular · fs=10 · lh=14 · ts=Text 2xs/Regular · txt="Next:" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Circular Stepper

### Properties

| Property | Type / options |
|---|---|
|  Text Step 4 EN | TEXT=4 of 4 |
| Show Text | BOOLEAN=true |
| Text Step 1 EN | TEXT=1 of 4 |
| Text Step 2 EN | TEXT=2 of 4 |
| Text Step 3 EN | TEXT=3 of 4 |
| Text Step 1 AR | TEXT=1 من 4 |
| Text Step 2 AR | TEXT=2 من 4 |
| Text Step 3 AR | TEXT=3 من 4 |
| Text Step 4 AR | TEXT=4 من 4 |
| RTL | VARIANT: No · Yes |
| Style | VARIANT: Primary · Neutral · On-Color |
| Indicator | VARIANT: 1 of 4 · 2 of 4 · 3 of 4 · 4 of 4 |
| Size | VARIANT: 40px · 48px · 64px · 80px · 120px |

### Anatomy (first variant: `RTL=No, Style=Primary, Indicator=1 of 4, Size=40px`)

- `RTL=No, Style=Primary, Indicator=1 of 4, Size=40px` [COMP] — 40×40
  - `Track` [ELLI] — 40×40 · fill=Background/background-neutral-200=#e5e7eb
  - `Tail` [ELLI] — 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
  - `1 of 4` [TEXT] — 23×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Style=Primary, Indicator=1 of 4, Size=40px (+23 more) | 40×40 |  ·  ·  |  |  |   |  |
| RTL=No, Style=Primary, Indicator=1 of 4, Size=48px (+23 more) | 48×48 |  ·  ·  |  |  |   |  |
| RTL=No, Style=Primary, Indicator=1 of 4, Size=64px (+23 more) | 64×64 |  ·  ·  |  |  |   |  |
| RTL=No, Style=Primary, Indicator=1 of 4, Size=80px (+23 more) | 80×80 |  ·  ·  |  |  |   |  |
| RTL=No, Style=Primary, Indicator=1 of 4, Size=120px (+23 more) | 120×120 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Style=Primary, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
- `1 of 4`: 23×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"

**RTL=Yes, Style=Primary, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
- `1 من 4`: 26×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 من 4"

**RTL=No, Style=On-Color, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Tail`: 40×40 · r=2.5 · fill=Background/surface-oncolor=#ffffff · rot=90
- `1 of 4`: 23×13 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"

**RTL=Yes, Style=On-Color, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Tail`: 40×40 · r=2.5 · fill=Background/surface-oncolor=#ffffff · rot=90
- `1 من 4`: 26×13 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=8.75 · lh=12.5 · txt="1 من 4"

**RTL=No, Style=Neutral, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-black=#161616 · rot=90
- `1 of 4`: 23×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 of 4"

**RTL=Yes, Style=Neutral, Indicator=1 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-black=#161616 · rot=90
- `1 من 4`: 26×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="1 من 4"

**RTL=No, Style=Primary, Indicator=2 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
- `2 of 4`: 23×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="2 of 4"

**RTL=Yes, Style=Primary, Indicator=2 of 4, Size=40px**
- `Track`: 40×40 · fill=Background/background-neutral-200=#e5e7eb
- `Tail`: 40×40 · r=2.5 · fill=Background/background-primary=#1b8354 · rot=90
- `2 من 4`: 26×13 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=8.75 · lh=12.5 · txt="2 من 4"

### Interactions & motion

*No prototype reactions defined on this component set.*

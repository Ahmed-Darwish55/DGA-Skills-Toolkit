# Skeleton — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `21647:131`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 21647-131

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Skeleton

> A Skeleton is a UI component used to display a placeholder version of content while data is loading. Its purpose is to improve user experience by providing a visual indication that content is on the way, rather than leaving the screen blank. It’s commonly used in apps and websites that need time to load data, such as lists or images.

> Resources

> Line

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

> Circle

> Rectangle

> Square

## Component sets on this page (9)

- **_Skeleton Circle ** — 14 variants · `22440:37888`
- **_Skeleton Square** — 14 variants · `26157:5677`
- **Skeleton Component ** — 5 variants · `23711:197`
- **_Skeleton Rectangle** — 12 variants · `26177:5824`
- **_Skeleton Line** — 4 variants · `26177:5941`
- **Skeleton Square** — 7 variants · `26177:5624`
- **Skeleton Rectangle** — 6 variants · `26177:5878`
- **Skeleton Circle** — 7 variants · `26177:5921`
- **Skeleton Line** — 2 variants · `26177:5977`

---
## _Skeleton Circle 

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: 24px · 48px · 64px · 80px · 120px · 240px · 170px |
| Animation State | VARIANT: End · Start |

### Anatomy (first variant: `Size=24px, Animation State=Start`)

- `Size=24px, Animation State=Start` [COMP] — 24×24 · r=9999 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=24px, Animation State=Start | 24×24 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=24px, Animation State=End | 24×24 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=64px, Animation State=Start | 64×64 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=48px, Animation State=Start | 48×48 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=80px, Animation State=Start | 80×80 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=120px, Animation State=Start | 120×120 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=170px, Animation State=Start | 170×170 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=64px, Animation State=End | 64×64 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=48px, Animation State=End | 48×48 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=80px, Animation State=End | 80×80 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=120px, Animation State=End | 120×120 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=170px, Animation State=End | 170×170 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=240px, Animation State=End | 240×240 |  ·  ·  | 9999 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=240px, Animation State=Start | 240×240 |  ·  ·  | 9999 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=24px, Animation State=Start**

**Size=24px, Animation State=End**

**Size=64px, Animation State=Start**

**Size=48px, Animation State=Start**

**Size=80px, Animation State=Start**

**Size=120px, Animation State=Start**

**Size=170px, Animation State=Start**

**Size=64px, Animation State=End**

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: Start→End | **DISSOLVE 600ms LINEAR** | 7 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: End→Start | **DISSOLVE 600ms LINEAR** | 7 |

---
## _Skeleton Square

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: 120px · 80px · 64px · 48px · 24px · 282px-Card · 240px |
| Animation State | VARIANT: Start · End |

### Anatomy (first variant: `Size=24px, Animation State=Start`)

- `Size=24px, Animation State=Start` [COMP] — 24×24 · r=2 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=24px, Animation State=Start | 24×24 |  ·  ·  | 2 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=24px, Animation State=End | 24×24 |  ·  ·  | 2 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=64px, Animation State=Start | 64×64 |  ·  ·  | 4 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=48px, Animation State=Start | 48×48 |  ·  ·  | 2 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=80px, Animation State=Start | 80×80 |  ·  ·  | 4 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=120px, Animation State=Start | 120×120 |  ·  ·  | 8 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=64px, Animation State=End | 64×64 |  ·  ·  | 4 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=48px, Animation State=End | 48×48 |  ·  ·  | 2 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=80px, Animation State=End | 80×80 |  ·  ·  | 4 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=120px, Animation State=End | 120×120 |  ·  ·  | 8 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=240px, Animation State=End | 240×240 |  ·  ·  | 16 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |
| Size=240px, Animation State=Start | 240×240 |  ·  ·  | 16 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=282px-Card, Animation State=Start | 170×170 |  ·  ·  | 8 | GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) |   |  |
| Size=282px-Card, Animation State=End | 170×170 |  ·  ·  | 8 | GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=24px, Animation State=Start**

**Size=24px, Animation State=End**

**Size=64px, Animation State=Start**

**Size=48px, Animation State=Start**

**Size=80px, Animation State=Start**

**Size=120px, Animation State=Start**

**Size=64px, Animation State=End**

**Size=48px, Animation State=End**

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: Start→End | **DISSOLVE 600ms LINEAR** | 7 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: End→Start | **DISSOLVE 600ms LINEAR** | 7 |

---
## Skeleton Component 

### Properties

| Property | Type / options |
|---|---|
| Type | VARIANT: Image Button and Text · Icon and List · Image Content and Button · Chart and Content · Image Profile Content and Button |

### Anatomy (first variant: `Type=Chart and Content`)

- `Type=Chart and Content` [COMP] — 280×354 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=24
  - `Skeleton Circle` [INST] ⟶ instance of **Skeleton Circle / Size=240px** — 240×240
    - `_Skeleton Circle ` [INST] ⟶ instance of **_Skeleton Circle  / Size=120px, Animation State=Start** — 240×240 · r=9999 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
  - `Frame 10` [FRAM] — 277×90 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Skeleton Line` [INST] ⟶ instance of **Skeleton Line / Size=Large** — 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `_Skeleton Line` [INST] ⟶ instance of **_Skeleton Line / Size=Large, Animated State=Start, Line or Paragraph=Line** — 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
        - `Skeleton` [RECT] — 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
    - `Skeleton Line` [INST] ⟶ instance of **Skeleton Line / Size=Large** — 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `_Skeleton Line` [INST] ⟶ instance of **_Skeleton Line / Size=Large, Animated State=Start, Line or Paragraph=Line** — 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
        - `Skeleton` [RECT] — 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
    - `Skeleton Line` [INST] ⟶ instance of **Skeleton Line / Size=Large** — 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `_Skeleton Line` [INST] ⟶ instance of **_Skeleton Line / Size=Large, Animated State=Start, Line or Paragraph=Line** — 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
        - `Skeleton` [RECT] — 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Chart and Content | 280×354 | V/MIN/CENTER · 0 0 0 0 · 24 |  |  |   |  |
| Type=Image Content and Button | 280×383 | V/MIN/MIN · 0 0 0 0 · 24 |  |  |   |  |
| Type=Image Profile Content and Button | 280×431 | V/MIN/MIN · 0 0 0 0 · 24 |  |  |   |  |
| Type=Image Button and Text | 336×56 | H/MIN/CENTER · 0 0 0 0 · 11 |  |  |   |  |
| Type=Icon and List | 245×70 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Chart and Content**
- `Skeleton Circle`: 240×240
- `Skeleton Circle › _Skeleton Circle `: 240×240 · r=9999 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Frame 10`: 277×90 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Frame 10 › Skeleton Line`: 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 10 › Skeleton Line › _Skeleton Line`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 10 › Skeleton Line › _Skeleton Line › Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Frame 10 › Skeleton Line#2`: 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 10 › Skeleton Line › _Skeleton Line#2`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 10 › Skeleton Line › _Skeleton Line › Skeleton#2`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Frame 10 › Skeleton Line#3`: 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 10 › Skeleton Line › _Skeleton Line#3`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 10 › Skeleton Line › _Skeleton Line › Skeleton#3`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Type=Image Content and Button**
- `Skeleton Square`: 280×221 · r=16 · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
- `Skeleton Square › _Skeleton Square`: 280×221 · r=16 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
- `Paragraph`: 280×90 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Paragraph › Skeleton Line`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Paragraph › Skeleton Line#2`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line#2`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton#2`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Paragraph › Skeleton Line#3`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line#3`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton#3`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Skeleton Rectangle`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle › Long`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle › Long › Skeleton`: 59×24 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Type=Image Profile Content and Button**
- `Skeleton Square`: 280×221 · r=16 · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
- `Skeleton Square › _Skeleton Square`: 280×221 · r=16 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
- `Frame 13`: 280×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Frame 13 › Skeleton Circle`: 24×24
- `Frame 13 › Skeleton Circle › _Skeleton Circle `: 24×24 · r=9999 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Frame 13 › Skeleton Line`: 67×14 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 13 › Skeleton Line › _Skeleton Line`: 67×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 13 › Skeleton Line › _Skeleton Line › Skeleton`: 67×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Paragraph`: 280×90 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Paragraph › Skeleton Line`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Paragraph › Skeleton Line#2`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line#2`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton#2`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Paragraph › Skeleton Line#3`: 280×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Paragraph › Skeleton Line › _Skeleton Line#3`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Paragraph › Skeleton Line › _Skeleton Line › Skeleton#3`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Skeleton Rectangle`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle › Long`: 59×24
- `Skeleton Rectangle › _Skeleton Rectangle › Long › Skeleton`: 59×24 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Type=Image Button and Text**
- `Skeleton Circle`: 48×48
- `Skeleton Circle › _Skeleton Circle `: 48×48 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Content`: 277×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=10
- `Content › Skeleton Line`: 277×14 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Content › Skeleton Line › _Skeleton Line`: 277×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Content › Skeleton Line › _Skeleton Line › Skeleton`: 277×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Content › Rectangle`: 75×32
- `Content › Rectangle › _Skeleton Rectangle`: 75×32
- `Content › Rectangle › _Skeleton Rectangle › Long`: 75×32
- `Content › Rectangle › _Skeleton Rectangle › Long › Skeleton`: 75×32 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Type=Icon and List**
- `Skeleton Square`: 48×48 · r=2 · tokens{topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}
- `Skeleton Square › _Skeleton Square`: 48×48 · r=2 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}
- `Frame 12`: 165×66 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Frame 12 › Skeleton Line`: 165×14 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Frame 12 › Skeleton Line › _Skeleton Line`: 165×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 12 › Skeleton Line › _Skeleton Line › Skeleton`: 165×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Frame 12 › Skeleton Line#2`: 165×14 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Frame 12 › Skeleton Line › _Skeleton Line#2`: 165×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 12 › Skeleton Line › _Skeleton Line › Skeleton#2`: 165×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Frame 12 › Skeleton Line#3`: 165×14 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Frame 12 › Skeleton Line › _Skeleton Line#3`: 165×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `Frame 12 › Skeleton Line › _Skeleton Line › Skeleton#3`: 165×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Line ⟶ _Skeleton Line :: Size=Large, Animated State=End, Line or Paragraph=Line | **DISSOLVE 600ms LINEAR** | 9 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Line ⟶ _Skeleton Line :: Size=Small, Animated State=End, Line or Paragraph=Line | **DISSOLVE 600ms LINEAR** | 5 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Square ⟶ _Skeleton Square :: Size=48px, Animation State=End | **DISSOLVE 600ms LINEAR** | 3 |
| AFTER_TIMEOUT(800ms) | CHANGE_TO | _Skeleton Rectangle ⟶ _Skeleton Rectangle :: Size=Large, Width=Long, Animation State=End | **DISSOLVE 600ms LINEAR** | 3 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=120px, Animation State=End | **DISSOLVE 600ms LINEAR** | 1 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=240px, Animation State=End | **DISSOLVE 600ms LINEAR** | 1 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=240px, Animation State=Start | **DISSOLVE 600ms LINEAR** | 1 |

---
## _Skeleton Rectangle

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Small · Medium · Large |
| Width | VARIANT: Long · Short |
| Animation State | VARIANT: Start · End |

### Anatomy (first variant: `Size=Small, Width=Short, Animation State=Start`)

- `Size=Small, Width=Short, Animation State=Start` [COMP] — 59×24
  - `Short` [FRAM] — 59×24
    - `Skeleton` [RECT] — 59×24 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Small, Width=Short, Animation State=Start (+1 more) | 59×24 |  ·  ·  |  |  |   |  |
| Size=Small, Width=Long, Animation State=End (+1 more) | 320×24 |  ·  ·  |  |  |   |  |
| Size=Medium, Width=Long, Animation State=Start (+1 more) | 320×32 |  ·  ·  |  |  |   |  |
| Size=Large, Width=Long, Animation State=Start (+1 more) | 320×40 |  ·  ·  |  |  |   |  |
| Size=Medium, Width=Short, Animation State=Start (+1 more) | 75×32 |  ·  ·  |  |  |   |  |
| Size=Large, Width=Short, Animation State=Start (+1 more) | 90×40 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Small, Width=Short, Animation State=Start**
- `Short`: 59×24
- `Short › Skeleton`: 59×24 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Small, Width=Short, Animation State=End**
- `Short`: 59×24
- `Short › Skeleton`: 59×24 · r=8 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Small, Width=Long, Animation State=End**
- `Long`: 320×24
- `Long › Skeleton`: 320×24 · r=4 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Small, Width=Long, Animation State=Start**
- `Long`: 320×24
- `Long › Skeleton`: 320×24 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Medium, Width=Long, Animation State=Start**
- `Long`: 320×32
- `Long › Skeleton`: 320×32 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Medium, Width=Long, Animation State=End**
- `Long`: 320×32
- `Long › Skeleton`: 320×32 · r=4 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Large, Width=Long, Animation State=Start**
- `Long`: 320×40
- `Long › Skeleton`: 320×40 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Large, Width=Long, Animation State=End**
- `Long`: 320×40
- `Long › Skeleton`: 320×40 · r=4 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: End→Start | **DISSOLVE 600ms LINEAR** | 5 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animation State: Start→End | **DISSOLVE 600ms LINEAR** | 4 |
| AFTER_TIMEOUT(800ms) | CHANGE_TO | Animation State: Start→End | **DISSOLVE 600ms LINEAR** | 2 |
| AFTER_TIMEOUT(800ms) | CHANGE_TO | Animation State: End→Start | **DISSOLVE 600ms LINEAR** | 1 |

---
## _Skeleton Line

### Properties

| Property | Type / options |
|---|---|
| Show Second line | BOOLEAN=true |
| Show Third line | BOOLEAN=true |
| Size | VARIANT: Large · Small |
| Animated State | VARIANT: Start · End |
| Line or Paragraph | VARIANT: Line |

### Anatomy (first variant: `Size=Large, Animated State=Start, Line or Paragraph=Line`)

- `Size=Large, Animated State=Start, Line or Paragraph=Line` [COMP] — 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
  - `Skeleton` [RECT] — 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large, Animated State=Start, Line or Paragraph=Line (+1 more) | 277×22 | V/MIN/MAX · 0 0 0 0 · 14 |  |  |   |  |
| Size=Small, Animated State=Start, Line or Paragraph=Line (+1 more) | 277×14 | V/MIN/MAX · 0 0 0 0 · 14 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large, Animated State=Start, Line or Paragraph=Line**
- `Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Large, Animated State=End, Line or Paragraph=Line**
- `Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Small, Animated State=Start, Line or Paragraph=Line**
- `Skeleton`: 277×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Small, Animated State=End, Line or Paragraph=Line**
- `Skeleton`: 277×14 · r=8 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animated State: Start→End | **DISSOLVE 600ms LINEAR** | 2 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | Animated State: End→Start | **DISSOLVE 600ms LINEAR** | 2 |

---
## Skeleton Square

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: 240px · 170px · 120px · 80px · 64px · 48px · 24px |

### Anatomy (first variant: `Size=240px`)

- `Size=240px` [COMP] — 240×240 · r=16 · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
  - `_Skeleton Square` [INST] ⟶ instance of **_Skeleton Square / Size=48px, Animation State=Start** — 240×240 · r=16 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=240px | 240×240 |  ·  ·  | 16 |  |   |  |
| Size=170px | 170×170 |  ·  ·  | 8 |  |   |  |
| Size=120px | 120×120 |  ·  ·  | 8 |  |   |  |
| Size=80px | 80×80 |  ·  ·  | 4 |  |   |  |
| Size=64px | 64×64 |  ·  ·  | 4 |  |   |  |
| Size=48px | 48×48 |  ·  ·  | 2 |  |   |  |
| Size=24px | 24×24 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=240px**
- `_Skeleton Square`: 240×240 · r=16 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}

**Size=170px**
- `_Skeleton Square`: 170×170 · r=16 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}

**Size=120px**
- `_Skeleton Square`: 120×120 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=80px**
- `_Skeleton Square`: 80×80 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=64px**
- `_Skeleton Square`: 64×64 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=48px**
- `_Skeleton Square`: 48×48 · r=2 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}

**Size=24px**
- `_Skeleton Square`: 24×24 · r=2 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Square ⟶ _Skeleton Square :: Size=48px, Animation State=End | **DISSOLVE 600ms LINEAR** | 7 |

---
## Skeleton Rectangle

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Large · Medium · Small |
| width | VARIANT: Long · Short |

### Anatomy (first variant: `Size=Large, width=Long`)

- `Size=Large, width=Long` [COMP] — 320×40
  - `_Skeleton Rectangle` [INST] ⟶ instance of **_Skeleton Rectangle / Size=Large, Width=Long, Animation State=Start** — 320×40
    - `Long` [FRAM] — 320×40
      - `Skeleton` [RECT] — 320×40 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large, width=Long | 320×40 |  ·  ·  |  |  |   |  |
| Size=Large, width=Short | 90×40 |  ·  ·  |  |  |   |  |
| Size=Medium, width=Short | 75×32 |  ·  ·  |  |  |   |  |
| Size=Small, width=Short | 59×24 |  ·  ·  |  |  |   |  |
| Size=Medium, width=Long | 320×32 |  ·  ·  |  |  |   |  |
| Size=Small, width=Long | 320×24 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large, width=Long**
- `_Skeleton Rectangle`: 320×40
- `_Skeleton Rectangle › Long`: 320×40
- `_Skeleton Rectangle › Long › Skeleton`: 320×40 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Large, width=Short**
- `_Skeleton Rectangle`: 90×40
- `_Skeleton Rectangle › Long`: 90×40
- `_Skeleton Rectangle › Long › Skeleton`: 90×40 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Medium, width=Short**
- `_Skeleton Rectangle`: 75×32
- `_Skeleton Rectangle › Long`: 75×32
- `_Skeleton Rectangle › Long › Skeleton`: 75×32 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Small, width=Short**
- `_Skeleton Rectangle`: 59×24
- `_Skeleton Rectangle › Long`: 59×24
- `_Skeleton Rectangle › Long › Skeleton`: 59×24 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Medium, width=Long**
- `_Skeleton Rectangle`: 320×32
- `_Skeleton Rectangle › Long`: 320×32
- `_Skeleton Rectangle › Long › Skeleton`: 320×32 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

**Size=Small, width=Long**
- `_Skeleton Rectangle`: 320×24
- `_Skeleton Rectangle › Long`: 320×24
- `_Skeleton Rectangle › Long › Skeleton`: 320×24 · r=4 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(800ms) | CHANGE_TO | _Skeleton Rectangle ⟶ _Skeleton Rectangle :: Size=Large, Width=Long, Animation State=End | **DISSOLVE 600ms LINEAR** | 6 |

---
## Skeleton Circle

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: 240px · 170px · 120px · 80px · 64px · 48px · 24px |

### Anatomy (first variant: `Size=240px`)

- `Size=240px` [COMP] — 240×240
  - `_Skeleton Circle ` [INST] ⟶ instance of **_Skeleton Circle  / Size=120px, Animation State=End** — 240×240 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=240px | 240×240 |  ·  ·  |  |  |   |  |
| Size=170px | 170×170 |  ·  ·  |  |  |   |  |
| Size=120px | 120×120 |  ·  ·  |  |  |   |  |
| Size=80px | 80×80 |  ·  ·  |  |  |   |  |
| Size=64px | 64×64 |  ·  ·  |  |  |   |  |
| Size=48px | 48×48 |  ·  ·  |  |  |   |  |
| Size=24px | 24×24 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=240px**
- `_Skeleton Circle `: 240×240 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=170px**
- `_Skeleton Circle `: 170×170 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=120px**
- `_Skeleton Circle `: 120×120 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=80px**
- `_Skeleton Circle `: 80×80 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=64px**
- `_Skeleton Circle `: 64×64 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=48px**
- `_Skeleton Circle `: 48×48 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**Size=24px**
- `_Skeleton Circle `: 24×24 · r=9999 · fill=GRADIENT_LINEAR(#9da4ae@0.00,#d2d6db@0.50,#e5e7eb@1.00) · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=240px, Animation State=Start | **DISSOLVE 600ms LINEAR** | 5 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=120px, Animation State=Start | **DISSOLVE 600ms LINEAR** | 2 |

---
## Skeleton Line

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Large · Small |

### Anatomy (first variant: `Size=Large`)

- `Size=Large` [COMP] — 277×22 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `_Skeleton Line` [INST] ⟶ instance of **_Skeleton Line / Size=Large, Animated State=Start, Line or Paragraph=Line** — 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
    - `Skeleton` [RECT] — 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large | 277×22 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Size=Small | 277×14 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large**
- `_Skeleton Line`: 277×22 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `_Skeleton Line › Skeleton`: 277×22 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

**Size=Small**
- `_Skeleton Line`: 277×14 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=14
- `_Skeleton Line › Skeleton`: 277×14 · r=8 · fill=GRADIENT_LINEAR(#e5e7eb@0.00,#d2d6db@0.50,#9da4ae@1.00) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Line ⟶ _Skeleton Line :: Size=Large, Animated State=End, Line or Paragraph=Line | **DISSOLVE 600ms LINEAR** | 1 |
| AFTER_TIMEOUT(600ms) | CHANGE_TO | _Skeleton Line ⟶ _Skeleton Line :: Size=Small, Animated State=End, Line or Paragraph=Line | **DISSOLVE 600ms LINEAR** | 1 |

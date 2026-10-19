# Metric — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `19007:6084`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 19007-6084

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Metric

> A metric component in design systems typically refers to a UI element that displays quantitative data in a visually digestible form. It often includes numbers, units, and sometimes visual aids like icons, charts to represent data clearly and efficiently.

> Resources

## Component sets on this page (4)

- **_Small Chart** — 8 variants · `19007:6117`
- **_Large Chart** — 8 variants · `23257:4729`
- **_Change** — 4 variants · `19007:6182`
- **Metric** — 4 variants · `19332:693`

---
## _Small Chart

**Description (component description field):**

> A small line chart that visually represents trends over time, Offers users a quick visual overview of the data trend.

### Properties

| Property | Type / options |
|---|---|
| Show Marker | BOOLEAN=true |
| Type | VARIANT: Realistic · Wavy · Straight · Layers |
| Trend | VARIANT: Positive · Negative |

### Anatomy (first variant: `Type=Wavy, Trend=Positive`)

- `Type=Wavy, Trend=Positive` [COMP] — 128×64
  - `Background` [GROU] — 128×64
    - `Mask` [FRAM] — 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
    - `Color` [VECT] — 128×64 · fill=Background/background-success=#079455 · op=0.2
  - `Line` [VECT] — 128×64 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
  - `Marker` [FRAM] — 22×22
    - `Ring` [FRAM] — 22×22 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
    - `Dot` [FRAM] — 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Wavy, Trend=Positive (+7 more) | 128×64 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Wavy, Trend=Positive**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 128×64 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

**Type=Wavy, Trend=Negative**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-error=#d92d20 · op=0.2 · rot=-180
- `Line`: 128×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER · rot=-180
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Realistic, Trend=Positive**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 128×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

**Type=Realistic, Trend=Negative**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line`: 128×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Straight, Trend=Positive**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 128×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE
- `Marker#2`: 22×22
- `Marker › Ring#2`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot#2`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

**Type=Straight, Trend=Negative**
- `Background`: 128×64
- `Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 128×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line`: 128×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE
- `Marker#2`: 22×22
- `Marker › Ring#2`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot#2`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Layers, Trend=Negative**
- `Line 01 mask`: 128×64
- `Line 01 mask › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Line 01 mask › Line 01`: 128×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line 02`: 128×46 · fill=Background/background-error=#d92d20 · op=0.2

**Type=Layers, Trend=Positive**
- `Line 01 mask`: 128×64
- `Line 01 mask › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Line 01 mask › Line 01`: 128×64 · fill=Background/background-success=#079455 · op=0.2
- `Line 02`: 128×52 · fill=Background/background-success=#079455 · op=0.2

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Large Chart

**Description (component description field):**

> A large line chart that visually represents trends over time, Offers users a quick visual overview of the data trend.

### Properties

| Property | Type / options |
|---|---|
| Show Marker | BOOLEAN=true |
| Type | VARIANT: Realistic · Wavy · Straight · Layers |
| Trend | VARIANT: Positive · Negative |

### Anatomy (first variant: `Type=Wavy, Trend=Positive`)

- `Type=Wavy, Trend=Positive` [COMP] — 328×64
  - `Background` [GROU] — 328×64
    - `Mask` [FRAM] — 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
    - `Color` [VECT] — 328×64 · fill=Background/background-success=#079455 · op=0.2
  - `Line` [VECT] — 328×64 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
  - `Marker` [FRAM] — 22×22
    - `Ring` [FRAM] — 22×22 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
    - `Dot` [FRAM] — 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Wavy, Trend=Positive (+7 more) | 328×64 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Wavy, Trend=Positive**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 328×64 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

**Type=Wavy, Trend=Negative**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-error=#d92d20 · op=0.2 · rot=-180
- `Line`: 328×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER · rot=-180
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Realistic, Trend=Positive**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 328×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=157.14285278320312 · stroke=Border/border-success=#067647 · sw=1.5714285373687744 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=157.14285278320312 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=1.5714285373687744 · sa=INSIDE

**Type=Realistic, Trend=Negative**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line`: 328×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Straight, Trend=Positive**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-success=#079455 · op=0.2
- `Line`: 328×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE
- `Marker#2`: 22×22
- `Marker › Ring#2`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot#2`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE

**Type=Straight, Trend=Negative**
- `Background`: 328×64
- `Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Background › Color`: 328×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line`: 328×64 · stroke=Border/border-error=#b42318 · sw=2 · sa=CENTER
- `Marker`: 22×22
- `Marker › Ring`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE
- `Marker#2`: 22×22
- `Marker › Ring#2`: 22×22 · r=200 · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE · op=0.2
- `Marker › Dot#2`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-error=#b42318 · sw=2 · sa=INSIDE

**Type=Layers, Trend=Negative**
- `Line 01 mask`: 328×64
- `Line 01 mask › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Line 01 mask › Line 01`: 328×64 · fill=Background/background-error=#d92d20 · op=0.2
- `Line 02`: 328×46 · fill=Background/background-error=#d92d20 · op=0.2

**Type=Layers, Trend=Positive**
- `Line 01 mask`: 328×64
- `Line 01 mask › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Line 01 mask › Line 01`: 328×64 · fill=Background/background-success=#079455 · op=0.2
- `Line 02`: 328×52 · fill=Background/background-success=#079455 · op=0.2

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Change

**Description (component description field):**

> Includes an upward or downward arrow with a percentage change.

### Properties

| Property | Type / options |
|---|---|
| Type | VARIANT: 01 · 02 |
| Trend | VARIANT: Positive · Negative |

### Anatomy (first variant: `Type=01, Trend=Positive`)

- `Type=01, Trend=Positive` [COMP] — 65×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=2 · tokens{itemSpacing:spacing-xxs}
  - `arrow-up-02` [INST] ⟶ instance of **arrow-up-02 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 18×12 · rot=-90
      - `Icon` [VECT] — 12×18 · fill=Icon/icon-success=#067647
  - `Change` [TEXT] — 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=01, Trend=Positive (+1 more) | 65×24 | H/CENTER/CENTER · 0 0 0 0 · 2 |  |  |   |  |
| Type=02, Trend=Positive (+1 more) | 67×24 | H/CENTER/CENTER · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=01, Trend=Positive**
- `arrow-up-02`: 24×24
- `arrow-up-02 › elements`: 18×12 · rot=-90
- `arrow-up-02 › elements › Icon`: 12×18 · fill=Icon/icon-success=#067647
- `Change`: 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**Type=02, Trend=Positive**
- `trade-up`: 24×24
- `trade-up › elements`: 18×10
- `trade-up › elements › Icon`: 18×10 · fill=Icon/icon-success=#067647
- `Change`: 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**Type=01, Trend=Negative**
- `arrow-up-02`: 24×24
- `arrow-up-02 › elements`: 18×12 · rot=-90
- `arrow-up-02 › elements › Icon`: 12×18 · fill=Icon/icon-error=#b42318
- `Change`: 39×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**Type=02, Trend=Negative**
- `trade-down`: 24×24
- `trade-down › elements`: 18×10
- `trade-down › elements › Icon`: 18×10 · fill=Icon/icon-error=#b42318
- `Change`: 39×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Metric

**Description (component description field):**

> A metric component is often used in dashboards or reports to highlight trends, comparisons, and numerical values that are critical to monitoring performance over time.

### Properties

| Property | Type / options |
|---|---|
| Swap Featured Icon | INSTANCE_SWAP=31864:190026 |
| Show Featured icon | BOOLEAN=true |
| Percentage | TEXT=50% |
| Show Text | BOOLEAN=true |
| Show Actions | BOOLEAN=true |
| Show Secondary Action | BOOLEAN=true |
| Show Chart | BOOLEAN=true |
| Show More Button | BOOLEAN=true |
| Label EN | TEXT=24h Views |
| Label AR | TEXT=المشاهدات خلال 24س |
| Show _Change | BOOLEAN=true |
| Show Info | BOOLEAN=true |
| Text AR | TEXT=مقارنة بالشهر الماضي |
| Text EN | TEXT=vs last month |
| RTL | VARIANT: False · True |
| Style | VARIANT: Small Chart · Large Chart |

### Anatomy (first variant: `RTL=False, Style=Small Chart`)

- `RTL=False, Style=Small Chart` [COMP] — 360×241 · lay=V/CENTER/MIN · pad=16 16 16 16 · gap=24 · r=16 · fill=Background/background-card=#ffffff · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Card/card-lg-gap, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-lg, topRightRadius:radius-lg, bottomLeftRadius:radius-lg, bottomRightRadius:radius-lg}
  - `Upper Section` [FRAM] — 328×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
    - `Content` [FRAM] — 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Small, Color=Brand, Style=Light, Circle=True** — 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `trade-up` [INST] ⟶ instance of **trade-up / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 12×6
      - `24h Views` [TEXT] — 67×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="24h Views" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **more-vertical / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 2×12
          - `Icon` [VECT] — 2×12 · fill=Icon/icon-default=#161616
  - `Body` [FRAM] — 328×80 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=24
    - `Content` [FRAM] — 176×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
      - `50%` [TEXT] — 77×44 · fill=Text/text-display=#1f2a37 · font=mixed · fs=36 · lh=44 · ts=Display md/Bold · txt="50%" · tokens{fontSize:Size/Display/typo-size-display-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-md, lineHeight:Line Height/Display/line-heights-display-md}
      - `Info` [FRAM] — 158×24 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
        - `_Change` [INST] ⟶ instance of **_Change / Type=01, Trend=Positive** — 65×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=2 · tokens{itemSpacing:spacing-xxs}
          - `arrow-up-02` [INST] ⟶ instance of **arrow-up-02 / Style=Stroke, Type=Rounded** — 24×24
          - `Change` [TEXT] — 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `vs last month` [TEXT] — 85×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="vs last month" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `_Small Chart` [INST] ⟶ instance of **_Small Chart / Type=Realistic, Trend=Positive** — 128×64
      - `Background` [GROU] — 128×64
        - `Mask` [FRAM] — 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
        - `Color` [VECT] — 128×64 · fill=Background/background-success=#079455 · op=0.2
      - `Line` [VECT] — 128×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
      - `Marker` [FRAM] — 22×22
        - `Ring` [FRAM] — 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
        - `Dot` [FRAM] — 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE
  - `Actions Section` [FRAM] — 328×49 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 360×1
      - `Divider` [RECT] — 360×1 · fill=Border/border-neutral-primary=#d2d6db
    - `Actions Section` [FRAM] — 328×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Actions` [FRAM] — 328×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **settings-01 / Style=Stroke, Type=Rounded** — 20×20
        - `Action` [FRAM] — 296×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8
          - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 103×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Style=Small Chart | 360×241 | V/CENTER/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=False, Style=Large Chart | 360×293 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Style=Small Chart**
- `Upper Section`: 328×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Upper Section › Content`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Upper Section › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Upper Section › Content › Featured icon › trade-up`: 16×16
- `Upper Section › Content › Featured icon › trade-up › elements`: 12×6
- `Upper Section › Content › Featured icon › trade-up › elements › Icon`: 12×6 · fill=Icon/icon-success=#067647
- `Upper Section › Content › 24h Views`: 67×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="24h Views" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Upper Section › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Upper Section › Button › Leading Icon`: 20×20
- `Upper Section › Button › Leading Icon › elements`: 2×12
- `Upper Section › Button › Leading Icon › elements › Icon`: 2×12 · fill=Icon/icon-default=#161616
- `Body`: 328×80 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=24
- `Body › Content`: 176×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Body › Content › 50%`: 77×44 · fill=Text/text-display=#1f2a37 · font=mixed · fs=36 · lh=44 · ts=Display md/Bold · txt="50%" · tokens{fontSize:Size/Display/typo-size-display-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-md, lineHeight:Line Height/Display/line-heights-display-md}
- `Body › Content › Info`: 158×24 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Body › Content › Info › _Change`: 65×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=2 · tokens{itemSpacing:spacing-xxs}
- `Body › Content › Info › _Change › arrow-up-02`: 24×24
- `Body › Content › Info › _Change › arrow-up-02 › elements`: 18×12 · rot=-90
- `Body › Content › Info › _Change › arrow-up-02 › elements › Icon`: 12×18 · fill=Icon/icon-success=#067647
- `Body › Content › Info › _Change › Change`: 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Body › Content › Info › vs last month`: 85×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="vs last month" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Body › _Small Chart`: 128×64
- `Body › _Small Chart › Background`: 128×64
- `Body › _Small Chart › Background › Mask`: 128×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `Body › _Small Chart › Background › Color`: 128×64 · fill=Background/background-success=#079455 · op=0.2
- `Body › _Small Chart › Line`: 128×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `Body › _Small Chart › Marker`: 22×22
- `Body › _Small Chart › Marker › Ring`: 22×22 · r=200 · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE · op=0.2
- `Body › _Small Chart › Marker › Dot`: 12×12 · r=200 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=2 · sa=INSIDE
- `Actions Section`: 328×49 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions Section › Divider`: 360×1
- `Actions Section › Divider › Divider`: 360×1 · fill=Border/border-neutral-primary=#d2d6db
- `Actions Section › Actions Section`: 328×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Actions Section › Actions Section › Actions`: 328×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Actions Section › Actions Section › Actions › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions Section › Actions Section › Actions › Button › Leading Icon`: 20×20
- … 6 more layers (data JSON)

**RTL=False, Style=Large Chart**
- `Upper Section`: 328×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Upper Section › Content`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Upper Section › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Upper Section › Content › Featured icon › trade-up`: 16×16
- `Upper Section › Content › Featured icon › trade-up › elements`: 12×6
- `Upper Section › Content › Featured icon › trade-up › elements › Icon`: 12×6 · fill=Icon/icon-success=#067647
- `Upper Section › Content › 24h Views`: 67×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="24h Views" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Upper Section › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Upper Section › Button › Leading Icon`: 20×20
- `Upper Section › Button › Leading Icon › elements`: 2×12
- `Upper Section › Button › Leading Icon › elements › Icon`: 2×12 · fill=Icon/icon-default=#161616
- `Content`: 328×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Content › 50%`: 77×44 · fill=Text/text-display=#1f2a37 · font=mixed · fs=36 · lh=44 · ts=Display md/Bold · txt="50%" · tokens{fontSize:Size/Display/typo-size-display-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-md, lineHeight:Line Height/Display/line-heights-display-md}
- `Content › Info`: 227×24 · lay=H/MAX/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Info › _Change`: 65×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=2 · tokens{itemSpacing:spacing-xxs}
- `Content › Info › _Change › arrow-up-02`: 24×24
- `Content › Info › _Change › arrow-up-02 › elements`: 18×12 · rot=-90
- `Content › Info › _Change › arrow-up-02 › elements › Icon`: 12×18 · fill=Icon/icon-success=#067647
- `Content › Info › _Change › Change`: 39×20 · fill=Text/text-success=#067647 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="100%" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Info › vs last month`: 85×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="vs last month" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Large Chart`: 328×64
- `_Large Chart › Background`: 328×64
- `_Large Chart › Background › Mask`: 328×64 · fill=GRADIENT_LINEAR(#000000@0.00,#00000000@1.00)
- `_Large Chart › Background › Color`: 328×64 · fill=Background/background-success=#079455 · op=0.2
- `_Large Chart › Line`: 328×64 · stroke=Border/border-success=#067647 · sw=2 · sa=CENTER
- `_Large Chart › Marker`: 22×22
- `_Large Chart › Marker › Ring`: 22×22 · r=157.14285278320312 · stroke=Border/border-success=#067647 · sw=1.5714285373687744 · sa=INSIDE · op=0.2
- `_Large Chart › Marker › Dot`: 12×12 · r=157.14285278320312 · fill=Background/background-white=#ffffff · stroke=Border/border-success=#067647 · sw=1.5714285373687744 · sa=INSIDE
- `Actions Section`: 328×49 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions Section › Divider`: 360×1
- `Actions Section › Divider › Divider`: 360×1 · fill=Border/border-neutral-primary=#d2d6db
- `Actions Section › Actions Section`: 328×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Actions Section › Actions Section › Actions`: 328×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Actions Section › Actions Section › Actions › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions Section › Actions Section › Actions › Button › Leading Icon`: 20×20
- `Actions Section › Actions Section › Actions › Button › Leading Icon › elements`: 18×18
- … 5 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |

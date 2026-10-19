# Structured List — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `8818:451`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 8818-451

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Structured List

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

> Resources

> Structured List Elements

## Component sets on this page (5)

- **Structured List Header Cell** — 2 variants · `9192:5451`
- **Structured List Row Cell** — 36 variants · `9192:5705`
- **Structured List Header** — 2 variants · `9261:6628`
- **Structured List Row** — 4 variants · `9261:6903`
- **Structured List** — 64 variants · `9261:7435`

---
## Structured List Header Cell

### Properties

| Property | Type / options |
|---|---|
| Column divider | BOOLEAN=true |
| Label EN | TEXT=Row |
| Icon | BOOLEAN=false |
| Help Icon | BOOLEAN=false |
| Row Divider | BOOLEAN=true |
| Label AR | TEXT=عمود |
| RTL | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No`)

- `RTL=No` [COMP] — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
  - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
  - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
    - `elements` [GROU] — 15×18
      - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
  - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
      - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
      - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** — 20×20
        - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
          - `Beak` [FRAM] — 28×6
          - `Content` [FRAM] — 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
      - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 13×13
          - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
    - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
      - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 13×13
          - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
  - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
    - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
    - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
  - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No | 228×48 | H/CENTER/CENTER · 0 16 0 16 · 8 |  |  |   |  |
| RTL=Yes | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 2 |

---
## Structured List Row Cell

### Properties

| Property | Type / options |
|---|---|
| Column Divider | BOOLEAN=true |
| Label EN | TEXT=Row |
| Row Divider | BOOLEAN=true |
| Lable AR | TEXT=صف |
| RTL | VARIANT: No · Yes |
| State | VARIANT: Default · Default (Selectable) · Hovered (Selectable) · Focused (Selectable) · Disabled (Selectable) |
| Compact | VARIANT: No · Yes |
| Selectable | VARIANT: No · Yes |
| Selected | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No, State=Default, Compact=No, Selectable=No, Selected=No`)

- `RTL=No, State=Default, Compact=No, Selectable=No, Selected=No` [COMP] — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
  - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
      - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, State=Default, Compact=No, Selectable=No, Selected=No (+5 more) | 228×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=No, State=Default (Selectable), Compact=Yes, Selectable=Yes, Selected=No (+5 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=No, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=No (+3 more) | 228×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  | Table/table-background-hover-selected=#f9fafb |   |  |
| RTL=No, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=Yes (+3 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  | Table/table-background-hover-selected=#f9fafb |   |  |
| RTL=No, State=Focused (Selectable), Compact=No, Selectable=Yes, Selected=No (+3 more) | 228×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  | Table/table-cell-border-inverse=#161616 2 |  |
| RTL=No, State=Focused (Selectable), Compact=Yes, Selectable=Yes, Selected=Yes (+3 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  | Table/table-cell-border-inverse=#161616 2 |  |
| RTL=No, State=Disabled (Selectable), Compact=No, Selectable=Yes, Selected=No (+3 more) | 228×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  | Table/table-background-disabled=#e5e7eb |   |  |
| RTL=No, State=Disabled (Selectable), Compact=Yes, Selectable=Yes, Selected=Yes (+3 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  | Table/table-background-disabled=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Default (Selectable) · Hovered (Selectable) · Focused (Selectable) · Disabled (Selectable)

#### Default (Selectable) → **Hovered (Selectable)**  · applies to 4 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=No; RTL=No, Compact=Yes, Selectable=Yes, Selected=No; RTL=Yes, Compact=No, Selectable=Yes, Selected=No; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=No
- (root): fill: — → Table/table-background-hover-selected=#f9fafb

#### Default (Selectable) → **Focused (Selectable)**  · applies to 4 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=No; RTL=No, Compact=Yes, Selectable=Yes, Selected=No; RTL=Yes, Compact=No, Selectable=Yes, Selected=No; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=No
- (root): stroke: — → Table/table-cell-border-inverse=#161616; sw: — → 2
- − Col divider (hidden/removed)
- − Divider (hidden/removed)

#### Default (Selectable) → **Disabled (Selectable)**  · applies to 2 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=No; RTL=No, Compact=Yes, Selectable=Yes, Selected=No
- (root): fill: — → Table/table-background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae
- Cell content › Text wrapper › Row: fill: Table/table-text-body=#161616 → Global/table-text-disabled=#9da4ae

#### Hovered (Selectable) → **Focused (Selectable)**  · applies to 4 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=Yes; RTL=No, Compact=Yes, Selectable=Yes, Selected=Yes; RTL=Yes, Compact=No, Selectable=Yes, Selected=Yes; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=Yes
- (root): fill: Table/table-background-hover-selected=#f9fafb → —; stroke: — → Table/table-cell-border-inverse=#161616; sw: — → 2
- − Col divider (hidden/removed)
- − Divider (hidden/removed)

#### Hovered (Selectable) → **Disabled (Selectable)**  · applies to 2 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=Yes; RTL=No, Compact=Yes, Selectable=Yes, Selected=Yes
- (root): fill: Table/table-background-hover-selected=#f9fafb → Table/table-background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Cell content › Text wrapper › Row: fill: Table/table-text-body=#161616 → Global/table-text-disabled=#9da4ae

#### Hovered (Selectable) → **Default (Selectable)**  · applies to 4 group(s): RTL=No, Compact=No, Selectable=Yes, Selected=Yes; RTL=No, Compact=Yes, Selectable=Yes, Selected=Yes; RTL=Yes, Compact=No, Selectable=Yes, Selected=Yes; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=Yes
- (root): fill: Table/table-background-hover-selected=#f9fafb → —

#### Default (Selectable) → **Disabled (Selectable)**  · applies to 2 group(s): RTL=Yes, Compact=No, Selectable=Yes, Selected=No; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=No
- (root): fill: — → Table/table-background-disabled=#e5e7eb
- Cell content › Text wrapper › صف: fill: Table/table-text-body=#161616 → Global/table-text-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Hovered (Selectable) → **Disabled (Selectable)**  · applies to 2 group(s): RTL=Yes, Compact=No, Selectable=Yes, Selected=Yes; RTL=Yes, Compact=Yes, Selectable=Yes, Selected=Yes
- (root): fill: Table/table-background-hover-selected=#f9fafb → Table/table-background-disabled=#e5e7eb
- Cell content › Text wrapper › صف: fill: Table/table-text-body=#161616 → Global/table-text-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, State=Default, Compact=No, Selectable=No, Selected=No**
- `Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=No, State=Default (Selectable), Compact=No, Selectable=Yes, Selected=No**
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=No, State=Default (Selectable), Compact=Yes, Selectable=Yes, Selected=No**
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=No, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=Yes**
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox › _CheckboxBase1 › checkmark`: 20×20
- `Checkbox › _CheckboxBase1 › checkmark › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=No, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=Yes**
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox › _CheckboxBase1 › checkmark`: 20×20
- `Checkbox › _CheckboxBase1 › checkmark › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes, State=Default (Selectable), Compact=No, Selectable=Yes, Selected=No**
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › صف`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes, State=Default (Selectable), Compact=Yes, Selectable=Yes, Selected=No**
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › صف`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=Yes**
- `Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › صف`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Checkbox`: 20×20
- `Checkbox › _CheckboxBase1`: 20×20 · r=2 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox › _CheckboxBase1 › checkmark`: 20×20
- `Checkbox › _CheckboxBase1 › checkmark › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 12 |
| ON_PRESS | CHANGE_TO | State: Hovered (Selectable)→Focused (Selectable) | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | State: Default (Selectable)→Hovered (Selectable) | **INSTANT** | 7 |
| ON_PRESS | CHANGE_TO | State: Default (Selectable)→Focused (Selectable) | **INSTANT** | 6 |

---
## Structured List Header

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No`)

- `RTL=No` [COMP] — 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 15×18
        - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
    - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
        - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
      - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
      - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
  - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 15×18
        - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
    - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
        - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
      - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
      - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
  - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
    - `Col divider` [RECT] *(hidden)* — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 15×18
        - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
    - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
        - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
      - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
      - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No (+1 more) | 684×48 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No**
- `Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › Row#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › Row#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes**
- `Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › عمود#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header Cell › Cell content › Text wrapper › عمود#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 6 |

---
## Structured List Row

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: No · Yes |
| Compact | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No, Compact=No`)

- `RTL=No, Compact=No` [COMP] — 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
  - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
  - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
    - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Compact=No (+1 more) | 684×64 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=No, Compact=Yes (+1 more) | 684×48 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Compact=No**
- `Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider#2`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes, Compact=No**
- `Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider#2`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=No, Compact=Yes**
- `Structured List Row Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › Row#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

**RTL=Yes, Compact=Yes**
- `Structured List Row Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row Cell › Cell content › Text wrapper › صف#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Structured List

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: Yes · No |
| Compact | VARIANT: No · Yes |
| Contained | VARIANT: No · Yes |
| Row divider | VARIANT: Yes · No |
| Col divider | VARIANT: Yes · No |
| Selectable | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No`)

- `RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No` [COMP] — 684×304 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Structured List Header` [INST] ⟶ instance of **Structured List Header / RTL=No** — 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 15×18
          - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
      - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
        - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
      - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
    - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 15×18
          - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
      - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
        - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
      - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
    - `Structured List Header Cell` [INST] ⟶ instance of **Structured List Header Cell / RTL=No** — 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
      - `Col divider` [RECT] *(hidden)* — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 15×18
          - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
      - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Row` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 24×24
        - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-neutral=#384250
      - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
  - `Structured List Row` [INST] ⟶ instance of **Structured List Row / RTL=No, Compact=No** — 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
          - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
          - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
      - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
    - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
          - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Row` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
          - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
      - `Divider` [LINE] — 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
    - `Structured List Row Cell` [INST] ⟶ instance of **Structured List Row Cell / RTL=No, State=Default, Compact=No, Selectable=No, Selected=No** — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
        - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
          - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No (+15 more) | 684×304 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=No, Compact=No, Contained=Yes, Row divider=Yes, Col divider=Yes, Selectable=No (+15 more) | 684×304 | V/MIN/MIN · 0 0 0 0 · 0 | 8 |  | Table/table-cell-border=#d2d6db 1 |  |
| RTL=No, Compact=Yes, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No (+15 more) | 684×240 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=No, Compact=Yes, Contained=Yes, Row divider=Yes, Col divider=Yes, Selectable=No (+15 more) | 684×240 | V/MIN/MIN · 0 0 0 0 · 0 | 8 |  | Table/table-cell-border=#d2d6db 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider#2`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- … 54 more layers (data JSON)

**RTL=Yes, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=No**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider#2`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- … 54 more layers (data JSON)

**RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=Yes**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Checkbox`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Checkbox#2`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1#2`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#2`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Col divider#2`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- … 55 more layers (data JSON)

**RTL=Yes, Compact=No, Contained=No, Row divider=Yes, Col divider=Yes, Selectable=Yes**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Checkbox`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#2`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Checkbox#2`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1#2`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- … 55 more layers (data JSON)

**RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=No, Selectable=No**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row#2`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell#4`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- … 46 more layers (data JSON)

**RTL=Yes, Compact=No, Contained=No, Row divider=Yes, Col divider=No, Selectable=No**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#2`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#3`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#3`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row#2`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell#4`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- … 46 more layers (data JSON)

**RTL=No, Compact=No, Contained=No, Row divider=Yes, Col divider=No, Selectable=Yes**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingRight:Global/spacing-xl}
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › Row#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Checkbox`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Checkbox#2`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1#2`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › Row#2`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Row" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Checkbox#3`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1#3`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- … 58 more layers (data JSON)

**RTL=Yes, Compact=No, Contained=No, Row divider=Yes, Col divider=No, Selectable=Yes**
- `Structured List Header`: 684×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#2`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#2`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#2`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#2`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Header › Structured List Header Cell#3`: 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-md}
- `Structured List Header › Structured List Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Structured List Header › Structured List Header Cell › Cell content#3`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper#3`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Header › Structured List Header Cell › Cell content › Text wrapper › عمود#3`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="عمود" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Structured List Header › Structured List Header Cell › Divider#3`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row`: 684×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Checkbox`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Divider`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#2`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#2`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#2`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper › صف#2`: 168×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="صف" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Structured List Row › Structured List Row Cell › Checkbox#2`: 20×20
- `Structured List Row › Structured List Row Cell › Checkbox › _CheckboxBase1#2`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Structured List Row › Structured List Row Cell › Divider#2`: 228×0 · stroke=Table/table-cell-border=#d2d6db · sw=1 · sa=CENTER · rot=-180
- `Structured List Row › Structured List Row Cell#3`: 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Structured List Row › Structured List Row Cell › Cell content#3`: 168×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Structured List Row › Structured List Row Cell › Cell content › Text wrapper#3`: 168×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- … 58 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 384 |
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 192 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 192 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 192 |
| ON_HOVER | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_PRESS | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Focused (Selectable), Compact=No, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_PRESS | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Focused (Selectable), Compact=No, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_PRESS | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Focused (Selectable), Compact=Yes, Selectable=Yes, Selected=No | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=No | **INSTANT** | 96 |

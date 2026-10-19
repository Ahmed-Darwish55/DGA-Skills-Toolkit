# Table — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5698:36892`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5698-36892

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Table

> A table is a structured format for displaying data in rows and columns, which helps users to understand and interact with complex information efficiently. It is a crucial element in many user interfaces, particularly for applications that require the organization, analysis, or manipulation of large amounts of data.

> Resources

> Table elements

## Component sets on this page (8)

- **Table Row Cell** — 44 variants · `5698:40125`
- **Table Header Cell** — 12 variants · `5698:40230`
- **_Cell swap** — 1 variants · `5698:40274`
- **Table Header Cell - Sort** — 15 variants · `5698:40813`
- **Table Header Cell - Filter** — 10 variants · `5894:21746`
- **Table Row** — 4 variants · `5698:40844`
- **Table** — 16 variants · `5698:40875`
- **Table Header** — 2 variants · `5898:27389`

---
## Table Row Cell

**Description (component description field):**

> Table Row Cell is a container where content or data is placed.

### Properties

| Property | Type / options |
|---|---|
| Column Divider | BOOLEAN=true |
| Helper Text | BOOLEAN=false |
| Avatar/image | BOOLEAN=false |
| 2nd action | BOOLEAN=true |
| 3rd action | BOOLEAN=true |
| Lead Text EN | TEXT=Cell |
| Helper text | TEXT=helper text |
| Lead Text AR | TEXT=خلية |
| 🔁 Swap Content | INSTANCE_SWAP=5698:40274 |
| RTL | VARIANT: False · True |
| Type | VARIANT: Default · Link · Actions · Input field · Badge · Status · Avatar/Image · Checkbox · Switch · Feedback icon · Custom |
| Compact | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Type=Default, Compact=False`)

- `RTL=False, Type=Default, Compact=False` [COMP] — 228×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
  - `Cell content` [FRAM] — 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
    - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
      - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Text wrapper` [FRAM] — 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Cell` [TEXT] — 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Default, Compact=False (+3 more) | 228×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Default, Compact=True (+3 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Badge, Compact=False (+1 more) | 120×64 | H/MIN/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Badge, Compact=True (+1 more) | 120×48 | H/MIN/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Switch, Compact=False (+1 more) | 80×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Switch, Compact=True (+1 more) | 80×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Actions, Compact=False | 144×64 | H/MAX/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Actions, Compact=True | 144×48 | H/MAX/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Avatar/Image, Compact=False | 64×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Avatar/Image, Compact=True | 64×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Checkbox, Compact=False | 52×64 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Checkbox, Compact=True | 52×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Default, Compact=False**
- `Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Cell`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Default, Compact=True**
- `Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text wrapper`: 196×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Cell`: 196×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Link, Compact=False**
- `Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text wrapper`: 196×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Cell content › Text wrapper › Link`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper › Link › Link Text`: 196×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Link, Compact=True**
- `Cell content`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text wrapper`: 196×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Cell content › Text wrapper › Link`: 196×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Cell content › Text wrapper › Link › Link Text`: 196×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Input field, Compact=False**
- `Cell content`: 196×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text Input`: 196×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Cell content › Text Input › Input Field`: 196×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Cell content › Text Input › Input Field › Icon-Text-stack`: 196×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Cell content › Text Input › Input Field › Icon-Text-stack › Text`: 172×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Cell content › Text Input › Input Field › Icon-Text-stack › Text › Entered Text`: 78×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Input field, Compact=True**
- `Cell content`: 196×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text Input`: 196×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Cell content › Text Input › Input Field`: 196×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Cell content › Text Input › Input Field › Icon-Text-stack`: 196×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Cell content › Text Input › Input Field › Icon-Text-stack › Text`: 172×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Cell content › Text Input › Input Field › Icon-Text-stack › Text › Entered Text`: 78×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Badge, Compact=False**
- `Cell content`: 36×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Tag`: 36×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Cell content › Tag › Text`: 20×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tag" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db

**RTL=False, Type=Badge, Compact=True**
- `Cell content`: 36×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Tag`: 36×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Cell content › Tag › Text`: 20×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tag" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Prefix ⟶ None | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ None | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Text Input ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Filled darker | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Text Input ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Filled darker | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |

---
## Table Header Cell

**Description (component description field):**

> The Table Header Cell is a container that holds and represents the content or data within a table's header.

### Properties

| Property | Type / options |
|---|---|
| Column Divider | BOOLEAN=true |
| Label EN | TEXT=Header |
| Icon | BOOLEAN=false |
| 🔁 Swap Icon | INSTANCE_SWAP=5698:2327 |
| Sort | BOOLEAN=false |
| Help Icon | BOOLEAN=false |
| Filter | BOOLEAN=false |
| Label AR | TEXT=عنوان العمود |
| 🔁 Swap Content | INSTANCE_SWAP=5698:40274 |
| RTL | VARIANT: False · True |
| Type | VARIANT: Default · Actions · Checkbox · Custom · Icon · Filter |

### Anatomy (first variant: `RTL=False, Type=Default`)

- `RTL=False, Type=Default` [COMP] — 228×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
  - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
  - `Cell content` [FRAM] — 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
    - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
      - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Header` [TEXT] — 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
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

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Default (+1 more) | 228×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Actions | 64×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |
| RTL=False, Type=Checkbox (+2 more) | 52×48 | H/CENTER/CENTER · 8 16 8 16 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Default**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 196×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Text wrapper`: 196×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Cell content › Text wrapper › Header`: 196×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Type=Actions**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Action buttons`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Action buttons › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Action buttons › Button › Leading Icon`: 20×20
- `Action buttons › Button › Leading Icon › elements`: 10×15 · rot=-90
- `Action buttons › Button › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616

**RTL=False, Type=Checkbox**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › Checkbox`: 20×20
- `Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

**RTL=False, Type=Icon**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › placeholder`: 20×20
- `Cell content › placeholder › Icon`: 17×17 · stroke=Icon/icon-default-500=#6c737f · sw=1.5 · sa=CENTER

**RTL=False, Type=Custom**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Cell content`: 196×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Cell content › _Cell swap`: 196×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=8 · fill=Background/background-success-50=#ecfdf3 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=8,4 · tokens{paddingLeft:spacing-lg, paddingTop:spacing-xs, paddingRight:spacing-lg, paddingBottom:spacing-xs}
- `Cell content › _Cell swap › Swap`: 43×24 · fill=Text/text-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Base/Text md/Medium · txt="Swap"

**RTL=False, Type=Filter**
- `Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell - Filter`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Table Header Cell - Filter › Sort-icon`: 16×16
- `Table Header Cell - Filter › Sort-icon › elements`: 13×13
- `Table Header Cell - Filter › Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |

---
## _Cell swap

**Description (component description field):**

> The Cell Swap allows swapping custom cells within a table, enabling flexible content replacement while maintaining structure.

*Single component (not a component set) — it has no variants; count = 1 by definition.*

### Anatomy (first variant: `_Cell swap`)

- `_Cell swap` [COMP] — 67×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=8 · fill=Background/background-success-50=#ecfdf3 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=8,4 · tokens{paddingLeft:spacing-lg, paddingTop:spacing-xs, paddingRight:spacing-lg, paddingBottom:spacing-xs}
  - `Swap` [TEXT] — 43×24 · fill=Text/text-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Base/Text md/Medium · txt="Swap"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Table Header Cell - Sort

**Description (component description field):**

> A Table Header Cell - Sort allows users to arrange table data in ascending or descending order by interacting with the header, enhancing data organization and usability.

### Properties

| Property | Type / options |
|---|---|
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Sort | VARIANT: Off · Down · Up |

### Anatomy (first variant: `State=Default, Sort=Off`)

- `State=Default, Sort=Off` [COMP] — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
  - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `elements` [GROU] — 13×13
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, Sort=Off | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| State=Hovered, Sort=Off | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| State=Pressed, Sort=Off | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| State=Focused, Sort=Off | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| State=Disabled, Sort=Off (+2 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 |  |   |  |
| State=Default, Sort=Down (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-default=#0d121c |   |  |
| State=Hovered, Sort=Down (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| State=Pressed, Sort=Down (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| State=Focused, Sort=Down (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-focused=#0d121c | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): Sort=Off
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 1 group(s): Sort=Off
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 1 group(s): Sort=Off
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → —; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): Sort=Off
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → —

#### Default → **Hovered**  · applies to 2 group(s): Sort=Down; Sort=Up
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-hovered=#1f2a37

#### Default → **Pressed**  · applies to 2 group(s): Sort=Down; Sort=Up
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Focused**  · applies to 2 group(s): Sort=Down; Sort=Up
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (20×20 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Disabled**  · applies to 2 group(s): Sort=Down; Sort=Up
- (root): fill: Button/button-background-black-default=#0d121c → —
- Sort-icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Icon/icon-default=#161616

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, Sort=Off**
- `Sort-icon`: 16×16
- `Sort-icon › elements`: 13×13
- `Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616

**State=Default, Sort=Down**
- `Sort-icon`: 16×16
- `Sort-icon › elements`: 13×13
- `Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff

**State=Default, Sort=Up**
- `Sort-icon`: 16×16
- `Sort-icon › elements`: 13×13
- `Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 3 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 3 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Sort: Off→Down | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Sort: Down→Up | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Sort: Up→Off | **INSTANT** | 1 |

---
## Table Header Cell - Filter

**Description (component description field):**

> A Table Header Cell - Filter enables users to refine table data by applying specific criteria, improving data discoverability and organization.

### Properties

| Property | Type / options |
|---|---|
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Active | VARIANT: False · True |

### Anatomy (first variant: `State=Default, Active=False`)

- `State=Default, Active=False` [COMP] — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
  - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
    - `elements` [GROU] — 13×13
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, Active=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| State=Hovered, Active=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| State=Pressed, Active=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| State=Focused, Active=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| State=Disabled, Active=False (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 |  |   |  |
| State=Default, Active=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-default=#0d121c |   |  |
| State=Hovered, Active=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| State=Pressed, Active=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| State=Focused, Active=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 8 | 4 | Button/button-background-black-focused=#0d121c | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): Active=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 1 group(s): Active=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 1 group(s): Active=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → —; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): Active=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → —

#### Default → **Hovered**  · applies to 1 group(s): Active=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-hovered=#1f2a37

#### Default → **Pressed**  · applies to 1 group(s): Active=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Focused**  · applies to 1 group(s): Active=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (20×20 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Disabled**  · applies to 1 group(s): Active=True
- (root): fill: Button/button-background-black-default=#0d121c → —
- Sort-icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Icon/icon-default=#161616

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, Active=False**
- `Sort-icon`: 16×16
- `Sort-icon › elements`: 13×13
- `Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616

**State=Default, Active=True**
- `Sort-icon`: 16×16
- `Sort-icon › elements`: 13×13
- `Sort-icon › elements › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 2 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Active: False→True | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Active: True→False | **INSTANT** | 1 |

---
## Table Row

**Description (component description field):**

> A table is a structured format for displaying data in rows and columns, which helps users to understand and interact with complex information efficiently. It is a crucial element in many user interfaces, particularly for applications that require the organization, analysis, or manipulation of large amounts of data.

### Properties

| Property | Type / options |
|---|---|
| Alt-bg | BOOLEAN=false |
| Hovered | BOOLEAN=false |
| Selected | BOOLEAN=false |
| Row Divider | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Compact | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Compact=False`)

- `RTL=False, Compact=False` [COMP] — 1000×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Alt bg` [RECT] *(hidden)* — 1000×63 · fill=Table/table-background-row-alt=#f9fafb
  - `Selected bg` [RECT] *(hidden)* — 1000×63 · fill=Table/table-background-row-selected=#f3fcf6
  - `Hover bg` [RECT] *(hidden)* — 1000×63 · fill=Table/table-background-row-hovered=#f3f4f6
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Checkbox, Compact=False** — 52×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Primary** — 20×20
        - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
    - `Col divider` [RECT] — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Link, Compact=False** — 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 97×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
        - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Default, Style=Primary, Size=Medium, Inline=False** — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
          - `Link Text` [TEXT] — 97×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
          - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Default, Compact=False** — 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Cell` [TEXT] — 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Default, Compact=False** — 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Cell` [TEXT] — 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Default, Compact=False** — 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Cell` [TEXT] — 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Badge, Compact=False** — 120×64 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 36×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False** — 36×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `elements` [GROU] — 13×12
        - `Text` [TEXT] — 20×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tag" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `elements` [GROU] — 13×12
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Status, Compact=False** — 120×64 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 76×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Status Tag` [INST] ⟶ instance of **Status Tag / RTL=False, Style=Neutral, Status=Subtle, Size=Small** — 76×24 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Status indicator` [ELLI] — 10×10 · fill=Tag/tag-background-neutral=#4d5761
        - `Text` [TEXT] — 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Default, Compact=False** — 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** *(hidden)* — 32×32
        - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Text wrapper` [FRAM] — 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Cell` [TEXT] — 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `helper text` [TEXT] *(hidden)* — 196×20 · fill=text/text-tertiary=#64748b · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Table Row Cell` [INST] ⟶ instance of **Table Row Cell / RTL=False, Type=Actions, Compact=False** — 64×64 · lay=H/MAX/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Cell content` [FRAM] — 32×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Action buttons` [FRAM] — 32×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
        - `1st action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
        - `2nd action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** *(hidden)* — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
        - `3rd action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** *(hidden)* — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
    - `Col divider` [RECT] *(hidden)* — 1×64 · fill=Table/table-cell-border=#d2d6db
  - `Row divider` [RECT] — 1000×1 · fill=Table/table-cell-border=#d2d6db

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Compact=False | 1000×64 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Compact=True | 1000×48 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Compact=False**
- `Table Row Cell`: 52×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Checkbox`: 20×20
- `Table Row Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Row Cell › Col divider`: 1×64 · fill=Table/table-cell-border=#d2d6db
- `Table Row Cell#2`: 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#2`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper`: 97×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Table Row Cell › Cell content › Text wrapper › Link`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Table Row Cell › Cell content › Text wrapper › Link › Link Text`: 97×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#3`: 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#3`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#2`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#4`: 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#4`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#3`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#2`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#5`: 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#5`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#4`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#3`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#6`: 120×64 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#6`: 36×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Tag`: 36×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Table Row Cell › Cell content › Tag › Text`: 20×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tag" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Row Cell#7`: 120×64 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#7`: 76×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Status Tag`: 76×24 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Table Row Cell › Cell content › Status Tag › Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Table Row Cell › Cell content › Status Tag › Text`: 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Table Row Cell#8`: 129×64 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#8`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#5`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#4`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#9`: 64×64 · lay=H/MAX/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- … 7 more layers (data JSON)

**RTL=False, Compact=True**
- `Table Row Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Checkbox`: 20×20
- `Table Row Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Row Cell#2`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#2`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper`: 97×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Table Row Cell › Cell content › Text wrapper › Link`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Table Row Cell › Cell content › Text wrapper › Link › Link Text`: 97×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#3`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#3`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#2`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#4`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#4`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#3`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#2`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#5`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#5`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#4`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#3`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#6`: 120×48 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#6`: 36×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Tag`: 36×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Table Row Cell › Cell content › Tag › Text`: 20×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tag" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Row Cell#7`: 120×48 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#7`: 76×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Status Tag`: 76×24 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Table Row Cell › Cell content › Status Tag › Status indicator`: 10×10 · fill=Tag/tag-background-neutral=#4d5761
- `Table Row Cell › Cell content › Status Tag › Text`: 42×20 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Status" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Table Row Cell#8`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#8`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Row Cell › Cell content › Text wrapper#5`: 97×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Row Cell › Cell content › Text wrapper › Cell#4`: 97×24 · fill=Table/table-text-body=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cell" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Table Row Cell#9`: 64×48 · lay=H/MAX/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Row Cell › Cell content#9`: 32×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- … 6 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 2 |

---
## Table

**Description (component description field):**

> A table is a structured format for displaying data in rows and columns, which helps users to understand and interact with complex information efficiently. It is a crucial element in many user interfaces, particularly for applications that require the organization, analysis, or manipulation of large amounts of data.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Alternating rows | VARIANT: True · False |
| Compact | VARIANT: False · True |
| Contained | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Alternating rows=False, Compact=False, Contained=False`)

- `RTL=False, Alternating rows=False, Compact=False, Contained=False` [COMP] — 1330×1008 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{topLeftRadius:tabel-sharp-radius, topRightRadius:tabel-sharp-radius, bottomLeftRadius:tabel-sharp-radius, bottomRightRadius:tabel-sharp-radius}
  - `Table Header` [INST] ⟶ instance of **Table Header / RTL=False** — 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Checkbox** — 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Primary** — 20×20
          - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
        - `Text wrapper` [FRAM] — 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Header` [TEXT] — 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
        - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
        - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
          - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
      - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
      - `Cell content` [FRAM] — 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
        - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
          - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Alternating rows=False, Compact=False, Contained=False (+1 more) | 1330×1008 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Alternating rows=False, Compact=False, Contained=True (+1 more) | 1330×1008 | V/MIN/MIN · 0 0 0 0 · 0 | 8 |  | Table/table-cell-border=#d2d6db 1 |  |
| RTL=False, Alternating rows=False, Compact=True, Contained=False (+1 more) | 1330×768 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Alternating rows=False, Compact=True, Contained=True (+1 more) | 1330×768 | V/MIN/MIN · 0 0 0 0 · 0 | 8 |  | Table/table-cell-border=#d2d6db 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Alternating rows=False, Compact=False, Contained=False**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 68 more layers (data JSON)

**RTL=False, Alternating rows=False, Compact=False, Contained=True**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 68 more layers (data JSON)

**RTL=False, Alternating rows=True, Compact=False, Contained=False**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 68 more layers (data JSON)

**RTL=False, Alternating rows=True, Compact=False, Contained=True**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 68 more layers (data JSON)

**RTL=False, Alternating rows=False, Compact=True, Contained=False**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 77 more layers (data JSON)

**RTL=False, Alternating rows=False, Compact=True, Contained=True**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 77 more layers (data JSON)

**RTL=False, Alternating rows=True, Compact=True, Contained=False**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 78 more layers (data JSON)

**RTL=False, Alternating rows=True, Compact=True, Contained=True**
- `Table Header`: 1330×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
- `Table Header › Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header › Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header › Table Header Cell#2`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#2`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#3`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#3`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#2`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#2`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#4`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#4`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#3`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#3`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#5`: 195×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#5`: 163×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#4`: 163×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#4`: 163×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header › Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header › Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header › Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header › Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header › Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- … 78 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 256 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 128 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 3rd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 2nd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | 1st action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Inline=False | **INSTANT** | 120 |
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 112 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 112 |

---
## Table Header

**Description (component description field):**

> The Table Header is a container that organizes and displays header content, defining the structure and context of table data.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 1000×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Table/table-background-header=#f3f4f6 · stroke=Table/table-cell-border=#d2d6db · sw=1 0 1 0 · sa=INSIDE
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Checkbox** — 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Primary** — 20×20
        - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Header` [TEXT] — 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
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
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Header` [TEXT] — 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
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
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Header` [TEXT] — 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
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
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Header` [TEXT] — 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
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
  - `Table Header Cell` [INST] ⟶ instance of **Table Header Cell / RTL=False, Type=Default** — 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
    - `Col divider` [RECT] — 1×48 · fill=Table/table-cell-border=#d2d6db
    - `Cell content` [FRAM] — 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `placeholder` [INST] ⟶ instance of **placeholder** *(hidden)* — 20×20
        - `Icon` [VECT] — 17×17 · stroke=Colors/Neutral/500=#6c737f · sw=1.5 · sa=CENTER
      - `Text wrapper` [FRAM] — 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Header` [TEXT] — 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Help Icon` [INST] ⟶ instance of **Help Icon / Open=False, Placement=Bottom, Alignment=Center** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
        - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Table Header Cell - Filter` [INST] ⟶ instance of **Table Header Cell - Filter / State=Default, Active=False** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 13×13
      - `Table Header Cell - Sort` [INST] ⟶ instance of **Table Header Cell - Sort / State=Default, Sort=Off** *(hidden)* — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Sort-icon` [INST] ⟶ instance of **sorting-05 / Style=Stroke, Type=Rounded** — 16×16

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 1000×48 | H/MIN/MIN · 0 0 0 0 · 0 |  | Table/table-background-header=#f3f4f6 | Table/table-cell-border=#d2d6db 1 0 1 0 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Table Header Cell`: 52×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Checkbox`: 20×20
- `Table Header Cell › Cell content › Checkbox › _CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Table Header Cell#2`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#2`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#2`: 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper`: 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header`: 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#3`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#3`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#3`: 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper#2`: 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header#2`: 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#4`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#4`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#4`: 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper#3`: 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header#3`: 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#5`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#5`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#5`: 97×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper#4`: 97×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header#4`: 97×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#6`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#6`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#6`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper#5`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header#5`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#7`: 120×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- `Table Header Cell › Col divider#7`: 1×48 · fill=Table/table-cell-border=#d2d6db
- `Table Header Cell › Cell content#7`: 88×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Table Header Cell › Cell content › Text wrapper#6`: 88×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Table Header Cell › Cell content › Text wrapper › Header#6`: 88×18 · fill=Table/table-text-head=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Header" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Table Header Cell#8`: 129×48 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · tokens{itemSpacing:Table/table-cell-gap, paddingLeft:Table/table-cell-h-padding, paddingTop:Table/table-cell-v-padding, paddingRight:Table/table-cell-h-padding, paddingBottom:Table/table-cell-v-padding}
- … 9 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | **INSTANT** | 14 |
| ON_HOVER | CHANGE_TO | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | **INSTANT** | 14 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 2 |

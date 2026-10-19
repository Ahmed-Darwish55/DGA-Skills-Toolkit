# List — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `8399:117565`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 8399-117565

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> List

> Lists consist of vertical groupings of associated content, with each list item starting with either a number or a bullet point.

> Resources

## Component sets on this page (1)

- **List_item** — 10 variants · `8407:121384`

---
## List_item

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Title |
| Action | INSTANCE_SWAP=5403:403566 |
| Description EN | TEXT=Desctription goes here |
| Show Icon | BOOLEAN=true |
| Show Description | BOOLEAN=true |
| Title AR | TEXT=عنوان |
| Description AR | TEXT=الوصف يكون هنا |
| Action AR | INSTANCE_SWAP=5403:403580 |
| 🔁 Swap Icon | INSTANCE_SWAP=10750:67602 |
| Show Switch | BOOLEAN=true |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focus · Disabled · Selected |

### Anatomy (first variant: `RTL=False, State=Default`)

- `RTL=False, State=Default` [COMP] — 327×44 · lay=H/SPACE_BETWEEN/CENTER · pad=0 8 0 8 · gap=96 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Frame 6` [FRAM] — 259×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `settings-error-01` [INST] ⟶ instance of **settings-error-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 22×22
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0.10000000149011612 · sa=INSIDE
    - `Frame 5` [FRAM] — 227×44 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:spacing-none}
      - `Title` [TEXT] — 227×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Title"
      - `Desctription goes here` [TEXT] — 227×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Desctription goes here"
  - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 52×32
    - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Thumb` [BOOL] — 28×28 · fill=Controls/control-border=#6c737f
      - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default (+2 more) | 327×44 | H/SPACE_BETWEEN/CENTER · 0 8 0 8 · 96 | 4 |  |   |  |
| RTL=False, State=Pressed | 327×44 | H/SPACE_BETWEEN/CENTER · 0 8 0 8 · 96 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Focus | 327×44 | H/SPACE_BETWEEN/CENTER · 0 8 0 8 · 96 | 4 |  | Controls/control-neutral-focused=#0d121c 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focus · Disabled · Selected · ⚠️ spelling as in Figma: `Focus` = **Focused** (source kept unchanged; treat as the normalised state)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 1 group(s): RTL=False
- Switch › Track: fill: — → Controls/control-primary-checked=#1b8354; stroke: Controls/control-border=#6c737f → —; sw: 1 → —
- Switch › Thumb: fill: Controls/control-border=#6c737f → Background/surface-oncolor=#ffffff; fx: — → DROP_SHADOW(#1018280f 0,1 b2);DROP_SHADOW(#1018281a 0,1 b3)
- Switch › Thumb › Thumb: fill: neutral/white=#ffffff → Background/surface-oncolor=#ffffff

#### Default → **Focus**  · applies to 1 group(s): RTL=False
- (root): stroke: — → Controls/control-neutral-focused=#0d121c; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False
- Frame 6 › settings-error-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Frame 6 › Frame 5 › Title: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Frame 6 › Frame 5 › Desctription goes here: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae
- Switch › Track: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae
- Switch › Thumb: fill: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default**
- `Frame 6`: 259×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Frame 6 › settings-error-01`: 24×24
- `Frame 6 › settings-error-01 › elements`: 22×22
- `Frame 6 › settings-error-01 › elements › Icon`: 22×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0.10000000149011612 · sa=INSIDE
- `Frame 6 › Frame 5`: 227×44 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:spacing-none}
- `Frame 6 › Frame 5 › Title`: 227×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Title"
- `Frame 6 › Frame 5 › Desctription goes here`: 227×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Desctription goes here"
- `Switch`: 52×32
- `Switch › Track`: 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Switch › Thumb`: 28×28 · fill=Controls/control-border=#6c737f
- `Switch › Thumb › Thumb`: 28×28 · fill=neutral/white=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/True/Hovered/False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | State: Default→Pressed | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/False/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/False/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/True/Hovered/True | **INSTANT** | 1 |

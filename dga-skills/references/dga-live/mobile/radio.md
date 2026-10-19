# Radio — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `2213:119791`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 2213-119791

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Radio

> Radio groups let people select a single item from a short list. Use radio group in layouts that offer enough space to list up to five options, or if it’s important to view all options at once. If there isn’t enough space, try a dropdown or a select instead. If you need to let people select more than one option, try a checkbox. To let them immediately turn a setting on or off, try a switch.

> Resources

## Component sets on this page (3)

- **_RadioBase** — 2 variants · `1870:39308`
- **Radio label** — 2 variants · `10695:105357`
- **Radio** — 20 variants · `10695:104300`

---
## _RadioBase

### Properties

| Property | Type / options |
|---|---|
| Selected | VARIANT: True · False |

### Anatomy (first variant: `Selected=False`)

- `Selected=False` [COMP] — 16×16 · r=9999 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=False (+1 more) | 16×16 |  ·  ·  | 9999 |  | Border/border-black=#161616 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=False**

**Selected=True**
- `Inner Circle`: 10×10 · fill=Controls/control-neutral-checked=#0d121c

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Radio label

### Properties

| Property | Type / options |
|---|---|
| Label EN | TEXT=Radio Label |
| Label AR | TEXT=عنوان اختيار مفرد |
| Helper Text EN | TEXT=When a selection needs a furth |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Show Alert message | BOOLEAN=true |
| Alert Message EN | TEXT=Error/Warning message |
| Alert Message AR | TEXT=رسالة خطأ أو تحذير |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 382×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Radio & Label` [FRAM] — 382×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
    - `Radio` [INST] ⟶ instance of **Radio / Selected=False, Style=Neutral, State=Default** — 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Radio & Label` [FRAM] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
        - `Radio elements` [FRAM] — 32×32
          - `_RadioBase` [INST] ⟶ instance of **_RadioBase / Selected=False** — 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Text wrapper` [FRAM] — 334×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
      - `Radio Label` [TEXT] — 334×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Radio Label"
  - `Helper Text` [FRAM] — 382×48 · lay=V/MIN/MIN · pad=4 0 4 48 · gap=8 · tokens{paddingLeft:Control/control-radio-description-padding, paddingTop:Control/control-vertical-gap, paddingBottom:Control/control-vertical-gap}
    - `Text wrapper` [FRAM] — 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `When a selection needs a further detailed explanation, it goes here.` [TEXT] — 334×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
  - `Alert message` [FRAM] — 382×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-radio-error-icon-gap}
    - `Spacer` [FRAM] — 32×32
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Icon only, Size=24, Ring=No** — 24×24
        - `alert-circle` [INST] ⟶ instance of **alert-circle** — 24×24
          - `Icon` [VECT] — 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
    - `Text wrapper` [FRAM] — 334×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
      - `Error/Warning message` [TEXT] — 334×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 382×112 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Radio & Label`: 382×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Radio & Label › Radio`: 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Radio & Label › Radio › Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Radio & Label › Radio › Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio › Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Radio & Label › Text wrapper`: 334×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Radio & Label › Text wrapper › Radio Label`: 334×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Radio Label"
- `Helper Text`: 382×48 · lay=V/MIN/MIN · pad=4 0 4 48 · gap=8 · tokens{paddingLeft:Control/control-radio-description-padding, paddingTop:Control/control-vertical-gap, paddingBottom:Control/control-vertical-gap}
- `Helper Text › Text wrapper`: 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 334×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
- `Alert message`: 382×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-radio-error-icon-gap}
- `Alert message › Spacer`: 32×32
- `Alert message › Spacer › Feedback Icon`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
- `Alert message › Text wrapper`: 334×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Alert message › Text wrapper › Error/Warning message`: 334×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Radio

### Properties

| Property | Type / options |
|---|---|
| Selected | VARIANT: False · True |
| Style | VARIANT: Neutral · Brand |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |

### Anatomy (first variant: `Selected=False, Style=Neutral, State=Default`)

- `Selected=False, Style=Neutral, State=Default` [COMP] — 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Radio & Label` [FRAM] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
    - `Radio elements` [FRAM] — 32×32
      - `_RadioBase` [INST] ⟶ instance of **_RadioBase / Selected=False** — 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=False, Style=Neutral, State=Default (+15 more) | 32×32 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  |   |  |
| Selected=False, Style=Neutral, State=Focused (+3 more) | 32×32 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 2 group(s): Selected=False, Style=Neutral; Selected=False, Style=Brand
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: fill: — → Controls/control-pressed=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): Selected=False, Style=Neutral; Selected=False, Style=Brand
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Read-only**  · applies to 2 group(s): Selected=False, Style=Neutral; Selected=False, Style=Brand
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): Selected=False, Style=Neutral; Selected=False, Style=Brand
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): Selected=True, Style=Neutral
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f

#### Default → **Focused**  · applies to 1 group(s): Selected=True, Style=Neutral
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c

#### Default → **Read-only**  · applies to 1 group(s): Selected=True, Style=Neutral
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Global/control-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Style=Neutral
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Global/control-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): Selected=True, Style=Brand
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631

#### Default → **Focused**  · applies to 1 group(s): Selected=True, Style=Brand
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354

#### Default → **Read-only**  · applies to 1 group(s): Selected=True, Style=Brand
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Style=Brand
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Global/control-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=False, Style=Neutral, State=Default**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**Selected=False, Style=Brand, State=Default**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**Selected=True, Style=Neutral, State=Default**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Radio & Label › Radio elements › _RadioBase › Inner Circle`: 15×15 · fill=Controls/control-neutral-checked=#0d121c

**Selected=True, Style=Brand, State=Default**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-primary-checked=#1b8354 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Radio & Label › Radio elements › _RadioBase › Inner Circle`: 15×15 · fill=Controls/control-primary-checked=#1b8354

### Interactions & motion

*No prototype reactions defined on this component set.*

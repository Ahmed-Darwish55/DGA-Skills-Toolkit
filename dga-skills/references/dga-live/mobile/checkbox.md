# Checkbox — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `954:11220`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 954-11220

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Checkbox

> A checkbox allows users to make a single selection or indicate a binary choice. Checkboxes enable users to interact with options within an interface. They can be toggled individually for specific selections or grouped together to allow multiple choices. Additionally, checkboxes can serve as triggers for related actions or display additional information based on user selection.

> Resources

## Component sets on this page (3)

- **Checkbox** — 90 variants · `5894:19766`
- **_CheckboxBase1** — 3 variants · `5894:19902`
- **Checkbox Label** — 2 variants · `5894:20227`

---
## Checkbox

### Properties

| Property | Type / options |
|---|---|
| Checked | VARIANT: True · False |
| Indeterminate | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |
| Size | VARIANT: Medium · Small · x Small |
| Style | VARIANT: Brand · Neutral |

### Anatomy (first variant: `Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand`)

- `Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand` [COMP] — 24×24
  - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 24×24 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand (+29 more) | 24×24 |  ·  ·  |  |  |   |  |
| Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Brand (+29 more) | 20×20 |  ·  ·  |  |  |   |  |
| Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Brand (+29 more) | 16×16 |  ·  ·  |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=Medium, Style=Brand; Checked=False, Indeterminate=False, Size=Medium, Style=Neutral
- + Interaction Circle (40×40 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: — → Controls/control-pressed=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=Medium, Style=Brand; Checked=False, Indeterminate=False, Size=Medium, Style=Neutral
- + Focus Ring (32×32 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Read-only**  · applies to 6 group(s): Checked=False, Indeterminate=False, Size=Medium, Style=Brand; Checked=False, Indeterminate=False, Size=Medium, Style=Neutral; Checked=False, Indeterminate=False, Size=Small, Style=Brand; Checked=False, Indeterminate=False, Size=Small, Style=Neutral …
- _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): Checked=False, Indeterminate=False, Size=Medium, Style=Brand; Checked=False, Indeterminate=False, Size=Medium, Style=Neutral; Checked=False, Indeterminate=False, Size=Small, Style=Brand; Checked=False, Indeterminate=False, Size=Small, Style=Neutral …
- _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=Small, Style=Brand; Checked=False, Indeterminate=False, Size=Small, Style=Neutral
- + Interaction Circle (36×36 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: — → Controls/control-pressed=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=Small, Style=Brand; Checked=False, Indeterminate=False, Size=Small, Style=Neutral
- + Focus Ring (27×27 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Brand; Checked=True, Indeterminate=True, Size=Medium, Style=Brand
- + Interaction Circle (40×40 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Brand; Checked=True, Indeterminate=True, Size=Medium, Style=Brand
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- + Focus Ring (32×32 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Read-only**  · applies to 3 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Brand; Checked=True, Indeterminate=False, Size=Small, Style=Brand; Checked=True, Indeterminate=False, Size=x Small, Style=Brand
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Controls/control-primary-checked=#1b8354

#### Default → **Disabled**  · applies to 6 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Brand; Checked=True, Indeterminate=False, Size=Small, Style=Brand; Checked=True, Indeterminate=True, Size=Medium, Style=Brand; Checked=True, Indeterminate=True, Size=Small, Style=Brand …
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Neutral; Checked=True, Indeterminate=True, Size=Medium, Style=Neutral
- + Interaction Circle (40×40 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Neutral; Checked=True, Indeterminate=True, Size=Medium, Style=Neutral
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- + Focus Ring (32×32 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Read-only**  · applies to 3 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Neutral; Checked=True, Indeterminate=False, Size=Small, Style=Neutral; Checked=True, Indeterminate=False, Size=x Small, Style=Neutral
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Controls/control-neutral-checked=#0d121c

#### Default → **Disabled**  · applies to 6 group(s): Checked=True, Indeterminate=False, Size=Medium, Style=Neutral; Checked=True, Indeterminate=False, Size=Small, Style=Neutral; Checked=True, Indeterminate=True, Size=Medium, Style=Neutral; Checked=True, Indeterminate=True, Size=Small, Style=Neutral …
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Global/background-disabled=#e5e7eb

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Small, Style=Brand; Checked=True, Indeterminate=True, Size=Small, Style=Brand
- + Interaction Circle (36×36 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Small, Style=Brand; Checked=True, Indeterminate=True, Size=Small, Style=Brand
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- + Focus Ring (27×27 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Small, Style=Neutral; Checked=True, Indeterminate=True, Size=Small, Style=Neutral
- + Interaction Circle (36×36 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=Small, Style=Neutral; Checked=True, Indeterminate=True, Size=Small, Style=Neutral
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- + Focus Ring (27×27 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Read-only**  · applies to 3 group(s): Checked=True, Indeterminate=True, Size=Medium, Style=Brand; Checked=True, Indeterminate=True, Size=Small, Style=Brand; Checked=True, Indeterminate=True, Size=x Small, Style=Brand
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- _CheckboxBase1 › Indeterminate mark › Icon: fill: Icon/icon-oncolor=#ffffff → Controls/control-primary-checked=#1b8354

#### Default → **Read-only**  · applies to 3 group(s): Checked=True, Indeterminate=True, Size=Medium, Style=Neutral; Checked=True, Indeterminate=True, Size=Small, Style=Neutral; Checked=True, Indeterminate=True, Size=x Small, Style=Neutral
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- _CheckboxBase1 › Indeterminate mark › Icon: fill: Icon/icon-oncolor=#ffffff → Controls/control-neutral-checked=#0d121c

#### Default → **Pressed**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=x Small, Style=Brand; Checked=False, Indeterminate=False, Size=x Small, Style=Neutral
- + Interaction Circle (32×32 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: — → Controls/control-pressed=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): Checked=False, Indeterminate=False, Size=x Small, Style=Brand; Checked=False, Indeterminate=False, Size=x Small, Style=Neutral
- + Focus Ring (24×24 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=x Small, Style=Brand; Checked=True, Indeterminate=True, Size=x Small, Style=Brand
- + Interaction Circle (32×32 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=x Small, Style=Brand; Checked=True, Indeterminate=True, Size=x Small, Style=Brand
- _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- + Focus Ring (24×24 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=x Small, Style=Neutral; Checked=True, Indeterminate=True, Size=x Small, Style=Neutral
- + Interaction Circle (32×32 · fill=Controls/control-ripple-effect=#f3f4f6)
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f

#### Default → **Focused**  · applies to 2 group(s): Checked=True, Indeterminate=False, Size=x Small, Style=Neutral; Checked=True, Indeterminate=True, Size=x Small, Style=Neutral
- _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- + Focus Ring (24×24 · stroke=Border/border-black=#161616 · sw=2)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand**
- `_CheckboxBase1`: 24×24 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

**Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Neutral**
- `_CheckboxBase1`: 24×24 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

**Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Brand**
- `_CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

**Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Neutral**
- `_CheckboxBase1`: 20×20 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

**Checked=True, Indeterminate=False, State=Default, Size=Medium, Style=Brand**
- `_CheckboxBase1`: 24×24 · r=2 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_CheckboxBase1 › checkmark`: 24×24
- `_CheckboxBase1 › checkmark › Icon`: 12×9 · fill=Icon/icon-oncolor=#ffffff

**Checked=True, Indeterminate=False, State=Default, Size=Medium, Style=Neutral**
- `_CheckboxBase1`: 24×24 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_CheckboxBase1 › checkmark`: 24×24
- `_CheckboxBase1 › checkmark › Icon`: 12×9 · fill=Icon/icon-oncolor=#ffffff

**Checked=True, Indeterminate=False, State=Default, Size=Small, Style=Brand**
- `_CheckboxBase1`: 20×20 · r=2 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_CheckboxBase1 › checkmark`: 20×20
- `_CheckboxBase1 › checkmark › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff

**Checked=True, Indeterminate=False, State=Default, Size=Small, Style=Neutral**
- `_CheckboxBase1`: 20×20 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_CheckboxBase1 › checkmark`: 20×20
- `_CheckboxBase1 › checkmark › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand ⟶ Checkbox/False/False/Hovered/Medium/Brand | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Neutral ⟶ Checkbox/False/False/Hovered/Medium/Neutral | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Brand ⟶ Checkbox/False/False/Hovered/Small/Brand | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Neutral ⟶ Checkbox/False/False/Hovered/Small/Neutral | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Brand ⟶ Checkbox/False/False/Hovered/x Small/Brand | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Neutral ⟶ Checkbox/False/False/Hovered/x Small/Neutral | **INSTANT** | 1 |

---
## _CheckboxBase1

### Properties

| Property | Type / options |
|---|---|
| Status | VARIANT: Unchecked · Checked · Indeterminate |

### Anatomy (first variant: `Status=Unchecked`)

- `Status=Unchecked` [COMP] — 16×16 · r=2 · stroke=Colors/Base/black=#000000 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Status=Unchecked | 16×16 |  ·  ·  | 2 |  | Colors/Base/black=#000000 1 |  |
| Status=Checked (+1 more) | 16×16 |  ·  ·  | 2 | Background/background-black=#161616 |   |  |

### State changes (axis `Status`; each state compared with the Default/first state of the same variant group)

States: Unchecked · Checked · Indeterminate

#### Unchecked → **Checked**  · applies to 1 group(s): 
- (root): fill: — → Background/background-black=#161616; stroke: Colors/Base/black=#000000 → —; sw: 1 → —
- + checkmark (16×16)
- + checkmark › Icon (8×6 · fill=Icon/icon-oncolor=#ffffff)

#### Unchecked → **Indeterminate**  · applies to 1 group(s): 
- (root): fill: — → Background/background-black=#161616; stroke: Colors/Base/black=#000000 → —; sw: 1 → —
- + Indeterminate mark (16×16)
- + Indeterminate mark › Icon (8×2 · fill=Icon/icon-oncolor=#ffffff)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Status=Unchecked**

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Checkbox Label

### Properties

| Property | Type / options |
|---|---|
| Helper Text | BOOLEAN=true |
| Alert message | BOOLEAN=true |
| Label EN | TEXT=Checkbox Label |
| Helper Text EN | TEXT=When a selection needs a furth |
| Alert Message EN | TEXT=Error/Warning message |
| Label AR | TEXT=عنوان اختيار متعدد |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Alert Message AR | TEXT=رسالة خطأ أو تحذير |
| Hitbox focus ring | BOOLEAN=false |
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 382×96 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Focus Ring` [RECT] *(hidden)* — 390×104 · r=4 · stroke=Colors/Base/black=#000000 · sw=2 · sa=INSIDE · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Switch & Label` [FRAM] — 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
    - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand** — 24×24
      - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 24×24 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
    - `Text wrapper` [FRAM] — 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Switch Label` [TEXT] — 342×24 · fill=Text/text-primary=#0d121c · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Checkbox Label"
  - `Helper Text` [FRAM] — 382×48 · lay=V/MIN/MIN · pad=4 0 4 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-xs, paddingBottom:Global/spacing-xs}
    - `Text wrapper` [FRAM] — 342×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `When a selection needs a further detailed explanation, it goes here.` [TEXT] — 342×40 · fill=Text/text-tertiary=#4d5761 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
  - `Alert message` [FRAM] — 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Spacer` [FRAM] — 24×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Icon only, Size=24, Ring=No** — 24×24
        - `alert-circle` [INST] ⟶ instance of **alert-circle** — 24×24
          - `Icon` [VECT] — 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
    - `Text wrapper` [FRAM] — 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Error/Warning message` [TEXT] — 342×20 · fill=Text/text-error-primary=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 382×96 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Switch & Label`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16
- `Switch & Label › Checkbox`: 24×24
- `Switch & Label › Checkbox › _CheckboxBase1`: 24×24 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Switch & Label › Text wrapper`: 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Switch & Label › Text wrapper › Switch Label`: 342×24 · fill=Text/text-primary=#0d121c · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Checkbox Label"
- `Helper Text`: 382×48 · lay=V/MIN/MIN · pad=4 0 4 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Helper Text › Text wrapper`: 342×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 342×40 · fill=Text/text-tertiary=#4d5761 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
- `Alert message`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Alert message › Spacer`: 24×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Spacer › Feedback Icon`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
- `Alert message › Text wrapper`: 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Alert message › Text wrapper › Error/Warning message`: 342×20 · fill=Text/text-error-primary=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox/False/False/Hovered/Medium/Brand | **INSTANT** | 2 |

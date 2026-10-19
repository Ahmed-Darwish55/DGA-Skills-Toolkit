# Switch — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5403:403539`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5403-403539

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Switch

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

> Resources

## Component sets on this page (2)

- **Switch** — 12 variants · `5403:403565`
- **Switch Label** — 4 variants · `5422:406913`

---
## Switch

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Pressed · Disabled |
| On | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, On=False`)

- `RTL=False, State=Default, On=False` [COMP] — 52×32
  - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Thumb` [BOOL] — 28×28 · fill=Controls/control-neutral-checked=#0d121c
    - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, On=False (+5 more) | 52×32 |  ·  ·  |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Disabled

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- + Focus Ring (60×40 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Global/background-disabled=#e5e7eb
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Global/background-disabled=#e5e7eb

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631
- Thumb: fill: Icon/icon-oncolor=#ffffff → Background/surface-oncolor=#ffffff
- + Focus Ring (60×40 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled-primary=#b8eacb
- Thumb: fill: Icon/icon-oncolor=#ffffff → Background/surface-oncolor=#ffffff; fx: DROP_SHADOW(#1018280f 0,1 b2);DROP_SHADOW(#1018281a 0,1 b3) → —

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, On=False**
- `Track`: 52×32 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Thumb`: 28×28 · fill=Controls/control-neutral-checked=#0d121c
- `Thumb › Thumb`: 28×28 · fill=neutral/white=#ffffff

**RTL=False, State=Default, On=True**
- `Track`: 52×32 · r=9999 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Thumb`: 28×28 · fill=Icon/icon-oncolor=#ffffff · fx=DROP_SHADOW(#1018280f 0,1 b2);DROP_SHADOW(#1018281a 0,1 b3)
- `Thumb › Thumb`: 28×28 · fill=Background/surface-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_CLICK | CHANGE_TO | State: Pressed→Default, On: False→True | **SMART_ANIMATE 200ms EASE_IN_AND_OUT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, On: True→False | **SMART_ANIMATE 200ms EASE_IN_AND_OUT** | 2 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, On=False ⟶ Switch/False/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, On=True ⟶ Switch/False/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, On=True ⟶ Switch/True/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, On=False ⟶ Switch/True/Hovered/False | **INSTANT** | 1 |

---
## Switch Label

### Properties

| Property | Type / options |
|---|---|
| Helper Text | BOOLEAN=true |
| Alert message | BOOLEAN=true |
| Label EN | TEXT=Switch Label |
| Helper Text EN | TEXT=When a selection needs a furth |
| Alert Message EN | TEXT=Error/Warning message |
| Label AR | TEXT=عنوان المفتاح |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Alert Message AR | TEXT=رسالة خطأ أو تحذير |
| RTL | VARIANT: True · False |
| Trail switch | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Trail switch=False`)

- `RTL=False, Trail switch=False` [COMP] — 382×104 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Switch & Label` [FRAM] — 382×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
    - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 52×32
      - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Thumb` [BOOL] — 28×28 · fill=Controls/control-neutral-checked=#0d121c
        - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff
    - `Text wrapper` [FRAM] — 314×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Switch Label` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label"
  - `Helper Text` [FRAM] — 382×48 · lay=V/MIN/MIN · pad=4 0 4 64 · gap=8 · tokens{paddingLeft:Control/control-switch-description-padding, paddingTop:Control/control-vertical-gap, paddingBottom:Control/control-vertical-gap}
    - `Text wrapper` [FRAM] — 318×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `When a selection needs a further detailed explanation, it goes here.` [TEXT] — 318×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
  - `Alert message` [FRAM] — 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-radio-error-icon-gap}
    - `Spacer` [FRAM] — 48×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Icon only, Size=24, Ring=No** — 24×24
        - `alert-circle` [INST] ⟶ instance of **alert-circle** — 24×24
          - `Icon` [VECT] — 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
    - `Text wrapper` [FRAM] — 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Error/Warning message` [TEXT] — 318×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Trail switch=False (+1 more) | 382×104 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Trail switch=False**
- `Switch & Label`: 382×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Switch & Label › Switch`: 52×32
- `Switch & Label › Switch › Track`: 52×32 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Switch & Label › Switch › Thumb`: 28×28 · fill=Controls/control-neutral-checked=#0d121c
- `Switch & Label › Switch › Thumb › Thumb`: 28×28 · fill=neutral/white=#ffffff
- `Switch & Label › Text wrapper`: 314×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Switch & Label › Text wrapper › Switch Label`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label"
- `Helper Text`: 382×48 · lay=V/MIN/MIN · pad=4 0 4 64 · gap=8 · tokens{paddingLeft:Control/control-switch-description-padding, paddingTop:Control/control-vertical-gap, paddingBottom:Control/control-vertical-gap}
- `Helper Text › Text wrapper`: 318×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 318×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
- `Alert message`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-radio-error-icon-gap}
- `Alert message › Spacer`: 48×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Spacer › Feedback Icon`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
- `Alert message › Text wrapper`: 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Alert message › Text wrapper › Error/Warning message`: 318×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

**RTL=False, Trail switch=True**
- `Switch & Label`: 382×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Switch & Label › Text wrapper`: 314×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Switch & Label › Text wrapper › Switch Label`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label"
- `Switch & Label › Switch`: 52×32
- `Switch & Label › Switch › Track`: 52×32 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Switch & Label › Switch › Thumb`: 28×28 · fill=Controls/control-neutral-checked=#0d121c
- `Switch & Label › Switch › Thumb › Thumb`: 28×28 · fill=neutral/white=#ffffff
- `Helper Text`: 382×48 · lay=V/MIN/MIN · pad=4 48 4 0 · gap=8 · tokens{paddingTop:Control/control-vertical-gap, paddingRight:Control/control-radio-description-padding, paddingBottom:Control/control-vertical-gap}
- `Helper Text › Text wrapper`: 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 334×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth"
- `Alert message`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-radio-error-icon-gap}
- `Alert message › Spacer`: 24×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Spacer › Feedback Icon`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle`: 24×24
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 20×20 · stroke=Icon/icon-error=#b42318 · sw=2 · sa=CENTER
- `Alert message › Text wrapper`: 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Alert message › Text wrapper › Error/Warning message`: 342×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/False/Hovered/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/True/Hovered/False | **INSTANT** | 2 |

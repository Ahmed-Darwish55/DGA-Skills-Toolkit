# Radio — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `22542:145`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 22542-145

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Radio

> Radio groups let people select a single item from a short list. Use radio group in layouts that offer enough space to list up to five options, or if it’s important to view all options at once. If there isn’t enough space, try a dropdown or a select instead. If you need to let people select more than one option, try a checkbox. To let them immediately turn a setting on or off, try a switch.

> Resources

## Component sets on this page (3)

- **_RadioBase** — 2 variants · `30195:23381`
- **Radio** — 24 variants · `30195:23385`
- **Radio Label** — 2 variants · `30195:23490`

---
## _RadioBase

**Description (component description field):**

> A radio button base.

### Properties

| Property | Type / options |
|---|---|
| Selected | VARIANT: True · False |

### Anatomy (first variant: `Selected=False`)

- `Selected=False` [COMP] — 16×16 · r=9999 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=False (+1 more) | 16×16 |  ·  ·  | 9999 |  | Border/border-black=#161616 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=False**

**Selected=True**
- `Inner Circle`: 10×10 · fill=Background/background-black=#161616

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Radio

**Description (component description field):**

> A Radio Button allows users to select a single option from a group, supporting different states for interaction.

### Properties

| Property | Type / options |
|---|---|
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Style | VARIANT: Primary · Neutral |
| Selected | VARIANT: False · True |

### Anatomy (first variant: `State=Default, Style=Neutral, Selected=False`)

- `State=Default, Style=Neutral, Selected=False` [COMP] — 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `Radio & Label` [FRAM] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Radio elements` [FRAM] — 32×32
      - `_RadioBase` [INST] ⟶ instance of **_RadioBase / Selected=False** — 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, Style=Neutral, Selected=False (+19 more) | 32×32 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| State=Focused, Style=Neutral, Selected=False (+3 more) | 32×32 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 2 group(s): Style=Neutral, Selected=False; Style=Primary, Selected=False
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: fill: — → Controls/control-ripple-effect=#f3f4f6

#### Default → **Pressed**  · applies to 2 group(s): Style=Neutral, Selected=False; Style=Primary, Selected=False
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: fill: — → Controls/control-pressed=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): Style=Neutral, Selected=False; Style=Primary, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Read-only**  · applies to 2 group(s): Style=Neutral, Selected=False; Style=Primary, Selected=False
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): Style=Neutral, Selected=False; Style=Primary, Selected=False
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): Style=Neutral, Selected=True
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-hovered=#4d5761
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-hovered=#4d5761

#### Default → **Pressed**  · applies to 1 group(s): Style=Neutral, Selected=True
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f

#### Default → **Focused**  · applies to 1 group(s): Style=Neutral, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c

#### Default → **Read-only**  · applies to 1 group(s): Style=Neutral, Selected=True
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Global/control-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): Style=Neutral, Selected=True
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-neutral-checked=#0d121c → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-neutral-checked=#0d121c → Global/control-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): Style=Primary, Selected=True
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Controls/control-primary-hovered=#14573a
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-hovered=#14573a

#### Default → **Pressed**  · applies to 1 group(s): Style=Primary, Selected=True
- + Radio & Label › Radio elements › Interaction Circle (48×48 · fill=Controls/control-ripple-effect=#f3f4f6)
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631

#### Default → **Focused**  · applies to 1 group(s): Style=Primary, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354

#### Default → **Read-only**  · applies to 1 group(s): Style=Primary, Selected=True
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): Style=Primary, Selected=True
- Radio & Label › Radio elements › _RadioBase: stroke: Controls/control-primary-checked=#1b8354 → Global/border-disabled=#9da4ae
- Radio & Label › Radio elements › _RadioBase › Inner Circle: fill: Controls/control-primary-checked=#1b8354 → Global/control-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, Style=Neutral, Selected=False**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**State=Default, Style=Primary, Selected=False**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}

**State=Default, Style=Neutral, Selected=True**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Radio & Label › Radio elements › _RadioBase › Inner Circle`: 15×15 · fill=Controls/control-neutral-checked=#0d121c

**State=Default, Style=Primary, Selected=True**
- `Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Radio & Label › Radio elements`: 32×32
- `Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-primary-checked=#1b8354 · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Radio & Label › Radio elements › _RadioBase › Inner Circle`: 15×15 · fill=Controls/control-primary-checked=#1b8354

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 4 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: False→True | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: True→False | **INSTANT** | 2 |

---
## Radio Label

**Description (component description field):**

> A radio button lets users choose one option from a group of options. When they pick one, any previously selected option is deselected. This way, users can only select one option at a time.
>  
> Radio buttons are commonly used in forms and surveys when users need to pick just one choice from a list.

### Properties

| Property | Type / options |
|---|---|
| Helper Text | BOOLEAN=true |
| Alert Message | BOOLEAN=true |
| Label EN | TEXT=Radio Label |
| Helper Text EN | TEXT=When a selection needs a furth |
| Alert Message EN | TEXT=Error/Warning message |
| Label AR | TEXT=عنوان اختيار مفرد  |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Alert Message AR | TEXT=رسالة خطأ أو تحذير |
| Hitbox Focus Ring | BOOLEAN=false |
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 382×108 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Focus Ring` [RECT] *(hidden)* — 390×116 · r=4 · stroke=Border/border-black=#161616 · sw=2 · sa=INSIDE · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Switch & Label` [FRAM] — 382×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Radio` [INST] ⟶ instance of **Radio / State=Default, Style=Primary, Selected=False** — 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Radio & Label` [FRAM] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
        - `Radio elements` [FRAM] — 32×32
          - `_RadioBase` [INST] ⟶ instance of **_RadioBase / Selected=False** — 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
    - `Text wrapper` [FRAM] — 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Switch Label` [TEXT] — 342×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Radio Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Helper Text` [FRAM] — 382×44 · lay=V/MIN/MIN · pad=4 0 0 48 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Control/control-radio-description-padding, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Text wrapper` [FRAM] — 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `When a selection needs a further detailed explanation, it goes here.` [TEXT] — 334×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Alert message` [FRAM] — 382×32 · lay=H/MIN/MIN · pad=4 0 4 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap, paddingLeft:Global/spacing-none, paddingTop:Control/control-vertical-gap, paddingRight:Global/spacing-none, paddingBottom:Control/control-vertical-gap}
    - `Spacer` [FRAM] — 16×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Icon only, Size=16, Ring=No** — 16×16
        - `alert-circle` [INST] ⟶ instance of **alert-circle** — 16×16
          - `Icon` [VECT] — 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 350×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Error/Warning message` [TEXT] — 350×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 382×108 | V/MIN/MIN · 0 0 0 0 · 0 | 4 |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Switch & Label`: 382×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Switch & Label › Radio`: 32×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Switch & Label › Radio › Radio & Label`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Switch & Label › Radio › Radio & Label › Radio elements`: 32×32
- `Switch & Label › Radio › Radio & Label › Radio elements › _RadioBase`: 24×24 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Switch & Label › Text wrapper`: 342×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Switch & Label › Text wrapper › Switch Label`: 342×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Radio Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Helper Text`: 382×44 · lay=V/MIN/MIN · pad=4 0 0 48 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Control/control-radio-description-padding, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper Text › Text wrapper`: 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 334×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Alert message`: 382×32 · lay=H/MIN/MIN · pad=4 0 4 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap, paddingLeft:Global/spacing-none, paddingTop:Control/control-vertical-gap, paddingRight:Global/spacing-none, paddingBottom:Control/control-vertical-gap}
- `Alert message › Spacer`: 16×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Spacer › Feedback Icon`: 16×16
- `Alert message › Spacer › Feedback Icon › alert-circle`: 16×16
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
- `Alert message › Text wrapper`: 350×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Alert message › Text wrapper › Error/Warning message`: 350×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Radio ⟶ Radio :: State=Hovered, Style=Primary, Selected=False | **INSTANT** | 2 |

# Switch — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5403:403539`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5403-403539

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Switch

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

> Resources

## Component sets on this page (2)

- **Switch** — 20 variants · `30150:69895`
- **Switch Label** — 4 variants · `30150:69998`

---
## Switch

**Description (component description field):**

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| On | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, On=False`)

- `RTL=False, State=Default, On=False` [COMP] — 48×24
  - `Track` [RECT] — 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
  - `Thumb` [BOOL] — 16×16 · fill=Controls/control-neutral-checked=#0d121c
    - `Thumb` [ELLI] — 16×16 · fill=neutral/white=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, On=False (+9 more) | 48×24 |  ·  ·  |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-hovered=#4d5761
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-hovered=#4d5761
- + Focus Ring (56×32 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-pressed=#6c737f
- + Focus Ring (56×32 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-neutral-focused=#0d121c
- + Focus Ring (56×32 · stroke=Controls/control-neutral-focused=#0d121c · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On=False
- Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/Control-boarder-disabled=#9da4ae
- Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-disabled=#d2d6db

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-hovered=#14573a
- Thumb: fill: Background/surface-oncolor=#ffffff → Controls/Control-icon-hovered=#ffffff
- Thumb › Thumb: fill: neutral/white=#ffffff → Controls/Control-icon-hovered=#ffffff
- + Focus Ring (56×32 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-pressed=#104631
- Thumb: fill: Background/surface-oncolor=#ffffff → Controls/Control-icon-pressed=#ffffff
- Thumb › Thumb: fill: neutral/white=#ffffff → Controls/Control-icon-pressed=#ffffff
- + Focus Ring (56×32 · stroke=Controls/control-ripple-effect=#f3f4f6 · sw=4)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Controls/control-primary-focused=#1b8354
- + Focus Ring (56×32 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On=True
- Track: fill: Controls/control-primary-checked=#1b8354 → Global/control-disabled=#d2d6db
- Thumb: fill: Background/surface-oncolor=#ffffff → Controls/Control-icon-disabled=#ffffff; fx: DROP_SHADOW(#1018280d 0,1 b2);DROP_SHADOW(#1018280d 0,1 b3) → —

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, On=False**
- `Track`: 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Thumb`: 16×16 · fill=Controls/control-neutral-checked=#0d121c
- `Thumb › Thumb`: 16×16 · fill=neutral/white=#ffffff

**RTL=False, State=Default, On=True**
- `Track`: 48×24 · r=9999 · fill=Controls/control-primary-checked=#1b8354 · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Thumb`: 16×16 · fill=Background/surface-oncolor=#ffffff · fx=DROP_SHADOW(#1018280d 0,1 b2);DROP_SHADOW(#1018280d 0,1 b3)
- `Thumb › Thumb`: 16×16 · fill=neutral/white=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 4 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, On: False→True | **SMART_ANIMATE 200ms EASE_IN_AND_OUT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, On: True→False | **SMART_ANIMATE 200ms EASE_IN_AND_OUT** | 2 |

---
## Switch Label

**Description (component description field):**

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

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

- `RTL=False, Trail switch=False` [COMP] — 382×96 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Control/control-vertical-gap}
  - `Switch & Label` [FRAM] — 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
    - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 48×24
      - `Track` [RECT] — 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
      - `Thumb` [BOOL] — 16×16 · fill=Controls/control-neutral-checked=#0d121c
        - `Thumb` [ELLI] — 16×16 · fill=neutral/white=#ffffff
    - `Text wrapper` [FRAM] — 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
      - `Switch Label` [TEXT] — 318×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Helper Text` [FRAM] — 382×40 · lay=V/MIN/MIN · pad=0 0 0 64 · gap=0 · tokens{paddingLeft:Control/control-switch-description-padding}
    - `Text wrapper` [FRAM] — 318×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
      - `When a selection needs a further detailed explanation, it goes here.` [TEXT] — 318×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Alert message` [FRAM] — 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
    - `Spacer` [FRAM] — 48×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Icon only, Size=16, Ring=No** — 16×16
        - `alert-circle` [INST] ⟶ instance of **alert-circle** — 16×16
          - `Icon` [VECT] — 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
      - `Error/Warning message` [TEXT] — 318×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Trail switch=False (+1 more) | 382×96 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Trail switch=False**
- `Switch & Label`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Switch & Label › Switch`: 48×24
- `Switch & Label › Switch › Track`: 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Switch & Label › Switch › Thumb`: 16×16 · fill=Controls/control-neutral-checked=#0d121c
- `Switch & Label › Switch › Thumb › Thumb`: 16×16 · fill=neutral/white=#ffffff
- `Switch & Label › Text wrapper`: 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Switch & Label › Text wrapper › Switch Label`: 318×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Helper Text`: 382×40 · lay=V/MIN/MIN · pad=0 0 0 64 · gap=0 · tokens{paddingLeft:Control/control-switch-description-padding}
- `Helper Text › Text wrapper`: 318×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 318×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Alert message`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Alert message › Spacer`: 48×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Spacer › Feedback Icon`: 16×16
- `Alert message › Spacer › Feedback Icon › alert-circle`: 16×16
- `Alert message › Spacer › Feedback Icon › alert-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
- `Alert message › Text wrapper`: 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Text wrapper › Error/Warning message`: 318×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Trail switch=True**
- `Switch & Label`: 382×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Control/control-title-error-gap}
- `Switch & Label › Text wrapper`: 318×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Switch & Label › Text wrapper › Switch Label`: 318×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Switch Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Switch & Label › Switch`: 48×24
- `Switch & Label › Switch › Track`: 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Switch & Label › Switch › Thumb`: 16×16 · fill=Controls/control-neutral-checked=#0d121c
- `Switch & Label › Switch › Thumb › Thumb`: 16×16 · fill=neutral/white=#ffffff
- `Helper Text`: 382×40 · lay=V/MIN/MIN · pad=0 48 0 0 · gap=0 · tokens{paddingRight:spacing-6xl}
- `Helper Text › Text wrapper`: 334×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Helper Text › Text wrapper › When a selection needs a further detailed explanation, it goes here.`: 334×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a selection needs a furth" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Alert message`: 382×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
- `Alert message › Feedback Icon`: 16×16
- `Alert message › Feedback Icon › alert-circle`: 16×16
- `Alert message › Feedback Icon › alert-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
- `Alert message › Text wrapper`: 358×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Alert message › Text wrapper › Error/Warning message`: 358×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Error/Warning message" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | **INSTANT** | 2 |

# Content switcher — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `8414:146242`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 8414-146242

## Official description & usage (verbatim from the page)

> عنصر

> www.design.dga.gov.sa

> Content switcher

> Content switcher allows users to toggle between different content sections within the same space on the screen.

> Resources

## Component sets on this page (2)

- **_Content Switcher Item** — 36 variants · `8417:149954`
- **Content Switcher** — 4 variants · `8418:155970`

---
## _Content Switcher Item

### Properties

| Property | Type / options |
|---|---|
| Text En | TEXT=Item |
| Text AR | TEXT=عنصر |
| RTL | VARIANT: False · True |
| Item Type | VARIANT: Last · Mid · First |
| State | VARIANT: Normal · Pressed · Selected |
| OnColor | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Item Type=First, State=Normal, OnColor=False`)

- `RTL=False, Item Type=First, State=Normal, OnColor=False` [COMP] — 59×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=8 0 0 8 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
  - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Item Type=First, State=Normal, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Pressed, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Pressed, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=First, State=Selected, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Pressed, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Pressed, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 |  | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Pressed, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Pressed, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=False | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=True | 59×32 | H/CENTER/CENTER · 4 12 4 12 · 12 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Normal · Pressed · Selected

#### Normal → **Pressed**  · applies to 3 group(s): RTL=False, Item Type=First, OnColor=False; RTL=False, Item Type=Mid, OnColor=False; RTL=False, Item Type=Last, OnColor=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb
- Item: fill: Text/text-default=#161616 → Text/text-primary=#0d121c

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0.5 0 0 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Pressed**  · applies to 3 group(s): RTL=False, Item Type=First, OnColor=True; RTL=False, Item Type=Mid, OnColor=True; RTL=False, Item Type=Last, OnColor=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → —; sw: 0 0.5 0 0 → —

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0.5 0 0.5 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → —; sw: 0 0.5 0 0.5 → —

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0 0 0.5 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → —; sw: 0 0 0 0.5 → —

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Item Type=First, State=Normal, OnColor=False**
- `Item`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, Item Type=First, State=Normal, OnColor=True**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, Item Type=Mid, State=Normal, OnColor=False**
- `Item`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, Item Type=Mid, State=Normal, OnColor=True**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, Item Type=Last, State=Normal, OnColor=False**
- `Item`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, Item Type=Last, State=Normal, OnColor=True**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Normal→Pressed | **SMART_ANIMATE 300ms EASE_OUT** | 12 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **SMART_ANIMATE 300ms EASE_OUT** | 12 |

---
## Content Switcher

### Properties

| Property | Type / options |
|---|---|
| 3rd Item | BOOLEAN=true |
| 2nd item | BOOLEAN=true |
| RTL | VARIANT: True · False |
| OnColor | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, OnColor=False`)

- `RTL=False, OnColor=False` [COMP] — 304×32 · lay=H/SPACE_BETWEEN/MIN · pad=0 0 0 0 · gap=0
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=First, State=Selected, OnColor=False** — 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
    - `Item` [TEXT] — 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Mid, State=Normal, OnColor=False** — 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Mid, State=Normal, OnColor=False** — 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Last, State=Normal, OnColor=False** — 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, OnColor=False (+1 more) | 304×32 | H/SPACE_BETWEEN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, OnColor=False**
- `_Content Switcher Item`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#2`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#3`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#4`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

**RTL=False, OnColor=True**
- `_Content Switcher Item`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=8 0 0 8 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#2`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#3`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"
- `_Content Switcher Item#4`: 76×32 · lay=H/CENTER/CENTER · pad=4 12 4 12 · gap=12 · r=0 8 8 0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0 0 0.5 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Pressed, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Pressed, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Pressed, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Pressed, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Pressed, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Pressed, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Pressed, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Pressed, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 1 |

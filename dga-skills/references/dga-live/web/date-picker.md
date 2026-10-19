# Date Picker — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5822:2`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5822-2

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Date Picker

> A Date Picker is a UI component that enables users to select dates via a pop-up or dropdown calendar. This tool is often triggered by clicking a calendar icon or input field. It is widely used in forms and applications for tasks like scheduling events, booking appointments, or entering birthdates.

> Resources

## Component sets on this page (4)

- **Date cell** — 41 variants · `30150:10275`
- **Date Picker** — 6 variants · `30150:10582`
- **_Date field** — 144 variants · `30150:11261`
- **_Year Dropdown** — 4 variants · `30150:12966`

---
## Date cell

**Description (component description field):**

> Depending on the state, the circular indicator highlights the date cell.

### Properties

| Property | Type / options |
|---|---|
| Range-left | BOOLEAN=false |
| Range-right | BOOLEAN=false |
| Extra-left | BOOLEAN=false |
| Extra-right | BOOLEAN=false |
| Mid-Range | BOOLEAN=false |
| Date | TEXT=21 |
| Secondary Date | TEXT=1/9 |
| 2ndry Date | BOOLEAN=false |
| Selected | VARIANT: False · True |
| Today | VARIANT: False · True |
| Nex/Prev | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Null | VARIANT: False · True |

### Anatomy (first variant: `Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False`)

- `Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False` [COMP] — 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
  - `Range Highlight` [FRAM] *(hidden)* — 48×48
    - `Range highlight left` [RECT] *(hidden)* — 48×48 · fill=Form/datecell-background-100=#dff6e7
    - `Range highlight middle` [RECT] — 56×48 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
    - `Range highlight right` [RECT] *(hidden)* — 48×48 · fill=Form/datecell-background-100=#dff6e7
  - `state-layer` [FRAM] — 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-today-background-default=#ffffff@0 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Date` [TEXT] — 20×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Secondary Date` [TEXT] *(hidden)* — 19×18 · fill=Text 2/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="1/9" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False (+40 more) | 56×56 | H/CENTER/CENTER · 0 0 0 0 · 0 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → Form/datecell-today-background-hovered=#e5e7eb

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → Form/datecell-today-background-pressed=#d2d6db

#### Default → **Focused**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → Form/datecell-today-background-focused=#ffffff@0
- + state-layer › Focus ring (56×56 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → —
- state-layer › Date: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: — → Form/datecell-background-100=#dff6e7; stroke: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354
- state-layer › Date: fill: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: — → Form/datecell-background-200=#b8eacb; stroke: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354
- state-layer › Date: fill: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354

#### Default → **Focused**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False
- state-layer: stroke: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354
- state-layer › Date: fill: Button/button-background-primary-default=#1b8354 → Form/datecell-background-600=#1b8354
- + state-layer › Focus ring (56×56 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False
- state-layer: stroke: Button/button-background-primary-default=#1b8354 → Global/border-disabled=#9da4ae
- state-layer › Date: fill: Button/button-background-primary-default=#1b8354 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-hovered=#166a45
- − Range Highlight (hidden/removed)

#### Default → **Pressed**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-pressed=#104631
- − Range Highlight (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-focused=#1b8354
- + state-layer › Focus ring (56×56 · stroke=Border/border-black=#161616 · sw=2)
- − Range Highlight (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Global/background-disabled-primary=#b8eacb
- − Range Highlight (hidden/removed)

#### Default → **Hovered**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-hovered=#166a45
- state-layer › Today-outline: stroke: Form/datecell-background-default=#1b8354 → Form/datecell-background-hovered=#166a45

#### Default → **Pressed**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-pressed=#104631
- state-layer › Today-outline: stroke: Form/datecell-background-default=#1b8354 → Form/datecell-background-pressed=#104631

#### Default → **Focused**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-focused=#1b8354
- + state-layer › Focus ring (56×56 · stroke=Border/border-black=#161616 · sw=2)
- state-layer › Today-outline: stroke: Form/datecell-background-default=#1b8354 → Form/datecell-background-focused=#1b8354

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Global/background-disabled-primary=#b8eacb
- state-layer › Today-outline: stroke: Form/datecell-background-default=#1b8354 → Global/background-disabled-primary=#b8eacb

#### Default → **Hovered**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False
- state-layer: fill: — → Form/option-background-hover=#f3f4f6

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False
- state-layer: fill: — → Form/option-background-pressed=#e5e7eb

#### Default → **Focused**  · applies to 4 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False; Selected=False, Today=True, Nex/Prev=True, Null=False; Selected=True, Today=False, Nex/Prev=True, Null=False; Selected=True, Today=True, Nex/Prev=True, Null=False
- + state-layer › Focus ring (56×56 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False
- state-layer › Date: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=True, Null=False
- state-layer: fill: — → Form/datecell-background-100=#dff6e7

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=True, Null=False
- state-layer: fill: — → Form/datecell-background-200=#b8eacb

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=True, Null=False
- state-layer: stroke: Form/datecell-background-600=#1b8354 → Global/border-disabled=#9da4ae
- state-layer › Date: fill: Form/datecell-background-600=#1b8354 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 2 group(s): Selected=True, Today=False, Nex/Prev=True, Null=False; Selected=True, Today=True, Nex/Prev=True, Null=False
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 2 group(s): Selected=True, Today=False, Nex/Prev=True, Null=False; Selected=True, Today=True, Nex/Prev=True, Null=False
- *(no visual difference captured at root/child level)*

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=True, Null=False
- state-layer: fill: Form/datecell-background-300=#88d8ad → Global/background-disabled-primary=#b8eacb
- state-layer › Date: fill: Text/text-primary-sa-flag=#14573a → Text/text-oncolor-primary=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=True, Null=False
- state-layer: fill: Form/datecell-background-300=#88d8ad → Global/background-disabled-primary=#b8eacb
- state-layer › Date: fill: Text/text-primary-sa-flag=#14573a → Text/text-oncolor-primary=#ffffff
- state-layer › Today-outline: stroke: Form/datecell-background-300=#88d8ad → Global/background-disabled-primary=#b8eacb

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-today-background-default=#ffffff@0 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=False, Today=True, Nex/Prev=False, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · stroke=Button/button-background-primary-default=#1b8354 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Button/button-background-primary-default=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=True, Today=False, Nex/Prev=False, State=Default, Null=False**
- `Range Highlight`: 48×48
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=True, Today=True, Nex/Prev=False, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `state-layer › Today-outline`: 53×53 · r=9999 · stroke=Form/datecell-background-default=#1b8354 · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**Selected=False, Today=False, Nex/Prev=True, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=False, Today=True, Nex/Prev=True, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · stroke=Form/datecell-background-600=#1b8354 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Form/datecell-background-600=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=True, Today=False, Nex/Prev=True, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-300=#88d8ad · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-primary-sa-flag=#14573a · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Selected=True, Today=True, Nex/Prev=True, State=Default, Null=False**
- `state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-300=#88d8ad · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-primary-sa-flag=#14573a · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `state-layer › Today-outline`: 53×53 · r=9999 · stroke=Form/datecell-background-300=#88d8ad · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 4 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |

---
## Date Picker

**Description (component description field):**

> A Date Picker is a UI component that enables users to select dates via a pop-up or dropdown calendar. This tool is often triggered by clicking a calendar icon or input field. It is widely used in forms and applications for tasks like scheduling events, booking appointments, or entering birthdates.

### Properties

| Property | Type / options |
|---|---|
| Quick options | BOOLEAN=false |
| Submit button | BOOLEAN=false |
| Dual-month view | BOOLEAN=false |
| Input field | BOOLEAN=false |
| Show hint | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Range | VARIANT: True · False |
| Picker | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Range=False, Picker=True`)

- `RTL=False, Range=False, Picker=True` [COMP] — 424×456 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=8 · fill=Form/field-background-default=#ffffff · fx=DROP_SHADOW(#1018282e 0,24 b48 s-12) · tokens{topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
  - `Calendar & Quick options` [FRAM] — 424×456 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Quick options` [FRAM] *(hidden)* — 160×456 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=0 · tokens{paddingLeft:size/16, paddingTop:size/16, paddingRight:size/16, paddingBottom:size/16}
      - `Dropdown List - Group Label` [FRAM] — 128×28 · lay=H/MIN/MIN · pad=8 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Text` [FRAM] — 112×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Group Label` [TEXT] — 112×18 · fill=Text 2/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="QUICK OPTION" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Today" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This week" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last week" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This month" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last month" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last 3 months" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last 7 days" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last 30 days" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 128×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 112×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 112×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Last 90 days" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Calendar & Input` [FRAM] — 424×456 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:size/16, paddingRight:size/16, paddingBottom:size/16}
      - `Input` [FRAM] *(hidden)* — 392×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Date1` [INST] ⟶ instance of **Text Input / RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default** — 392×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
          - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Input Field` [FRAM] — 392×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
      - `Calendars` [FRAM] — 392×424 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32 · tokens{itemSpacing:Global/spacing-4xl}
        - `2nd Calender` [FRAM] *(hidden)* — 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
          - `Calendar` [FRAM] — 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Main Calender` [FRAM] — 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
          - `Calendar` [FRAM] — 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Actions` [FRAM] *(hidden)* — 424×72 · lay=H/MAX/CENTER · pad=16 16 16 16 · gap=8 · stroke=border/border-default=#cbd5e1 · sw=1 0 0 0 · sa=INSIDE · tokens{paddingLeft:size/16, paddingTop:size/16, paddingRight:size/16, paddingBottom:size/16}
    - `_Modal Actions` [INST] ⟶ instance of **_Modal Actions / RTL=False, Fill Container=False, Stack=False, Center Align=False** — 392×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap}
      - `Tertiary` [FRAM] *(hidden)* — 280×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Tertiary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** *(hidden)* — 92×32 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
          - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
      - `Primary + Secondary` [FRAM] — 231×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
        - `Secondary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 110×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
          - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `Primary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False** — 113×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
          - `Text wrapper` [FRAM] — 53×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Range=False, Picker=True (+1 more) | 424×456 | V/MIN/MIN · 0 0 0 0 · 0 | 8 | Form/field-background-default=#ffffff |   | DROP_SHADOW(#1018282e 0,24 b48 s-12) |
| RTL=False, Range=False, Picker=False | 413×100 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Range=False, Picker=True**
- `Calendar & Quick options`: 424×456 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input`: 424×456 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:size/16, paddingRight:size/16, paddingBottom:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars`: 392×424 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32 · tokens{itemSpacing:Global/spacing-4xl}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender`: 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar`: 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav`: 392×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6`: 312×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=0 · tokens{paddingLeft:size/16, paddingRight:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6 › January`: 60×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="January" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6 › _Year Dropdown`: 78×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4`: 80×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4 › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4 › Button#2`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days`: 392×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#2`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#2`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#3`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#3`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#4`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#4`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#5`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#5`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#6`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#6`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#7`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#7`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid`: 392×336 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none, counterAxisSpacing:Global/spacing-none}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#2`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#2`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#3`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#3`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#4`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#4`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- … 66 more layers (data JSON)

**RTL=False, Range=True, Picker=True**
- `Calendar & Quick options`: 424×456 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input`: 424×456 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:size/16, paddingRight:size/16, paddingBottom:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars`: 392×424 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32 · tokens{itemSpacing:Global/spacing-4xl}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender`: 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar`: 392×424 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav`: 392×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6`: 312×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=0 · tokens{paddingLeft:size/16, paddingRight:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6 › January`: 60×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="January " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6 › _Year Dropdown`: 78×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4`: 80×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4 › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 4 › Button#2`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days`: 392×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#2`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#2`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#3`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#3`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#4`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#4`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#5`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#5`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#6`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#6`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#7`: 56×48 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#7`: 48×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid`: 392×336 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=0 · tokens{counterAxisSpacing:Global/spacing-none}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#2`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#2`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#3`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#3`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#4`: 56×56 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#4`: 48×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- … 69 more layers (data JSON)

**RTL=False, Range=False, Picker=False**
- `Frame 11`: 413×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Frame 11 › Label`: 30×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Frame 11 › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Date" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Frame 11 › _Date field`: 413×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · tokens{itemSpacing:Form/Iable-container, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Frame 11 › _Date field › Date Field`: 413×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 11 › _Date field › Date Field › Icon-Text-stack`: 413×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Frame 11 › _Date field › Date Field › Icon-Text-stack › Text`: 381×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Frame 11 › _Date field › Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Helper text`: 323×24 · lay=H/CENTER/CENTER · pad=4 0 0 0 · gap=10 · tokens{paddingTop:spacing-xs}
- `Helper text › Date will automatically detect Hijri or Georgian date`: 323×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Date will automatically detect" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell :: Selected=False, Today=False, Nex/Prev=False, State=Hovered, Null=False | **INSTANT** | 230 |
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell :: Selected=False, Today=False, Nex/Prev=True, State=Hovered, Null=False | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 36 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | **INSTANT** | 18 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | **INSTANT** | 18 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ _Year Dropdown :: RTL=False, State=False | **SMART_ANIMATE 1250ms SLOW** | 14 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ _Year Dropdown :: RTL=True, State=False | **SMART_ANIMATE 1250ms SLOW** | 14 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ None | **SMART_ANIMATE 1250ms SLOW** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell :: Selected=False, Today=True, Nex/Prev=False, State=Hovered, Null=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Date1 ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ _Year Dropdown :: RTL=False, State=False | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_CLICK | CHANGE_TO | _Year Dropdown ⟶ _Year Dropdown :: RTL=False, State=True | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Date1 ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | _Year Dropdown ⟶ _Year Dropdown :: RTL=True, State=True | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ _Year Dropdown :: RTL=True, State=False | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Date2 ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Date2 ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=True, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=False, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 1 |

---
## _Date field

**Description (component description field):**

> Allow user to enter date using their keyboard.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| Prefix | BOOLEAN=false |
| Suffix | BOOLEAN=false |
| Text | TEXT=DD/MM/YY |
| Text AR | TEXT=يوم/شهر/سنة |
| Show Helper Text | BOOLEAN=false |
| Helper text AR | TEXT=نص مساعد |
| 🔁 Icon Swap | INSTANCE_SWAP=31864:189863 |
| Helper Text Eng | TEXT=Help Text |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Size | VARIANT: Large |
| Style | VARIANT: Default · Filled Darker · Filled Lighter |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default` [COMP] — 320×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · tokens{itemSpacing:Form/Iable-container, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Date Field` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Prefix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 74×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 42×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 42×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Prefix" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Icon-Text-stack` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
      - `Leading Icon` [INST] ⟶ instance of **calendar-04 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 17×18
          - `Icon` [VECT] — 17×18 · fill=Icon/icon-default=#161616
      - `Text` [FRAM] — 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Suffix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 63×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 41×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 41×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Suffix" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Help Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default (+59 more) | 320×40 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Large, Style=Default (+11 more) | 320×40 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- Date Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Lighter
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Lighter
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Darker …
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Darker; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Lighter
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Darker; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Thin underline (320×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Lighter
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×40)
- + Date field › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×40)
- + Date field › Contents › Icon-Text-stack › Text (288×40)
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (320×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Darker; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Lighter; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Lighter
- Date Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Darker
- Date Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled Lighter
- Date Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Filled Darker**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Filled Darker**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Filled Darker**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Filled Darker**
- `Date Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 24 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 24 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 24 |

---
## _Year Dropdown

**Description (component description field):**

> Displays the current year being viewed by the user.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |
| State | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, State=True`)

- `RTL=False, State=True` [COMP] — 78×32 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
  - `Button-menu` [INST] ⟶ instance of **Button-menu / RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False** — 78×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **folder-library / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 16×17
        - `Icon` [VECT] — 16×17 · fill=Icon/icon-default=#161616
    - `Text wrapper` [FRAM] — 34×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 34×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="2024" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 9×5
        - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90
  - `List Sections` [FRAM] — 94×274 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Section` [FRAM] *(hidden)* — 320×332 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=Colors/Neutral/200=#e5e7eb · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Group label** — 304×28 · lay=H/MIN/MIN · pad=8 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:spacing-md, paddingRight:Global/spacing-md, paddingBottom:spacing-none}
        - `Text` [FRAM] — 288×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Group label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
    - `Scroll bar` [FRAM] — 16×274 · lay=H/CENTER/MIN · pad=2 4 2 4 · gap=8 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xxs, paddingRight:spacing-xs, paddingBottom:spacing-xxs}
      - `Rectangle 6203` [RECT] — 8×100 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Section` [FRAM] — 94×274 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Group label** *(hidden)* — 304×28 · lay=H/MIN/MIN · pad=8 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:spacing-md, paddingRight:Global/spacing-md, paddingBottom:spacing-none}
        - `Text` [FRAM] — 304×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 304×21 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Group label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 62×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 62×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2023" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 78×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 34×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 34×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2024" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=True (+1 more) | 78×32 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: True · False

#### True → **False**  · applies to 1 group(s): RTL=False
- − List Sections (hidden/removed)
- − List Sections › Scroll bar (hidden/removed)
- − List Sections › Scroll bar › Rectangle 6203 (hidden/removed)
- − List Sections › Section (hidden/removed)
- − List Sections › Section › Dropdown List Item (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text (hidden/removed)
- − List Sections › Section › Dropdown List Item#2 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#2 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#2 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Check (hidden/removed)
- − List Sections › Section › Dropdown List Item › Check › elements (hidden/removed)
- − List Sections › Section › Dropdown List Item › Check › elements › Icon (hidden/removed)
- − List Sections › Section › Dropdown List Item#3 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#3 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#3 (hidden/removed)
- − List Sections › Section › Dropdown List Item#4 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#4 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#4 (hidden/removed)
- − List Sections › Section › Dropdown List Item#5 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#5 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#5 (hidden/removed)
- − List Sections › Section › Dropdown List Item#6 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#6 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#6 (hidden/removed)
- − List Sections › Section › Dropdown List Item#7 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text#7 (hidden/removed)
- − List Sections › Section › Dropdown List Item › Text › Entered Text#7 (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=True**
- `Button-menu`: 78×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button-menu › Text wrapper`: 34×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button-menu › Text wrapper › Text`: 34×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="2024" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Button-menu › arrow-down-01`: 16×16
- `Button-menu › arrow-down-01 › elements`: 9×5
- `Button-menu › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90
- `List Sections`: 94×274 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Scroll bar`: 16×274 · lay=H/CENTER/MIN · pad=2 4 2 4 · gap=8 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xxs, paddingRight:spacing-xs, paddingBottom:spacing-xxs}
- `List Sections › Scroll bar › Rectangle 6203`: 8×100 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `List Sections › Section`: 94×274 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 62×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 62×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2023" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 78×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 34×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 34×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2024" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item › Check`: 20×20
- `List Sections › Section › Dropdown List Item › Check › elements`: 13×10
- `List Sections › Section › Dropdown List Item › Check › elements › Icon`: 13×10 · fill=Icon/icon-default=#161616
- `List Sections › Section › Dropdown List Item#3`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 62×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 62×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2025" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2024" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2025" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2026" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 78×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2027" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 30 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ _Year Dropdown :: RTL=False, State=False | **SMART_ANIMATE 1250ms SLOW** | 7 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ _Year Dropdown :: RTL=True, State=False | **SMART_ANIMATE 1250ms SLOW** | 7 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Dropdown List Item ⟶ None | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_CLICK | CHANGE_TO | State: False→True | **SMART_ANIMATE 1250ms SLOW** | 2 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ _Year Dropdown :: RTL=False, State=False | **SMART_ANIMATE 1250ms SLOW** | 1 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ _Year Dropdown :: RTL=True, State=False | **SMART_ANIMATE 1250ms SLOW** | 1 |

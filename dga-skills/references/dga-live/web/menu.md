# Menu — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5822:20153`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5822-20153

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Menu

> A menu UI element shows a list of options on a temporary surface, triggered by user interactions with buttons or controls. It organizes menu items, often grouped for better structure, to enhance navigation and functionality.

> Resources

## Component sets on this page (2)

- **Menu list item** — 72 variants · `30195:21865`
- **Menu** — 2 variants · `30195:22214`

---
## Menu list item

**Description (component description field):**

> Each menu item has a trailing elements which either present data or allow user to interact with such as tags, controllers or buttons.

### Properties

| Property | Type / options |
|---|---|
| Lead Icon | BOOLEAN=true |
| 🔁 Swap Lead icon | INSTANCE_SWAP=13758:242480 |
| Show Trail Text | BOOLEAN=true |
| Label EN | TEXT=Item Label |
| Trail Text | TEXT=+99 |
| 🔁 Swap Trail Icon | INSTANCE_SWAP=13758:242505 |
| Label AR | TEXT=نص العنصر |
| RTL | VARIANT: False · True |
| Trail element | VARIANT: None · Text · Button · Tag · Switch · Icon |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled · Selected |

### Anatomy (first variant: `RTL=False, Trail element=None, State=Default`)

- `RTL=False, Trail element=None, State=Default` [COMP] — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 20×22
      - `Icon` [VECT] — 20×22 · fill=Icon/icon-default=#161616
  - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Trail element=None, State=Default (+10 more) | 225×40 | H/MIN/MIN · 8 8 8 8 · 8 | 4 |  |   |  |
| RTL=False, Trail element=Switch, State=Default | 225×50 | H/MIN/MIN · 13 13 13 13 · 8 | 4 |  |   |  |
| RTL=False, Trail element=None, State=Hovered (+5 more) | 225×40 | H/MIN/MIN · 8 8 8 8 · 8 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Trail element=None, State=Pressed (+5 more) | 225×40 | H/MIN/MIN · 8 8 8 8 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Trail element=None, State=Selected (+5 more) | 225×40 | H/MIN/MIN · 8 8 8 8 · 8 | 4 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, Trail element=None, State=Focused (+5 more) | 225×40 | H/MIN/MIN · 8 8 8 8 · 8 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled · Selected

#### Default → **Hovered**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Button …
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Button …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Button …
- (root): fill: — → Background/background-primary-50=#f3fcf6
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-primary=#1b8354
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Text/text-primary=#1b8354

#### Default → **Focused**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Button …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=None
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Text
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Trail text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Icon
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- tick-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Button
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Button › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Tag
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Tag: op: — → 0.4

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Trail element=Switch
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6; pad: 13 13 13 13 → 8 8 8 8; h: 50 → 40
- Content Wrapper: w: 111 → 121

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Trail element=Switch
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb; pad: 13 13 13 13 → 8 8 8 8; h: 50 → 40
- Content Wrapper: w: 111 → 121

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Trail element=Switch
- (root): fill: — → Background/background-primary-50=#f3fcf6; pad: 13 13 13 13 → 8 8 8 8; h: 50 → 40
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-primary=#1b8354
- Content Wrapper: w: 111 → 121
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Text/text-primary=#1b8354

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Trail element=Switch
- (root): stroke: — → Border/border-black=#161616; sw: — → 2; pad: 13 13 13 13 → 8 8 8 8; h: 50 → 40
- Content Wrapper: w: 111 → 121

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Switch
- (root): pad: 13 13 13 13 → 8 8 8 8; h: 50 → 40
- file-add › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Content Wrapper: w: 111 → 121
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Switch › Track: stroke: Controls/control-neutral-checked=#0d121c → Controls/Control-boarder-disabled=#9da4ae
- Switch › Thumb: fill: Controls/control-neutral-checked=#0d121c → Controls/control-disabled=#d2d6db

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Trail element=None, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Trail element=Text, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 140×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 140×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Trail text`: 29×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Trail element=Icon, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `tick-02`: 24×24
- `tick-02 › elements`: 16×13
- `tick-02 › elements › Icon`: 16×13 · fill=Icon/icon-default=#161616

**RTL=False, Trail element=Button, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Button`: 24×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-sm-gap, paddingLeft:Button/buttons-sm-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-sm-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 16×16
- `Button › Leading Icon › elements`: 8×12 · rot=-90
- `Button › Leading Icon › elements › Icon`: 12×8 · fill=Icon/icon-default=#161616

**RTL=False, Trail element=Tag, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Tag`: 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tag › Text`: 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Trail element=Switch, State=Default**
- `file-add`: 24×24
- `file-add › elements`: 20×22
- `file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Content Wrapper`: 111×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 111×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Switch`: 48×24
- `Switch › Track`: 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Switch › Thumb`: 16×16 · fill=Controls/control-neutral-checked=#0d121c
- `Switch › Thumb › Thumb`: 16×16 · fill=neutral/white=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 12 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 12 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **INSTANT** | 12 |
| ON_CLICK | CHANGE_TO | State: Selected→Default | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | **INSTANT** | 5 |

---
## Menu

**Description (component description field):**

> A menu UI element shows a list of options on a temporary surface, triggered by user interactions with buttons or controls. It organizes menu items, often grouped for better structure, to enhance navigation and functionality.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 241×632 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=8 · fill=Background/background-menu=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018282e 0,24 b48 s-12) · tokens{topLeftRadius:radius/8, topRightRadius:radius/8, bottomLeftRadius:radius/8, bottomRightRadius:radius/8}
  - `Section` [FRAM] — 241×174 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=12 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×26 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="GROUP LABEL" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Items Group` [FRAM] — 225×120 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Icon, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `tick-02` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 16×13
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Section` [FRAM] — 241×204 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=12 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×26 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="GROUP LABEL" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Items Group` [FRAM] — 225×150 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×50 · lay=H/MIN/MIN · pad=13 13 13 13 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 111×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 111×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 48×24
          - `Track` [RECT] — 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
          - `Thumb` [BOOL] — 16×16 · fill=Controls/control-neutral-checked=#0d121c
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×50 · lay=H/MIN/MIN · pad=13 13 13 13 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 111×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 111×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 48×24
          - `Track` [RECT] — 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
          - `Thumb` [BOOL] — 16×16 · fill=Controls/control-neutral-checked=#0d121c
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×50 · lay=H/MIN/MIN · pad=13 13 13 13 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 111×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 111×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 48×24
          - `Track` [RECT] — 48×24 · r=9999 · stroke=Controls/control-neutral-checked=#0d121c · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
          - `Thumb` [BOOL] — 16×16 · fill=Controls/control-neutral-checked=#0d121c
  - `Section` [FRAM] — 241×254 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=12 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×26 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="GROUP LABEL" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Items Group` [FRAM] — 225×200 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
          - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Success, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-success-light=#ecfdf3 · stroke=Tag/tag-border-success-light=#abefc6 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-success=#085d3a · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
          - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Info, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-info-light=#eff8ff · stroke=Tag/tag-border-info-light=#b2ddff · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-info=#1849a9 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
          - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
      - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `file-add` [INST] ⟶ instance of **file-add / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Content Wrapper` [FRAM] — 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Warning, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-warning-light=#fffaeb · stroke=Tag/tag-border-warning-light=#fedf89 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 241×632 | V/MIN/MIN · 0 0 0 0 · 0 | 8 | Background/background-menu=#ffffff | Border/border-neutral-primary=#d2d6db 1 | DROP_SHADOW(#1018282e 0,24 b48 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Section`: 241×174 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=12 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Section › Dropdown List - Group Label`: 225×26 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Dropdown List - Group Label › Text`: 201×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Dropdown List - Group Label › Text › Group Label`: 201×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="GROUP LABEL" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Section › Items Group`: 225×120 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Section › Items Group › Menu list item`: 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Section › Items Group › Menu list item › file-add`: 24×24
- `Section › Items Group › Menu list item › file-add › elements`: 20×22
- `Section › Items Group › Menu list item › file-add › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Section › Items Group › Menu list item › Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Items Group › Menu list item › Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Section › Items Group › Menu list item › tick-02`: 24×24
- `Section › Items Group › Menu list item › tick-02 › elements`: 16×13
- `Section › Items Group › Menu list item › tick-02 › elements › Icon`: 16×13 · fill=Icon/icon-default=#161616
- `Section › Items Group › Menu list item#2`: 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Section › Items Group › Menu list item › file-add#2`: 24×24
- `Section › Items Group › Menu list item › file-add › elements#2`: 20×22
- `Section › Items Group › Menu list item › file-add › elements › Icon#2`: 20×22 · fill=Icon/icon-default=#161616
- `Section › Items Group › Menu list item › Content Wrapper#2`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Items Group › Menu list item › Content Wrapper › Entered Text#2`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Section › Items Group › Menu list item#3`: 225×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Section › Items Group › Menu list item › file-add#3`: 24×24
- `Section › Items Group › Menu list item › file-add › elements#3`: 20×22
- `Section › Items Group › Menu list item › file-add › elements › Icon#3`: 20×22 · fill=Icon/icon-default=#161616
- `Section › Items Group › Menu list item › Content Wrapper#3`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Items Group › Menu list item › Content Wrapper › Entered Text#3`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Section#2`: 241×204 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=12 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Section › Dropdown List - Group Label#2`: 225×26 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Dropdown List - Group Label › Text#2`: 201×18 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Dropdown List - Group Label › Text › Group Label#2`: 201×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="GROUP LABEL" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Section › Items Group#2`: 225×150 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Section › Items Group › Menu list item#4`: 225×50 · lay=H/MIN/MIN · pad=13 13 13 13 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Section › Items Group › Menu list item › file-add#4`: 24×24
- `Section › Items Group › Menu list item › file-add › elements#4`: 20×22
- `Section › Items Group › Menu list item › file-add › elements › Icon#4`: 20×22 · fill=Icon/icon-default=#161616
- `Section › Items Group › Menu list item › Content Wrapper#4`: 111×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- … 56 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Tag, State=Hovered | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Tag, State=Hovered | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Switch, State=Hovered | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Switch, State=Hovered | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Icon, State=Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Icon, State=Hovered | **INSTANT** | 1 |

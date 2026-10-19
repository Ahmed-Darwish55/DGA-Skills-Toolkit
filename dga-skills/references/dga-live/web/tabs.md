# Tabs — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `43:0`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 43-0

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Tabs

> A tablist is a group of headers, or tabs, that lets people navigate between different views of related information without going to different pages. Tablists are great for fitting a lot of information in a small space. They can help reduce scrolling by chunking related information into categories for easier processing. Don’t use tablists if it’s helpful for people to compare information from two different views.

> Resources

> Vertical Tab

> Vertical Tab List

> Horizontal Tab

> Horizontal Tab List

## Component sets on this page (4)

- **Vertical Tab** — 60 variants · `418:99793`
- **Vertical Tab List** — 12 variants · `418:100259`
- **Horizontal Tab** — 64 variants · `30150:125017`
- **Horizontal Tab List** — 10 variants · `30150:125364`

---
## Vertical Tab

**Description (component description field):**

> A vertical tab is a navigation element where tabs are stacked vertically, allowing users to switch between different sections of content.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| Text AR | TEXT=تبويب |
| Text EN | TEXT=Text |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:241572 |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Size | VARIANT: Small · Medium · Large |
| Selected | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, State=Default, Size=Medium, Selected=True`)

- `RTL=False, State=Default, Size=Medium, Selected=True` [COMP] — 72×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
  - `Tab title` [FRAM] — 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
    - `Selector` [RECT] — 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Size=Medium, Selected=True (+3 more) | 72×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Large, Selected=True (+3 more) | 72×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Small, Selected=True (+3 more) | 60×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Medium, Selected=False (+1 more) | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Large, Selected=False (+1 more) | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Small, Selected=False (+1 more) | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 |  |   |  |
| RTL=False, State=Focused, Size=Medium, Selected=True | 72×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Large, Selected=True | 72×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Small, Selected=True | 60×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Medium, Selected=False | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Large, Selected=False | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Small, Selected=False | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Hovered, Size=Medium, Selected=False | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Size=Large, Selected=False | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Size=Small, Selected=False | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Size=Medium, Selected=False | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Size=Large, Selected=False | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Size=Small, Selected=False | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Small, Selected=True
- Leading Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae; ts: Text sm/Semibold → Text sm/Medium
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (74×34 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- *(no visual difference captured at root/child level)*

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Size=Large, Selected=True
- Leading Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (74×42 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (62×26 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=False; RTL=False, Size=Large, Selected=False; RTL=False, Size=Small, Selected=False
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (73×34 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×32)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×32)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (73×42 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×40)
- + Selection indicator › Selector (3×24 · fill=Border/border-black=#161616)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×40)
- + Selection indicator › Selector (3×24 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (61×26 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×24)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/unselected-tab-icon=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×24)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Size=Medium, Selected=True**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Selection indicator › Selector`: 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Large, Selected=True**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 32×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 32×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Selection indicator › Selector`: 3×24 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Small, Selected=True**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Selection indicator › Selector`: 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Medium, Selected=False**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Tab title`: 27×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 27×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Size=Large, Selected=False**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Tab title`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 31×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Size=Small, Selected=False**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Tab title`: 27×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 27×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 6 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 6 |

---
## Vertical Tab List

**Description (component description field):**

> A tab list is a set of tabs that allows for easy navigation between related information categories, removing the need to switch between different pages.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |
| Size | VARIANT: Small · Medium · Large |
| Tab Icons | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Medium, Tab Icons=True`)

- `RTL=False, Size=Medium, Tab Icons=True` [COMP] — 150×160 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, State=Default, Size=Medium, Selected=True** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
      - `Selector` [RECT] — 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, State=Default, Size=Medium, Selected=False** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 14×14 · fill=Icon/unselected-tab-icon=#384250
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, State=Default, Size=Medium, Selected=False** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 14×14 · fill=Icon/unselected-tab-icon=#384250
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, State=Default, Size=Medium, Selected=False** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 14×14 · fill=Icon/unselected-tab-icon=#384250
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, State=Default, Size=Medium, Selected=False** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 14×14 · fill=Icon/unselected-tab-icon=#384250
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Medium, Tab Icons=True (+1 more) | 150×160 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Large, Tab Icons=True (+1 more) | 150×200 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Small, Tab Icons=True (+1 more) | 150×120 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Medium, Tab Icons=True**
- `Vertical Tab`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Vertical Tab › Tab title`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 106×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab › Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#2`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#3`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#3`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#4`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#4`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#5`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#5`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Size=Large, Tab Icons=True**
- `Vertical Tab`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Vertical Tab › Tab title`: 65×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 65×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab › Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×24 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#2`: 83×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#3`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#3`: 67×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 67×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#4`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#4`: 68×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 68×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#5`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#5`: 63×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 63×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Medium, Tab Icons=False**
- `Vertical Tab`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab › Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#2`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#3`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#3`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#4`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#4`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#5`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#5`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Size=Large, Tab Icons=False**
- `Vertical Tab`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title`: 65×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 65×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab › Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×24 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#2`: 83×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#3`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#3`: 67×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 67×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#4`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#4`: 68×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 68×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical Tab#5`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#5`: 63×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 63×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Small, Tab Icons=True**
- `Vertical Tab`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Vertical Tab › Tab title`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 118×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab › Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#2`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#3`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#3`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#4`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#4`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#5`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/unselected-tab-icon=#384250
- `Vertical Tab › Tab title#5`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Size=Small, Tab Icons=False**
- `Vertical Tab`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 138×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab › Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#2`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#3`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#3`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#4`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#4`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical Tab#5`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/vertical-tab-sm-button-h-padding, paddingTop:Tab/vertical-tab-sm-button-v-padding, paddingRight:Tab/vertical-tab-sm-button-h-padding, paddingBottom:Tab/vertical-tab-sm-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Vertical Tab › Tab title#5`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Medium, Selected=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Large, Selected=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Medium, Selected=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Large, Selected=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Small, Selected=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Small, Selected=False | **INSTANT** | 8 |

---
## Horizontal Tab

**Description (component description field):**

> A Horizontal Tab is an individual tab within a horizontal tab list, allowing users to switch between different content sections seamlessly.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| Text AR | TEXT=تبويب |
| Text EN | TEXT=Text |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:241572 |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled · Closed · Open |
| Size | VARIANT: Small · Medium · Large |
| Selected | VARIANT: False · True |
| More Tab | VARIANT: Yes · No |

### Anatomy (first variant: `RTL=False, State=Default, Size=Medium, Selected=True, More Tab=No`)

- `RTL=False, State=Default, Size=Medium, Selected=True, More Tab=No` [COMP] — 81×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
  - `Tab title` [FRAM] — 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Selection indicator` [FRAM] — 81×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `Selector` [RECT] — 49×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Size=Medium, Selected=True, More Tab=No (+3 more) | 81×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Large, Selected=True, More Tab=No (+3 more) | 81×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Small, Selected=True, More Tab=No (+3 more) | 73×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No (+1 more) | 80×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Large, Selected=False, More Tab=No (+1 more) | 80×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Size=Small, Selected=False, More Tab=No (+1 more) | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, State=Focused, Size=Medium, Selected=True, More Tab=No | 81×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Large, Selected=True, More Tab=No | 81×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Small, Selected=True, More Tab=No | 73×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Medium, Selected=False, More Tab=No | 80×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Large, Selected=False, More Tab=No | 80×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Focused, Size=Small, Selected=False, More Tab=No | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, State=Hovered, Size=Medium, Selected=False, More Tab=No | 80×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Size=Large, Selected=False, More Tab=No | 80×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Size=Small, Selected=False, More Tab=No | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Size=Medium, Selected=False, More Tab=No | 80×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Size=Large, Selected=False, More Tab=No | 80×52 | H/CENTER/CENTER · 16 16 16 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Size=Small, Selected=False, More Tab=No | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Closed, Size=Medium, Selected=False, More Tab=Yes (+1 more) | 64×44 | H/CENTER/CENTER · 12 16 12 16 · 4 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled · Closed · Open

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True, More Tab=No; RTL=False, Size=Large, Selected=True, More Tab=No; RTL=False, Size=Small, Selected=True, More Tab=No
- Leading Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=True, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (83×46 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Size=Medium, Selected=True, More Tab=No; RTL=False, Size=Large, Selected=True, More Tab=No
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True, More Tab=No; RTL=False, Size=Large, Selected=True, More Tab=No; RTL=False, Size=Small, Selected=True, More Tab=No
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=True, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (83×54 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=True, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- + Focus outline (75×38 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Size=Small, Selected=True, More Tab=No
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Icon/icon-primary=#1b8354

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=False, More Tab=No; RTL=False, Size=Large, Selected=False, More Tab=No; RTL=False, Size=Small, Selected=False, More Tab=No
- Leading Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (82×46 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Size=Medium, Selected=False, More Tab=No; RTL=False, Size=Large, Selected=False, More Tab=No
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (80×3)
- + Selection indicator › Selector (48×3 · fill=Border/border-black=#161616)

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Size=Medium, Selected=False, More Tab=No; RTL=False, Size=Large, Selected=False, More Tab=No
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (80×3)
- + Selection indicator › Selector (48×3 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (82×54 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False, More Tab=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (74×38 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False, More Tab=No
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (72×3)
- + Selection indicator › Selector (48×3 · fill=Border/border-black=#161616)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False, More Tab=No
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (72×3)
- + Selection indicator › Selector (48×3 · fill=Border/border-black=#161616)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Size=Medium, Selected=True, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 81×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Selection indicator › Selector`: 49×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Large, Selected=True, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 81×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Selection indicator › Selector`: 49×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Small, Selected=True, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 73×3 · lay=V/CENTER/CENTER · pad=0 12 0 12 · gap=8 · tokens{paddingLeft:spacing-lg, paddingRight:spacing-lg}
- `Selection indicator › Selector`: 49×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Size=Large, Selected=False, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Size=Small, Selected=False, More Tab=No**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Closed, Size=Medium, Selected=False, More Tab=Yes**
- `Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › more-horizontal`: 20×20
- `Button › more-horizontal › elements`: 12×2
- `Button › more-horizontal › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

**RTL=False, State=Open, Size=Medium, Selected=True, More Tab=Yes**
- `Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › more-horizontal`: 20×20
- `Button › more-horizontal › elements`: 12×2
- `Button › more-horizontal › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 6 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | State: Closed→Open, Selected: False→True | **INSTANT** | 2 |

---
## Horizontal Tab List

**Description (component description field):**

> A tab list is a set of tabs that allows for easy navigation between related information categories, removing the need to switch between different pages.

### Properties

| Property | Type / options |
|---|---|
| Divider | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Size | VARIANT: Small · Medium · Large |
| Tab Icons | VARIANT: True · False |
| Flush | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Size=Medium, Tab Icons=True, Flush=False`)

- `RTL=False, Size=Medium, Tab Icons=True, Flush=False` [COMP] — 634×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
  - `Divider` [RECT] — 634×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Tabs` [FRAM] — 634×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Medium, Selected=True, More Tab=No** — 110×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Tab title` [FRAM] — 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Selection indicator` [FRAM] — 110×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Selector` [RECT] — 78×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No** — 126×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Tab title` [FRAM] — 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No** — 112×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Tab title` [FRAM] — 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No** — 113×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Tab title` [FRAM] — 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Medium, Selected=False, More Tab=No** — 109×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Tab title` [FRAM] — 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Closed, Size=Medium, Selected=False, More Tab=Yes** — 64×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **more-horizontal / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 12×2

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Medium, Tab Icons=True, Flush=False (+3 more) | 634×44 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Large, Tab Icons=True, Flush=False | 650×52 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Medium, Tab Icons=True, Flush=False**
- `Divider`: 634×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 634×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 110×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab › Selection indicator`: 110×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 78×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 126×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#3`: 112×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#4`: 113×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#5`: 109×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#6`: 64×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button › Leading Icon`: 20×20
- `Tabs › Horizontal Tab › Button › Leading Icon › elements`: 12×2
- `Tabs › Horizontal Tab › Button › Leading Icon › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

**RTL=False, Size=Large, Tab Icons=True, Flush=False**
- `Divider`: 650×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 650×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 110×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab › Selection indicator`: 110×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 78×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 126×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#3`: 112×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#4`: 113×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#5`: 109×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#6`: 80×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#6`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#6`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#6`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#6`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Size=Medium, Tab Icons=True, Flush=True**
- `Divider`: 634×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 634×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 110×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab › Selection indicator`: 110×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 78×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 126×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#3`: 112×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#4`: 113×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#5`: 109×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 14×14 · fill=Icon/icon-default=#161616
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#6`: 64×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button › Leading Icon`: 20×20
- `Tabs › Horizontal Tab › Button › Leading Icon › elements`: 12×2
- `Tabs › Horizontal Tab › Button › Leading Icon › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

**RTL=False, Size=Small, Tab Icons=False, Flush=False**
- `Divider`: 634×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 534×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 90×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab › Selection indicator`: 90×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 58×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 106×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#3`: 92×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#4`: 93×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#5`: 89×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#6`: 64×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button › Leading Icon`: 20×20
- `Tabs › Horizontal Tab › Button › Leading Icon › elements`: 12×2
- `Tabs › Horizontal Tab › Button › Leading Icon › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

**RTL=False, Size=Small, Tab Icons=False, Flush=True**
- `Divider`: 634×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 534×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 90×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab › Selection indicator`: 90×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 58×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 106×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#3`: 92×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#4`: 93×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#5`: 89×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tabs › Horizontal Tab#6`: 64×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Horizontal Tab › Button › Leading Icon`: 20×20
- `Tabs › Horizontal Tab › Button › Leading Icon › elements`: 12×2
- `Tabs › Horizontal Tab › Button › Leading Icon › elements › Icon`: 12×2 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Medium, Selected=False, More Tab=No | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Hovered, Size=Medium, Selected=False, More Tab=No | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Large, Selected=False, More Tab=No | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Hovered, Size=Large, Selected=False, More Tab=No | **INSTANT** | 5 |
| ON_CLICK | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Open, Size=Medium, Selected=True, More Tab=Yes | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Open, Size=Medium, Selected=True, More Tab=Yes | **INSTANT** | 4 |

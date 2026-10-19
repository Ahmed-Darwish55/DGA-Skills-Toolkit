# Tabs — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `43:0`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 43-0

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Vertical Tab

> A tablist is a group of headers, or tabs, that lets people navigate between different views of related information without going to different pages. Tablists are great for fitting a lot of information in a small space. They can help reduce scrolling by chunking related information into categories for easier processing. Don’t use tablists if it’s helpful for people to compare information from two different views.

> Resources

> Vertical Tab List

> Horizontal Tab

> Horizontal Tab List

> Tabs

## Component sets on this page (4)

- **Horizontal Tab** — 48 variants · `417:98153`
- **Vertical Tab** — 48 variants · `418:99793`
- **Horizontal Tab List** — 10 variants · `418:99386`
- **Vertical Tab List** — 12 variants · `418:100259`

---
## Horizontal Tab

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| 🔁 Icon swap | INSTANCE_SWAP=10750:75655 |
| Text AR | TEXT=تبويب |
| Text EN | TEXT=Text |
| RTL | VARIANT: False · True |
| Size | VARIANT: Small · Medium · Large |
| Selected | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Disabled |

### Anatomy (first variant: `RTL=False, Size=Medium, Selected=True, State=Default`)

- `RTL=False, Size=Medium, Selected=True, State=Default` [COMP] — 73×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
  - `Tab title` [FRAM] — 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text"
  - `Selection indicator` [FRAM] — 73×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `Selector` [RECT] — 41×3 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Medium, Selected=True, State=Default (+2 more) | 73×44 | H/CENTER/CENTER · 12 12 12 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, Selected=True, State=Default (+4 more) | 72×52 | H/CENTER/CENTER · 16 12 16 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, Selected=True, State=Default (+2 more) | 73×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, Selected=False, State=Default (+1 more) | 72×44 | H/CENTER/CENTER · 12 12 12 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, Selected=False, State=Default (+1 more) | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, Selected=True, State=Focused | 73×44 | H/CENTER/CENTER · 12 12 12 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Large, Selected=True, State=Focused (+1 more) | 72×52 | H/CENTER/CENTER · 16 12 16 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Small, Selected=True, State=Focused | 73×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Medium, Selected=False, State=Focused | 72×44 | H/CENTER/CENTER · 12 12 12 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Small, Selected=False, State=Focused | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Medium, Selected=False, State=Pressed | 72×44 | H/CENTER/CENTER · 12 12 12 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, Selected=False, State=Pressed | 72×52 | H/CENTER/CENTER · 16 12 16 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, Selected=False, State=Pressed | 72×36 | H/CENTER/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Disabled

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- Leading Icon › Icon: fill: Icon/icon-primary=#1b8354 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-primary=#1b8354 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-primary=#1b8354 → Icon/icon-default=#161616
- + Focus outline (75×46 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-primary=#1b8354 → Icon/icon-default=#161616
- + Focus outline (74×54 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-primary=#1b8354 → Icon/icon-default=#161616
- + Focus outline (75×38 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=False; RTL=False, Size=Large, Selected=False; RTL=False, Size=Small, Selected=False
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (74×46 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Size=Medium, Selected=False; RTL=False, Size=Large, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (72×3)
- + Selection indicator › Selector (40×3 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (74×54 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (74×38 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (72×3)
- + Selection indicator › Selector (48×3 · fill=Border/border-black=#161616)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Medium, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text"
- `Selection indicator`: 73×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Selection indicator › Selector`: 41×3 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Large, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text"
- `Selection indicator`: 72×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Selection indicator › Selector`: 40×3 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Small, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 29×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 29×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Text"
- `Selection indicator`: 73×3 · lay=V/CENTER/CENTER · pad=0 12 0 12 · gap=8 · tokens{paddingLeft:spacing-lg, paddingRight:spacing-lg}
- `Selection indicator › Selector`: 49×3 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Medium, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text"

**RTL=False, Size=Large, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text"

**RTL=False, Size=Small, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Text"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, Selected=False, State=Default ⟶ Horizontal Tab/False/Medium/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, Selected=False, State=Default ⟶ Horizontal Tab/True/Medium/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, Selected=False, State=Default ⟶ Horizontal Tab/False/Small/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, Selected=False, State=Default ⟶ Horizontal Tab/True/Small/False/Hovered | **INSTANT** | 1 |

---
## Vertical Tab

### Properties

| Property | Type / options |
|---|---|
| 🔁 Icon swap | INSTANCE_SWAP=10750:75655 |
| Text AR | TEXT=تبويب |
| Text EN | TEXT=Text |
| Icon | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Size | VARIANT: Small · Medium · Large |
| Selected | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Disabled |

### Anatomy (first variant: `RTL=False, Size=Medium, Selected=True, State=Default`)

- `RTL=False, Size=Medium, Selected=True, State=Default` [COMP] — 72×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
  - `Tab title` [FRAM] — 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text"
  - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
    - `Selector` [RECT] — 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Medium, Selected=True, State=Default (+2 more) | 72×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, Selected=True, State=Default (+2 more) | 72×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, Selected=True, State=Default (+2 more) | 60×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, Selected=False, State=Default (+1 more) | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, Selected=False, State=Default (+1 more) | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, Selected=False, State=Default (+1 more) | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, Selected=True, State=Focused | 72×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 2 |  | Colors/Base/black=#000000 3 |  |
| RTL=False, Size=Large, Selected=True, State=Focused | 72×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 2 |  | Colors/Base/black=#000000 3 |  |
| RTL=False, Size=Small, Selected=True, State=Focused | 60×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 2 |  | Colors/Base/black=#000000 3 |  |
| RTL=False, Size=Medium, Selected=False, State=Focused | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Large, Selected=False, State=Focused | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Small, Selected=False, State=Focused | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 2 |  | Border/border-black=#161616 3 |  |
| RTL=False, Size=Medium, Selected=False, State=Pressed | 71×32 | H/CENTER/CENTER · 6 12 6 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, Selected=False, State=Pressed | 71×40 | H/MIN/CENTER · 8 12 8 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, Selected=False, State=Pressed | 59×24 | H/CENTER/CENTER · 2 6 2 6 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Disabled

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- Leading Icon › Icon: stroke: Icon/icon-primary=#1b8354 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Border/border-primary=#1b8354 → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=True
- (root): stroke: — → Colors/Base/black=#000000; sw: — → 3; r: 4 → 2
- + Focus outline (74×34 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=True; RTL=False, Size=Large, Selected=True; RTL=False, Size=Small, Selected=True
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=True
- (root): stroke: — → Colors/Base/black=#000000; sw: — → 3; r: 4 → 2
- + Focus outline (74×42 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=True
- (root): stroke: — → Colors/Base/black=#000000; sw: — → 3; r: 4 → 2
- + Focus outline (62×26 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Medium, Selected=False; RTL=False, Size=Large, Selected=False; RTL=False, Size=Small, Selected=False
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (73×34 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Medium, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → —; sw: 0 → —
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×32)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (73×42 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Large, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → —; sw: 0 → —
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×40)
- + Selection indicator › Selector (3×24 · fill=Border/border-black=#161616)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 3; r: 4 → 2
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → Icon/icon-default=#161616
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Focus outline (61×26 · stroke=Border/border-white=#ffffff · sw=1)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Leading Icon › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default=#161616; stroke: Icon/icon-neutral=#384250 → —; sw: 0 → —
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×24)
- + Selection indicator › Selector (3×16 · fill=Border/border-black=#161616)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Medium, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text"
- `Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Selection indicator › Selector`: 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Large, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 32×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 32×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Text"
- `Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Selection indicator › Selector`: 3×24 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Small, Selected=True, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tab title`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 28×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Text"
- `Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Selection indicator › Selector`: 3×16 · r=1000 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Size=Medium, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 27×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 27×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"

**RTL=False, Size=Large, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 31×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"

**RTL=False, Size=Small, Selected=False, State=Default**
- `Leading Icon`: 16×16
- `Leading Icon › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tab title`: 27×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 27×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, Selected=False, State=Default ⟶ Vertical Tab/False/Medium/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, Selected=False, State=Default ⟶ Vertical Tab/True/Medium/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, Selected=False, State=Default ⟶ Vertical Tab/False/Small/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, Selected=False, State=Default ⟶ Vertical Tab/True/Small/False/Hovered | **INSTANT** | 1 |

---
## Horizontal Tab List

### Properties

| Property | Type / options |
|---|---|
| Divider | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Size | VARIANT: Medium · Small · Large |
| Tab Icons | VARIANT: False · True |
| Flush | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Large, Tab Icons=True, Flush=False`)

- `RTL=False, Size=Large, Tab Icons=True, Flush=False` [COMP] — 562×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
  - `Divider` [RECT] — 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Tabs` [FRAM] — 561×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, Size=Large, Selected=True, State=Default** — 101×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
      - `Tab title` [FRAM] — 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 57×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
      - `Selection indicator` [FRAM] — 101×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Selector` [RECT] — 69×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, Size=Large, Selected=False, State=Default** — 118×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
      - `Tab title` [FRAM] — 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, Size=Large, Selected=False, State=Default** — 104×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
      - `Tab title` [FRAM] — 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, Size=Large, Selected=False, State=Default** — 105×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
      - `Tab title` [FRAM] — 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
    - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, Size=Large, Selected=False, State=Default** — 101×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
      - `Tab title` [FRAM] — 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `dots-horizontal` [INST] ⟶ instance of **dots-horizontal** — 20×20
        - `Icon` [VECT] — 13×2 · stroke=#000000 · sw=2 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, Tab Icons=True, Flush=False | 562×52 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Medium, Tab Icons=True, Flush=False (+3 more) | 562×44 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, Tab Icons=True, Flush=False**
- `Divider`: 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 561×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 101×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 57×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
- `Tabs › Horizontal Tab › Selection indicator`: 101×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 69×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 118×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
- `Tabs › Horizontal Tab#3`: 104×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
- `Tabs › Horizontal Tab#4`: 105×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
- `Tabs › Horizontal Tab#5`: 101×52 · lay=H/CENTER/CENTER · pad=16 12 16 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:spacing-lg, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
- `Tabs › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Button › dots-horizontal`: 20×20
- `Tabs › Button › dots-horizontal › Icon`: 13×2 · stroke=#000000 · sw=2 · sa=CENTER

**RTL=False, Size=Medium, Tab Icons=True, Flush=False**
- `Divider`: 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 562×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 102×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab"
- `Tabs › Horizontal Tab › Selection indicator`: 102×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 70×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 118×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
- `Tabs › Horizontal Tab#3`: 104×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
- `Tabs › Horizontal Tab#4`: 105×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
- `Tabs › Horizontal Tab#5`: 101×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
- `Tabs › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Button › dots-horizontal`: 20×20
- `Tabs › Button › dots-horizontal › Icon`: 13×2 · stroke=#000000 · sw=2 · sa=CENTER

**RTL=False, Size=Medium, Tab Icons=True, Flush=True**
- `Divider`: 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 562×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 102×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab"
- `Tabs › Horizontal Tab › Selection indicator`: 102×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 70×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 118×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#2`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
- `Tabs › Horizontal Tab#3`: 104×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#3`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
- `Tabs › Horizontal Tab#4`: 105×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#4`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
- `Tabs › Horizontal Tab#5`: 101×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Leading Icon#5`: 16×16
- `Tabs › Horizontal Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
- `Tabs › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Button › dots-horizontal`: 20×20
- `Tabs › Button › dots-horizontal › Icon`: 13×2 · stroke=#000000 · sw=2 · sa=CENTER

**RTL=False, Size=Small, Tab Icons=False, Flush=False**
- `Divider`: 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 462×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 82×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab"
- `Tabs › Horizontal Tab › Selection indicator`: 82×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 50×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 98×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
- `Tabs › Horizontal Tab#3`: 84×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
- `Tabs › Horizontal Tab#4`: 85×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
- `Tabs › Horizontal Tab#5`: 81×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
- `Tabs › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Button › dots-horizontal`: 20×20
- `Tabs › Button › dots-horizontal › Icon`: 13×2 · stroke=#000000 · sw=2 · sa=CENTER

**RTL=False, Size=Small, Tab Icons=False, Flush=True**
- `Divider`: 562×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs`: 462×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab`: 82×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title`: 58×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text`: 58×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="First Tab"
- `Tabs › Horizontal Tab › Selection indicator`: 82×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Tabs › Horizontal Tab › Selection indicator › Selector`: 50×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tabs › Horizontal Tab#2`: 98×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#2`: 74×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#2`: 74×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Second Tab"
- `Tabs › Horizontal Tab#3`: 84×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#3`: 60×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#3`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Third Tab"
- `Tabs › Horizontal Tab#4`: 85×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#4`: 61×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#4`: 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Forth Tab"
- `Tabs › Horizontal Tab#5`: 81×44 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-lg, paddingTop:spacing-lg, paddingRight:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tabs › Horizontal Tab › Tab title#5`: 57×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tabs › Horizontal Tab › Tab title › Text#5`: 57×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Fifth Tab"
- `Tabs › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tabs › Button › dots-horizontal`: 20×20
- `Tabs › Button › dots-horizontal › Icon`: 13×2 · stroke=#000000 · sw=2 · sa=CENTER

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab/False/Medium/False/Hovered | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab/True/Medium/False/Hovered | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Medium/Hovered/Subtle/True/False | **INSTANT** | 8 |

---
## Vertical Tab List

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Size | VARIANT: Medium · Small · Large |
| Tab icons | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Medium, Tab icons=True`)

- `RTL=False, Size=Medium, Tab icons=True` [COMP] — 150×160 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, Size=Medium, Selected=True, State=Default** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
    - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
      - `Selector` [RECT] — 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, Size=Medium, Selected=False, State=Default** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab"
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, Size=Medium, Selected=False, State=Default** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab"
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, Size=Medium, Selected=False, State=Default** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab"
  - `Vertical Tab` [INST] ⟶ instance of **Vertical Tab / RTL=False, Size=Medium, Selected=False, State=Default** — 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
    - `Tab title` [FRAM] — 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Medium, Tab icons=True (+1 more) | 150×160 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Large, Tab icons=True (+1 more) | 150×200 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Size=Small, Tab icons=True (+1 more) | 150×120 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Medium, Tab icons=True**
- `Vertical Tab`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 106×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#2`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#3`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#4`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:Tab/vertical-tab-md-button-v-padding, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:Tab/vertical-tab-md-button-v-padding, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#5`: 106×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 106×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab"

**RTL=False, Size=Large, Tab icons=True**
- `Vertical Tab`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title`: 65×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 65×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×24 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#2`: 83×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#3`: 67×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 67×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#4`: 68×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 68×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#5`: 63×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 63×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Fifth Tab"

**RTL=False, Size=Medium, Tab icons=False**
- `Vertical Tab`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#2`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#3`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#4`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×32 · lay=H/CENTER/CENTER · pad=6 12 6 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-sm, paddingRight:spacing-lg, paddingBottom:spacing-sm, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#5`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 126×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab"

**RTL=False, Size=Large, Tab icons=False**
- `Vertical Tab`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-v-padding, paddingTop:spacing-md, paddingRight:Tab/horizontal-tab-md-button-v-padding, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title`: 65×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 65×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×40 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=8 · tokens{paddingTop:spacing-md, paddingBottom:spacing-md}
- `Vertical Tab › Selection indicator › Selector`: 3×24 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-md, paddingRight:spacing-lg, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#2`: 83×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-md, paddingRight:spacing-lg, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#3`: 67×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 67×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-md, paddingRight:spacing-lg, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#4`: 68×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 68×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×40 · lay=H/MIN/CENTER · pad=8 12 8 12 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-lg, paddingTop:spacing-md, paddingRight:spacing-lg, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#5`: 63×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 63×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Fifth Tab"

**RTL=False, Size=Small, Tab icons=True**
- `Vertical Tab`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon`: 16×16
- `Vertical Tab › Leading Icon › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Icon/icon-primary=#1b8354 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 118×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#2`: 16×16
- `Vertical Tab › Leading Icon › Icon#2`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#2`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#3`: 16×16
- `Vertical Tab › Leading Icon › Icon#3`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#3`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#4`: 16×16
- `Vertical Tab › Leading Icon › Icon#4`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#4`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Leading Icon#5`: 16×16
- `Vertical Tab › Leading Icon › Icon#5`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Icon/icon-neutral=#384250 · sw=0 · sa=CENTER
- `Vertical Tab › Tab title#5`: 118×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 118×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab"

**RTL=False, Size=Small, Tab icons=False**
- `Vertical Tab`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text`: 138×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="First Tab"
- `Vertical Tab › Selection indicator`: 3×24 · lay=V/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Vertical Tab › Selection indicator › Selector`: 3×16 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Vertical Tab#2`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#2`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#2`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Second Tab"
- `Vertical Tab#3`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#3`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#3`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Third Tab"
- `Vertical Tab#4`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#4`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#4`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Forth Tab"
- `Vertical Tab#5`: 150×24 · lay=H/CENTER/CENTER · pad=2 6 2 6 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:spacing-sm, paddingTop:spacing-xxs, paddingRight:spacing-sm, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Vertical Tab › Tab title#5`: 138×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Vertical Tab › Tab title › Text#5`: 138×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fifth Tab"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab/False/Medium/False/Hovered | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab/True/Medium/False/Hovered | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab/False/Small/False/Hovered | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Vertical Tab ⟶ Vertical Tab/True/Small/False/Hovered | **INSTANT** | 8 |

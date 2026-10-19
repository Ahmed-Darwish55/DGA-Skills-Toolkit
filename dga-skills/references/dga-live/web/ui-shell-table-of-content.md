# UI Shell - Table of Content — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `2445:78507`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 2445-78507

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Table of Content

> The Table of Contents is used to provide a navigable outline or summary of content, allowing users to quickly understand and jump to specific sections

> Resources

## Component sets on this page (2)

- **TOC Item** — 48 variants · `2962:37761`
- **TOC** — 2 variants · `2962:38090`

---
## TOC Item

**Description (component description field):**

> The TOC Item represents a navigational entry in a structured content list. It supports hierarchy, active states, and click interaction for seamless navigation.

### Properties

| Property | Type / options |
|---|---|
| Text AR | TEXT=قسم صفحة |
| Text EN | TEXT=Page Section |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused |
| Selected | VARIANT: True · False |
| Level | VARIANT: Level 1 (H2) · Level 2 (H3) · Level 3 (H4) |

### Anatomy (first variant: `RTL=False, State=Default, Selected=True, Level=Level 1 (H2)`)

- `RTL=False, State=Default, Selected=True, Level=Level 1 (H2)` [COMP] — 200×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
  - `Tab title` [FRAM] — 176×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
    - `Text` [TEXT] — 176×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
    - `Selector` [RECT] — 3×32 · r=1000 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Selected=True, Level=Level 1 (H2) (+11 more) | 200×32 | H/CENTER/CENTER · 0 8 0 16 · 0 | 2 |  |   |  |
| RTL=False, State=Focused, Selected=True, Level=Level 1 (H2) (+5 more) | 200×32 | H/CENTER/CENTER · 0 8 0 16 · 0 | 2 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Hovered, Selected=False, Level=Level 1 (H2) (+2 more) | 200×32 | H/CENTER/CENTER · 0 8 0 16 · 0 | 2 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Selected=False, Level=Level 1 (H2) (+2 more) | 200×32 | H/CENTER/CENTER · 0 8 0 16 · 0 | 2 | Button/button-background-neutral-pressed=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Selected=True, Level=Level 1 (H2); RTL=False, Selected=True, Level=Level 2 (H3); RTL=False, Selected=True, Level=Level 3 (H4)
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Selected=True, Level=Level 1 (H2); RTL=False, Selected=True, Level=Level 2 (H3); RTL=False, Selected=True, Level=Level 3 (H4)
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Selected=True, Level=Level 1 (H2); RTL=False, Selected=True, Level=Level 2 (H3); RTL=False, Selected=True, Level=Level 3 (H4)
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- − Selection indicator › Selector (hidden/removed)

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Selected=False, Level=Level 1 (H2); RTL=False, Selected=False, Level=Level 2 (H3); RTL=False, Selected=False, Level=Level 3 (H4)
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×32)
- + Selection indicator › Selector (3×32 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Selected=False, Level=Level 1 (H2); RTL=False, Selected=False, Level=Level 2 (H3); RTL=False, Selected=False, Level=Level 3 (H4)
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Tab title › Text: fill: Text/text-primary-paragraph=#384250 → Text/text-default=#161616
- + Selection indicator (3×32)
- + Selection indicator › Selector (3×32 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Selected=False, Level=Level 1 (H2); RTL=False, Selected=False, Level=Level 2 (H3); RTL=False, Selected=False, Level=Level 3 (H4)
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Selected=True, Level=Level 1 (H2)**
- `Tab title`: 176×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 176×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Selection indicator › Selector`: 3×32 · r=1000 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=True, Level=Level 2 (H3)**
- `Nesteing indicator`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Tab title`: 160×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 160×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Selection indicator › Selector`: 3×32 · r=1000 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=True, Level=Level 3 (H4)**
- `Nesteing indicator`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Nesteing indicator 2`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator 2 › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Tab title`: 144×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Selection indicator › Selector`: 3×32 · r=1000 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=False, Level=Level 1 (H2)**
- `Tab title`: 176×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 176×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Selected=False, Level=Level 2 (H3)**
- `Nesteing indicator`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Tab title`: 160×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 160×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Selected=False, Level=Level 3 (H4)**
- `Nesteing indicator`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Nesteing indicator 2`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Nesteing indicator 2 › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `Tab title`: 144×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `Tab title › Text`: 144×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 6 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 6 |

---
## TOC

**Description (component description field):**

> The Table of Contents is used to provide a navigable outline or summary of content, allowing users to quickly understand and jump to specific sections

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 222×706 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
  - `Page Name` [FRAM] — 222×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `On this page` [TEXT] — 222×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="On this page" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `[Page Name]` [TEXT] — 222×30 · fill=Text/text-display=#1f2a37 · font=mixed · fs=20 · lh=30 · ts=Text xl/Semibold · txt="[Page Name]" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
  - `TOC Items` [FRAM] — 222×640 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=True, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Selection indicator` [FRAM] — 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 3×32 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 3 (H4)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Nesteing indicator 2` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 166×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 166×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 3 (H4)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Nesteing indicator 2` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 166×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 166×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 2 (H3)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Nesteing indicator` [FRAM] — 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
        - `Selector` [RECT] — 2×32 · fill=Background/background-neutral-300=#d2d6db
      - `Tab title` [FRAM] — 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `TOC Item` [INST] ⟶ instance of **TOC Item / RTL=False, State=Default, Selected=False, Level=Level 1 (H2)** — 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Tab title` [FRAM] — 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
        - `Text` [TEXT] — 198×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 222×706 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Page Name`: 222×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Page Name › On this page`: 222×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="On this page" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Page Name › [Page Name]`: 222×30 · fill=Text/text-display=#1f2a37 · font=mixed · fs=20 · lh=30 · ts=Text xl/Semibold · txt="[Page Name]" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `TOC Items`: 222×640 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `TOC Items › TOC Item`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Tab title`: 198×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `TOC Items › TOC Item › Tab title › Text`: 198×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `TOC Items › TOC Item › Selection indicator`: 3×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Selection indicator › Selector`: 3×32 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `TOC Items › TOC Item#2`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Nesteing indicator`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Tab title#2`: 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `TOC Items › TOC Item › Tab title › Text#2`: 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `TOC Items › TOC Item#3`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Nesteing indicator#2`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator › Selector#2`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Tab title#3`: 182×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `TOC Items › TOC Item › Tab title › Text#3`: 182×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `TOC Items › TOC Item#4`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Nesteing indicator#3`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator › Selector#3`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Nesteing indicator 2`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator 2 › Selector`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Tab title#4`: 166×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `TOC Items › TOC Item › Tab title › Text#4`: 166×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `TOC Items › TOC Item#5`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Nesteing indicator#4`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator › Selector#4`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Nesteing indicator 2#2`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator 2 › Selector#2`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- `TOC Items › TOC Item › Tab title#5`: 166×32 · lay=H/MIN/MIN · pad=6 0 6 0 · gap=0 · tokens{paddingTop:spacing-sm, paddingBottom:spacing-sm}
- `TOC Items › TOC Item › Tab title › Text#5`: 166×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Nested Page Section" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `TOC Items › TOC Item#6`: 222×32 · lay=H/CENTER/CENTER · pad=0 8 0 16 · gap=0 · r=2 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `TOC Items › TOC Item › Nesteing indicator#5`: 16×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `TOC Items › TOC Item › Nesteing indicator › Selector#5`: 2×32 · fill=Background/background-neutral-300=#d2d6db
- … 50 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 1 (H2) | **INSTANT** | 11 |
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 1 (H2) | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 2 (H3) | **INSTANT** | 7 |
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 2 (H3) | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 3 (H4) | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 3 (H4) | **INSTANT** | 2 |

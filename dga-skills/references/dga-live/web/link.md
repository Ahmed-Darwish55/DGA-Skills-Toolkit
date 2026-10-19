# Link — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `2486:33110`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 2486-33110

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Link

> A link is styled text that leads somewhere else, either within an experience or to a different app or site. Don’t use links for triggering actions, try a transparent button instead.

> Resources

## Component sets on this page (1)

- **Link** — 144 variants · `2508:25804`

---
## Link

**Description (component description field):**

> Links facilitate navigation by allowing users to click (or tap) and navigate users to another location, such as a different site, resource, or section within the same page.

### Properties

| Property | Type / options |
|---|---|
| Link Text EN | TEXT=Link |
| Link Text AR | TEXT=رابط |
| Icon | BOOLEAN=false |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:242381 |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Visited · Disabled |
| Style | VARIANT: Primary · Neutral · On-color |
| Size | VARIANT: Medium · Small |
| Inline | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, Style=Primary, Size=Small, Inline=False`)

- `RTL=False, State=Default, Style=Primary, Size=Small, Inline=False` [COMP] — 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `Link Text` [TEXT] — 26×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
    - `elements` [GROU] — 12×12
      - `Icon` [VECT] — 12×12 · fill=Link/link-icon-primary-focused=#1b8354

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Style=Primary, Size=Small, Inline=False (+29 more) | 26×20 | H/MIN/CENTER · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, State=Focused, Style=Primary, Size=Small, Inline=False (+3 more) | 26×20 | H/MIN/CENTER · 0 0 0 0 · 4 |  |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Default, Style=Primary, Size=Medium, Inline=False (+29 more) | 30×24 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Style=Primary, Size=Medium, Inline=False (+3 more) | 30×24 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=On-color, Size=Small, Inline=False (+1 more) | 26×20 | H/MIN/CENTER · 0 0 0 0 · 4 |  |  | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=On-color, Size=Medium, Inline=False (+1 more) | 30×24 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  | Border/border-white=#ffffff 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Visited · Disabled

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Small, Inline=False; RTL=False, Style=Primary, Size=Small, Inline=True; RTL=False, Style=Primary, Size=Medium, Inline=False; RTL=False, Style=Primary, Size=Medium, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-visited=#14573a

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Small, Inline=False; RTL=False, Style=Primary, Size=Small, Inline=True; RTL=False, Style=Primary, Size=Medium, Inline=False; RTL=False, Style=Primary, Size=Medium, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Small, Inline=False; RTL=False, Style=Primary, Size=Small, Inline=True; RTL=False, Style=Primary, Size=Medium, Inline=False; RTL=False, Style=Primary, Size=Medium, Inline=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-focused=#1b8354

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=Primary, Size=Small, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-hovered=#54c08a; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary, Size=Small, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Style=Neutral, Size=Small, Inline=False; RTL=False, Style=Neutral, Size=Small, Inline=True; RTL=False, Style=Neutral, Size=Medium, Inline=False; RTL=False, Style=Neutral, Size=Medium, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-primary-visited=#14573a

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Style=Neutral, Size=Small, Inline=False; RTL=False, Style=Neutral, Size=Small, Inline=True; RTL=False, Style=Neutral, Size=Medium, Inline=False; RTL=False, Style=Neutral, Size=Medium, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Style=Neutral, Size=Small, Inline=False; RTL=False, Style=Neutral, Size=Small, Inline=True; RTL=False, Style=Neutral, Size=Medium, Inline=False; RTL=False, Style=Neutral, Size=Medium, Inline=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-focused=#384250

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Small, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-hovered=#6c737f; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Small, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Style=Primary, Size=Small, Inline=True; RTL=False, Style=Primary, Size=Medium, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-hovered=#54c08a

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Primary, Size=Small, Inline=True; RTL=False, Style=Primary, Size=Medium, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Style=Neutral, Size=Small, Inline=True; RTL=False, Style=Neutral, Size=Medium, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-hovered=#6c737f

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Neutral, Size=Small, Inline=True; RTL=False, Style=Neutral, Size=Medium, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=Primary, Size=Medium, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-hovered=#54c08a; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary, Size=Medium, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Medium, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-hovered=#6c737f; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Neutral, Size=Medium, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Style=On-color, Size=Small, Inline=False; RTL=False, Style=On-color, Size=Small, Inline=True; RTL=False, Style=On-color, Size=Medium, Inline=False; RTL=False, Style=On-color, Size=Medium, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-visited=#ffffff@0.9

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Style=On-color, Size=Small, Inline=False; RTL=False, Style=On-color, Size=Small, Inline=True; RTL=False, Style=On-color, Size=Medium, Inline=False; RTL=False, Style=On-color, Size=Medium, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-disabled=#ffffff@0.3

#### Default → **Focused**  · applies to 3 group(s): RTL=False, Style=On-color, Size=Small, Inline=False; RTL=False, Style=On-color, Size=Small, Inline=True; RTL=False, Style=On-color, Size=Medium, Inline=True
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-focused=#ffffff

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=On-color, Size=Small, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-hovered=#ffffff@0.8; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=On-color, Size=Small, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Style=On-color, Size=Small, Inline=True; RTL=False, Style=On-color, Size=Medium, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-hovered=#ffffff@0.8

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=On-color, Size=Small, Inline=True; RTL=False, Style=On-color, Size=Medium, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=On-color, Size=Medium, Inline=False
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-focused=#ffffff; ts: Text md/Regular → —

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=On-color, Size=Medium, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-hovered=#ffffff@0.8; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=On-color, Size=Medium, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Style=Primary, Size=Small, Inline=False**
- `Link Text`: 26×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Style=Neutral, Size=Small, Inline=False**
- `Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Style=Primary, Size=Small, Inline=True**
- `Link Text`: 26×20 · fill=Link/link-primary=#1b8354 · font=IBM Plex Sans Arabic Regular · fs=14 · lh=20 · ts=Text sm/Regular underlined · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Style=Neutral, Size=Small, Inline=True**
- `Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=IBM Plex Sans Arabic Regular · fs=14 · lh=20 · ts=Text sm/Regular underlined · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Style=Primary, Size=Medium, Inline=False**
- `Link Text`: 30×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Neutral, Size=Medium, Inline=False**
- `Link Text`: 30×24 · fill=Link/link-neutral=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Primary, Size=Medium, Inline=True**
- `Link Text`: 30×24 · fill=Link/link-primary=#1b8354 · font=IBM Plex Sans Arabic Regular · fs=16 · lh=24 · ts=Text md/Regular underlined · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Neutral, Size=Medium, Inline=True**
- `Link Text`: 30×24 · fill=Link/link-neutral=#384250 · font=IBM Plex Sans Arabic Regular · fs=16 · lh=24 · ts=Text md/Regular underlined · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 24 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 24 |

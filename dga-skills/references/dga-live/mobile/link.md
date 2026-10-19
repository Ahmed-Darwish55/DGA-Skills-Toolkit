# Link — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `2486:33110`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 2486-33110

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Link

> A link is styled text that leads somewhere else, either within an experience or to a different app or site. Don’t use links for triggering actions, try a transparent button instead.

> Resources

## Component sets on this page (1)

- **Link** — 120 variants · `2508:25804`

---
## Link

### Properties

| Property | Type / options |
|---|---|
| Link Text EN | TEXT=Link |
| Link Text AR | TEXT=رابط |
| Icon | BOOLEAN=true |
| 🔁 Icon Swap | INSTANCE_SWAP=10750:66278 |
| RTL | VARIANT: False · True |
| Size | VARIANT: Medium (16px) · Small (14px) |
| Style | VARIANT: Neutral · Brand · On-color |
| Inline | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Visited · Disabled |

### Anatomy (first variant: `RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default`)

- `RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default` [COMP] — 50×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=2 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
  - `Link Text` [TEXT] — 26×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
  - `Icon` [INST] ⟶ instance of **link-02 / Style=Stroke, Type=Rounded** — 16×16
    - `elements` [GROU] — 13×13
      - `Icon` [VECT] — 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Link/link-primary=#1b8354 · sw=0 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default (+23 more) | 50×20 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  |   |  |
| RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Focused (+3 more) | 50×20 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  | Border/border-black=#161616 2 |  |
| RTL=False, Size=Medium (16px), Style=Brand, Inline=False, State=Default (+23 more) | 58×24 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  |   |  |
| RTL=False, Size=Medium (16px), Style=Brand, Inline=False, State=Focused (+3 more) | 58×24 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  | Border/border-black=#161616 2 |  |
| RTL=False, Size=Small (14px), Style=On-color, Inline=False, State=Focused (+1 more) | 50×20 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  | Border/border-white=#ffffff 2 |  |
| RTL=False, Size=Medium (16px), Style=On-color, Inline=False, State=Focused (+1 more) | 58×24 | H/MIN/CENTER · 0 0 0 0 · 8 | 2 |  | Border/border-white=#ffffff 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Visited · Disabled

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Brand, Inline=False; RTL=False, Size=Small (14px), Style=Brand, Inline=True; RTL=False, Size=Medium (16px), Style=Brand, Inline=False; RTL=False, Size=Medium (16px), Style=Brand, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-visited=#14573a
- Icon › elements › Icon: fill: Icon/icon-primary=#1b8354 → Tag/tag-icon-success=#085d3a; stroke: Link/link-primary=#1b8354 → Link/link-primary-visited=#14573a

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Brand, Inline=False; RTL=False, Size=Small (14px), Style=Brand, Inline=True; RTL=False, Size=Medium (16px), Style=Brand, Inline=False; RTL=False, Size=Medium (16px), Style=Brand, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-disabled=#9da4ae
- Icon › elements › Icon: fill: Icon/icon-primary=#1b8354 → Global/icon-default-disabled=#9da4ae; stroke: Link/link-primary=#1b8354 → Link/link-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Brand, Inline=False; RTL=False, Size=Small (14px), Style=Brand, Inline=True; RTL=False, Size=Medium (16px), Style=Brand, Inline=False; RTL=False, Size=Medium (16px), Style=Brand, Inline=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-focused=#1b8354
- Icon › elements › Icon: stroke: Link/link-primary=#1b8354 → Link/link-primary-focused=#1b8354

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small (14px), Style=Brand, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-primary=#1b8354 → Form/datecell-background-300=#88d8ad; stroke: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Neutral, Inline=False; RTL=False, Size=Small (14px), Style=Neutral, Inline=True; RTL=False, Size=Medium (16px), Style=Neutral, Inline=False; RTL=False, Size=Medium (16px), Style=Neutral, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-visited=#4d5761
- Icon › elements › Icon: fill: Icon/icon-neutral=#384250 → Tag/tag-background-neutral=#4d5761; stroke: Link/link-neutral=#384250 → Link/link-neutral-visited=#4d5761

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Neutral, Inline=False; RTL=False, Size=Small (14px), Style=Neutral, Inline=True; RTL=False, Size=Medium (16px), Style=Neutral, Inline=False; RTL=False, Size=Medium (16px), Style=Neutral, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-disabled=#9da4ae
- Icon › elements › Icon: fill: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae; stroke: Link/link-neutral=#384250 → Link/link-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=Neutral, Inline=False; RTL=False, Size=Small (14px), Style=Neutral, Inline=True; RTL=False, Size=Medium (16px), Style=Neutral, Inline=False; RTL=False, Size=Medium (16px), Style=Neutral, Inline=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-focused=#384250
- Icon › elements › Icon: stroke: Link/link-neutral=#384250 → Link/link-neutral-focused=#384250

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small (14px), Style=Neutral, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default-400=#9da4ae; stroke: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Size=Small (14px), Style=Brand, Inline=True; RTL=False, Size=Medium (16px), Style=Brand, Inline=True
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad
- Icon › elements › Icon: fill: Icon/icon-primary=#1b8354 → Form/datecell-background-300=#88d8ad; stroke: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Size=Small (14px), Style=Neutral, Inline=True; RTL=False, Size=Medium (16px), Style=Neutral, Inline=True
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae
- Icon › elements › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default-400=#9da4ae; stroke: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Medium (16px), Style=Brand, Inline=False
- Link Text: fill: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-primary=#1b8354 → Form/datecell-background-300=#88d8ad; stroke: Link/link-primary=#1b8354 → Link/link-primary-pressed=#88d8ad

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Medium (16px), Style=Neutral, Inline=False
- Link Text: fill: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-neutral=#384250 → Icon/icon-default-400=#9da4ae; stroke: Link/link-neutral=#384250 → Link/link-neutral-pressed=#9da4ae

#### Default → **Visited**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=On-color, Inline=False; RTL=False, Size=Small (14px), Style=On-color, Inline=True; RTL=False, Size=Medium (16px), Style=On-color, Inline=False; RTL=False, Size=Medium (16px), Style=On-color, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-visited=#ffffff@0.9
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/background-disabled=#e5e7eb

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=On-color, Inline=False; RTL=False, Size=Small (14px), Style=On-color, Inline=True; RTL=False, Size=Medium (16px), Style=On-color, Inline=False; RTL=False, Size=Medium (16px), Style=On-color, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-disabled=#ffffff@0.3
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Link/link-oncolor=#ffffff → Link/link-oncolor-disabled=#ffffff@0.3

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Small (14px), Style=On-color, Inline=False; RTL=False, Size=Small (14px), Style=On-color, Inline=True; RTL=False, Size=Medium (16px), Style=On-color, Inline=False; RTL=False, Size=Medium (16px), Style=On-color, Inline=True
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-focused=#ffffff
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: Link/link-oncolor=#ffffff → Link/link-oncolor-focused=#ffffff

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Small (14px), Style=On-color, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6; font: mixed → IBM Plex Sans Arabic Regular; ts: Text sm/Regular → Text sm/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6; stroke: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Size=Small (14px), Style=On-color, Inline=True; RTL=False, Size=Medium (16px), Style=On-color, Inline=True
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6; stroke: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Medium (16px), Style=On-color, Inline=False
- Link Text: fill: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6; font: mixed → IBM Plex Sans Arabic Regular; ts: Text md/Regular → Text md/Regular underlined
- Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6; stroke: Link/link-oncolor=#ffffff → Link/link-oncolor-pressed=#ffffff@0.6

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default**
- `Link Text`: 26×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Icon`: 16×16
- `Icon › elements`: 13×13
- `Icon › elements › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Link/link-primary=#1b8354 · sw=0 · sa=CENTER

**RTL=False, Size=Small (14px), Style=Neutral, Inline=False, State=Default**
- `Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Icon`: 16×16
- `Icon › elements`: 13×13
- `Icon › elements › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Link/link-neutral=#384250 · sw=0 · sa=CENTER

**RTL=False, Size=Small (14px), Style=Brand, Inline=True, State=Default**
- `Link Text`: 26×20 · fill=Link/link-primary=#1b8354 · font=IBM Plex Sans Arabic Regular · fs=14 · lh=20 · ts=Text sm/Regular underlined · txt="Link"
- `Icon`: 16×16
- `Icon › elements`: 13×13
- `Icon › elements › Icon`: 13×13 · fill=Icon/icon-primary=#1b8354 · stroke=Link/link-primary=#1b8354 · sw=0 · sa=CENTER

**RTL=False, Size=Small (14px), Style=Neutral, Inline=True, State=Default**
- `Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=IBM Plex Sans Arabic Regular · fs=14 · lh=20 · ts=Text sm/Regular underlined · txt="Link"
- `Icon`: 16×16
- `Icon › elements`: 13×13
- `Icon › elements › Icon`: 13×13 · fill=Icon/icon-neutral=#384250 · stroke=Link/link-neutral=#384250 · sw=0 · sa=CENTER

**RTL=False, Size=Medium (16px), Style=Brand, Inline=False, State=Default**
- `Link Text`: 30×24 · fill=Link/link-primary=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link"
- `Icon`: 20×20
- `Icon › elements`: 16×16
- `Icon › elements › Icon`: 16×16 · fill=Icon/icon-primary=#1b8354 · stroke=Link/link-primary=#1b8354 · sw=0 · sa=CENTER

**RTL=False, Size=Medium (16px), Style=Neutral, Inline=False, State=Default**
- `Link Text`: 30×24 · fill=Link/link-neutral=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Link"
- `Icon`: 20×20
- `Icon › elements`: 16×16
- `Icon › elements › Icon`: 16×16 · fill=Icon/icon-neutral=#384250 · stroke=Link/link-neutral=#384250 · sw=0 · sa=CENTER

**RTL=False, Size=Medium (16px), Style=Brand, Inline=True, State=Default**
- `Link Text`: 30×24 · fill=Link/link-primary=#1b8354 · font=IBM Plex Sans Arabic Regular · fs=16 · lh=24 · ts=Text md/Regular underlined · txt="Link"
- `Icon`: 20×20
- `Icon › elements`: 16×16
- `Icon › elements › Icon`: 16×16 · fill=Icon/icon-primary=#1b8354 · stroke=Link/link-primary=#1b8354 · sw=0 · sa=CENTER

**RTL=False, Size=Medium (16px), Style=Neutral, Inline=True, State=Default**
- `Link Text`: 30×24 · fill=Link/link-neutral=#384250 · font=IBM Plex Sans Arabic Regular · fs=16 · lh=24 · ts=Text md/Regular underlined · txt="Link"
- `Icon`: 20×20
- `Icon › elements`: 16×16
- `Icon › elements › Icon`: 16×16 · fill=Icon/icon-neutral=#384250 · stroke=Link/link-neutral=#384250 · sw=0 · sa=CENTER

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default ⟶ Link/False/Small (14px)/Brand/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=Brand, Inline=False, State=Default ⟶ Link/True/Small (14px)/Brand/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=Neutral, Inline=False, State=Default ⟶ Link/False/Small (14px)/Neutral/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=Neutral, Inline=False, State=Default ⟶ Link/True/Small (14px)/Neutral/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=Brand, Inline=True, State=Default ⟶ Link/False/Small (14px)/Brand/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=Brand, Inline=True, State=Default ⟶ Link/True/Small (14px)/Brand/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=Neutral, Inline=True, State=Default ⟶ Link/False/Small (14px)/Neutral/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=Neutral, Inline=True, State=Default ⟶ Link/True/Small (14px)/Neutral/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=Brand, Inline=False, State=Default ⟶ Link/False/Medium (16px)/Brand/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=Brand, Inline=False, State=Default ⟶ Link/True/Medium (16px)/Brand/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=Neutral, Inline=False, State=Default ⟶ Link/False/Medium (16px)/Neutral/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=Neutral, Inline=False, State=Default ⟶ Link/True/Medium (16px)/Neutral/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=Brand, Inline=True, State=Default ⟶ Link/False/Medium (16px)/Brand/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=Brand, Inline=True, State=Default ⟶ Link/True/Medium (16px)/Brand/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=Neutral, Inline=True, State=Default ⟶ Link/False/Medium (16px)/Neutral/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=Neutral, Inline=True, State=Default ⟶ Link/True/Medium (16px)/Neutral/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=On-color, Inline=False, State=Default ⟶ Link/False/Small (14px)/On-color/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small (14px), Style=On-color, Inline=True, State=Default ⟶ Link/False/Small (14px)/On-color/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=On-color, Inline=False, State=Default ⟶ Link/False/Medium (16px)/On-color/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium (16px), Style=On-color, Inline=True, State=Default ⟶ Link/False/Medium (16px)/On-color/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=On-color, Inline=False, State=Default ⟶ Link/True/Small (14px)/On-color/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small (14px), Style=On-color, Inline=True, State=Default ⟶ Link/True/Small (14px)/On-color/True/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=On-color, Inline=False, State=Default ⟶ Link/True/Medium (16px)/On-color/False/Hovered | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium (16px), Style=On-color, Inline=True, State=Default ⟶ Link/True/Medium (16px)/On-color/True/Hovered | **INSTANT** | 1 |

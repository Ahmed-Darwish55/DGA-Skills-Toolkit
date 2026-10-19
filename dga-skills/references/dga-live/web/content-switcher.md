# Content Switcher — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `8330:33094`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 8330-33094

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Content switcher

> Content switcher allows users to toggle between different content sections within the same space on the screen.

> Resources

## Component sets on this page (2)

- **_Content Switcher Item** — 144 variants · `8421:70930`
- **Content Switcher** — 12 variants · `8421:71014`

---
## _Content Switcher Item

**Description (component description field):**

> Content Switcher typically includes a set of options or tabs arranged horizontally. Each option represents a different piece of content or view that users can switch between.

### Properties

| Property | Type / options |
|---|---|
| Text En | TEXT=Item |
| Text AR | TEXT=عنصر |
| RTL | VARIANT: False · True |
| Item Type | VARIANT: Last · Mid · First |
| State | VARIANT: Normal · Hovered · Selected · Focused |
| OnColor | VARIANT: False · True |
| Size | VARIANT: Small · Medium · Large |

### Anatomy (first variant: `RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Small`)

- `RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Small` [COMP] — 51×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=8 0 0 8 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
  - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Small (+1 more) | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Medium (+1 more) | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Hovered, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Hovered, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Hovered, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Hovered, OnColor=True, Size=Large | 55×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=False, Size=Small (+1 more) | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=First, State=Selected, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=First, State=Focused, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=First, State=Focused, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Selected, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0 |  |
| RTL=False, Item Type=First, State=Focused, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=First, State=Focused, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=First, State=Focused, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 8 0 0 8 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=True, Size=Small (+1 more) | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=True, Size=Medium (+1 more) | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Normal, OnColor=True, Size=Large (+1 more) | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Selected, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0.5 0 0.5 |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Mid, State=Focused, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 |  | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=True, Size=Small (+1 more) | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=True, Size=Medium (+1 more) | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Normal, OnColor=True, Size=Large (+1 more) | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=False, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=False, Size=Medium | 64×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=False, Size=Large | 76×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Selected, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-transparent-10=#ffffff@0.1 0 0 0 0.5 |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=True, Size=Small | 51×32 | H/CENTER/CENTER · 0 8 0 8 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=True, Size=Medium | 59×40 | H/CENTER/CENTER · 0 12 0 12 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Item Type=Last, State=Focused, OnColor=True, Size=Large | 67×48 | H/CENTER/CENTER · 0 16 0 16 · 0 | 0 8 8 0 | Button/button-background-primary-default=#1b8354 | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Normal · Hovered · Selected · Focused

#### Normal → **Hovered**  · applies to 9 group(s): RTL=False, Item Type=First, OnColor=False, Size=Small; RTL=False, Item Type=First, OnColor=False, Size=Medium; RTL=False, Item Type=First, OnColor=False, Size=Large; RTL=False, Item Type=Mid, OnColor=False, Size=Small …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Normal → **Selected**  · applies to 3 group(s): RTL=False, Item Type=First, OnColor=False, Size=Small; RTL=False, Item Type=First, OnColor=False, Size=Medium; RTL=False, Item Type=First, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0.5 0 0 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=False, Size=Small
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0.5 0 0 → —
- + Frame 4 (35×24)
- + Frame 4 › Item (35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · txt="Item")
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)
- − Item (hidden/removed)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=False, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0.5 0 0 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (60×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0.5 0 0 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (72×44 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Hovered**  · applies to 8 group(s): RTL=False, Item Type=First, OnColor=True, Size=Small; RTL=False, Item Type=First, OnColor=True, Size=Medium; RTL=False, Item Type=Mid, OnColor=True, Size=Small; RTL=False, Item Type=Mid, OnColor=True, Size=Medium …
- *(no visual difference captured at root/child level)*

#### Normal → **Selected**  · applies to 9 group(s): RTL=False, Item Type=First, OnColor=True, Size=Small; RTL=False, Item Type=First, OnColor=True, Size=Medium; RTL=False, Item Type=First, OnColor=True, Size=Large; RTL=False, Item Type=Mid, OnColor=True, Size=Small …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=True, Size=Small
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0 → 2
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=True, Size=Medium
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0 → 2
- + Focus outline (55×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Hovered**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=True, Size=Large
- (root): w: 67 → 55

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=First, OnColor=True, Size=Large
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0 → 2
- + Focus outline (63×44 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Selected**  · applies to 3 group(s): RTL=False, Item Type=Mid, OnColor=False, Size=Small; RTL=False, Item Type=Mid, OnColor=False, Size=Medium; RTL=False, Item Type=Mid, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0.5 0 0.5 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=False, Size=Small
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=False, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (60×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (72×44 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=True, Size=Small
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=True, Size=Medium
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- + Focus outline (55×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Mid, OnColor=True, Size=Large
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0.5 0 0.5 → 2
- + Focus outline (63×44 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Selected**  · applies to 3 group(s): RTL=False, Item Type=Last, OnColor=False, Size=Small; RTL=False, Item Type=Last, OnColor=False, Size=Medium; RTL=False, Item Type=Last, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → —; sw: 0 0 0 0.5 → —
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=False, Size=Small
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=False, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (60×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=False, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-default=#0d121c; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- Item: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- + Focus outline (72×44 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=True, Size=Small
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- + Focus outline (47×28 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=True, Size=Medium
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- + Focus outline (55×36 · stroke=Border/border-white=#ffffff · sw=1)

#### Normal → **Focused**  · applies to 1 group(s): RTL=False, Item Type=Last, OnColor=True, Size=Large
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-primary-default=#1b8354; stroke: Border/border-transparent-10=#ffffff@0.1 → Border/border-black=#161616; sw: 0 0 0 0.5 → 2
- + Focus outline (63×44 · stroke=Border/border-white=#ffffff · sw=1)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Small**
- `Item`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Medium**
- `Item`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

**RTL=False, Item Type=First, State=Normal, OnColor=False, Size=Large**
- `Item`: 44×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}

**RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Small**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Medium**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Item Type=First, State=Normal, OnColor=True, Size=Large**
- `Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Small**
- `Item`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Medium**
- `Item`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Normal→Hovered | **SMART_ANIMATE 300ms EASE_OUT** | 36 |
| ON_CLICK | CHANGE_TO | State: Hovered→Selected | **SMART_ANIMATE 300ms EASE_OUT** | 36 |

---
## Content Switcher

**Description (component description field):**

> Content switchers in the platforms code allow users to navigate between related views efficiently. They display one section at a time, ensuring a focused and user-friendly experience.

### Properties

| Property | Type / options |
|---|---|
| 3rd Item | BOOLEAN=true |
| 2nd item | BOOLEAN=true |
| RTL | VARIANT: False · True |
| OnColor | VARIANT: False · True |
| Size | VARIANT: Small · Medium · Large |

### Anatomy (first variant: `RTL=False, OnColor=False, Size=Small`)

- `RTL=False, OnColor=False, Size=Small` [COMP] — 304×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=First, State=Selected, OnColor=False, Size=Small** — 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
    - `Item` [TEXT] — 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Small** — 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Mid, State=Normal, OnColor=False, Size=Small** — 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_Content Switcher Item` [INST] ⟶ instance of **_Content Switcher Item / RTL=False, Item Type=Last, State=Normal, OnColor=False, Size=Small** — 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
    - `Item` [TEXT] — 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, OnColor=False, Size=Small (+1 more) | 304×32 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, OnColor=False, Size=Medium (+1 more) | 304×40 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, OnColor=False, Size=Large (+1 more) | 304×48 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, OnColor=False, Size=Small**
- `_Content Switcher Item`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#2`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#3`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#4`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 35×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, OnColor=False, Size=Medium**
- `_Content Switcher Item`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 40×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `_Content Switcher Item#2`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `_Content Switcher Item#3`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `_Content Switcher Item#4`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

**RTL=False, OnColor=False, Size=Large**
- `_Content Switcher Item`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · r=8 0 0 8 · fill=Button/button-background-black-default=#0d121c · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 44×30 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#2`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 44×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#3`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 44×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#4`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · r=0 8 8 0 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 44×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}

**RTL=False, OnColor=True, Size=Small**
- `_Content Switcher Item`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=8 0 0 8 · fill=Button/button-background-primary-default=#1b8354 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#2`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#3`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#4`: 76×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=0 · r=0 8 8 0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, OnColor=True, Size=Medium**
- `_Content Switcher Item`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · r=8 0 0 8 · fill=Button/button-background-primary-default=#1b8354 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#2`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#3`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Content Switcher Item#4`: 76×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=0 · r=0 8 8 0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 35×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, OnColor=True, Size=Large**
- `_Content Switcher Item`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · r=8 0 0 8 · fill=Button/button-background-primary-default=#1b8354 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-md, bottomLeftRadius:radius-md}
- `_Content Switcher Item › Item`: 44×30 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#2`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#2`: 44×30 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#3`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0.5 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `_Content Switcher Item › Item#3`: 44×30 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `_Content Switcher Item#4`: 76×48 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=0 · r=0 8 8 0 · fill=Button/button-background-transparent-hovered=#ffffff@0.2 · stroke=Border/border-transparent-10=#ffffff@0.1 · sw=0 0 0 0.5 · sa=INSIDE · tokens{paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:radius-none, topRightRadius:radius-md, bottomLeftRadius:radius-none, bottomRightRadius:radius-md}
- `_Content Switcher Item › Item#4`: 44×30 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Small | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Medium | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Large | **SMART_ANIMATE 300ms EASE_OUT** | 1 |

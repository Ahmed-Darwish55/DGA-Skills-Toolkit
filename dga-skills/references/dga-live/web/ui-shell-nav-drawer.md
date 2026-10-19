# UI Shell - Nav Drawer — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `530:295832`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 530-295832

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Navigation Drawer

> A navigation drawer typically appears as a panel from the side of the screen, revealing a set of navigation options such as links to different sections.

> Resources

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

> Navigation Drawer Item

## Component sets on this page (3)

- **Nav Drawer Item** — 90 variants · `30150:160274`
- **Nav Drawer** — 12 variants · `30150:160799`
- **Nav Drawer Header** — 4 variants · `30150:161144`

---
## Nav Drawer Item

**Description (component description field):**

> Parent (Link with Dropdown): This is a parent link that has a dropdown indicator. When clicked or tapped, this would likely expand to show additional links, known as child links.
> Link: This is a simple link without any dropdown functionality. It is usually used for single-level navigation menus where each link takes you directly to a page or section.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| External Link | BOOLEAN=false |
| Text EN | TEXT=Link |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:241572 |
| Text AR | TEXT=رابط |
| Badge | BOOLEAN=true |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Selected · Disabled |
| Type | VARIANT: Link · Parent (Sub-menu) · Divider |
| On Color | VARIANT: True · False |
| Level | VARIANT: Level 2 · Level 1 |
| Expanded | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, State=Default, Type=Link, On Color=False, Level=Level 1, Expanded=False`)

- `RTL=False, State=Default, Type=Link, On Color=False, Level=Level 1, Expanded=False` [COMP] — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
  - `Text wrapper` [FRAM] — 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False** — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
      - `elements` [GROU] — 9×9
        - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616
    - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
    - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
      - `elements` [GROU] — 9×9
        - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Type=Link, On Color=False, Level=Level 1, Expanded=False (+13 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 |  |   |  |
| RTL=False, State=Hovered, Type=Link, On Color=False, Level=Level 1, Expanded=False (+2 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Type=Link, On Color=True, Level=Level 1, Expanded=False (+2 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Pressed, Type=Link, On Color=False, Level=Level 1, Expanded=False (+2 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Type=Link, On Color=True, Level=Level 1, Expanded=False (+2 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Focused, Type=Link, On Color=False, Level=Level 1, Expanded=False (+2 more) | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Type=Link, On Color=True, Level=Level 1, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 |  | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Selected, Type=Link, On Color=False, Level=Level 1, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Type=Link, On Color=True, Level=Level 1, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False (+3 more) | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 |  |   |  |
| RTL=False, State=Hovered, Type=Link, On Color=False, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Type=Link, On Color=True, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Pressed, Type=Link, On Color=False, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Type=Link, On Color=True, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Focused, Type=Link, On Color=False, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Type=Link, On Color=True, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 |  | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Selected, Type=Link, On Color=False, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Type=Link, On Color=True, Level=Level 2, Expanded=False | 224×36 | H/CENTER/CENTER · 8 16 8 40 · 8 | 4 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, State=Default, Type=Divider, On Color=False, Level=Level 1, Expanded=False (+1 more) | 464×17 | H/CENTER/CENTER · 8 16 8 16 · 8 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Selected · Disabled

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Type=Link, On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True; RTL=False, Type=Link, On Color=False, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Type=Link, On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True; RTL=False, Type=Link, On Color=False, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Type=Link, On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True; RTL=False, Type=Link, On Color=False, Level=Level 2, Expanded=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Link, On Color=False, Level=Level 1, Expanded=False
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Background/background-primary=#1b8354
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-primary=#1b8354)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Link, On Color=False, Level=Level 1, Expanded=False
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Type=Link, On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True; RTL=False, Type=Link, On Color=True, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-transparent-hovered=#ffffff@0.2
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Alpha/alpha-white-40=#ffffff@0.4)

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Type=Link, On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True; RTL=False, Type=Link, On Color=True, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Alpha/alpha-white-60=#ffffff@0.6)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Link, On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Link, On Color=True, Level=Level 2, Expanded=False
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Link, On Color=True, Level=Level 1, Expanded=False
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3
- + home-05 (16×16)
- + home-05 › Icon (14×14 · fill=Icon/icon-oncolor=#ffffff)
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-white=#ffffff)
- − Icon (hidden/removed)
- − Icon › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Link, On Color=True, Level=Level 1, Expanded=False
- Icon › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True
- *(no visual difference captured at root/child level)*

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False; RTL=False, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True
- Icon › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4
- Chevron › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Link, On Color=False, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Background/background-primary=#1b8354; ts: Text sm/Regular → Text sm/Semibold
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-primary=#1b8354)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Link, On Color=False, Level=Level 2, Expanded=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Link, On Color=True, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3
- Text wrapper › Text: ts: Text sm/Regular → Text sm/Semibold
- + Selection indicator (6×36)
- + Selection indicator › Selector (6×24 · fill=Background/background-white=#ffffff)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Link, On Color=True, Level=Level 2, Expanded=False
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Type=Link, On Color=False, Level=Level 1, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Type=Link, On Color=True, Level=Level 1, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-on-color=#ffffff@0.2 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Text/text-oncolor-primary=#ffffff · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, State=Default, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90

**RTL=False, State=Default, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True**
- `Icon`: 16×16
- `Icon › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=-90

**RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False**
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Type=Link, On Color=True, Level=Level 2, Expanded=False**
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-on-color=#ffffff@0.2 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Text/text-oncolor-primary=#ffffff · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 16 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 16 |

---
## Nav Drawer

**Description (component description field):**

> A navigation drawer typically appears as a panel from the side of the screen, revealing a set of navigation options such as links to different sections.

### Properties

| Property | Type / options |
|---|---|
| Nav Header | BOOLEAN=true |
| Scroll Bar | BOOLEAN=false |
| Border | BOOLEAN=true |
| Swap Custom Content | INSTANCE_SWAP=15249:99491 |
| Custom Content | BOOLEAN=false |
| RTL | VARIANT: True · False |
| Background Color | VARIANT: Green · White · Gray |
| Overlay | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Background Color=Gray, Overlay=False`)

- `RTL=False, Background Color=Gray, Overlay=False` [COMP] — 256×903 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Alpha/alpha-white-50=#ffffff@0.5
  - `Border` [RECT] — 1×903 · fill=Border/border-neutral-primary=#d2d6db
  - `Nav Drawer Header` [INST] ⟶ instance of **Nav Drawer Header / RTL=no, Background=Gray** — 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
    - `Header Content` [FRAM] — 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
      - `Logo & Menu Items` [FRAM] — 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
        - `Logo & GOV Identifier` [FRAM] — 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
          - `_GOV Identifier` [INST] ⟶ instance of **_GOV Identifier / Option=1** *(hidden)* — 46×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Rectangle 6202` [RECT] *(hidden)* — 1×48 · fill=Alpha/alpha-black-20=#161616@0.2
          - `_Header Logo` [INST] ⟶ instance of **_Header Logo / State=Default** — 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Divider` [RECT] *(hidden)* — 256×1 · fill=Colors/Neutral/300=#d2d6db
  - `Drawer Items` [FRAM] — 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Chevron` [INST] ⟶ instance of **arrow-up-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=-90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `External Link` [INST] ⟶ instance of **old-link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `External Link` [INST] ⟶ instance of **old-link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `External Link` [INST] ⟶ instance of **old-link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Divider, On Color=False, Level=Level 1, Expanded=False** — 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Rectangle 1` [RECT] — 192×1 · fill=Border/border-neutral-primary=#d2d6db
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Divider, On Color=False, Level=Level 1, Expanded=False** — 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Rectangle 1` [RECT] — 192×1 · fill=Border/border-neutral-primary=#d2d6db
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Chevron` [INST] ⟶ instance of **arrow-up-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=-90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, State=Default, Type=Link, On Color=False, Level=Level 2, Expanded=False** — 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `External Link` [INST] ⟶ instance of **old-link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Style=Neutral, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 9×9
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Background Color=Gray, Overlay=False | 256×903 | V/MIN/MIN · 0 0 0 0 · 0 |  | Alpha/alpha-white-50=#ffffff@0.5 |   |  |
| RTL=False, Background Color=Green, Overlay=False | 256×903 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-SA-Flag=#074d31 |   |  |
| RTL=False, Background Color=White, Overlay=True (+1 more) | 256×903 | V/MIN/MIN · 0 0 0 0 · 0 |  | Alpha/alpha-white-80=#ffffff@0.8 |   | BACKGROUND_BLUR(24);DROP_SHADOW(#0000001a 4,16 b24) |
| RTL=False, Background Color=Green, Overlay=True | 256×903 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-SA-Flag=#074d31 |   | DROP_SHADOW(#1018282e 0,24 b48 s-12) |
| RTL=False, Background Color=White, Overlay=False | 256×903 | V/MIN/MIN · 0 0 0 0 · 0 |  | Alpha/alpha-white-80=#ffffff@0.8 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Background Color=Gray, Overlay=False**
- `Border`: 1×903 · fill=Border/border-neutral-primary=#d2d6db
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- … 57 more layers (data JSON)

**RTL=False, Background Color=Green, Overlay=False**
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-nav header=#14573a · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Rectangle 1`: 192×1 · fill=Alpha/alpha-white-30=#ffffff@0.3
- … 57 more layers (data JSON)

**RTL=False, Background Color=White, Overlay=True**
- `Border`: 1×903 · fill=Border/border-neutral-primary=#d2d6db
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- … 57 more layers (data JSON)

**RTL=False, Background Color=Gray, Overlay=True**
- `Border`: 1×903 · fill=Border/border-neutral-primary=#d2d6db
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- … 57 more layers (data JSON)

**RTL=False, Background Color=Green, Overlay=True**
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-nav header=#14573a · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-oncolor=#ffffff
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Rectangle 1`: 192×1 · fill=Alpha/alpha-white-30=#ffffff@0.3
- … 57 more layers (data JSON)

**RTL=False, Background Color=White, Overlay=False**
- `Border`: 1×903 · fill=Border/border-neutral-primary=#d2d6db
- `Nav Drawer Header`: 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
- `Nav Drawer Header › Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Nav Drawer Header › Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Drawer Items`: 256×831 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-xl, paddingRight:spacing-xl, paddingBottom:spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#3`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#4`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 40 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-5xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 168×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 168×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item#5`: 224×36 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon#2`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon#2`: 14×14 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper#5`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#5`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Drawer Items › Nav Drawer Item › Chevron#2`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements#2`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Drawer Items › Nav Drawer Item#6`: 224×17 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- … 57 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Link, On Color=False, Level=Level 2, Expanded=False | **INSTANT** | 56 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Link, On Color=False, Level=Level 2, Expanded=False | **INSTANT** | 56 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Link, On Color=True, Level=Level 2, Expanded=False | **INSTANT** | 28 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Link, On Color=True, Level=Level 2, Expanded=False | **INSTANT** | 28 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True | **INSTANT** | 12 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False | **INSTANT** | 4 |

---
## Nav Drawer Header

**Description (component description field):**

> The Nav Drawer Header includes a placeholder for replacing the logo.

### Properties

| Property | Type / options |
|---|---|
| Logo | BOOLEAN=true |
| Divider | BOOLEAN=false |
| RTL | VARIANT: yes · no |
| Background | VARIANT: Green · Gray |

### Anatomy (first variant: `RTL=yes, Background=Green`)

- `RTL=yes, Background=Green` [COMP] — 256×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-nav header=#14573a · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
  - `Header Content` [FRAM] — 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
    - `Logo & Menu Items` [FRAM] — 192×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
      - `Logo & GOV Identifier` [FRAM] — 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
        - `_Header Logo` [INST] ⟶ instance of **_Header Logo / State=Default** — 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Logo Placeholder` [INST] ⟶ instance of **Logo Placeholder / RTL=False, Size=Small, Logo Position=Side** — 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
        - `Rectangle 6202` [RECT] *(hidden)* — 1×48 · fill=Alpha/alpha-black-20=#161616@0.2
        - `_GOV Identifier` [INST] ⟶ instance of **_GOV Identifier / Option=1** *(hidden)* — 46×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `2030 Vision Logo` [FRAM] — 46×48
  - `Divider` [RECT] *(hidden)* — 256×1 · fill=Alpha/alpha-white-30=#ffffff@0.3

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=yes, Background=Green (+1 more) | 256×72 | V/CENTER/CENTER · 0 32 0 32 · 0 |  | Background/background-nav header=#14573a |   |  |
| RTL=no, Background=Gray (+1 more) | 256×72 | V/CENTER/CENTER · 0 32 0 32 · 0 |  | Background/background-neutral-50=#f9fafb |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=yes, Background=Green**
- `Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 192×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=no, Background=Green**
- `Header Content`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=no, Background=Gray**
- `Header Content`: 192×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 192×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=yes, Background=Gray**
- `Header Content`: 192×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 192×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo & GOV Identifier`: 125×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo`: 125×72 · lay=H/CENTER/CENTER · pad=12 0 12 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-lg, paddingBottom:spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › _Header Logo › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

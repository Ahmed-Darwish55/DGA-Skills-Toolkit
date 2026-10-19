# UI Shell - Nav Drawer — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `530:295832`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 530-295832

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Navigation Drawer

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

> Resources

> Navigation Drawer Item

> A navigation drawer typically appears as a panel from the side of the screen, revealing a set of navigation options such as links to different sections.

## Component sets on this page (3)

- **Nav Drawer Item** — 74 variants · `538:296381`
- **Nav Drawer** — 8 variants · `1679:30950`
- **User section** — 4 variants · `8412:136892`

---
## Nav Drawer Item

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| External Link | BOOLEAN=false |
| Text EN | TEXT=Link |
| 🔁 Icon swap | INSTANCE_SWAP=10750:75655 |
| Text AR | TEXT=رابط |
| Tag | BOOLEAN=true |
| RTL | VARIANT: False · True |
| On Color | VARIANT: False · True |
| Type | VARIANT: Link · Parent (Sub-menu) · Divider |
| Level | VARIANT: Level 2 · Level 1 |
| State | VARIANT: Default · Pressed · Focused · Selected · Disabled |
| Expanded | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False`)

- `RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False` [COMP] — 224×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
    - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
  - `Text wrapper` [FRAM] — 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
  - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False** — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
      - `elements` [GROU] — 6×5
        - `Icon` [VECT] — 6×5 · fill=Tag/tag-icon-neutral=#1f2a37
    - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"
    - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
      - `elements` [GROU] — 6×5
        - `Icon` [VECT] — 6×5 · fill=Tag/tag-icon-neutral=#1f2a37

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False (+11 more) | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  |   |  |
| RTL=False, On Color=False, Type=Link, Level=Level 1, State=Pressed, Expanded=False (+2 more) | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, On Color=True, Type=Link, Level=Level 1, State=Pressed, Expanded=False (+1 more) | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, On Color=False, Type=Link, Level=Level 1, State=Focused, Expanded=False (+2 more) | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, On Color=True, Type=Link, Level=Level 1, State=Focused, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  | Border/border-white-40=#ffffff@0.4 2 |  |
| RTL=False, On Color=False, Type=Link, Level=Level 1, State=Selected, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, On Color=True, Type=Link, Level=Level 1, State=Selected, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Pressed, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 | Alpha/alpha-white-30=#ffffff@0.3 |   |  |
| RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Focused, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  | Colors/Base/white=#ffffff 2 |  |
| RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Focused, Expanded=True | 224×44 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  | Border/border-white=#ffffff 2 |  |
| RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False (+3 more) | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 |  |   |  |
| RTL=False, On Color=False, Type=Link, Level=Level 2, State=Pressed, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, On Color=True, Type=Link, Level=Level 2, State=Pressed, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, On Color=False, Type=Link, Level=Level 2, State=Focused, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, On Color=True, Type=Link, Level=Level 2, State=Focused, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 |  | Border/border-white=#ffffff 2 |  |
| RTL=False, On Color=False, Type=Link, Level=Level 2, State=Selected, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, On Color=True, Type=Link, Level=Level 2, State=Selected, Expanded=False | 224×44 | H/CENTER/CENTER · 12 16 12 40 · 8 | 4 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, On Color=False, Type=Divider, Level=Level 1, State=Default, Expanded=False (+1 more) | 464×25 | H/CENTER/CENTER · 12 16 12 16 · 8 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Selected · Disabled

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, On Color=False, Type=Link, Level=Level 1, Expanded=False; RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=False; RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=True; RTL=False, On Color=False, Type=Link, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, On Color=False, Type=Link, Level=Level 1, Expanded=False; RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=False; RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=True; RTL=False, On Color=False, Type=Link, Level=Level 2, Expanded=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Selected**  · applies to 1 group(s): RTL=False, On Color=False, Type=Link, Level=Level 1, Expanded=False
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb
- Icon › Icon: fill: Icon/icon-default=#161616 → Icon/icon-primary=#1b8354; stroke: Icon/icon-default=#161616 → Icon/icon-primary=#1b8354
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-primary=#1b8354
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Background/background-primary=#1b8354)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=False, Type=Link, Level=Level 1, Expanded=False
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 1, Expanded=False
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Text/text-primary_on-color=#ffffff
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Alpha/alpha-white-60=#ffffff@0.6)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 1, Expanded=False
- (root): stroke: — → Border/border-white-40=#ffffff@0.4; sw: — → 2
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Text/text-secondary_on-color=#ffffff@0.7

#### Default → **Selected**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 1, Expanded=False
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Background/background-white=#ffffff)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 1, Expanded=False
- Icon › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=False; RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, Expanded=True
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=False
- (root): fill: — → Alpha/alpha-white-30=#ffffff@0.3
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Text/text-primary_on-color=#ffffff
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Alpha/alpha-white-60=#ffffff@0.6)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=False
- (root): stroke: — → Colors/Base/white=#ffffff; sw: — → 2
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Text/text-secondary_on-color=#ffffff@0.7

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=False
- Icon › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4
- Chevron › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=True
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Text/text-primary_on-color=#ffffff
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Alpha/alpha-white-60=#ffffff@0.6)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=True; RTL=False, On Color=True, Type=Link, Level=Level 2, Expanded=False
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Text/text-oncolor-primary=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, Expanded=True
- Icon › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Global/text-default-oncolor-disabled=#ffffff@0.4
- Chevron › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4; stroke: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Selected**  · applies to 1 group(s): RTL=False, On Color=False, Type=Link, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-primary=#1b8354; ts: Text sm/Regular → Text sm/Semibold
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Background/background-primary=#1b8354)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=False, Type=Link, Level=Level 2, Expanded=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Text/text-oncolor-primary=#ffffff
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Alpha/alpha-white-60=#ffffff@0.6)

#### Default → **Selected**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 2, Expanded=False
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Text/text-oncolor-primary=#ffffff; ts: Text sm/Regular → Text sm/Semibold
- + Selection indicator (6×44)
- + Selection indicator › Selector (6×32 · fill=Background/background-white=#ffffff)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, On Color=True, Type=Link, Level=Level 2, Expanded=False
- Text wrapper › Text: fill: Text/text-secondary_on-color=#ffffff@0.7 → Global/text-default-oncolor-disabled=#ffffff@0.4

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"

**RTL=False, On Color=True, Type=Link, Level=Level 1, State=Default, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-on-color=#ffffff@0.2 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:spacing-md, paddingTop:Global/spacing-none, paddingRight:spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Text/text-oncolor-primary=#ffffff · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"

**RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER · rot=90

**RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True**
- `Icon`: 16×16
- `Icon › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER
- `Text wrapper`: 144×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 144×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Chevron`: 16×16
- `Chevron › elements`: 9×5
- `Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER · rot=-90

**RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False**
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"

**RTL=False, On Color=True, Type=Link, Level=Level 2, State=Default, Expanded=False**
- `Text wrapper`: 126×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 126×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Tag`: 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-on-color=#ffffff@0.2 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:spacing-md, paddingTop:Global/spacing-none, paddingRight:spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Tag › Text`: 18×14 · fill=Text/text-oncolor-primary=#ffffff · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Link/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Link/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=True, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Link/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=True, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Link/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Link/Level 2/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Link/Level 2/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, On Color=True, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Link/Level 2/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, On Color=True, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Link/Level 2/Hovered/False | **INSTANT** | 1 |

---
## Nav Drawer

### Properties

| Property | Type / options |
|---|---|
| Scroll bar | BOOLEAN=false |
| Border | BOOLEAN=true |
| Header | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Background | VARIANT: Green · White |
| Overlay | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Background=White, Overlay=False`)

- `RTL=False, Background=White, Overlay=False` [COMP] — 327×840 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-menu=#ffffff
  - `User section` [INST] ⟶ instance of **User section / RTL=False, OnColor=False** — 327×88 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 12×12
        - `elements` [GROU] — 8×8
          - `Icon` [VECT] — 8×8 · fill=Icon/icon-default=#161616
    - `Frame 3` [FRAM] — 295×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
      - `Frame 2` [FRAM] — 219×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
        - `Avatar` [INST] ⟶ instance of **Avatar / Type=Initials, Square=False, Size=40px** — 40×40
          - `bg` [RECT] — 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
          - `Placeholder` [FRAM] — 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Ring` [RECT] — 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Frame 1` [FRAM] — 167×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Username` [TEXT] — 167×20 · fill=Text/text-display=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
          - `phone number or status etc` [TEXT] — 167×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
      - `Status Badge` [INST] ⟶ instance of **Status Badge / Size=x Small, Status=Yellow, Style=Subtle, RTL=False** — 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Status indicator` [ELLI] — 10×10 · fill=Tag/tag-icon-warning=#93370d
        - `Text` [TEXT] — 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"
  - `Border` [RECT] — 1×840 · fill=Border/border-primary=#d2d6db
  - `Drawer Items` [FRAM] — 327×752 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
      - `Chevron` [INST] ⟶ instance of **arrow-up-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=-90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
      - `External Link` [INST] ⟶ instance of **link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"
        - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
      - `External Link` [INST] ⟶ instance of **link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"
        - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text wrapper` [FRAM] — 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
      - `External Link` [INST] ⟶ instance of **link-external-02** *(hidden)* — 16×16
        - `Icon` [VECT] — 12×12 · r=    · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=x Small, Color=Gray, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 34×20 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=9999 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
        - `Text` [TEXT] — 18×14 · fill=Tag/tag-text-neutral=#1f2a37 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="+99"
        - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
          - `elements` [GROU] — 6×5
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
      - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Divider, Level=Level 1, State=Default, Expanded=False** — 295×25 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-xl, paddingTop:Global/spacing-lg, paddingRight:spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Rectangle 1` [RECT] — 263×1 · fill=Colors/Gray neutral/300=#d2d6db
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
      - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Divider, Level=Level 1, State=Default, Expanded=False** — 295×25 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-xl, paddingTop:Global/spacing-lg, paddingRight:spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Rectangle 1` [RECT] — 263×1 · fill=Colors/Gray neutral/300=#d2d6db
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Icon` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 16×16
        - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
      - `Chevron` [INST] ⟶ instance of **arrow-up-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=-90
    - `Nav Drawer Item` [INST] ⟶ instance of **Nav Drawer Item / RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False** — 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Background=White, Overlay=False | 327×840 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-menu=#ffffff |   |  |
| RTL=False, Background=Green, Overlay=False | 327×840 | V/MIN/MIN · 0 0 0 0 · 0 |  | Colors/SA-Flag/800=#14573a |   |  |
| RTL=False, Background=White, Overlay=True | 327×840 | V/MIN/MIN · 0 0 0 0 · 0 |  | Alpha/alpha-white-80=#ffffff@0.8 |   | BACKGROUND_BLUR(24);DROP_SHADOW(#0000001a 4,16 b24) |
| RTL=False, Background=Green, Overlay=True | 327×840 | V/MIN/MIN · 0 0 0 0 · 0 |  | Colors/SA-Flag/800=#14573a |   | DROP_SHADOW(#1018282e 0,24 b48 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Background=White, Overlay=False**
- `User section`: 327×88 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `User section › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Button-Close › cancel-01`: 12×12
- `User section › Button-Close › cancel-01 › elements`: 8×8
- `User section › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616
- `User section › Frame 3`: 295×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 3 › Frame 2`: 219×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 3 › Frame 2 › Avatar`: 40×40
- `User section › Frame 3 › Frame 2 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 3 › Frame 2 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `User section › Frame 3 › Frame 2 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `User section › Frame 3 › Frame 2 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 3 › Frame 2 › Frame 1`: 167×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `User section › Frame 3 › Frame 2 › Frame 1 › Username`: 167×20 · fill=Text/text-display=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `User section › Frame 3 › Frame 2 › Frame 1 › phone number or status etc`: 167×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `User section › Frame 3 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Frame 3 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `User section › Frame 3 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"
- `Border`: 1×840 · fill=Border/border-primary=#d2d6db
- `Drawer Items`: 327×752 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#3`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#4`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- … 64 more layers (data JSON)

**RTL=False, Background=Green, Overlay=False**
- `User section`: 327×92 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Alpha/alpha-white-10=#ffffff@0.1 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `User section › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-transparent-default=#ffffff@0 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Button-Close › cancel-01`: 12×12
- `User section › Button-Close › cancel-01 › elements`: 8×8
- `User section › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-oncolor=#ffffff
- `User section › Frame 7`: 295×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 7 › Frame 6`: 219×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 7 › Frame 6 › Avatar`: 40×40
- `User section › Frame 7 › Frame 6 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 7 › Frame 6 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `User section › Frame 7 › Frame 6 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `User section › Frame 7 › Frame 6 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 7 › Frame 6 › Frame 1`: 167×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `User section › Frame 7 › Frame 6 › Frame 1 › Username`: 167×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `User section › Frame 7 › Frame 6 › Frame 1 › phone number or status etc`: 167×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `User section › Frame 7 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Frame 7 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `User section › Frame 7 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"
- `Drawer Items`: 327×748 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER
- `Drawer Items › Nav Drawer Item › Text wrapper`: 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 215×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#3`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#4`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- … 64 more layers (data JSON)

**RTL=False, Background=White, Overlay=True**
- `User section`: 327×92 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `User section › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Button-Close › cancel-01`: 12×12
- `User section › Button-Close › cancel-01 › elements`: 8×8
- `User section › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616
- `User section › Frame 3`: 295×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 3 › Frame 2`: 219×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 3 › Frame 2 › Avatar`: 40×40
- `User section › Frame 3 › Frame 2 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 3 › Frame 2 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `User section › Frame 3 › Frame 2 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `User section › Frame 3 › Frame 2 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 3 › Frame 2 › Frame 1`: 167×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `User section › Frame 3 › Frame 2 › Frame 1 › Username`: 167×20 · fill=Text/text-display=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `User section › Frame 3 › Frame 2 › Frame 1 › phone number or status etc`: 167×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `User section › Frame 3 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Frame 3 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `User section › Frame 3 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"
- `Border`: 1×840 · fill=Border/border-primary=#d2d6db
- `Drawer Items`: 327×748 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Drawer Items › Nav Drawer Item › Text wrapper`: 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 215×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#3`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 239×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#4`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- … 64 more layers (data JSON)

**RTL=False, Background=Green, Overlay=True**
- `User section`: 327×92 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Alpha/alpha-white-10=#ffffff@0.1 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `User section › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-transparent-default=#ffffff@0 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Button-Close › cancel-01`: 12×12
- `User section › Button-Close › cancel-01 › elements`: 8×8
- `User section › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-oncolor=#ffffff
- `User section › Frame 7`: 295×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 7 › Frame 6`: 219×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `User section › Frame 7 › Frame 6 › Avatar`: 40×40
- `User section › Frame 7 › Frame 6 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 7 › Frame 6 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `User section › Frame 7 › Frame 6 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `User section › Frame 7 › Frame 6 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `User section › Frame 7 › Frame 6 › Frame 1`: 167×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `User section › Frame 7 › Frame 6 › Frame 1 › Username`: 167×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `User section › Frame 7 › Frame 6 › Frame 1 › phone number or status etc`: 167×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `User section › Frame 7 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `User section › Frame 7 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `User section › Frame 7 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"
- `Drawer Items`: 327×748 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=0 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Drawer Items › Nav Drawer Item`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 16 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Icon`: 16×16
- `Drawer Items › Nav Drawer Item › Icon › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER
- `Drawer Items › Nav Drawer Item › Text wrapper`: 215×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text`: 215×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Link"
- `Drawer Items › Nav Drawer Item › Chevron`: 16×16
- `Drawer Items › Nav Drawer Item › Chevron › elements`: 9×5
- `Drawer Items › Nav Drawer Item › Chevron › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · stroke=Icon/icon-oncolor=#ffffff · sw=0 · sa=CENTER · rot=-90
- `Drawer Items › Nav Drawer Item#2`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#2`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#2`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#3`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#3`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#3`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- `Drawer Items › Nav Drawer Item#4`: 295×44 · lay=H/CENTER/CENTER · pad=12 16 12 40 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-5xl, paddingTop:Global/spacing-lg, paddingRight:spacing-xl, paddingBottom:Global/spacing-lg, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Drawer Items › Nav Drawer Item › Text wrapper#4`: 239×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Drawer Items › Nav Drawer Item › Text wrapper › Text#4`: 239×20 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link"
- … 64 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Link/Level 2/Hovered/False | **INSTANT** | 36 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Link/Level 2/Hovered/False | **INSTANT** | 36 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Link/Level 2/Hovered/False | **INSTANT** | 36 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Link/Level 2/Hovered/False | **INSTANT** | 36 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/True | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/False | **INSTANT** | 4 |

---
## User section

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Username |
| Description EN | TEXT=phone number or status etc |
| Title AR | TEXT=الاسم |
| Description AR | TEXT=رقم الهاتف، الحالة الخ |
| RTL | VARIANT: True · False |
| OnColor | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, OnColor=False`)

- `RTL=False, OnColor=False` [COMP] — 362×92 · lay=V/CENTER/MAX · pad=16 16 16 16 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
  - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 12×12
      - `elements` [GROU] — 8×8
        - `Icon` [VECT] — 8×8 · fill=Icon/icon-default=#161616
  - `Frame 3` [FRAM] — 330×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
    - `Frame 2` [FRAM] — 254×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
      - `Avatar` [INST] ⟶ instance of **Avatar / Type=Initials, Square=False, Size=40px** — 40×40
        - `bg` [RECT] — 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Placeholder` [FRAM] — 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
        - `Ring` [RECT] — 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Frame 1` [FRAM] — 202×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Username` [TEXT] — 202×20 · fill=Text/text-display=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
        - `phone number or status etc` [TEXT] — 202×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
    - `Status Badge` [INST] ⟶ instance of **Status Badge / Size=x Small, Status=Yellow, Style=Subtle, RTL=False** — 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `Status indicator` [ELLI] — 10×10 · fill=Tag/tag-icon-warning=#93370d
      - `Text` [TEXT] — 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, OnColor=False | 362×92 | V/CENTER/MAX · 16 16 16 16 · 0 |  | Background/background-neutral-50=#f9fafb |   |  |
| RTL=False, OnColor=True | 362×92 | V/CENTER/MAX · 16 16 16 16 · 0 |  | Alpha/alpha-white-10=#ffffff@0.1 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, OnColor=False**
- `Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Button-Close › cancel-01`: 12×12
- `Button-Close › cancel-01 › elements`: 8×8
- `Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616
- `Frame 3`: 330×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `Frame 3 › Frame 2`: 254×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `Frame 3 › Frame 2 › Avatar`: 40×40
- `Frame 3 › Frame 2 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Frame 3 › Frame 2 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 3 › Frame 2 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `Frame 3 › Frame 2 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Frame 3 › Frame 2 › Frame 1`: 202×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 3 › Frame 2 › Frame 1 › Username`: 202×20 · fill=Text/text-display=#1f2a37 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `Frame 3 › Frame 2 › Frame 1 › phone number or status etc`: 202×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `Frame 3 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Frame 3 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `Frame 3 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"

**RTL=False, OnColor=True**
- `Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-transparent-default=#ffffff@0 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Button-Close › cancel-01`: 12×12
- `Button-Close › cancel-01 › elements`: 8×8
- `Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-oncolor=#ffffff
- `Frame 7`: 330×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `Frame 7 › Frame 6`: 254×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `Frame 7 › Frame 6 › Avatar`: 40×40
- `Frame 7 › Frame 6 › Avatar › bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Frame 7 › Frame 6 › Avatar › Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 7 › Frame 6 › Avatar › Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `Frame 7 › Frame 6 › Avatar › Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Frame 7 › Frame 6 › Frame 1`: 202×38 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 7 › Frame 6 › Frame 1 › Username`: 202×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Username"
- `Frame 7 › Frame 6 › Frame 1 › phone number or status etc`: 202×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="phone number or status etc"
- `Frame 7 › Status Badge`: 64×20 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · r=9999 · fill=Tag/tag-background-warning-light=#fffaeb · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Frame 7 › Status Badge › Status indicator`: 10×10 · fill=Tag/tag-icon-warning=#93370d
- `Frame 7 › Status Badge › Text`: 30×14 · fill=Tag/tag-text-warning=#93370d · font=IBM Plex Sans Arabic Medium · fs=10 · lh=14 · ts=Text 2xs/Medium · txt="Status"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/x Small/Hovered/True | **DISSOLVE 200ms LINEAR** | 2 |

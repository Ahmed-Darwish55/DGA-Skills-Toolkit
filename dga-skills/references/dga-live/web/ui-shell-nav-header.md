# UI Shell - Nav Header — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `429:130167`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 429-130167

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Navigation Header

> A Navigation Header is a critical component in design system that guides users through the structure of a website. It typically appears at the top of each page.

> Resources

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

> Navigation Header Elements

> Header Sub-menu

> Header Menu Item

> Header Action

> GOV Logos

> Header Sub-menu Item

## Component sets on this page (8)

- **Header Sub-menu Item** — 16 variants · `30150:148183`
- **Header Menu Item** — 20 variants · `30150:148312`
- **Header Action** — 60 variants · `30150:148445`
- **Item Icon** — 4 variants · `30150:148742`
- **Nav Header** — 8 variants · `30150:148751`
- **Header Menu** — 8 variants · `30150:148860`
- **Nav Header Sub-Menu** — 24 variants · `30150:148877`
- **Logo Placeholder** — 12 variants · `30150:149694`

---
## Header Sub-menu Item

**Description (component description field):**

> The Header Sub-Menu Item displays a list item states.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| Helper Text | BOOLEAN=true |
| Lead Text EN | TEXT=Menu Item Label |
| Helper Text EN | TEXT=Menu item helper text |
| Lead Text AR | TEXT=عنوان عنصر القائمة |
| Helper Text AR | TEXT=محتوى مساند لعنصر الوصول |
| Tag | BOOLEAN=false |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, On-color=False`)

- `RTL=False, State=Default, On-color=False` [COMP] — 320×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
    - `checkmark-square-02` [INST] ⟶ instance of **checkmark-square-02 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 21×21
        - `Icon` [VECT] — 21×21 · fill=Icon/icon-default=#161616
  - `Content` [FRAM] — 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Text and supporting text` [FRAM] — 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
      - `Text and badge` [FRAM] — 248×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
        - `Lead Text` [TEXT] — 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Success, Outline=False, Rounded=True, Icon only=False** *(hidden)* — 64×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=1000 · fill=Tag/tag-background-success-light=#ecfdf3 · stroke=Tag/tag-border-success-light=#abefc6 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none}
          - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `Text` [TEXT] — 25×18 · fill=Tag/tag-text-success=#085d3a · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="New" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
          - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
      - `Helper Text` [TEXT] — 248×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, On-color=False (+1 more) | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 |  |   |  |
| RTL=False, State=Hovered, On-color=False | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, On-color=False | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Focused, On-color=False | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Hovered, On-color=True | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Pressed, On-color=True | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Focused, On-color=True | 320×64 | H/MIN/MIN · 8 16 8 16 · 16 | 8 |  | Border/border-white=#ffffff 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, On-color=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On-color=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, On-color=True
- (root): fill: — → Button/button-background-transparent-hovered=#ffffff@0.2
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, On-color=True
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

#### Default → **Focused**  · applies to 1 group(s): RTL=False, On-color=True
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2
- Content › Text and supporting text › Text and badge › Lead Text: font: mixed → IBM Plex Sans Arabic Medium; ts: Text md/Medium → Text md/Medium underlined

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, On-color=False**
- `Item Icon`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Item Icon › checkmark-square-02`: 24×24
- `Item Icon › checkmark-square-02 › elements`: 21×21
- `Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Content`: 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Text and supporting text`: 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Text and supporting text › Text and badge`: 248×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Text and supporting text › Helper Text`: 248×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, On-color=True**
- `Item Icon`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Item Icon › checkmark-square-02`: 24×24
- `Item Icon › checkmark-square-02 › elements`: 21×21
- `Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content`: 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Text and supporting text`: 248×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Text and supporting text › Text and badge`: 248×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Text and supporting text › Helper Text`: 248×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 4 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |

---
## Header Menu Item

**Description (component description field):**

> Navigation links are interactive text elements that allow users to navigate from one page to another within a website.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:242356 |
| Text AR | TEXT=تبويب |
| Text EN | TEXT=Link |
| Sub-menu | BOOLEAN=true |
| Chevron up/down | INSTANCE_SWAP=13758:241815 |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Selected | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, State=Default, Selected=True`)

- `RTL=False, State=Default, Selected=True` [COMP] — 116×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 21×21
      - `Icon` [VECT] — 21×21 · fill=Icon/icon-oncolor=#ffffff
  - `Tab title` [FRAM] — 32×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 32×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Link"
  - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 11×6
      - `Icon` [VECT] — 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
  - `Selection indicator` [FRAM] — 116×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
    - `Selector` [RECT] — 100×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Selected=True | 116×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Selected=True | 116×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Pressed, Selected=True | 116×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Focused, Selected=True | 116×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-focused=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, State=Disabled, Selected=True | 116×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  |   |  |
| RTL=False, State=Default, Selected=False (+1 more) | 115×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  |   |  |
| RTL=False, State=Hovered, Selected=False | 115×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Selected=False | 115×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Focused, Selected=False | 115×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Selected=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Selected=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (112×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Selected=True
- (root): fill: Button/button-background-primary-default=#1b8354 → —
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- Chevron › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Background/background-primary-400=#54c08a → Global/background-disabled=#e5e7eb

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Selected=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- + Selection indicator (115×6)
- + Selection indicator › Selector (99×6 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Selected=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (115×6)
- + Selection indicator › Selector (99×6 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (111×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Selected=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Selected=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Tab title`: 32×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 32×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Link"
- `Chevron`: 20×20
- `Chevron › elements`: 11×6
- `Chevron › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Selection indicator`: 116×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
- `Selection indicator › Selector`: 100×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Tab title`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Chevron`: 20×20
- `Chevron › elements`: 11×6
- `Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Selected: True→False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: True→False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: False→True | **INSTANT** | 2 |

---
## Header Action

**Description (component description field):**

> This could be indicators for user actions that can be taken or buttons for additional functions.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:242356 |
| Text AR | TEXT=إجراء |
| Text EN | TEXT=Action |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Selected | VARIANT: True · False |
| Icon position | VARIANT: Inline · Top |
| Icon only | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, Selected=True, Icon position=Inline, Icon only=False`)

- `RTL=False, State=Default, Selected=True, Icon position=Inline, Icon only=False` [COMP] — 108×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 21×21
      - `Icon` [VECT] — 21×21 · fill=Icon/icon-oncolor=#ffffff
  - `Tab title` [FRAM] — 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Action"
  - `Selection indicator` [FRAM] — 108×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
    - `Selector` [RECT] — 92×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Selected=True, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Selected=True, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Pressed, Selected=True, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Focused, Selected=True, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-selected=#14573a | Border/border-black=#161616 2 |  |
| RTL=False, State=Disabled, Selected=True, Icon position=Inline, Icon only=False (+2 more) | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  |   |  |
| RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Selected=False, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Focused, Selected=False, Icon position=Inline, Icon only=False | 108×72 | H/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Default, Selected=True, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Default, Selected=True, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Selected=True, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Hovered, Selected=True, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Pressed, Selected=True, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Pressed, Selected=True, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Focused, Selected=True, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-selected=#14573a | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Selected=True, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-primary-selected=#14573a | Border/border-black=#161616 2 |  |
| RTL=False, State=Disabled, Selected=True, Icon position=Top, Icon only=False (+2 more) | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  |   |  |
| RTL=False, State=Disabled, Selected=True, Icon position=Top, Icon only=True (+2 more) | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  |   |  |
| RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Selected=False, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Selected=False, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Focused, Selected=False, Icon position=Top, Icon only=False | 80×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Selected=False, Icon position=Top, Icon only=True | 72×72 | V/CENTER/CENTER · 8 16 8 16 · 4 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Selected=True, Icon position=Inline, Icon only=False; RTL=False, Selected=True, Icon position=Top, Icon only=False; RTL=False, Selected=True, Icon position=Top, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Selected=True, Icon position=Inline, Icon only=False; RTL=False, Selected=True, Icon position=Top, Icon only=False; RTL=False, Selected=True, Icon position=Top, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=True, Icon position=Inline, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (104×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Selected=True, Icon position=Inline, Icon only=False; RTL=False, Selected=True, Icon position=Top, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → —
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Background/background-primary-400=#54c08a → Global/background-disabled=#e5e7eb

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Inline, Icon only=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- + Selection indicator (108×6)
- + Selection indicator › Selector (92×6 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Inline, Icon only=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (108×6)
- + Selection indicator › Selector (92×6 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Inline, Icon only=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (104×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Selected=False, Icon position=Inline, Icon only=False; RTL=False, Selected=False, Icon position=Top, Icon only=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Tab title › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=True, Icon position=Top, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (76×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=True, Icon position=Top, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (68×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Selected=True, Icon position=Top, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → —
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Selection indicator › Selector: fill: Background/background-primary-400=#54c08a → Global/background-disabled=#e5e7eb

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- + Selection indicator (80×6)
- + Selection indicator › Selector (64×6 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (80×6)
- + Selection indicator › Selector (64×6 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (76×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=True
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6
- + Selection indicator (72×6)
- + Selection indicator › Selector (56×6 · fill=Background/background-neutral-400=#9da4ae)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=True
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb
- + Selection indicator (72×6)
- + Selection indicator › Selector (56×6 · fill=Background/background-neutral-800=#1f2a37)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (68×68 · stroke=Border/border-white=#ffffff · sw=2)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Selected=False, Icon position=Top, Icon only=True
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Selected=True, Icon position=Inline, Icon only=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Tab title`: 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Action"
- `Selection indicator`: 108×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
- `Selection indicator › Selector`: 92×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=False, Icon position=Inline, Icon only=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Tab title`: 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Selected=True, Icon position=Top, Icon only=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Tab title`: 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Action"
- `Selection indicator`: 80×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
- `Selection indicator › Selector`: 64×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=True, Icon position=Top, Icon only=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Selection indicator`: 72×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
- `Selection indicator › Selector`: 56×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, State=Default, Selected=False, Icon position=Top, Icon only=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Tab title`: 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Tab title › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Selected=False, Icon position=Top, Icon only=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 21×21
- `Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 12 |
| ON_CLICK | CHANGE_TO | Selected: True→False | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: True→False | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | State: Pressed→Default, Selected: False→True | **INSTANT** | 6 |

---
## Item Icon

**Description (component description field):**

> The Item Icon displays a list item icons.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Swap icon | INSTANCE_SWAP=13758:241724 |
| Contained | VARIANT: True · False |
| On-color | VARIANT: True · False |

### Anatomy (first variant: `Contained=True, On-color=False`)

- `Contained=True, On-color=False` [COMP] — 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Background/background-primary-50=#f3fcf6 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `checkmark-square-02` [INST] ⟶ instance of **checkmark-square-02 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 21×21
      - `Icon` [VECT] — 21×21 · fill=Icon/icon-primary=#1b8354

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Contained=True, On-color=False | 48×48 | H/CENTER/CENTER · 12 12 12 12 · 8 | 8 | Background/background-primary-50=#f3fcf6 |   |  |
| Contained=False, On-color=False (+1 more) | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| Contained=True, On-color=True | 48×48 | H/CENTER/CENTER · 12 12 12 12 · 8 | 8 | Alpha/alpha-white-10=#ffffff@0.1 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Contained=True, On-color=False**
- `checkmark-square-02`: 24×24
- `checkmark-square-02 › elements`: 21×21
- `checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-primary=#1b8354

**Contained=False, On-color=False**
- `checkmark-square-02`: 24×24
- `checkmark-square-02 › elements`: 21×21
- `checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616

**Contained=True, On-color=True**
- `checkmark-square-02`: 24×24
- `checkmark-square-02 › elements`: 21×21
- `checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff

**Contained=False, On-color=True**
- `checkmark-square-02`: 24×24
- `checkmark-square-02 › elements`: 21×21
- `checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Nav Header

**Description (component description field):**

> A Navigation Header is a critical component in design system that guides users through the structure of a website. It typically appears at the top of each page.

### Properties

| Property | Type / options |
|---|---|
| Menu items | BOOLEAN=true |
| Actions | BOOLEAN=true |
| Logo EN | INSTANCE_SWAP=30150:149722 |
| Logo AR | INSTANCE_SWAP=30150:149719 |
| RTL | VARIANT: True · False |
| Breakpoint | VARIANT: <600 · 600>960 · >960 |
| Full-width | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Breakpoint=>960, Full-width=False`)

- `RTL=False, Breakpoint=>960, Full-width=False` [COMP] — 1728×72 · lay=V/CENTER/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-menu=#ffffff · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
  - `Divider` [RECT] *(hidden)* — 1728×1 · fill=Colors/Neutral/300=#d2d6db
  - `Header Content` [FRAM] — 1664×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
    - `Logo & Menu Items` [FRAM] — 1340×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
      - `Logo Placeholder` [INST] ⟶ instance of **Logo Placeholder / RTL=False, Size=Medium, Logo Position=Side** — 154×58 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
        - `Palm & Swords` [VECT] — 48×48 · fill=Background/background-neutral-400=#9da4ae
        - `Platform Logo` [TEXT] — 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Menu Items` [FRAM] — 435×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Header Menu Item` [INST] ⟶ instance of **Header Menu Item / RTL=False, State=Default, Selected=False** — 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `Tab title` [FRAM] — 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `Header Menu Item` [INST] ⟶ instance of **Header Menu Item / RTL=False, State=Default, Selected=False** — 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `Tab title` [FRAM] — 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `Header Menu Item` [INST] ⟶ instance of **Header Menu Item / RTL=False, State=Default, Selected=False** — 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `Tab title` [FRAM] — 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `Header Menu Item` [INST] ⟶ instance of **Header Menu Item / RTL=False, State=Default, Selected=False** — 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `Tab title` [FRAM] — 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `Header Menu Item` [INST] ⟶ instance of **Header Menu Item / RTL=False, State=Default, Selected=False** — 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
          - `Tab title` [FRAM] — 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `Actions` [FRAM] — 324×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Header Action 1` [INST] ⟶ instance of **Header Action / RTL=False, State=Default, Selected=False, Icon position=Inline, Icon only=False** — 108×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 21×21
        - `Tab title` [FRAM] — 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Header Action 2` [INST] ⟶ instance of **Header Action / RTL=False, State=Default, Selected=False, Icon position=Inline, Icon only=False** — 108×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 21×21
        - `Tab title` [FRAM] — 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Header Action 3` [INST] ⟶ instance of **Header Action / RTL=False, State=Default, Selected=True, Icon position=Inline, Icon only=False** — 108×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **login-square-01 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 21×21
        - `Tab title` [FRAM] — 48×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Action"
        - `Selection indicator` [FRAM] — 108×6 · lay=V/CENTER/CENTER · pad=0 8 0 8 · gap=8 · tokens{paddingLeft:spacing-md, paddingRight:spacing-md}
          - `Selector` [RECT] — 92×6 · r=9999 · fill=Background/background-primary-400=#54c08a · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Breakpoint=>960, Full-width=False (+1 more) | 1728×72 | V/CENTER/CENTER · 0 32 0 32 · 0 |  | Background/background-menu=#ffffff |   |  |
| RTL=False, Breakpoint=600>960, Full-width=False | 960×72 | V/CENTER/CENTER · 0 32 0 32 · 0 |  | Background/background-menu=#ffffff |   |  |
| RTL=False, Breakpoint=<600, Full-width=False | 600×72 | V/CENTER/CENTER · 0 16 0 16 · 0 |  | Background/background-menu=#ffffff |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Breakpoint=>960, Full-width=False**
- `Header Content`: 1664×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 1340×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo Placeholder`: 154×58 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo Placeholder › Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo Placeholder › Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Header Content › Logo & Menu Items › Menu Items`: 435×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#2`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#2`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#2`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#2`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#2`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#2`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#3`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#3`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#3`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#3`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#3`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#3`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#4`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#4`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#4`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#4`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#4`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#4`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#5`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#5`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#5`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#5`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#5`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#5`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- … 21 more layers (data JSON)

**RTL=False, Breakpoint=>960, Full-width=True**
- `Header Content`: 1664×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items`: 1340×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo Placeholder`: 154×58 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo Placeholder › Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo Placeholder › Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Header Content › Logo & Menu Items › Menu Items`: 435×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#2`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#2`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#2`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#2`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#2`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#2`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#3`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#3`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#3`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#3`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#3`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#3`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#4`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#4`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#4`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#4`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#4`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#4`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item#5`: 87×72 · lay=H/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title#5`: 31×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Tab title › Text#5`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron#5`: 20×20
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements#5`: 11×6
- `Header Content › Logo & Menu Items › Menu Items › Header Menu Item › Chevron › elements › Icon#5`: 6×11 · fill=Icon/icon-default=#161616 · rot=90
- … 19 more layers (data JSON)

**RTL=False, Breakpoint=600>960, Full-width=False**
- `Header Content`: 896×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Nav Menu`: 144×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Nav Menu › Header Menu`: 40×72 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Nav Menu › Header Menu › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon`: 24×24
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon › elements`: 12×18 · rot=-90
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Header Content › Logo & Menu Items`: 608×58 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo Placeholder`: 154×58 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo Placeholder › Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo Placeholder › Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Header Content › Actions`: 144×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Actions › Header Action 1`: 72×72 · lay=V/CENTER/CENTER · pad=8 16 8 16 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Actions › Header Action 1 › Leading Icon`: 24×24
- `Header Content › Actions › Header Action 1 › Leading Icon › elements`: 21×21
- `Header Content › Actions › Header Action 1 › Leading Icon › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Utility Menu`: 40×72 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Actions › Utility Menu › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Utility Menu › Button › Leading Icon`: 24×24
- `Header Content › Actions › Utility Menu › Button › Leading Icon › elements`: 12×18 · rot=-90
- `Header Content › Actions › Utility Menu › Button › Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616

**RTL=False, Breakpoint=<600, Full-width=False**
- `Header Content`: 568×72 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Nav Menu`: 144×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Nav Menu › Header Menu`: 40×72 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Nav Menu › Header Menu › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon`: 24×24
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon › elements`: 15×3
- `Header Content › Nav Menu › Header Menu › Button › Leading Icon › elements › Icon`: 15×3 · fill=Icon/icon-default=#161616
- `Header Content › Logo & Menu Items`: 280×58 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Logo & Menu Items › Logo & GOV Identifier`: 280×58 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:spacing-xl}
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › Logo Placeholder`: 154×58 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › Logo Placeholder › Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Header Content › Logo & Menu Items › Logo & GOV Identifier › Logo Placeholder › Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Header Content › Actions`: 144×72 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Header Content › Actions › Utility Menu`: 40×72 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Header Content › Actions › Utility Menu › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Utility Menu › Button › menu-01`: 24×24
- `Header Content › Actions › Utility Menu › Button › menu-01 › elements`: 18×16
- `Header Content › Actions › Utility Menu › Button › menu-01 › elements › Icon`: 18×16 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Header Menu Item ⟶ Header Menu Item :: RTL=False, State=Hovered, Selected=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Header Menu Item ⟶ Header Menu Item :: RTL=True, State=Hovered, Selected=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Header Menu ⟶ Header Menu :: Opened=False, State=Hovered | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Header Action 1 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Header Action 2 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Header Action 2 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Header Action 1 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=False, State=Default, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=True, Icon position=Inline, Icon only=False | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 1 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 2 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 3 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 2 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Header Action 1 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | **INSTANT** | 1 |

---
## Header Menu

**Description (component description field):**

> This could be indicators for user actions that can be buttons for additional functions.

### Properties

| Property | Type / options |
|---|---|
| Opened | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused |

### Anatomy (first variant: `Opened=False, State=Default`)

- `Opened=False, State=Default` [COMP] — 40×72 · lay=V/CENTER/CENTER · pad=8 0 8 0 · gap=4 · r=4 · tokens{itemSpacing:spacing-xs, paddingTop:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 12×18 · rot=-90
        - `Icon` [VECT] — 18×12 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Opened=False, State=Default (+7 more) | 40×72 | V/CENTER/CENTER · 8 0 8 0 · 4 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused

#### Default → **Hovered**  · applies to 2 group(s): Opened=False; Opened=True
- Button: fill: — → Button/button-background-neutral-default=#f3f4f6

#### Default → **Pressed**  · applies to 2 group(s): Opened=False; Opened=True
- Button: fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 2 group(s): Opened=False; Opened=True
- Button: stroke: — → Border/border-black=#161616; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Opened=False, State=Default**
- `Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 24×24
- `Button › Leading Icon › elements`: 12×18 · rot=-90
- `Button › Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616

**Opened=True, State=Default**
- `Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 24×24
- `Button › Leading Icon › elements`: 12×18 · rot=-90
- `Button › Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 2 |
| ON_PRESS | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Pressed, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Opened: False→True, State: Pressed→Default | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Opened: True→False, State: Pressed→Default | **INSTANT** | 1 |

---
## Nav Header Sub-Menu

**Description (component description field):**

> The Header Sub-Menu displays a list item style.

### Properties

| Property | Type / options |
|---|---|
| 2nd col | BOOLEAN=true |
| 3rd col | BOOLEAN=true |
| 4th col | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Full width | VARIANT: True · False |
| Background | VARIANT: Default · Dark green |
| Link style | VARIANT: Text only · Simple icon · Boxed icon |

### Anatomy (first variant: `RTL=False, Full width=True, Background=Default, Link style=Text only`)

- `RTL=False, Full width=True, Background=Default, Link style=Text only` [COMP] — 1440×276 · lay=V/MIN/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-menu=#ffffff · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
  - `Content` [FRAM] — 1280×276 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
    - `Section col 1` [FRAM] — 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
      - `Group label` [FRAM] — 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Text` [TEXT] — 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
      - `Navigation` [FRAM] — 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Section col 2` [FRAM] — 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
      - `Group label` [FRAM] — 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Text` [TEXT] — 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
      - `Navigation` [FRAM] — 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Section col 3` [FRAM] — 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
      - `Group label` [FRAM] — 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Text` [TEXT] — 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
      - `Navigation` [FRAM] — 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Section col 4` [FRAM] — 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
      - `Group label` [FRAM] — 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
        - `Text` [TEXT] — 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
      - `Navigation` [FRAM] — 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
        - `Header Sub-menu Item` [INST] ⟶ instance of **Header Sub-menu Item / RTL=False, State=Default, On-color=False** — 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
          - `Item Icon` [INST] ⟶ instance of **Item Icon / Contained=False, On-color=False** *(hidden)* — 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
          - `Content` [FRAM] — 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Full width=True, Background=Default, Link style=Text only (+1 more) | 1440×276 | V/MIN/CENTER · 0 32 0 32 · 0 |  | Background/background-menu=#ffffff |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=True, Background=Dark green, Link style=Text only (+1 more) | 1440×276 | V/MIN/CENTER · 0 32 0 32 · 0 |  | Background/background-SA-Flag=#074d31 |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=True, Background=Default, Link style=Boxed icon | 1440×372 | V/MIN/CENTER · 0 32 0 32 · 0 |  | Background/background-menu=#ffffff |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=True, Background=Dark green, Link style=Boxed icon | 1440×372 | V/MIN/CENTER · 0 32 0 32 · 0 |  | Background/background-SA-Flag=#074d31 |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=False, Background=Default, Link style=Text only (+1 more) | 1320×260 | V/MIN/CENTER · 24 24 24 24 · 0 | 8 | Background/background-menu=#ffffff |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=False, Background=Dark green, Link style=Text only (+1 more) | 1320×260 | V/MIN/CENTER · 24 24 24 24 · 0 | 8 | Background/background-SA-Flag=#074d31 |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=False, Background=Default, Link style=Boxed icon | 1320×356 | V/MIN/CENTER · 24 24 24 24 · 0 | 8 | Background/background-menu=#ffffff |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Full width=False, Background=Dark green, Link style=Boxed icon | 1320×356 | V/MIN/CENTER · 24 24 24 24 · 0 | 8 | Background/background-SA-Flag=#074d31 |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Full width=True, Background=Default, Link style=Text only**
- `Content`: 1280×276 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#4`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#4`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#4`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#4`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 2 › Group label › Text`: 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 2 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- … 56 more layers (data JSON)

**RTL=False, Full width=True, Background=Dark green, Link style=Text only**
- `Content`: 1280×276 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#4`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#4`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#4`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#4`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 2 › Group label › Text`: 270×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 2 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 270×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content#2`: 270×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- … 56 more layers (data JSON)

**RTL=False, Full width=True, Background=Default, Link style=Simple icon**
- `Content`: 1280×276 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-default=#161616
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#2`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#2`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#2`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#2`: 21×21 · fill=Icon/icon-default=#161616
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#3`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#3`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#3`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#3`: 21×21 · fill=Icon/icon-default=#161616
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#4`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#4`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#4`: 21×21
- … 59 more layers (data JSON)

**RTL=False, Full width=True, Background=Dark green, Link style=Simple icon**
- `Content`: 1280×276 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#2`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#2`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#2`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#2`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#3`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#3`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#3`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#3`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 230×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 230×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#4`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#4`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#4`: 21×21
- … 59 more layers (data JSON)

**RTL=False, Full width=True, Background=Default, Link style=Boxed icon**
- `Content`: 1280×372 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×308 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×268 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Background/background-primary-50=#f3fcf6 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-primary=#1b8354
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text`: 206×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#2`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Background/background-primary-50=#f3fcf6 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#2`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#2`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#2`: 21×21 · fill=Icon/icon-primary=#1b8354
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text#2`: 206×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#3`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Background/background-primary-50=#f3fcf6 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#3`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#3`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#3`: 21×21 · fill=Icon/icon-primary=#1b8354
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text#3`: 206×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- … 57 more layers (data JSON)

**RTL=False, Full width=True, Background=Dark green, Link style=Boxed icon**
- `Content`: 1280×372 · lay=H/MIN/MIN/wrap · pad=32 0 32 0 · gap=24 · tokens{itemSpacing:spacing-3xl, paddingTop:spacing-4xl, paddingBottom:spacing-4xl}
- `Content › Section col 1`: 302×308 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 302×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 270×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 302×268 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Alpha/alpha-white-10=#ffffff@0.1 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text`: 206×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#2`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Alpha/alpha-white-10=#ffffff@0.1 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#2`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#2`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#2`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text#2`: 206×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon#3`: 48×48 · lay=H/CENTER/CENTER · pad=12 12 12 12 · gap=8 · r=8 · fill=Alpha/alpha-white-10=#ffffff@0.1 · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02#3`: 24×24
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements#3`: 21×21
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Item Icon › checkmark-square-02 › elements › Icon#3`: 21×21 · fill=Icon/icon-oncolor=#ffffff
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 206×48 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 206×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Helper Text#3`: 206×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Menu item helper text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 302×64 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- … 57 more layers (data JSON)

**RTL=False, Full width=False, Background=Default, Link style=Text only**
- `Content`: 1272×212 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:spacing-3xl}
- `Content › Section col 1`: 300×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 300×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 268×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 300×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#4`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#4`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#4`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#4`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2`: 300×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Group label`: 300×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 2 › Group label › Text`: 268×28 · fill=Text/text-primary=#1b8354 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 2 › Navigation`: 300×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item#2`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- … 56 more layers (data JSON)

**RTL=False, Full width=False, Background=Dark green, Link style=Text only**
- `Content`: 1272×212 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:spacing-3xl}
- `Content › Section col 1`: 300×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Group label`: 300×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 1 › Group label › Text`: 268×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 1 › Navigation`: 300×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#2`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#2`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#2`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#3`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#3`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#3`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#3`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#3`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item#4`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content#4`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text#4`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge#4`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 1 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text#4`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2`: 300×212 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Group label`: 300×28 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Content › Section col 2 › Group label › Text`: 268×28 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Section col 2 › Navigation`: 300×172 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge`: 268×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content › Text and supporting text › Text and badge › Lead Text`: 124×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Menu Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item#2`: 300×40 · lay=H/MIN/MIN · pad=8 16 8 16 · gap=16 · r=8 · tokens{itemSpacing:spacing-xl, paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-xl, paddingBottom:spacing-md, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
- `Content › Section col 2 › Navigation › Header Sub-menu Item › Content#2`: 268×24 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- … 56 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=False, State=Hovered, On-color=False | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=False, State=Hovered, On-color=True | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=True, State=Hovered, On-color=True | **INSTANT** | 96 |
| ON_HOVER | CHANGE_TO | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=True, State=Hovered, On-color=False | **INSTANT** | 96 |

---
## Logo Placeholder

**Description (component description field):**

> The Logo placeholder likely represents a company or website logo that helps to establish brand identity.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |
| Size | VARIANT: Large · Medium · Small |
| Logo Position | VARIANT: Side · Top |

### Anatomy (first variant: `RTL=True, Size=Large, Logo Position=Side`)

- `RTL=True, Size=Large, Logo Position=Side` [COMP] — 157×74 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
  - `شعار المنصة` [TEXT] — 77×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="شعار المنصة" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Palm & Swords` [VECT] — 64×64 · fill=Background/background-neutral-400=#9da4ae

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, Logo Position=Side | 183×74 | H/MIN/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |
| RTL=False, Size=Large, Logo Position=Top | 111×106 | V/CENTER/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |
| RTL=False, Size=Small, Logo Position=Side | 125×42 | H/MIN/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |
| RTL=False, Size=Small, Logo Position=Top | 85×68 | V/CENTER/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |
| RTL=False, Size=Medium, Logo Position=Side | 154×58 | H/MIN/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |
| RTL=False, Size=Medium, Logo Position=Top | 98×86 | V/CENTER/CENTER · 5 4 5 4 · 8 |  | Background/background-white=#ffffff |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, Logo Position=Side**
- `Palm & Swords`: 64×64 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 103×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, Logo Position=Top**
- `Palm & Swords`: 64×64 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 103×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Small, Logo Position=Side**
- `Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=Small, Logo Position=Top**
- `Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Size=Medium, Logo Position=Side**
- `Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Size=Medium, Logo Position=Top**
- `Palm & Swords`: 48×48 · fill=Background/background-neutral-400=#9da4ae
- `Platform Logo`: 90×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Platform Logo" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

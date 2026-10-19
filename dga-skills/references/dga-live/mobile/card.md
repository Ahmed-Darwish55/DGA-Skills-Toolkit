# Card — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `11367:20133`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 11367-20133

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Card

> A card serves as a container for information and actions related to a specific concept or object. It typically resembles a rectangular box that combines images, text, and potentially some interactive elements. Cards enhance the visibility of information and facilitate predictable patterns.

> Resources

## Component sets on this page (1)

- **Card** — 102 variants · `11370:26270`

---
## Card

### Properties

| Property | Type / options |
|---|---|
| Secondary Action | BOOLEAN=true |
| Show Tags | BOOLEAN=false |
| Show Rating | BOOLEAN=false |
| Description AR | TEXT=نص إضافي لمحتوى البطاقة |
| Title AR | TEXT=عنوان البطاقة |
| Featured icon | BOOLEAN=true |
| Show Title | BOOLEAN=true |
| Title EN | TEXT=Card Title |
| Primary Action | BOOLEAN=true |
| Show Description  | BOOLEAN=true |
| 🔁 Swap Icon | INSTANCE_SWAP=10750:58068 |
| Image | BOOLEAN=false |
| Custom Component | BOOLEAN=false |
| Description EN | TEXT=Card content placeholder text  |
| 🔁 Content Swap | INSTANCE_SWAP=1823:28658 |
| RTL | VARIANT: no · yes |
| Type | VARIANT: Default · Expanded · Selectable |
| State | VARIANT: Default · Hover · Focused · Disabled · Default (Expanded) · Hover (Expanded) · Focused (Expanded) · Disabled (Expanded) · Default (Selected) · Hover (Selected) · Focused (Selected) · Disabled (Selected) |
| Effect | VARIANT: With Sahdow · No Shadow · Stroke |

### Anatomy (first variant: `RTL=no, Type=Default, State=Default, Effect=With Sahdow`)

- `RTL=no, Type=Default, State=Default, Effect=With Sahdow` [COMP] — 343×232 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=24 · r=16 · fill=Background/background-card=#ffffff · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Card/card-lg-gap, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-lg, topRightRadius:radius-lg, bottomLeftRadius:radius-lg, bottomRightRadius:radius-lg}
  - `Image` [RECT] *(hidden)* — 311×160 · r=8 · fill=IMAGE:FILL · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Large, Color=Brand, Style=Light, Circle=True** — 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `checkmark-circle-02` [INST] ⟶ instance of **checkmark-circle-02 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 22×22
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-success=#067647
  - `Content` [FRAM] — 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Card Title` [TEXT] — 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
    - `Card content placeholder text goes here` [TEXT] — 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
  - `Swap Placeholder` [INST] ⟶ instance of **Swap Placeholder** *(hidden)* — 311×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Helper Text` [TEXT] — 237×20 · fill=Text/text-brand-primary=#14573a · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT"
  - `Tags` [FRAM] *(hidden)* — 154×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label"
      - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label"
      - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label"
      - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 9×7
          - `Icon` [VECT] — 9×7 · fill=Tag/tag-icon-neutral=#1f2a37
  - `Rating` [FRAM] *(hidden)* — 311×54 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
    - `Rating` [INST] ⟶ instance of **Rating / Size=Small, Brand=No** — 176×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 32×32
        - `Star 1` [STAR] — 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 32×32
        - `Star 1` [STAR] — 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 32×32
        - `Star 1` [STAR] — 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Half, Style=Default** — 32×32
        - `Star 1` [STAR] — 32×32 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
        - `Star 2` [VECT] — 15×30 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
        - `Star 3` [VECT] — 17×30 · r=2 · fill=Background/background-neutral-300=#d2d6db · rot=-180 · tokens{cornerRadius:radius-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Normal, Style=Default** — 32×32
        - `Star 1` [STAR] — 32×32 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}
    - `12 reviews` [TEXT] — 59×18 · fill=Text 2/text-tertiary=#4d5761 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="12 reviews"
  - `Actions` [FRAM] — 311×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO** — 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 12×18 · rot=-90
          - `Icon` [VECT] — 18×12 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 22×22
          - `Icon` [VECT] — 22×22 · fill=Icon/icon-default=#161616
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO** — 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 12×18 · rot=-90
          - `Icon` [VECT] — 18×12 · fill=Icon/icon-oncolor=#ffffff
      - `Text wrapper` [FRAM] — 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 22×22
          - `Icon` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=no, Type=Default, State=Default, Effect=With Sahdow (+2 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Default, State=Default, Effect=No Shadow (+2 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=no, Type=Default, State=Default, Effect=Stroke (+2 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Default, State=Default, Effect=With Sahdow (+2 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Default, State=Default, Effect=No Shadow (+2 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=yes, Type=Default, State=Default, Effect=Stroke (+2 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Expanded, State=Focused, Effect=With Sahdow (+1 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Expanded, State=Focused, Effect=No Shadow (+3 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 |  |
| RTL=yes, Type=Expanded, State=Focused, Effect=With Sahdow (+1 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Expanded, State=Focused, Effect=No Shadow (+3 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 |  |
| RTL=no, Type=Expanded, State=Disabled, Effect=With Sahdow (+3 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=no, Type=Expanded, State=Disabled, Effect=Stroke (+1 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=yes, Type=Expanded, State=Disabled, Effect=With Sahdow (+3 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=yes, Type=Expanded, State=Disabled, Effect=Stroke (+1 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=no, Type=Expanded, State=Hover, Effect=With Sahdow (+1 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Expanded, State=Hover, Effect=No Shadow (+1 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=no, Type=Expanded, State=Hover, Effect=Stroke (+1 more) | 343×232 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Expanded, State=Hover, Effect=With Sahdow (+1 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Expanded, State=Hover, Effect=No Shadow (+1 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=yes, Type=Expanded, State=Hover, Effect=Stroke (+1 more) | 343×232 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Default, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Default, Effect=No Shadow (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=no, Type=Selectable, State=Default, Effect=Stroke (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Selectable, State=Default, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Default, Effect=No Shadow (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=yes, Type=Selectable, State=Default, Effect=Stroke (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Hover, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Hover, Effect=No Shadow (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=no, Type=Selectable, State=Hover, Effect=Stroke (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Selectable, State=Hover, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Hover, Effect=No Shadow (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=yes, Type=Selectable, State=Hover, Effect=Stroke (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Focused, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Focused, Effect=No Shadow (+3 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 |  |
| RTL=yes, Type=Selectable, State=Focused, Effect=With Sahdow (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Focused, Effect=No Shadow (+3 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 |  |
| RTL=no, Type=Selectable, State=Disabled, Effect=With Sahdow (+3 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=no, Type=Selectable, State=Disabled, Effect=Stroke (+1 more) | 343×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=yes, Type=Selectable, State=Disabled, Effect=With Sahdow (+3 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=yes, Type=Selectable, State=Disabled, Effect=Stroke (+1 more) | 343×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hover · Focused · Disabled · Default (Expanded) · Hover (Expanded) · Focused (Expanded) · Disabled (Expanded) · Default (Selected) · Hover (Selected) · Focused (Selected) · Disabled (Selected) · ⚠️ spelling as in Figma: `Hover` = **Hovered** (source kept unchanged; treat as the normalised state)

#### Default → **Default (Expanded)**  · applies to 6 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Expanded, Effect=No Shadow; RTL=no, Type=Expanded, Effect=Stroke; RTL=yes, Type=Expanded, Effect=With Sahdow …
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 4 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Expanded, Effect=No Shadow; RTL=yes, Type=Expanded, Effect=With Sahdow; RTL=yes, Type=Expanded, Effect=No Shadow
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Focused (Expanded)**  · applies to 4 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Expanded, Effect=No Shadow; RTL=yes, Type=Expanded, Effect=With Sahdow; RTL=yes, Type=Expanded, Effect=No Shadow
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Selectable, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=no, Type=Expanded, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Hover**  · applies to 12 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Expanded, Effect=No Shadow; RTL=no, Type=Expanded, Effect=Stroke; RTL=yes, Type=Expanded, Effect=With Sahdow …
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb

#### Default → **Hover (Expanded)**  · applies to 6 group(s): RTL=no, Type=Expanded, Effect=With Sahdow; RTL=no, Type=Expanded, Effect=No Shadow; RTL=no, Type=Expanded, Effect=Stroke; RTL=yes, Type=Expanded, Effect=With Sahdow …
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expanded, Effect=No Shadow; RTL=no, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=no, Type=Expanded, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=no, Type=Expanded, Effect=Stroke; RTL=yes, Type=Expanded, Effect=Stroke
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Focused (Expanded)**  · applies to 2 group(s): RTL=no, Type=Expanded, Effect=Stroke; RTL=yes, Type=Expanded, Effect=Stroke
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expanded, Effect=Stroke; RTL=no, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=no, Type=Expanded, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expanded, Effect=With Sahdow; RTL=yes, Type=Selectable, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=yes, Type=Expanded, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expanded, Effect=No Shadow; RTL=yes, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=yes, Type=Expanded, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expanded, Effect=Stroke; RTL=yes, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Expanded)**  · applies to 1 group(s): RTL=yes, Type=Expanded, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Default (Selected)**  · applies to 6 group(s): RTL=no, Type=Selectable, Effect=With Sahdow; RTL=no, Type=Selectable, Effect=No Shadow; RTL=no, Type=Selectable, Effect=Stroke; RTL=yes, Type=Selectable, Effect=With Sahdow …
- *(no visual difference captured at root/child level)*

#### Default → **Hover (Selected)**  · applies to 6 group(s): RTL=no, Type=Selectable, Effect=With Sahdow; RTL=no, Type=Selectable, Effect=No Shadow; RTL=no, Type=Selectable, Effect=Stroke; RTL=yes, Type=Selectable, Effect=With Sahdow …
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb

#### Default → **Focused**  · applies to 4 group(s): RTL=no, Type=Selectable, Effect=With Sahdow; RTL=no, Type=Selectable, Effect=No Shadow; RTL=yes, Type=Selectable, Effect=With Sahdow; RTL=yes, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Focused (Selected)**  · applies to 4 group(s): RTL=no, Type=Selectable, Effect=With Sahdow; RTL=no, Type=Selectable, Effect=No Shadow; RTL=yes, Type=Selectable, Effect=With Sahdow; RTL=yes, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=no, Type=Selectable, Effect=Stroke; RTL=yes, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Focused (Selected)**  · applies to 2 group(s): RTL=no, Type=Selectable, Effect=Stroke; RTL=yes, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=With Sahdow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=No Shadow
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled (Selected)**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=Stroke
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/Bg-icon-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=no, Type=Default, State=Default, Effect=With Sahdow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
- `Content › Card content placeholder text goes here`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
- `Actions`: 311×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"
- `Actions › Button#2`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"

**RTL=no, Type=Default, State=Default, Effect=No Shadow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
- `Content › Card content placeholder text goes here`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
- `Actions`: 311×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"
- `Actions › Button#2`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"

**RTL=no, Type=Default, State=Default, Effect=Stroke**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
- `Content › Card content placeholder text goes here`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
- `Actions`: 311×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"
- `Actions › Button#2`: 80×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action"

**RTL=yes, Type=Default, State=Default, Effect=With Sahdow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة"
- `Content › نص إضافي لمحتوى البطاقة`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة"
- `Actions`: 311×44 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="إجراء"
- `Actions › Button#2`: 99×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي"

**RTL=yes, Type=Default, State=Default, Effect=No Shadow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة"
- `Content › نص إضافي لمحتوى البطاقة`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة"
- `Actions`: 311×44 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="إجراء"
- `Actions › Button#2`: 99×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي"

**RTL=yes, Type=Default, State=Default, Effect=Stroke**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة"
- `Content › نص إضافي لمحتوى البطاقة`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة"
- `Actions`: 311×44 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="إجراء"
- `Actions › Button#2`: 99×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي"

**RTL=no, Type=Expanded, State=Default, Effect=With Sahdow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
- `Content › Card content placeholder text goes here`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
- `Actions`: 311×44 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › arrow-up-01`: 24×24
- `Actions › Button › arrow-up-01 › elements`: 13×7
- `Actions › Button › arrow-up-01 › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616 · rot=-90

**RTL=no, Type=Expanded, State=Default, Effect=No Shadow**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 311×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 311×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title"
- `Content › Card content placeholder text goes here`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text "
- `Actions`: 311×44 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › arrow-up-01`: 24×24
- `Actions › Button › arrow-up-01 › elements`: 13×7
- `Actions › Button › arrow-up-01 › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616 · rot=-90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | **SMART_ANIMATE 300ms EASE_OUT** | 102 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Large/Hovered/Subtle/True/False | **INSTANT** | 48 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox/False/False/Hovered/Small/Brand | **INSTANT** | 48 |
| ON_HOVER | CHANGE_TO | State: Default→Hover | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | State: Default (Expanded)→Hover (Expanded) | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default (Expanded) | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover (Expanded)→Default | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_HOVER | CHANGE_TO | State: Default→Hover | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_HOVER | CHANGE_TO | State: Default (Selected)→Hover (Selected) | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default (Selected) | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover (Selected)→Default | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Large/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Large/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Large/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |

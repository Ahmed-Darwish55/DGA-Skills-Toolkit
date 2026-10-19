# Card — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `8940:22264`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 8940-22264

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Card

> A card serves as a container for information and actions related to a specific concept or object. It typically resembles a rectangular box that combines images, text, and potentially some interactive elements. Cards enhance the visibility of information and facilitate predictable patterns.

> Resources

## Component sets on this page (1)

- **Card** — 102 variants · `30195:10358`

---
## Card

**Description (component description field):**

> A card serves as a container for information and actions related to a specific concept or object. It typically resembles a rectangular box that combines images, text, and potentially some interactive elements.
> Cards enhance the visibility of information and facilitate predictable patterns.

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
| 🔁 Swap Icon | INSTANCE_SWAP=31864:190028 |
| Image | BOOLEAN=false |
| Custom Component | BOOLEAN=false |
| Description EN | TEXT=Card content placeholder text  |
| 🔁 Content Swap | INSTANCE_SWAP=30150:55097 |
| RTL | VARIANT: no · yes |
| Type | VARIANT: Default · Expandable · Selectable |
| State | VARIANT: Default · Hover · Focused · Disabled |
| Effect | VARIANT: With Sahdow · No Shadow · Stroke |
| Expanded | VARIANT: False · True |
| Selected | VARIANT: False · True |

### Anatomy (first variant: `RTL=no, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False`)

- `RTL=no, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False` [COMP] — 360×228 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=24 · r=16 · fill=Background/background-card=#ffffff · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Card/card-lg-gap, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-lg, topRightRadius:radius-lg, bottomLeftRadius:radius-lg, bottomRightRadius:radius-lg}
  - `Image` [RECT] *(hidden)* — 325×250 · r=8 · fill=IMAGE:FILL · tokens{topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Large, Color=Brand, Style=Light, Circle=True** — 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `checkmark-circle-02` [INST] ⟶ instance of **checkmark-circle-02 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 22×22
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-success=#067647
  - `Content` [FRAM] — 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Card Title` [TEXT] — 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
    - `Card content placeholder text goes here` [TEXT] — 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_Swap Placeholder` [INST] ⟶ instance of **_Swap Placeholder / Size=Default** *(hidden)* — 328×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Helper Text` [TEXT] — 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Tags` [FRAM] *(hidden)* — 154×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
    - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Style=Neutral, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
      - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
        - `elements` [GROU] — 13×12
          - `Icon` [VECT] — 13×12 · fill=Icon/icon-default=#161616
  - `Rating` [FRAM] *(hidden)* — 328×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:spacing-xs}
    - `Rating` [INST] ⟶ instance of **Rating / Size=Small, Brand=No** — 136×24 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 24×24 · r=1 1 9999 1
        - `Star 1` [STAR] — 24×24 · r=1 · fill=Background/background-secondary=#dba102
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 24×24 · r=1 1 9999 1
        - `Star 1` [STAR] — 24×24 · r=1 · fill=Background/background-secondary=#dba102
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Selected, Style=Default** — 24×24 · r=1 1 9999 1
        - `Star 1` [STAR] — 24×24 · r=1 · fill=Background/background-secondary=#dba102
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Half, Style=Default** — 24×24 · r=1 1 9999 1
        - `Star 1` [STAR] — 24×24 · r=1 · fill=Colors/Gray neutral/300=#d2d6db
        - `Star 2` [VECT] — 12×23 · r=1 · fill=Background/background-secondary=#dba102
        - `Star 3` [VECT] — 13×23 · r=1 · fill=Background/background-neutral-200=#e5e7eb · rot=-180
      - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Small, State=Normal, Style=Default** — 24×24 · r=1 1 9999 1
        - `Star 1` [STAR] — 24×24 · r=1 · fill=Background/background-neutral-200=#e5e7eb
    - `12 reviews` [TEXT] — 59×18 · fill=Text 2/text-tertiary=#4d5761 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="12 reviews" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
  - `Actions` [FRAM] — 328×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02-round` [INST] ⟶ instance of **arrow-right-02-round / Property 1=outline** *(hidden)* — 24×24
        - `elements` [GROU] — 18×14
          - `Vector` [VECT] — 18×14 · fill=Colors/Base/black=#000000
      - `Text wrapper` [FRAM] — 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 22×22
          - `Icon` [VECT] — 22×22 · fill=Icon/icon-default=#161616
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False** — 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 12×18 · rot=-90
          - `Icon` [VECT] — 18×12 · fill=Icon/icon-oncolor=#ffffff
      - `Text wrapper` [FRAM] — 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
        - `elements` [GROU] — 22×22
          - `Icon` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=no, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Default, State=Default, Effect=No Shadow, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=no, Type=Default, State=Default, Effect=Stroke, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Default, State=Default, Effect=No Shadow, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=yes, Type=Default, State=Default, Effect=Stroke, Expanded=False, Selected=False (+2 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Expandable, State=Focused, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Expandable, State=Focused, Effect=No Shadow, Expanded=False, Selected=False (+3 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 |  |
| RTL=yes, Type=Expandable, State=Focused, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Expandable, State=Focused, Effect=No Shadow, Expanded=False, Selected=False (+3 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-black=#161616 2 |  |
| RTL=no, Type=Expandable, State=Disabled, Effect=With Sahdow, Expanded=False, Selected=False (+3 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=no, Type=Expandable, State=Disabled, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=yes, Type=Expandable, State=Disabled, Effect=With Sahdow, Expanded=False, Selected=False (+3 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=yes, Type=Expandable, State=Disabled, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=no, Type=Expandable, State=Hover, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Expandable, State=Hover, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=no, Type=Expandable, State=Hover, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Expandable, State=Hover, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Expandable, State=Hover, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=yes, Type=Expandable, State=Hover, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×228 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Default, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Default, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=no, Type=Selectable, State=Default, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Selectable, State=Default, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Default, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff |   |  |
| RTL=yes, Type=Selectable, State=Default, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-card=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Hover, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Hover, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=no, Type=Selectable, State=Hover, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=yes, Type=Selectable, State=Hover, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Hover, Effect=No Shadow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=yes, Type=Selectable, State=Hover, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=no, Type=Selectable, State=Focused, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=no, Type=Selectable, State=Focused, Effect=No Shadow, Expanded=False, Selected=False (+3 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 |  |
| RTL=yes, Type=Selectable, State=Focused, Effect=With Sahdow, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=yes, Type=Selectable, State=Focused, Effect=No Shadow, Expanded=False, Selected=False (+3 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Background/background-neutral-50=#f9fafb | Border/border-black=#161616 2 |  |
| RTL=no, Type=Selectable, State=Disabled, Effect=With Sahdow, Expanded=False, Selected=False (+3 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=no, Type=Selectable, State=Disabled, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MIN · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |
| RTL=yes, Type=Selectable, State=Disabled, Effect=With Sahdow, Expanded=False, Selected=False (+3 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb |   |  |
| RTL=yes, Type=Selectable, State=Disabled, Effect=Stroke, Expanded=False, Selected=False (+1 more) | 360×164 | V/MIN/MAX · 16 16 16 16 · 24 | 16 | Global/background-disabled=#e5e7eb | Global/border-disabled=#9da4ae 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hover · Focused · Disabled · ⚠️ spelling as in Figma: `Hover` = **Hovered** (source kept unchanged; treat as the normalised state)

#### Default → **Focused**  · applies to 8 group(s): RTL=no, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=No Shadow, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=No Shadow, Expanded=False, Selected=False …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=With Sahdow, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Hover**  · applies to 18 group(s): RTL=no, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=No Shadow, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=Stroke, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False …
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expandable, Effect=No Shadow, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=No Shadow, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=no, Type=Expandable, Effect=Stroke, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=Stroke, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=Stroke, Expanded=True, Selected=False; RTL=yes, Type=Expandable, Effect=Stroke, Expanded=True, Selected=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=no, Type=Expandable, Effect=Stroke, Expanded=False, Selected=False; RTL=no, Type=Expandable, Effect=Stroke, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expandable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=With Sahdow, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expandable, Effect=No Shadow, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=No Shadow, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=yes, Type=Expandable, Effect=Stroke, Expanded=False, Selected=False; RTL=yes, Type=Expandable, Effect=Stroke, Expanded=True, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 4 group(s): RTL=no, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=no, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=False; RTL=yes, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=False; RTL=yes, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=no, Type=Selectable, Effect=Stroke, Expanded=False, Selected=False; RTL=yes, Type=Selectable, Effect=Stroke, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=Stroke, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=Stroke, Expanded=False, Selected=False
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

#### Default → **Hover**  · applies to 6 group(s): RTL=no, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True; RTL=no, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=True; RTL=no, Type=Selectable, Effect=Stroke, Expanded=False, Selected=True; RTL=yes, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True …
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Focused**  · applies to 4 group(s): RTL=no, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True; RTL=no, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=True; RTL=yes, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True; RTL=yes, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: — → Border/border-black=#161616; sw: — → 2
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=no, Type=Selectable, Effect=Stroke, Expanded=False, Selected=True; RTL=yes, Type=Selectable, Effect=Stroke, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Background/background-neutral-50=#f9fafb; stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=no, Type=Selectable, Effect=Stroke, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › Card Title: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › Card content placeholder text goes here: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=With Sahdow, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; fx: DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) → —
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=No Shadow, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): RTL=yes, Type=Selectable, Effect=Stroke, Expanded=False, Selected=True
- (root): fill: Background/background-card=#ffffff → Global/background-disabled=#e5e7eb; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- Featured icon: fill: Icon/background-brand-light=#f3fcf6 → Global/background-inverse-disabled=#f3f4f6
- Featured icon › checkmark-circle-02 › elements › Icon: fill: Icon/icon-success=#067647 → Icon/icon-default-400=#9da4ae
- Content › عنوان البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Content › نص إضافي لمحتوى البطاقة: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Checkbox › _CheckboxBase1: fill: Controls/control-primary-checked=#1b8354 → Global/background-disabled=#e5e7eb
- Checkbox › _CheckboxBase1 › checkmark › Icon: fill: Icon/icon-oncolor=#ffffff → Background/background-card=#ffffff

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=no, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Card content placeholder text goes here`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=no, Type=Default, State=Default, Effect=No Shadow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Card content placeholder text goes here`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=no, Type=Default, State=Default, Effect=Stroke, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Card content placeholder text goes here`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 48×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 80×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 48×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 48×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=yes, Type=Default, State=Default, Effect=With Sahdow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › نص إضافي لمحتوى البطاقة`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 99×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=yes, Type=Default, State=Default, Effect=No Shadow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › نص إضافي لمحتوى البطاقة`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 99×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=yes, Type=Default, State=Default, Effect=Stroke, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › عنوان البطاقة`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="عنوان البطاقة" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › نص إضافي لمحتوى البطاقة`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="نص إضافي لمحتوى البطاقة" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 62×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 30×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 30×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 99×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 67×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 67×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اجراء ثانوي" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=no, Type=Expandable, State=Default, Effect=With Sahdow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Card content placeholder text goes here`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › arrow-down-01`: 24×24
- `Actions › Button › arrow-down-01 › elements`: 13×7
- `Actions › Button › arrow-down-01 › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616 · rot=90

**RTL=no, Type=Expandable, State=Default, Effect=No Shadow, Expanded=False, Selected=False**
- `Featured icon`: 48×48 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Featured icon › checkmark-circle-02`: 24×24
- `Featured icon › checkmark-circle-02 › elements`: 22×22
- `Featured icon › checkmark-circle-02 › elements › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Content`: 328×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Card Title`: 328×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Bold · txt="Card Title" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Card content placeholder text goes here`: 328×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Card content placeholder text " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions`: 328×40 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Actions › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › arrow-down-01`: 24×24
- `Actions › Button › arrow-down-01 › elements`: 13×7
- `Actions › Button › arrow-down-01 › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616 · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | **SMART_ANIMATE 300ms EASE_OUT** | 102 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 48 |
| ON_HOVER | CHANGE_TO | State: Default→Hover | **SMART_ANIMATE 300ms EASE_OUT** | 18 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 18 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | **INSTANT** | 18 |
| ON_HOVER | CHANGE_TO | State: Default→Hover | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default, Expanded: False→True | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default, Expanded: True→False | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default, Selected: False→True | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hover→Default, Selected: True→False | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

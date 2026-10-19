# Modals — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `172:4293`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 172-4293

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Modals

> A modal is a secondary window that communicates or provides an action inside the same process. They’re incredibly useful for communicating additional information, collecting information, or directing users without forcing them to leave the page. When modals are used unnecessarily, they can become intrusive and annoying for the user. Nobody likes pop-ups.

> Resources

> Modals Elements

## Component sets on this page (5)

- **Modal** — 4 variants · `30150:55001`
- **_Modal Header** — 4 variants · `30150:55018`
- **_Modal Actions** — 8 variants · `30150:55043`
- **_Modal Body** — 6 variants · `30150:55083`
- **_Swap Placeholder** — 2 variants · `30150:55096`

---
## Modal

**Description (component description field):**

> Modal is a popup window that appears on top of the main screen to grab user attention for immediate actions or input. It often contains focused content like forms or alerts and blocks interaction with the background until dismissed. Modals are useful for tasks needing user confirmation, feedback, or critical alerts, helping to keep focus and simplify interaction.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Mobile | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Mobile=False`)

- `RTL=False, Mobile=False` [COMP] — 600×208 · lay=V/MIN/MIN · pad=24 24 24 24 · gap=8 · r=8 · fill=Background/background-white=#ffffff · fx=DROP_SHADOW(#10182824 0,32 b64 s-12) · tokens{itemSpacing:Model/modal-gap, paddingLeft:Model/modal-padding, paddingTop:Model/modal-padding, paddingRight:Model/modal-padding, paddingBottom:Model/modal-padding, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
  - `_Modal Header` [INST] ⟶ instance of **_Modal Header / RTL=False, Center Align=False** — 552×76 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
    - `Title` [FRAM] — 552×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Medium, Color=Gray, Style=Light, Circle=True** — 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `information-circle` [INST] ⟶ instance of **information-circle / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 18×18
      - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 11×11
    - `Text and supporting text` [FRAM] — 552×28 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Lead Text` [TEXT] — 552×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
  - `_Modal Body` [INST] ⟶ instance of **_Modal Body / RTL=False, Center Align=False, Content=Text** — 552×36 · lay=V/MIN/MIN · pad=0 0 16 0 · gap=0 · tokens{paddingBottom:Model/modal-content-bottom-padding}
    - `Helper Text` [TEXT] — 552×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `_Modal Actions` [INST] ⟶ instance of **_Modal Actions / RTL=False, Fill Container=False, Stack=False, Center Align=False** — 552×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap}
    - `Tertiary` [FRAM] — 352×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
      - `Tertiary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
    - `Primary + Secondary` [FRAM] — 192×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
      - `Secondary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
      - `Primary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Mobile=False | 600×208 | V/MIN/MIN · 24 24 24 24 · 8 | 8 | Background/background-white=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |
| RTL=False, Mobile=True | 320×308 | V/MIN/MIN · 24 24 24 24 · 8 | 8 | Background/background-white=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Mobile=False**
- `_Modal Header`: 552×76 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `_Modal Header › Title`: 552×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Modal Header › Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_Modal Header › Title › Featured icon › information-circle`: 20×20
- `_Modal Header › Title › Featured icon › information-circle › elements`: 18×18
- `_Modal Header › Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `_Modal Header › Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Header › Title › Button-Close › multiplication-sign`: 20×20
- `_Modal Header › Title › Button-Close › multiplication-sign › elements`: 11×11
- `_Modal Header › Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `_Modal Header › Text and supporting text`: 552×28 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `_Modal Header › Text and supporting text › Lead Text`: 552×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `_Modal Body`: 552×36 · lay=V/MIN/MIN · pad=0 0 16 0 · gap=0 · tokens{paddingBottom:Model/modal-content-bottom-padding}
- `_Modal Body › Helper Text`: 552×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions`: 552×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap}
- `_Modal Actions › Tertiary`: 352×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `_Modal Actions › Tertiary › Tertiary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Tertiary › Tertiary Action › Leading Icon`: 20×20
- `_Modal Actions › Tertiary › Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `_Modal Actions › Tertiary › Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `_Modal Actions › Tertiary › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Tertiary › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions › Primary + Secondary`: 192×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `_Modal Actions › Primary + Secondary › Secondary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Primary + Secondary › Secondary Action › Leading Icon`: 20×20
- `_Modal Actions › Primary + Secondary › Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `_Modal Actions › Primary + Secondary › Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `_Modal Actions › Primary + Secondary › Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Primary + Secondary › Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions › Primary + Secondary › Primary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Primary + Secondary › Primary Action › Leading Icon`: 20×20
- `_Modal Actions › Primary + Secondary › Primary Action › Leading Icon › elements`: 10×15 · rot=-90
- `_Modal Actions › Primary + Secondary › Primary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-oncolor=#ffffff
- `_Modal Actions › Primary + Secondary › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Primary + Secondary › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Mobile=True**
- `_Modal Header`: 272×76 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `_Modal Header › Title`: 272×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Modal Header › Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_Modal Header › Title › Featured icon › information-circle`: 20×20
- `_Modal Header › Title › Featured icon › information-circle › elements`: 18×18
- `_Modal Header › Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `_Modal Header › Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Header › Title › Button-Close › multiplication-sign`: 20×20
- `_Modal Header › Title › Button-Close › multiplication-sign › elements`: 11×11
- `_Modal Header › Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `_Modal Header › Text and supporting text`: 272×28 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `_Modal Header › Text and supporting text › Lead Text`: 272×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `_Modal Body`: 272×56 · lay=V/MIN/MIN · pad=0 0 16 0 · gap=0 · tokens{paddingBottom:Model/modal-content-bottom-padding}
- `_Modal Body › Helper Text`: 272×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions`: 272×112 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap}
- `_Modal Actions › Primary Action`: 272×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions › Secondary Action`: 272×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Secondary Action › Leading Icon`: 20×20
- `_Modal Actions › Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `_Modal Actions › Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `_Modal Actions › Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Modal Actions › Tertiary Action`: 272×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Modal Actions › Tertiary Action › Leading Icon`: 20×20
- `_Modal Actions › Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `_Modal Actions › Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `_Modal Actions › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Modal Actions › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 4 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

---
## _Modal Header

**Description (component description field):**

> Provides a concise summary of the modal content.

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Title goes here |
| Title AR | TEXT=عنوان الرسالة يُكتب هنا |
| Close Button | BOOLEAN=true |
| Show Featured Icon | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Center Align | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Center Align=False`)

- `RTL=False, Center Align=False` [COMP] — 480×76 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
  - `Title` [FRAM] — 480×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Medium, Color=Gray, Style=Light, Circle=True** — 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `information-circle` [INST] ⟶ instance of **information-circle / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×11
          - `Icon` [VECT] — 11×11 · fill=Icon/icon-default=#161616
  - `Text and supporting text` [FRAM] — 480×28 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Lead Text` [TEXT] — 480×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Center Align=False (+1 more) | 480×76 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Center Align=False**
- `Title`: 480×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Text and supporting text`: 480×28 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Text and supporting text › Lead Text`: 480×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

**RTL=False, Center Align=True**
- `Title`: 480×40 · lay=H/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Text and supporting text`: 480×28 · lay=H/CENTER/MIN · pad=0 0 0 0 · gap=0
- `Text and supporting text › Lead Text`: 480×28 · fill=Text/text-display=#1f2a37 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Title goes here" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 4 |

---
## _Modal Actions

**Description (component description field):**

> Includes interactive elements like ghost or tertiary buttons for user engagement.

### Properties

| Property | Type / options |
|---|---|
| Secondary Action | BOOLEAN=true |
| Tertiary Action | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Fill Container | VARIANT: False · True |
| Stack | VARIANT: False · True |
| Center Align | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Fill Container=False, Stack=False, Center Align=False`)

- `RTL=False, Fill Container=False, Stack=False, Center Align=False` [COMP] — 480×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap}
  - `Tertiary` [FRAM] — 280×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
    - `Tertiary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
  - `Primary + Secondary` [FRAM] — 192×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
    - `Secondary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Primary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False** — 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-oncolor=#ffffff
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Fill Container=False, Stack=False, Center Align=False | 480×32 | H/MAX/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Fill Container=False, Stack=False, Center Align=True (+1 more) | 480×32 | H/CENTER/CENTER · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Fill Container=True, Stack=True, Center Align=True | 480×112 | V/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Fill Container=False, Stack=False, Center Align=False**
- `Tertiary`: 280×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Tertiary › Tertiary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tertiary › Tertiary Action › Leading Icon`: 20×20
- `Tertiary › Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Tertiary › Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Tertiary › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Tertiary › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Primary + Secondary`: 192×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Primary + Secondary › Secondary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Primary + Secondary › Secondary Action › Leading Icon`: 20×20
- `Primary + Secondary › Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Primary + Secondary › Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Primary + Secondary › Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Primary + Secondary › Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Primary + Secondary › Primary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Primary + Secondary › Primary Action › Leading Icon`: 20×20
- `Primary + Secondary › Primary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Primary + Secondary › Primary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-oncolor=#ffffff
- `Primary + Secondary › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Primary + Secondary › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Fill Container=False, Stack=False, Center Align=True**
- `Tertiary`: 92×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Tertiary › Tertiary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tertiary › Tertiary Action › Leading Icon`: 20×20
- `Tertiary › Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Tertiary › Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Tertiary › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Tertiary › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Secondary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Secondary Action › Leading Icon`: 20×20
- `Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Primary Action`: 92×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Primary Action › Leading Icon`: 20×20
- `Primary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Primary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-oncolor=#ffffff
- `Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Fill Container=True, Stack=False, Center Align=True**
- `Tertiary`: 155×32 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8
- `Tertiary › Tertiary Action`: 155×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tertiary › Tertiary Action › Leading Icon`: 20×20
- `Tertiary › Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Tertiary › Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Tertiary › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Tertiary › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Secondary Action`: 155×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Secondary Action › Leading Icon`: 20×20
- `Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Primary Action`: 155×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Primary Action › Leading Icon`: 20×20
- `Primary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Primary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-oncolor=#ffffff
- `Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Fill Container=True, Stack=True, Center Align=True**
- `Primary Action`: 480×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Primary Action › Leading Icon`: 20×20
- `Primary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Primary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-oncolor=#ffffff
- `Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Secondary Action`: 480×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Secondary Action › Leading Icon`: 20×20
- `Secondary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Secondary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Tertiary Action`: 480×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Tertiary Action › Leading Icon`: 20×20
- `Tertiary Action › Leading Icon › elements`: 10×15 · rot=-90
- `Tertiary Action › Leading Icon › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

---
## _Modal Body

**Description (component description field):**

> Delivers further details and guidance on any necessary actions.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Content Swap | INSTANCE_SWAP=30150:55097 |
| Text EN | TEXT=When a Modal needs a further d |
| Text AR | TEXT=يُكتب المحتوى الاضافي هنا في ح |
| RTL | VARIANT: False · True |
| Center Align | VARIANT: False · True |
| Content | VARIANT: Text · Placeholder |

### Anatomy (first variant: `RTL=False, Center Align=False, Content=Text`)

- `RTL=False, Center Align=False, Content=Text` [COMP] — 480×36 · lay=V/MIN/MIN · pad=0 0 16 0 · gap=0 · tokens{paddingBottom:Model/modal-content-bottom-padding}
  - `Helper Text` [TEXT] — 480×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Center Align=False, Content=Text | 480×36 | V/MIN/MIN · 0 0 16 0 · 0 |  |  |   |  |
| RTL=False, Center Align=True, Content=Text | 480×36 | V/MIN/CENTER · 0 0 16 0 · 0 |  |  |   |  |
| RTL=False, Center Align=False, Content=Placeholder | 480×86 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Center Align=False, Content=Text**
- `Helper Text`: 480×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Center Align=True, Content=Text**
- `Helper Text`: 480×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Center Align=False, Content=Placeholder**
- `_Swap Placeholder`: 480×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Swap Placeholder › Helper Text`: 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Swap Placeholder

**Description (component description field):**

> A Swap Component Placeholder is a temporary element indicating where a component can be replaced or dynamically swapped with another.

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Default · Small |

### Anatomy (first variant: `Size=Default`)

- `Size=Default` [COMP] — 269×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Helper Text` [TEXT] — 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Default | 269×86 | H/CENTER/CENTER · 16 16 16 16 · 8 | 4 | Background/background-primary-50=#f3fcf6 | Border/border-primary=#1b8354 1 |  |
| Size=Small | 197×72 | H/CENTER/CENTER · 16 16 16 16 · 8 | 4 | Background/background-primary-50=#f3fcf6 | Border/border-primary=#1b8354 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Default**
- `Helper Text`: 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**Size=Small**
- `Helper Text`: 165×40 · fill=Text/text-primary=#1b8354 · font=IBM Plex Sans Arabic Regular · fs=10 · lh=14 · ts=Text 2xs/Regular · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

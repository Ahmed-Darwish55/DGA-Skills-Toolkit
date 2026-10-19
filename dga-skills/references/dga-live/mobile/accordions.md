# Accordions — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `816:699`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 816-699

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Accordion

> An accordion groups sections of related content that can be opened and closed. Accordions decrease cognitive load by letting people choose which sections of content they see, like questions in an FAQ. Never put information that’s required for the current task inside an accordion. Consider a treatment that gives it more prominence.

> Resources

## Component sets on this page (2)

- **Accordion** — 192 variants · `1147:60874`
- **Accordion list** — 2 variants · `1188:65307`

---
## Accordion

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Accordion Title |
| Title AR | TEXT=عنوان الأكورديون |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium · Small |
| Icon alignment | VARIANT: Leading · Trailing |
| State | VARIANT: Default · Pressed · Focused · Disabled |
| Expanded | VARIANT: False · True |
| Flush | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False`)

- `RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False` [COMP] — 366×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
  - `Accordion header` [FRAM] — 366×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
    - `Accordion Title` [TEXT] — 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
    - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 9×5
        - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
  - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
    - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False (+15 more) | 366×56 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False (+15 more) | 366×48 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False (+15 more) | 366×40 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False (+7 more) | 366×256 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False (+7 more) | 366×248 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False (+7 more) | 366×240 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True (+7 more) | 366×232 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True (+7 more) | 366×224 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |
| RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True (+7 more) | 366×216 | V/MIN/MIN · 0 0 0 0 · 0 |  |  | Border/border-primary=#d2d6db 1 0 0 0 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Disabled

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Large, Icon alignment=Leading, Expanded=False, Flush=False; RTL=False, Size=Large, Icon alignment=Leading, Expanded=True, Flush=False
- + Accordion header › Background (366×56 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Focused**  · applies to 12 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=False …
- Accordion header: stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 12 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=True …
- Accordion header › Accordion Title: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=False, Flush=False; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=True, Flush=False
- + Accordion header › Background (366×48 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Small, Icon alignment=Trailing, Expanded=False, Flush=False; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Small, Icon alignment=Leading, Expanded=False, Flush=False; RTL=False, Size=Small, Icon alignment=Leading, Expanded=True, Flush=False
- + Accordion header › Background (366×40 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Disabled**  · applies to 12 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=True, Flush=False; RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=True …
- Accordion header › Accordion Title: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Accordion content › Content: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=True
- Accordion header: pad: 16 0 16 0 → 16 16 16 16
- + Accordion header › Background (398×56 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=False, Flush=True; RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Large, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Large, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×56 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=False, Flush=True; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×48 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=False, Flush=True; RTL=False, Size=Medium, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Medium, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×48 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Small, Icon alignment=Trailing, Expanded=False, Flush=True; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Small, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Small, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×40 · fill=Button/button-background-neutral-pressed=#e5e7eb)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Size=Small, Icon alignment=Trailing, Expanded=False, Flush=True; RTL=False, Size=Small, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Small, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Small, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×40 · stroke=Border/border-black=#161616 · sw=2)

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Icon alignment=Trailing, Expanded=True, Flush=True; RTL=False, Size=Large, Icon alignment=Leading, Expanded=False, Flush=True; RTL=False, Size=Large, Icon alignment=Leading, Expanded=True, Flush=True
- + Accordion header › Background (398×56 · fill=Button/button-background-neutral-pressed=#e5e7eb)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False**
- `Accordion header`: 366×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-down-01`: 16×16
- `Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False**
- `Accordion header`: 366×48 · lay=H/MIN/CENTER · pad=12 16 12 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-md-header-padding, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-md-header-padding}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-down-01`: 16×16
- `Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False**
- `Accordion header`: 366×40 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-sm-header-padding, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-sm-header-padding}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-down-01`: 16×16
- `Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False**
- `Accordion header`: 366×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-up-01`: 16×16
- `Accordion header › arrow-up-01 › elements`: 9×5
- `Accordion header › arrow-up-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Accordion content`: 366×200 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
- `Accordion content › Content`: 302×168 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"

**RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False**
- `Accordion header`: 366×48 · lay=H/MIN/CENTER · pad=12 16 12 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-md-header-padding, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-md-header-padding}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-up-01`: 16×16
- `Accordion header › arrow-up-01 › elements`: 9×5
- `Accordion header › arrow-up-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Accordion content`: 366×200 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
- `Accordion content › Content`: 302×168 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"

**RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False**
- `Accordion header`: 366×40 · lay=H/MIN/CENTER · pad=8 16 8 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-sm-header-padding, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-sm-header-padding}
- `Accordion header › Accordion Title`: 302×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-up-01`: 16×16
- `Accordion header › arrow-up-01 › elements`: 9×5
- `Accordion header › arrow-up-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=-90
- `Accordion content`: 366×200 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
- `Accordion content › Content`: 302×168 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"

**RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True**
- `Accordion header`: 366×56 · lay=H/MIN/CENTER · pad=16 0 16 0 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Global/spacing-none, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Global/spacing-none, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion header › Accordion Title`: 334×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-down-01`: 16×16
- `Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True**
- `Accordion header`: 366×48 · lay=H/MIN/CENTER · pad=12 0 12 0 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Global/spacing-none, paddingTop:Accordion/accordion-md-header-padding, paddingRight:Global/spacing-none, paddingBottom:Accordion/accordion-md-header-padding}
- `Accordion header › Accordion Title`: 334×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion header › arrow-down-01`: 16×16
- `Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/False/False | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/True/False | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/False/True | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/True/True | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/False/False | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/True/False | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/False/True | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/True/True | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | **SMART_ANIMATE 300ms EASE_IN_AND_OUT** | 1 |

---
## Accordion list

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 378×280 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · stroke=Colors/Gray neutral/300=#d2d6db · sw=0 0 1 0 · sa=INSIDE
  - `Accordion` [INST] ⟶ instance of **Accordion / RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False** — 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
    - `Accordion header` [FRAM] — 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
      - `Accordion Title` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
      - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"
  - `Accordion` [INST] ⟶ instance of **Accordion / RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False** — 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
    - `Accordion header` [FRAM] — 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
      - `Accordion Title` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
      - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"
  - `Accordion` [INST] ⟶ instance of **Accordion / RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False** — 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
    - `Accordion header` [FRAM] — 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
      - `Accordion Title` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
      - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"
  - `Accordion` [INST] ⟶ instance of **Accordion / RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False** — 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
    - `Accordion header` [FRAM] — 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
      - `Accordion Title` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
      - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"
  - `Accordion` [INST] ⟶ instance of **Accordion / RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False** — 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
    - `Accordion header` [FRAM] — 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
      - `Accordion Title` [TEXT] — 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Icon/icon-default=#161616 · rot=90
    - `Accordion content` [FRAM] *(hidden)* — 366×152 · lay=H/MIN/MIN · pad=8 48 24 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingTop:spacing-md, paddingRight:spacing-6xl, paddingBottom:spacing-3xl}
      - `Content` [TEXT] — 302×168 · fill=Text/text-secondary=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="The accordion component delive"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 378×280 | V/MIN/MAX · 0 0 0 0 · 0 |  |  | Colors/Gray neutral/300=#d2d6db 0 0 1 0 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Accordion`: 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
- `Accordion › Accordion header`: 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion › Accordion header › Accordion Title`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion › Accordion header › arrow-down-01`: 16×16
- `Accordion › Accordion header › arrow-down-01 › elements`: 9×5
- `Accordion › Accordion header › arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Accordion#2`: 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
- `Accordion › Accordion header#2`: 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion › Accordion header › Accordion Title#2`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion › Accordion header › arrow-down-01#2`: 16×16
- `Accordion › Accordion header › arrow-down-01 › elements#2`: 9×5
- `Accordion › Accordion header › arrow-down-01 › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Accordion#3`: 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
- `Accordion › Accordion header#3`: 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion › Accordion header › Accordion Title#3`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion › Accordion header › arrow-down-01#3`: 16×16
- `Accordion › Accordion header › arrow-down-01 › elements#3`: 9×5
- `Accordion › Accordion header › arrow-down-01 › elements › Icon#3`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Accordion#4`: 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
- `Accordion › Accordion header#4`: 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion › Accordion header › Accordion Title#4`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion › Accordion header › arrow-down-01#4`: 16×16
- `Accordion › Accordion header › arrow-down-01 › elements#4`: 9×5
- `Accordion › Accordion header › arrow-down-01 › elements › Icon#4`: 5×9 · fill=Icon/icon-default=#161616 · rot=90
- `Accordion#5`: 378×56 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE
- `Accordion › Accordion header#5`: 378×56 · lay=H/MIN/CENTER · pad=16 16 16 16 · gap=16 · tokens{itemSpacing:Accordion/accordion-lg-header-gap, paddingLeft:Accordion/accordion-lg-header-padding, paddingTop:Accordion/accordion-lg-header-gap, paddingRight:Accordion/accordion-lg-header-padding, paddingBottom:Accordion/accordion-lg-header-gap}
- `Accordion › Accordion header › Accordion Title#5`: 314×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Accordion Title"
- `Accordion › Accordion header › arrow-down-01#5`: 16×16
- `Accordion › Accordion header › arrow-down-01 › elements#5`: 9×5
- `Accordion › Accordion header › arrow-down-01 › elements › Icon#5`: 5×9 · fill=Icon/icon-default=#161616 · rot=90

### Interactions & motion

*No prototype reactions defined on this component set.*

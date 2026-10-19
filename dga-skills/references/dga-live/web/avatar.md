# Avatar — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5699:53513`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5699-53513

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Avatar

> The avatar is a visual representation of a user, commonly displayed in profiles, comments, or messaging apps, enhancing user engagement and recognition.

> Resources

## Component sets on this page (2)

- **Avatar** — 42 variants · `5699:53529`
- **Avatar Group** — 2 variants · `5699:53727`

---
## Avatar

**Description (component description field):**

> The avatar is a visual representation of a user, commonly displayed in profiles, comments, or messaging apps, enhancing user engagement and recognition.

### Properties

| Property | Type / options |
|---|---|
| Border | BOOLEAN=false |
| Text EN | TEXT=AB |
| 🔁 Swap Icon | INSTANCE_SWAP=13758:241877 |
| Type | VARIANT: Image · Initials · Icon |
| Square | VARIANT: False · True |
| Size | VARIANT: 24px · 32px · 40px · 48px · 64px · 80px · 120px |

### Anatomy (first variant: `Type=Icon, Square=False, Size=32px`)

- `Type=Icon, Square=False, Size=32px` [COMP] — 32×32
  - `bg` [RECT] — 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Placeholder` [FRAM] — 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `user` [INST] ⟶ instance of **user / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 20×22
        - `Icon` [VECT] — 20×22 · fill=Icon/icon-default=#161616
  - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Icon, Square=False, Size=32px (+5 more) | 32×32 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=40px (+5 more) | 40×40 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=48px (+5 more) | 48×48 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=64px (+5 more) | 64×64 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=80px (+5 more) | 80×80 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=120px (+5 more) | 120×120 |  ·  ·  |  |  |   |  |
| Type=Icon, Square=False, Size=24px (+5 more) | 24×24 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Icon, Square=False, Size=32px**
- `bg`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › user`: 24×24
- `Placeholder › user › elements`: 20×22
- `Placeholder › user › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616

**Type=Initials, Square=False, Size=32px**
- `bg`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="AB" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Type=Icon, Square=False, Size=40px**
- `bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › user`: 32×32
- `Placeholder › user › elements`: 26×29
- `Placeholder › user › elements › Icon`: 26×29 · fill=Icon/icon-default=#161616

**Type=Initials, Square=False, Size=40px**
- `bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**Type=Icon, Square=False, Size=48px**
- `bg`: 48×48 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › user`: 32×32
- `Placeholder › user › elements`: 26×29
- `Placeholder › user › elements › Icon`: 26×29 · fill=Icon/icon-default=#161616

**Type=Initials, Square=False, Size=48px**
- `bg`: 48×48 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › Text`: 32×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="AB" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**Type=Icon, Square=False, Size=64px**
- `bg`: 64×64 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › user`: 40×40
- `Placeholder › user › elements`: 33×36
- `Placeholder › user › elements › Icon`: 33×36 · fill=Icon/icon-default=#161616

**Type=Initials, Square=False, Size=64px**
- `bg`: 64×64 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Placeholder › Text`: 40×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="AB" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Avatar Group

**Description (component description field):**

> Avatar groups come in two forms: the stacked version, where avatars are positioned one on top of the other without gaps, and the unstacked version, where there is space between each avatar.

### Properties

| Property | Type / options |
|---|---|
| Stacked | VARIANT: True · False |

### Anatomy (first variant: `Stacked=True`)

- `Stacked=True` [COMP] — 172×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=-4
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Initials, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Placeholder` [FRAM] — 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Text` [TEXT] — 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Ring` [RECT] *(hidden)* — 32×32 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Stacked=True | 172×32 | H/MIN/MIN · 0 0 0 0 · -4 |  |  |   |  |
| Stacked=False | 212×32 | H/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Stacked=True**
- `Avatar`: 32×32
- `Avatar › bg`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#2`: 32×32
- `Avatar › bg#2`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#2`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#3`: 32×32
- `Avatar › bg#3`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#3`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#4`: 32×32
- `Avatar › bg#4`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#4`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#5`: 32×32
- `Avatar › bg#5`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#5`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#6`: 32×32
- `Avatar › bg#6`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Avatar › Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Stacked=False**
- `Avatar`: 32×32
- `Avatar › bg`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#2`: 32×32
- `Avatar › bg#2`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#2`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#3`: 32×32
- `Avatar › bg#3`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#3`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#4`: 32×32
- `Avatar › bg#4`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#4`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#5`: 32×32
- `Avatar › bg#5`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#5`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#6`: 32×32
- `Avatar › bg#6`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Avatar › Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

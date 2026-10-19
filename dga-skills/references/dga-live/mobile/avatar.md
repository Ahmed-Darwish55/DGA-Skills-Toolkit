# Avatar — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5699:53513`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5699-53513

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Avatar

> An accordion groups sections of related content that can be opened and closed. Accordions decrease cognitive load by letting people choose which sections of content they see, like questions in an FAQ. Never put information that’s required for the current task inside an accordion. Consider a treatment that gives it more prominence.

> Resources

## Component sets on this page (2)

- **Avatar** — 42 variants · `5699:53529`
- **Avatar Group** — 2 variants · `5699:53727`

---
## Avatar

### Properties

| Property | Type / options |
|---|---|
| Border | BOOLEAN=true |
| Text | TEXT=AB |
| Type | VARIANT: Image · Initials · Icon |
| Square | VARIANT: False · True |
| Size | VARIANT: 24px · 32px · 40px · 48px · 64px · 80px · 120px |

### Anatomy (first variant: `Type=Icon, Square=False, Size=32px`)

- `Type=Icon, Square=False, Size=32px` [COMP] — 32×32
  - `bg` [RECT] — 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Placeholder` [FRAM] — 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Icon` [INST] ⟶ instance of **user / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 20×22
        - `Icon` [VECT] — 20×22 · fill=Icon/icon-default=#161616
  - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

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
- `Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Icon`: 24×24
- `Placeholder › Icon › elements`: 20×22
- `Placeholder › Icon › elements › Icon`: 20×22 · fill=Icon/icon-default=#161616
- `Ring`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Initials, Square=False, Size=32px**
- `bg`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="AB"
- `Ring`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Icon, Square=False, Size=40px**
- `bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Icon`: 32×32
- `Placeholder › Icon › elements`: 26×29
- `Placeholder › Icon › elements › Icon`: 26×29 · fill=Icon/icon-default=#161616
- `Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Initials, Square=False, Size=40px**
- `bg`: 40×40 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="AB"
- `Ring`: 40×40 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Icon, Square=False, Size=48px**
- `bg`: 48×48 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Icon`: 32×32
- `Placeholder › Icon › elements`: 26×29
- `Placeholder › Icon › elements › Icon`: 26×29 · fill=Icon/icon-default=#161616
- `Ring`: 48×48 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Initials, Square=False, Size=48px**
- `bg`: 48×48 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 32×32 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Text`: 32×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="AB"
- `Ring`: 48×48 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Icon, Square=False, Size=64px**
- `bg`: 64×64 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Icon`: 40×40
- `Placeholder › Icon › elements`: 33×36
- `Placeholder › Icon › elements › Icon`: 33×36 · fill=Icon/icon-default=#161616
- `Ring`: 64×64 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Type=Initials, Square=False, Size=64px**
- `bg`: 64×64 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Placeholder`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Placeholder › Text`: 40×28 · fill=Text/text-default=#161616 · font=mixed · fs=18 · lh=28 · ts=Text lg/Medium · txt="AB"
- `Ring`: 64×64 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Avatar Group

### Properties

| Property | Type / options |
|---|---|
| Stacked | VARIANT: True · False |

### Anatomy (first variant: `Stacked=True`)

- `Stacked=True` [COMP] — 172×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=-4
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Image` [RECT] — 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `Avatar` [INST] ⟶ instance of **Avatar / Type=Initials, Square=False, Size=32px** — 32×32
    - `bg` [RECT] — 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
    - `Placeholder` [FRAM] — 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99"
    - `Ring` [RECT] — 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Stacked=True | 172×32 | H/MIN/MIN · 0 0 0 0 · -4 |  |  |   |  |
| Stacked=False | 232×32 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Stacked=True**
- `Avatar`: 32×32
- `Avatar › bg`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#2`: 32×32
- `Avatar › bg#2`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#2`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#2`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#3`: 32×32
- `Avatar › bg#3`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#3`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#3`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#4`: 32×32
- `Avatar › bg#4`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#4`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#4`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#5`: 32×32
- `Avatar › bg#5`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#5`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#5`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#6`: 32×32
- `Avatar › bg#6`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Avatar › Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99"
- `Avatar › Ring#6`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

**Stacked=False**
- `Avatar`: 32×32
- `Avatar › bg`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#2`: 32×32
- `Avatar › bg#2`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#2`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#2`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#3`: 32×32
- `Avatar › bg#3`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#3`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#3`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#4`: 32×32
- `Avatar › bg#4`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#4`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#4`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#5`: 32×32
- `Avatar › bg#5`: 32×32 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Image#5`: 32×32 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Ring#5`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar#6`: 32×32
- `Avatar › bg#6`: 32×32 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Avatar › Placeholder`: 24×24 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Avatar › Placeholder › Text`: 24×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="+99"
- `Avatar › Ring#6`: 32×32 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}

### Interactions & motion

*No prototype reactions defined on this component set.*

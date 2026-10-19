# Cards & grid — `CardGrid` / `cardGrid()`
Figma: `references/dga-live/web/card.md` (Card: Type Default/Expanded/Selectable, Effect With Shadow/No Shadow/Stroke, radius 16, pad 16, gap 24).
Anatomy: `<ul class="ah-cards">` (grid `auto-fill minmax(280px,1fr)`, gap 32; 1 column ≤767) → `<li>` → `dga-card` with `cardTitle`, `description`, `effect`, `featuredIcon={ name, variant:'stroke' }`, `image`, `primaryActionLabel`, `onPrimaryAction`.
Modes: identical chrome; Enhanced/Creative wrap items in `Reveal` (house motion).
Measured: card `.card` Default vs Figma `Effect=Stroke` (height differs by content; radius/background/border compared — see QA report). Package issues: PKG-CARD-01 (title is a fixed `<h4>` → axe heading-order when the section heading is h2), `showSecondaryAction` defaults to true (set false explicitly).

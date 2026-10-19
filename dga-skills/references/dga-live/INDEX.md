# DGA Platforms Code — LIVE reference index

All 24 DGA Platforms Code community files (figma.com/@sdga): every variant, every state, every bound token and prototype motion, as Markdown specs and JSON data. © Digital Government Authority, used under CC BY 4.0. This is the design source of truth — not a certification of coded components; production work needs the screenshot comparison in rules/component-contract.md.

## How to use (mandatory order)

1. Find the component below → open its `.md`. Read `### Properties`, `### Anatomy`, `### State changes`, `### Interactions & motion` (files are 10–180 KB — read by section with grep/offset).
2. Use tokens from `foundations/dga-tokens.css` (`--dga-*`: light in `:root`, `[data-theme="dark"]`, tablet/mobile modes in media queries). Token `Form/field-border-hovered` → `--dga-form-field-border-hovered`. Never hard-code a hex that has a token.
3. Implement motion exactly as listed (INSTANT = no transition). Global mapping table: `MOTION.md`.
4. Need a value not in the .md (a layer of a rarely used variant)? Read `data/<platform>/<slug>.json` — every variant, child layer, token binding and reaction.
5. Pages: `templates/<slug>.md` has the verbatim instructions page + frame structure + which library components each template uses.

## Web components — Components Library (52 pages)

| Component | Spec | Sets | Variants | Motion rules |
|---|---|---|---|---|
| Accordions | [web/accordions.md](web/accordions.md) | 2 | 242 | 178 |
| Avatar | [web/avatar.md](web/avatar.md) | 2 | 44 | 0 |
| Breadcrumb | [web/breadcrumb.md](web/breadcrumb.md) | 2 | 20 | 40 |
| Buttons | [web/buttons.md](web/buttons.md) | 3 | 1808 | 688 |
| Card | [web/card.md](web/card.md) | 1 | 102 | 246 |
| Charts | [web/charts.md](web/charts.md) | 12 | 72 | 0 |
| Checkbox | [web/checkbox.md](web/checkbox.md) | 3 | 113 | 56 |
| Carousel | [web/carousel.md](web/carousel.md) | 3 | 69 | 42 |
| Content Switcher | [web/content-switcher.md](web/content-switcher.md) | 2 | 156 | 108 |
| Chip | [web/chip.md](web/chip.md) | 1 | 288 | 192 |
| Code Snippet | [web/code-snippet.md](web/code-snippet.md) | 1 | 2 | 8 |
| Date Picker | [web/date-picker.md](web/date-picker.md) | 4 | 195 | 636 |
| Digital Stamp | [web/digital-stamp.md](web/digital-stamp.md) | 2 | 32 | 20 |
| Dropdown Input | [web/dropdown-input.md](web/dropdown-input.md) | 2 | 310 | 976 |
| Divider | [web/divider.md](web/divider.md) | 1 | 8 | 0 |
| File upload | [web/file-upload.md](web/file-upload.md) | 4 | 20 | 24 |
| Floating Button | [web/floating-button.md](web/floating-button.md) | 1 | 288 | 96 |
| Filtration | [web/filtration.md](web/filtration.md) | 4 | 30 | 1043 |
| Inline Alert | [web/inline-alert.md](web/inline-alert.md) | 1 | 40 | 120 |
| Link | [web/link.md](web/link.md) | 1 | 144 | 48 |
| List | [web/list.md](web/list.md) | 2 | 54 | 0 |
| Loading | [web/loading.md](web/loading.md) | 1 | 84 | 84 |
| Modals | [web/modals.md](web/modals.md) | 5 | 24 | 44 |
| Menu | [web/menu.md](web/menu.md) | 2 | 74 | 96 |
| Metric | [web/metric.md](web/metric.md) | 4 | 24 | 12 |
| Notification | [web/notification.md](web/notification.md) | 1 | 10 | 30 |
| Notification Toast | [web/notification-toast.md](web/notification-toast.md) | 1 | 20 | 60 |
| Number Input | [web/number-input.md](web/number-input.md) | 2 | 336 | 704 |
| Pagination | [web/pagination.md](web/pagination.md) | 2 | 30 | 90 |
| Progress Bar | [web/progress-bar.md](web/progress-bar.md) | 2 | 88 | 0 |
| Progress indicator | [web/progress-indicator.md](web/progress-indicator.md) | 2 | 56 | 18 |
| Quote | [web/quote.md](web/quote.md) | 1 | 8 | 0 |
| Radio | [web/radio.md](web/radio.md) | 3 | 28 | 14 |
| Rating | [web/rating.md](web/rating.md) | 2 | 30 | 18 |
| Radial Stepper | [web/radial-stepper.md](web/radial-stepper.md) | 2 | 150 | 0 |
| Skeleton | [web/skeleton.md](web/skeleton.md) | 9 | 71 | 89 |
| Switch | [web/switch.md](web/switch.md) | 2 | 24 | 16 |
| Structured List | [web/structured-list.md](web/structured-list.md) | 5 | 108 | 1701 |
| Slider | [web/slider.md](web/slider.md) | 1 | 24 | 0 |
| Search Box | [web/search-box.md](web/search-box.md) | 2 | 146 | 253 |
| Slideout Menu | [web/slideout-menu.md](web/slideout-menu.md) | 2 | 10 | 86 |
| Table | [web/table.md](web/table.md) | 8 | 104 | 1697 |
| Tabs | [web/tabs.md](web/tabs.md) | 4 | 146 | 136 |
| Tags | [web/tags.md](web/tags.md) | 2 | 378 | 0 |
| Text input | [web/text-input.md](web/text-input.md) | 3 | 368 | 699 |
| Textarea | [web/textarea.md](web/textarea.md) | 2 | 146 | 96 |
| Tooltip | [web/tooltip.md](web/tooltip.md) | 2 | 100 | 24 |
| UI Shell - Nav Header | [web/ui-shell-nav-header.md](web/ui-shell-nav-header.md) | 8 | 152 | 509 |
| UI Shell - Nav Drawer | [web/ui-shell-nav-drawer.md](web/ui-shell-nav-drawer.md) | 3 | 106 | 260 |
| UI Shell - Second Level Nav Header | [web/ui-shell-second-level-nav-header.md](web/ui-shell-second-level-nav-header.md) | 2 | 8 | 16 |
| UI Shell - Table of Content | [web/ui-shell-table-of-content.md](web/ui-shell-table-of-content.md) | 2 | 50 | 50 |
| UI Shell - Footer | [web/ui-shell-footer.md](web/ui-shell-footer.md) | 1 | 8 | 324 |

Also: [web/get-started.md](web/get-started.md) (library usage, verbatim).

## Mobile components — Mobile Components (30 pages)

| Component | Spec | Sets | Variants | Motion rules |
|---|---|---|---|---|
| Accordions | [mobile/accordions.md](mobile/accordions.md) | 2 | 194 | 120 |
| Avatar | [mobile/avatar.md](mobile/avatar.md) | 2 | 44 | 0 |
| Tags | [mobile/tags.md](mobile/tags.md) | 2 | 378 | 0 |
| Banner | [mobile/banner.md](mobile/banner.md) | 1 | 10 | 12 |
| Buttons | [mobile/buttons.md](mobile/buttons.md) | 4 | 1464 | 224 |
| Checkbox | [mobile/checkbox.md](mobile/checkbox.md) | 3 | 95 | 8 |
| Card | [mobile/card.md](mobile/card.md) | 1 | 102 | 249 |
| Content switcher | [mobile/content-switcher.md](mobile/content-switcher.md) | 2 | 40 | 36 |
| Date Picker | [mobile/date-picker.md](mobile/date-picker.md) | 3 | 70 | 192 |
| Dropdown Input | [mobile/dropdown-input.md](mobile/dropdown-input.md) | 2 | 138 | 460 |
| File upload | [mobile/file-upload.md](mobile/file-upload.md) | 4 | 20 | 10 |
| Inline Alert | [mobile/inline-alert.md](mobile/inline-alert.md) | 1 | 20 | 60 |
| Link | [mobile/link.md](mobile/link.md) | 1 | 120 | 24 |
| List | [mobile/list.md](mobile/list.md) | 1 | 10 | 11 |
| Menu | [mobile/menu.md](mobile/menu.md) | 3 | 54 | 44 |
| Modals | [mobile/modals.md](mobile/modals.md) | 5 | 17 | 15 |
| Notification Toast | [mobile/notification-toast.md](mobile/notification-toast.md) | 1 | 10 | 30 |
| Pagination | [mobile/pagination.md](mobile/pagination.md) | 2 | 21 | 66 |
| Radio | [mobile/radio.md](mobile/radio.md) | 3 | 24 | 0 |
| Rating | [mobile/rating.md](mobile/rating.md) | 2 | 30 | 18 |
| Progress indicator | [mobile/progress-indicator.md](mobile/progress-indicator.md) | 2 | 28 | 10 |
| Spinner | [mobile/spinner.md](mobile/spinner.md) | 1 | 84 | 84 |
| Switch | [mobile/switch.md](mobile/switch.md) | 2 | 16 | 12 |
| Tabs | [mobile/tabs.md](mobile/tabs.md) | 4 | 118 | 72 |
| Text input | [mobile/text-input.md](mobile/text-input.md) | 3 | 112 | 56 |
| Textarea | [mobile/textarea.md](mobile/textarea.md) | 2 | 121 | 72 |
| Tooltip | [mobile/tooltip.md](mobile/tooltip.md) | 2 | 76 | 12 |
| UI Shell - Nav Drawer | [mobile/ui-shell-nav-drawer.md](mobile/ui-shell-nav-drawer.md) | 3 | 86 | 202 |
| UI Shell - Tab Bar | [mobile/ui-shell-tab-bar.md](mobile/ui-shell-tab-bar.md) | 3 | 39 | 108 |
| UI Shell - Navigation Bar | [mobile/ui-shell-navigation-bar.md](mobile/ui-shell-navigation-bar.md) | 1 | 10 | 27 |

## Page templates (20)

| Template | Spec |
|---|---|
| About The Entity Template | [templates/about-entity.md](templates/about-entity.md) |
| Chatbot Template - Platforms Code | [templates/chatbot.md](templates/chatbot.md) |
| Contact Us Template - Platforms Code | [templates/contact-us.md](templates/contact-us.md) |
| Content Page Template - Platforms Code | [templates/content-page.md](templates/content-page.md) |
| Cookies Banner Template - Platforms Code | [templates/cookies-banner.md](templates/cookies-banner.md) |
| e-Participation Template - Platofrms Code | [templates/e-participation.md](templates/e-participation.md) |
| FAQ Template - Platforms Code | [templates/faq.md](templates/faq.md) |
| Feedback Section Template - Platforms Code | [templates/feedback-section.md](templates/feedback-section.md) |
| Form Template - Platforms Code | [templates/form.md](templates/form.md) |
| Saudi Founding Day | [templates/founding-day.md](templates/founding-day.md) |
| Hajj Template | [templates/hajj.md](templates/hajj.md) |
| Help & Support Template - Platforms Code | [templates/help-support.md](templates/help-support.md) |
| Home Page Template - Platforms Code | [templates/home-page.md](templates/home-page.md) |
| Life Journeys Template - Platform Code | [templates/life-journeys.md](templates/life-journeys.md) |
| Saudi National Day Template | [templates/national-day.md](templates/national-day.md) |
| Page Not Found Template - Platforms Code | [templates/page-not-found.md](templates/page-not-found.md) |
| Rating Section Template - Platforms Code | [templates/rating-section.md](templates/rating-section.md) |
| Search Page Template- Platforms Code | [templates/search-page.md](templates/search-page.md) |
| Service Page Template - Platforms Code | [templates/service-page.md](templates/service-page.md) |
| Site Map Template - Platforms Code | [templates/site-map.md](templates/site-map.md) |

## Foundations

- [foundations/foundations.md](foundations/foundations.md) — 7 variable collections (Primitives 245, Themes 366 Light/Dark, Spacing 104 ×Desktop/Tablet/Mobile, Radius, Typography, Widths, Containers), 69 text styles, 11 effect styles, 3 grid styles. Font: IBM Plex Sans Arabic.
- [foundations/dga-tokens.css](foundations/dga-tokens.css) / [dga-tokens.json](foundations/dga-tokens.json) — generated, fully resolved (1,187 custom properties incl. component-referenced library tokens).

## Icons

The official **Icons - Platforms Code** file is currently EMPTY on DGA's side (notice on the page, verbatim: "Platforms Code icon library is currently being updated. Icons may be temporarily unavailable. The updated version will be available soon."). Icon names used by components appear in each anatomy (instance names). Until DGA republishes: use those names with a matching outline icon set, tagged [AHMED HOUSE].

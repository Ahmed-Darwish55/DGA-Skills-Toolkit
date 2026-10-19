# Motion & interaction catalogue — DGA Platforms Code (LIVE, 2026-10-17)

> Every row is a Figma prototype reaction defined on the official component sets. `INSTANT` = state swap without animation. This is the ONLY official motion spec; anything else is [AHMED HOUSE].

## Transition vocabulary used in the library

| Transition | Occurrences |
|---|---|
| INSTANT | 12128 |
| SMART_ANIMATE 300ms EASE_OUT | 809 |
| SMART_ANIMATE 150ms EASE_OUT | 352 |
| SMART_ANIMATE 250ms LINEAR | 176 |
| DISSOLVE 200ms LINEAR | 163 |
| SMART_ANIMATE 300ms EASE_IN_AND_OUT | 96 |
| DISSOLVE 600ms LINEAR | 89 |
| SMART_ANIMATE 1250ms SLOW | 60 |
| SMART_ANIMATE 200ms EASE_IN_AND_OUT | 8 |

## CSS mapping (how to implement each official transition)

| Figma | CSS |
|---|---|
| INSTANT | no transition (`transition: none`) |
| SMART_ANIMATE 150ms EASE_OUT | `transition: <changed props> 150ms ease-out` — animate only the properties that change between the two variants (Smart Animate interpolates matching layers: size, position, opacity, colour) |
| SMART_ANIMATE 300ms EASE_OUT | `300ms ease-out` |
| SMART_ANIMATE 200/300ms EASE_IN_AND_OUT | `ease-in-out` |
| SMART_ANIMATE 250ms LINEAR | `250ms linear` |
| SMART_ANIMATE 1250ms SLOW | Figma spring preset "Slow" (1250 ms) — no exact CSS equivalent; use a spring (e.g. motion library) or a gentle `cubic-bezier(0.2, 0, 0, 1)` and verify visually [INFERRED mapping] |
| DISSOLVE Nms LINEAR | opacity cross-fade `opacity Nms linear` |
| AFTER_TIMEOUT(Nms) | auto-advance after N ms (spinner frames, carousel, skeleton shimmer) |

## WEB — per component

| Component | Trigger | Change | Transition | × |
|---|---|---|---|---|
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 6 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 6 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=False | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Hovered, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_PRESS | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=True, Flush=True | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Breadcrumb | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Small, Inline=False | INSTANT | 17 |
| Breadcrumb | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Small, Inline=False | INSTANT | 17 |
| Breadcrumb | ON_CLICK | Type: Middle-overflow→Middle-overflow open | INSTANT | 2 |
| Breadcrumb | ON_CLICK | Breadcrumb Dropdown ⟶ _Breadcrumb Item :: RTL=False, Type=Middle-overflow | INSTANT | 1 |
| Breadcrumb | ON_CLICK | Breadcrumb Dropdown ⟶ _Breadcrumb Item :: RTL=True, Type=Middle-overflow | INSTANT | 1 |
| Breadcrumb | ON_CLICK | _Breadcrumb Item ⟶ _Breadcrumb Item :: RTL=False, Type=Middle-overflow open | INSTANT | 1 |
| Breadcrumb | ON_CLICK | _Breadcrumb Item ⟶ _Breadcrumb Item :: RTL=True, Type=Middle-overflow open | INSTANT | 1 |
| Buttons | ON_PRESS | State: Hovered→Pressed | INSTANT | 344 |
| Buttons | ON_HOVER | State: Default→Hovered | INSTANT | 336 |
| Buttons | ON_HOVER | State: Default→Hovered | DISSOLVE 200ms LINEAR | 8 |
| Card | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 102 |
| Card | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 48 |
| Card | ON_HOVER | State: Default→Hover | SMART_ANIMATE 300ms EASE_OUT | 18 |
| Card | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | INSTANT | 18 |
| Card | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | INSTANT | 18 |
| Card | ON_HOVER | State: Default→Hover | INSTANT | 6 |
| Card | ON_CLICK | State: Hover→Default, Expanded: False→True | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover→Default, Expanded: True→False | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover→Default, Selected: False→True | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover→Default, Selected: True→False | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 5 |
| Card | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | INSTANT | 5 |
| Card | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| Card | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| Carousel | ON_HOVER | State: Default→Hovered | INSTANT | 12 |
| Carousel | ON_PRESS | State: Default→Pressed | INSTANT | 12 |
| Carousel | ON_KEY_DOWN(keys 13) | State: Default→Focused | INSTANT | 12 |
| Carousel | ON_HOVER | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Hovered, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Carousel | ON_PRESS | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Pressed, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Carousel | ON_KEY_DOWN(keys 13) | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Focused, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Carousel | ON_HOVER | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Hovered, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Carousel | ON_PRESS | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Pressed, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Carousel | ON_KEY_DOWN(keys 13) | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Focused, Style=Primary, Size=Large, Icon only=False | INSTANT | 1 |
| Checkbox | ON_HOVER | State: Default→Hovered | INSTANT | 16 |
| Checkbox | ON_PRESS | State: Hovered→Pressed | INSTANT | 16 |
| Checkbox | ON_CLICK | Checked: False→True, State: Pressed→Default | INSTANT | 6 |
| Checkbox | ON_CLICK | Indeterminate: False→True, State: Pressed→Default | INSTANT | 6 |
| Checkbox | ON_CLICK | Checked: True→False, Indeterminate: True→False, State: Pressed→Default | INSTANT | 6 |
| Checkbox | ON_HOVER | State: Default→Hovered | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Checkbox | ON_PRESS | State: Hovered→Pressed | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Checkbox | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Medium, Style=Primary | INSTANT | 2 |
| Chip | ON_HOVER | State: Default→Hovered | INSTANT | 48 |
| Chip | ON_PRESS | State: Hovered→Pressed | INSTANT | 48 |
| Chip | ON_CLICK | State: Pressed→Selected | INSTANT | 48 |
| Chip | ON_CLICK | State: Selected→Default | INSTANT | 48 |
| Code Snippet | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Large, Selected=False, More Tab=No | INSTANT | 5 |
| Code Snippet | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| Code Snippet | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| Code Snippet | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| Content Switcher | ON_HOVER | State: Normal→Hovered | SMART_ANIMATE 300ms EASE_OUT | 36 |
| Content Switcher | ON_CLICK | State: Hovered→Selected | SMART_ANIMATE 300ms EASE_OUT | 36 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=False, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=False, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Hovered, OnColor=True, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Hovered, OnColor=True, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=False, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=False, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Small | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Medium | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Hovered, OnColor=True, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content Switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Hovered, OnColor=True, Size=Large | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell :: Selected=False, Today=False, Nex/Prev=False, State=Hovered, Null=False | INSTANT | 230 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell :: Selected=False, Today=False, Nex/Prev=True, State=Hovered, Null=False | INSTANT | 96 |
| Date Picker | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | INSTANT | 66 |
| Date Picker | ON_HOVER | State: Default→Hovered | INSTANT | 28 |
| Date Picker | ON_PRESS | State: Hovered→Pressed | INSTANT | 28 |
| Date Picker | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Date Picker | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 24 |
| Date Picker | ON_CLICK | Dropdown List Item ⟶ _Year Dropdown :: RTL=False, State=False | SMART_ANIMATE 1250ms SLOW | 21 |
| Date Picker | ON_CLICK | Dropdown List Item ⟶ _Year Dropdown :: RTL=True, State=False | SMART_ANIMATE 1250ms SLOW | 21 |
| Date Picker | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | INSTANT | 18 |
| Date Picker | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | INSTANT | 18 |
| Date Picker | ON_HOVER | Button-menu ⟶ Button-menu :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | INSTANT | 6 |
| Date Picker | ON_CLICK | Dropdown List Item ⟶ None | SMART_ANIMATE 1250ms SLOW | 6 |
| Date Picker | ON_HOVER | Button-menu ⟶ Button-menu :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Icon only=False | INSTANT | 6 |
| Date Picker | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 4 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell :: Selected=False, Today=True, Nex/Prev=False, State=Hovered, Null=False | INSTANT | 4 |
| Date Picker | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 4 |
| Date Picker | ON_CLICK | Button-menu ⟶ _Year Dropdown :: RTL=False, State=False | SMART_ANIMATE 1250ms SLOW | 3 |
| Date Picker | ON_CLICK | Button-menu ⟶ _Year Dropdown :: RTL=True, State=False | SMART_ANIMATE 1250ms SLOW | 3 |
| Date Picker | ON_HOVER | Date1 ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | INSTANT | 2 |
| Date Picker | ON_CLICK | _Year Dropdown ⟶ _Year Dropdown :: RTL=False, State=True | SMART_ANIMATE 1250ms SLOW | 2 |
| Date Picker | ON_HOVER | Tertiary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_HOVER | Secondary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_HOVER | Primary Action ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_HOVER | Date1 ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | INSTANT | 2 |
| Date Picker | ON_CLICK | _Year Dropdown ⟶ _Year Dropdown :: RTL=True, State=True | SMART_ANIMATE 1250ms SLOW | 2 |
| Date Picker | ON_HOVER | Primary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_HOVER | Secondary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_HOVER | Tertiary Action ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Date Picker | ON_CLICK | State: False→True | SMART_ANIMATE 1250ms SLOW | 2 |
| Date Picker | ON_HOVER | Date2 ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | INSTANT | 1 |
| Date Picker | ON_HOVER | Date2 ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Large, Style=Default | INSTANT | 1 |
| Date Picker | ON_HOVER | _Date field ⟶ _Date field :: RTL=True, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | INSTANT | 1 |
| Date Picker | ON_HOVER | _Date field ⟶ _Date field :: RTL=False, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | INSTANT | 1 |
| Digital Stamp | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Small, Inline=False | INSTANT | 4 |
| Digital Stamp | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=True | INSTANT | 4 |
| Digital Stamp | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Small, Inline=False | INSTANT | 4 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=No, Opened=yes, Device=Desktop | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=No, Opened=no, Device=Desktop | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=No, Opened=yes, Device=Mobile | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=No, Opened=no, Device=Mobile | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=Yes, Opened=yes, Device=Desktop | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=Yes, Opened=no, Device=Desktop | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=Yes, Opened=yes, Device=Mobile | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Digital Stamp | ON_CLICK | Link ⟶ Digital Stamp :: RTL=Yes, Opened=no, Device=Mobile | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Dropdown Input | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | INSTANT | 384 |
| Dropdown Input | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Single Select | INSTANT | 384 |
| Dropdown Input | ON_HOVER | State: Default→Hovered | INSTANT | 52 |
| Dropdown Input | ON_PRESS | State: Hovered→Pressed | INSTANT | 52 |
| Dropdown Input | ON_CLICK | State: Focused→Default | SMART_ANIMATE 150ms EASE_OUT | 48 |
| Dropdown Input | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 48 |
| Dropdown Input | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | INSTANT | 8 |
| File upload | ON_HOVER | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 14 |
| File upload | AFTER_TIMEOUT(1ms) | Loading ⟶ Loading :: Size=xx Small, Style=Neutral, Indicator=2 | SMART_ANIMATE 250ms LINEAR | 4 |
| File upload | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| File upload | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| File upload | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| File upload | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| Filtration | ON_HOVER | Radio ⟶ Radio :: State=Hovered, Style=Primary, Selected=False | INSTANT | 96 |
| Filtration | ON_HOVER | Chip ⟶ Chip :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | INSTANT | 96 |
| Filtration | ON_HOVER | Chip ⟶ Chip :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | INSTANT | 96 |
| Filtration | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Single Select | INSTANT | 84 |
| Filtration | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | INSTANT | 84 |
| Filtration | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | INSTANT | 56 |
| Filtration | ON_HOVER | Suffix ⟶ None | INSTANT | 52 |
| Filtration | ON_HOVER | Prefix ⟶ None | INSTANT | 52 |
| Filtration | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Multi Select | INSTANT | 42 |
| Filtration | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Multi Select | INSTANT | 42 |
| Filtration | ON_CLICK | Chip ⟶ Chip :: RTL=True, State=Default, Style=Primary, Size=Large, Rounded=False, On-color=False | INSTANT | 30 |
| Filtration | ON_CLICK | Chip ⟶ Chip :: RTL=False, State=Default, Style=Primary, Size=Large, Rounded=False, On-color=False | INSTANT | 30 |
| Filtration | ON_HOVER | Trailing Icon ⟶ Trailing Icon :: Open=True | INSTANT | 28 |
| Filtration | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | INSTANT | 28 |
| Filtration | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 24 |
| Filtration | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | INSTANT | 24 |
| Filtration | ON_HOVER | Search Box ⟶ Search Box :: RTL=True, State=Hovered, Filled=False, Size=Medium, Style=Default | INSTANT | 14 |
| Filtration | ON_HOVER | Search Box ⟶ Search Box :: RTL=False, State=Hovered, Filled=False, Size=Medium, Style=Default | INSTANT | 14 |
| Filtration | ON_HOVER | ➡️   Left ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | INSTANT | 13 |
| Filtration | ON_HOVER | ➡️   Right ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | INSTANT | 13 |
| Filtration | ON_HOVER | ➡️   Left ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | INSTANT | 13 |
| Filtration | ON_HOVER | ➡️   Right ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | INSTANT | 13 |
| Filtration | ON_HOVER | _Date field ⟶ _Date field :: RTL=True, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | INSTANT | 12 |
| Filtration | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | INSTANT | 12 |
| Filtration | ON_HOVER | _Date field ⟶ _Date field :: RTL=False, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | INSTANT | 12 |
| Filtration | ON_HOVER | Button-menu ⟶ Button-menu :: RTL=True, Size=Large, State=Hovered, Style=Neutral, Icon only=False | INSTANT | 10 |
| Filtration | ON_HOVER | Button-menu ⟶ Button-menu :: RTL=False, Size=Large, State=Hovered, Style=Neutral, Icon only=False | INSTANT | 10 |
| Filtration | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | INSTANT | 7 |
| Filtration | ON_CLICK | Button-menu ⟶ Filtration :: RTL=Yes, Open=No, Result=No, Placement=Center | INSTANT | 6 |
| Filtration | ON_CLICK | Button ⟶ Filtration :: RTL=Yes, Open=No, Result=No, Placement=Center | INSTANT | 6 |
| Filtration | ON_CLICK | Button ⟶ Filtration :: RTL=Yes, Open=No, Result=Yes, Placement=Left | INSTANT | 6 |
| Filtration | ON_CLICK | Button-menu ⟶ Filtration :: RTL=No, Open=No, Result=No, Placement=Center | INSTANT | 6 |
| Filtration | ON_CLICK | Open: No→Yes, Placement: Center→Left | INSTANT | 2 |
| Filtration | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | INSTANT | 1 |
| Filtration | ON_CLICK | _Date field ⟶ Date Picker | INSTANT | 1 |
| Filtration | ON_CLICK | Open: Yes→No, Placement: Right→Center | INSTANT | 1 |
| Filtration | ON_CLICK | Open: Yes→No, Placement: Left→Center | INSTANT | 1 |
| Filtration | ON_CLICK | Open: Yes→No, Result: Yes→No, Placement: Left→Center | INSTANT | 1 |
| Filtration | ON_CLICK | Open: Yes→No | INSTANT | 1 |
| Filtration | ON_CLICK | Open: Yes→No, Result: Yes→No | INSTANT | 1 |
| Filtration | ON_CLICK | Open: No→Yes, Placement: Center→Right | INSTANT | 1 |
| Filtration | ON_CLICK | Open: No→Yes | INSTANT | 1 |
| Filtration | ON_CLICK | Open: No→Yes, Placement: Right→Left | INSTANT | 1 |
| Floating Button | ON_HOVER | State: Default→Hovered | INSTANT | 48 |
| Floating Button | ON_PRESS | State: Hovered→Pressed | INSTANT | 48 |
| Inline Alert | ON_HOVER | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 40 |
| Inline Alert | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 30 |
| Inline Alert | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 30 |
| Inline Alert | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Inline Alert | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Link | ON_HOVER | State: Default→Hovered | INSTANT | 24 |
| Link | ON_PRESS | State: Hovered→Pressed | INSTANT | 24 |
| Loading | AFTER_TIMEOUT(1ms) | Indicator: 2→3 | SMART_ANIMATE 250ms LINEAR | 21 |
| Loading | AFTER_TIMEOUT(1ms) | Indicator: 3→4 | SMART_ANIMATE 250ms LINEAR | 21 |
| Loading | AFTER_TIMEOUT(1ms) | Indicator: 4→1 | SMART_ANIMATE 250ms LINEAR | 21 |
| Loading | AFTER_TIMEOUT(1ms) | Indicator: 1→2 | SMART_ANIMATE 250ms LINEAR | 21 |
| Menu | ON_HOVER | State: Default→Hovered | INSTANT | 12 |
| Menu | ON_PRESS | State: Hovered→Pressed | INSTANT | 12 |
| Menu | ON_CLICK | State: Pressed→Selected | INSTANT | 12 |
| Menu | ON_CLICK | State: Selected→Default | INSTANT | 12 |
| Menu | ON_HOVER | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | INSTANT | 8 |
| Menu | ON_HOVER | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | INSTANT | 8 |
| Menu | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 5 |
| Menu | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 5 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Tag, State=Hovered | INSTANT | 5 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Tag, State=Hovered | INSTANT | 5 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Switch, State=Hovered | INSTANT | 3 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Switch, State=Hovered | INSTANT | 3 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | INSTANT | 2 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | INSTANT | 2 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Icon, State=Hovered | INSTANT | 1 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Icon, State=Hovered | INSTANT | 1 |
| Metric | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 8 |
| Metric | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Metric | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Modals | ON_HOVER | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 8 |
| Modals | ON_HOVER | Secondary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 6 |
| Modals | ON_HOVER | Primary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 6 |
| Modals | ON_HOVER | Primary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 6 |
| Modals | ON_HOVER | Secondary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 6 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 2 |
| Notification | ON_HOVER | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 10 |
| Notification | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Medium, Inline=True | INSTANT | 5 |
| Notification | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 5 |
| Notification | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Medium, Inline=True | INSTANT | 5 |
| Notification | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | INSTANT | 5 |
| Notification Toast | ON_HOVER | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 20 |
| Notification Toast | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Notification Toast | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Notification Toast | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Notification Toast | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | INSTANT | 10 |
| Number Input | ON_HOVER | Prefix ⟶ Input Prefix-Suffix :: Type=Plus, State=Hovered, Style=Solid, Size=Large | INSTANT | 168 |
| Number Input | ON_HOVER | Suffix ⟶ Input Prefix-Suffix :: Type=Minus, State=Hovered, Style=Solid, Size=Large | INSTANT | 168 |
| Number Input | ON_HOVER | Prefix ⟶ Input Prefix-Suffix :: Type=Plus, State=Hovered, Style=Subtle, Size=Large | INSTANT | 80 |
| Number Input | ON_HOVER | Suffix ⟶ Input Prefix-Suffix :: Type=Minus, State=Hovered, Style=Subtle, Size=Large | INSTANT | 80 |
| Number Input | ON_HOVER | State: Default→Hovered | INSTANT | 56 |
| Number Input | ON_PRESS | State: Hovered→Pressed | INSTANT | 56 |
| Number Input | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 48 |
| Number Input | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 48 |
| Pagination | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | INSTANT | 24 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Large, Overflow=No | INSTANT | 8 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Small, Overflow=No | INSTANT | 8 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Meduim, Overflow=No | INSTANT | 8 |
| Pagination | ON_HOVER | State: Default→Hovered | INSTANT | 6 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 4 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 4 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 4 |
| Pagination | ON_CLICK | State: Hovered→Focsed | INSTANT | 3 |
| Pagination | AFTER_TIMEOUT(100ms) | State: Focsed→Current Page | INSTANT | 3 |
| Pagination | ON_HOVER | State: Current Page→Hovered | INSTANT | 3 |
| Pagination | ON_CLICK | State: Hovered→Opened | INSTANT | 3 |
| Pagination | ON_CLICK | State: Opened→Default | INSTANT | 3 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Large, Overflow=Yes | INSTANT | 2 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Small, Overflow=Yes | INSTANT | 2 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Meduim, Overflow=Yes | INSTANT | 2 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Size=Large, Overflow=Yes | INSTANT | 1 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Size=Small, Overflow=Yes | INSTANT | 1 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Size=Meduim, Overflow=Yes | INSTANT | 1 |
| Progress indicator | ON_HOVER | Hover: no→yes | INSTANT | 10 |
| Progress indicator | ON_CLICK | Hover: yes→no, Focused: no→yes | INSTANT | 4 |
| Progress indicator | ON_CLICK | Hover: yes→no, Focused: yes→no | INSTANT | 4 |
| Radio | ON_HOVER | State: Default→Hovered | INSTANT | 4 |
| Radio | ON_PRESS | State: Hovered→Pressed | INSTANT | 4 |
| Radio | ON_CLICK | State: Pressed→Default, Selected: False→True | INSTANT | 2 |
| Radio | ON_CLICK | State: Pressed→Default, Selected: True→False | INSTANT | 2 |
| Radio | ON_HOVER | Radio ⟶ Radio :: State=Hovered, Style=Primary, Selected=False | INSTANT | 2 |
| Rating | ON_HOVER | State: Normal→Pressed | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Rating | ON_CLICK | State: Pressed→Selected | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Large, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Large, State=Pressed, Style=Brand | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Medium, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Medium, State=Pressed, Style=Brand | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Brand | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Search Box | ON_HOVER | Trailing Icon ⟶ Trailing Icon :: Open=True | INSTANT | 144 |
| Search Box | ON_HOVER | State: Default→Hovered | INSTANT | 24 |
| Search Box | ON_PRESS | State: Hovered→Pressed | INSTANT | 24 |
| Search Box | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Search Box | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 24 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Default | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Default | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Default | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Default | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Filled darker | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Filled darker | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Filled darker | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Filled darker | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Filled lighter | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Filled lighter | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Filled lighter | INSTANT | 1 |
| Search Box | ON_CLICK | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Filled lighter | INSTANT | 1 |
| Search Box | ON_HOVER | Open: False→True | INSTANT | 1 |
| Skeleton | AFTER_TIMEOUT(600ms) | Animation State: End→Start | DISSOLVE 600ms LINEAR | 19 |
| Skeleton | AFTER_TIMEOUT(600ms) | Animation State: Start→End | DISSOLVE 600ms LINEAR | 18 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Line ⟶ _Skeleton Line :: Size=Large, Animated State=End, Line or Paragraph=Line | DISSOLVE 600ms LINEAR | 10 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Square ⟶ _Skeleton Square :: Size=48px, Animation State=End | DISSOLVE 600ms LINEAR | 10 |
| Skeleton | AFTER_TIMEOUT(800ms) | _Skeleton Rectangle ⟶ _Skeleton Rectangle :: Size=Large, Width=Long, Animation State=End | DISSOLVE 600ms LINEAR | 9 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Line ⟶ _Skeleton Line :: Size=Small, Animated State=End, Line or Paragraph=Line | DISSOLVE 600ms LINEAR | 6 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=240px, Animation State=Start | DISSOLVE 600ms LINEAR | 6 |
| Skeleton | AFTER_TIMEOUT(800ms) | Animation State: Start→End | DISSOLVE 600ms LINEAR | 2 |
| Skeleton | AFTER_TIMEOUT(600ms) | Animated State: Start→End | DISSOLVE 600ms LINEAR | 2 |
| Skeleton | AFTER_TIMEOUT(600ms) | Animated State: End→Start | DISSOLVE 600ms LINEAR | 2 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=120px, Animation State=Start | DISSOLVE 600ms LINEAR | 2 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=120px, Animation State=End | DISSOLVE 600ms LINEAR | 1 |
| Skeleton | AFTER_TIMEOUT(600ms) | _Skeleton Circle  ⟶ _Skeleton Circle  :: Size=240px, Animation State=End | DISSOLVE 600ms LINEAR | 1 |
| Skeleton | AFTER_TIMEOUT(800ms) | Animation State: End→Start | DISSOLVE 600ms LINEAR | 1 |
| Slideout Menu | ON_HOVER | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | DISSOLVE 200ms LINEAR | 10 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Text, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Button, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Icon, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Text, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Button, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Icon, State=Hovered | INSTANT | 6 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Slideout Menu | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | INSTANT | 4 |
| Structured List | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | INSTANT | 396 |
| Structured List | ON_HOVER | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | INSTANT | 200 |
| Structured List | ON_HOVER | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | INSTANT | 200 |
| Structured List | ON_HOVER | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | INSTANT | 200 |
| Structured List | ON_HOVER | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_PRESS | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Focused (Selectable), Compact=No, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_HOVER | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Hovered (Selectable), Compact=No, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_PRESS | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Focused (Selectable), Compact=No, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_HOVER | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_PRESS | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=No, State=Focused (Selectable), Compact=Yes, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_HOVER | Structured List Row Cell ⟶ Structured List Row Cell :: RTL=Yes, State=Hovered (Selectable), Compact=Yes, Selectable=Yes, Selected=No | INSTANT | 96 |
| Structured List | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | INSTANT | 12 |
| Structured List | ON_PRESS | State: Hovered (Selectable)→Focused (Selectable) | INSTANT | 8 |
| Structured List | ON_HOVER | State: Default (Selectable)→Hovered (Selectable) | INSTANT | 7 |
| Structured List | ON_PRESS | State: Default (Selectable)→Focused (Selectable) | INSTANT | 6 |
| Switch | ON_HOVER | State: Default→Hovered | INSTANT | 4 |
| Switch | ON_PRESS | State: Hovered→Pressed | INSTANT | 4 |
| Switch | ON_CLICK | State: Pressed→Default, On: False→True | SMART_ANIMATE 200ms EASE_IN_AND_OUT | 2 |
| Switch | ON_CLICK | State: Pressed→Default, On: True→False | SMART_ANIMATE 200ms EASE_IN_AND_OUT | 2 |
| Switch | ON_HOVER | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | INSTANT | 2 |
| Switch | ON_HOVER | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | INSTANT | 2 |
| Table | ON_HOVER | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=Small, Style=Primary | INSTANT | 268 |
| Table | ON_HOVER | Table Header Cell - Filter ⟶ Table Header Cell - Filter :: State=Hovered, Active=False | INSTANT | 148 |
| Table | ON_HOVER | Help Icon ⟶ Help Icon :: Open=True, Placement=Bottom, Alignment=Center | INSTANT | 128 |
| Table | ON_HOVER | Table Header Cell - Sort ⟶ Table Header Cell - Sort :: State=Hovered, Sort=Off | INSTANT | 128 |
| Table | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=False | INSTANT | 124 |
| Table | ON_HOVER | 1st action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | 2nd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | 3rd action ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Inline=False | INSTANT | 124 |
| Table | ON_HOVER | 3rd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | 2nd action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | 1st action ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 124 |
| Table | ON_HOVER | State: Default→Hovered | INSTANT | 5 |
| Table | ON_PRESS | State: Hovered→Pressed | INSTANT | 5 |
| Table | ON_HOVER | Prefix ⟶ None | INSTANT | 4 |
| Table | ON_HOVER | Suffix ⟶ None | INSTANT | 4 |
| Table | ON_HOVER | Text Input ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Filled darker | INSTANT | 2 |
| Table | ON_HOVER | Switch ⟶ Switch :: RTL=False, State=Hovered, On=False | INSTANT | 2 |
| Table | ON_HOVER | Text Input ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Filled darker | INSTANT | 2 |
| Table | ON_HOVER | Switch ⟶ Switch :: RTL=True, State=Hovered, On=False | INSTANT | 2 |
| Table | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| Table | ON_HOVER | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| Table | ON_CLICK | State: Pressed→Default, Sort: Off→Down | INSTANT | 1 |
| Table | ON_CLICK | State: Pressed→Default, Sort: Down→Up | INSTANT | 1 |
| Table | ON_CLICK | State: Pressed→Default, Sort: Up→Off | INSTANT | 1 |
| Table | ON_CLICK | State: Pressed→Default, Active: False→True | INSTANT | 1 |
| Table | ON_CLICK | State: Pressed→Default, Active: True→False | INSTANT | 1 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Medium, Selected=False, More Tab=No | INSTANT | 16 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Hovered, Size=Medium, Selected=False, More Tab=No | INSTANT | 16 |
| Tabs | ON_HOVER | State: Default→Hovered | INSTANT | 12 |
| Tabs | ON_PRESS | State: Hovered→Pressed | INSTANT | 12 |
| Tabs | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 12 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Medium, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Large, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Medium, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Large, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=False, State=Hovered, Size=Small, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab :: RTL=True, State=Hovered, Size=Small, Selected=False | INSTANT | 8 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Large, Selected=False, More Tab=No | INSTANT | 5 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Hovered, Size=Large, Selected=False, More Tab=No | INSTANT | 5 |
| Tabs | ON_CLICK | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Open, Size=Medium, Selected=True, More Tab=Yes | INSTANT | 4 |
| Tabs | ON_CLICK | Horizontal Tab ⟶ Horizontal Tab :: RTL=True, State=Open, Size=Medium, Selected=True, More Tab=Yes | INSTANT | 4 |
| Tabs | ON_CLICK | State: Closed→Open, Selected: False→True | INSTANT | 2 |
| Text input | ON_HOVER | Prefix ⟶ None | INSTANT | 234 |
| Text input | ON_HOVER | Suffix ⟶ None | INSTANT | 233 |
| Text input | ON_HOVER | State: Default→Hovered | INSTANT | 56 |
| Text input | ON_PRESS | State: Hovered→Pressed | INSTANT | 56 |
| Text input | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 48 |
| Text input | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 48 |
| Text input | ON_CLICK | State: Pressed→Selected | INSTANT | 8 |
| Text input | ON_CLICK | State: Selected→Default | INSTANT | 8 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Solid, Size=Large ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Solid, Size=Large ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ None | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ None | INSTANT | 1 |
| Textarea | ON_HOVER | State: Default→Hovered | INSTANT | 24 |
| Textarea | ON_PRESS | State: Hovered→Pressed | INSTANT | 24 |
| Textarea | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Textarea | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 24 |
| Tooltip | ON_HOVER | Open: False→True | INSTANT | 24 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Small, Inline=False | INSTANT | 54 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Small, Inline=False | INSTANT | 54 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=On-color, Size=Small, Inline=False | INSTANT | 54 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=On-color, Size=Small, Inline=False | INSTANT | 54 |
| UI Shell - Footer | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | INSTANT | 28 |
| UI Shell - Footer | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | INSTANT | 28 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Small, Inline=True | INSTANT | 13 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Small, Inline=True | INSTANT | 13 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=False, State=Hovered, Style=On-color, Size=Small, Inline=True | INSTANT | 13 |
| UI Shell - Footer | ON_HOVER | Link ⟶ Link :: RTL=True, State=Hovered, Style=On-color, Size=Small, Inline=True | INSTANT | 13 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Link, On Color=False, Level=Level 2, Expanded=False | INSTANT | 56 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Link, On Color=False, Level=Level 2, Expanded=False | INSTANT | 56 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Link, On Color=True, Level=Level 2, Expanded=False | INSTANT | 28 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Link, On Color=True, Level=Level 2, Expanded=False | INSTANT | 28 |
| UI Shell - Nav Drawer | ON_HOVER | State: Default→Hovered | INSTANT | 16 |
| UI Shell - Nav Drawer | ON_PRESS | State: Hovered→Pressed | INSTANT | 16 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True | INSTANT | 12 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=True | INSTANT | 12 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False | INSTANT | 8 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=False, Level=Level 1, Expanded=False | INSTANT | 8 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=False, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False | INSTANT | 4 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item :: RTL=True, State=Hovered, Type=Parent (Sub-menu), On Color=True, Level=Level 1, Expanded=False | INSTANT | 4 |
| UI Shell - Nav Header | ON_HOVER | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=False, State=Hovered, On-color=False | INSTANT | 96 |
| UI Shell - Nav Header | ON_HOVER | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=False, State=Hovered, On-color=True | INSTANT | 96 |
| UI Shell - Nav Header | ON_HOVER | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=True, State=Hovered, On-color=True | INSTANT | 96 |
| UI Shell - Nav Header | ON_HOVER | Header Sub-menu Item ⟶ Header Sub-menu Item :: RTL=True, State=Hovered, On-color=False | INSTANT | 96 |
| UI Shell - Nav Header | ON_PRESS | State: Hovered→Pressed | INSTANT | 22 |
| UI Shell - Nav Header | ON_HOVER | State: Default→Hovered | INSTANT | 14 |
| UI Shell - Nav Header | ON_HOVER | Header Menu Item ⟶ Header Menu Item :: RTL=False, State=Hovered, Selected=False | INSTANT | 10 |
| UI Shell - Nav Header | ON_HOVER | Header Menu Item ⟶ Header Menu Item :: RTL=True, State=Hovered, Selected=False | INSTANT | 10 |
| UI Shell - Nav Header | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 10 |
| UI Shell - Nav Header | ON_CLICK | Selected: True→False | INSTANT | 8 |
| UI Shell - Nav Header | ON_HOVER | State: Default→Hovered | SMART_ANIMATE 300ms EASE_OUT | 8 |
| UI Shell - Nav Header | ON_CLICK | State: Pressed→Default, Selected: True→False | INSTANT | 8 |
| UI Shell - Nav Header | ON_CLICK | State: Pressed→Default, Selected: False→True | INSTANT | 8 |
| UI Shell - Nav Header | ON_HOVER | Header Menu ⟶ Header Menu :: Opened=False, State=Hovered | INSTANT | 4 |
| UI Shell - Nav Header | ON_HOVER | Header Action 1 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_HOVER | Header Action 2 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_HOVER | Header Action 3 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_HOVER | Header Action 2 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_HOVER | Header Action 1 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_PRESS | Button ⟶ Button :: RTL=False, Size=Large, State=Pressed, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 2 |
| UI Shell - Nav Header | ON_CLICK | Header Action 3 ⟶ Header Action :: RTL=False, State=Default, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=True, Icon position=Inline, Icon only=False | SMART_ANIMATE 300ms EASE_OUT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Inline, Icon only=False | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 1 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 2 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 3 ⟶ Header Action :: RTL=False, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 3 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 2 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_HOVER | Header Action 1 ⟶ Header Action :: RTL=True, State=Hovered, Selected=False, Icon position=Top, Icon only=True | INSTANT | 1 |
| UI Shell - Nav Header | ON_CLICK | Opened: False→True, State: Pressed→Default | INSTANT | 1 |
| UI Shell - Nav Header | ON_CLICK | Opened: True→False, State: Pressed→Default | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 1 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 2 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 5 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 3 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 1 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 2 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 5 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 3 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 1 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 2 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 5 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 3 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 1 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 2 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 5 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Second Level Nav Header | ON_HOVER | Button 3 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | INSTANT | 1 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 1 (H2) | INSTANT | 11 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 1 (H2) | INSTANT | 10 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 2 (H3) | INSTANT | 7 |
| UI Shell - Table of Content | ON_HOVER | State: Default→Hovered | INSTANT | 6 |
| UI Shell - Table of Content | ON_PRESS | State: Hovered→Pressed | INSTANT | 6 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 2 (H3) | INSTANT | 6 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=False, State=Hovered, Selected=False, Level=Level 3 (H4) | INSTANT | 2 |
| UI Shell - Table of Content | ON_HOVER | TOC Item ⟶ TOC Item :: RTL=True, State=Hovered, Selected=False, Level=Level 3 (H4) | INSTANT | 2 |

## MOBILE — per component

| Component | Trigger | Change | Transition | × |
|---|---|---|---|---|
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Trailing, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Trailing/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Trailing, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/False/False | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=False ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/True/False | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=False | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/False/True | INSTANT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=False, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Small, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Medium, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | RTL=True, Size=Large, Icon alignment=Leading, State=Pressed, Expanded=False, Flush=True ⟶ None | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=True, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Large/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Medium/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/False/Small/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Small/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Medium/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_HOVER | Accordion header ⟶ Accordion/True/Large/Leading/Hovered/True/True | INSTANT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=False, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Small, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Medium, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Accordions | ON_CLICK | Accordion header ⟶ Accordion :: RTL=True, Size=Large, Icon alignment=Leading, State=Default, Expanded=False, Flush=True | SMART_ANIMATE 300ms EASE_IN_AND_OUT | 1 |
| Banner | ON_HOVER | Button-Close ⟶ Button-Close/Medium/Hovered/False | DISSOLVE 200ms LINEAR | 10 |
| Banner | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Primary-Neutral/False/False | INSTANT | 1 |
| Banner | ON_HOVER | Link ⟶ Link/True/Medium (16px)/Neutral/True/Hovered | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Pr | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Secon | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/Fals | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/False/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/False/T | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Transp | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Transpar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Transpare | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Pr | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/P | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Pr | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovere | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/Fa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/Fal | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/Fals | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Tran | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Trans | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Transp | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Pr | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Secon | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/Fals | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/False/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/False/T | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Transp | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Transpar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Transpare | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primary | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary- | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Secon | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Second | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/True/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/True/T | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/True/Fa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/True/Tru | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Transpar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Transpare | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Transparen | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Pr | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/P | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/Tru | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/True/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/True/T | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Trans | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Transp | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Transpar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Prim | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Pri | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primary | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary- | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Prima | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Secon | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Second | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/S | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Se | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Sec | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Seco | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/True/ | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/True/T | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/True/Fa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/True/Tru | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Transpa | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Transpar | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Transpare | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Transparen | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Large/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Large/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Large/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Large/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Large/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Large/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Large/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Large/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Large/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Large/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Large/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Large/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Small/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Small/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Small/Hovered/Primary-Brand/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Small/Hovered/Primary-Neutral/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Small/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Small/Hovered/Secondary-Solid/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Small/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Small/Hovered/Secondary-Outline/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Small/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Small/Hovered/Subtle/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Small/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Small/Hovered/Transparent/False | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Large/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Large/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Large/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Large/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Large/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Large/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Large/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Large/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Large/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Large/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Large/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Large/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Small/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Small/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Small/Hovered/Primary-Brand/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Small/Hovered/Primary-Neutral/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Small/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Small/Hovered/Secondary-Solid/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Small/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Small/Hovered/Secondary-Outline/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Small/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Small/Hovered/Subtle/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Small/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Small/Hovered/Transparent/True | INSTANT | 1 |
| Buttons | ON_HOVER | Size=x Small, State=Default, On-color=False ⟶ Button-Close/x Small/Hovered/False | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Small, State=Default, On-color=False ⟶ Button-Close/Small/Hovered/False | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Medium, State=Default, On-color=False ⟶ Button-Close/Medium/Hovered/False | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Large, State=Default, On-color=False ⟶ Button-Close/Large/Hovered/False | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=x Small, State=Default, On-color=True ⟶ Button-Close/x Small/Hovered/True | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Small, State=Default, On-color=True ⟶ Button-Close/Small/Hovered/True | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Medium, State=Default, On-color=True ⟶ Button-Close/Medium/Hovered/True | DISSOLVE 200ms LINEAR | 1 |
| Buttons | ON_HOVER | Size=Large, State=Default, On-color=True ⟶ Button-Close/Large/Hovered/True | DISSOLVE 200ms LINEAR | 1 |
| Card | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 102 |
| Card | ON_HOVER | Button ⟶ Button/False/Large/Hovered/Subtle/True/False | INSTANT | 48 |
| Card | ON_HOVER | Checkbox ⟶ Checkbox/False/False/Hovered/Small/Brand | INSTANT | 48 |
| Card | ON_HOVER | State: Default→Hover | INSTANT | 6 |
| Card | ON_HOVER | State: Default (Expanded)→Hover (Expanded) | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover→Default (Expanded) | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover (Expanded)→Default | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_HOVER | State: Default→Hover | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_HOVER | State: Default (Selected)→Hover (Selected) | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover→Default (Selected) | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_CLICK | State: Hover (Selected)→Default | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Card | ON_HOVER | Button ⟶ Button/False/Large/Hovered/Secondary-Outline/False/False | INSTANT | 1 |
| Card | ON_HOVER | Button ⟶ Button/True/Large/Hovered/Primary-Brand/False/False | INSTANT | 1 |
| Card | ON_HOVER | Button ⟶ Button/True/Large/Hovered/Secondary-Outline/False/False | INSTANT | 1 |
| Checkbox | ON_HOVER | Checkbox ⟶ Checkbox/False/False/Hovered/Medium/Brand | INSTANT | 2 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Brand ⟶ Checkbox/False/False/Hovered/Medium/Brand | INSTANT | 1 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=Medium, Style=Neutral ⟶ Checkbox/False/False/Hovered/Medium/Neutral | INSTANT | 1 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Brand ⟶ Checkbox/False/False/Hovered/Small/Brand | INSTANT | 1 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=Small, Style=Neutral ⟶ Checkbox/False/False/Hovered/Small/Neutral | INSTANT | 1 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Brand ⟶ Checkbox/False/False/Hovered/x Small/Brand | INSTANT | 1 |
| Checkbox | ON_HOVER | Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Neutral ⟶ Checkbox/False/False/Hovered/x Small/Neutral | INSTANT | 1 |
| Content switcher | ON_HOVER | State: Normal→Pressed | SMART_ANIMATE 300ms EASE_OUT | 12 |
| Content switcher | ON_CLICK | State: Pressed→Selected | SMART_ANIMATE 300ms EASE_OUT | 12 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Pressed, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Pressed, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Mid, State=Pressed, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Mid, State=Pressed, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Pressed, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Pressed, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=False, Item Type=Last, State=Pressed, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Content switcher | ON_HOVER | _Content Switcher Item ⟶ _Content Switcher Item :: RTL=True, Item Type=Last, State=Pressed, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 1 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell/False/False/False/Hovered/False | INSTANT | 117 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell/False/False/True/Hovered/False | INSTANT | 44 |
| Date Picker | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 8 |
| Date Picker | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 8 |
| Date Picker | ON_HOVER | Date cell ⟶ Date cell/False/True/False/Hovered/False | INSTANT | 3 |
| Date Picker | ON_HOVER | Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False ⟶ Date cell/False/False/False/Hovered/False | INSTANT | 1 |
| Date Picker | ON_HOVER | Selected=False, Today=True, Nex/Prev=False, State=Default, Null=False ⟶ Date cell/False/True/False/Hovered/False | INSTANT | 1 |
| Date Picker | ON_HOVER | Selected=False, Today=False, Nex/Prev=True, State=Default, Null=False ⟶ Date cell/False/False/True/Hovered/False | INSTANT | 1 |
| Date Picker | ON_HOVER | Selected=False, Today=True, Nex/Prev=True, State=Default, Null=False ⟶ Date cell/False/True/True/Hovered/False | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default ⟶ _Date field/False/Hovered/True/False/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default ⟶ _Date field/False/Hovered/False/False/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default ⟶ _Date field/False/Hovered/True/True/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default ⟶ _Date field/False/Hovered/False/True/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=True, State=Default, Filled=False, Error=True, Size=Large, Style=Default ⟶ _Date field/True/Hovered/False/True/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=True, State=Default, Filled=True, Error=True, Size=Large, Style=Default ⟶ _Date field/True/Hovered/True/True/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=True, State=Default, Filled=False, Error=False, Size=Large, Style=Default ⟶ _Date field/True/Hovered/False/False/Large/Default | INSTANT | 1 |
| Date Picker | ON_HOVER | RTL=True, State=Default, Filled=True, Error=False, Size=Large, Style=Default ⟶ _Date field/True/Hovered/True/False/Large/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item/False/Hovered/Single Select | INSTANT | 192 |
| Dropdown Input | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item/True/Hovered/Single Select | INSTANT | 192 |
| Dropdown Input | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Dropdown Input | ON_CLICK | State: Focused→Default | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Dropdown Input | ON_HOVER | RTL=False, State=Default, Type=Single Select ⟶ Dropdown List Item/False/Hovered/Single Select | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, State=Default, Type=Single Select ⟶ Dropdown List Item/True/Hovered/Single Select | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, State=Default, Type=Multi Select ⟶ Dropdown List Item/False/Hovered/Multi Select | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, State=Default, Type=Multi Select ⟶ Dropdown List Item/True/Hovered/Multi Select | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=False, Style=Default ⟶ Dropdown Input/False/False/Hovered/False/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=True, Style=Default ⟶ Dropdown Input/False/False/Hovered/True/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/False/False/Hovered/False/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/False/False/Hovered/True/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/False/False/Hovered/False/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=False, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/False/False/Hovered/True/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/True/False/Hovered/True/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/True/False/Hovered/False/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/True/False/Hovered/True/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/True/False/Hovered/False/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=True, Style=Default ⟶ Dropdown Input/True/False/Hovered/True/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=False, State=Default, Error=False, Style=Default ⟶ Dropdown Input/True/False/Hovered/False/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=False, Style=Default ⟶ Dropdown Input/False/True/Hovered/False/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=True, Style=Default ⟶ Dropdown Input/False/True/Hovered/True/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/False/True/Hovered/False/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/False/True/Hovered/True/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/False/True/Hovered/False/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=False, Filled=True, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/False/True/Hovered/True/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/True/True/Hovered/True/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/True/True/Hovered/False/Filled darker | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/True/True/Hovered/True/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/True/True/Hovered/False/Filled lighter | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=True, Style=Default ⟶ Dropdown Input/True/True/Hovered/True/Default | INSTANT | 1 |
| Dropdown Input | ON_HOVER | RTL=True, Filled=True, State=Default, Error=False, Style=Default ⟶ Dropdown Input/True/True/Hovered/False/Default | INSTANT | 1 |
| File upload | AFTER_TIMEOUT(1ms) | Spinner ⟶ Spinner :: Size=tiny, Style=Neutral, Indicator=2 | SMART_ANIMATE 250ms LINEAR | 4 |
| File upload | ON_HOVER | Button-Close ⟶ Button-Close/x Small/Hovered/False | DISSOLVE 200ms LINEAR | 2 |
| File upload | ON_HOVER | Button ⟶ Button/False/Medium/Hovered/Secondary-Solid/False/False | INSTANT | 1 |
| File upload | ON_HOVER | Button ⟶ Button/True/Medium/Hovered/Secondary-Solid/False/False | INSTANT | 1 |
| File upload | ON_HOVER | Button ⟶ Button/False/Small/Hovered/Primary-Neutral/False/False | INSTANT | 1 |
| File upload | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Primary-Neutral/False/False | INSTANT | 1 |
| Inline Alert | ON_HOVER | Button-Close ⟶ Button-Close/Small/Hovered/False | DISSOLVE 200ms LINEAR | 20 |
| Inline Alert | ON_HOVER | Button ⟶ Button/False/Small/Hovered/Subtle/False/False | INSTANT | 20 |
| Inline Alert | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Subtle/False/False | INSTANT | 20 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=Brand, Inline=False, State=Default ⟶ Link/False/Small (14px)/Brand/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=Brand, Inline=False, State=Default ⟶ Link/True/Small (14px)/Brand/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=Neutral, Inline=False, State=Default ⟶ Link/False/Small (14px)/Neutral/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=Neutral, Inline=False, State=Default ⟶ Link/True/Small (14px)/Neutral/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=Brand, Inline=True, State=Default ⟶ Link/False/Small (14px)/Brand/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=Brand, Inline=True, State=Default ⟶ Link/True/Small (14px)/Brand/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=Neutral, Inline=True, State=Default ⟶ Link/False/Small (14px)/Neutral/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=Neutral, Inline=True, State=Default ⟶ Link/True/Small (14px)/Neutral/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=Brand, Inline=False, State=Default ⟶ Link/False/Medium (16px)/Brand/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=Brand, Inline=False, State=Default ⟶ Link/True/Medium (16px)/Brand/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=Neutral, Inline=False, State=Default ⟶ Link/False/Medium (16px)/Neutral/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=Neutral, Inline=False, State=Default ⟶ Link/True/Medium (16px)/Neutral/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=Brand, Inline=True, State=Default ⟶ Link/False/Medium (16px)/Brand/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=Brand, Inline=True, State=Default ⟶ Link/True/Medium (16px)/Brand/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=Neutral, Inline=True, State=Default ⟶ Link/False/Medium (16px)/Neutral/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=Neutral, Inline=True, State=Default ⟶ Link/True/Medium (16px)/Neutral/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=On-color, Inline=False, State=Default ⟶ Link/False/Small (14px)/On-color/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Small (14px), Style=On-color, Inline=True, State=Default ⟶ Link/False/Small (14px)/On-color/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=On-color, Inline=False, State=Default ⟶ Link/False/Medium (16px)/On-color/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=False, Size=Medium (16px), Style=On-color, Inline=True, State=Default ⟶ Link/False/Medium (16px)/On-color/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=On-color, Inline=False, State=Default ⟶ Link/True/Small (14px)/On-color/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Small (14px), Style=On-color, Inline=True, State=Default ⟶ Link/True/Small (14px)/On-color/True/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=On-color, Inline=False, State=Default ⟶ Link/True/Medium (16px)/On-color/False/Hovered | INSTANT | 1 |
| Link | ON_HOVER | RTL=True, Size=Medium (16px), Style=On-color, Inline=True, State=Default ⟶ Link/True/Medium (16px)/On-color/True/Hovered | INSTANT | 1 |
| List | ON_HOVER | Switch ⟶ Switch/True/Hovered/False | INSTANT | 4 |
| List | ON_HOVER | State: Default→Pressed | SMART_ANIMATE 300ms EASE_OUT | 2 |
| List | ON_CLICK | State: Pressed→Selected | SMART_ANIMATE 300ms EASE_OUT | 2 |
| List | ON_HOVER | Switch ⟶ Switch/False/Hovered/False | INSTANT | 1 |
| List | ON_HOVER | Switch ⟶ Switch/False/Hovered/True | INSTANT | 1 |
| List | ON_HOVER | Switch ⟶ Switch/True/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Badge/Hovered/False | INSTANT | 5 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Badge/Hovered/True | INSTANT | 5 |
| Menu | ON_HOVER | Button ⟶ Button/False/Small/Hovered/Subtle/True/False | INSTANT | 3 |
| Menu | ON_HOVER | Switch ⟶ Switch/False/Hovered/False | INSTANT | 3 |
| Menu | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Subtle/True/False | INSTANT | 3 |
| Menu | ON_HOVER | Switch ⟶ Switch/True/Hovered/False | INSTANT | 3 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Switch/Hovered/False | INSTANT | 3 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Switch/Hovered/True | INSTANT | 3 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/None/Hovered/False | INSTANT | 2 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/None/Hovered/True | INSTANT | 2 |
| Menu | ON_HOVER | RTL=False, Trail element=None, State=Default ⟶ Menu list item/None/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | RTL=False, Trail element=Text, State=Default ⟶ Menu list item/Text/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | RTL=False, Trail element=Icon, State=Default ⟶ Menu list item/Icon/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | RTL=False, Trail element=Tag, State=Default ⟶ Menu list item/Badge/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | RTL=False, Trail element=Switch, State=Default ⟶ Menu list item/Switch/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | RTL=True, Trail element=None, State=Default ⟶ Menu list item/None/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | RTL=True, Trail element=Text, State=Default ⟶ Menu list item/Text/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | RTL=True, Trail element=Icon, State=Default ⟶ Menu list item/Icon/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | RTL=True, Trail element=Tag, State=Default ⟶ Menu list item/Badge/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | RTL=True, Trail element=Switch, State=Default ⟶ Menu list item/Switch/Hovered/True | INSTANT | 1 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Icon/Hovered/False | INSTANT | 1 |
| Menu | ON_HOVER | Menu list item ⟶ Menu list item/Icon/Hovered/True | INSTANT | 1 |
| Modals | ON_HOVER | Primary Action ⟶ Button/False/Small/Hovered/Subtle/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Primary Action ⟶ Button/True/Small/Hovered/Subtle/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Secondary Action ⟶ Button/False/Medium/Hovered/Secondary-Outline/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Primary Action ⟶ Button/False/Medium/Hovered/Primary-Neutral/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Primary Action ⟶ Button/True/Medium/Hovered/Primary-Neutral/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Secondary Action ⟶ Button/True/Medium/Hovered/Secondary-Outline/False/False | INSTANT | 2 |
| Modals | ON_HOVER | Button-Close ⟶ Button-Close/Medium/Hovered/False | DISSOLVE 200ms LINEAR | 1 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button/False/Medium/Hovered/Subtle/False/False | INSTANT | 1 |
| Modals | ON_HOVER | Tertiary Action ⟶ Button/True/Medium/Hovered/Subtle/False/False | INSTANT | 1 |
| Notification Toast | ON_HOVER | Button-Close ⟶ Button-Close/Medium/Hovered/False | DISSOLVE 200ms LINEAR | 10 |
| Notification Toast | ON_HOVER | Button ⟶ Button/False/Small/Hovered/Subtle/False/False | INSTANT | 10 |
| Notification Toast | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Subtle/False/False | INSTANT | 10 |
| Pagination | ON_HOVER | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | INSTANT | 27 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem/Hover/no/Large | INSTANT | 5 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem/Hover/no/Small | INSTANT | 5 |
| Pagination | ON_HOVER | _PaginationItem ⟶ _PaginationItem/Hover/no/Meduim | INSTANT | 5 |
| Pagination | AFTER_TIMEOUT(100ms) | State: Focsed→Current Page | INSTANT | 3 |
| Pagination | ON_CLICK | State: Opened→Default | INSTANT | 3 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Icon only=True, On-color=False | INSTANT | 2 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Icon only=True, On-color=False | INSTANT | 2 |
| Pagination | ON_HOVER | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Icon only=True, On-color=False | INSTANT | 2 |
| Pagination | ON_HOVER | State=Default, Overflow=no, Size=Large ⟶ _PaginationItem/Hover/no/Large | INSTANT | 1 |
| Pagination | ON_HOVER | State=Default, Overflow=no, Size=Small ⟶ _PaginationItem/Hover/no/Small | INSTANT | 1 |
| Pagination | ON_HOVER | State=Default, Overflow=no, Size=Meduim ⟶ _PaginationItem/Hover/no/Meduim | INSTANT | 1 |
| Pagination | ON_HOVER | State=Current Page, Overflow=no, Size=Large ⟶ _PaginationItem/Hover/no/Large | INSTANT | 1 |
| Pagination | ON_HOVER | State=Current Page, Overflow=no, Size=Small ⟶ _PaginationItem/Hover/no/Small | INSTANT | 1 |
| Pagination | ON_HOVER | State=Current Page, Overflow=no, Size=Meduim ⟶ _PaginationItem/Hover/no/Meduim | INSTANT | 1 |
| Pagination | ON_HOVER | State=Default, Overflow=yes, Size=Large ⟶ _PaginationItem/Hover/yes/Large | INSTANT | 1 |
| Pagination | ON_HOVER | State=Default, Overflow=yes, Size=Small ⟶ _PaginationItem/Hover/yes/Small | INSTANT | 1 |
| Pagination | ON_HOVER | State=Default, Overflow=yes, Size=Meduim ⟶ _PaginationItem/Hover/yes/Meduim | INSTANT | 1 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Large | INSTANT | 1 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Small | INSTANT | 1 |
| Pagination | ON_CLICK | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Meduim | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=no, Alignment=Horizontal, State=Completed, Focused=no ⟶ Stepper/Horizontal/Completed/yes/no/no | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=yes, Alignment=Horizontal, State=Completed, Focused=no ⟶ Stepper/Horizontal/Completed/yes/no/yes | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=no, Alignment=Horizontal, State=Completed, Focused=yes ⟶ Stepper/Horizontal/Completed/yes/yes/no | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=yes, Alignment=Horizontal, State=Completed, Focused=yes ⟶ Stepper/Horizontal/Completed/yes/yes/yes | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=no, Alignment=Horizontal, State=Upcomming, Focused=no ⟶ Stepper/Horizontal/Upcomming/yes/no/no | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=yes, Alignment=Horizontal, State=Upcomming, Focused=no ⟶ Stepper/Horizontal/Upcomming/yes/no/yes | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=no, Alignment=Horizontal, State=Current, Focused=no ⟶ Stepper/Horizontal/Current/yes/no/no | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=yes, Alignment=Horizontal, State=Current, Focused=no ⟶ Stepper/Horizontal/Current/yes/no/yes | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=no, Alignment=Horizontal, State=Current, Focused=yes ⟶ Stepper/Horizontal/Current/yes/yes/no | INSTANT | 1 |
| Progress indicator | ON_HOVER | RTL=yes, Alignment=Horizontal, State=Current, Focused=yes ⟶ Stepper/Horizontal/Current/yes/yes/yes | INSTANT | 1 |
| Rating | ON_HOVER | State: Normal→Pressed | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Rating | ON_CLICK | State: Pressed→Selected | SMART_ANIMATE 300ms EASE_OUT | 6 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Large, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Medium, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Rating | ON_HOVER | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | SMART_ANIMATE 300ms EASE_OUT | 2 |
| Spinner | AFTER_TIMEOUT(1ms) | Indicator: 2→3 | SMART_ANIMATE 250ms LINEAR | 21 |
| Spinner | AFTER_TIMEOUT(1ms) | Indicator: 3→4 | SMART_ANIMATE 250ms LINEAR | 21 |
| Spinner | AFTER_TIMEOUT(1ms) | Indicator: 4→1 | SMART_ANIMATE 250ms LINEAR | 21 |
| Spinner | AFTER_TIMEOUT(1ms) | Indicator: 1→2 | SMART_ANIMATE 250ms LINEAR | 21 |
| Switch | ON_CLICK | State: Pressed→Default, On: False→True | SMART_ANIMATE 200ms EASE_IN_AND_OUT | 2 |
| Switch | ON_CLICK | State: Pressed→Default, On: True→False | SMART_ANIMATE 200ms EASE_IN_AND_OUT | 2 |
| Switch | ON_HOVER | Switch ⟶ Switch/False/Hovered/False | INSTANT | 2 |
| Switch | ON_HOVER | Switch ⟶ Switch/True/Hovered/False | INSTANT | 2 |
| Switch | ON_HOVER | RTL=False, State=Default, On=False ⟶ Switch/False/Hovered/False | INSTANT | 1 |
| Switch | ON_HOVER | RTL=False, State=Default, On=True ⟶ Switch/False/Hovered/True | INSTANT | 1 |
| Switch | ON_HOVER | RTL=True, State=Default, On=True ⟶ Switch/True/Hovered/True | INSTANT | 1 |
| Switch | ON_HOVER | RTL=True, State=Default, On=False ⟶ Switch/True/Hovered/False | INSTANT | 1 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab/False/Medium/False/Hovered | INSTANT | 12 |
| Tabs | ON_HOVER | Horizontal Tab ⟶ Horizontal Tab/True/Medium/False/Hovered | INSTANT | 12 |
| Tabs | ON_HOVER | Button ⟶ Button/False/Medium/Hovered/Subtle/True/False | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab/False/Medium/False/Hovered | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab/True/Medium/False/Hovered | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab/False/Small/False/Hovered | INSTANT | 8 |
| Tabs | ON_HOVER | Vertical Tab ⟶ Vertical Tab/True/Small/False/Hovered | INSTANT | 8 |
| Tabs | ON_HOVER | RTL=False, Size=Medium, Selected=False, State=Default ⟶ Horizontal Tab/False/Medium/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=True, Size=Medium, Selected=False, State=Default ⟶ Horizontal Tab/True/Medium/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=False, Size=Small, Selected=False, State=Default ⟶ Horizontal Tab/False/Small/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=True, Size=Small, Selected=False, State=Default ⟶ Horizontal Tab/True/Small/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=False, Size=Medium, Selected=False, State=Default ⟶ Vertical Tab/False/Medium/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=True, Size=Medium, Selected=False, State=Default ⟶ Vertical Tab/True/Medium/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=False, Size=Small, Selected=False, State=Default ⟶ Vertical Tab/False/Small/False/Hovered | INSTANT | 1 |
| Tabs | ON_HOVER | RTL=True, Size=Small, Selected=False, State=Default ⟶ Vertical Tab/True/Small/False/Hovered | INSTANT | 1 |
| Text input | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 8 |
| Text input | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 8 |
| Text input | ON_CLICK | State: Pressed→Selected | INSTANT | 8 |
| Text input | ON_CLICK | State: Selected→Default | INSTANT | 8 |
| Text input | ON_HOVER | RTL=False, State=Default, Filled=True, Error=False ⟶ Text Input/False/Hovered/True/False | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, State=Default, Filled=False, Error=False ⟶ Text Input/False/Hovered/False/False | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, State=Default, Filled=True, Error=True ⟶ Text Input/False/Hovered/True/True | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, State=Default, Filled=False, Error=True ⟶ Text Input/False/Hovered/False/True | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, State=Default, Filled=False, Error=True ⟶ Text Input/True/Hovered/False/True | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, State=Default, Filled=True, Error=True ⟶ Text Input/True/Hovered/True/True | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, State=Default, Filled=False, Error=False ⟶ Text Input/True/Hovered/False/False | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, State=Default, Filled=True, Error=False ⟶ Text Input/True/Hovered/True/False | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Solid/Large | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/False/Large/Hovered/Secondary-Solid/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Dropdown, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Solid/Large | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/True/Large/Hovered/Secondary-Solid/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Subtle/Large | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/False/Large/Hovered/Subtle/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Dropdown, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Subtle/Large | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/True/Large/Hovered/Subtle/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Solid/Medium | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/False/Medium/Hovered/Secondary-Solid/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Dropdown, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Solid/Medium | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/True/Medium/Hovered/Secondary-Solid/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Subtle/Medium | INSTANT | 1 |
| Text input | ON_HOVER | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/False/Medium/Hovered/Subtle/Dropdown | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Dropdown, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Subtle/Medium | INSTANT | 1 |
| Text input | ON_HOVER | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/True/Medium/Hovered/Subtle/Dropdown | INSTANT | 1 |
| Textarea | ON_CLICK | State: Pressed→Focused | SMART_ANIMATE 150ms EASE_OUT | 24 |
| Textarea | MOUSE_LEAVE | State: Pressed→Default | SMART_ANIMATE 300ms EASE_OUT | 24 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=False, Style=Default ⟶ Textarea/False/Hovered/True/False/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=False, Style=Default ⟶ Textarea/False/Hovered/False/False/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=True, Style=Default ⟶ Textarea/False/Hovered/True/True/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=True, Style=Default ⟶ Textarea/False/Hovered/False/True/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=True, Style=Default ⟶ Textarea/True/Hovered/False/True/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=True, Style=Default ⟶ Textarea/True/Hovered/True/True/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=False, Style=Default ⟶ Textarea/True/Hovered/False/False/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=False, Style=Default ⟶ Textarea/True/Hovered/True/False/Default | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=False, Style=Filled darker ⟶ Textarea/False/Hovered/True/False/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=False, Style=Filled darker ⟶ Textarea/False/Hovered/False/False/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=True, Style=Filled darker ⟶ Textarea/False/Hovered/True/True/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=True, Style=Filled darker ⟶ Textarea/False/Hovered/False/True/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=True, Style=Filled darker ⟶ Textarea/True/Hovered/False/True/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=True, Style=Filled darker ⟶ Textarea/True/Hovered/True/True/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=False, Style=Filled darker ⟶ Textarea/True/Hovered/False/False/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=False, Style=Filled darker ⟶ Textarea/True/Hovered/True/False/Filled darker | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=False, Style=Filled lighter ⟶ Textarea/False/Hovered/True/False/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=False, Style=Filled lighter ⟶ Textarea/False/Hovered/False/False/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=True, Error=True, Style=Filled lighter ⟶ Textarea/False/Hovered/True/True/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=False, State=Default, Filled=False, Error=True, Style=Filled lighter ⟶ Textarea/False/Hovered/False/True/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=True, Style=Filled lighter ⟶ Textarea/True/Hovered/False/True/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=True, Style=Filled lighter ⟶ Textarea/True/Hovered/True/True/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=False, Error=False, Style=Filled lighter ⟶ Textarea/True/Hovered/False/False/Filled lighter | INSTANT | 1 |
| Textarea | ON_HOVER | RTL=True, State=Default, Filled=True, Error=False, Style=Filled lighter ⟶ Textarea/True/Hovered/True/False/Filled lighter | INSTANT | 1 |
| Tooltip | ON_HOVER | Open: False→True | INSTANT | 12 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Link/Level 2/Hovered/False | INSTANT | 36 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Link/Level 2/Hovered/False | INSTANT | 36 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Link/Level 2/Hovered/False | INSTANT | 36 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Link/Level 2/Hovered/False | INSTANT | 36 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/True | INSTANT | 6 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/False/Parent (Sub-menu)/Level 1/Hovered/False | INSTANT | 4 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/False/True/Parent (Sub-menu)/Level 1/Hovered/False | INSTANT | 4 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/False/Parent (Sub-menu)/Level 1/Hovered/False | INSTANT | 4 |
| UI Shell - Nav Drawer | ON_HOVER | Nav Drawer Item ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/Level 1/Hovered/False | INSTANT | 4 |
| UI Shell - Nav Drawer | ON_HOVER | Button-Close ⟶ Button-Close/x Small/Hovered/True | DISSOLVE 200ms LINEAR | 2 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Link/Level 1/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=False, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Link/Level 1/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=True, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Link/Level 1/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=True, Type=Link, Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Link/Level 1/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Parent (Sub-me | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Parent (Sub-menu | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Parent (Sub-menu | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/ | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/False/False/Parent (Sub-men | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=False, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/True/False/Parent (Sub-menu) | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/False/True/Parent (Sub-menu) | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=True, Type=Parent (Sub-menu), Level=Level 1, State=Default, Expanded=True ⟶ Nav Drawer Item/True/True/Parent (Sub-menu)/L | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/False/False/Link/Level 2/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=False, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/True/False/Link/Level 2/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=False, On Color=True, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/False/True/Link/Level 2/Hovered/False | INSTANT | 1 |
| UI Shell - Nav Drawer | ON_HOVER | RTL=True, On Color=True, Type=Link, Level=Level 2, State=Default, Expanded=False ⟶ Nav Drawer Item/True/True/Link/Level 2/Hovered/False | INSTANT | 1 |
| UI Shell - Navigation Bar | ON_HOVER | Button ⟶ Button/False/Medium/Hovered/Secondary-Solid/True/False | INSTANT | 23 |
| UI Shell - Navigation Bar | ON_HOVER | Button ⟶ Button/False/Small/Hovered/Transparent/False/False | INSTANT | 2 |
| UI Shell - Navigation Bar | ON_HOVER | Button ⟶ Button/True/Small/Hovered/Transparent/False/False | INSTANT | 2 |
| UI Shell - Tab Bar | ON_HOVER | Tab Item ⟶ Tab Item :: RTL=False, State=Pressed, Type=Tab Bar Item, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 25 |
| UI Shell - Tab Bar | ON_HOVER | Tab Item ⟶ Tab Item :: RTL=True, State=Pressed, Type=Tab Bar Item, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 25 |
| UI Shell - Tab Bar | ON_HOVER | Tab Item ⟶ Tab Item :: RTL=True, State=Pressed, Type=Tab Bar Item, OnColor=True | SMART_ANIMATE 300ms EASE_OUT | 25 |
| UI Shell - Tab Bar | ON_HOVER | Tab Item ⟶ Tab Item :: RTL=False, State=Pressed, Type=Tab Bar Item, OnColor=False | SMART_ANIMATE 300ms EASE_OUT | 25 |
| UI Shell - Tab Bar | ON_HOVER | State: Normal→Pressed | SMART_ANIMATE 300ms EASE_OUT | 4 |
| UI Shell - Tab Bar | ON_CLICK | State: Pressed→Selected | SMART_ANIMATE 300ms EASE_OUT | 4 |

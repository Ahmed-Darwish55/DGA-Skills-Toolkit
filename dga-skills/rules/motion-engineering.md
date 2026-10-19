# Motion / Scrollytelling / 3D engineering — implementation playbook
Before animation: determine user objective, event, state, exit, reduced-motion static state and interaction interruption.
Layer 0 — Semantic content rendered visibly without JS. CSS hover/focus for direct feedback (prefer transform/opacity).
Layer 1 — GSAP for finite section choreography if dependency exists. One timeline per component, gsap.context scoped and revert on unmount; kill ScrollTriggers; avoid duplicate React strict-mode hooks.
Layer 2 — ScrollTrigger only for narrative synchronization; no scroll hijacking, no forced pinning, no hiding essential content. When scroll-driven motion unnecessary, do not add it.
Layer 3 — WebGL/Three only for content requiring depth/spatial learning, with a static poster, optimized GLB, reduced motion, loading and WebGL error fallback, device capability gate, texture/geometry disposal, lazy import. Never load an unoptimized giant original into public page.
**Storyboard required** for each motion: element | trigger | start/end | property | duration/easing [AHMED HOUSE] | interaction interrupt | mobile | reduced-motion | cleanup | acceptance screenshot/video.
Prevent CLS; no blocking preload, GPU overload, parallax text or autoplay carousel. Keep native browser navigation and focus.
Do not pretend DGA published our GSAP timings. Treat motion as a house extension layered around official component internals, not changing their required anatomy.
For GIS: prefer ArcGIS view native interactions for geodata, do not sync map flyTo with scroll without user clarity, reduced motion and fallback. No invented locations.

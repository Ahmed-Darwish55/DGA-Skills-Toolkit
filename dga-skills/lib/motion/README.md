# lib/motion — GSAP / ScrollTrigger / Three.js recipes

Copied into a project with `tools/copy_lib.py --framework react --with-patterns` (vanilla/Angular/ExB get `motion/index.js`).
The toolkit **never bundles or installs** gsap or three: the project adds them (with the user's consent) and passes them in.

| API | Purpose |
|---|---|
| `motionPolicy(mode, { threeD })` | what the design mode allows — Exact: nothing · Enhanced: restrained reveals, no 3D · Creative: storytelling, 3D only when the user asked |
| `createScrollStory(root, { gsap, ScrollTrigger, mode, build })` | one `gsap.context` scoped to `root`; `revert()` kills every tween and ScrollTrigger; reduced motion builds nothing |
| `mountThreeScene(container, { loadThree: () => import('three'), build, poster: { src, alt, licence }, mode, threeD })` | lazy 3D with WebGL check, poster fallback, off-screen / hidden-tab pause, full dispose |
| React: `useScrollStory(ref, …)`, `useThreeScene(ref, …)` | effects that clean up on unmount (SSR-safe: no DOM access on the server) |

Rules
- Content is visible in HTML/CSS by default; motion only adds. Never hide content with CSS waiting for JS.
- One orchestrated moment per page beats scattered reveals.
- With `prefers-reduced-motion: reduce` the final state is shown and no scroll-linked animation is created.
- 3D is decorative (`aria-hidden` canvas); the meaning lives in the text, the poster carries `alt` and `data-licence`.
- GIS / map overlays: never put a WebGL scene on top of an ArcGIS map view (two GPU contexts, pointer conflicts) — use the map's own layers; keep motion outside the map container; respect the map's keyboard handling.

Worked example and tests: `examples/motion-story` (`DESIGN-RESEARCH.md`), `tests/motion_story_check.mjs`.

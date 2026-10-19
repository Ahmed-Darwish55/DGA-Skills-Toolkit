# Mandatory visual QA and exit criteria
## Proof artifacts
- Three option previews or a documented user exemption when quality expectations high.
- Actual running browser screenshots before and after, at 1440/1024/768/390 (RTL and LTR); do not substitute source reading or artificial fixed-size iframe for actual device viewport when possible.
- Screen recording or test notes for GSAP/3D; screenshot alone proves neither animation nor performance.
## Stop-ship defects
- Weak generic hero when site narrative is the brief; indistinguishable template aesthetics; no focal point.
- Text cut off, fake/uncited data presented as truth, accessibility regressions, broken map/data layers, mobile widget clipped, horizontal overflow, lost keyboard focus, untranslated UI, image licences unknown.
- Missing actual asset, broken URLs, overlapping fixed header, interaction targets blocked, > user-agreed performance budget.
## Quality score (each 0–5, independently justified)
Concept originality | storytelling coherence | composition/hierarchy | photography/art direction | typography/RTL | responsive craft | motion usefulness | technical/accessibility | DGA fit.
A score is NOT an objective certification. A low originality/composition score (0–2) triggers redesign, not CSS polishing. User's visual sign-off overrides numerical score.
## Evidence table required in final report
Area | Observed screenshot/recording or test | Result PASS/FAIL/UNVERIFIED | Next action.
Test keyboard tab/ESC, 200% zoom, reduced motion, 2 locales, Android-like 390px, ArcGIS map load/legend/controls, memory cleanup, loading/fallback. Never claim all pass if any are untested.

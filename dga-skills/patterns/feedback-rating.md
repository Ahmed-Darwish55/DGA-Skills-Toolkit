# Feedback & rating (`FeedbackRating`)
Figma templates: Feedback section, Rating section (`references/dga-live/templates/feedback-section.md`, `rating-section.md`).

**Anatomy**: question (`h2`) → Yes / No (`DgaButtonV2` pair in a `role="group"` named by the question) → optional `DgaRating` (1–5) → Send → thank-you heading + status text (an inline alert would create an h2→h4 heading skip, PKG-ALERT-02).

```jsx
<FeedbackRating dir={dir} withRating onSubmit={({ helpful, rating }) => post(...)} />
```
Rules: everything is keyboard operable (buttons + the package rating); the success alert is rendered without the close button (PKG-ALERT-01: its close button has no accessible name). Don't collect free text without a label.

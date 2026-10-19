# Alerts (`AlertStack`)
Component: `dga-inline-alert` (info / success / warning / error) — one or many, inside an `aria-live` wrapper so alerts added later are announced.

```jsx
<AlertStack live="polite" items={[{ id: 'a1', type: 'warning', title: 'انتبه', text: '…', dismissible: false }]} />
```
Rules: keep an `h3` above the stack when the page heading above is an `h2` (the alert heading is a fixed `h4`, PKG-ALERT-02); the heading is `leadText` and the body `helperText` — the package `title` prop renders nothing (PKG-ALERT-03). `dismissible` renders the package close button — avoid it until PKG-ALERT-01 (no accessible name) is fixed; use `live="assertive"` only for blocking errors; form errors use the summary inside `FormPattern` (`[data-qa="form-errors"]`) instead.

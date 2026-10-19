# Lists (`ListBlock`)
Component: `dga-list` (ordered / unordered). The block adds an optional page-authored `h2` so the heading level stays correct in the outline — `dga-list` renders its own `title` as a fixed `h3`; pass `title` only when an `h3` fits.

```jsx
<ListBlock heading="المتطلبات" headingId="req-h" type="ordered" items={[{ text: '…' }]} />
```

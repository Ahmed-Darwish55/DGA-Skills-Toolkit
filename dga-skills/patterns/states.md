# Loading / empty / error states (`StateBlock`)
Used by search results, lists and data sections (Search page, Help & support, e-Participation).

| state | render | semantics |
|---|---|---|
| `loading` | `DgaLineSkeleton` rows | `role="status"` `aria-busy="true"` + visually-hidden "Loading…" |
| `empty` | heading + hint (page-authored) | `role="status"` |
| `error` | `DgaInlineAlert type="error"` + Retry (`DgaButtonV2`) | `role="alert"` |

```jsx
<StateBlock dir={dir} state={state} rows={4} onRetry={reload} />
```
Rules: the state is a prop, not a timer; retry is a real action; never auto-dismiss errors. Demo: `#/ar/search?state=loading|empty|error`.

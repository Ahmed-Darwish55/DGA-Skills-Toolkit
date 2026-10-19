# Navigation state (`NavProvider` / `useNav`)
`lib/patterns/react/nav.jsx` gives `SiteHeader`, `PageShell`, `Home`, `Service` … a single place to read the current links, the active route and the `go(route)` function of the host application. The toolkit never ships a router: the demo (`examples/government-site`) uses hash routes `#/ar|en/<page>`; a project passes its own `go` (React Router `navigate`, Next `router.push`, …).

```jsx
<NavProvider links={[{ route: 'home', label: 'الرئيسية' }]} active={route} go={(r) => navigate('/' + r)}>
  <PageShell dir={dir}>…</PageShell>
</NavProvider>
```
Rules: links are real `<a href>` (the package `dga-nav-header-link` emits `linkClicked` → `onLinkClicked` in the React wrapper); keep the skip link; move focus to `#main` after a route change (`PageShell` exposes `tabIndex={-1}` on `main`).

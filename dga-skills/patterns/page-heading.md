# Page heading (`PageHeading`)
Figma templates: Service page, Content page, Search page — *Service header / Breadcrumbs / Title* sections.

**Anatomy** (top → bottom, inside the brand-25 band): `DgaBreadcrumbs` → `DgaTag` row (optional) → `h1` (page-authored, `ah-display-md`) → lead paragraph → actions (`DgaButtonV2`, first = primary).

```jsx
<PageHeading dir={dir} crumbs={[{ label: 'الرئيسية', href: '#/ar/home' }, { label: 'الخدمات' }]} tags={[{ label: 'إلكترونية', variant: 'neutral' }]}
  title="تجديد رخصة" lead="…" actions={[{ label: 'ابدأ الخدمة', onClick: start }]} />
```
Rules: exactly one `h1` per page (the Hero also renders an `h1` — never use both on one page); breadcrumb labels are real page names; the heading text is content, not a component label.
Package notes: `DgaBreadcrumbs` items need `href` for keyboard focus; the band colour is `--background-brand-25` (token).

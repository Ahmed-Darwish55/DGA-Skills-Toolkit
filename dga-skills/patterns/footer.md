# Footer — `SiteFooter` / `siteFooter()`
Figma: `references/dga-live/web/ui-shell-footer.md` (Footer: Background Default/Dark green, Breakpoint 600+/<600, 520 px desktop), `templates/feedback-section.md` ("هل كان هذا المحتوى مفيداً؟" yes/no).
Anatomy: `.ah-footer` → feedback strip (`.ah-feedback`: question `<p id=fb-q>` + `role=group` with two `dga-button-v2 secondary-outline md`) → `dga-footer` (`background`, `mainTitle`, `mainDescription`, `basicLinks`, `groupLinks`, `copyright`, `socialMedia*`, `accessibility*`).
Host fix (allowed, host-level CSS): `.ah-footer > dga-footer { width: 100% }` because core 0.0.52 sets `:host { width: fit-content }` (PKG-FOOTER-01).
Package issues: PKG-FOOTER-02 (inner `.footer-content` 434 px wide at 390 px LTR → horizontal scroll; RTL is fine), PKG-FOOTER-03 (`mainImage` link has no alt/text → axe `link-name`; pattern passes `mainLink` only with a logo and `mainLinkTilte`).

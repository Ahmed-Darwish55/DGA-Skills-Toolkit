import React from 'react';
import { CardGrid, FormPattern, Hero, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Contact Us Template - Platforms Code — generated from lib/templates/templates-map.json (contact-us) by tools/new_template.py.
 * Sections: Stamp · Nav · Hero · Contact channels (cards) · Contact form · Map/branches · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function ContactUsPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Contact channels (cards) */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container"><SectionHeading id="s3-h" title={isArabic ? 'Contact channels' : 'Contact channels'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Contact channels' : 'Contact channels'} /></div></section>
      {/* Figma section: Contact form */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack" style={{ maxWidth: 960 }}><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'Contact form' : 'Contact form'}</h2><FormPattern dir={dir} fields={[{ name: 'field1', label: isArabic ? 'حقل 1 — TODO(content)' : 'Field 1 — TODO(content)', required: true }, { name: 'notes', type: 'textarea', label: isArabic ? 'ملاحظات' : 'Notes', span: 2 }]} onSubmit={() => {}} /></div></section>
      {/* Figma section: Map/branches */}
      <section className="ah-section" aria-labelledby="s5-h"><div className="ah-container ah-stack"><h2 id="s5-h" className="ah-display-xs">{isArabic ? 'Map/branches' : 'Map/branches'}</h2><p className="ah-text-md ah-muted">{isArabic ? 'خريطة الفروع: استخدم @arcgis/core أو ExB حسب المشروع (rules/project-detection.md) — TODO(content)' : 'Branches map: use @arcgis/core or ExB per project — TODO(content)'}</p></div></section>
    </PageShell>
  );
}

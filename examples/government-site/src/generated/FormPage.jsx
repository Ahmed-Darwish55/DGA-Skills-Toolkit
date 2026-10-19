import React from 'react';
import { PageHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Form Template - Platforms Code — generated from lib/templates/templates-map.json (form) by tools/new_template.py.
 * Sections: Digital Stamp · Second Nav Header · Nav Header · Form section (progress indicator, breadcrumb, fields, actions) · Section template · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function FormPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Form section (progress indicator, breadcrumb, fields, actions) */}
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'Form section' : 'Form section' }]} title={isArabic ? 'Form section' : 'Form section'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />
      {/* Figma section: Section template */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack ah-prose"><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'Section template' : 'Section template'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
    </PageShell>
  );
}

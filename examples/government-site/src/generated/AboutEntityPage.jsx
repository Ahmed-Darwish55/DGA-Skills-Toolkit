import React from 'react';
import { CardGrid, Hero, SectionHeading, StatsStrip } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * About The Entity Template — generated from lib/templates/templates-map.json (about-entity) by tools/new_template.py.
 * Sections: Stamp · Nav · Hero · About text · Vision/Mission cards · Leadership · Statistics · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function AboutEntityPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: About text */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container ah-stack ah-prose"><h2 id="s3-h" className="ah-display-xs">{isArabic ? 'About text' : 'About text'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Vision/Mission cards */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container"><SectionHeading id="s4-h" title={isArabic ? 'Vision/Mission cards' : 'Vision/Mission cards'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Vision/Mission cards' : 'Vision/Mission cards'} /></div></section>
      {/* Figma section: Leadership */}
      <section className="ah-section" aria-labelledby="s5-h"><div className="ah-container"><SectionHeading id="s5-h" title={isArabic ? 'Leadership' : 'Leadership'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Leadership' : 'Leadership'} /></div></section>
      {/* Figma section: Statistics */}
      <section className="ah-section" aria-labelledby="s6-h"><div className="ah-container ah-stack"><h2 id="s6-h" className="ah-display-xs">{isArabic ? 'Statistics' : 'Statistics'}</h2><StatsStrip items={[{ value: '—', label: isArabic ? 'مؤشر 1 (قيمة توضيحية)' : 'Metric 1 (placeholder)', icon: 'home-05' }, { value: '—', label: isArabic ? 'مؤشر 2 (قيمة توضيحية)' : 'Metric 2 (placeholder)', icon: 'user' }]} /></div></section>
    </PageShell>
  );
}

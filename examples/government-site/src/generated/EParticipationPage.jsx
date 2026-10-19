import React from 'react';
import { DgaPagination } from 'platformscode-new-react';
import { CardGrid, Hero, SearchFilters, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * e-Participation Template - Platofrms Code — generated from lib/templates/templates-map.json (e-participation) by tools/new_template.py.
 * Sections: Stamp · Nav · Hero · Participation cards · Filters · Pagination · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function EParticipationPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Participation cards */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container"><SectionHeading id="s3-h" title={isArabic ? 'Participation cards' : 'Participation cards'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Participation cards' : 'Participation cards'} /></div></section>
      {/* Figma section: Filters */}
      <section className="ah-section" aria-label={isArabic ? 'Filters' : 'Filters'}><div className="ah-container"><SearchFilters dir={dir} search={{ label: isArabic ? 'بحث' : 'Search', placeholder: isArabic ? 'اكتب كلمة — TODO(content)' : 'Type a keyword — TODO(content)' }} filters={[{ name: 'f1', label: isArabic ? 'الفئة' : 'Category', placeholder: isArabic ? 'الكل' : 'All', options: [{ name: 'A', value: 'a' }] }]} /></div></section>
      {/* Figma section: Pagination */}
      <div className="ah-container" style={{ paddingBlock: 'var(--spacing-4)' }}><DgaPagination totalPageCount={4} currentPage={1} /></div>
    </PageShell>
  );
}

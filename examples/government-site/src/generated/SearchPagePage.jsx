import React from 'react';
import { DgaPagination } from 'platformscode-new-react';
import { PageHeading, SearchFilters } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Search Page Template- Platforms Code — generated from lib/templates/templates-map.json (search-page) by tools/new_template.py.
 * Sections: Stamp · Nav · Search header · Filters · Results list · Pagination · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function SearchPagePage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Search header */}
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'Search header' : 'Search header' }]} title={isArabic ? 'Search header' : 'Search header'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />
      {/* Figma section: Filters */}
      <section className="ah-section" aria-label={isArabic ? 'Filters' : 'Filters'}><div className="ah-container"><SearchFilters dir={dir} search={{ label: isArabic ? 'بحث' : 'Search', placeholder: isArabic ? 'اكتب كلمة — TODO(content)' : 'Type a keyword — TODO(content)' }} filters={[{ name: 'f1', label: isArabic ? 'الفئة' : 'Category', placeholder: isArabic ? 'الكل' : 'All', options: [{ name: 'A', value: 'a' }] }]} /></div></section>
      {/* Figma section: Results list */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack ah-prose"><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'Results list' : 'Results list'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Pagination */}
      <div className="ah-container" style={{ paddingBlock: 'var(--spacing-4)' }}><DgaPagination totalPageCount={4} currentPage={1} /></div>
    </PageShell>
  );
}

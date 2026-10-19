import React, { useState, useEffect } from 'react';
import { PageHeading, SearchFilters, StateBlock, CardGrid, useNav, patternLabels } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/**
 * Search page — templates/search-page.md: Stamp · Nav · Page heading · Search & filters · Results (loading / empty / error / list) · Footer.
 * `state` can be forced by the app (QA fixtures): 'loading' | 'empty' | 'error' | 'results'.
 */
export function SearchPage({ dir = 'rtl', state: forced }) {
  const pageContent = content(dir); const isArabic = dir === 'rtl';
  const navigation = useNav();
  const [state, setState] = useState(forced || 'loading');
  const [category, setCategory] = useState('');
  useEffect(() => { if (!forced) { const id = setTimeout(() => setState('results'), 700); return () => clearTimeout(id); } return undefined; }, [forced]);
  const results = state === 'results' ? pageContent.services : [];
  return (
    <PageShell dir={dir} pageRoute="services">
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'البحث' : 'Search' }]} title={isArabic ? 'البحث في الخدمات' : 'Search services'} lead={isArabic ? 'ابحث بالاسم أو صفِّ حسب الفئة.' : 'Search by name or filter by category.'} />
      <section className="ah-section" aria-labelledby="results-h"><div className="ah-container ah-stack">
        <SearchFilters dir={dir} search={{ label: isArabic ? 'ابحث عن خدمة' : 'Search services', placeholder: pageContent.pages.faq.search.placeholder }}
          filters={[{ name: 'cat', label: isArabic ? 'الفئة' : 'Category', placeholder: isArabic ? 'الكل' : 'All', options: [{ name: isArabic ? 'أفراد' : 'Individuals', value: 'ind' }, { name: isArabic ? 'منشآت' : 'Businesses', value: 'biz' }], value: category, onChange: (selectedCategory) => setCategory(selectedCategory) }]}
          active={category ? [category === 'ind' ? (isArabic ? 'أفراد' : 'Individuals') : (isArabic ? 'منشآت' : 'Businesses')] : []} onClear={() => setCategory('')} />
        <h2 id="results-h" className="ah-display-xs" aria-live="polite">{state === 'results' ? (isArabic ? `${results.length} نتيجة` : `${results.length} results`) : (isArabic ? 'النتائج' : 'Results')}</h2>
        {/* reserved block size: the loading→results swap must not push the footer (CLS budget 0.1, gate N5) */}
        <div style={{ minBlockSize: 'clamp(280px, 42vh, 460px)' }} data-qa="results-region">
          {state === 'results'
            ? <CardGrid items={results} primaryLabel={patternLabels(dir).startService} onPrimary={() => navigation?.go('service')} ariaLabel={isArabic ? 'نتائج البحث' : 'Search results'} />
            : <StateBlock dir={dir} state={state} onRetry={() => setState('loading')} />}
        </div>
      </div></section>
    </PageShell>
  );
}

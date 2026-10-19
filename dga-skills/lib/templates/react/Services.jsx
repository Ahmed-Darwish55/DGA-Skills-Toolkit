import React, { useMemo, useState, useRef } from 'react';
import { DgaSearchBox, DgaButtonV2, DgaPagination } from 'platformscode-new-react';
import { ServiceCard, FilterMenu, useNav, patternLabels, withSampleServiceAttributes, queryServiceCatalogue, readSearchBoxValue } from '../../patterns/react/index.js';
import { useDga } from '../../react/index.js';
import { buttonIcon } from '../../core/icons.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/**
 * Services catalogue — Figma "Search Page Template - Platforms Code", grid variant (frame "Search Page - AR", 3 cards per row),
 * section by section (patterns/services-page.md):
 *  Stamp · Second Nav Header · Nav Header ·
 *  Search (pad 40/80, H gap 16): Search Box (Medium, fills) + Primary Large «بحث» ·
 *  Body (pad 40/80, V gap 32, centred): details row [Display sm H1 + «N خدمة» (text-secondary-paragraph) | Secondary-Outline Large
 *  «ترتيب حسب» (sort-by-down-02) · Filtration «تصفية»] · Results: rows of 3 Card / Effect=Stroke (411, gap 24) · Pagination (Large) ·
 *  Last modified · Feedback · Footer (Dark green).
 */
const PAGE_SIZE = 9;
export function Services({ dir = 'rtl', onOpen, onStart }) {
  const pageContent = content(dir); const catalogueTexts = pageContent.servicesPage;
  const navigation = useNav(); const { registry } = useDga();
  const [query, setQuery] = useState(''); const [sortAscending, setSortAscending] = useState(null); const [pageNumber, setPageNumber] = useState(1); const [filters, setFilters] = useState({});
  // sample attributes for the filter demo (a real catalogue supplies audience / channel per service)
  const catalogue = useMemo(() => withSampleServiceAttributes(pageContent.services, pageContent.serviceTags), [dir]);   // eslint-disable-line react-hooks/exhaustive-deps
  const catalogueResult = useMemo(() => queryServiceCatalogue(catalogue, { query, filters, sortAscending, pageNumber, pageSize: PAGE_SIZE, dir }), [catalogue, query, filters, sortAscending, pageNumber, dir]);
  const formRef = useRef(null);
  // the typed text is read from the DGA search box itself on submit (its input event is not re-emitted to React reliably)
  const applySearch = () => { setQuery(readSearchBoxValue(formRef.current?.querySelector('dga-search-box'))); setPageNumber(1); };
  const sortIcon = buttonIcon('sort-by-down-02', { api: 'v2', position: 'lead', size: 24, registry });
  return (
    <PageShell dir={dir} pageRoute="services">
      <section className="ah-services-search" aria-label={catalogueTexts.search.label}><div className="ah-container ah-services-search__row">
        <form ref={formRef} className="ah-services-search__form" role="search" onSubmit={(submitEvent) => { submitEvent.preventDefault(); applySearch(); }}>
          {/* Figma: label hidden; the placeholder names the field (dga-search-box does not associate its <label> anyway — PKG-SEARCH-01) */}
          <DgaSearchBox placeholder={catalogueTexts.search.placeholder} size="md" speechLang={dir === 'rtl' ? 'ar' : 'en'} className="ah-services-search__box" />
          <DgaButtonV2 variant="primary" size="lg" label={catalogueTexts.search.button} type="submit" onOnClick={applySearch} />
        </form>
      </div></section>
      <section className="ah-services-body" aria-labelledby="services-h"><div className="ah-container ah-services-body__content">
        <div className="ah-services-details">
          <div className="ah-services-details__result">
            <h1 id="services-h" className="ah-display-sm">{catalogueTexts.title}</h1>
            <p className="ah-text-md ah-services-details__count" aria-live="polite">{catalogueTexts.count(catalogueResult.matchingCount)}</p>
          </div>
          <div className="ah-services-details__tools">
            <DgaButtonV2 variant="secondary-outline" size="lg" label={catalogueTexts.sort} {...sortIcon} onOnClick={() => setSortAscending((ascending) => !ascending)} aria-pressed={sortAscending == null ? 'false' : 'true'} />
            <FilterMenu dir={dir} label={catalogueTexts.filter} blocks={catalogueTexts.filterBlocks} onApply={(selectedFilters) => { setFilters(selectedFilters); setPageNumber(1); }} />
          </div>
        </div>
        <ul className="ah-services-grid" aria-label={catalogueTexts.title}>
          {catalogueResult.visibleServices.map((visibleService) => (
            <li key={visibleService.title}><ServiceCard dir={dir} item={visibleService} headingLevel={2} primaryLabel={patternLabels(dir).startService} secondaryLabel={catalogueTexts.details}
              onPrimary={onStart || (() => navigation?.go('form'))} onSecondary={onOpen || (() => navigation?.go('service'))} /></li>
          ))}
        </ul>
        {catalogueResult.pageCount > 1 && <DgaPagination currentPage={catalogueResult.pageNumber} totalPageCount={catalogueResult.pageCount} size="large" onChange={(selectedPage) => setPageNumber(selectedPage)} />}
      </div></section>
    </PageShell>
  );
}

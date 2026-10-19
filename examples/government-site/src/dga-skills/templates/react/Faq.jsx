import React, { useState } from 'react';
import { DgaAccordion, DgaTabs, DgaPagination } from 'platformscode-new-react';
import { Hero, SectionHeading, CardGrid, FilterBar } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/** FAQ — templates/faq.md: Stamp · Nav · Hero (primary-25, search) · Main (tabs/filters + accordion list + pagination) · Contact us · Feedback · Footer */
export function Faq({ dir = 'rtl' }) {
  const pageContent = content(dir); const faqTexts = pageContent.pages.faq;
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <PageShell dir={dir} pageRoute="about">
      <Hero light title={faqTexts.title} lead={faqTexts.lead} search={faqTexts.search} />
      <section className="ah-section" aria-labelledby="faq-h"><div className="ah-container ah-stack">
        <SectionHeading id="faq-h" title={faqTexts.byTopic} />
        <DgaTabs tabsList={faqTexts.topics} />
        <FilterBar dir={dir} search={{ label: faqTexts.filter.label, placeholder: faqTexts.filter.placeholder }} filters={[{ name: 'topic', label: faqTexts.filter.topic, placeholder: faqTexts.filter.choose, options: pageContent.cities }]} active={[faqTexts.filter.activeTopic]} />
        <div className="ah-stack" role="list" aria-label={faqTexts.questionsLabel}>
          {pageContent.faqs.map((faqItem) => <div role="listitem" key={faqItem.q}><DgaAccordion title={faqItem.q} content={faqItem.a} size="lg" /* no defaultExpanded: PKG-ACCORDION-03 — an item opened by defaultExpanded can never be collapsed (mouse or keyboard); DEVIATION from the Figma FAQ frame that shows item 1 open */ /></div>)}
        </div>
        <DgaPagination currentPage={pageNumber} totalPageCount={faqTexts.pageCount} onChange={(selectedPage) => setPageNumber(selectedPage)} />
      </div></section>
      <section className="ah-section ah-section--neutral" aria-labelledby="contact-h"><div className="ah-container">
        <SectionHeading id="contact-h" title={faqTexts.contact.title} description={faqTexts.contact.description} center />
        <CardGrid items={pageContent.contacts.slice(0, 2)} primaryLabel={faqTexts.contact.action} />
      </div></section>
    </PageShell>
  );
}

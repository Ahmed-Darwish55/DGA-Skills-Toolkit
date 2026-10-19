import React from 'react';
import { DgaAccordion } from 'platformscode-new-react';
import { FeedbackRating, Hero } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * FAQ Template - Platforms Code — generated from lib/templates/templates-map.json (faq) by tools/new_template.py.
 * Sections: Digital Stamp · Nav Header · Hero (primary-25, search) · Main (tabs, filtration, accordion list, pagination) · Contact us · Feedback · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function FaqPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero (primary-25, search) */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Main (tabs, filtration, accordion list, pagination) */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container ah-stack"><h2 id="s3-h" className="ah-display-xs">{isArabic ? 'Main' : 'Main'}</h2><div role="list">{[1, 2, 3].map((itemNumber) => <div role="listitem" key={itemNumber}><DgaAccordion title={isArabic ? `سؤال ${itemNumber} — TODO(content)` : `Question ${itemNumber} — TODO(content)`} content={isArabic ? 'إجابة توضيحية.' : 'Placeholder answer.'} size="lg" /></div>)}</div></div></section>
      {/* Figma section: Contact us */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack ah-prose"><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'Contact us' : 'Contact us'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Feedback */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </PageShell>
  );
}

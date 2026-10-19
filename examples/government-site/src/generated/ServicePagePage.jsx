import React from 'react';
import { CardGrid, FeedbackRating, PageHeading, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Service Page Template - Platforms Code — generated from lib/templates/templates-map.json (service-page) by tools/new_template.py.
 * Sections: Digital Stamp · Second Nav Header (Gray: weather · date · time · location + view / zoom-in / zoom-out / mic) · Nav Header · Service (primary-25 band; main 832: breadcrumb + H1 Display sm + Primary «بدء الخدمة», tags, description, SLA link, Tab List (icons, flush) + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons) · Related services (primary-25, Subtle «عرض الكل», Carousel/Dots of Card Stroke) · Comments & Suggestions (Card Stroke + Primary «تواصل معنا») · Last modified · Rating strip + Feedback strip · Footer (dark green).
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function ServicePagePage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Service (primary-25 band; main 832: breadcrumb + H1 Display sm + Primary «بدء الخدمة», tags, description, SLA link, Tab List (icons, flush) + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons) */}
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'Service  + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons)' : 'Service  + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons)' }]} title={isArabic ? 'Service  + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons)' : 'Service  + video + ordered steps; Service Card 416: info rows, payment, FAQ, phone, email, user manual, store buttons)'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />
      {/* Figma section: Related services (primary-25, Subtle «عرض الكل», Carousel/Dots of Card Stroke) */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container"><SectionHeading id="s4-h" title={isArabic ? 'Related services' : 'Related services'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Related services' : 'Related services'} /></div></section>
      {/* Figma section: Comments & Suggestions (Card Stroke + Primary «تواصل معنا») */}
      <section className="ah-section" aria-labelledby="s5-h"><div className="ah-container"><SectionHeading id="s5-h" title={isArabic ? 'Comments & Suggestions' : 'Comments & Suggestions'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Comments & Suggestions' : 'Comments & Suggestions'} /></div></section>
      {/* Figma section: Last modified */}
      <section className="ah-section" aria-labelledby="s6-h"><div className="ah-container ah-stack ah-prose"><h2 id="s6-h" className="ah-display-xs">{isArabic ? 'Last modified' : 'Last modified'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Rating strip + Feedback strip */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </PageShell>
  );
}

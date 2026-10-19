import React from 'react';
import { FeedbackRating, FormPattern } from '../dga-skills/patterns/react/index.js';
/**
 * @kind section
 * Feedback Section Template - Platforms Code — generated from lib/templates/templates-map.json (feedback-section) by tools/new_template.py.
 * Sections: Question · Yes/No buttons · Follow-up form.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function FeedbackSectionPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <div className="ah-page">
      {/* Figma section: Question */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
      {/* Figma section: Yes/No buttons */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
      {/* Figma section: Follow-up form */}
      <section className="ah-section" aria-labelledby="s2-h"><div className="ah-container ah-stack" style={{ maxWidth: 960 }}><h2 id="s2-h" className="ah-display-xs">{isArabic ? 'Follow-up form' : 'Follow-up form'}</h2><FormPattern dir={dir} fields={[{ name: 'field1', label: isArabic ? 'حقل 1 — TODO(content)' : 'Field 1 — TODO(content)', required: true }, { name: 'notes', type: 'textarea', label: isArabic ? 'ملاحظات' : 'Notes', span: 2 }]} onSubmit={() => {}} /></div></section>
    </div>
  );
}

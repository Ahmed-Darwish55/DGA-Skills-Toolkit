import React from 'react';
import { FormPattern } from '../dga-skills/patterns/react/index.js';
/**
 * @kind section
 * Chatbot Template - Platforms Code — generated from lib/templates/templates-map.json (chatbot) by tools/new_template.py.
 * Sections: Chat window · Message list · Composer · Quick replies.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function ChatbotPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <div className="ah-page">
      {/* Figma section: Chat window */}
      <section className="ah-section" aria-labelledby="s0-h"><div className="ah-container ah-stack" style={{ maxWidth: 720 }}><h2 id="s0-h" className="ah-display-xs">{isArabic ? 'Chat window' : 'Chat window'}</h2><div className="ah-form-panel ah-stack" role="log" aria-live="polite"><p className="ah-text-md">{isArabic ? 'رسالة توضيحية — TODO(content)' : 'Placeholder message — TODO(content)'}</p></div></div></section>
      {/* Figma section: Message list */}
      <section className="ah-section" aria-labelledby="s1-h"><div className="ah-container ah-stack" style={{ maxWidth: 720 }}><h2 id="s1-h" className="ah-display-xs">{isArabic ? 'Message list' : 'Message list'}</h2><div className="ah-form-panel ah-stack" role="log" aria-live="polite"><p className="ah-text-md">{isArabic ? 'رسالة توضيحية — TODO(content)' : 'Placeholder message — TODO(content)'}</p></div></div></section>
      {/* Figma section: Composer */}
      <section className="ah-section" aria-labelledby="s2-h"><div className="ah-container ah-stack" style={{ maxWidth: 960 }}><h2 id="s2-h" className="ah-display-xs">{isArabic ? 'Composer' : 'Composer'}</h2><FormPattern dir={dir} fields={[{ name: 'field1', label: isArabic ? 'حقل 1 — TODO(content)' : 'Field 1 — TODO(content)', required: true }, { name: 'notes', type: 'textarea', label: isArabic ? 'ملاحظات' : 'Notes', span: 2 }]} onSubmit={() => {}} /></div></section>
      {/* Figma section: Quick replies */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container ah-stack" style={{ maxWidth: 720 }}><h2 id="s3-h" className="ah-display-xs">{isArabic ? 'Quick replies' : 'Quick replies'}</h2><div className="ah-form-panel ah-stack" role="log" aria-live="polite"><p className="ah-text-md">{isArabic ? 'رسالة توضيحية — TODO(content)' : 'Placeholder message — TODO(content)'}</p></div></div></section>
    </div>
  );
}

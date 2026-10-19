import React from 'react';
import { DgaButtonV2 } from 'platformscode-new-react';
/**
 * @kind section
 * Cookies Banner Template - Platforms Code — generated from lib/templates/templates-map.json (cookies-banner) by tools/new_template.py.
 * Sections: Banner (text, accept/manage buttons) · Preferences modal.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function CookiesBannerPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <div className="ah-page">
      {/* Figma section: Banner (text, accept/manage buttons) */}
      <section className="ah-section--neutral" aria-label={isArabic ? 'Banner' : 'Banner'}><div className="ah-container ah-row" style={{ paddingBlock: 'var(--spacing-4)', justifyContent: 'space-between', flexWrap: 'wrap' }}><p className="ah-text-md" style={{ margin: 0 }}>{isArabic ? 'نستخدم ملفات تعريف الارتباط — TODO(content)' : 'We use cookies — TODO(content)'}</p><div className="ah-row"><DgaButtonV2 variant="primary" size="md" label={isArabic ? 'قبول' : 'Accept'} /><DgaButtonV2 variant="secondary-outline" size="md" label={isArabic ? 'إدارة التفضيلات' : 'Manage'} /></div></div></section>
      {/* Figma section: Preferences modal */}
      {/* Preferences modal: DgaModal from the package (verify props in registry/packages/platformscode-core@<installed>.json before use) — TODO(content) */}
    </div>
  );
}

import React, { useState } from 'react';
import { PageHeading, FormPattern, CardGrid, FeedbackRating } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/** Contact us — templates/contact-us.md: Stamp · Nav · Page heading · Contact channels (cards) · Contact form · Feedback · Footer. */
export function ContactPage({ dir = 'rtl' }) {
  const pageContent = content(dir); const isArabic = dir === 'rtl';
  const [messageSent, setMessageSent] = useState(false);
  return (
    <PageShell dir={dir} pageRoute="about">
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'تواصل معنا' : 'Contact us' }]} title={isArabic ? 'تواصل معنا' : 'Contact us'} lead={isArabic ? 'اختر القناة المناسبة أو أرسل رسالة.' : 'Pick a channel or send a message.'} />
      <section className="ah-section ah-section--neutral" aria-labelledby="channels-h"><div className="ah-container ah-stack">
        <h2 id="channels-h" className="ah-display-xs">{isArabic ? 'قنوات التواصل' : 'Channels'}</h2>
        <CardGrid items={pageContent.contacts} primaryLabel={isArabic ? 'تواصل' : 'Contact'} ariaLabel={isArabic ? 'قنوات التواصل' : 'Contact channels'} />
      </div></section>
      <section className="ah-section" aria-labelledby="msg-h"><div className="ah-container ah-stack" style={{ maxWidth: 960 }}>
        <h2 id="msg-h" className="ah-display-xs">{isArabic ? 'أرسل رسالة' : 'Send a message'}</h2>
        <FormPattern dir={dir} alert={messageSent ? { type: 'success', title: isArabic ? 'تم الإرسال' : 'Sent', text: isArabic ? 'نموذج توضيحي — لم يُرسل شيء' : 'Demo — nothing was sent' } : null}
          fields={[
            { name: 'name', label: isArabic ? 'الاسم' : 'Name', required: true },
            { name: 'email', label: isArabic ? 'البريد الإلكتروني' : 'Email', required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: isArabic ? 'أدخل بريداً إلكترونياً صحيحاً' : 'Enter a valid email' },
            { name: 'message', type: 'textarea', label: isArabic ? 'الرسالة' : 'Message', required: true, span: 2 },
          ]} submitLabel={isArabic ? 'إرسال' : 'Send'} onSubmit={() => setMessageSent(true)} />
      </div></section>
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </PageShell>
  );
}

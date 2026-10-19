import React, { useState } from 'react';
import { DgaBreadcrumbs } from 'platformscode-new-react';
import { FormPattern, useNav } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/** Form page — templates/form.md: Stamp · Second Nav · Nav · Form section (progress + fields + actions) · Section template · Footer */
export function FormPage({ dir = 'rtl', dropdownA11y = false }) {
  const pageContent = content(dir); const isArabic = dir === 'rtl';
  const [city, setCity] = useState('');
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const navigation = useNav();
  return (
    <PageShell dir={dir} pageRoute="services">
      <section className="ah-section" aria-labelledby="form-h"><div className="ah-container ah-stack" style={{ maxWidth: 960 }}>
        <DgaBreadcrumbs items={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'الخدمات' : 'Services', href: '#' }, { label: isArabic ? 'طلب رخصة' : 'Permit request' }]} />
        <h1 id="form-h" className="ah-display-md">{isArabic ? 'طلب إصدار رخصة بناء' : 'Building permit request'}</h1>
        <FormPattern dir={dir} dropdownA11y={dropdownA11y} steps={[isArabic ? 'البيانات' : 'Details', isArabic ? 'المرفقات' : 'Attachments', isArabic ? 'المراجعة' : 'Review']} activeStep={1}
          title={isArabic ? 'بيانات مقدم الطلب' : 'Applicant details'} intro={isArabic ? 'الحقول المعلّمة بـ * إلزامية.' : 'Fields marked * are required.'}
          alert={done ? { type: 'success', title: isArabic ? 'تم استلام الطلب' : 'Request received', text: isArabic ? 'نموذج توضيحي — لم يُرسل شيء' : 'Demo — nothing was sent' } : null}
          fields={[
            { name: 'fullName', label: isArabic ? 'الاسم الكامل' : 'Full name', placeholder: isArabic ? 'كما في الهوية' : 'As in ID', required: true },
            { name: 'phone', label: isArabic ? 'رقم الجوال' : 'Mobile number', placeholder: '05xxxxxxxx', required: true, pattern: /^05\d{8}$/, message: isArabic ? 'أدخل رقم جوال سعودي صحيح (05xxxxxxxx)' : 'Enter a valid Saudi mobile number (05xxxxxxxx)', helperText: isArabic ? 'يُستخدم للتواصل' : 'Used for contact' },
            { name: 'city', type: 'select', label: isArabic ? 'المدينة' : 'City', placeholder: isArabic ? 'اختر' : 'Choose', options: pageContent.cities, value: city, onChange: (selectedCity) => setCity(selectedCity) },
            { name: 'type', type: 'radio', label: isArabic ? 'نوع الطلب' : 'Request type', value: 'new', options: [{ name: isArabic ? 'جديد' : 'New', value: 'new' }, { name: isArabic ? 'تجديد' : 'Renewal', value: 'renew' }] },
            { name: 'notes', type: 'textarea', label: isArabic ? 'ملاحظات' : 'Notes', span: 2 },
            { name: 'agree', type: 'checkbox', label: isArabic ? 'أقر بصحة البيانات' : 'I confirm the information is correct', span: 2 },
          ]}
          submitLabel={isArabic ? 'التالي' : 'Next'} cancelLabel={isArabic ? 'إلغاء' : 'Cancel'} busy={busy} onCancel={() => navigation?.go('service')}
          onSubmit={() => { setBusy(true); setTimeout(() => { setBusy(false); setDone(true); }, 600); /* simulated submit: loading → success (demo — nothing is sent) */ }} />
      </div></section>
    </PageShell>
  );
}

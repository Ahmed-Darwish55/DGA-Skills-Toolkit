import React, { useState, useRef } from 'react';
import { useDropdownA11y } from '../../react/hooks.js';
import { DgaTextInput, DgaTextarea, DgaDropdown, DgaCheckbox, DgaRadioButton, DgaInlineAlert, DgaButtonV2, DgaSearchBox, DgaTag, DgaProgressIndicator, DgaProgressIndicatorStep } from 'platformscode-new-react';
import { pickByDirection } from '../../core/direction.js';
import { patternLabels } from '../shared/index.js';
const doNothing = () => {};
/**
 * Forms & filters — real DGA inputs only (dga-text-input, dga-textarea, dga-dropdown, dga-checkbox, dga-radio-button,
 * dga-inline-alert, dga-progress-indicator, dga-search-box, dga-tag). Figma: templates/form.md, web/text-input.md, web/filtration.md.
 * Known package defects apply to DgaDropdown (PKG-DD-01…04) — cite them in reports.
 */
export function FormSteps({ steps = [], active = 1 }) {
  return (
    <DgaProgressIndicator activeStep={active} alignment="horizontal">
      {steps.map((stepName, i) => <DgaProgressIndicatorStep key={stepName} title={stepName} currentStep={i + 1} showStepName />)}
    </DgaProgressIndicator>
  );
}
/**
 * Validation: fields may declare `required`, `pattern` (RegExp) and `message`. On submit the pattern validates the
 * FormData, marks invalid DGA inputs (`error` + `helperText` — real props), renders an error-summary DgaInlineAlert
 * (role=alert) and moves focus to the first invalid control. `onSubmit(formData, { valid })` is called only when valid,
 * `onInvalid(errors)` otherwise. State: submitting → `busy` (buttons disabled) ; `alert` = caller-provided message.
 */
/** Read the current value of every declared field from the real DGA controls (light or shadow DOM) → plain object. */
export function readFormValues(form, fields) {
  const formValues = {};
  for (const field of fields) {
    const hosts = [...form.querySelectorAll(`[name="${field.name}"]`)];
    if (field.type === 'radio') { const checkedHost = hosts.find((host) => host.checked || (host.shadowRoot || host).querySelector?.('input:checked')); formValues[field.name] = checkedHost ? (checkedHost.value ?? checkedHost.getAttribute('value')) : ''; continue; }
    if (field.type === 'checkbox') { const checkboxHost = hosts[0]; formValues[field.name] = checkboxHost ? !!(checkboxHost.checked || (checkboxHost.shadowRoot || checkboxHost).querySelector?.('input')?.checked) : false; continue; }
    const fieldHost = hosts[0];
    if (!fieldHost) { formValues[field.name] = field.value ?? ''; continue; }
    if (fieldHost.tagName === 'INPUT' || fieldHost.tagName === 'TEXTAREA' || fieldHost.tagName === 'SELECT') { formValues[field.name] = fieldHost.value; continue; }
    const innerControl = (fieldHost.shadowRoot || fieldHost).querySelector?.('input, textarea, select');
    formValues[field.name] = fieldHost.value ?? (innerControl ? innerControl.value : '') ?? '';
    if (field.type === 'select' && (formValues[field.name] === '' || formValues[field.name] == null) && field.value != null) formValues[field.name] = field.value;   // dga-dropdown value lives in React state
  }
  return formValues;
}
export function validateFields(fields, values) {
  const errors = {};
  const readValue = (fieldName) => (values && typeof values.get === 'function' ? values.get(fieldName) : values?.[fieldName]);
  for (const field of fields) {
    const rawValue = readValue(field.name); const fieldValue = typeof rawValue === 'boolean' ? (rawValue ? 'on' : '') : (rawValue ?? '').toString().trim();
    if (field.required && !fieldValue) errors[field.name] = field.message || field.requiredMessage || null;
    else if (fieldValue && field.pattern && !(field.pattern instanceof RegExp ? field.pattern : new RegExp(field.pattern)).test(fieldValue)) errors[field.name] = field.message || null;
  }
  return errors;
}
/* `dropdownA11y` (default false): opt-in ARIA + keyboard compatibility layer for every select field (lib/core/dropdown-a11y.js; PKG-DD-01…04). The element gets data-dga-a11y-compat="dropdown" so QA reports it. */
export function FormPattern({ dir = 'rtl', title, intro, fields = [], steps, activeStep = 1, submitLabel, cancelLabel, onSubmit, onInvalid, onCancel, alert, busy = false, dropdownA11y = false }) {
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const defaultErrorMessage = (field) => field.message || pickByDirection(dir, 'هذا الحقل مطلوب', 'This field is required');
  const submitForm = (submitEvent) => {
    submitEvent?.preventDefault?.();
    const form = formRef.current; if (!form) return;
    const values = readFormValues(form, fields);
    const foundErrors = validateFields(fields, values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length) {
      onInvalid?.(foundErrors);
      requestAnimationFrame(() => {
        const firstInvalidField = fields.find((field) => foundErrors[field.name] !== undefined);
        const host = form.querySelector(`[name="${firstInvalidField?.name}"]`);
        const target = host && (host.tagName.includes('-') ? ((host.shadowRoot || host).querySelector('input, textarea, select, button') || host) : host);
        target?.focus?.();
      });
      return;
    }
    onSubmit?.(values, { valid: true, form });
  };
  const invalidFields = fields.filter((field) => errors[field.name] !== undefined);
  const submitText = submitLabel || patternLabels(dir).submit;
  // dga-button-v2 renders its <button> inside a shadow root, so it cannot submit the light-DOM form by itself:
  // the visible DGA button calls submitForm(); the hidden native submit button keeps implicit submission (Enter in a field).
  return (
    <form ref={formRef} className="ah-form-panel ah-stack" data-pattern="form" onSubmit={submitForm} noValidate aria-busy={busy || undefined}>
      {steps && <FormSteps steps={steps} active={activeStep} />}
      {title && <h2 className="ah-display-xs">{title}</h2>}
      {intro && <p className="ah-text-md ah-muted ah-prose">{intro}</p>}
      {alert && <DgaInlineAlert type={alert.type || 'info'} isCloseButton={false} leadText={alert.title} helperText={alert.text} />}
      {invalidFields.length > 0 && (
        <div role="alert" data-qa="form-errors">
          <DgaInlineAlert type="error" isCloseButton={false} leadText={pickByDirection(dir, `يوجد ${invalidFields.length} خطأ في النموذج`, `${invalidFields.length} field(s) need attention`)} helperText={invalidFields.map((field) => field.label).join(pickByDirection(dir, '، ', ', '))} />
        </div>
      )}
      <div className="ah-form">
        {fields.map((field) => <div key={field.name} className={field.span === 2 ? 'ah-span-2' : ''}><Field withDropdownA11y={dropdownA11y} field={{ ...field, error: errors[field.name] !== undefined || !!field.error, helperText: errors[field.name] !== undefined ? (errors[field.name] || defaultErrorMessage(field)) : field.helperText }} /></div>)}
        <div className="ah-form__actions" data-qa="form-actions">
          <DgaButtonV2 variant="primary" size="lg" label={submitText} type="button" disabled={busy} onOnClick={() => submitForm()} />
          {cancelLabel && <DgaButtonV2 variant="secondary-outline" size="lg" label={cancelLabel} type="button" disabled={busy} onOnClick={onCancel} />}
          <button type="submit" className="ah-sr-only" tabIndex={-1} aria-hidden="true" disabled={busy}>{submitText}</button>
        </div>
      </div>
    </form>
  );
}
function AccessibleSelect({ field }) {
  const dropdownRef = useRef(null);
  useDropdownA11y(dropdownRef, { enabled: true });
  return <DgaDropdown ref={dropdownRef} label={field.label} id={field.name} placeholder={field.placeholder} options={field.options} value={field.value} onChange={field.onChange} />;
}

function Field({ field, withDropdownA11y = false }) {
  switch (field.type) {
    case 'textarea': return <DgaTextarea label={field.label} name={field.name} placeholder={field.placeholder} rows={field.rows || 4} error={!!field.error} fullwidth />;
    case 'select': return withDropdownA11y ? <AccessibleSelect field={field} /> : <DgaDropdown label={field.label} id={field.name} placeholder={field.placeholder} options={field.options} value={field.value} onChange={field.onChange} />;
    case 'checkbox': return <DgaCheckbox label={field.label} name={field.name} value={field.value || 'on'} checked={!!field.checked} helperText={field.helperText} />;
    case 'radio': return (
      <fieldset className="ah-fieldset"><legend>{field.label}</legend>{field.options.map((option) => <DgaRadioButton key={option.value} name={field.name} value={option.value} label={option.name} checked={option.value === field.value} />)}</fieldset>
    );
    default: return <DgaTextInput type={field.type === 'password' || field.type === 'number' ? field.type : 'text'} label={field.label} name={field.name} placeholder={field.placeholder} required={!!field.required} helperText={field.helperText} error={!!field.error} onBlur={field.onBlur || doNothing} /* PKG-INPUT-01: dga-text-input calls this.onBlur() unguarded on blur → TypeError when the prop is absent */ fullwidth />;
  }
}
/** Filter bar (Figma web/filtration.md + search-box): search + dropdown filters + active chips as DgaTag. */
export function FilterBar({ dir = 'rtl', search, filters = [], active = [], onClear }) {
  return (
    <div className="ah-filters" data-pattern="filters" role="search" aria-label={search?.label}>
      <DgaSearchBox label={search?.label} placeholder={search?.placeholder} fullwidth size="lg" speechLang={dir === 'rtl' ? 'ar' : 'en'} />
      {filters.map((filter) => <DgaDropdown key={filter.name} id={filter.name} label={filter.label} placeholder={filter.placeholder} options={filter.options} value={filter.value} onChange={filter.onChange} />)}
      {active.length > 0 && <div className="ah-filters__chips">{active.map((activeFilter) => <DgaTag key={activeFilter} label={activeFilter} variant="neutral" outlined />)}{onClear && <DgaButtonV2 variant="transparent" size="sm" label={pickByDirection(dir, 'مسح الكل', 'Clear all')} onOnClick={onClear} />}</div>}
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { DgaIcon, DgaLink, DgaButtonV2, DgaFeaturedIcon, DgaDivider, DgaRating, DgaListV2, DgaListItem, DgaTabs, DgaCardV2, DgaCheckbox, DgaRadioButton } from 'platformscode-new-react';
import { useDga } from '../../react/index.js';
import { buttonIcon } from '../../core/icons.js';
import { stretchCardV2 } from '../../core/carousel-a11y.js';
import { useMode } from './mode.jsx';
import { patternLabels, readFilterSelection } from '../shared/index.js';
/*
 * Blocks of the DGA "Service Page Template - Platforms Code" (frame "Service Page - AR" 1440×2782; raw tree
 * references/dga-live/data/templates/service-page.json; documented in patterns/service-page.md).
 * Real DGA components only; layout values from the frames. Text styles below the extraction depth are marked REVIEW REQUIRED in the doc.
 */

/** Icon used as decoration next to text (the text carries the meaning) — aria-hidden so dga-icon's role=img needs no name. */
export function Glyph({ name, size = 24, className }) {
  return <DgaIcon className={className} name={name} variant="stroke" size={size} aria-hidden="true" />;
}

/** Link + leading icon (Figma Link / Primary / Medium with link-04). DgaLink's own iconType prints the icon name as text in
 *  core 0.0.52 (PKG-LINK-01), so the icon is a decorative sibling inside one inline-flex wrapper. */
export function IconLink({ label, href = '#', icon = 'link-04', onClick }) {
  return (
    <span className="ah-icon-link"><Glyph name={icon} size={20} /><DgaLink label={label} url={href} icon={false} onOnClick={onClick} /></span>
  );
}

/** Service Card (sidebar) — Figma "Service Card" 416 wide: pad 40, radius 16, stroke border-background-neutral, white, gap 24:
 *  Service Info (rows: icon 24 · label / value, gap 16) — Line — Contact Info (FAQ link, phone, email, Secondary-Solid Large
 *  «تحميل دليل المستخدم») — Line — Apps (Text lg/Bold title + store buttons 120×40). */
export function ServiceInfoCard({ dir = 'rtl', rows = [], payment, faq, contacts = [], manual, apps }) {
  const mode = useMode();
  return (
    <aside className="ah-svc-info" aria-label={patternLabels(dir).serviceCard} data-pattern="service-info-card" data-mode={mode}>
      {/* rows: icon + label / value (plain blocks — a dl cannot hold the decorative dga-icon as a direct row child) */}
      <div className="ah-svc-info__group">
        {rows.map((infoRow) => (
          <div className="ah-svc-info__row" key={infoRow.label}>
            <Glyph name={infoRow.icon} />
            <div className="ah-svc-info__text"><p className="ah-svc-info__label">{infoRow.label}</p><p className="ah-svc-info__value">{infoRow.value}</p></div>
          </div>
        ))}
        {payment && (
          <div className="ah-svc-info__row ah-svc-info__row--stack" key="payment">
            <div className="ah-svc-info__text"><p className="ah-svc-info__label">{payment.label}</p>
              <ul className="ah-svc-info__payments" aria-label={payment.label}>{payment.methods.map((paymentMethod) => <li key={paymentMethod.label} className="ah-pay-method">{paymentMethod.logo ? <img src={paymentMethod.logo} alt={paymentMethod.label} /> : paymentMethod.label}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
      <DgaDivider />
      <div className="ah-svc-info__group">
        {faq && <div className="ah-svc-info__row ah-svc-info__row--stack"><div className="ah-svc-info__text"><p className="ah-svc-info__label">{faq.label}</p><IconLink label={faq.linkLabel} href={faq.href} icon="link-04" /></div></div>}
        {contacts.map((contact) => (
          <div className="ah-svc-info__row" key={contact.label}>
            <Glyph name={contact.icon} />
            <div className="ah-svc-info__text"><p className="ah-svc-info__label">{contact.label}</p>
              <p className="ah-svc-info__value"><a className="ah-svc-info__contact" href={contact.href} dir="ltr">{contact.value}</a></p></div>
          </div>
        ))}
        {manual && <div><DgaButtonV2 variant="secondary-solid" size="lg" label={manual.label} onOnClick={manual.onClick} /></div>}
      </div>
      {apps && <>
        <DgaDivider />
        <div className="ah-svc-info__apps">
          <h2 className="ah-svc-info__apps-title">{apps.title}</h2>
          <ul className="ah-store-list">{apps.stores.map((store) => (
            <li key={store.label}><a className="ah-store" href={store.href || '#'} aria-label={store.ariaLabel || store.label}>
              {store.badge ? <img src={store.badge} alt="" /> : <><span className="ah-store__small" aria-hidden="true">{store.small}</span><span className="ah-store__name" aria-hidden="true">{store.label}</span></>}
            </a></li>
          ))}</ul>
        </div>
      </>}
    </aside>
  );
}

/** Video area — Figma "Video" 832×344, radius 16, background-neutral-50, centred Featured icon (Large, Brand, Dark, circle, play). */
export function VideoPlaceholder({ dir = 'rtl', label, onPlay, poster }) {
  return (
    <div className="ah-video" style={poster ? { backgroundImage: `url(${poster})` } : undefined}>
      <button type="button" className="ah-video__play" aria-label={label || patternLabels(dir).playVideo} onClick={onPlay}>
        <DgaFeaturedIcon icon={{ name: 'play', variant: 'stroke' }} color="brand" size="lg" variant="dark" circle aria-hidden="true" />
      </button>
    </div>
  );
}

/** Ordered steps — Figma "Steps": List item / Type=Ordered, Level=One, Style=Neutral, gap 16. */
export function StepsList({ items = [], ariaLabel }) {
  return (
    <DgaListV2 type="ordered" color="neutral" aria-label={ariaLabel} className="ah-steps">
      {items.map((stepText, i) => <DgaListItem key={i} type="ordered" level="one" itemNumber={String(i + 1)} itemText={stepText} />)}
    </DgaListV2>
  );
}

/** Service information tabs — Figma Horizontal Tab List (Size=Medium, Tab Icons=True, Flush=True) + panel. */
export function ServiceTabs({ dir = 'rtl', tabs = [] }) {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active] || tabs[0];
  return (
    <div className="ah-svc-tabs">
      <DgaTabs flush size="md" tabsList={tabs.map((tab, i) => ({ label: tab.label, tabIcon: tab.icon, iconProps: { variant: 'stroke', size: 20, 'aria-hidden': 'true' }, onClick: () => setActive(i) }))} />
      <div className="ah-svc-tabs__panel" role="region" aria-label={activeTab?.label}>{activeTab?.content}</div>
    </div>
  );
}

/** Rating strip — Figma "Rating" (Section Template - Desktop): white, 2px top border-primary, pad 24/80; content: text
 *  «تم تقييم هذه الخدمة بمتوسط N» + Rating (stars) + «N تقييم»; action: Primary Large «قيم هذه الخدمة». */
export function RatingStrip({ dir = 'rtl', average, count, onRate }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(-1);
  const labels = patternLabels(dir);
  return (
    <div className="ah-rating-strip" data-pattern="rating-strip"><div className="ah-container ah-rating-strip__inner">
      <div className="ah-rating-strip__content">
        <p>{labels.ratedAverage(average)}</p>
        <div className="ah-rating-strip__stars"><DgaRating value={Number(average)} readOnly size="md" direction={dir} /><span className="ah-text-sm ah-rating-strip__count">{labels.reviewCount(count)}</span></div>
      </div>
      {open
        ? <div className="ah-rating-strip__rate" role="group" aria-label={labels.rateService}><DgaRating value={value} size="md" direction={dir} onRatingChange={(ratingEvent) => { setValue(Number(ratingEvent.detail)); onRate?.(Number(ratingEvent.detail)); }} /></div>
        : <DgaButtonV2 variant="primary" size="lg" label={labels.rateService} onOnClick={() => setOpen(true)} />}
    </div></div>
  );
}

/** Comments & suggestions — Figma Card / Effect=Stroke 1280: featured icon (Large, brand, light, checkmark-circle-02) · title
 *  (Text lg/Bold) · text (Text md) · Actions: Primary Large «تواصل معنا». */
export function CommentsCard({ dir = 'rtl', title, text, actionLabel, onAction, id = 'comments-h' }) {
  const cardRef = useRef(null);
  useEffect(() => stretchCardV2(cardRef.current), []);
  return (
    <section className="ah-section ah-section--white" aria-labelledby={id}><div className="ah-container">
      <DgaCardV2 ref={cardRef} effect="stroke" width="100%" maxWidth="100%" className="ah-comments-card">
        <div slot="card-content" className="ah-svc-card">
          <DgaFeaturedIcon icon={{ name: 'checkmark-circle-02', variant: 'stroke' }} color="brand" size="lg" variant="light" circle />
          <div className="ah-svc-card__content"><h2 id={id} className="ah-svc-card__title">{title}</h2><p className="ah-svc-card__desc">{text}</p></div>
        </div>
        <div slot="card-actions" className="ah-svc-card__actions"><DgaButtonV2 variant="primary" size="lg" label={actionLabel} onOnClick={onAction} /></div>
      </DgaCardV2>
    </div></section>
  );
}

/** Filtration — Figma "Filtration" (Button-menu Neutral Large: filter icon · label · chevron; panel = _Filtration list of checkbox /
 *  radio groups + «تطبيق» / «إزالة التصفية»). Built from DGA buttons, checkboxes and radios because dga-filteration 0.0.52 crashes
 *  unless `initvalue` carries slider AND range blocks, which then show as selected chips (PKG-FILTER-01). */
export function FilterMenu({ dir = 'rtl', label, blocks = [], onApply }) {
  const [open, setOpen] = useState(false);
  const labels = patternLabels(dir);
  const panelRef = useRef(null); const menuRef = useRef(null);
  const { registry } = useDga();
  const icons = { ...buttonIcon('filter', { api: 'v2', position: 'lead', size: 24, registry }), ...buttonIcon('arrow-down-01', { api: 'v2', position: 'trail', size: 24, registry }) };
  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (keyEvent) => { if (keyEvent.key === 'Escape') { setOpen(false); menuRef.current?.querySelector('dga-button-v2')?.focus?.(); } };
    document.addEventListener('keydown', closeOnEscape); return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  // read the checked state straight from the DGA hosts (name is a property on dga-checkbox, not a reflected attribute)
  const applySelection = (clear) => { onApply?.(readFilterSelection(panelRef.current, blocks, { clear })); setOpen(false); };
  return (
    <div className="ah-filter-menu" ref={menuRef}>
      <DgaButtonV2 variant="neutral" size="lg" label={label} {...icons} aria-expanded={open ? 'true' : 'false'} onOnClick={() => setOpen((isOpen) => !isOpen)} />
      {open && (
        <form ref={panelRef} className="ah-filter-menu__panel" aria-label={label} onSubmit={(submitEvent) => { submitEvent.preventDefault(); applySelection(false); }}>
          {blocks.map((block) => (
            <fieldset className="ah-fieldset" key={block.id}><legend>{block.label}</legend>
              {block.options.map((option) => (block.type === 'radio'
                ? <DgaRadioButton key={option.id} name={block.id} value={option.value} label={option.label} data-block={block.id} data-value={option.value} />
                : <DgaCheckbox key={option.id} name={`${block.id}--${option.id}`} value={option.value} label={option.label} data-block={block.id} data-value={option.value} />))}
            </fieldset>
          ))}
          <div className="ah-filter-menu__actions">
            <DgaButtonV2 variant="primary" size="md" label={labels.applyFilters} onOnClick={() => applySelection(false)} />
            <DgaButtonV2 variant="secondary-outline" size="md" label={labels.clearFilters} onOnClick={() => applySelection(true)} />
          </div>
        </form>
      )}
    </div>
  );
}

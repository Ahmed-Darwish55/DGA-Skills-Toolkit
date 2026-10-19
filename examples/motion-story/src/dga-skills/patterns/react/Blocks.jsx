import React, { useState } from 'react';
import { DgaBreadcrumbs, DgaTag, DgaButtonV2, DgaRating, DgaInlineAlert, DgaList, DgaLineSkeleton } from 'platformscode-new-react';
import { useMode } from './mode.jsx';
import { FilterBar } from './Forms.jsx';
import { pickByDirection } from '../../core/direction.js';
import { patternLabels } from '../shared/index.js';

/**
 * Page heading — Figma templates (service-page / content-page / search-page): breadcrumbs → tags → h1 → lead → actions.
 * Real DGA parts: DgaBreadcrumbs, DgaTag, DgaButtonV2. The heading itself is page-authored (h1, tokens only).
 * `actions`: [{ label, variant?, onClick }] — the first action is primary. Renders inside the brand-25 band.
 */
export function PageHeading({ dir = 'rtl', crumbs = [], tags = [], title, lead, actions = [], qa: qaHook = 'page-heading' }) {
  const mode = useMode();
  return (
    <div className="ah-section--brand-25" data-pattern="page-heading" data-mode={mode}><div className="ah-container" style={{ paddingBlock: 'var(--spacing-6)' }}>
      {crumbs.length > 0 && <DgaBreadcrumbs items={crumbs} />}
      <div className="ah-stack" style={{ marginTop: crumbs.length ? 'var(--spacing-6)' : 0 }}>
        {tags.length > 0 && <div className="ah-row">{tags.map((tag) => <DgaTag key={tag.label} label={tag.label} variant={tag.variant || 'neutral'} />)}</div>}
        <h1 className="ah-display-md">{title}</h1>
        {lead && <p className="ah-text-lg ah-muted ah-prose">{lead}</p>}
        {actions.length > 0 && (
          <div className="ah-row" data-qa={qaHook}>
            {actions.map((headingAction, i) => <DgaButtonV2 key={headingAction.label} variant={headingAction.variant || (i === 0 ? 'primary' : 'secondary-outline')} size="lg" label={headingAction.label} onOnClick={headingAction.onClick} />)}
          </div>
        )}
      </div>
    </div></div>
  );
}

/**
 * Feedback & rating block — templates/feedback-section.md + rating-section.md: question, yes/no, optional DgaRating,
 * optional free-text reason after "no". Fully keyboard operable (buttons + rating component).
 */
export function FeedbackRating({ dir = 'rtl', question, withRating = true, onSubmit }) {
  const mode = useMode();
  const labels = patternLabels(dir);
  const [answer, setAnswer] = useState(null);
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);
  const questionText = question || pickByDirection(dir, 'هل كان هذا المحتوى مفيداً؟', 'Was this content helpful?');
  return (
    <section className="ah-section" data-pattern="feedback-rating" data-mode={mode} aria-labelledby="fbr-q"><div className="ah-container ah-form-panel ah-stack">
      <h2 id="fbr-q" className="ah-display-xs">{sent ? pickByDirection(dir, 'شكراً لك', 'Thank you') : questionText}</h2>
      {!sent ? (
        <>
          <div className="ah-row" role="group" aria-labelledby="fbr-q">
            <DgaButtonV2 variant={answer === true ? 'primary' : 'secondary-outline'} size="md" label={labels.yes} onOnClick={() => setAnswer(true)} />
            <DgaButtonV2 variant={answer === false ? 'primary' : 'secondary-outline'} size="md" label={labels.no} onOnClick={() => setAnswer(false)} />
          </div>
          {withRating && <div><p className="ah-text-sm ah-muted" id="fbr-r">{pickByDirection(dir, 'قيّم تجربتك', 'Rate your experience')}</p><DgaRating value={rating} max={5} direction={dir} onRatingChange={(ratingEvent) => setRating(Number(ratingEvent.detail))} /></div>}
          <div className="ah-row"><DgaButtonV2 variant="primary" size="md" label={pickByDirection(dir, 'إرسال', 'Send')} disabled={answer === null} onOnClick={() => { setSent(true); onSubmit?.({ helpful: answer, rating }); }} /></div>
        </>
      ) : (
        /* PKG-ALERT-02: an inline alert here would put an h4 directly under the h2 → plain status text instead */
        <p className="ah-text-md" role="status">{pickByDirection(dir, 'تم استلام ملاحظاتك.', 'Your feedback was received.')}</p>
      )}
    </div></section>
  );
}

/**
 * Alert stack — one or more DgaInlineAlert (info / success / warning / error) with an aria-live region so new
 * alerts are announced. `items`: [{ id, type, title, text, dismissible? }]. The package close button has no accessible name (PKG-ALERT-01), so it is rendered only when `dismissible` is set.
 */
export function AlertStack({ items = [], live = 'polite' }) {
  const mode = useMode();
  return (
    <div className="ah-stack" data-pattern="alert-stack" data-mode={mode} aria-live={live} aria-atomic="false">
      {items.map((alertItem) => <DgaInlineAlert key={alertItem.id || alertItem.title} type={alertItem.type || 'info'} isCloseButton={!!alertItem.dismissible} /* PKG-ALERT-01: the package close button has no accessible name → only when the caller asks for it */ leadText={alertItem.title} helperText={alertItem.text} />)}
    </div>
  );
}

/**
 * State block — loading / empty / error states for lists, search results and data sections (templates: search-page,
 * help-support, e-participation). Loading = DgaSkeleton rows (package), empty/error = page-authored text + DgaInlineAlert + retry.
 */
export function StateBlock({ dir = 'rtl', state = 'loading', rows = 3, title, text, onRetry, retryLabel }) {
  const mode = useMode();
  if (state === 'loading') {
    return (
      <div className="ah-stack" data-pattern="state-block" data-state="loading" data-mode={mode} role="status" aria-live="polite" aria-busy="true">
        <span className="ah-sr-only">{pickByDirection(dir, 'جارٍ التحميل…', 'Loading…')}</span>
        {Array.from({ length: rows }).map((_, i) => <DgaLineSkeleton key={i} size="lg" />)}
      </div>
    );
  }
  if (state === 'empty') {
    return (
      <div className="ah-form-panel ah-stack" data-pattern="state-block" data-state="empty" data-mode={mode} role="status">
        <h3 className="ah-display-xs">{title || pickByDirection(dir, 'لا توجد نتائج', 'No results')}</h3>
        <p className="ah-text-md ah-muted">{text || pickByDirection(dir, 'جرّب كلمات أخرى أو أزل بعض الفلاتر.', 'Try other keywords or remove some filters.')}</p>
      </div>
    );
  }
  return (
    <div className="ah-stack" data-pattern="state-block" data-state="error" data-mode={mode} role="alert">
      {/* PKG-ALERT-02: dga-inline-alert renders its heading as a fixed h4 → a page-authored h3 keeps the outline h2→h3→h4 */}
      <h3 className="ah-display-xs">{title || pickByDirection(dir, 'حدث خطأ', 'Something went wrong')}</h3>
      <DgaInlineAlert type="error" isCloseButton={false} leadText={pickByDirection(dir, 'تعذّر تحميل البيانات', 'The data could not be loaded')} helperText={text || pickByDirection(dir, 'حاول مرة أخرى.', 'Please try again.')} />
      {onRetry && <div className="ah-row"><DgaButtonV2 variant="secondary-outline" size="md" label={retryLabel || pickByDirection(dir, 'إعادة المحاولة', 'Retry')} onOnClick={onRetry} /></div>}
    </div>
  );
}

/**
 * List block — DgaList (ordered / unordered) with an optional page-authored heading kept at the right level
 * (dga-list renders its own title as a fixed h3 — PKG-ALERT-02 family; pass `title` only when h3 fits the outline).
 */
export function ListBlock({ heading, headingId, type = 'unordered', items = [], title }) {
  const mode = useMode();
  return (
    <div className="ah-stack" data-pattern="list-block" data-mode={mode}>
      {heading && <h2 id={headingId} className="ah-display-xs">{heading}</h2>}
      <DgaList type={type} title={title} items={items} />
    </div>
  );
}

/** Search & filters — alias of FilterBar (DgaSearchBox + DgaDropdown + active DgaTags + clear) under its pattern name. */
export function SearchFilters(props) { return <FilterBar {...props} />; }

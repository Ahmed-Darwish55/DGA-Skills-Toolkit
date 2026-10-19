import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { addIcons } from '@platformscode/core/components';
import { home05Stroke, search01Stroke, calendar04Stroke, alert02Stroke, userStroke, tick02Stroke, mail02Stroke, callStroke, location01Stroke, searchRemoveStroke, arrowRight02Stroke, arrowLeft02Stroke, arrowDown01Stroke, arrowUp02Stroke, addCircleStroke, informationCircleStroke, mic01Stroke, translationStroke, arrowRight01Stroke, arrowLeft01Stroke, cancelCircleStroke, moreHorizontalCircle01Stroke, helpCircleStroke, multiplicationSignStroke } from '@platformscode/icons';   // named imports only
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { DgaProvider } from './dga-skills/react/index.js';
import { ModeProvider, NavProvider, SiteProvider } from './dga-skills/patterns/react/index.js';
import { Home, Service, FormPage, Faq, NotFound, SearchPage, ContactPage, content, createSiteConfig } from './dga-skills/templates/react/index.js';
import * as GENERATED from './generated/index.js';   // 20 skeletons from tools/new_template.py — route #/ar/gen/<slug> (build + render check; NOT verified pages)
import './dga-skills/patterns/patterns.css';

/**
 * QA demo of a complete government service site built ONLY from the toolkit's templates and patterns.
 * ?a11y=dropdown turns on the opt-in dropdown accessibility layer on the form page (lib/core/dropdown-a11y.js).
 * Routes (hash, no router dependency):  #/ar/<page>  |  #/en/<page>   page ∈ home service form faq search contact (anything else → 404)
 * Design mode: ?mode=dga-exact|dga-enhanced|dga-creative (default dga-exact). Search fixture state: ?state=loading|empty|error|results
 * Placeholder data everywhere — this is NOT an official DGA / government site.
 */
const ICONS = ['home-05', 'search-01', 'calendar-04', 'alert-02', 'user', 'tick-02', 'mail-02', 'call', 'location-01', 'search-remove', 'arrow-right-02', 'arrow-left-02', 'arrow-down-01', 'arrow-up-02', 'add-circle', 'information-circle', 'mic-01', 'cancel-circle', 'translation', 'arrow-right-01', 'arrow-left-01', 'more-horizontal-circle-01', 'help-circle', 'multiplication-sign'];
const primary = { home05Stroke, search01Stroke, calendar04Stroke, alert02Stroke, userStroke, tick02Stroke, mail02Stroke, callStroke, location01Stroke, searchRemoveStroke, arrowRight02Stroke, arrowLeft02Stroke, arrowDown01Stroke, arrowUp02Stroke, addCircleStroke, informationCircleStroke, mic01Stroke, translationStroke, arrowRight01Stroke, arrowLeft01Stroke, cancelCircleStroke, moreHorizontalCircle01Stroke, helpCircleStroke, multiplicationSignStroke };
const media = { src: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#0d3b2a"/><stop offset="1" stop-color="#1b8354"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><circle cx="900" cy="250" r="160" fill="#ffffff" fill-opacity="0.08"/></svg>'), alt: '', licence: 'generated placeholder (CC0)' };
const PAGES = ['home', 'service', 'form', 'faq', 'search', 'contact'];

/** ONE site configuration per direction (rules/code-quality.md §1): this demo's own menu, the sample identity / Second Nav / footer content. */
const siteConfigs = {};
function demoSiteConfig(dir) {
  if (siteConfigs[dir]) return siteConfigs[dir];
  const isArabic = dir === 'rtl';
  const sampleSite = content(dir).site;
  siteConfigs[dir] = createSiteConfig({
    dir,
    identity: { name: sampleSite.identity.name },
    navigationItems: [
      { id: 'home', route: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
      { id: 'services', route: 'search', label: isArabic ? 'الخدمات' : 'Services' },
      { id: 'faq', route: 'faq', label: content(dir).pages.faq.title },
      { id: 'contact', route: 'contact', label: isArabic ? 'تواصل معنا' : 'Contact' },
    ],
    header: { secondNavItems: sampleSite.header.secondNavItems },
    footer: sampleSite.footer,
  });
  return siteConfigs[dir];
}

function parseHash() {
  const generatedMatch = /^#\/(ar|en)\/gen\/([a-z0-9-]+)/.exec(location.hash || '');
  if (generatedMatch) return { lang: generatedMatch[1], page: 'gen', raw: generatedMatch[2], gen: generatedMatch[2] };
  const pageMatch = /^#\/(ar|en)\/?([a-z0-9-]*)/.exec(location.hash || '');
  const lang = pageMatch ? pageMatch[1] : 'ar'; const page = pageMatch && pageMatch[2] ? pageMatch[2] : 'home';
  return { lang, page: PAGES.includes(page) ? page : (page === 'about' ? 'home' : 'not-found'), raw: page };
}
function useRoute() {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => { const onHashChange = () => setRoute(parseHash()); addEventListener('hashchange', onHashChange); return () => removeEventListener('hashchange', onHashChange); }, []);
  return route;
}

function App({ mode, searchState, a11y }) {
  const route = useRoute();
  const dir = route.lang === 'en' ? 'ltr' : 'rtl'; const isArabic = dir === 'rtl';
  useEffect(() => {
    document.documentElement.dir = dir; document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.title = (isArabic ? 'الجهة الحكومية النموذجية — ' : 'Sample Government Entity — ') + ({ home: isArabic ? 'الرئيسية' : 'Home', service: isArabic ? 'إصدار رخصة بناء' : 'Building permit', form: isArabic ? 'طلب رخصة' : 'Permit request', faq: content(dir).pages.faq.title, search: isArabic ? 'البحث' : 'Search', contact: isArabic ? 'تواصل معنا' : 'Contact us' }[route.page] || '404') + (isArabic ? ' (نموذج توضيحي)' : ' (demo)');
    // move focus to the main landmark after navigation so keyboard/screen-reader users land on the new page content
    requestAnimationFrame(() => document.getElementById('main')?.focus?.());
  }, [route.page, route.lang]);
  const go = (target) => { location.hash = `#/${route.lang}/${target}`; scrollTo(0, 0); };
  const genName = route.gen ? route.gen.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join('') + 'Page' : null;
  const Gen = genName && GENERATED[genName];
  const Page = route.page === 'gen' ? (Gen ? <Gen dir={dir} /> : <NotFound dir={dir} />) : { home: <Home dir={dir} media={media} />, service: <Service dir={dir} />, form: <FormPage dir={dir} dropdownA11y={a11y === 'dropdown'} />, faq: <Faq dir={dir} />, search: <SearchPage dir={dir} state={searchState} />, contact: <ContactPage dir={dir} /> }[route.page] || <NotFound dir={dir} />;
  return (
    <ModeProvider mode={mode}>
      <SiteProvider siteConfig={demoSiteConfig(dir)}>
      <NavProvider active={route.page} go={go}>
        <div data-route={route.page} data-lang={route.lang} data-mode={mode}>
          {Page}
          <p className="ah-container ah-text-sm ah-muted" style={{ paddingBlock: 'var(--spacing-4)' }}>
            {isArabic ? 'نموذج توضيحي من DGA Skills Toolkit — بيانات غير حقيقية، وليس موقعاً حكومياً رسمياً. ' : 'DGA Skills Toolkit QA demo — placeholder data, not an official government site. '}
            <a href={`#/${isArabic ? 'en' : 'ar'}/${route.page === 'not-found' ? route.raw : route.page}`} lang={isArabic ? 'en' : 'ar'} dir={isArabic ? 'ltr' : 'rtl'}>{isArabic ? 'English' : 'العربية'}</a>
          </p>
        </div>
      </NavProvider>
      </SiteProvider>
    </ModeProvider>
  );
}

const searchParams = new URLSearchParams(location.search);
const mode = ['dga-exact', 'dga-enhanced', 'dga-creative'].includes(searchParams.get('mode')) ? searchParams.get('mode') : 'dga-exact';
const searchState = ['loading', 'empty', 'error', 'results'].includes(searchParams.get('state')) ? searchParams.get('state') : undefined;
createRoot(document.getElementById('root')).render(
  <DgaProvider addIcons={addIcons} primary={primary} fallback={{ Tick02Icon }} icons={ICONS}>
    <App mode={mode} searchState={searchState} a11y={searchParams.get('a11y')} />
  </DgaProvider>
);

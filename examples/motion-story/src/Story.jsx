import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DgaButtonV2, DgaTag } from 'platformscode-new-react';
import { useScrollStory, useThreeScene } from './dga-skills/motion/react.js';
import { buildCoast } from './coast3d.js';
import { content } from './dga-skills/templates/react/content.js';

/**
 * Concept A — "the coastline is the timeline" (DESIGN-RESEARCH.md §4). The project phases are a real sequence, so the
 * coastline path is the spine: each phase is a station on it. Layout works without JS (CSS sticky visual + text column);
 * GSAP only scrubs the line drawing and marks the active station. Placeholder project — not a real programme.
 */
const PHASES = (isArabic) => [
  { id: 'plan', when: isArabic ? '٢٠٢٤' : '2024', title: isArabic ? 'التخطيط مع السكان' : 'Planning with residents', text: isArabic ? 'ثلاث جلسات استماع مع السكان حدّدت أولويات الواجهة: الظل، والممشى المتصل، والوصول الآمن للبحر.' : 'Three listening sessions with residents set the priorities: shade, a continuous walkway and safe access to the sea.', x: 0.08 },
  { id: 'infra', when: isArabic ? '٢٠٢٥' : '2025', title: isArabic ? 'البنية التحتية' : 'Infrastructure', text: isArabic ? 'تصريف مياه الأمطار، وإنارة موفرة للطاقة، ومسار دراجات بطول ٦ كم يربط الأحياء بالشاطئ.' : 'Storm-water drainage, low-energy lighting and a 6 km cycle path linking the neighbourhoods to the shore.', x: 0.36 },
  { id: 'public', when: isArabic ? '٢٠٢٦' : '2026', title: isArabic ? 'المرافق العامة' : 'Public facilities', text: isArabic ? 'ملاعب ظليلة، ومراكز خدمة، ونقاط إسعاف كل كيلومتر على امتداد الواجهة.' : 'Shaded playgrounds, service points and a first-aid station every kilometre along the front.', x: 0.64 },
  { id: 'open', when: isArabic ? '٢٠٢٧' : '2027', title: isArabic ? 'الافتتاح والتشغيل' : 'Opening and operation', text: isArabic ? 'تشغيل مرحلي يقيس رضا الزوار شهرياً وينشر النتائج على الموقع.' : 'A phased opening that measures visitor satisfaction monthly and publishes the results here.', x: 0.92 },
];
const COAST = 'M0 120 C 120 80 210 150 330 118 S 560 60 700 104 S 900 160 1000 110';

export function Story({ dir, mode, threeD, forceFallback }) {
  const isArabic = dir === 'rtl';
  const root = useRef(null); const hero3d = useRef(null);
  const [skipped, setSkipped] = useState(false);
  const phases = PHASES(isArabic);
  const story = useScrollStory(root, {
    gsap, ScrollTrigger, mode, deps: [dir, skipped],
    build: ({ gsap: gsapInstance, ScrollTrigger: scrollTrigger, root: storyRoot }) => {
      if (skipped) return;
      const path = storyRoot.querySelector('[data-coast-line]'); if (!path) return;
      const pathLength = path.getTotalLength();
      gsapInstance.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
      gsapInstance.to(path, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: storyRoot.querySelector('[data-phases]'), start: 'top 60%', end: 'bottom 60%', scrub: 0.4 } });
      storyRoot.querySelectorAll('[data-phase]').forEach((phaseElement) => {
        scrollTrigger.create({ trigger: phaseElement, start: 'top 55%', end: 'bottom 55%', toggleClass: { targets: [phaseElement, storyRoot.querySelector(`[data-station="${phaseElement.dataset.phase}"]`)], className: 'is-active' } });
      });
    },
  });
  const three = useThreeScene(hero3d, { loadThree: () => import('three'), build: buildCoast, mode, threeD, forceFallback,
    poster: { src: '/coast-poster.svg', licence: 'original illustration made for this demo (DGA Skills Toolkit, owner rights)', alt: isArabic ? 'رسم توضيحي لخط الساحل مع مبانٍ منخفضة على الواجهة البحرية' : 'Illustration of the coastline with low buildings along the waterfront' } });

  return (
    <div ref={root} className="ms" data-concept="A" data-story={skipped ? 'skipped' : 'on'} data-motion={story ? (story.applied ? (story.reduced ? 'reduced' : 'on') : 'off') : 'pending'}>
      <section className="ms-hero" aria-labelledby="ms-title">
        <div className="ms-hero__text">
          <DgaTag label={content(dir).entity.description} variant="neutral" />
          <h1 id="ms-title" className="ms-title">{isArabic ? 'واجهة بحرية تُبنى مع أهلها' : 'A waterfront built with its residents'}</h1>
          <p className="ms-lead">{isArabic ? 'أربع مراحل من الاستماع إلى الافتتاح. مرّر للأسفل لتتبّع كل مرحلة على خط الساحل.' : 'Four phases from listening to opening. Scroll to follow each one along the coastline.'}</p>
          <div className="ms-actions">
            <DgaButtonV2 variant="primary" size="lg" label={isArabic ? 'تابع المراحل' : 'Follow the phases'} onOnClick={() => document.getElementById('ms-phases-h')?.scrollIntoView({ behavior: 'smooth' })} />
            <DgaButtonV2 variant="secondary-outline" size="lg" label={skipped ? (isArabic ? 'عرض القصة' : 'Show the story') : (isArabic ? 'تخطَّ القصة' : 'Skip the story')} onOnClick={() => setSkipped((wasSkipped) => !wasSkipped)} />
          </div>
        </div>
        <div className="ms-hero__visual" ref={hero3d} data-3d-state={three.status} />
      </section>

      {skipped ? (
        <section className="ms-summary" aria-labelledby="ms-sum-h"><div className="ms-container">
          <h2 id="ms-sum-h" className="ms-h2">{isArabic ? 'المراحل باختصار' : 'The phases at a glance'}</h2>
          <ol className="ms-summary__list">{phases.map((phase) => <li key={phase.id}><strong>{phase.when} — {phase.title}.</strong> {phase.text}</li>)}</ol>
        </div></section>
      ) : (
        <section className="ms-journey" aria-labelledby="ms-phases-h"><div className="ms-container ms-journey__grid">
          <div className="ms-journey__visual" aria-hidden="true">
            <svg viewBox="0 40 1000 140" className="ms-coast" style={isArabic ? { transform: 'scaleX(-1)' } : undefined}>
              <path d={COAST} className="ms-coast__ghost" />
              <path d={COAST} className="ms-coast__line" data-coast-line />
              {phases.map((phase) => <circle key={phase.id} data-station={phase.id} className="ms-coast__station" cx={phase.x * 1000} cy={110} r="11" />)}
            </svg>
            {/* station labels live outside the mirrored SVG so the text is never flipped */}
            <ol className="ms-coast__labels">{phases.map((phase) => <li key={phase.id} data-station-label={phase.id} style={{ insetInlineStart: `${phase.x * 100}%` }}>{phase.when}</li>)}</ol>
          </div>
          <div>
            <h2 id="ms-phases-h" className="ms-h2">{isArabic ? 'المراحل' : 'The phases'}</h2>
            <ol className="ms-phases" data-phases>
              {phases.map((phase, i) => (
                <li key={phase.id} className="ms-phase" data-phase={phase.id}>
                  <span className="ms-phase__when">{phase.when}</span>
                  <h3 className="ms-phase__title"><span className="ms-sr">{isArabic ? `المرحلة ${i + 1}: ` : `Phase ${i + 1}: `}</span>{phase.title}</h3>
                  <p className="ms-phase__text">{phase.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div></section>
      )}
    </div>
  );
}

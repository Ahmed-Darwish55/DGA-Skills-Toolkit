import React from 'react';
import { createRoot } from 'react-dom/client';
import { addIcons } from '@platformscode/core/components';
import { DgaProvider } from './dga-skills/react/index.js';
import { ModeProvider } from './dga-skills/patterns/react/index.js';
import { PageShell } from './dga-skills/templates/react/PageShell.jsx';
import { motionPolicy } from './dga-skills/motion/index.js';
import { Story } from './Story.jsx';
import './dga-skills/patterns/patterns.css';
import './story.css';

/**
 * Creative showcase. Query: ?lang=ar|en · ?mode=dga-creative (default) | dga-enhanced | dga-exact · ?3d=1 (user asked for 3D)
 * · ?fallback=1 (force the poster). In dga-exact the page renders the same content with NO house motion and no 3D.
 */
const searchParams = new URLSearchParams(location.search);
const dir = searchParams.get('lang') === 'en' ? 'ltr' : 'rtl';
const mode = ['dga-exact', 'dga-enhanced', 'dga-creative'].includes(searchParams.get('mode')) ? searchParams.get('mode') : 'dga-creative';
const threeD = searchParams.get('3d') === '1';
window.__dgaMotionPolicy = motionPolicy(mode, { threeD });

createRoot(document.getElementById('root')).render(
  <DgaProvider addIcons={addIcons} icons={[]} /* no icon payloads registered: the showcase uses none of its own; @platformscode/icons is UNLICENSED and not installed here */>
    <ModeProvider mode={mode}>
      <PageShell dir={dir}>
        <Story dir={dir} mode={mode} threeD={threeD} forceFallback={searchParams.get('fallback') === '1'} />
      </PageShell>
    </ModeProvider>
  </DgaProvider>,
);

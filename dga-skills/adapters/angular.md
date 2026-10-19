# Angular adapter — tested (Angular 19.2 + @platformscode/core 0.0.52 custom elements)

Runnable example: `tests/integration/angular` (`ng build` 12–14 s, 1.07 MB main; 49 Playwright checks).
`platformscode-new-angular@2.0.0` is **not used** (PKG-NG-01: peer core 0.0.17, wrapper inputs not matching the core API).

```bash
npm i @platformscode/core@0.0.52 @platformscode/icons@0.0.11 @hugeicons/core-free-icons@4.3.5   # with user approval
python3 ${CLAUDE_SKILL_DIR}/tools/copy_lib.py --framework angular --dest src/app/dga-skills
```
```ts
// app.config.ts
import { addIcons } from '@platformscode/core/components';
import { defineCustomElement as defButton } from '@platformscode/core/components/dga-button.js';
import { defineCustomElement as defDropdown } from '@platformscode/core/components/dga-dropdown.js';
import { arrowRight02Stroke } from '@platformscode/icons';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';   // deep import (index import → esbuild OOM)
import { provideDgaSkills } from './dga-skills/angular';
providers: [provideDgaSkills({ defines: { 'dga-button': defButton, 'dga-dropdown': defDropdown }, addIcons,
  primary: { arrowRight02Stroke }, fallback: { Tick02Icon }, icons: ['arrow-right-02', 'tick-02'] })]
```
```html
<!-- component with schemas: [CUSTOM_ELEMENTS_SCHEMA] -->
@let ic = icons.buttonIcon('arrow-right-02', { size: 'lg' });
<dga-button variant="primary-brand" size="lg" [label]="'متابعة'" [leadIconType]="ic['leadIconType']" [leadIconProps]="ic['leadIconProps']" (onClick)="next()"></dga-button>
<dga-skills-icon-button icon="search-01" [label]="'بحث'"></dga-skills-icon-button>
<dga-dropdown [label]="'المدينة'" [options]="cities" [onChange]="onCity"></dga-dropdown>
```
Services: `DgaIconService` (register/sourceOf/buttonIcon/report), `DirectionService` (signal), `ReducedMotionService` (signal + duration()).
Pitfall (measured): camelCase props must be property bindings; `leadIconType="x"` as a static attribute is ignored.

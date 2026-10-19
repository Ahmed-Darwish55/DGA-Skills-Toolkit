/**
 * ArcGIS Experience Builder widget template — DGA Button + Dropdown with real @platformscode/core custom elements.
 * Copy lib with:  python3 <skill>/tools/copy_lib.py --framework exb --dest client/your-extensions/widgets/dga-skills-demo/src/dga-skills
 * Rules honoured: no second React (React comes from jimu-core), no global CSS (tokens applied to the widget root),
 * icons registered centrally, map/view untouched.
 */
import { React, type AllWidgetProps } from 'jimu-core'
import { addIcons } from '@platformscode/core/components'
import { defineCustomElement as defButton } from '@platformscode/core/components/dga-button.js'
import { defineCustomElement as defDropdown } from '@platformscode/core/components/dga-dropdown.js'
import { arrowRight02Stroke, search01Stroke, arrowDown01Stroke } from '@platformscode/icons'
import { Tick02Icon } from '@hugeicons/core-free-icons'
// DGA CSS variables extracted from core.css at copy time (tools/copy_lib.py --framework exb) — JSON works in ExB webpack
import cssVars from '../dga-skills/api/core-css-vars@0.0.52.json'
import { DgaElement, useDgaWidget, buttonIcon, BUTTON_ICON_SIZE } from '../dga-skills/exb/index.js'

const CITIES = [{ name: 'الدمام', value: 'dmm' }, { name: 'الخبر', value: 'khb' }]

export default function Widget (props: AllWidgetProps<{ icons?: string[] }>) {
  const root = React.useRef<HTMLDivElement>(null)
  const dga = useDgaWidget(root, {
    cssVars,
    defines: { 'dga-button': defButton, 'dga-dropdown': defDropdown },
    addIcons,
    primary: { arrowRight02Stroke, search01Stroke, arrowDown01Stroke },
    fallback: { Tick02Icon },
    icons: props.config?.icons ?? ['arrow-right-02', 'search-01', 'arrow-down-01', 'tick-02']
  })
  const [clicks, setClicks] = React.useState(0)
  const [city, setCity] = React.useState('')
  const rtl = dga.dir === 'rtl'
  return (
    <div ref={root} className='dga-skills-widget' data-testid='exb-widget'>
      <DgaElement tag='dga-button' data-testid='exb-btn'
        props={{ variant: 'primary-brand', size: 'lg', label: rtl ? 'إجراء' : 'Action', ...buttonIcon('arrow-right-02', { size: BUTTON_ICON_SIZE.lg, registry: dga.registry }) }}
        events={{ onClick: () => { setClicks(clickCount => clickCount + 1) } }} />
      <DgaElement tag='dga-button' data-testid='exb-fallback'
        props={{ variant: 'secondary', size: 'lg', label: rtl ? 'تم' : 'Done', ...buttonIcon('tick-02', { size: 24, registry: dga.registry }) }} />
      <output data-testid='exb-clicks'>{clicks}</output>
      <DgaElement tag='dga-dropdown' data-testid='exb-dd'
        props={{ label: rtl ? 'المدينة' : 'City', placeholder: rtl ? 'اختر' : 'Choose', options: CITIES, onChange: (selectedValue: string) => { setCity(String(selectedValue)) } }} />
      <output data-testid='exb-dd-value'>{city}</output>
      <pre data-testid='exb-report'>{JSON.stringify({ register: dga.report, dir: dga.dir, reducedMotion: dga.reduced })}</pre>
    </div>
  )
}

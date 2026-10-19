// Framework-agnostic adapter: real @platformscode/core custom elements (custom-elements build) + shared core.
// Used directly by plain HTML/JS, and by Angular / ArcGIS ExB adapters underneath.
import { setupDga } from '../core/setup.js';
import { defineDgaElements, setProps, onDga } from '../core/elements.js';
import { buttonIcon, BUTTON_ICON_SIZE } from '../core/icons.js';
import { requireAccessibleName } from '../core/a11y.js';

/**
 * @param {object} options  { defines: {'dga-button': defineCustomElement, …}, addIcons, primary, fallback, icons, policy, onMissing }
 */
export function setupDgaWeb({ defines = {}, ...setupOptions }) {
  const dga = setupDga(setupOptions);
  dga.defined = defineDgaElements(defines);
  return dga;
}

/**
 * Create a real <dga-button>/<dga-button-v2> with props set as DOM properties (objects such as leadIconProps
 * cannot be attributes). `icon` goes through the registry: missing icons render no empty slot.
 */
export function createDgaButton(ownerDocument, { v2: useV2 = false, icon, iconPosition = 'lead', size = 'lg', onClick, registry, ...props } = {}) {
  const button = ownerDocument.createElement(useV2 ? 'dga-button-v2' : 'dga-button');
  if (iconPosition === 'icon') requireAccessibleName({ iconOnly: true, label: props.label });
  const slot = icon ? buttonIcon(icon, { api: useV2 ? 'v2' : 'v1', position: iconPosition, size: BUTTON_ICON_SIZE[size], registry }) : {};
  setProps(button, { size, ...props, ...slot });
  if (onClick) onDga(button, 'onClick', onClick);
  return button;
}

/** Create a real <dga-dropdown>. onChange is a prop callback in core 0.0.52 (not a DOM event). */
export function createDgaDropdown(ownerDocument, { onChange, ...props } = {}) {
  const dropdown = ownerDocument.createElement('dga-dropdown');
  setProps(dropdown, { ...props, ...(onChange ? { onChange } : {}) });
  return dropdown;
}

export { setProps, onDga };
import { enhanceDropdownA11y, whenDgaReady } from '../core/dropdown-a11y.js';
export { enhanceDropdownA11y, whenDgaReady };

/** createDgaDropdown + the OPT-IN a11y layer once the element is ready (returns the handle promise). */
export function createAccessibleDgaDropdown(ownerDocument, { a11y = {}, ...props } = {}) {
  const dropdown = createDgaDropdown(ownerDocument, props);
  dropdown.dgaA11y = whenDgaReady(dropdown).then(() => enhanceDropdownA11y(dropdown, a11y));   // waits until the element is appended + hydrated
  return dropdown;
}

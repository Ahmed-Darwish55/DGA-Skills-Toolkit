// Guard against invented props: validate props against the API extracted from the INSTALLED @platformscode/core
// version (registry/packages/platformscode-core@<version>.json, produced by tools/extract_package_api.py).
const GENERIC = new Set(['key', 'ref', 'className', 'class', 'style', 'id', 'slot', 'hidden', 'title', 'dir', 'lang', 'tabIndex', 'role']);
const SLOTLESS = new Set(['DgaButton', 'DgaButtonV2', 'DgaDropdown']); // verified: children are not rendered (baseline F02)

const toName = (componentOrTag) => (componentOrTag.startsWith('dga-')
  ? componentOrTag.replace(/(^|-)([a-z0-9])/g, (_, __, firstCharacter) => firstCharacter.toUpperCase())
  : componentOrTag);

/**
 * @returns {{component:string, version:string, ok:boolean, unknown:string[], warnings:string[]}}
 */
export function validateProps(api, componentOrTag, props) {
  const name = toName(componentOrTag);
  const component = api && api.components && api.components[name];
  if (!component) return { component: name, version: api && api.version, ok: false, unknown: Object.keys(props), warnings: [`${name} does not exist in ${api && api.package}@${api && api.version}`] };
  const allowed = new Set([...Object.keys(component.props), ...Object.keys(component.events)]);
  const unknown = []; const warnings = [];
  for (const propName of Object.keys(props)) {
    if (allowed.has(propName) || GENERIC.has(propName) || propName.startsWith('data-') || propName.startsWith('aria-')) continue;
    if (propName === 'children') { if (SLOTLESS.has(name)) warnings.push(`${name} has no <slot>: children are ignored — use label`); continue; }
    unknown.push(propName);
  }
  return { component: name, version: api.version, ok: unknown.length === 0, unknown, warnings };
}

/** Throwing variant for dev builds/tests. */
export function assertProps(api, componentOrTag, props) {
  const result = validateProps(api, componentOrTag, props);
  if (!result.ok) throw new Error(`[dga-skills] ${result.component}@${result.version}: unknown props ${result.unknown.join(', ')} (not in the installed package API)`);
  return result;
}

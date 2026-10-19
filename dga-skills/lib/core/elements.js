// Custom-element and DOM helpers for framework-agnostic use (vanilla, Angular, ArcGIS ExB).
/** Call each defineCustomElement exported by '@platformscode/core/components/<tag>.js'. Idempotent. */
export function defineDgaElements(defines) {
  const definedTags = [];
  for (const [tagName, defineElement] of Object.entries(defines)) {
    if (typeof customElements !== 'undefined' && customElements.get(tagName)) { definedTags.push(tagName); continue; }
    defineElement(); definedTags.push(tagName);
  }
  return definedTags;
}
/** Set object/array/boolean props as DOM properties (attributes cannot carry objects such as leadIconProps). */
export function setProps(element, properties) {
  for (const [propertyName, propertyValue] of Object.entries(properties)) element[propertyName] = propertyValue;
  return element;
}
/** Stencil events of DGA components are emitted with the event name "onClick" etc. (React prop onOnClick). */
export function onDga(element, eventName, handler) {
  element.addEventListener(eventName, handler);
  return () => element.removeEventListener(eventName, handler);
}

const ATTRIBUTE_NAMES = new Set(['id', 'href', 'role', 'tabindex', 'dir', 'src', 'alt', 'slot', 'type', 'title', 'for', 'name']);
/**
 * Create an element in one call — the single DOM builder of the vanilla patterns and templates.
 * `attributes`: `class`, `text`, data-*, aria-* and common attributes are set as attributes; anything else as a DOM property.
 */
export function buildElement(targetDocument, tagName, attributes = {}, children = []) {
  const element = targetDocument.createElement(tagName);
  for (const [attributeName, attributeValue] of Object.entries(attributes)) {
    if (attributeValue == null) continue;
    if (attributeName === 'class') element.className = attributeValue;
    else if (attributeName === 'text') element.textContent = attributeValue;
    else if (attributeName.startsWith('data-') || attributeName.startsWith('aria-') || ATTRIBUTE_NAMES.has(attributeName)) element.setAttribute(attributeName, attributeValue);
    else element[attributeName] = attributeValue;
  }
  for (const child of children) if (child) element.append(child);
  return element;
}
/** Create a DGA custom element and set its props as DOM properties. */
export const buildDgaElement = (targetDocument, tagName, properties = {}) => setProps(targetDocument.createElement(tagName), properties);

/**
 * Builders bound to one document — the vocabulary of every DOM view layer (vanilla patterns and templates, Angular, ExB):
 *   node(tagName, attributes, children) · dgaNode(tagName, properties) · iconNode(name, size) (decorative <dga-icon>).
 */
export function documentBuilders(targetDocument) {
  const node = (tagName, attributes, children) => buildElement(targetDocument, tagName, attributes, children);
  const dgaNode = (tagName, properties) => buildDgaElement(targetDocument, tagName, properties);
  const iconNode = (name, size = 24) => {
    const icon = dgaNode('dga-icon', { name, variant: 'stroke', size });
    icon.setAttribute('aria-hidden', 'true');
    return icon;
  };
  return { node, dgaNode, iconNode };
}

/**
 * Extract CSS custom properties declared on :root / :host / html in a stylesheet (e.g. @platformscode/core core.css),
 * so a host that must not leak global CSS (ArcGIS Experience Builder widgets) can apply DGA tokens to its own root only.
 */
export function extractRootCssVariables(cssText) {
  const variables = {};
  const isRootSelector = (selectorText) => selectorText.split(',').some((selector) => /^\s*(:root|:host|html)\s*$/.test(selector));
  const ruleBlockPattern = /([^{}]*)\{([^{}]*)\}/g;       // innermost rule blocks, including those nested in @layer / @media
  let ruleMatch;
  while ((ruleMatch = ruleBlockPattern.exec(cssText))) {
    if (!isRootSelector(ruleMatch[1].replace(/^[\s;]*/, ''))) continue;
    for (const declaration of ruleMatch[2].split(';')) {
      const separatorIndex = declaration.indexOf(':');
      if (separatorIndex < 0) continue;
      const propertyName = declaration.slice(0, separatorIndex).trim(); const propertyValue = declaration.slice(separatorIndex + 1).trim();
      if (propertyName.startsWith('--') && propertyValue) variables[propertyName] = propertyValue;
    }
  }
  return variables;
}
/** Apply variables to one element (scoped tokens). Returns the number applied. */
export function applyCssVariables(element, variables) {
  let appliedCount = 0;
  for (const [propertyName, propertyValue] of Object.entries(variables)) { element.style.setProperty(propertyName, propertyValue); appliedCount++; }
  return appliedCount;
}

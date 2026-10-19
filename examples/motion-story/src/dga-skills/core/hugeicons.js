// Convert Hugeicons Free icon data (array of [tag, attributes]) to an SVG string / data URL that <dga-icon> can render.
// Pure function, no DOM, no network.
const ATTRIBUTE_NAMES = { strokeWidth: 'stroke-width', strokeLinecap: 'stroke-linecap', strokeLinejoin: 'stroke-linejoin', fillRule: 'fill-rule', clipRule: 'clip-rule', strokeMiterlimit: 'stroke-miterlimit' };
const escapeAttribute = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function isHugeiconData(data) {
  return Array.isArray(data) && data.every((node) => Array.isArray(node) && typeof node[0] === 'string' && node[1] && typeof node[1] === 'object');
}

export function hugeiconToSvg(data, { size = 24 } = {}) {
  if (!isHugeiconData(data)) throw new TypeError('not Hugeicons icon data');
  const body = data.map(([tag, attributes]) => {
    const serialized = Object.entries(attributes).filter(([attributeName]) => attributeName !== 'key')
      .map(([attributeName, value]) => `${ATTRIBUTE_NAMES[attributeName] || attributeName.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase())}="${escapeAttribute(value)}"`).join(' ');
    return `<${tag} ${serialized}/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="gds-icon hugeicons-free">${body}</svg>`;
}

/**
 * <dga-icon> (core 0.0.52) parses ';utf8,' data URLs by feeding the RAW text to DOMParser and looking for <svg>,
 * so the SVG must NOT be URI-encoded (an encoded URL fails with "Could not parse svg"). Same format as
 * @platformscode/icons svg-data exports.
 */
export function hugeiconToDataUrl(data) {
  return 'data:image/svg+xml;utf8,' + hugeiconToSvg(data);
}

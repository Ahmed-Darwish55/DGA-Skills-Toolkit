// Icon name helpers shared by every adapter. Figma names look like "arrow-right-02" (+ Style=Stroke/Solid).
export const VARIANTS = ['stroke', 'solid', 'bulk', 'duotone', 'twotone'];
export const toCamelCase = (kebabName) => kebabName.replace(/-([a-z0-9])/g, (_, nextCharacter) => nextCharacter.toUpperCase());
export const toPascalCase = (kebabName) => { const camelName = toCamelCase(kebabName); return camelName.charAt(0).toUpperCase() + camelName.slice(1); };

/** "arrow-right-02-stroke" -> { base: "arrow-right-02", variant: "stroke" }; "arrow-right-02" -> variant default */
export function parseIconName(name, defaultVariant = 'stroke') {
  if (typeof name !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(name)) throw new TypeError(`invalid icon name: ${name}`);
  const variantMatch = name.match(new RegExp(`^(.*)-(${VARIANTS.join('|')})$`));
  return variantMatch ? { base: variantMatch[1], variant: variantMatch[2] } : { base: name, variant: defaultVariant };
}
export const platformscodeKey = (base, variant) => toCamelCase(`${base}-${variant}`);   // arrowRight02Stroke
export const hugeiconsFreeExport = (base) => `${toPascalCase(base)}Icon`;              // ArrowRight02Icon

/** Names that <dga-icon> auto-mirrors in RTL (core 0.0.52 source: arrow/chevron names). */
export const isAutoMirrored = (name) => /(^|-)(arrow|chevron)(-|$)/.test(name);

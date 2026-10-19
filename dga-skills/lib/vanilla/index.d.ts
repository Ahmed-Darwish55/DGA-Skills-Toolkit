import type { DgaSetup, RegistryOptions, IconRegistry } from '../core/index.js';
export function setupDgaWeb(o: RegistryOptions & { defines?: Record<string, () => void>; icons?: string[] }): DgaSetup & { defined: string[] };
export function createDgaButton(doc: Document, o: { v2?: boolean; icon?: string; iconPosition?: 'lead' | 'trail' | 'icon'; size?: 'lg' | 'md' | 'sm'; onClick?: (e: Event) => void; registry?: IconRegistry; [prop: string]: unknown }): HTMLElement;
export function createDgaDropdown(doc: Document, o: { onChange?: (v: string | string[]) => void; [prop: string]: unknown }): HTMLElement;
export { setProps, onDga } from '../core/index.js';

export function createAccessibleDgaDropdown(doc: Document, o?: Record<string, unknown> & { a11y?: { keyboard?: boolean; aria?: boolean; nestedDirection?: boolean } }): HTMLElement & { dgaA11y: Promise<import('../core/index.js').DropdownA11yHandle> };
export { enhanceDropdownA11y } from '../core/index.js';

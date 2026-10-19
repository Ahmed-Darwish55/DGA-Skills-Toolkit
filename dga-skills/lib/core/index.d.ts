// Type declarations for dga-skills/lib/core (plain ESM JavaScript). Used by TypeScript projects (Angular, React TS, ExB).
export type IconSource = '@platformscode/icons' | '@hugeicons/core-free-icons';
export type IconPolicy = 'primary-first' | 'primary-only' | 'fallback-first';
export interface MissingIcon { name: string; reason: string }
export interface RegisterReport { registered: { name: string; source: IconSource; key: string }[]; missing: MissingIcon[] }
export interface IconRegistry {
  register(names: string[]): RegisterReport;
  resolve(name: string): { source?: IconSource; key?: string; url?: string; base: string; variant: string; reason?: string };
  has(name: string): boolean;
  sourceOf(name: string): IconSource | null;
  report(): { registered: { name: string; source: IconSource; key: string; base: string; variant: string }[]; missing: MissingIcon[] };
}
export interface RegistryOptions {
  addIcons: (icons: Record<string, string>) => void;
  primary?: Record<string, unknown>;
  fallback?: Record<string, unknown>;
  policy?: IconPolicy;
  onMissing?: (m: MissingIcon) => void;
}
export function createIconRegistry(o: RegistryOptions): IconRegistry;
export interface IconSlotProps { variant: string; size?: number; name?: string; flipRtl?: boolean }
export function iconProps(name: string, o?: { size?: number; mirror?: 'never' | 'auto' | 'always'; withName?: boolean }): IconSlotProps;
export function buttonIcon(name: string, o?: { api?: 'v1' | 'v2'; position?: 'lead' | 'trail' | 'icon'; size?: number; mirror?: 'never' | 'auto' | 'always'; registry?: IconRegistry; onMissing?: (m: MissingIcon) => void }): Record<string, unknown>;
export const BUTTON_ICON_SIZE: Readonly<{ lg: 24; md: 20; sm: 16 }>;
export function parseIconName(name: string, defaultVariant?: string): { base: string; variant: string };
export function platformscodeKey(base: string, variant: string): string;
export function hugeiconsFreeExport(base: string): string;
export function isAutoMirrored(name: string): boolean;
export function toCamelCase(kebabName: string): string;
export function toPascalCase(kebabName: string): string;
export function hugeiconToSvg(data: unknown, o?: { size?: number }): string;
export function hugeiconToDataUrl(data: unknown): string;
export function isHugeiconData(data: unknown): boolean;
export function validateIconData(url: unknown): { ok: boolean; reason?: string };
export function auditRenderedIcons(root?: Document | ShadowRoot | Element | null): { checked: number; empty: Array<{ name: string | null; host: string | null }> };
export const DROPDOWN_A11Y_SCOPE: Readonly<{ package: string; versions: string[]; anatomy: string[] }>;
export interface DropdownA11yHandle { applied: boolean; reason?: string; scope?: typeof DROPDOWN_A11Y_SCOPE; destroy(): void; state(): { applied?: boolean; open?: boolean; expanded?: string | null; haspopup?: string | null; options?: number; dir?: string | null } }
/** OPT-IN accessibility compatibility layer for <dga-dropdown> (core 0.0.52 anatomy; self-disables otherwise). */
export function whenDgaReady<T extends Element>(el: T, timeoutMs?: number): Promise<T>;
export function enhanceDropdownA11y(host: HTMLElement, o?: { keyboard?: boolean; aria?: boolean; nestedDirection?: boolean }): DropdownA11yHandle;
export type Dir = 'rtl' | 'ltr';
export function getDirection(el?: Element | null): Dir;
export function isRtl(el?: Element | null): boolean;
export function observeDirection(el: Element | null | undefined, cb: (d: Dir) => void): () => void;
export function setDocumentLocale(language: string, targetDocument?: Document): Dir;
export function pickByDirection<T>(direction: Dir | string, arabicText: T, englishText: T): T;
export function prefersReducedMotion(win?: Window): boolean;
export function onReducedMotionChange(cb: (reduced: boolean) => void, win?: Window): () => void;
export function motionDuration(ms: number, reduced?: boolean): number;
export interface PackageApi { package: string; version: string; components: Record<string, { tag: string; props: Record<string, unknown>; events: Record<string, string> }> }
export function validateProps(api: PackageApi, componentOrTag: string, props: Record<string, unknown>): { component: string; version: string; ok: boolean; unknown: string[]; warnings: string[] };
export function assertProps(api: PackageApi, componentOrTag: string, props: Record<string, unknown>): ReturnType<typeof validateProps>;
export function requireAccessibleName(o: { iconOnly?: boolean; label?: string }, componentName?: string): true;
export function defineDgaElements(defines: Record<string, () => void>): string[];
export function setProps<T extends Element>(el: T, props: Record<string, unknown>): T;
export function onDga(el: Element, eventName: string, handler: (e: Event) => void): () => void;
export interface DgaSetup {
  registry: IconRegistry; report: RegisterReport; direction(): Dir; observeDirection(cb: (d: Dir) => void): () => void;
  reducedMotion(): boolean; onReducedMotionChange: typeof onReducedMotionChange;
}
export function setupDga(o: RegistryOptions & { icons?: string[]; root?: Element }): DgaSetup;
export function extractRootCssVariables(cssText: string): Record<string, string>;
export function buildElement(targetDocument: Document, tagName: string, attributes?: Record<string, unknown>, children?: Array<Node | string | null | undefined | false>): HTMLElement;
export function buildDgaElement(targetDocument: Document, tagName: string, properties?: Record<string, unknown>): HTMLElement;
export function documentBuilders(targetDocument: Document): { node: (tagName: string, attributes?: Record<string, unknown>, children?: Array<Node | string | null | undefined | false>) => HTMLElement; dgaNode: (tagName: string, properties?: Record<string, unknown>) => HTMLElement; iconNode: (name: string, size?: number) => HTMLElement };
export function applyCssVariables(el: HTMLElement, vars: Record<string, string>): number;

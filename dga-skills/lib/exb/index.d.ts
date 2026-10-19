import type { DgaSetup, RegistryOptions, Dir } from '../core/index.js';
export * from '../core/index.js';
export function DgaElement(p: { tag: string; props?: Record<string, unknown>; events?: Record<string, (e: Event) => void>; [attr: string]: unknown }): any;
export function useDgaWidget(rootRef: { current: HTMLElement | null }, o: RegistryOptions & {
  defines?: Record<string, () => void>; icons?: string[]; cssVars?: Record<string, string>; coreCss?: string;
}): DgaSetup & { defined: string[]; dir: Dir; reduced: boolean };
import type { SiteConfig } from '../site/site-config.js';
export interface SiteChromeOptions {
  part: 'header' | 'footer'; siteConfig: SiteConfig; mode?: 'dga-exact' | 'dga-enhanced' | 'dga-creative';
  activeRoute?: string; onNavigate?: (route: string) => void; feedback?: boolean; onFeedback?: (isUseful: boolean) => void;
  onSearch?: () => void; onLanguage?: () => void; onSignIn?: () => void;
}
/** Render the shared site header or footer (from the site configuration) into a widget host. Returns an unmount function. */
export function mountSiteChrome(hostElement: HTMLElement, options: SiteChromeOptions): () => void;
/** React hook for an ExB widget: mounts the shared site header or footer into `rootRef`. */
export function useSiteChromeWidget(rootRef: { current: HTMLElement | null }, options: SiteChromeOptions): void;

import type { SiteConfig } from '../../site/site-config.js';
export type DesignMode = 'dga-exact' | 'dga-enhanced' | 'dga-creative';
/** Page content (sample: templates/content.js). Header, navigation and footer are NOT page content: they come from `siteConfig`. */
export type TemplateContent = Record<string, unknown>;
export interface TemplateOptions {
  dir?: 'rtl' | 'ltr';
  mode?: DesignMode;
  content?: TemplateContent;
  /** The site configuration (createSiteConfig); defaults to the sample content's site. */
  siteConfig?: SiteConfig;
  /** Route of the current page (marks the active menu item). */
  activeRoute?: string;
  onNavigate?: (route: string) => void;
  media?: { src: string; alt?: string; licence?: string };
}
export function home(ownerDocument: Document, options?: TemplateOptions): HTMLElement;
export function faq(ownerDocument: Document, options?: TemplateOptions): HTMLElement;
export function notFound(ownerDocument: Document, options?: TemplateOptions): HTMLElement;
export function service(ownerDocument: Document, options?: TemplateOptions): HTMLElement;
export function services(ownerDocument: Document, options?: TemplateOptions & { pageSize?: number }): HTMLElement;
export function formPattern(ownerDocument: Document, options: Record<string, unknown>): HTMLFormElement;

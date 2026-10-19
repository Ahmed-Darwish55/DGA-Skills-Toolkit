// Type declarations for lib/patterns/vanilla/index.js (DOM builders over the real @platformscode/core custom elements).
import type { SiteConfig } from '../../site/site-config.js';
export type DesignMode = 'dga-exact' | 'dga-enhanced' | 'dga-creative';
type Options = Record<string, unknown>;
export interface HeaderHandlers { onSearch?: () => void; onLanguage?: () => void; onSignIn?: () => void }
/** Shared site header: everything visual comes from `siteConfig`; a page passes its route and handlers only. */
export function siteHeader(ownerDocument: Document, options: { siteConfig: SiteConfig; mode?: DesignMode; activeRoute?: string; onNavigate?: (route: string) => void } & HeaderHandlers): HTMLElement;
/** Shared site footer: variant, links and copyright come from `siteConfig`; a page decides only on the feedback question. */
export function siteFooter(ownerDocument: Document, options: { siteConfig: SiteConfig; mode?: DesignMode; feedback?: boolean; onFeedback?: (isUseful: boolean) => void }): HTMLElement;
export function pageShell(ownerDocument: Document, options: { siteConfig: SiteConfig; mode?: DesignMode; activeRoute?: string; onNavigate?: (route: string) => void; headerHandlers?: HeaderHandlers; feedback?: boolean; onFeedback?: (isUseful: boolean) => void; lastModifiedDate?: { date: string; time?: string }; rating?: Options; children?: Node[] }): HTMLElement;
export function defaultHeaderActions(dir: string, handlers?: HeaderHandlers, actionIds?: ReadonlyArray<'search' | 'language' | 'signIn'>): { label: string; icon: string; onClick?: () => void }[];
export function reveal<T extends Element>(ownerDocument: Document, revealedNode: T, mode?: DesignMode): T;
export function sectionHeading(ownerDocument: Document, options?: Options): HTMLElement;
export function hero(ownerDocument: Document, options?: Options): HTMLElement;
export function cardGrid(ownerDocument: Document, options?: Options): HTMLElement;
export function statsStrip(ownerDocument: Document, options?: Options): HTMLElement;
export function formPattern(ownerDocument: Document, options?: Options): HTMLFormElement;
export function serviceCard(ownerDocument: Document, options?: Options): HTMLElement;
export function serviceCarousel(ownerDocument: Document, options?: Options): HTMLElement;
export function partnersStrip(ownerDocument: Document, options?: Options): HTMLElement;
export function lastModified(ownerDocument: Document, options?: { dir?: string; date?: string; time?: string }): HTMLElement;
export function iconLink(ownerDocument: Document, options?: Options): HTMLElement;
export function serviceInfoCard(ownerDocument: Document, options?: Options): HTMLElement;
export function videoPlaceholder(ownerDocument: Document, options?: Options): HTMLElement;
export function stepsList(ownerDocument: Document, options?: Options): HTMLElement;
export function serviceTabs(ownerDocument: Document, options?: Options): HTMLElement;
export function ratingStrip(ownerDocument: Document, options?: Options): HTMLElement;
export function commentsCard(ownerDocument: Document, options?: Options): HTMLElement;
export function filterMenu(ownerDocument: Document, options?: Options): HTMLElement;

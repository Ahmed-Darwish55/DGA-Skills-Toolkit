// Type declarations for lib/site/site-config.js (plain ESM). Used by Angular, React TS and ExB projects.
export type SiteDirection = 'rtl' | 'ltr';
export type HeaderActionId = 'search' | 'language' | 'signIn';
export type FooterVariant = 'DarkGreen' | 'Light';
/** A DGA design-token reference, e.g. 'var(--colors-primary-sa-flag-600-primary)'. Raw colours are rejected. */
export type TokenReference = `var(--${string})`;
export interface BrandColors { brandStrong: TokenReference; brand: TokenReference; brandSubtle: TokenReference; accentBorder: TokenReference }
export interface SiteTheme { footerVariant: FooterVariant; showSecondNavHeader: boolean; showDigitalStamp: boolean; brandColors: BrandColors }
export interface SiteLogo { src: string; alt: string; href?: string }
export interface NavigationChild { label: string; href?: string; route?: string }
export interface NavigationItem { id: string; label: string; route: string; children?: NavigationChild[] }
export interface SecondNavItem { label: string; icon?: string }
export interface PageTool { icon: string; label: string; run?: () => void }
export interface FooterLink { name: string; target: string }
export interface FooterContent {
  groups?: { title: string; links: FooterLink[] }[];
  social?: { title: string; target: string; icon?: { name: string; variant: string } }[];
  accessibility?: { title: string; target: string; icon?: { name: string; variant: string } }[];
  legalLinks?: FooterLink[]; extraLinks?: FooterLink[]; copyright?: string; developedBy?: string;
  feedbackStats?: { percent: number; total: number };
}
export interface SiteConfigOptions {
  dir?: SiteDirection;
  identity?: { name?: string; logo?: SiteLogo; governmentLogo?: SiteLogo };
  navigationItems?: NavigationItem[];
  header?: { secondNavItems?: Array<SecondNavItem | string>; secondNavActions?: PageTool[] | false; actions?: HeaderActionId[] };
  footer?: FooterContent;
  theme?: Partial<Omit<SiteTheme, 'brandColors'>> & { brandColors?: Partial<BrandColors> };
}
export interface SiteConfig {
  readonly dir: SiteDirection;
  readonly identity: { readonly name: string; readonly logo: SiteLogo; readonly governmentLogo: SiteLogo | null };
  readonly navigationItems: ReadonlyArray<NavigationItem & { children: NavigationChild[] }>;
  readonly header: { readonly secondNavItems: ReadonlyArray<SecondNavItem | string>; readonly secondNavActions?: PageTool[] | false; readonly actions: ReadonlyArray<HeaderActionId> };
  readonly footer: Readonly<FooterContent>;
  readonly theme: Readonly<SiteTheme>;
}
export interface ResolvedNavigationItem { id: string; label: string; active: boolean; onClick?: () => void; children: { label: string; href: string; onClick?: () => void }[] }
export interface NavigationOptions { activeRoute?: string; onNavigate?: (route: string) => void }
export const HEADER_ACTION_IDS: ReadonlyArray<HeaderActionId>;
export const FOOTER_VARIANTS: Readonly<{ DARK_GREEN: 'DarkGreen'; LIGHT: 'Light' }>;
export const SITE_THEME_CSS_VARIABLES: Readonly<Record<keyof BrandColors, string>>;
export const DEFAULT_BRAND_COLORS: Readonly<BrandColors>;
export const DEFAULT_SITE_THEME: Readonly<SiteTheme>;
export function resolveSiteTheme(theme?: SiteConfigOptions['theme']): SiteTheme;
export function getDefaultLogo(dir: SiteDirection): SiteLogo;
export function createSiteConfig(options?: SiteConfigOptions): SiteConfig;
export function resolveNavigationItems(siteConfig: SiteConfig, options?: NavigationOptions): ResolvedNavigationItem[];
export function resolveHeaderProps(siteConfig: SiteConfig, options?: NavigationOptions): { dir: SiteDirection; logo: SiteLogo; gov?: SiteLogo; links: ResolvedNavigationItem[]; stamp: boolean; actions: ReadonlyArray<HeaderActionId>; secondNav: { items: ReadonlyArray<SecondNavItem | string>; actions?: PageTool[] | false } | [] };
export function resolveFooterProps(siteConfig: SiteConfig, options?: { feedback?: boolean }): Record<string, unknown> & { dir: SiteDirection; background: FooterVariant; feedback: boolean };
export function resolveSiteThemeVariables(siteConfig: SiteConfig): Record<string, string>;
export function applySiteTheme<T extends HTMLElement>(pageElement: T, siteConfig: SiteConfig): T;

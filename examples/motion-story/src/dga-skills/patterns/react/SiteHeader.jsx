import React from 'react';
import { DgaDigitalSignature, DgaSecondNavHeader, DgaSecondNavHeaderContent, DgaSecondNavHeaderItem, DgaSecondNavHeaderActions, DgaIcon, DgaNavHeader, DgaNavHeaderMain, DgaNavHeaderLogos, DgaNavHeaderMenu, DgaNavHeaderLink, DgaNavHeaderActions, DgaNavHeaderSubMenu, DgaNavHeaderSubMenuColumn, DgaNavHeaderSubMenuLink } from 'platformscode-new-react';
import { useMode } from './mode.jsx';
import { useRequiredSiteConfig, useSiteChrome } from './site.jsx';
import { DgaIconButton } from '../../react/index.js';
import { defaultPageTools, restorePageTools } from '../../core/page-tools.js';
import { patternLabels, defaultHeaderActions, warnIgnoredDesignOptions } from '../shared/index.js';
/**
 * Shared site header — real DGA components only: Digital Stamp (dga-digital-signature), Second Nav Header, Nav Header (logos / menu / actions).
 * Everything that shapes it (logo, navigation order, sub-menus, Second Nav Header, stamp) comes from the site configuration
 * (<SiteProvider>); a page passes only its route and the action handlers. Figma: ui-shell-nav-header.md, ui-shell-second-level-nav-header.md.
 * Modes: Exact = static; Enhanced/Creative = sticky header (`[AHMED HOUSE]` composition only, chrome unchanged).
 * Icons required in the registry: arrow-up-02 / arrow-down-01 (Digital Stamp chevron), search-01, user, translation.
 */
export { defaultHeaderActions };

/** Figma "Second Nav Header / Style=Gray" (40 high, neutral-100, top divider): items (icon 24 + Text md) · page tools (Subtle Medium icon-only). */
function SecondNavHeader({ dir, secondNav }) {
  const secondNavItems = secondNav.items || secondNav;
  return (
    <DgaSecondNavHeader variant="gray">
      <DgaSecondNavHeaderContent slot="content">{secondNavItems.map((secondNavItem) => {
        const itemOptions = typeof secondNavItem === 'string' ? { label: secondNavItem } : secondNavItem;
        return <DgaSecondNavHeaderItem key={itemOptions.label} label={itemOptions.label}>{itemOptions.icon && <DgaIcon slot="icon" name={itemOptions.icon} variant="stroke" size={24} aria-hidden="true" />}</DgaSecondNavHeaderItem>;
      })}</DgaSecondNavHeaderContent>
      {secondNav.actions !== false && (
        <DgaSecondNavHeaderActions slot="actions">{(Array.isArray(secondNav.actions) ? secondNav.actions : defaultPageTools(dir === 'rtl')).map((pageTool) => (
          <DgaIconButton key={pageTool.icon} v2 icon={pageTool.icon} label={pageTool.label} title={pageTool.label} variant="subtle" size="md" onOnClick={() => pageTool.run?.()} />
        ))}</DgaSecondNavHeaderActions>
      )}
    </DgaSecondNavHeader>
  );
}

/** Header Menu Item (Figma: tab + chevron): an item with `children` gets icon arrow-down-01 + the DGA sub-menu; no children → no chevron. */
function NavigationLink({ navigationItem }) {
  const hasSubMenu = navigationItem.children?.length > 0;
  return (
    <DgaNavHeaderLink label={navigationItem.label} active={!!navigationItem.active} onLinkClicked={navigationItem.onClick} icon={hasSubMenu ? 'arrow-down-01' : undefined}>
      {hasSubMenu && (
        <DgaNavHeaderSubMenu slot="dga-nav-header-sub-menu"><DgaNavHeaderSubMenuColumn label={navigationItem.label}>
          {navigationItem.children.map((childItem) => <DgaNavHeaderSubMenuLink key={childItem.label} label={childItem.label} link={childItem.href || '#'} />)}
        </DgaNavHeaderSubMenuColumn></DgaNavHeaderSubMenu>
      )}
    </DgaNavHeaderLink>
  );
}

export function SiteHeader({ pageRoute, onSearch, onLanguage, onSignIn, ...ignoredProps }) {
  warnIgnoredDesignOptions('SiteHeader', ignoredProps);
  const mode = useMode();
  const { headerProps } = useSiteChrome(useRequiredSiteConfig('SiteHeader'), { pageRoute });
  const { dir, logo, gov, links, stamp, secondNav, actions } = headerProps;
  React.useEffect(() => { restorePageTools(); }, []);
  const isSticky = mode !== 'dga-exact';
  // <div>, not <header>: dga-nav-header already renders the <header> banner landmark inside its shadow root (axe landmark-no-duplicate-banner)
  return (
    <div className={`ah-header ${isSticky ? 'ah-header--sticky' : ''}`} data-pattern="site-header" data-mode={mode}>
      <a className="ah-skip" href="#main">{patternLabels(dir).skipToContent}</a>
      {stamp && <DgaDigitalSignature language={dir === 'rtl' ? 'ar' : 'en'} extension=".gov.sa" />}
      {(secondNav.items || secondNav).length > 0 && <SecondNavHeader dir={dir} secondNav={secondNav} />}
      <DgaNavHeader divider>
        <DgaNavHeaderMain>
          <DgaNavHeaderLogos logoSrc={logo?.src} logoAlt={logo?.alt || ''} logoLink={logo?.href || '#'} govSrc={gov?.src} govAlt={gov?.alt || ''} govLink={gov?.href || '#'} />
          <DgaNavHeaderMenu>{links.map((navigationItem) => <NavigationLink key={navigationItem.id || navigationItem.label} navigationItem={navigationItem} />)}</DgaNavHeaderMenu>
          {/* Figma "Header Action" (Selected=False): leading icon 24 + Text md/Medium, text-default, NO fill — DgaNavHeaderLink with icon */}
          <DgaNavHeaderActions>{defaultHeaderActions(dir, { onSearch, onLanguage, onSignIn }, actions).map((headerAction) => (
            <DgaNavHeaderLink key={headerAction.icon} label={headerAction.label} icon={headerAction.icon} onLinkClicked={headerAction.onClick} />
          ))}</DgaNavHeaderActions>
        </DgaNavHeaderMain>
      </DgaNavHeader>
    </div>
  );
}

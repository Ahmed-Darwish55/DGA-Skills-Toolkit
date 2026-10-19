// Site-level header / footer for Angular — the same site configuration (lib/site/site-config.js) and the same shared chrome
// builders (lib/patterns/vanilla siteHeader / siteFooter) as React, vanilla and ArcGIS ExB. Angular owns the host elements and the
// projected page content; the header, the navigation order, the footer variant and the theme come ONLY from the site configuration:
//
//   bootstrapApplication(App, { providers: [provideDgaSite(createSiteConfig({ dir: 'rtl', identity, navigationItems, header, footer, theme }))] });
//   <dga-skills-site-shell activeRoute="services" (navigate)="router.navigate([$event])"> …page content… </dga-skills-site-shell>
//
// A page chooses only its route, whether the feedback question shows, and the last-modified date — never the header or footer design.
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Injectable, InjectionToken, OnDestroy, Provider, ViewChild, inject, input, output } from '@angular/core';
import type { SiteConfig } from '../site/site-config.js';
import { applySiteTheme } from '../site/site-config.js';
import { siteHeader, siteFooter, lastModified } from '../patterns/vanilla/index.js';
import type { DesignMode } from '../patterns/vanilla/index.js';

export const DGA_SITE_CONFIG = new InjectionToken<SiteConfig>('DGA_SITE_CONFIG');

/** Register the site configuration once for the whole application. */
export function provideDgaSite(siteConfig: SiteConfig): Provider {
  return { provide: DGA_SITE_CONFIG, useValue: siteConfig };
}

/** The application's site configuration (throws a clear error when provideDgaSite() is missing). */
@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  private readonly providedSiteConfig = inject(DGA_SITE_CONFIG, { optional: true });
  get siteConfig(): SiteConfig {
    if (!this.providedSiteConfig) throw new Error('[dga-skills] SiteConfigService: add provideDgaSite(createSiteConfig({ … })) to the application providers (patterns/site-config.md)');
    return this.providedSiteConfig;
  }
}

@Component({
  selector: 'dga-skills-site-shell',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<div class="ah-page" #pageRoot>
    <div #headerHost></div>
    <main id="main" tabindex="-1"><ng-content></ng-content></main>
    <div #lastModifiedHost></div>
    <div #footerHost></div>
  </div>`,
})
export class SiteShellComponent implements AfterViewInit, OnDestroy {
  readonly activeRoute = input<string | undefined>(undefined);
  readonly mode = input<DesignMode>('dga-exact');
  readonly feedback = input<boolean>(true);
  readonly lastModifiedDate = input<{ date: string; time?: string } | undefined>(undefined);
  readonly navigate = output<string>();
  readonly feedbackAnswer = output<boolean>();
  readonly search = output<void>();
  readonly languageSwitch = output<void>();
  readonly signIn = output<void>();

  @ViewChild('pageRoot', { static: true }) private readonly pageRoot!: ElementRef<HTMLElement>;
  @ViewChild('headerHost', { static: true }) private readonly headerHost!: ElementRef<HTMLElement>;
  @ViewChild('lastModifiedHost', { static: true }) private readonly lastModifiedHost!: ElementRef<HTMLElement>;
  @ViewChild('footerHost', { static: true }) private readonly footerHost!: ElementRef<HTMLElement>;
  private readonly siteConfigService = inject(SiteConfigService);
  private renderedNodes: Element[] = [];

  ngAfterViewInit(): void {
    const siteConfig = this.siteConfigService.siteConfig;
    const pageElement = applySiteTheme(this.pageRoot.nativeElement, siteConfig);
    pageElement.setAttribute('dir', siteConfig.dir);
    const header = siteHeader(document, {
      siteConfig, mode: this.mode(), activeRoute: this.activeRoute(), onNavigate: (route: string) => this.navigate.emit(route),
      onSearch: () => this.search.emit(), onLanguage: () => this.languageSwitch.emit(), onSignIn: () => this.signIn.emit(),
    });
    const footer = siteFooter(document, { siteConfig, mode: this.mode(), feedback: this.feedback(), onFeedback: (isUseful: boolean) => this.feedbackAnswer.emit(isUseful) });
    this.headerHost.nativeElement.replaceWith(header);
    this.footerHost.nativeElement.replaceWith(footer);
    this.renderedNodes = [header, footer];
    const modifiedDate = this.lastModifiedDate();
    if (modifiedDate) {
      const lastModifiedStrip = lastModified(document, { dir: siteConfig.dir, ...modifiedDate });
      this.lastModifiedHost.nativeElement.replaceWith(lastModifiedStrip);
      this.renderedNodes.push(lastModifiedStrip);
    } else this.lastModifiedHost.nativeElement.remove();
  }

  ngOnDestroy(): void {
    this.renderedNodes.forEach((renderedNode) => renderedNode.remove());
    this.renderedNodes = [];
  }
}

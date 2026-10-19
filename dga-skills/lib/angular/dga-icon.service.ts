import { Injectable, inject } from '@angular/core';
import { setupDgaWeb } from '../vanilla/index.js';
import { buttonIcon, BUTTON_ICON_SIZE } from '../core/index.js';
import type { DgaSetup, MissingIcon, RegisterReport } from '../core/index.js';
import { AHMED_DGA_CONFIG } from './tokens';

/** Central icon registration + custom-element definition for Angular (runs once via provideDgaSkills). */
@Injectable({ providedIn: 'root' })
export class DgaIconService {
  private readonly config = inject(AHMED_DGA_CONFIG);
  private dga?: DgaSetup & { defined: string[] };
  readonly missing: MissingIcon[] = [];

  init(): void {
    if (this.dga) return;
    this.dga = setupDgaWeb({ ...this.config, onMissing: (missingIcon) => { this.missing.push(missingIcon); this.config.onMissing?.(missingIcon); } });
  }
  get report(): RegisterReport { this.init(); return this.dga!.report; }
  get defined(): string[] { this.init(); return this.dga!.defined; }
  register(names: string[]): RegisterReport { this.init(); return this.dga!.registry.register(names); }
  sourceOf(name: string) { this.init(); return this.dga!.registry.sourceOf(name); }
  /** Props for a DgaButton/DgaButtonV2 icon slot; {} when the icon is not registered (no empty slot). */
  buttonIcon(name: string, options: { api?: 'v1' | 'v2'; position?: 'lead' | 'trail' | 'icon'; size?: 'lg' | 'md' | 'sm' } = {}) {
    this.init();
    return buttonIcon(name, { api: options.api, position: options.position, size: BUTTON_ICON_SIZE[options.size ?? 'lg'], registry: this.dga!.registry,
      onMissing: (missingIcon) => this.missing.push(missingIcon) }) as Record<string, any>;
  }
}

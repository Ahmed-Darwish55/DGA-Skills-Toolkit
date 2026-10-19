import { InjectionToken } from '@angular/core';
import type { RegistryOptions } from '../core/index.js';

export interface DgaSkillsConfig extends RegistryOptions {
  /** defineCustomElement functions from '@platformscode/core/components/<tag>.js', keyed by tag */
  defines: Record<string, () => void>;
  /** icon names to register at startup (Figma names, e.g. 'arrow-right-02', 'home-05-solid') */
  icons?: string[];
}
export const AHMED_DGA_CONFIG = new InjectionToken<DgaSkillsConfig>('AHMED_DGA_CONFIG');

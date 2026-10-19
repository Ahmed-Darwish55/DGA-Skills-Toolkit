import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { AHMED_DGA_CONFIG, DgaSkillsConfig } from './tokens';
import { DgaIconService } from './dga-icon.service';

/** app.config.ts: providers: [provideDgaSkills({ defines, addIcons, primary, fallback, icons })] (Angular ≥ 19). */
export function provideDgaSkills(config: DgaSkillsConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: AHMED_DGA_CONFIG, useValue: config },
    provideAppInitializer(() => inject(DgaIconService).init()),
  ]);
}

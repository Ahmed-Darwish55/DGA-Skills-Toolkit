import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, input } from '@angular/core';
import { requireAccessibleName } from '../core/index.js';
import { DgaIconService } from './dga-icon.service';

/**
 * Icon-only DGA button with a REQUIRED translated label (package default "Button with icon" — baseline OI-14).
 * Renders the real <dga-button>/<dga-button-v2>; no restyling.
 */
@Component({
  selector: 'dga-skills-icon-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (v2()) {
      <dga-button-v2 [variant]="variant()" [size]="size()" [label]="label()" [iconOnly]="true" [leadIcon]="true" [leadIconProps]="slot()['leadIconProps']" [disabled]="disabled()"></dga-button-v2>
    } @else {
      <dga-button [variant]="variant()" [size]="size()" [label]="label()" [iconOnly]="true" [iconType]="slot()['iconType']" [iconProps]="slot()['iconProps']" [disabled]="disabled()"></dga-button>
    }`,
})
export class DgaIconButtonComponent {
  private readonly icons = inject(DgaIconService);
  readonly icon = input.required<string>();
  readonly label = input.required<string>();
  readonly v2 = input(false);
  readonly variant = input('primary-brand');
  readonly size = input<'lg' | 'md' | 'sm'>('lg');
  readonly disabled = input(false);
  readonly slot = computed(() => {
    requireAccessibleName({ iconOnly: true, label: this.label() }, this.v2() ? 'DgaButtonV2' : 'DgaButton');
    return this.icons.buttonIcon(this.icon(), { api: this.v2() ? 'v2' : 'v1', position: 'icon', size: this.size() });
  });
}

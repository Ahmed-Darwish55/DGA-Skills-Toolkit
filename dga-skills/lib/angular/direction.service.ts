import { Injectable, OnDestroy, signal } from '@angular/core';
import { getDirection, observeDirection } from '../core/index.js';
import type { Dir } from '../core/index.js';

/** Document direction as a signal; updates when any dir attribute changes. Use getDirection(element) for local scopes. */
@Injectable({ providedIn: 'root' })
export class DirectionService implements OnDestroy {
  readonly dir = signal<Dir>(typeof document !== 'undefined' ? getDirection(document.documentElement) : 'rtl');
  private readonly stop = typeof document !== 'undefined' ? observeDirection(document.documentElement, (direction) => this.dir.set(direction)) : () => {};
  of(element: Element): Dir { return getDirection(element); }
  ngOnDestroy(): void { this.stop(); }
}

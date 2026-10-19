import { Injectable, OnDestroy, signal } from '@angular/core';
import { prefersReducedMotion, onReducedMotionChange, motionDuration } from '../core/index.js';

@Injectable({ providedIn: 'root' })
export class ReducedMotionService implements OnDestroy {
  readonly reduced = signal<boolean>(typeof window !== 'undefined' ? prefersReducedMotion(window) : false);
  private readonly stop = typeof window !== 'undefined' ? onReducedMotionChange((isReduced) => this.reduced.set(isReduced), window) : () => {};
  duration(ms: number): number { return motionDuration(ms, this.reduced()); }
  ngOnDestroy(): void { this.stop(); }
}

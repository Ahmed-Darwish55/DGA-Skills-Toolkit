import React, { createContext, useContext, useState } from 'react';
import { setupDga } from '../core/setup.js';

const DgaContext = createContext(null);

/**
 * Registers icons ONCE, synchronously, before children render (so the first render already has icons).
 * Pass the real packages: addIcons from '@platformscode/core/components', primary = '@platformscode/icons' exports
 * (or a subset), fallback = '@hugeicons/core-free-icons' exports (or a subset).
 */
export function DgaProvider({ addIcons, primary, fallback, icons = [], policy, onMissing, children }) {
  const [dga] = useState(() => setupDga({ addIcons, primary, fallback, icons, policy, onMissing }));
  return <DgaContext.Provider value={dga}>{children}</DgaContext.Provider>;
}

export function useDga() {
  const dga = useContext(DgaContext);
  if (!dga) throw new Error('[dga-skills] useDga must be used inside <DgaProvider>');
  return dga;
}

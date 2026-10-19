import React, { createContext, useContext } from 'react';
export const MODES = ['dga-exact', 'dga-enhanced', 'dga-creative'];
const ModeContext = createContext('dga-exact');
/** Design mode for the subtree (from .claude/dga-skills.json → designMode). */
export function ModeProvider({ mode = 'dga-exact', children }) {
  if (!MODES.includes(mode)) throw new Error(`[dga-skills] unknown design mode ${mode}`);
  return <ModeContext.Provider value={mode}>{children}</ModeContext.Provider>;
}
export const useMode = () => useContext(ModeContext);

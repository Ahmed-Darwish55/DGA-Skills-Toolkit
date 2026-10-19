// ArcGIS Experience Builder bridge. ExB ships its own React through 'jimu-core' (never load a second React, and
// never import platformscode-new-react inside a widget). React 18 JSX sets ATTRIBUTES on custom elements, so objects
// such as leadIconProps / options would be stringified — this component sets them as DOM PROPERTIES instead.
import { React } from 'jimu-core';
import { setProps } from '../core/elements.js';

export function DgaElement({ tag, props = {}, events = {}, ...attributes }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) setProps(ref.current, props); });
  React.useEffect(() => {
    const element = ref.current; if (!element) return undefined;
    const removers = Object.entries(events).map(([name, handler]) => { element.addEventListener(name, handler); return () => element.removeEventListener(name, handler); });
    return () => removers.forEach((remove) => remove());
  }, [events]);
  return React.createElement(tag, { ref, ...attributes });
}

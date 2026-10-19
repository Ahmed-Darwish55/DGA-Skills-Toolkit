import React from 'react';
import { DgaButton, DgaButtonV2 } from 'platformscode-new-react';
import { requireAccessibleName } from '../core/a11y.js';
import { buttonIcon, BUTTON_ICON_SIZE } from '../core/icons.js';
import { useDga } from './DgaProvider.jsx';

/**
 * The ONE wrapper this adapter ships, because the package has a real gap here (baseline OI-14):
 * an icon-only DGA button must carry a translated accessible name. Everything else is passed through
 * to the real DgaButton / DgaButtonV2 unchanged.
 */
export function DgaIconButton({ icon, label, v2: useV2 = false, size = 'lg', ...rest }) {
  requireAccessibleName({ iconOnly: true, label }, useV2 ? 'DgaButtonV2' : 'DgaButton');
  const { registry } = useDga();
  const slot = buttonIcon(icon, { api: useV2 ? 'v2' : 'v1', position: 'icon', size: BUTTON_ICON_SIZE[size], registry });
  const ButtonComponent = useV2 ? DgaButtonV2 : DgaButton;
  return <ButtonComponent size={size} label={label} iconOnly {...slot} {...rest} />;
}

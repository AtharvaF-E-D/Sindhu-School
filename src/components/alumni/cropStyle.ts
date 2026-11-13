import type { CSSProperties } from 'react';

export interface FigmaCropRect {
  sx: number;
  tx: number;
  sy: number;
  ty: number;
}

/**
 * Converts a Figma normalized IMAGE transform [[sx, 0, tx], [0, sy, ty]]
 * into absolute image positioning styles inside an overflow-hidden box.
 */
export function figmaCropStyle({ sx, tx, sy, ty }: FigmaCropRect): CSSProperties {
  return {
    left: `${-(tx / sx) * 100}%`,
    top: `${-(ty / sy) * 100}%`,
    width: `${(1 / sx) * 100}%`,
    height: `${(1 / sy) * 100}%`,
  };
}


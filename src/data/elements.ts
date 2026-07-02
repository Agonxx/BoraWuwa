import type { ElementInfo, ElementKey } from './types';

export const ELEMENTS: Record<ElementKey, ElementInfo> = {
  aero: { label: 'Aero', color: 'oklch(0.75 0.14 175)' },
  electro: { label: 'Electro', color: 'oklch(0.72 0.16 300)' },
  fusion: { label: 'Fusão', color: 'oklch(0.72 0.17 35)' },
  glacio: { label: 'Glacio', color: 'oklch(0.75 0.13 230)' },
  havoc: { label: 'Havoc', color: 'oklch(0.65 0.18 340)' },
  spectro: { label: 'Spectro', color: 'oklch(0.8 0.15 95)' },
};

export function withAlpha(color: string, pct: number): string {
  return color.replace(')', ` / ${pct}%)`);
}

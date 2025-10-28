export type MaterialLabel =
  | 'frêne'
  | 'chêne'
  | 'noyer'
  | 'acier'
  | 'inox'
  | 'aluminium'
  | 'plastique';

export interface Material {
  label: MaterialLabel;
  description: string;
  img: string;
}

export const CATEGORIES = ['armoire', 'étagère'];

export const COMPANIES: Record<string, MaterialLabel[]> = {
  BBois: ['noyer', 'chêne', 'frêne'],
  MetaLo: ['inox', 'aluminium'],
  pPlastique: ['plastique'],
};

export const MATERIALS: MaterialLabel[] = [
  'frêne',
  'chêne',
  'noyer',
  'inox',
  'acier',
  'aluminium',
  'plastique',
];

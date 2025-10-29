export interface Material {
  label: string;
  description: string;
  img: string;
}

export const CATEGORIES = ['Armoire', 'Étagère'];

export const COMPANIES: Record<string, string[]> = {
  BBois: ['noyer', 'chêne', 'frêne'],
  MetaLo: ['inox', 'aluminium', 'acier'],
  pPlastique: ['plastique'],
};

export const MATERIALS: Record<string, string[]> = {
  bois: ['frêne', 'chêne', 'noyer'],
  fer: ['inox', 'acier', 'aluminium'],
  plastique: ['plastique'],
};

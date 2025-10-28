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

export const MATERIALS = ['frêne', 'chêne', 'noyer', 'inox', 'acier', 'aluminium', 'plastique'];

export const MATERIALS_DETAILS: Record<string, Material> = {
  frene: {
    label: 'frêne',
    description:
      'Le frêne est un bois dur reconnu pour sa couleur claire, son fil droit et son excellent rapport résistance/poids. Il est couramment utilisé dans le mobilier et les parquets.',
    img: 'https://images.unsplash.com/photo-1591899183767-0f4e788dfcde', // exemple
  },
  chene: {
    label: 'chêne',
    description:
      'Le chêne est un bois dur et durable avec un motif de grain prononcé. Il est utilisé dans le mobilier, l’ébénisterie et les parquets pour sa résistance et son esthétisme.',
    img: 'https://images.unsplash.com/photo-1567016526900-9b9f18c3d2a2', // exemple
  },
  noyer: {
    label: 'noyer',
    description:
      'Le noyer est un bois noble apprécié pour sa couleur riche, sa texture lisse et sa facilité de travail. Il est souvent utilisé pour le mobilier haut de gamme et la décoration intérieure.',
    img: 'https://images.unsplash.com/photo-1611080628752-d7d2b0b9a2f3', // exemple
  },
  inox: {
    label: 'inox',
    description:
      "L'acier inoxydable est un alliage résistant à la corrosion, composé de fer, de chrome et d'autres éléments. Il est largement utilisé dans la construction, le mobilier et les appareils pour sa solidité et sa durabilité.",
    img: 'https://images.unsplash.com/photo-1616506793032-6f42a0ec1234', // exemple
  },
  acier: {
    label: 'acier',
    description:
      "Un acier est un alliage métallique constitué principalement de fer et de carbone. Il se distingue des fontes et des ferroalliages par sa teneur en carbone comprise entre 0,02 % et 2 % en masse. C’est essentiellement cette teneur en carbone qui confère à l'acier ses propriétés mécaniques de dureté, de résistance et d'élasticité.",
    img: 'https://images.unsplash.com/photo-1616506793032-6f42a0ec1234', // exemple
  },
  aluminium: {
    label: 'aluminium',
    description:
      "L'aluminium est un métal léger et résistant à la corrosion, utilisé dans le mobilier, le transport et la construction. Il est apprécié pour sa malléabilité et son rapport résistance/poids.",
    img: 'https://images.unsplash.com/photo-1606813908850-6e2b1fcd6d2e', // exemple
  },
  plastique: {
    label: 'plastique',
    description:
      'Les plastiques sont une large gamme de matériaux synthétiques ou semi-synthétiques composés principalement de polymères. Ils peuvent être moulés en diverses formes, offrant flexibilité, durabilité et faible coût de production.',
    img: 'https://www.emploi-plasturgie.org/sites/emploi/files/2022-01/Mati%C3%A8re-plastique.jpeg',
  },
};

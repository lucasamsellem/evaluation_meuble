import { useParams } from 'react-router-dom';
import type { FurnitureType } from './HomePage';
import normalize from '../utils/normalize';

const MATERIALS_DESCRIPTION: Record<string, string> = {
  frene:
    'Le frêne est un bois dur reconnu pour sa couleur claire, son fil droit et son excellent rapport résistance/poids. Il est couramment utilisé dans le mobilier et les parquets.',
  chene:
    'Le chêne est un bois dur et durable avec un motif de grain prononcé. Il est utilisé dans le mobilier, l’ébénisterie et les parquets pour sa résistance et son esthétisme.',
  noyer:
    'Le noyer est un bois noble apprécié pour sa couleur riche, sa texture lisse et sa facilité de travail. Il est souvent utilisé pour le mobilier haut de gamme et la décoration intérieure.',
  inox: "L'acier inoxydable est un alliage résistant à la corrosion, composé de fer, de chrome et d'autres éléments. Il est largement utilisé dans la construction, le mobilier et les appareils pour sa solidité et sa durabilité.",
  acier:
    "Un acier est un alliage métallique constitué principalement de fer et de carbone. Il se distingue des fontes et des ferroalliages par sa teneur en carbone comprise entre 0,02 % et 2 % en masse. C’est essentiellement cette teneur en carbone qui confère à l'acier ses propriétés mécaniques de dureté, de résistance et d'élasticité.",
  aluminium:
    "L'aluminium est un métal léger et résistant à la corrosion, utilisé dans le mobilier, le transport et la construction. Il est apprécié pour sa malléabilité et son rapport résistance/poids.",
  plastique:
    'Les plastiques sont une large gamme de matériaux synthétiques ou semi-synthétiques composés principalement de polymères. Ils peuvent être moulés en diverses formes, offrant flexibilité, durabilité et faible coût de production.',
};

function MaterialPage() {
  const { material } = useParams();
  if (!material) return <p>Material not found</p>;

  const furnitures: FurnitureType[] = JSON.parse(localStorage.getItem('furnitures') || '[]');

  const matchingMaterial = furnitures.find((furniture) =>
    furniture.materials.some((m) => normalize(m.name) === material)
  );

  const matchingProvider = matchingMaterial?.materials.find(
    (m) => normalize(m.name) === material
  )?.provider;

  return (
    <div className='space-y-20 text-center'>
      <h2 className='uppercase font-bold text-4xl tracking-widest'>{material}</h2>
      <p className='text-xl'>{MATERIALS_DESCRIPTION[material]}</p>
      <div className='italic'>Mon fournisseur : {matchingProvider}</div>
    </div>
  );
}

export default MaterialPage;

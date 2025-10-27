import { useParams } from 'react-router-dom';

interface Material {
  label: string;
  description: string;
}

const MATERIALS: Record<string, Material> = {
  iron: {
    label: 'Iron',
    description:
      'Iron is a metallic element with the chemical symbol Fe (from the Latin ferrum) and atomic number 26. It is one of the most abundant elements on Earth, forming much of the planet’s core and crust. In its pure form, iron is a lustrous, silvery-gray metal known for its strength, malleability, and magnetic properties',
  },
  wood: {
    label: 'Wood',
    description:
      'Le bois est un matériau naturel, durable et polyvalent, issu des troncs d’arbres. Il est apprécié pour sa chaleur, son esthétisme et sa texture unique. Chaque pièce de bois présente des veines et motifs naturels qui rendent chaque produit singulier et vivant.',
  },
};

function MaterialPage() {
  const { material } = useParams();

  if (!material) return <p>Material not found</p>;

  const selectedMaterial = MATERIALS[material];

  return (
    <div>
      <h2>{selectedMaterial.label}</h2>
      <p>{selectedMaterial.description}</p>
    </div>
  );
}

export default MaterialPage;

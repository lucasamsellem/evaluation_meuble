import { Link } from 'react-router-dom';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import slugify from '../utils/slugify';
import type { MaterialLabel } from '../pages/MaterialPage';

type FurnitureProps = {
  id: string;
  img?: string;
  name: string;
  material: MaterialLabel;
  category: 'armoire' | 'étagère';
};

const COMPANIES: Record<string, MaterialLabel[]> = {
  BBois: ['noyer', 'chêne', 'frêne'],
  MetaLo: ['inox', 'aluminium'],
  pPlastique: ['plastique'],
};

const getCompanyFromMaterial = (material: MaterialLabel) => {
  for (const [company, materials] of Object.entries(COMPANIES)) {
    if (materials.includes(material)) {
      return company;
    }
  }
};

function Furniture({ id, img, name, material, category }: FurnitureProps) {
  const fallbackImg =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61yLZ0ct4jL._AC_SL1500_.jpg&f=1&nofb=1&ipt=0f5b1e8047bb48843e87a04276b699075e7faa908d6f0f709e156b5e7299783a';

  const company = getCompanyFromMaterial(material);

  return (
    <li key={id} className='w-full rounded-xl bg-gray-100 p-5 grid grid-cols-2 justify-between'>
      <div className='grid grid-cols-[auto_1fr] gap-x-5'>
        <img className='rounded-full w-20' src={img || fallbackImg} />
        <div className='flex flex-col justify-center gap-1'>
          <span className='font-bold text-2xl'>{name}</span>
          <Link to={`/material/${slugify(material)}`} className='underline text-blue-500 w-fit'>
            {capitalizeFirstLetter(material)}
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <span>Catégorie: {capitalizeFirstLetter(category)}</span>
        <span>Entreprise: {company}</span>
        <span className='italic'>Id: {id}</span>
      </div>
    </li>
  );
}

export default Furniture;

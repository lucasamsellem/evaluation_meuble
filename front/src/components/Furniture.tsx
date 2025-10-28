import { Link } from 'react-router-dom';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import slugify from '../utils/slugify';
import useToggle from '../hooks/useToggle';
import FormField from './FormField';
import { useEffect, useRef, useState } from 'react';
import CheckIcon from '../assets/CheckIcon';
import TagIcon from '../assets/TagIcon';
import PlusIcon from '../assets/PlusIcon';
import type { Material } from '../pages/HomePage';

const fallbackImg =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61yLZ0ct4jL._AC_SL1500_.jpg&f=1&nofb=1&ipt=0f5b1e8047bb48843e87a04276b699075e7faa908d6f0f709e156b5e7299783a';

type FurnitureProps = {
  _id: string;
  image: string;
  title: string;
  materials: Material[];
  category: { name: string };
  quantity: number;
};

function Furniture({ _id, image, title, materials, category, quantity }: FurnitureProps) {
  const { value: isQuantityField, toggle: toggleQuantityField } = useToggle();
  const [newQuantity, setNewQuantity] = useState<number>(0);
  const fieldRef = useRef<HTMLDivElement>(null);

  // TODO: AJOUTER COMANY QUAND ISSA AURA FAIT

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isQuantityField && fieldRef.current && !fieldRef.current.contains(event.target as Node)) {
        toggleQuantityField();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isQuantityField, toggleQuantityField]);

  return (
    <li
      key={_id}
      className='w-full rounded-4xl bg-white flex hover:transform hover:-translate-y-1 transition flex-col justify-between h-fit p-2'
    >
      <img className='rounded-4xl w-full h-80 object-cover' src={image || fallbackImg} />

      <div className='p-5 flex flex-col gap-y-10'>
        <div className='flex flex-col justify-center gap-3'>
          <span className='font-bold text-2xl truncate'>{title}</span>
          <ul className='flex gap-x-3'>
            {materials.map((material) => (
              <Link
                key={material._id}
                to={`/material/${slugify(material.name)}`}
                className='bg-gray-100 rounded-lg px-3 py-1 font-medium hover:bg-gray-200 transition'
              >
                {capitalizeFirstLetter(material.name)}
              </Link>
            ))}
          </ul>
        </div>

        <div ref={fieldRef} className='flex items-center justify-between'>
          {isQuantityField ? (
            <form className='flex items-center gap-x-2'>
              <FormField
                value={newQuantity}
                onChange={(e) => setNewQuantity(Number(e.target.value))}
                type='number'
                className='w-20'
              />

              <button type='submit'>
                <CheckIcon />
              </button>
            </form>
          ) : (
            <button
              onClick={toggleQuantityField}
              className='hover:opacity-50 rounded-xl flex gap-x-2 transition'
            >
              <PlusIcon /> <strong>{newQuantity || quantity}</strong>
            </button>
          )}
          <span className='flex gap-x-2'>
            <TagIcon /> <strong>{capitalizeFirstLetter(category.name)}</strong>
          </span>
          {/* <span>
          Entreprise: <strong>{company}</strong>
        </span> */}
        </div>
      </div>
    </li>
  );
}

export default Furniture;

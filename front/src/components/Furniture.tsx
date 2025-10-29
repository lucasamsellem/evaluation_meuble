import { Link } from 'react-router-dom';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import slugify from '../utils/slugify';
import { useState } from 'react';
import TagIcon from '../assets/TagIcon';
import PlusIcon from '../assets/PlusIcon';
import type { FurnitureType, Material } from '../pages/HomePage';
import getAuthData from '../utils/getAuthData';
import fetchWithAuth from '../utils/fetchWithAuth';

type FurnitureProps = {
  _id: string;
  image: string;
  title: string;
  materials: Material[];
  category: { name: string };
  quantity: number;
  onFurnitures: React.Dispatch<React.SetStateAction<FurnitureType[]>>;
};

function Furniture({
  _id,
  image,
  title,
  materials,
  category,
  quantity,
  onFurnitures,
}: FurnitureProps) {
  const authData = getAuthData();
  const token = authData?.token;

  const [updatedQuantity, setUpdatedQuantity] = useState<number>(quantity);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUpdateQuantity = async () => {
    setIsLoading(true);

    const newQuantity = updatedQuantity + 1;
    setUpdatedQuantity(newQuantity);

    onFurnitures((prev) =>
      prev.map((furniture) =>
        furniture._id === _id ? { ...furniture, quantity: newQuantity } : furniture
      )
    );

    try {
      const res = await fetchWithAuth('furniture/', {
        method: 'PUT',
        body: JSON.stringify({ id: _id, updatedQuantity: newQuantity }),
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP : ${res.status}`);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour :', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li
      key={_id}
      className='w-full rounded-4xl bg-white flex hover:transform hover:-translate-y-1 transition flex-col justify-between h-fit p-2'
    >
      <img className='rounded-4xl w-full h-80 object-cover' src={image} />

      <div className='p-5 flex flex-col gap-y-10'>
        <div className='flex flex-col justify-center gap-3'>
          <span className='font-bold text-2xl truncate'>{title}</span>
          <ul className='flex gap-3 flex-wrap'>
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

        <div className='flex items-center justify-between'>
          {token ? (
            <button
              onClick={handleUpdateQuantity}
              className={`${
                isLoading ? 'pointer-events-none' : ''
              } hover:opacity-50 rounded-xl flex gap-x-2 transition`}
              disabled={isLoading}
            >
              <PlusIcon /> <strong>{updatedQuantity}</strong>
            </button>
          ) : (
            <span className='flex gap-x-2'>
              <PlusIcon /> <strong>{quantity}</strong>
            </span>
          )}

          <span className='flex gap-x-2'>
            <TagIcon /> <strong>{capitalizeFirstLetter(category.name)}</strong>
          </span>
        </div>
      </div>
    </li>
  );
}

export default Furniture;

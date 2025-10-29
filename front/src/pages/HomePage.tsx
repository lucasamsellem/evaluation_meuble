import ActionButton from '../components/ActionButton';
import Furniture from '../components/Furniture';
import Modal from '../components/Modal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useModal from '../hooks/useModal';
import NewFurnitureForm from '../layout/NewFurnitureForm';
import { useEffect, useState } from 'react';
import getAuthData from '../utils/getAuthData';

export type Material = {
  _id: string;
  name: string;
  type: string;
  provider: string;
};

export type FurnitureType = {
  _id: string;
  title: string;
  image: string;
  description: string;
  quantity: number;
  category: { name: string };
  materials: Material[];
  __v?: number;
};

const TABS = [
  { label: 'Armoire', value: 'Armoire' },
  { label: 'Étagère', value: 'Étagère' },
];

function HomePage() {
  const authData = getAuthData();
  const token = authData?.token;

  const { isOpen, toggleModal } = useModal();
  const [furnitures, setFurnitures] = useLocalStorage<FurnitureType[]>('furnitures', []);
  const [categoryToRender, setCategoryToRender] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setFurnitures(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:justify-between md:flex-row items-center gap-x-10 gap-y-3 mb-5'>
        <div className='flex bg-blue-500 rounded-2xl p-1'>
          {TABS.map((tab) => {
            const isActive = categoryToRender === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setCategoryToRender(isActive ? null : tab.value)}
                className={`px-6 py-1 rounded-xl font-semibold transition-all duration-200 ${
                  isActive ? 'bg-white text-blue-500 shadow-md' : 'text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {token && (
          <ActionButton className='' onClick={toggleModal}>
            <span className='mr-1'>+</span> Nouveau meuble
          </ActionButton>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={toggleModal} title='Ajouter un nouveau meuble'>
        <NewFurnitureForm />
      </Modal>

      <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {furnitures
          .filter((furniture) => !categoryToRender || furniture.category.name === categoryToRender)
          .map(({ _id, title, image, quantity, category, materials }) => (
            <Furniture
              key={_id}
              _id={_id}
              title={title}
              image={image}
              quantity={quantity}
              category={category}
              materials={materials}
            />
          ))}
      </ul>
    </div>
  );
}

export default HomePage;

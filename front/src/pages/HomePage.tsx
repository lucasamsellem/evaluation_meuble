import ActionButton from '../components/ActionButton';
import Furniture from '../components/Furniture';
import Modal from '../components/Modal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useModal from '../hooks/useModal';
import NewFurnitureForm from '../layout/NewFurnitureForm';
import { useEffect } from 'react';

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

function HomePage() {
  const { isOpen, toggleModal } = useModal();
  const [furnitures, setFurnitures] = useLocalStorage<FurnitureType[]>('furnitures', []);
  console.log(furnitures);

  useEffect(() => {
    fetch('http://localhost:8000')
      .then((res) => res.json())
      .then((data) => setFurnitures(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='flex flex-col'>
      <ActionButton className='mb-5 ml-auto' onClick={toggleModal}>
        <span className='mr-1'>+</span> Nouveau meuble
      </ActionButton>

      <Modal isOpen={isOpen} onClose={toggleModal} title='Ajouter un nouveau meuble'>
        <NewFurnitureForm />
      </Modal>

      <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {Object.values(furnitures).map(({ _id, title, image, quantity, category, materials }) => (
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

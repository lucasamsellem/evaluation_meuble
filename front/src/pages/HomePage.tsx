import ActionButton from '../components/ActionButton';
import Furniture from '../components/Furniture';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import NewFurnitureForm from '../layout/NewFurnitureForm';
import data from '../../../back/data.ts';

function HomePage() {
  const { isOpen, toggleModal } = useModal();

  return (
    <div className='flex flex-col'>
      <ActionButton className='mb-5 ml-auto' onClick={toggleModal}>
        <span className='mr-1'>+</span> New Furniture
      </ActionButton>

      <Modal isOpen={isOpen} onClose={toggleModal} title='Ajouter un nouveau meuble'>
        <NewFurnitureForm />
      </Modal>

      <ul className='grid grid-cols-3 gap-5'>
        {Object.values(data.furnitures).map(
          ({ description, title, image, quantity, category_id, materials }) => (
            <Furniture
              key={description}
              id={description}
              name={title}
              img={image}
              quantity={quantity}
              category={category_id === 1 ? 'armoire' : 'étagère'}
              materials={materials}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default HomePage;

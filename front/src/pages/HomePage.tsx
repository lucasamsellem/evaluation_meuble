import ActionButton from '../components/ActionButton';
import Furniture from '../components/Furniture';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import NewFurnitureForm from '../layout/NewFurnitureForm';

function HomePage() {
  const { isOpen, toggleModal } = useModal();

  return (
    <div>
      <ActionButton className='mb-5' onClick={toggleModal}>
        + New Furniture
      </ActionButton>

      <Modal isOpen={isOpen} onClose={toggleModal} title='Ajouter un nouveau meuble'>
        <NewFurnitureForm />
      </Modal>

      <ul className='flex flex-col gap-5'>
        <Furniture
          id={crypto.randomUUID()}
          img={undefined}
          name='Super étagère'
          material='aluminium'
          category='armoire'
        />

        <Furniture
          id={crypto.randomUUID()}
          img={undefined}
          name='Super armoire'
          material='noyer'
          category='étagère'
        />

        <Furniture
          id={crypto.randomUUID()}
          img={undefined}
          name='Armoire en aluminium'
          material='aluminium'
          category='armoire'
        />
      </ul>
    </div>
  );
}

export default HomePage;

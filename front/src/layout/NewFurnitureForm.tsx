import FormField from '../components/FormField';
import ActionButton from '../components/ActionButton';
import { useState } from 'react';
import SelectField from '../components/SelectField';
import { MATERIALS, CATEGORIES } from '../constants/constants';

type NewFurnitureFormValues = {
  name: string;
  material: string;
  quantity: number;
  category: string;
  img: string;
};

const INITIAL_NEW_FURNITURE_VALUES: NewFurnitureFormValues = {
  name: '',
  material: '',
  quantity: 1,
  category: 'armoire',
  img: '',
};

function NewFurnitureForm() {
  const [newFurnitureValues, setNewFurnitureValues] = useState<NewFurnitureFormValues>(
    INITIAL_NEW_FURNITURE_VALUES
  );

  return (
    <form className='flex flex-col gap-5'>
      <FormField
        label='Nom'
        value={newFurnitureValues.name}
        onChange={(e) => setNewFurnitureValues((prev) => ({ ...prev, name: e.target.value }))}
      />

      <FormField
        label='Quantité'
        type='number'
        value={newFurnitureValues.quantity}
        onChange={(e) =>
          setNewFurnitureValues((prev) => ({ ...prev, quantity: Number(e.target.value) }))
        }
      />

      <SelectField
        label='Matériau'
        value={newFurnitureValues.material}
        options={MATERIALS}
        onChange={(value) => setNewFurnitureValues((prev) => ({ ...prev, material: value }))}
      />

      <SelectField
        label='Catégorie'
        value={newFurnitureValues.category}
        options={CATEGORIES}
        onChange={(value) => setNewFurnitureValues((prev) => ({ ...prev, category: value }))}
      />

      {/* IMAGE (Url valide) */}
      <FormField
        label='Image'
        value={newFurnitureValues.img}
        onChange={(e) => setNewFurnitureValues((prev) => ({ ...prev, img: e.target.value }))}
        placeholder='Enter a URL'
      />

      <ActionButton type='submit'>Ajouter</ActionButton>
    </form>
  );
}

export default NewFurnitureForm;

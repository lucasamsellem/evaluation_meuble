import TextField from '../components/TextField';
import ActionButton from '../components/ActionButton';
import { useState } from 'react';
import SelectField from '../components/SelectField';
import { MATERIALS, CATEGORIES } from '../constants/constants';

type NewFurnitureFormValues = {
  name: string;
  material: string;
  category: string;
};

const INITIAL_NEW_FURNITURE_VALUES: NewFurnitureFormValues = {
  name: '',
  material: '',
  category: 'armoire',
};

function NewFurnitureForm() {
  const [newFurnitureValues, setNewFurnitureValues] = useState<NewFurnitureFormValues>(
    INITIAL_NEW_FURNITURE_VALUES
  );

  return (
    <form className='flex flex-col gap-5'>
      <TextField
        label='Nom'
        value={newFurnitureValues.name}
        onChange={(e) => setNewFurnitureValues((prev) => ({ ...prev, name: e.target.value }))}
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

      <ActionButton type='submit'>Ajouter</ActionButton>
    </form>
  );
}

export default NewFurnitureForm;

import FormField from '../components/FormField';
import ActionButton from '../components/ActionButton';
import { useState } from 'react';
import SelectField from '../components/SelectField';
import CheckboxesField from '../components/CheckboxesField';
import { MATERIALS, CATEGORIES, COMPANIES } from '../constants/constants';
import fetchWithAuth from '../utils/fetchWithAuth';

type NewFurnitureFormValues = {
  title: string;
  image: string;
  category: string;
  materials: string[];
  quantity: number;
};

const INITIAL_NEW_FURNITURE_VALUES: NewFurnitureFormValues = {
  title: '',
  image: '',
  category: CATEGORIES[0],
  materials: [],
  quantity: 1,
};

function NewFurnitureForm() {
  const [newFurnitureValues, setNewFurnitureValues] = useState<NewFurnitureFormValues>(
    INITIAL_NEW_FURNITURE_VALUES
  );

  const newMaterials = newFurnitureValues.materials.map((material) => {
    return {
      name: material,
      type: Object.entries(MATERIALS).find(([, m]) => m.includes(material))?.[0],
      provider: Object.entries(COMPANIES).find(([, m]) => m.includes(material))?.[0],
    };
  });

  const handleNewFurniture = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetchWithAuth('furniture/', {
        method: 'POST',
        body: JSON.stringify({
          ...newFurnitureValues,
          materials: newMaterials,
          category: {
            name: newFurnitureValues.category,
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP : ${res.status}`);
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col gap-5' onSubmit={handleNewFurniture}>
      <FormField
        label='Nom'
        value={newFurnitureValues.title}
        onChange={(e) =>
          setNewFurnitureValues((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />
      <FormField
        label='Quantité'
        type='number'
        value={newFurnitureValues.quantity}
        onChange={(e) =>
          setNewFurnitureValues((prev) => ({
            ...prev,
            quantity: Number(e.target.value),
          }))
        }
      />
      <CheckboxesField
        label='Matériau'
        options={Object.values(MATERIALS).flat()}
        values={newFurnitureValues.materials}
        onChange={(values) =>
          setNewFurnitureValues((prev) => ({
            ...prev,
            materials: values,
          }))
        }
      />
      <SelectField
        label='Catégorie'
        value={newFurnitureValues.category}
        options={CATEGORIES}
        onChange={(value) =>
          setNewFurnitureValues((prev) => ({
            ...prev,
            category: value,
          }))
        }
      />
      <FormField
        label='Image'
        value={newFurnitureValues.image}
        onChange={(e) =>
          setNewFurnitureValues((prev) => ({
            ...prev,
            image: e.target.value,
          }))
        }
        placeholder='URL'
      />
      <ActionButton type='submit'>Ajouter</ActionButton>
    </form>
  );
}

export default NewFurnitureForm;

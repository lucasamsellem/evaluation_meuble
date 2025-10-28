import { useParams } from 'react-router-dom';
import { MATERIALS_DETAILS } from '../constants/constants';

function MaterialPage() {
  const { material } = useParams();

  if (!material) return <p>Material not found</p>;

  const { img, label, description } = MATERIALS_DETAILS[material];

  return (
    <div>
      <img src={img || ''} />
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MaterialPage;

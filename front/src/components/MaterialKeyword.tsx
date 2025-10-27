import { Link } from 'react-router-dom';

type MaterialKeywordProps = {
  material: string;
};

function MaterialKeyword({ material }: MaterialKeywordProps) {
  return (
    <Link to={`/material/${material}`} className='underline text-blue-500'>
      {material.toUpperCase()}
    </Link>
  );
}

export default MaterialKeyword;

// SEULE PAGE PROtégée qui contient les stats

import Furniture from '../components/Furniture';

function HomePage() {
  return (
    <ul className='flex flex-col gap-5'>
      <Furniture
        id={crypto.randomUUID()}
        img={undefined}
        name='Super Cupboard'
        material='wood'
        category='cupboard'
      />

      <Furniture
        id={crypto.randomUUID()}
        img={undefined}
        name='Super Shelf'
        material='iron'
        category='shelf'
      />
    </ul>
  );
}

export default HomePage;

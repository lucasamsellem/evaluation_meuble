// SEULE PAGE PROtégée qui contient les stats

import Furniture from '../components/Furniture';

function HomePage() {
  return (
    <div>
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

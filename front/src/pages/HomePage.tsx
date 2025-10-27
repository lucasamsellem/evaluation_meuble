// SEULE PAGE PROtégée qui contient les stats

import MaterialKeyword from '../components/MaterialKeyword';

function HomePage() {
  return (
    <ul>
      <li>
        <MaterialKeyword material='iron' />
      </li>

      <li>
        <MaterialKeyword material='wood' />
      </li>
    </ul>
  );
}

export default HomePage;

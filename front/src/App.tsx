import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet /> {/* Ici seront rendues toutes les routes enfants */}
      </main>
    </>
  );
}

export default App;

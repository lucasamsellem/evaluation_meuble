import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className='p-5'>
      <Navbar />

      <main>
        <Outlet /> {/* Ici seront rendues toutes les routes enfants */}
      </main>
    </div>
  );
}

export default App;

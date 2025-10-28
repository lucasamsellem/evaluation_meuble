import { Outlet } from 'react-router-dom';
import Header from './layout/Header';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='p-5 flex-1'>
        <Outlet /> {/* Ici seront rendues toutes les routes enfants */}
      </main>

      <footer className='bg-blue-500 text-white p-3 text-center'>@Issa @Lucas</footer>
    </div>
  );
}

export default App;

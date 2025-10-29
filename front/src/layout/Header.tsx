import { NavLink } from 'react-router-dom';
import LogoutIcon from '../assets/LogoutIcon';
import getAuthData from '../utils/getAuthData';

function Header() {
  const authData = getAuthData();
  const token = authData?.token;
  const username = authData?.username;

  const handleLogout = () => {
    localStorage.removeItem('authData');
    window.location.reload();
  };

  return (
    <header className='flex flex-col md:flex-row items-center justify-between bg-blue-500 p-4 md:p-5 text-white font-semibold gap-4 md:gap-x-10'>
      <h1 className='text-2xl text-center md:text-left'>Mes Meubles</h1>

      <nav className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-x-8 text-lg md:text-xl w-full md:w-auto'>
        {token ? (
          <>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `transition-opacity duration-200 hover:opacity-100 ${
                  isActive ? 'opacity-100 font-bold' : 'opacity-70'
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to='/dashboard'
              className={({ isActive }) =>
                `transition-opacity duration-200 hover:opacity-100 ${
                  isActive ? 'opacity-100 font-bold' : 'opacity-70'
                }`
              }
            >
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/' className='opacity-80 hover:opacity-100 transition'>
              Accueil
            </NavLink>

            <NavLink to='/login' className='opacity-80 hover:opacity-100 transition'>
              Connexion
            </NavLink>
          </>
        )}
      </nav>

      {token && (
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-x-5 mt-2 md:mt-0'>
          <span className='text-sm md:text-base truncate'>{username}</span>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F12%2F11%2F35a41202-c7ab-467b-ac37-81e8f13d6eb7.jpg&f=1&nofb=1&ipt=eeb5fa124fe009ba9b7d79940295b800a7ada18ed996c293d0461a8a3e8b0a8d'
            className='w-10 h-10 rounded-full object-cover'
            alt='Avatar'
          />
          <button
            onClick={handleLogout}
            className='p-2  transition-colors'
            aria-label='Déconnexion'
          >
            <LogoutIcon />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

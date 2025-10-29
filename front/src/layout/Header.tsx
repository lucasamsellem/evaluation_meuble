import { NavLink } from 'react-router-dom';
import LogoutIcon from '../assets/LogoutIcon';
import getAuthData from '../utils/getAuthData';

function Header() {
  const authData = getAuthData();
  const { token, username } = authData || {};

  const handleLogout = () => {
    localStorage.removeItem('authData');
    window.location.reload();
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-opacity duration-200 hover:opacity-100 ${
      isActive ? 'opacity-100 font-bold' : 'opacity-70'
    }`;

  return (
    <header className='flex flex-col md:flex-row items-center justify-between bg-blue-500 p-5 text-white font-semibold gap-4'>
      <h1 className='text-2xl text-center md:text-left'>Mes Meubles</h1>

      <div className='flex justify-between items-center w-full md:w-auto'>
        <nav className='flex flex-row items-start md:items-center gap-3 md:gap-x-8 text-lg md:text-xl'>
          <div className='flex gap-x-8'>
            {token ? (
              <>
                <NavLink to='/' className={navLinkClass}>
                  Accueil
                </NavLink>
                <NavLink to='/dashboard' className={navLinkClass}>
                  Dashboard
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to='/' className={navLinkClass}>
                  Accueil
                </NavLink>
                <NavLink to='/login' className={navLinkClass}>
                  Connexion
                </NavLink>
              </>
            )}
          </div>
        </nav>

        {token && <hr className='w-5 mx-5 rotate-90' />}

        {token && (
          <div className='flex flex-row items-center gap-3 md:gap-x-5 mt-2 md:mt-0'>
            <span className='text-sm hidden md:block md:text-base truncate'>{username}</span>
            <img
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F12%2F11%2F35a41202-c7ab-467b-ac37-81e8f13d6eb7.jpg&f=1&nofb=1&ipt=eeb5fa124fe009ba9b7d79940295b800a7ada18ed996c293d0461a8a3e8b0a8d'
              className='w-10 h-10 rounded-full object-cover'
              alt='Avatar'
            />
            <button
              onClick={handleLogout}
              className='p-2 transition-colors'
              aria-label='Déconnexion'
            >
              <LogoutIcon />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

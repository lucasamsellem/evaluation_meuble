import { NavLink } from 'react-router-dom';
import LogoutIcon from '../assets/LogoutIcon';

const NAVBAR_ELEMENTS = {
  HOME: { path: '/', label: 'Home' },
  DASHBOARD: { path: '/dashboard', label: 'Dashboard' },
};

function Header() {
  return (
    <header className='flex flex-col md:flex-row bg-blue-500 p-4 md:p-5 text-white font-semibold items-center justify-between gap-4 md:gap-x-10'>
      <h1 className='text-2xl'>Mes Meubles</h1>

      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-x-10 w-full md:w-auto'>
        <nav className='w-full md:w-auto border-b md:border-b-0 md:border-r-2 pb-2 md:pb-0 md:pr-10'>
          <ul className='flex flex-col md:flex-row gap-2 md:gap-x-8 text-lg md:text-xl items-start md:items-center'>
            {Object.values(NAVBAR_ELEMENTS).map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-70')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-3 md:gap-x-5'>
          <span className='text-sm md:text-base'>Lucas Amsellem</span>

          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F12%2F11%2F35a41202-c7ab-467b-ac37-81e8f13d6eb7.jpg&f=1&nofb=1&ipt=eeb5fa124fe009ba9b7d79940295b800a7ada18ed996c293d0461a8a3e8b0a8d'
            className='w-10 h-10 rounded-full object-cover'
          />

          <button>
            <LogoutIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { NavLink } from 'react-router-dom';
import LogoutIcon from '../assets/LogoutIcon';

const NAVBAR_ELEMENTS = {
  HOME: {
    path: '/',
    label: 'Home',
  },
  DASHBOARD: {
    path: '/dashboard',
    label: 'Dashboard',
  },
};

function Header() {
  return (
    <header className='flex bg-blue-500 p-5 text-white font-semibold items-center justify-between gap-x-10'>
      <h1 className='text-2xl'>Evaluation meubles</h1>

      <div className='flex items-center gap-x-10'>
        <nav className='border-r-2 pr-10'>
          <ul className='flex gap-x-8 justify-end text-xl '>
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

        <div className='flex items-center gap-x-5'>
          <span>Lucas Amsellem</span>

          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F12%2F11%2F35a41202-c7ab-467b-ac37-81e8f13d6eb7.jpg&f=1&nofb=1&ipt=eeb5fa124fe009ba9b7d79940295b800a7ada18ed996c293d0461a8a3e8b0a8d'
            className='w-10 rounded-full'
          />

          <LogoutIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;

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

function Navbar() {
  return (
    <ul className='flex gap-x-3 justify-end text-xl'>
      {Object.values(NAVBAR_ELEMENTS).map(({ path, label }) => (
        <li key={path}>
          <a href={path}>{label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;

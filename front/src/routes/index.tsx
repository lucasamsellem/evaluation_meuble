import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Dashboard from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import MaterialPage from '../pages/MaterialPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> }, // équivaut à path="/"
      { path: 'login', element: <LoginPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'material/:material', element: <MaterialPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

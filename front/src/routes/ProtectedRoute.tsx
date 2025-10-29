import { Navigate } from 'react-router-dom';
import getAuthData from '../utils/getAuthData';
import type { JSX } from 'react';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authData = getAuthData();
  const isLoggedIn = !!authData?.token;

  if (!isLoggedIn) {
    return <Navigate to='/' replace />;
  }

  // Sinon affiche le contenu enfant
  return children;
};

export default ProtectedRoute;

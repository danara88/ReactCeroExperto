import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * @description Private routes
 */
export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  // Save last path visited by the user
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return authState.logged ? children : <Navigate to="/login" />;
};

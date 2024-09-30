import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

/**
 * @description Public routes
 */
export const PublicRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? <Navigate to="/" /> : children;
};

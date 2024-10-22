import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

/**
 * @constant AuthRoutes
 * @description Auth module routing definition
 */
export const AuthRoutes = () => {
  return (
    <Routes>
      {/* Login page */}
      <Route path="login" element={<LoginPage />} />

      {/* Register page */}
      <Route path="register" element={<RegisterPage />} />

      {/* If the route does not exist, redirect to login page */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

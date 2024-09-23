import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../layout';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
/**
 * Main APP router
 */
export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login page */}
        <Route path="login" element={<LoginPage />} />

        {/* Heroes child routes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

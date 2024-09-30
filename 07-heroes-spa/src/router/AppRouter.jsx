import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

/**
 * Main APP router
 */
export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login page */}
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Heroes child routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      {/* <Route
        path="login/*"
        element={
          <PublicRoute>
            <Route path="/*" element={<LoginPage />} />
          </PublicRoute>
        }
      /> */}
    </>
  );
};

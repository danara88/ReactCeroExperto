import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';

/**
 * @constant AppRouter
 * @description Main app router
 */
export const AppRouter = () => {
  return (
    <Routes>
      {/* Any route with /auth/ allow access to auth module routing */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* If the route does no exists, allow access to journal module routing */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};

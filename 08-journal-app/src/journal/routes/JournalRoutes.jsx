import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../pages';

/**
 * @constant JournalRoutes
 * @description Journal module routing definition
 */
export const JournalRoutes = () => {
  return (
    <Routes>
      {/* Journal page */}
      <Route path="/" element={<JournalPage />} />

      {/* If the route does not exist, redirect to / */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

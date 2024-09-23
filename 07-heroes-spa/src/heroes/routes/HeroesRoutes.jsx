import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../layout/components/Navbar';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      {/* Heroes navbar */}
      <Navbar />
      {/* Heroes navbar */}

      <div className="container">
        <Routes>
          {/* Marvel page */}
          <Route path="marvel" element={<MarvelPage />} />

          {/* DC page */}
          <Route path="dc" element={<DcPage />} />

          {/* Search page */}
          <Route path="search" element={<SearchPage />} />

          {/* Hero page */}
          <Route path="hero/:id" element={<HeroPage />} />

          {/* Redirect to /marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

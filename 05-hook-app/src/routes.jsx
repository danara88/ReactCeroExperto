import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
import { AboutPage, HomePage, LoginPage } from './09-useContext/pages';

export const getRoutes = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainApp />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'home',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '/*',
          element: <Navigate to="/home" />,
        },
      ],
    },
  ]);

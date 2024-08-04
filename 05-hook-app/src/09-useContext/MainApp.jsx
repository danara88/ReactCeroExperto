import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />

      <Outlet />
    </UserProvider>
  );
};

import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: 123,
//   name: 'Daniel Aranda',
//   email: 'daniel@text.com',
// };

/**
 * Se recomienda poner el user provider en el punto mas alto de mi arbol de componentes
 */
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

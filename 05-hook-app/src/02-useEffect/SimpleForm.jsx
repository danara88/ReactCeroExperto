import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Daniel',
    email: 'daniel@daniel.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value, // propiedad computada
    });
  };

  // Sirve para disparar efectos secundarios
  // Si no tiene alguna depencencia, se llama cada vez que nuestro componente se redibuje
  // NO se recomienda que pongamos un useEffect sin ninguna dependencia
  //
  // Cuando se le pasa [] en las dependencias, entonces signifca que queremos que se dispare 1 unica vez
  // y cuando el componente es montado la primera vez.
  // Mondatdo = Cuando nuestro componente se renderiza.
  //
  // En lugar de hacer un useEffect con mucha logica adentro, se recomienda crear efectos especificos
  // separados. (Principio de Responsabilidad Unic)
  useEffect(() => {
    // console.log('useEffect called !');
  }, []);

  useEffect(() => {
    // console.log('formState change !');
  }, [formState]);

  useEffect(() => {
    // console.log('email change !');
  }, [email]);

  useEffect(() => {
    return () => {
      // Aqui ponemos logica relacionada al cleanup
      // Limpiar, cancelar observables o listeners para evitar que se consuma memoria
    };
  });

  return (
    <>
      <h1>Forumario Simple</h1>

      <hr />

      <input
        type="text"
        value={username}
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        value={email}
        className="form-control mt-2"
        placeholder="test@test.com"
        name="email"
        onChange={onInputChange}
      />

      {username === 'Daniel2' && <Message />}
    </>
  );
};

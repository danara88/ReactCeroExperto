import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  /**
   * useCallback: Nos ayuda a memorizar funciones, y lo que regresa
   * es una funcion que puedo ejecutar.
   * Esta funcion memorizada esta en la misma posicion en memoria.
   * No es necesario usar useCallback en todas partes, ya que React lo
   * maneja muy bien.
   * Usarlo cuando veamos alguna depreciacion en el performance debido
   * a un metodo muy grande.
   */
  const incrementFn = useCallback((value) => {
    // Los valores adentro estan memorizados.
    // console.log('useCallback');
    // setCounter(counter + 1);
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFn} />
    </>
  );
};

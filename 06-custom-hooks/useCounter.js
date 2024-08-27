import { useState } from 'react';

/**
 * Dentro de los custom hooks podemos user otros hooks adentro.
 * En neustros custom hooks podemos agregar nuestra propia logica de negocio.
 * Los custom hooks nos ayudan a centralizar nuestra logica.
 */

/**
 * @description This is a custom hook
 * @returns {void}
 */
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  if (counter < 0) {
    console.error('Values low than 0 are invalid.');
    setCounter(initialValue);
  }

  const incrementCounter = (rate = 1) => setCounter((current) => current + rate);

  const decrementCounter = (rate = 1) => setCounter((current) => current - rate);

  const resetCounter = () => setCounter(initialValue);

  return {
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
};

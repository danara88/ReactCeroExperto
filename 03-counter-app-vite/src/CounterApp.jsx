import { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * NOTES:
 * Cuando hacemos un cambio en el componente, tenemos que avisar a React
 * de que hubo un nuevo cambio dentro del componente y ocupamos
 * que redibujes esos cambios (React lo hace muy rapido y eficientemente).
 *
 * HOOKS:
 * Fueron introducidos en la version 16.8
 * No son mas que funciones.
 * Los hooks empiezan con "use".
 */

/**
 * Si el functional component se vuelve a renderizar,
 * no se va a crear un nuevo espacio en memoria para handleClick
 */
// const handleClick = (event) => {
//   console.log(event);
// };

/**
 * @method CounterApp
 * @description Functional component CounterApp
 */
export const CounterApp = ({ value = 0 }) => {
  // Cuando se cambia el estado, el componente se vuelve a renderizar
  console.log('render');
  /**
   * El valor inicial es 0.
   * setCounter nos ayudara a cambiar el valor del counter
   */
  const [counter, setCounter] = useState(value);

  //   const handleClick = () => setCounter(counter + 1);
  const handleAdd = () => setCounter((c) => c + 1);
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  //  Anteriormente React renderizaba 4 veces el componetne aqui.
  //   Pero ahora primero ejecutac cada una de las funciones, luego cambiar el estado
  //   y luego vuelve a renderizar todo.
  //
  //   const handleClick = () => {
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

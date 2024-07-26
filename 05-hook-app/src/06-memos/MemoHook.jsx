import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos');
  }
  return `${iterationNumber} iteraciones realizadas`;
};

/**
 * Podemos memorizar componentes cuando son muy pesados o tiene dentro
 * procesamiento pesados. El componente se va a renderizar si los props cambian.
 */
export const MemoHook = () => {
  const { counter, incrementCounter } = useCounter(4000);
  const [show, setShow] = useState(true);

  /**
   * useMemo: Puedo memorizar el resultado. Memoriza un valor calculado para evitar recalculaciones costosas en cada renderizado.
   * Va a memorizar el valor que retorne, y se va a volver a memorizar el valor
   * si las dependencias del useMemo cambian.
   * Reprocesar si las depenencias cambian.
   * Recomendad para tareas pesadas.
   */
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => incrementCounter()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

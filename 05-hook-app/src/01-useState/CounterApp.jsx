import { useState } from 'react';

export const CounterApp = () => {
  /**
   * Si solo queremos cambiar una propiedad del objeto del useState,
   * tenemos que espcificar todas las propiedades y solo modificar aquellas que necesitamos
   */
  const [counterState, setCounterState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counterState;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

      <button
        className="btn btn-primary btn-md"
        onClick={() =>
          setCounterState({
            ...counterState,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};

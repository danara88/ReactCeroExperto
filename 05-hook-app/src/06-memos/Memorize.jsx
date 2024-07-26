import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

/**
 * Podemos memorizar componentes cuando son muy pesados o tiene dentro
 * procesamiento pesados. El componente se va a renderizar si los props cambian.
 */
export const Memorize = () => {
  const { counter, incrementCounter } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => incrementCounter()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

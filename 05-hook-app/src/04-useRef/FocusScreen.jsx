import { useRef } from 'react';

export const FocusScreen = () => {
  // Lo que queremos con el ref es guardar una referencia, cuando esa referencia cambia, evitar que
  // se re-renderize el componnte.
  const inputRef = useRef();

  const onClick = () => inputRef.current.select();

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" className="form-control" placeholder="Ingrese su nombre" ref={inputRef} />

      <button onClick={onClick} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};

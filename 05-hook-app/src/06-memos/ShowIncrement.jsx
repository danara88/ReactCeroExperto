import React from 'react';

/**
 * La funcion increment que esta en los props, al usar useCallback,
 * se pasa siempre la misma funcion (misma funcion en la misma posicion en memoria)
 */
export const ShowIncrement = React.memo(function ShowIncrement({ increment }) {
  console.log('Me volvi a generar');
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(10);
        }}
      >
        Incrementar
      </button>
    </>
  );
});

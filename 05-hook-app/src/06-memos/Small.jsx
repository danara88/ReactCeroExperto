// Funcion que le dice a react "memoriza el componente"
// Solo cuando los properties cambian, se volvera a ejecutar el componente.
import { memo } from 'react';

export const Small = memo(function Small({ value }) {
  console.log('Me volvi a dibujar');
  return <small>{value}</small>;
});

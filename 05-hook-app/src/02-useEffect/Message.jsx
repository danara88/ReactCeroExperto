import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoors] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mounted: Cunado el componente se muestra
    // console.log('Message Mounted');
    const onMouseMove = ({ x, y }) => {
      const cords = { x, y };
      console.log(cords);
      setCoors({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove); // Memory leaks!!

    return () => {
      // UnMounted: Cuando el componente se destruye
      // console.log('Messgae UnMounted');

      // Avoid memory leaks!
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};

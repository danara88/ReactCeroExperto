import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSide, setBoxSide] = useState({ width: 0, height: 0 });

  /**
   * useEffect: Se ejecuta despues de que el renderizado se haya completado
   * y los cambios se hayan pintado en la pantalla.
   *  Ideal para tareas que no requieren una actualización inmediata del DOM, como peticiones de red,
   * suscripciones, manipulaciones del DOM que no afectan directamente el diseño,
   * y actualizaciones de estado que no afectan inmediatamente al DOM.
   *
   * useLayoutEffect: se ejecuta inmediatamente despues de que el DOM se haya actualizado,
   * pero antes de que el navegador pinte la pantalla.
   * Se utiliza para tareas que necesitan hacer cálculos de diseño o lecturas del DOM antes
   * de que el navegador actualice la pantalla. Es útil para correcciones de diseño,
   * mediciones del DOM y cualquier efecto que necesite ejecutarse
   * antes del pintado.
   */
  useLayoutEffect(() => {
    // Aqui puedo acceder a elementos del DOM
    // Usar el useEffect siempre si es posible
    const { width, height } = h2Ref.current.getBoundingClientRect();
    setBoxSide({
      width,
      height,
    });
  }, []);

  return (
    <section style={{ height: 200 }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>
      <code>{JSON.stringify(boxSide)}</code>
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};

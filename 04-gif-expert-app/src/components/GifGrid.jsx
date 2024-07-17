import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

/**
 * UseEffect: Es un hook que se utiliza para disparar efectos secundarios.
 * Efecto secundario: Cuando algo pase, yo quiero disparar un efecto secundario.
 */

export const GifGrid = ({ category }) => {
  // Custom hook
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

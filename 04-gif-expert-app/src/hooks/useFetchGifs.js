import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

/**
 * Un hook no es mas que una simple funcion que regresa algo.
 */

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsAsync = async () => {
    const gifsResponse = await getGifs(category);

    // Estos dos setters solo dispara 1 renderizacion
    setGifs([...gifsResponse]);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifsAsync();
  }, []);

  return {
    gifs,
    isLoading,
  };
};

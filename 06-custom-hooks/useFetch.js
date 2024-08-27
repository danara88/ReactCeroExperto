import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetchAsync = async () => {
    if (localCache[url]) {
      console.log('Usando cache!');
      setState({
        data: localCache[url],
        isLoading: false,
        error: null,
        hasError: false,
      });
      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      isLoading: false,
      data,
      hasError: false,
      error: null,
    });

    // Manejo del cache
    localCache[url] = data;
  };

  useEffect(() => {
    // useFetch mounted
    getFetchAsync();
    return () => {
      // useFetch unMounted
    };
  }, [url]);

  // Exponer la informacion necesaria
  return {
    data: state.data,
    hasError: state.hasError,
    isLoading: state.isLoading,
  };
};

// Thunks: Es una funcion que ejecuta una funcion asincrona que cuando termina,
// va a disparar una accion a nuestro reducer.

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log(page);
    dispatch(setPokemons({ page, pokemons: data.results }));
  };
};

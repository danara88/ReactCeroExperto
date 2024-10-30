import { useEffect, useState } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useDispatch, useSelector } from "react-redux";

const Pokemons = ({ isLoading = true, pokemons = [] }) => {
  if (isLoading) {
    return <></>;
  }

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(page));
  }, []);

  const handleNextPage = () => {
    const nextPage = page + 1;
    dispatch(getPokemons(nextPage));
  };

  const handlePrevPage = () => {
    let prevPage = page - 1;
    if (prevPage < 0) {
      prevPage = 0;
      return;
    }
    dispatch(getPokemons(prevPage));
  };

  return (
    <>
      <h1>Pokemon APp</h1>
      <hr />
      {isLoading && <span>Loading ...</span>}

      <Pokemons isLoading={isLoading} pokemons={pokemons} />

      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
      <hr></hr>
      <span>Page: {page + 1}</span>
    </>
  );
};

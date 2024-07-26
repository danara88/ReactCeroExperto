import { useCounter, useFetch } from '../hooks';
import { LoadinMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {
  const { counter, incrementCounter, decrementCounter } = useCounter(1);
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <div>Informacion del pokemon</div>
      <hr />

      {isLoading ? (
        <LoadinMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <pre>{data && data.name}</pre>

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrementCounter() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => incrementCounter()}>
        Siguiente
      </button>
    </>
  );
};

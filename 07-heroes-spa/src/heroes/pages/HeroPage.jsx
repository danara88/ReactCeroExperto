import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

/**
 * React va ejecutando el codigo linea por linea
 * y podemos evitar que llege al return <></>
 */
export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Solo se va a dispalrar si sus dependencias (id) cambian
  // Dependencias: id
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1); // Navega al historia anterior
  };

  // Si el hero no existe, redirigir al usuario
  if (!hero) {
    return <Navigate to="/marvel"></Navigate>;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First apperance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};

// Los propTypes nos ayuda a ponerle tipo a las properties
import PropTypes from 'prop-types';

/**
 * NOTA:
 * Si no hay alguna dependencia de el componente y de alguna variable,
 * poner las variables y funciones fuera del componente.
 */

/**
 * Podemos pasar variables al HTML mientras no sean objetos
 */
const newMessage = {
  message: 'Hello',
  title: 'Daniel',
};

/**
 * Si la function getName lo pongo dentro de FirstApp,
 * al momento de redibujar el componente, va a volver a especificar
 * en memoria el espacio de la funcion.
 */
const getName = (value) => value;

const FirstApp = ({ title, subTitle }) => {
  // if (!title) {
  //     throw new Error("Title no existe");
  // }

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>

      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <code>{JSON.stringify(newMessage)}</code>
      <div>First App</div>
      <div>{getName('Daniel Aranda')}</div>
      {/* <p>soy un subtitulo</p> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

// FirstApp.defaultProps = {
//   title: 'No hay titulo',
//   subTitle: 0,
// };

export default FirstApp;

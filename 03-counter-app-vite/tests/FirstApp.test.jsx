import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

/**
 * La prueba del snapshot se hace hasta que sabemos que el componente no recibira modificaciones.
 * Si el componente esta en desarrollo, no hacer la prueba del snapshot.
 */
describe('Pruebasd en <FirstApp />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Titulo';
  //   const subTitle = 'subtitulo';
  //   // Renderiza el componente en memoria
  //   const { container } = render(<FirstApp title={title} subTitle={subTitle} />);
  //   // Se toma una foto del componente
  //   // Si el componete cambia mucho, no es muy util el snapshot
  //   expect(container).toMatchSnapshot();
  // });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Esto es un titulo';
    const { getByText, getByTestId } = render(<FirstApp title={title} subTitle="Hello" />);
    // Assert
    expect(getByText('Esto es un titulo')).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrear el subtitulo enviado por props', () => {
    // Arrange
    const title = 'Titulo';
    const subTitle = 'Subtitulo';
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);
    // Act
    const resultTexts = getAllByText(subTitle);
    // Assert
    expect(resultTexts.length).toBe(2);
  });
});

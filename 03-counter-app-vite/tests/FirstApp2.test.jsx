import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

/**
 * La prueba del snapshot se hace hasta que sabemos que el componente no recibira modificaciones.
 * Si el componente esta en desarrollo, no hacer la prueba del snapshot.
 *
 * screen: Es el objeto que estamos renderizando. Obtenemos el screen actualizado despues de llamar el 'render'
 */
describe('Pruebasd en <FirstApp />', () => {
  const title = 'Este es un titulo';
  const subTitle = 'Esto es un subtitulo';

  test('debe de hacer match con el snapshot', () => {
    // Arrange
    const { container } = render(<FirstApp title={title} subTitle={subTitle} />);
    // Act & Assert
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Esto es un titulo"', () => {
    // Arrange
    render(<FirstApp title={title} subTitle={subTitle} />);
    // Act & Assert
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrar el titulo en un tag h1', () => {
    // Arrange
    render(<FirstApp title={title} subTitle={subTitle} />);
    // Act & Assert
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    // Arrange
    render(<FirstApp title={title} subTitle={subTitle} />);
    // Act
    const result = screen.getAllByText(subTitle);
    // Assert
    expect(result.length).toBe(2);
  });
});

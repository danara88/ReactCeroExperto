import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('CounterApp', () => {
  const initialValue = 0;

  test('debe hacer match con el snapshot', () => {
    // Arrange
    const { container } = render(<CounterApp value={initialValue} />);
    // Act & Assert
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el valor inicial de 100', () => {
    // Arrange
    render(<CounterApp value={100} />);
    // Act
    const result = screen.getByRole('heading', { level: 2 }).innerHTML;
    // Assert
    expect(parseInt(result)).toBe(100);
  });

  test('debe de incrementar con el boton +1', () => {
    // Arrange
    render(<CounterApp value={initialValue} />);
    const addButtonElement = screen.getByText('+1');
    // Act
    fireEvent.click(addButtonElement);
    const result = screen.getByRole('heading', { level: 2 }).innerHTML;
    // Assert
    expect(parseInt(result)).toBe(1);
  });

  test('debe de decrementar con el boton -1', () => {
    // Arrange
    render(<CounterApp value={initialValue} />);
    const minusButtonElement = screen.getByText('-1');
    // Act
    fireEvent.click(minusButtonElement);
    const result = screen.getByRole('heading', { level: 2 }).innerHTML;
    // Assert
    expect(parseInt(result)).toBe(-1);
  });

  test('debe de resetar con el boton "Reset"', () => {
    // Arrange
    render(<CounterApp value={initialValue} />);
    const resetButtonElement = screen.getByRole('button', { name: 'btn-reset' });
    const addButtonElement = screen.getByText('+1');
    // Act
    // screen.debug();
    fireEvent.click(addButtonElement);
    // screen.debug();
    fireEvent.click(resetButtonElement);
    const result = screen.getByRole('heading', { level: 2 }).innerHTML;
    // Assert
    expect(parseInt(result)).toBe(initialValue);
  });
});

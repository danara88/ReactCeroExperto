import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// Haz un mock completo de esta libreria (useFetch)
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHook', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 2,
    incrementCounter: mockIncrement,
    decrementCounter: mockDecrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should display the component', () => {
    // Arrange
    useFetch.mockReturnValue({
      data: [],
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    // Act & Assert
    expect(screen.getByText('Loading'));
    expect(screen.getByText('Informacion del pokemon'));
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should display a pokemon card', () => {
    // Arrange
    useFetch.mockReturnValue({
      data: {
        name: 'Test Name',
        sprites: {
          front_default: 'Testimg1.png',
          front_shiny: 'Testimg2.png',
          back_default: 'Testimg3.png',
          back_shiny: 'Testimg4,png',
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    // Act & Arrange
    expect(screen.getByText('Test Name'));
    expect(screen.getAllByRole('img'));
  });

  test('should call incrementCounter() when press next', () => {
    // Arrange
    useFetch.mockReturnValue({
      data: {
        name: 'Test Name',
        sprites: {
          front_default: 'Testimg1.png',
          front_shiny: 'Testimg2.png',
          back_default: 'Testimg3.png',
          back_shiny: 'Testimg4,png',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });

    fireEvent.click(nextButton);
    // Act && Arrange
    expect(mockIncrement).toHaveBeenCalled();
  });

  test('should call decrementCounter() when press prev button', () => {
    // Arrange
    useFetch.mockReturnValue({
      data: {
        name: 'Test Name',
        sprites: {
          front_default: 'Testimg1.png',
          front_shiny: 'Testimg2.png',
          back_default: 'Testimg3.png',
          back_shiny: 'Testimg4,png',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const prevButton = screen.getByRole('button', { name: 'Anterior' });

    fireEvent.click(prevButton);
    // Act && Arrange
    expect(mockDecrement).toHaveBeenCalled();
  });
});

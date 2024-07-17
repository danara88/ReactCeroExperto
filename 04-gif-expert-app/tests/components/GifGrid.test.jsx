import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// Mock custom hook
jest.mock('../../src/hooks/useFetchGifs');

const gifsMock = [
  {
    id: 'abc',
    title: 'Test1',
    url: 'https://test1.jpg',
  },
  {
    id: 'abcd',
    title: 'Test2',
    url: 'https://test2.jpg',
  },
];

describe('GifGrid', () => {
  const category = 'Test';
  test('should display loading when component initialize', () => {
    // Arrange
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    const loadingText = screen.getByText('Cargando...');
    // Act & Assert
    expect(loadingText).toBeTruthy();
  });

  test('should display items when gifs are loaded', () => {
    // Arrange
    useFetchGifs.mockReturnValue({
      gifs: gifsMock,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // Act & Assert
    expect(screen.getAllByRole('img').length).toBe(gifsMock.length);
  });
});

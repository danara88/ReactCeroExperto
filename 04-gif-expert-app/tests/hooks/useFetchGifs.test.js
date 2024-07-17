import { describe, expect, test } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {
  test('should return initial state', () => {
    // Arrange
    const { result } = renderHook(() => useFetchGifs('Punch'));
    const { gifs, isLoading } = result.current;
    // Act & Assert
    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of gifs and isLoading in false', async () => {
    // // Arrange
    // const { result } = renderHook(() => useFetchGifs('Punch'));
    // // Act
    // // Espera a que result.current.gifs.lenght seas mayor a 0
    // await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    // // Assert
    // const { gifs, isLoading } = result.current;
    // expect(gifs.length).toBeGreaterThan(0);
    // expect(isLoading).toBeFalsy();
  });
});

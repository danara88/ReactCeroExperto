import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { describe, test, expect } from '@jest/globals';

describe('useCounter', () => {
  test('should return the values by default', () => {
    // Arrange & Act
    const { result } = renderHook(() => useCounter()); // Renderizar un hook
    const { counter, incrementCounter, decrementCounter, resetCounter } = result.current;
    // Assert
    expect(counter).toBe(0);
    expect(incrementCounter).toEqual(expect.any(Function));
    expect(decrementCounter).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
  });

  test('should return the value of 100', () => {
    // Arrange & Act
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    // Assert
    expect(counter).toBe(100);
  });

  test('should increment the counter', () => {
    // Arrange
    const { result } = renderHook(() => useCounter(10));
    const { incrementCounter } = result.current;
    // Act
    act(() => {
      /* fire events that update state */
      incrementCounter(1);
      incrementCounter(2);
    });
    // Assert
    expect(result.current.counter).toBe(13);
  });

  test('should decrement the counter', () => {
    // Arrange
    const { result } = renderHook(() => useCounter(10));
    const { decrementCounter } = result.current;
    // Act
    act(() => {
      /* fire events that update state */
      decrementCounter(1);
      decrementCounter(1);
    });
    // Assert
    expect(result.current.counter).toBe(8);
  });

  test('should reset the counter', () => {
    // Arrange
    const { result } = renderHook(() => useCounter(10));
    const { resetCounter, incrementCounter } = result.current;
    // Act
    act(() => {
      /* fire events that update state */
      incrementCounter(1);
      incrementCounter(1);
      resetCounter(10);
    });
    // Assert
    expect(result.current.counter).toBe(10);
  });
});

import { describe, test, expect } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('useForm', () => {
  const initialForm = {
    name: '',
    email: '',
  };

  test('should return default values', () => {
    // Arrange & Act
    const { result } = renderHook(() => useForm(initialForm));
    // Assert
    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
      name: initialForm.name,
      email: initialForm.email,
    });
  });

  test('should change the form name', () => {
    // Arrange
    const newName = 'Juan';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    // Act
    act(() => {
      onInputChange({ target: { name: 'name', value: newName } });
    });
    // Assert
    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test('should reset the form', () => {
    // Arrange
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    // Act
    act(() => {
      onInputChange({ target: { name: 'name', value: 'Fernando' } });
      onResetForm();
    });
    // Assert
    expect(result.current.name).toBe('');
    expect(result.current.formState.name).toBe('');
  });
});

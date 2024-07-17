import { describe, expect, test, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory', () => {
  test('should change the value inside the input', () => {
    // Arrange
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    // Act
    fireEvent.input(input, { target: { value: 'Test' } });
    // Assert
    expect(input.value).toBe('Test');
  });

  test('should call onNewCategory when input has a value', () => {
    // Arrange
    const inputValue = 'Test';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); // add the aria label in the component
    // Act
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // Assert
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('');
  });

  test('should not call onNewCategory when input is empty', () => {
    // Arrange
    const inputValue = '';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    // Act
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // Assert
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});

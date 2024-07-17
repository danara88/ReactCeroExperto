import { describe, test, expect } from '@jest/globals';
import { GifExperApp } from '../src/GifExpertApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('GifExpertApp', () => {
  const appMainTitle = 'GifExpertApp';

  test('should display correct app main title', () => {
    // Arrange
    render(<GifExperApp />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    // Act
    // Assert
    expect(h1Element.innerHTML).toBe(appMainTitle);
  });

  test('should add category into array when it is not duplicated', () => {
    // Arrange
    const inputCategory = 'programming';
    render(<GifExperApp />);
    const addNewCategoryForm = screen.getByRole('form');
    const searchCategoryInput = screen.getByRole('textbox');
    // Act
    fireEvent.input(searchCategoryInput, { target: { value: inputCategory } });
    fireEvent.submit(addNewCategoryForm);
    // Assert
    expect(screen.getAllByText(inputCategory).length).toBe(1);
  });

  test('should not add category into array when it is duplicated', () => {
    // Arrange
    const inputCategory = 'programming';
    render(<GifExperApp />);
    const addNewCategoryForm = screen.getByRole('form');
    const searchCategoryInput = screen.getByRole('textbox');
    // Act
    fireEvent.input(searchCategoryInput, { target: { value: inputCategory } });
    fireEvent.submit(addNewCategoryForm);
    fireEvent.input(searchCategoryInput, { target: { value: inputCategory } });
    fireEvent.submit(addNewCategoryForm);
    // Assert
    expect(screen.getAllByText(inputCategory).length).not.toBeGreaterThan(1);
  });
});

import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks';

jest.mock('../../src/hooks/useTodo');

describe('TodoApp', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Todo 1',
        done: false,
      },
      {
        id: 2,
        description: 'Todo 2',
        done: true,
      },
    ],
    todoCount: 2,
    todosPending: 1,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test('should display the component', () => {
    // Arrange
    render(<TodoApp />);
    // Act & Arrange
    expect(screen.getByText('Todo 1')).toBeTruthy();
    expect(screen.getByText('Todo 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});

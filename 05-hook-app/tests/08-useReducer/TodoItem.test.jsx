import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todoMock = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should display correct todo class names', () => {
    // Arrange
    render(
      <TodoItem todo={todoMock} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
    );
    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');
    // Act & Assert
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should display the todo as completed', () => {
    // Arrange
    todoMock.done = true;
    render(
      <TodoItem todo={todoMock} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
    );
    const spanElement = screen.getByLabelText('span');
    // Act & Assert
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should call toggleTodo on double click event', () => {
    // Arrange
    render(
      <TodoItem todo={todoMock} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
    );
    const spanElement = screen.getByLabelText('span');
    // Act
    fireEvent.doubleClick(spanElement);
    // Assert
    expect(onToggleTodoMock).toHaveBeenCalledWith(todoMock.id);
  });

  test('should call deleteTodo on click event', () => {
    // Arrange
    render(
      <TodoItem todo={todoMock} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
    );
    const deleteButton = screen.getByRole('button');
    // Act
    fireEvent.click(deleteButton);
    // Assert
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todoMock.id);
  });
});

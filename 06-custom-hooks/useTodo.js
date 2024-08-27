import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

// Get todos from localstorage
const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Look into todos changes and then save new todos list in localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo into the state
  const handleNewTodo = (todo) => {
    const action = { type: '[TODO] Add Todo', payload: todo };
    dispatch(action);
  };

  // Delete todo from state by id
  const handleDeleteTodo = (id) => {
    const action = { type: '[TODO] Delete Todo', payload: id };
    dispatch(action);
  };

  // Toggle a todo from state by id
  const handleToggleTodo = (id) => {
    const action = { type: '[TODO] Toggle Todo', payload: id };
    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};

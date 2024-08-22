import { describe, test, expect } from '@jest/globals';
import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo TODO',
      done: false,
    },
  ];

  test('Should return initial state', () => {
    // Act
    const newState = todoReducer(initialState, {});
    // Assert
    // ToBe = Evalua que sea identico. Como el initialState pasa como referencia puedo usar el toBe.
    // El toBe evalua que sea el mismo tipo, el mismo objeto y que esta aputando al mismo lugar en memoria.
    // Recordar que los objetos pasan por referencia.
    expect(newState).toBe(initialState);
  });

  test('Should add a todo', () => {
    // Arrange
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New todo 2',
        done: false,
      },
    };
    // Act
    const newState = todoReducer(initialState, action);
    // Assert
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Should delete a todo', () => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: 1,
    };
    // Act
    const newState = todoReducer(initialState, action);
    // Assert
    expect(newState.length).toBe(0);
  });

  test('Should toggle a todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };
    // Act
    const newState1 = todoReducer(initialState, action);
    // Assert
    expect(newState1[0].done).toBeTruthy();
  });
});

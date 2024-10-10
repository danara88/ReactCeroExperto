import { authReducer, types } from '../../../src/auth';

describe('authReducer', () => {
  const initialState = {
    logged: false,
    user: null,
  };

  test('should return initial state', () => {
    // Act
    const newState = authReducer(initialState, {});

    // Assert
    expect(newState).toEqual(initialState);
  });

  test('should log user in and establish user value when sign in', () => {
    // Arrange
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: 'Test',
      },
    };

    // Act
    const newState = authReducer(initialState, action);

    // Assert
    expect(newState.user).not.toBeNull();
    expect(newState.user.id).toBe('ABC');
    expect(newState.user.name).toBe('Test');
    expect(newState.logged).toBe(true);
  });

  test('should unassign value to user and change logged value to false when sign out', () => {
    // Arrange
    const action = {
      type: types.logout,
    };

    // Act
    const newState = authReducer(initialState, action);

    // Assert
    expect(newState.user).toBeNull();
    expect(newState.logged).toBe(false);
  });
});

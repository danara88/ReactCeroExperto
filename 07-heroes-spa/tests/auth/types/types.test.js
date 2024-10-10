import { types } from '../../../src/auth';

describe('types', () => {
  test('should return default types', () => {
    // Act & Assert
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});

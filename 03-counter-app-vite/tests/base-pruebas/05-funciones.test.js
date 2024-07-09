import { describe, expect, test } from '@jest/globals';
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();
    // Cuando son objectos pasan por referencia, y se comparan en base a su ubicacion en memoria.
    // Usar el toEqual para comparar objetos.
    // Los primitivos se comparan en su valor.
    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    // Arrange
    const expectedObj = {
      uid: 'ABC567',
      username: 'Daniel',
    };
    // Act
    const result = getUsuarioActivo('Daniel');
    // Assert
    expect(result).toEqual(expectedObj);
  });
});

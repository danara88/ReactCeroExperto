import { describe, expect, test } from '@jest/globals';
import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe de retornar un objeto valido', () => {
    // Arrange
    const persona = {
      clave: '123',
      edad: 24,
    };
    const expectedResult = {
      nombreClave: persona.clave,
      anios: persona.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    // Act
    const result = usContext(persona);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});

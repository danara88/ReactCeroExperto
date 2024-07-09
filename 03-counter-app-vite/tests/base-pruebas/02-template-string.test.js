import { describe, expect, test } from '@jest/globals';
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Fernando"', () => {
    // Arrange
    const name = 'Fernando';
    // Act
    const message = getSaludo(name);
    // Assert
    expect(message).toBe(`Hola ${name}`);
  });
});

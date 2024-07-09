/* eslint-disable no-undef */
//import { describe, expect, test } from '@jest/globals';

describe('Primera prueba', () => {
  test('Esta prueba no debe fallar', () => {
    // Arrange
    const message1 = 'Hola mundo';
    // Act
    const message2 = message1.trim();
    // Assert
    expect(message1).toBe(message2);
  });
});

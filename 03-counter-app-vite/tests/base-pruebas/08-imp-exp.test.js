import { describe, expect, test } from '@jest/globals';
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por id', () => {
    // Arrange
    const id = 1;
    // Act
    const result = getHeroeById(id);
    // Assert
    // Podemos tener tanto expects como sean necesarios
    expect(result).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroeById debe de retornar undefined si no existe el id', () => {
    // Arrange
    const id = 100;
    // Act
    const result = getHeroeById(id);
    // Assert
    // Forma corta para evaluar de que esto sea: null, undefine o false
    expect(result).toBeFalsy();
  });

  describe('getHeroesByOwner', () => {
    test('getHeroesByOwner debe de retornar los heroes por owner', () => {
      // Act
      const result = getHeroesByOwner('DC');
      // Assert
      expect(result.length).toBe(3);
      // Otra manera flexible de hacerlo
      expect(result).toEqual(heroes.filter((h) => h.owner === 'DC'));
    });

    test('getHeroesByOwner debe de retornar los heroes por owner', () => {
      // Act
      const result = getHeroesByOwner('Marvel');
      // Assert
      expect(result.length).toBe(2);
      expect(result).toEqual([
        {
          id: 2,
          name: 'Spiderman',
          owner: 'Marvel',
        },
        {
          id: 5,
          name: 'Wolverine',
          owner: 'Marvel',
        },
      ]);
    });
  });
});

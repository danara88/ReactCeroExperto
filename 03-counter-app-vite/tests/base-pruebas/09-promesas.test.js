import { describe, expect, test } from '@jest/globals';
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    getHeroeByIdAsync(1).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      // Le dice a Jest que se espere hasta que el codigo termine
      done();
    });
  });

  test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => {
    getHeroeByIdAsync(100).catch((err) => {
      expect(err).toBe('No se pudo encontrar el héroe');
      // Le dice a Jest que se espere hasta que el codigo termine
      done();
    });
  });
});

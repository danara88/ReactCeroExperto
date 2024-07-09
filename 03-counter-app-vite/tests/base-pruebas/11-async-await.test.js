import { describe, expect, test } from '@jest/globals';
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
  test('getImagen debe retornar un error', async () => {
    const resp = await getImagen();

    expect(resp).toBe('No se encontro la imagen');
  });
});

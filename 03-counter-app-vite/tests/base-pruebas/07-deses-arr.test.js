import { describe, expect, test } from '@jest/globals';
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('debe de retornar un string y un numero', () => {
    const [item1, item2] = retornaArreglo();
    expect(item1).toBe('ABC');
    expect(item2).toBe(123);
    expect(typeof item1).toBe('string');
    expect(typeof item2).toBe('number');
    expect(item1).toEqual(expect.any(String));
  });
});

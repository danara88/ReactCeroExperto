// Importaciones por defecto de otro archivo
import heroesDefault, { heroes } from './data/heroes';

const getHeroeById = (id) => heroesDefault.find(h => h.id === id);

console.log(getHeroeById(2));

console.log(heroes);
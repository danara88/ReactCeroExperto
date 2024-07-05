import { heroes } from './data/heroes';

const getHeroeById = (id) => heroes.find(h => h.id === id);

console.log(getHeroeById(2));
// Desestructuracion
// Asignacion Desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Ignora los primeros 2 indicess
const [, , p3] = personajes;
console.log(p3);

const retornaArraglo = () => (['ABC', 123]);

const [, numeros] = retornaArraglo();
console.log(numeros);

// Tarea
const fakeState = (valor) => ([valor, () => console.log('Hello World')]);

const [, setNombre] = fakeState('Golu');

setNombre();
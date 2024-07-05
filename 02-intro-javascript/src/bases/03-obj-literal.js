// Objetos literales

/**
 * Cuando se crea cualquier objeto en JavaScript, 
 * tiene un protoType que es su ADN.
 * __proto__ Son una variedad de propiedades y metodos implicitos.
 */
const persona = {
    nombre: 'Tony',
    edad: 45,
    apellido: "Stark", // Buena practica finalziar con ,
};

console.log(persona);

// Los objetos pasan por referencia
// Aqui estamos copiando la referencia (posicion en memoria) de la variable persona
const persona2 = persona;

persona2.nombre = 'Peter';

console.log(persona2);

// Operador spread: Nos ayuda a extraer cada una de las propiedades
const personaSinReferencia = { ...persona };

personaSinReferencia.nombre = "Daniel";

console.log(personaSinReferencia);
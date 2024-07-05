// Desestructuracion
// Asignacion Desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tonny',
    edad: 45,
    clave: 'Ironman'
};

// Asignacion Desestructurante:
// Extraer del objeto las propiedades que necesito
const { nombre } = persona;
console.log(nombre);

// Renombrar una propiedad extraida
const { nombre: nombre2 } = persona;
console.log(nombre2);

// Desestructuracion en el argumento de una function
const retornarPersona = ({ nombre, edad }) => {
    console.log(nombre, edad);
}
console.log(retornarPersona(persona));

// Si la propiead rango no esta en el objeto, toma el que ponemos en el
// argumento de la funcion. Si esta definida en el objeto, entonces toma el valor
// que esta en el objeto.
const retornarPersona2 = ({ nombre, edad, rango = 'Capitan' }) => {
    console.log(nombre, edad, rango);
}
console.log(retornarPersona2(persona));

const contextTest = ({ clave, nombre, edad }) => ({
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 10,
        long: 11
    }
});

// Extraer objetos anidados
const { nombreClave, anios, latlng: { lat, long } } = contextTest(persona);
console.log(nombreClave, anios, lat, long);




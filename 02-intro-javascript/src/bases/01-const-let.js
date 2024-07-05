// Variables y constantes

/**
 * Nunca utilizar "var" en tus proyectos.
 * Usar: const y let.
 * En la mayoria del tiempo, en React utilizaremos const.
 * 
 * Siempre fijarse en la console y verificar que no tengamos errores o warnings. Al no tener warnings,
 * nos permite tener un codigo mas limpio y generar un bundle sin errores.
 * */ 
const nombre = 'Daniel';
const surname = "Aranda";

console.log(nombre, surname);

if (true) {
    // Permitido: No hay dos constantes en el mismo scope que se llamen igual.
    const nombre = "Javier";
    const surname = "Gutierres";

    console.log(nombre, surname);
}
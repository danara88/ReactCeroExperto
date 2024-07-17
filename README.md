# React: De cero a experto

Este es el repositorio de todas mis notas del curso "React: De cero a experto". Aqui encontrarás todos los proyectos realizados, notas y tips sobre react y demás tecnologías.

## Instalaciones necesarias

Ir al siguiente GIST para ver las instalaciones recomendadas.
[Instalaciones recomendadas](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95 "Instalaciones recomendadas")

## ¿Qué es React?

React es una libreria que nos permite crear apps. Al ser una libreria pudes pegar el html en tu pagina y empezar a trabjar con la librería.
React esta hecho para trabajar con aplicaciones de todo tipo de magnitud.

## Beneficios de React

- Declarativo: hace facil implementar patrones de diseño y crear UI interactivas.
- Eficiente: Cuando haces un cambi que impacta en el DOM, React unicamente hace el cambio en ese elemento.
- Predecible: Toda la información fluye en una sola via ayudandonos a prevenir mutaciones impredecibles.
- Componentes: Esta compuesta por componentes donde podemos armar nuestra aplicación con bloques.

## ¿Qués podemos hacer con React?

1. Server-side con Node
2. Aplicaciones moviles con Rect Native.
3. Crear aplicaciones de escritorio con Electron.

## ¿Qués JSX?

Es una mezcla entre JavaScript + XML
Ejemplo:

```javascript
// Codigo si no usaremaos JSX
const h1Tag = document.createElement("h1", null, `Hola soy, ${nombre}`);
```

## ¿Qué es Babel?

Babel nos permite utilizar características actuales de JS, y poder utilizar ese codigo en navegadores que aún no lo soportan.
React usa en el backgroun a Babel.

## La mejor documentacion para JavaScript

https://developer.mozilla.org/es/

## Formas de ejecutar React

1. Usando Create React App por medio de la CLI. Esta trabaja con webpack. [CreateReactApp](https://create-react-app.dev/ "Create React app")
2. Vite utiliza otra forma de trabajo en lugar de usar webpack. Es mucho mejor con Crate React App. [Vite](https://vitejs.dev/ "Vite")

## ¿Por qué Vite es más rapido que CRA?

El Hot Module Replacement en vite es mucho más rápido que CRA. Sin embargo, los proyectos de Vite son más crudos, por lo que debemos instalar mas paquetes y configurarlos.

## Unit testing

- Jest: https://jestjs.io/
- React testing library:https://testing-library.com/ (El mejor para hacer tests en componentes renderizados de react)

## Pasos para configurar el ambiente de pruebas con Jest para proyectos Vite

https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

## Puntos claves al hacer unit testin

1. Primero detectat la ruta crítica de tu aplciación.
2. Primero empezar con aquellos componentes con menos dependencias (componentes más pequeños)
3. No evaluar cosas que ya fueron evaluadas.

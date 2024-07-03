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

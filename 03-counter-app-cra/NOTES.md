# Create React App architectures

- package-lock.json: Indica el historial de cómo fueron construidos las dependencias usando npm.
- package.json: Estan todas las dependencias de desarrollo y de producción, al igual que algunos scripts. Cuidado al usar el script "eject" ya que descomprime todo el proyecto y es dificil de restaurarlo a su estado anterior.
- /public/manifest.json: Nos ayuda a configurar una PWA facilmente.
- /public/index.html: Es el archivo donde esta nuestro div "root" donde vamos a renderizar el contenido de nuestra app.
- /public/robots.txt: Configuracion para los bots de Google para indezar páginas.

## ¿Qué es el Tree Shacking?
Consiste cuando generamos nuestro bundle de producción, se van quitando dependencias que no se necesitan.

## Notas extras

- No es necesario que la extensión de un archivo se llame js o jsx, al final son lo mismo. Pero es buena practica que si usamos sintaxis de JSX renombremos la extension .jsx
- El index.js es el punto de entrada de nuestra app. Envolvemos con el tag React.StrictMode con el objetivo de que se detecten errores y evitar usar malas practicas.
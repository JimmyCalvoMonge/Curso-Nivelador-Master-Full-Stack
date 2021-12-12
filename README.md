# Tarea curso nivelador
## Master Full Stack Web Development

- Estudiante: Jimmy José Calvo Monge
- Fecha: 12 de Diciembre de 2021

### Requerimientos

- Instalar Node.js y NPM
- Los paquetes requeridos son `express`, `cowsay` y `path`

### Cómo usar la app

El propósito era crear una sencilla app que imprima en la consola el mensaje de `cowsay` que introduzca el usuario. Por simplicidad se ha decidido hacer una simple Get request (Es decir el usuario introducirá el mensaje en la url de la app).

Para correrla se debe ejecutar el comando `node app.js` (estando en el directorio del proyecto) y luego abrir la dirección `http://localhost:3000` en el navegador.

Para agregar un mensaje se debe cambiar la url en la parte de arriba incluyendo el mensaje a desplegar. Por ejemplo, si quiero que en mi consola salga la vaca diciendo el mensaje *Hola, soy una vaca* entonces debo cambiar la url por `http://localhost:3000/Hola, soy una vaca`.
En seguida saldrá en la consola en la que se ejecuta la app el dibujo de la vaca diciendo ese mismo mensaje.

Eso es todo :blush:
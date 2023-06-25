<em> #TO-DO List </em>

# Para ejecutar los test

npm install

Una vez instaladas las dependencias, ejecutamos los test con

npm test

# Para ejecutar el CLI
Primero:

npm install -g .

Con eso tendremos disponible el alias "todo" para nuestros comandos.

1. Escribe todo y dale enter
2. Te saldran las siguientes opciones:
    add <nombre de la tarea>: Se añade una tarea y muestra la lista por pantalla
    remove <id>: Se quita una tarea de la lista.
    complete <id>: Se marca la tarea como completada.
    show: Se muestran todas las tareas en la todo list.
    exit: Sale del comando todo.

# Para ejecutar el frontend

Para mostrar la página web, una vez instaladas las dependencias, por consola:

node app.js

Se cargará la pagina HTML a través de Express en 127.0.0.1:3000.

A partir de ahi se pueden utilizar los botones para ir probando la utilidad de la aplicación.

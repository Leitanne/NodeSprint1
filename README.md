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

Para mostrar la página web, una vez instaladas la dependencias, por consola:

node app.js

Se cargará la pagina HTML a través de Express.

ATENCIÓN: Se ha añadido manualmente en el archivo index.js la extensión ".js" al import. Esto es por un error que lanza
el HTML cuando se intenta ejecutar el script y no es capaz de procesar el import sin la extensión. Se está investigando.
Pero si el archivo se transpila otra vez, se debe añadir esta extensión a index.ts o dará error.
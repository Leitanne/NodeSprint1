<em> #TO-DO List </em>

# Para ejecutar los test

npm install

Una vez instaladas las dependencias, ejecutamos los test con

npm test

# Para ejecutar el frontend

Para mostrar la página web, una vez instaladas la dependencias, por consola:

node app.js

Se cargará la pagina HTML a través de Express en 127.0.0.1:3000.

ATENCIÓN: Se ha añadido manualmente en el archivo index.js la extensión ".js" al import. Esto es por un error que lanza
el HTML cuando se intenta ejecutar el script y no es capaz de procesar el import sin la extensión. Se está investigando.
Pero si el archivo se transpila otra vez, se debe añadir esta extensión a index.ts o dará error.

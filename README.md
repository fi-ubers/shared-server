[![Build Status](https://travis-ci.org/fi-ubers/shared-server.svg?branch=master)](https://travis-ci.org/fi-ubers/shared-server)
[![Coverage Status](https://coveralls.io/repos/github/fi-ubers/shared-server/badge.svg?branch=master)](https://coveralls.io/github/fi-ubers/shared-server?branch=master)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# shared-server

Aplicación en node.js con API RESTful para el shared-server de FiUber.

Leer los issues para una lista de tareas que realizar.

Connect to... [https://fiuber-shared-server.herokuapp.com/](https://fiuber-shared-server.herokuapp.com/)

## Para correr el servidor

Primero se debe instalar [NodeJS y npm](https://nodejs.org/en/download/) junto con [PostgreSQL](https://www.postgresql.org/download/).

Luego, se debe crear un archivo `.env` dentro del root directory del proyecto con el siguiente contenido:
+ DATABASE_URL=postgres://udivnwonhaaoem:5c055f1fa9f8d5f9273904625f1126865902047ae46a4bb0841200bd6d3c3d72@ec2-107-20-193-89.compute-1.amazonaws.com:5432/dfdidieplcj3ne
+ BUSINESS_USER_KEY=fiuber-shared-server-secret-business-user
+ APP_KEY=fiuber-shared-server-secret-app
+ LOG_LEVEL='debug'

Primero descargar todas las dependencias con `npm install`. Las dependencias descargadas se guardarán en la carpeta node_modules (incluida en el .gitignore).

Los paquetes necesarios para correr se especifican en el tag _dependencies_ del archivo _package.json_. Agregar ahí las dependencias nuevas preferentemente usando `npm install _pkgname_ --save` para que el paquete se instale y automáticamente se guarde en el .json.

### Levantar el servidor localmente

Para levantar localmente el servidor simplemente se puede usar `node ./src/index.js` o `npm start`. Para conectarse al servidor local usar _localhost_:5000 (o el puerto que se defina en index.js).

Para ejecutar los tests usar `npm test`.

Para correr el server se utiliza una base de datos local para development y otra para test. 
+ **Base de datos usada para development:** usuario y contraseña igual a *postgres*, siendo *shared_server* el nombre de la base de datos.
+ **Base de datos usada para test:** usuario igual a *postgres*, siendo *shared_server_test* el nombre de la base de datos.

### Levantar el servidor en Heroku

Si no se tiene ya un remote de Heroku se puede crear uno con `heroku create`. Esto agrega al repositorio un remote como origin, pero para enviar el código al servidor de Heroku (la primera vez que se ejecuta esto te indica una dirección a través de la cual acceder al servidor, se requiere estar logueado en Heroku antes).

Para ver los remotes disponibles usar `git remote -v` y para eliminar el remote de Heroku (si se elimina la aplicación definitivamente desde la cuenta de Heroku) usar `git remote rm heroku`.

Si se tiene un remote de Heroku, para hacer deploy al código y que se actualice el servidor hay que pushear contra ese remote (es como un repo, pero _en la nube_). Hacerlo con `git push heroku master`. Esto inmediatamente desencadena que se reinicie la app.

Usar `heroku ps:scale web=1` para crear un _dyno_ y `heroku ps:scale web=0` para suspender la ejecución del servidor. Con `heroku logs --tail` se puede ver el log de la aplicación en Heroku.

## Para realizar requests por consolas

Para poder probar los distintos endpoints de la API se puede utilizar un navegador (que realiza request de tipo GET) o bien usar el comando `curl` y hacerlo por consola. En particular la estructura del comando sería:

`curl -X _tipo_ -d _data_ http://someURL:somePort/someEndpoint`

Donde _tipo_ es POST, GET, etc; _data_ son los datos a mandar en la request (un string representando un .json o '' para no enviar nada).

## Para correr el servidor usando docker

Si se quiere utilizar docker primero debe instalarse [Docker](https://docs.docker.com/engine/installation/) y [Docker compose](https://docs.docker.com/compose/install/). Además se debe configurar para [correrlo sin sudo](https://docs.docker.com/engine/installation/linux/linux-postinstall/).

Para correr el servidor, haciendo build de las imágenes antes de que empiecen los containers, usar `docker-compose up --build shared-server` (ver [docker-compose up](https://docs.docker.com/compose/reference/up/) para más información). Para detener el container de la base de datos, usar `docker stop database`.

Si se quiere correr el servidor en segundo plano usar `docker-compose up -d --build shared-server`. Para detenerlo usar `docker-compose stop` y para iniciarlo nuevamente, `docker-compose start`. Si se quiere detener y eliminar el container usar `docker-compose down`.

Como comandos útiles: para ver únicamente los containers en ejecución usar el comando `docker ps`, mientras que `docker ps -a` muestra todos los containers y `docker images -a` muestra todas las imágenes. Para eliminar todos los containers e imágenes usar `docker rm $(docker ps -a -q)` y `docker rmi $(docker images -q)` respectivamente.

## Para generar la documentación del código fuente

Para generar automáticamente la documentación, simplemente se debe escribir `npm run jsdoc`. Luego de eso, en el directorio docs/ se creará una carpeta 'documentation'. Allí se podrá acceder a index.html para leer la documentación del server.


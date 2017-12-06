[![Build Status](https://travis-ci.org/fi-ubers/shared-server.svg?branch=master)](https://travis-ci.org/fi-ubers/shared-server)
[![Coverage Status](https://coveralls.io/repos/github/fi-ubers/shared-server/badge.svg?branch=master)](https://coveralls.io/github/fi-ubers/shared-server?branch=master)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Manual de Instalación - Shared Server

Aplicación en Node.js que utiliza Express para la creación de una API RESTful para el Shared Server de Fiuber App. Utiliza PostgreSQL como base de datos y Angular para el desarrollo de la aplicación web.

Connect to... [https://fiuber-shared-server.herokuapp.com/](https://fiuber-shared-server.herokuapp.com/)

## Para correr el servidor

#### Requerimientos

Primero se debe tener instalado:
+ [Node.js y npm](https://nodejs.org/en/download/)
+ [PostgreSQL](https://www.postgresql.org/download/)
+ [Git](https://git-scm.com/downloads) 

Se debe hacer `git clone` del repositorio.

Luego se debe crear un archivo `.env` dentro del root directory del proyecto con el siguiente contenido:
+ BUSINESS\_USER\_KEY=fiuber-shared-server-secret-business-user
+ APP\_KEY=fiuber-shared-server-secret-app
+ LOG\_LEVEL='info' *(o el que prefiera entre error, warn, info o debug)*

#### Dependencias

Para ejecutar el servidor se deben descargar previamente todas las dependencias. Para ello usar `npm install`. Las dependencias instaladas se guardarán en la carpeta node\_modules (incluida en el .gitignore).

Los paquetes necesarios para correr la aplicación se especifican en el tag _dependencies_ del archivo _package.json_. Agregar allí las dependencias nuevas preferentemente usando `npm install _pkgname_ --save` para que el paquete se instale y automáticamente se guarde en el .json.

#### Bases de datos utilizadas

Para correr el server se utiliza una base de datos local para development y otra para test. 
+ **Base de datos usada para development:** usuario y contraseña igual a *postgres*, siendo *shared_server* el nombre de la base de datos.
+ **Base de datos usada para test:** usuario igual a *postgres*, siendo *shared_server_test* el nombre de la base de datos.

Para la creación de la base de datos y administración de las tablas es útil el uso de *pgAdmin III*.

### Levantar el servidor localmente

Para levantar localmente el servidor simplemente usar `node ./src/index.js` o `npm start`. Para conectarse al servidor local usar _localhost_:5000.

Para terminar la ejecución del servidor ingresar `Ctrl + C`.

Para ejecutar los tests utilizar el comando `npm test`.

### Levantar el servidor en Heroku

Si no se tiene agregado el remote de Heroku correspondiente a la aplicación, se puede agregar al repositorio local con el comando `heroku git:remote -a fiuber-shared-server`.

Para ver los remotes disponibles usar `git remote -v` y para eliminar el remote de Heroku (si se elimina la aplicación definitivamente desde la cuenta de Heroku) usar `git remote rm heroku`.

Si se tiene un remote de Heroku, para hacer deploy al código y que se actualice el servidor hay que pushear contra ese remote (es como un repo, pero _en la nube_). Hacerlo con `git push heroku master`.

Usar `git push heroku branch-name:master` cuando se necesite hacer deploy desde otra branch (que no sea master).

Usar `heroku ps:scale web=1` para crear un _dyno_ y `heroku ps:scale web=0` para suspender la ejecución del servidor. Con `heroku logs --tail` se puede ver el log de la aplicación en Heroku.

## Para realizar requests por consolas

Para poder probar los distintos endpoints de la API se puede utilizar un navegador (que realiza request de tipo GET), usar [Postman](https://www.getpostman.com/) o bien usar el comando `curl` y hacerlo por consola. En particular la estructura del comando sería:

`curl -X _tipo_ -d _data_ http://someURL:somePort/someEndpoint`

Donde _tipo_ es POST, GET, etc; _data_ son los datos a mandar en la request (un string representando un .json o '' para no enviar nada).

## Para correr el servidor usando docker

Si se quiere utilizar docker primero debe instalarse [Docker](https://docs.docker.com/engine/installation/) y [Docker compose](https://docs.docker.com/compose/install/). Además se debe configurar para [correrlo sin sudo](https://docs.docker.com/engine/installation/linux/linux-postinstall/).

Para correr el servidor usar `docker-compose up --build shared-server` (ver [docker-compose up](https://docs.docker.com/compose/reference/up/) para más información). Se puede detener la ejecución utilizando `Ctrl + C`. Para detener el container de la base de datos, usar `docker stop database`.

Si se quiere correr el servidor **en segundo plano** usar `docker-compose up -d --build shared-server`. Para detenerlo usar `docker-compose stop` y para iniciarlo nuevamente, `docker-compose start`. Si se quiere detener y eliminar el container usar `docker-compose down`.

Como comandos útiles: 
+ Usar el comando `docker ps` para ver únicamente los containers en ejecución.
+ Usar `docker ps -a` para ver todos los containers.
+ Usar `docker images -a` para ver todas las imágenes. 
+ Usar `docker rm $(docker ps -a -q)` y `docker rmi $(docker images -q)` para eliminar todos los containers e imágenes, respectivamente.

## Para generar la documentación del código fuente

Para generar automáticamente la documentación, simplemente se debe escribir `npm run jsdoc`. Luego de eso, en el directorio docs/ se creará una carpeta *documentation*. Allí se podrá acceder a *index.html* para leer la documentación del server.

## Para ejecutar ESLint

Para ejecutar ESLint usar `npm run lint`.



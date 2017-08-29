[![Build Status](https://travis-ci.org/fi-ubers/shared-server.svg?branch=master)](https://travis-ci.org/fi-ubers/shared-server)
[![Coverage Status](https://coveralls.io/repos/github/fi-ubers/shared-server/badge.svg?branch=master)](https://coveralls.io/github/fi-ubers/shared-server?branch=master)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# shared-server

Aplicación en node.js con API RESTful para el shared-server de FiUber.

Leer los issues para una lista de tareas que realizar.

## Para correr el servidor

Primero descargar todas las dependencias con `npm install`. Las dependencias descargadas se guardarán en la carpeta node_modules (incluida en el .gitignore).

Los paquetes necesarios para correr se especifican en el tag _dependencies_ del archivo _package.json_. Agregar ahí las dependencias nuevas preferentemente usando `npm install _pkgname_ --save` para que el paquete se instale y automáticamente se guarde en el .json.

### Levantar el servidor localmente

Para levantar localmente el servidor simplemente se puede usar `node ./src/index.js` o `npm start`. Para conectarse al servidor local usar _localhost_:5000 (o el puerto que se defina en index.js).

### Levantar el servidor en Heroku

Si no se tiene ya un remote de Heroku se puede crear uno con `heroku create`. Esto agrega al repositorio un remote como origin, pero para enviar el código al servidor de Heroku (la primera vez que se ejecuta esto te indica una dirección a través de la cual acceder al servidor, se requiere estar logueado en Heroku antes).

Para ver los remotes disponibles usar `git remote -v` y para eliminar el remote de Heroku (si se elimina la aplicación definitivamente desde la cuenta de Heroku) usar `git remote rm heroku`.

Si se tiene un remote de Heroku, para hacer deploy al código y que se actualice el servidor hay que pushear contra ese remote (es como un repo, pero _en la nube_). Hacerlo con `git push heroku master`. Esto inmediatamente desencadena que se reinicie la app.

Usar `heroku ps:scale web=1` para crear un _dyno_ y `heroku ps:scale web=0` para suspender la ejecución del servidor. Con `heroku logs --tail` se puede ver el log de la aplicación en Heroku.

## Para realizar requests por consolas

Para poder probar los distintos endpoints de la API se puede utilizar un navegador (que realiza request de tipo GET) o bien usar el comando `curl` y hacerlo por consola. En particular la estructura del comando sería:

`curl -X _tipo_ -d _data_ http://someURL:somePort/someEndpoint`

Donde _tipo_ es POST, GET, etc; _data_ son los datos a mandar en la request (un string representando un .json o '' para no enviar nada).


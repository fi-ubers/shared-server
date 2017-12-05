# Definición de arquitectura/diseño de la aplicación

El Shared Server es el responsable de almacenar y administrar los datos de los usuarios de la aplicación FIUBER (conductores y pasajeros) y de los usuarios de negocio. 

Se encarga de administrar los application servers y de la cotización de los viajes de la aplicación, además de realizar los cobros y mantener el balance de los usuarios.

Proporciona una aplicación web para que los usuarios de negocio puedan utilizar ciertos servicios de acuerdo a su rol (*user*, *admin* o *manager*). Por otro lado, los Application Servers podrán comunicarse y utilizar endpoints definidos en el Shared Server de acuerdo con la [Restful API](https://github.com/fi-ubers/shared-server/blob/master/docs/llevameAPI.yml) implementada por este último.

## Modelo de datos

Se indican a continuación los datos que se almacenan en cada tabla perteneciente a la base de datos del Shared Server.

Cada tabla tiene su clave primaria y en algunos casos hay claves foráneas. Se indicó la opción *ON DELETE CASCADE*, en la cual, si se elimina una fila con una clave a la que hacen referencia otras filas existentes en otras tablas, las mismas también serán eliminadas para mantener la consistencia.

### Application servers

Para cada application server se almacenan los siguientes datos en la tabla *app_servers* dentro de la base de datos:
+ Id *(Clave primaria)*
+ _ref
+ Created by
+ Created time
+ Name
+ Last connection

Para poder resetear el token de los application servers a partir de su identificador se agregó la tabla *app_tokens* que contiene los datos:
+ Id *(Clave primaria y clave foránea que referencia al id en app_servers)*
+ Token

Para poder revocar un token se almacenó en otra tabla, *blacklist*, el jti que es el identificador único de cada token.

### Usuarios de negocio

Para cada usuario de negocio se almacenan los siguientes datos en la tabla *business_users*:
+ Id *(Clave primaria)*
+ _ref
+ Username *(único)*
+ Password
+ Name
+ Surname
+ Roles

### Usuarios de la aplicación

Se almacenan los siguientes datos en la tabla *application_users*, correspondientes a cada pasajero/conductor:
+ Id *(Clave primaria)*
+ _ref
+ Application owner
+ Type
+ Cars
+ Username *(único)*
+ Password
+ Fb
+ Name
+ Surname
+ Country
+ Email *(único)*
+ Birthdate
+ Images
+ Balance

Los autos pertenecientes a los conductores de la aplicación se almacenan en otra tabla, *cars*, para que cada uno tenga un identificador único. La tabla mencionada almacena los siguientes datos:
+ Id
+ _ref
+ Owner *(Clave foránea que referencia al id en application_users)*
+ Properties

### Viajes

Para cada viaje se almacenan los siguientes datos en la tabla *trips*:
+ Id *(Clave primaria)*
+ Application owner
+ Driver *(Clave foránea que referencia al id en application_users)*
+ Passenger *(Clave foránea que referencia al id en application_users)*
+ Start
+ End
+ Total time
+ Wait time
+ Travel time
+ Distance
+ Route
+ Cost
+ Paymethod

### Transacciones

Para cada transacción se almacenan los siguientes datos en la tabla *transactions*:
+ Id *(Clave primaria)*
+ Trip
+ Timestamp
+ Cost
+ Description
+ Data
+ User *(Clave foránea que referencia al id en application_users)*

### Reglas

Para cada regla se almacenan los siguientes datos en la tabla *rules*:
+ Id *(Clave primaria)*
+ _ref
+ Language
+ Last commit
+ Blob
+ Active

Como también es necesario almacenar la información sobre cada commit y la regla en el estado del commit efectuado, se guarda lo siguiente en la tabla *commits*:
+ Id *(Clave primaria)*
+ Rule
+ Rule id *(Clave foránea que referencia al id en rules)*

## Diseño/Arquitectura

Al momento de realizar el proyecto, se pensó en separar el código correspondiente a la interfaz web desarrollada con Angular (ubicado dentro del directorio *client*), y el código perteneciente al server (que se encuentra dentro del directorio *src* junto con los tests, controladores, middlewares utilizados y la definición de los endpoints, entre otras funcionalidades). Se destacan los siguientes módulos/files:
+ *src/index.js*: utiliza *Express* para iniciar el Shared Server, permitiendo que se quede escuchando al puerto indicado. También se indica el middleware y las rutas a usar.
+ *src/logger.js*: se encuentra la configuración del Logger, tanto para los mensajes por consola como para el file que se crea. Lo que se decidió fue crear un archivo de log por día para facilitar la lectura y encontrar fácilmente los errores surgidos. Cada archivo creado tiene su correspondiente fecha.
+ *src/routes/api.js*: utiliza el *Express* router para definir todos los endpoints que permitirán la comunicación con los App Servers, especificados en la API mencionada al inicio del documento. Se definen los métodos HTTP (GET, POST, PUT, DELETE) para cada endpoint y la función que se encargará de realizar lo pedido sobre los usuarios de negocio, usuarios de la aplicación, paymethods, viajes, servers y reglas.
+ *src/middlewares/verifyToken.js*: se encarga de verificar que el Application o Business Token ingresado vía query, como se indica en la API, sea válido. Para poder distinguir entre ambos tipos de token y proporcionar mayor seguridad se decidió que sus claves sean distintas.
+ *src/middlewares/authCheck.js*: se ocupa de determinar si el usuario de negocio que realizó la petición se encuentra autorizado, para ello verifica que tenga el rol requerido.
+ *src/middlewares/revokedTokenCheck.js*: controla que el token ingresado no se encuentre revocado. Para ello utiliza la tabla *blacklist* mencionada en la sección anterior.

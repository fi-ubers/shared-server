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



# Definición de arquitectura/diseño de la aplicación - Shared Server

## Introducción

Este proyecto consiste de un servidor Web HTTP accesible a través de una REST API para la aplicación **FIUBER**. **FIUBER** es una aplicación intencionada para conectar a los pasajeros con los conductores de vehículos que ofrecen servicio de transporte particular. Esta aplicación permite a los potenciales pasajeros: obtener estimaciones de costo un viaje antes de realizarlo, elegir al conductor que desean, solicitar al chofer y una vez que terminan el viaje realizar el pago utilizando cualquiera de los medios de pago disponibles. 

Este sistema se basa en un diseño de 3 capas que permite el funcionamiento de la aplicación:

+ [Cliente Android](https://github.com/fi-ubers/client) 
+ [Application Server](https://github.com/fi-ubers/app-server)
+ **Shared Server**

Este proyecto provee una implementación para la capa de Shared Server del sistema. En el archivo *llevameAPI.yml* puede encontrarse documentación detallada sobre la interfaz provista por el servidor para que los Application Servers puedan comunicarse. 

## Relación con el *Cliente Android* y el *Application Server*

Para implementar esta aplicación se utilizó una arquitectura de 3 capas (3-Tier), donde el *App Server* representa la capa lógica o de negocios. 

La capa de datos es provista por el *Shared Server* y es allí donde se almacenan y administran los datos de los usuarios de la aplicación, tanto conductores como pasajeros, los usuarios de negocio, los viajes y los servidores activos. Se encarga de administrar a los Application Servers y de la cotización de los viajes de la aplicación, además de realizar los cobros y mantener el balance de los usuarios.

Proporciona una aplicación web para que los usuarios de negocio puedan utilizar ciertos servicios de acuerdo a su rol (*user*, *admin* y/o *manager*). Por otro lado, los Application Servers podrán comunicarse y utilizar endpoints definidos en el Shared Server de acuerdo con la [RESTful API](https://github.com/fi-ubers/shared-server/blob/master/docs/llevameAPI.yml) implementada por este último.

La aplicación está pensada para permitir la coexistencia de múltiples *App Servers* que utilizan al *Shared Server* como servicio web para almacenar datos y como punto de acceso a la API de pagos, que se provee de forma externa.

Diagrama general de capas:

![alt text](https://github.com/fi-ubers/shared-server/blob/master/docs/ArchDiagram.png)

A continuación se detalla el modelo de datos utilizado en el *Shared Server* así como los aspectos clave de la arquitectura y diseño.

## Modelo de datos

Se indican a continuación los datos que se almacenan en cada tabla perteneciente a la base de datos del Shared Server.

Cada tabla tiene su clave primaria y en algunos casos se incluyeron claves foráneas. Para aquellas claves se indicó la opción *ON DELETE CASCADE*, en la cual, si se elimina una fila con una clave a la que hacen referencia otras filas existentes en otras tablas, las mismas también serán eliminadas para mantener la consistencia.

### Application servers

Para cada application server se almacenan los siguientes datos en la tabla *app_servers* dentro de la base de datos:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Created by** : string
+ **Created time** : timestamp
+ **Name** : string
+ **Last connection** : timestamp

Para poder resetear el token de los application servers a partir de su identificador se agregó la tabla *app_tokens* que contiene los datos:
+ **Id** : integer - *Clave primaria y clave foránea que referencia al id en app_servers*
+ **Token** : string

Para poder revocar un token se almacenó en otra tabla, *blacklist*, el jti que es el identificador único de cada token.
+ **Jti** : string - *Clave primaria*

### Usuarios de negocio

Para cada usuario de negocio se almacenan los siguientes datos en la tabla *business_users*:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Username** : string - *Único*
+ **Password** : string
+ **Name** : string
+ **Surname** : string
+ **Roles** : text[] - *Opciones: admin, manager, user*

### Usuarios de la aplicación

Se almacenan los siguientes datos en la tabla *application_users*, correspondientes a cada pasajero/conductor:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Application owner** : string
+ **Type** : string
+ **Cars** : json[] - *Información de un auto (ver definición)*
+ **Username** : string - *Único*
+ **Password** : string
+ **Fb** : json
	+ **User id** : string
	+ **Auth Token** : string
+ **Name** : string
+ **Surname** : string
+ **Country** : string
+ **Email** : string - *Único*
+ **Birthdate** : string
+ **Images** : text[]
+ **Balance** : json[]
	+ **Items**:
		+ **Currency** : string
		+ **Value** : integer

Los autos pertenecientes a los conductores de la aplicación se almacenan en otra tabla, *cars*, para que cada uno tenga un identificador único. La tabla mencionada almacena los siguientes datos:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Owner** : integer - *Clave foránea que referencia al id en application_users*
+ **Properties** : json[]
	+ **Items**:
		+ **Name** : string
		+ **Value** : string

### Viajes

Para cada viaje se almacenan los siguientes datos en la tabla *trips*:
+ **Id** : integer - *Clave primaria*
+ **Application owner** : string
+ **Driver** : integer - *Clave foránea que referencia al id en application_users*
+ **Passenger** : integer - *Clave foránea que referencia al id en application_users*
+ **Start** : json
	+ **Address** : json
		+ **Street** : string
		+ **Location** : json
			+ **Lat** : integer
			+ **Lon** : integer
	+ **Timestamp** : timestamp
+ **End** : json
	+ **Address** : json
		+ **Street** : string
		+ **Location** : json
			+ **Lat** : integer
			+ **Lon** : integer
	+ **Timestamp** : timestamp
+ **Total time** : integer
+ **Wait time** : integer
+ **Travel time** : integer
+ **Distance** : integer
+ **Route** : json[]
	+ **Items**:
		+ **Address** : json
			+ **Street** : string
			+ **Location** : json
				+ **Lat** : integer
				+ **Lon** : integer
		+ **Timestamp** : timestamp
+ **Cost** : json
	+ **Currency** : string
	+ **Value** : integer
+ **Paymethod** : json
	+ **Paymethod** : string
	+ **Parameters** : json
	
### Transacciones

Para cada transacción se almacenan los siguientes datos en la tabla *transactions*:
+ **Id** : integer - *Clave primaria*
+ **Trip** : integer
+ **Timestamp** : timestamp
+ **Cost** : json
	+ **Currency** : string
	+ **Value** : integer
+ **Description** : string
+ **Data** : json
+ **User** : integer - *Clave foránea que referencia al id en application_users*

### Reglas

Para cada regla se almacenan los siguientes datos en la tabla *rules*:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Language** : string
+ **Last commit** : json
	+ **Author** : json - *Información de un usuario de negocio (ver definición)*
	+ **Message** : string
	+ **Timestamp** : timestamp
+ **Blob** : text
+ **Active** : boolean

Como también es necesario almacenar la información sobre cada commit y la regla en el estado del commit efectuado, se guarda lo siguiente en la tabla *commits*:
+ **Id** : integer - *Clave primaria*
+ **Rule** : json - *Información de una regla (ver definición)*
+ **Rule id** : integer - *Clave foránea que referencia al id en rules*

## Diseño/Arquitectura

Al momento de realizar el proyecto se buscó separar el código correspondiente a la interfaz web desarrollada con Angular, y el código perteneciente al server. Los tests realizados se pueden encontrar en *src/test*.

Se destacan los siguientes módulos/directorios:

### Back-end

Todo el código relevante a las distintas funcionalidades de la aplicación se encuentra dentro del directorio *src*: incluye la implementación de los controladores de los recursos, middlewares utilizados, pruebas realizadas, configuración y conexión con la base de datos, y la definición de cada endpoint especificado en la API.

+ *src/index.js* : utiliza *Express* para iniciar el Shared Server, y permitir que se mantenga escuchando al puerto indicado. También se indica el middleware y las rutas a usar (URL paths).

+ *src/logger.js* : se encuentra la configuración del Logger, tanto para los mensajes por consola como para el file que se crea. Lo que se decidió fue crear un archivo de log por día para facilitar la lectura y encontrar fácilmente los errores que surgen. Cada archivo creado tiene su correspondiente fecha.

+ *src/routes/api.js* : utiliza el *Express* router para definir todos los endpoints que permitirán la comunicación con los App Servers, especificados en la API mencionada al inicio del documento. Se definen los métodos HTTP (GET, POST, PUT, DELETE) para cada endpoint y la función que se encargará de realizar lo pedido sobre los usuarios de negocio, usuarios de la aplicación, paymethods, viajes, servers y reglas.

+ *src/middlewares* : se encuentra el código correspondiente a los middlewares que intervienen cuando un application server realiza requests sobre los endpoints.

	+ *verifyToken.js* : se encarga de verificar que el Application o Business Token ingresado vía query, como se indica en la API, sea válido. Para poder distinguir entre ambos tipos de token y proporcionar mayor seguridad se decidió que sus claves sean distintas. Para aquellos endpoints que pueden ser accedidos mediante ambos tipos de token, se verifica primero el Business Token (y que cumpla con el rol requerido) y luego se implementó un middleware que, en caso de que la clave del token no coincida con la esperada, verifica si se trata de un Application Token válido y en ese caso accede a la función que implementa el endpoint. 

	+ *authCheck.js* : se ocupa de determinar si el usuario de negocio que realizó la petición se encuentra autorizado, para ello verifica que tenga el rol requerido.

	+ *revokedTokenCheck.js* : controla que el token ingresado no se encuentre revocado. Para ello utiliza la tabla *blacklist* mencionada en la sección anterior.

+ *src/services/rulesService.js* : inicializa el motor de reglas usando las reglas recibidas y luego las aplica sobre el fact para obtener el resultado.

+ *src/db* : dentro del directorio se encuentra la configuración para cada base de datos usada (para test, development y production). 

	+ En *knexfile.js* figura el string de conexión de cada base de datos, el cliente a utilizar (*postgres*), junto con los directorios para migraciones y seeds. 
	
	+ Cada archivo en *migrations* contiene las tablas a crear dentro de la database, indicando para cada una de ellas las columnas y el tipo de dato esperado en las mismas. 
	
	+ En *seeds* se encuentran datos para llenar la base de datos. Esto último se utilizó para los tests y para colocar las reglas pedidas en el enunciado del trabajo dentro de la base de datos en Heroku.
	
+ *src/controllers* : dentro del directorio se encuentran todos los controladores: aquellos que actúan sobre los recursos, los efectúan consultas y los que se encargan de enviar la respuesta en el formato especificado por la API. 

	+ Los módulos *businessUsersController*, *paymethodsController*, *rulesController*, *serversController*, *tripsController* y *usersController* implementan las funciones utilizadas por los endpoints definidos en *src/routes/api.js*: crean, eliminan, actualizan el recurso que administran y también listan todos los recursos pedidos, entre otras funcionalidades. 
	
	+ Los mencionados anteriormente dependen de los módulos *queryController*, *responseController*, *errorController*: el primero interactúa con la base de datos, efectúando las consultas necesarias en cada caso; el segundo se ocupa de enviar las respuestas de cada petición realizada con el código y formato indicado en la API; el tercero se ocupa de enviar el JSON con el error correspondiente, incluyendo su código y mensaje. 
	
	+ El módulo *tokenController* proporciona funciones para generar Business y Application Tokens, validar las credenciales del usuario de negocio y generar el token para usar la API de Pagos; *paymentController* crea un pago haciendo una request a la API de Pagos; y *balanceController* proporciona una función para manejar el balance del usuario.


###### Algunas aclaraciones

- **Servers**

	Para mostrar las estadísticas de los Application Servers se consideró como información la cantidad de requests realizados con éxito por cada uno, la cantidad de usuarios creados y eliminados, la cantidad de autos creados y eliminados y finalmente, la cantidad de viajes creados.

	Con respecto al servicio de estado actual de los App Servers, se consideró que un servidor se encontraba *activo* si su última conexión fue dentro de los últimos 10 minutos. Si nunca hizo *ping* (y por lo tanto, no figura una última conexión) se lo considera directamente como *inactivo*.

- **Rules**

	Se utilizó *Node Rules* como motor para las reglas. Al implementar el cálculo del costo/ganancia de un viaje se decidió distinguir entre el costo del viaje que abona el pasajero y la ganancia del conductor debido, por un lado, a que las reglas indicadas en el enunciado consideraban distintos valores mínimos para un determinado viaje, y por otro lado, que en caso de que el pasajero tuviera mail con dominio *@llevame.com*, el conductor no recibiría ganancia ya que el costo es cero.

	Por otra parte, al hacer la estimación del costo no es obligatorio recibir la distancia por lo que en esos casos se estima la distancia usando las coordenadas de *start* y *end* que deben estar, junto con el módulo *geolib*.

	El fact utilizado para calcular el costo tiene la siguiente estructura:

	```json
	"fact": {
	  "trips": [
		{
		  "id": "string",
		  "applicationOwner": "string",
		  "driver": "string",
		  "passenger": "string",
		  "start": {
		    "address": {
		      "street": "string",
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      }
		    },
		    "timestamp": "number"
		  },
		  "end": {
		    "address": {
		      "street": "string",
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      }
		    },
		    "timestamp": "number"
		  },
		  "totalTime": "number",
		  "waitTime": "number",
		  "travelTime": "number",
		  "distance": "number",
		  "route": [
		    {
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      },
		      "timestamp": "number"
		    }
		  ],
		  "cost": {
		    "currency": "string",
		    "value": "number"
		  }
		}
	  ],
	  "userTrip": {
		"id": "string",
		"applicationOwner": "string",
		"driver": "string",
		"passenger": "string",
		"start": {
		  "address": {
		    "street": "string",
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    }
		  },
		  "timestamp": "number"
		},
		"end": {
		  "address": {
		    "street": "string",
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    }
		  },
		  "timestamp": "number"
		},
		"totalTime": "number",
		"waitTime": "number",
		"travelTime": "number",
		"distance": "number",
		"route": [
		  {
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    },
		    "timestamp": "number"
		  }
		],
		"cost": {
		  "currency": "string",
		  "value": "number"
		},
		"paymethod": {
		  "paymethod": "string",
		  "parameters": {}
		}
	  },
	  "appServer": "number",
	  "user": {
		"id": "string",
		"_ref": "string",
		"applicationOwner": "string",
		"type": "string",
		"cars": [
		  {
		    "id": "string",
		    "_ref": "string",
		    "owner": "string",
		    "properties": [
		      {
		        "name": "string",
		        "value": "string"
		      }
		    ]
		  }
		],
		"username": "string",
		"name": "string",
		"surname": "string",
		"country": "string",
		"email": "string",
		"birthdate": "string",
		"images": [
		  "string"
		],
		"balance": [
		  {
		    "currency": "string",
		    "value": "number"
		  }
		]
	  },
	  "cost": 0,
	  "discounts": [],
	  "surcharges": [],
	  "canTravel": "boolean",
	  "firstTrip": "boolean"
	}
	```

	El fact utilizado para calcular la ganancia tiene la siguiente estructura:

	```json
	"fact": {
	  "trips": [
		{
		  "id": "string",
		  "applicationOwner": "string",
		  "driver": "string",
		  "passenger": "string",
		  "start": {
		    "address": {
		      "street": "string",
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      }
		    },
		    "timestamp": "number"
		  },
		  "end": {
		    "address": {
		      "street": "string",
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      }
		    },
		    "timestamp": "number"
		  },
		  "totalTime": "number",
		  "waitTime": "number",
		  "travelTime": "number",
		  "distance": "number",
		  "route": [
		    {
		      "location": {
		        "lat": "number",
		        "lon": "number"
		      },
		      "timestamp": "number"
		    }
		  ],
		  "cost": {
		    "currency": "string",
		    "value": "number"
		  }
		}
	  ],
	  "userTrip": {
		"id": "string",
		"applicationOwner": "string",
		"driver": "string",
		"passenger": "string",
		"start": {
		  "address": {
		    "street": "string",
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    }
		  },
		  "timestamp": "number"
		},
		"end": {
		  "address": {
		    "street": "string",
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    }
		  },
		  "timestamp": "number"
		},
		"totalTime": "number",
		"waitTime": "number",
		"travelTime": "number",
		"distance": "number",
		"route": [
		  {
		    "location": {
		      "lat": "number",
		      "lon": "number"
		    },
		    "timestamp": "number"
		  }
		],
		"cost": {
		  "currency": "string",
		  "value": "number"
		},
		"paymethod": {
		  "paymethod": "string",
		  "parameters": {}
		}
	  },
	  "appServer": "number",
	  "user": {
		"id": "string",
		"_ref": "string",
		"applicationOwner": "string",
		"type": "string",
		"cars": [
		  {
		    "id": "string",
		    "_ref": "string",
		    "owner": "string",
		    "properties": [
		      {
		        "name": "string",
		        "value": "string"
		      }
		    ]
		  }
		],
		"username": "string",
		"name": "string",
		"surname": "string",
		"country": "string",
		"email": "string",
		"birthdate": "string",
		"images": [
		  "string"
		],
		"balance": [
		  {
		    "currency": "string",
		    "value": "number"
		  }
		]
	  },
	  "gain": 0,
	  "benefits": []
	}
	```
	
	Ambos reciben la lista de todos los trips, para que el usuario de negocio que cree la regla tenga la libertad de poder utilizar los viajes en donde el usuario (pasajero o conductor) interviene de alguna manera. Para calcular el costo la información de usuario que se tiene a disposición es la del pasajero, mientras que en el cálculo de la ganancia se puede acceder a la información del conductor.

### Front-end

En el directorio *client* se encuentra el código que implementa la interfaz web. La estructura básica se generó mediante *Angular CLI* y luego se fueron incorporando los distintos componentes, guards y servicios.

+ *client/src/app/app.component.html*: define la estructura general de la interfaz gráfica.

+ *client/src/app/app.module.ts* : allí se definen los paths de la aplicación web junto con su componente relacionado y el tipo de *guard* que se utiliza en cada caso. Se tiene un *guard* para cada tipo de rol, que impide que un usuario no logueado, o logueado pero sin ese rol, pueda acceder a la página. Por otro lado se definen todos los módulos importados, además de los componentes, guards y servicios utilizados.

+ *client/src/app/services/auth.service.ts* : servicio que proporciona métodos para autenticar al usuario al hacer login, almacenar el token y datos del usuario en el local storage y limpiar el local storage al hacer logout. Permite ver si el usuario o un determinado rol está logueado, y realiza peticiones al server utilizando el token del usuario conectado.

+ *client/src/app/guards* : como se mencionó previamente, se tiene un guard por cada rol (*user*, *admin*, *manager*) y en caso de que el usuario conectado no tenga el rol requerido (o si no se encuentra logueado) se lo redirige al home de la aplicación.

+ *client/src/app/components* : allí se encuentran todos los componentes usados en el desarrollo de la interfaz web. En cada carpeta se encuentran los distintos componentes, cada uno de los cuales posee un archivo *.ts*, que contiene las acciones a realizar cuando se ingresa al path correspondiente al componente o al hacer click en algún lugar determinado y un *.html* que define los elementos a visualizar y en algunos casos los relaciona con atributos del componente, o invoca a sus métodos. Con respecto a las listas, se permite la búsqueda a partir de palabras ingresadas, se puede ordenar la información de acuerdo a la columna seleccionada y cuenta con paginación.


## Dependencias y herramientas


Esta sección está destinada a mencionar las herramientas, bibliotecas y APIs más relevantes utilizadas en este proyecto. Destacamos que esta no pretende ser una descripción de todas las bibliotecas utilizadas, sino una breve mención de aquellas más relevantes para la funcionalidad de este proyecto.

- **Express**

  Este proyecto consiste en un servidor HTTP creado mediante *Express*, el web framework más popular para *Node.js*. *Express* nos permitió, entre otras cosas, definir todos los endpoints de la API: su URL, su correspondiente método HTTP y la función que maneja esa request; definir el puerto a usar e incluir middlewares. 

- **Taller II Payment API**

  Se utilizó [Taller II Payment API](https://github.com/gfusca/taller-ii-payment-api) para realizar los cobros y almacenar la información de cada pago. Se trata de una API que simula el procesamiento de pagos electrónicos.

- **Docker**

  Para asegurar la flexibilidad y garantizar la compatibilidad en distintas plataformas, se utilizó Docker + Docker Compose. Existen 2 containers principales, uno para la base de datos y otro para la aplicación. Los archivos de configuración de docker pueden encontrarse en el directorio raíz del proyecto. En estos archivos se definen los nombres, puertos y propiedades principales de los containers, así como también las variables de entorno y dependencias de cada uno:

   + *Dockerfile*

   + *docker-compose.yml*

- **PostgreSQL y Knex**

  PostgreSQL es el sistema de base de datos relacional seleccionado para este proyecto. Para manejar la conexión y configuración de las bases de datos se utilizó Knex. Este último es un constructor de consultas SQL para Postgres, que además de facilitar la interacción con la base de datos para las consultas, permitió que fuera rápido y fácil crear las tablas con sus respectivas columnas en la base de datos y llenarlas con información cuando fuera necesario (gracias a la posibilidad de realizar migraciones y seeds). 

## Bugs conocidos y puntos a mejorar

Debido a restricciones temporales, existen algunos aspectos de este proyecto que requieren ser mejorados o concluidos: 

+ En el Shared Server faltaría una validación de los datos más estricta ya que se hasta el momento se indica cuando hay algún parámetro faltante pero no verifica el tipo, asumiendo que la validación se efectúa en las capas anteriores del sistema. La interfaz web tiene mayor control sobre los datos ingresados a diferencia del server. 

+ La aplicación web permite ejecutar el set de reglas sobre un conjunto de facts pero por falta de tiempo lo que se logró hasta el momento es que los facts se ingresen separados por un símbolo #. No es la solución más elegante pero es lo que se llegó a hacer en el tiempo dado. Ejemplo sencillo para ejecutar dos facts:
	
```json
{
    "language": "node-rules/javascript",
    "blob": {
        name: "Raul",
        age: 42
    }
}
#
{
    "language": "node-rules/javascript",
    "blob": {
        name: "Marta",
        age: 23
    }
}
```
+ Por último, se podría organizar mejor el código y realizar mayor refactoring.


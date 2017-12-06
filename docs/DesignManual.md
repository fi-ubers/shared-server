# Definición de arquitectura/diseño de la aplicación - Shared Server

## Introducción

FIUBER es una aplicación que permite gestionar viajes. Conecta a personas que necesiten ser transportadas con otras que provean ese servicio. 

La aplicación se compone de tres componentes:

+ [Cliente](https://github.com/fi-ubers/client) 
+ [App Server](https://github.com/fi-ubers/app-server)
+ **Shared Server**

El Shared Server es el responsable de almacenar y administrar los datos de los usuarios de la aplicación FIUBER (conductores y pasajeros) y de los usuarios de negocio. 

Se encarga de administrar los application servers y de la cotización de los viajes de la aplicación, además de realizar los cobros y mantener el balance de los usuarios.

Proporciona una aplicación web para que los usuarios de negocio puedan utilizar ciertos servicios de acuerdo a su rol (*user*, *admin* o *manager*). Por otro lado, los Application Servers podrán comunicarse y utilizar endpoints definidos en el Shared Server de acuerdo con la [Restful API](https://github.com/fi-ubers/shared-server/blob/master/docs/llevameAPI.yml) implementada por este último.

## Modelo de datos

Se indican a continuación los datos que se almacenan en cada tabla perteneciente a la base de datos del Shared Server.

Cada tabla tiene su clave primaria y en algunos casos se incluyeron claves foráneas. Se indicó la opción *ON DELETE CASCADE*, en la cual, si se elimina una fila con una clave a la que hacen referencia otras filas existentes en otras tablas, las mismas también serán eliminadas para mantener la consistencia.

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
+ **Id** : integer *Clave primaria*
+ **_ref** : string
+ **Username** : string - *Único*
+ **Password** : string
+ **Name** : string
+ **Surname** : string
+ **Roles** : text[]

### Usuarios de la aplicación

Se almacenan los siguientes datos en la tabla *application_users*, correspondientes a cada pasajero/conductor:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Application owner** : string
+ **Type** : string
+ **Cars** : json[]
+ **Username** : string - *Único*
+ **Password** : string
+ **Fb** : json
+ **Name** : string
+ **Surname** : string
+ **Country** : string
+ **Email** : string - *Único*
+ **Birthdate** : string
+ **Images** : text[]
+ **Balance** : json[]

Los autos pertenecientes a los conductores de la aplicación se almacenan en otra tabla, *cars*, para que cada uno tenga un identificador único. La tabla mencionada almacena los siguientes datos:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Owner** : integer - *Clave foránea que referencia al id en application_users*
+ **Properties** : json[]

### Viajes

Para cada viaje se almacenan los siguientes datos en la tabla *trips*:
+ **Id** : integer - *Clave primaria*
+ **Application owner** : string
+ **Driver** : integer - *Clave foránea que referencia al id en application_users*
+ **Passenger** : integer - *Clave foránea que referencia al id en application_users*
+ **Start** : json
+ **End** : json
+ **Total time** : integer
+ **Wait time** : integer
+ **Travel time** : integer
+ **Distance** : integer
+ **Route** : json[]
+ **Cost** : json
+ **Paymethod** : json

### Transacciones

Para cada transacción se almacenan los siguientes datos en la tabla *transactions*:
+ **Id** : integer - *Clave primaria*
+ **Trip** : integer
+ **Timestamp** : timestamp
+ **Cost** : json
+ **Description** : string
+ **Data** : json
+ **User** : integer - *Clave foránea que referencia al id en application_users*

### Reglas

Para cada regla se almacenan los siguientes datos en la tabla *rules*:
+ **Id** : integer - *Clave primaria*
+ **_ref** : string
+ **Language** : string
+ **Last commit** : json
+ **Blob** : text
+ **Active** : boolean

Como también es necesario almacenar la información sobre cada commit y la regla en el estado del commit efectuado, se guarda lo siguiente en la tabla *commits*:
+ **Id** : integer - *Clave primaria*
+ **Rule** : json
+ **Rule id** : integer - *Clave foránea que referencia al id en rules*

## Diseño/Arquitectura

Al momento de realizar el proyecto se buscó separar el código correspondiente a la interfaz web desarrollada con Angular (ubicado dentro del directorio *client*), y el código perteneciente al server (que se encuentra dentro del directorio *src* junto con los tests, controladores, middlewares utilizados y la definición de los endpoints, entre otras funcionalidades). 

Se destacan los siguientes módulos/directorios:

##### Back-end

+ *src/index.js*: utiliza *Express* para iniciar el Shared Server, permitiendo que se quede escuchando al puerto indicado. También se indica el middleware y las rutas a usar.

+ *src/logger.js*: se encuentra la configuración del Logger, tanto para los mensajes por consola como para el file que se crea. Lo que se decidió fue crear un archivo de log por día para facilitar la lectura y encontrar fácilmente los errores que surgen. Cada archivo creado tiene su correspondiente fecha.

+ *src/routes/api.js*: utiliza el *Express* router para definir todos los endpoints que permitirán la comunicación con los App Servers, especificados en la API mencionada al inicio del documento. Se definen los métodos HTTP (GET, POST, PUT, DELETE) para cada endpoint y la función que se encargará de realizar lo pedido sobre los usuarios de negocio, usuarios de la aplicación, paymethods, viajes, servers y reglas.

+ *src/middlewares/verifyToken.js*: se encarga de verificar que el Application o Business Token ingresado vía query, como se indica en la API, sea válido. Para poder distinguir entre ambos tipos de token y proporcionar mayor seguridad se decidió que sus claves sean distintas. Para aquellos endpoints que pueden ser accedidos mediante ambos tipos de token, se verifica primero el Business Token (y que cumpla con el rol requerido) y luego se implementó un middleware que, en caso de que la clave del token no coincida con la esperada, verifica si se trata de un Application Token válido y en ese caso accede a la función que implementa el endpoint. 

+ *src/middlewares/authCheck.js*: se ocupa de determinar si el usuario de negocio que realizó la petición se encuentra autorizado, para ello verifica que tenga el rol requerido.

+ *src/middlewares/revokedTokenCheck.js*: controla que el token ingresado no se encuentre revocado. Para ello utiliza la tabla *blacklist* mencionada en la sección anterior.

+ *src/services/rulesService.js*: inicializa el motor de reglas usando las reglas recibidas y luego las aplica sobre el fact para obtener el resultado.

+ *src/db*: dentro del directorio se encuentra la configuración de cada base de datos usada (para test, development y production). 

	+ En *knexfile.js* figura el string de conexión de cada base de datos, junto con los directorios para migraciones y seeds. 
	
	+ Cada archivo en *migrations* contiene las tablas a crear dentro de la database, indicando para cada una de ellas las columnas y el tipo de dato esperado en cada una de ellas. 
	
	+ En *seeds* se encuentran datos para llenar la base de datos. Esto último se utilizó para los tests y para colocar las reglas pedidas en el enunciado del trabajo dentro de la base de datos en Heroku.
	
+ *src/controllers*: dentro del directorio se encuentran todos los controladores. 

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

##### Front-end

+ *client/src/app/app.component.html*: define la estructura general de la interfaz gráfica.

+ *client/src/app/app.module.ts*: allí se definen los paths de la aplicación web junto con su componente relacionado y el tipo de *guard* que se utiliza en cada caso. Se tiene un *guard* para cada tipo de rol, que impide que un usuario no logueado, o logueado pero sin ese rol, pueda acceder a la página. Por otro lado se definen todos los módulos importados, además de los componentes, guards y servicios utilizados.

+ *client/src/app/services/auth.service.ts*: servicio que proporciona métodos para autenticar al usuario al hacer login, almacenar el token y datos del usuario en el local storage y limpiar el local storage al hacer logout. Permite ver si el usuario o un determinado rol está logueado, y realiza peticiones al server utilizando el token del usuario conectado.

+ *client/src/app/guards*: como se mencionó previamente, se tiene un guard por cada rol (*user*, *admin*, *manager*) y en caso de que el usuario conectado no tenga el rol requerido (o si no se encuentra logueado) se lo redirige al home de la aplicación.

+ *client/src/app/components*: allí se encuentran todos los componentes usados en el desarrollo de la interfaz web. En cada carpeta se encuentran los distintos componentes, cada uno de los cuales posee un archivo *.ts*, que contiene las acciones a realizar cuando se ingresa al path correspondiente al componente o al hacer click en algún lugar determinado y un *.html* que define los elementos a visualizar y en algunos casos los relaciona con atributos del componente, o invoca a sus métodos. Con respecto a las listas, se permite la búsqueda a partir de palabras ingresadas, se puede ordenar la información de acuerdo a la columna seleccionada y cuenta con paginación.


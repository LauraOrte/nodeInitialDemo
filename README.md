# 📌🧑🏻‍💻 Entrega 4.2: Node REST + DB + JWT

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/1.png)

_Proyecto realizado como trabajo del Sprint 4.2 del curso node.js en IT Academy Barcelona por [Daniel Españadero](https://github.com/DanielEspanadero)._

### Requisitos previos 📋

Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQL Server](https://dev.mysql.com/downloads/)

### Instalación 🔧

Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:
```
npm install
```

## Estructura del proyecto

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/5.png)

## Dependencias

Por un lado, las dependencias de desarrollo que he utilizado son Babel y Nodemon.
Por otro lado las dependencias que he utilizado son cors, dotenv, express, jsonwebtoken, mongoose, sequelize y mysql2. Me he dejado en el tintero el use de bcryptjs para validar la contraseña ya que a modo de demostración utilizé un condicional para obtener un JWT funcional a través de un usuario y contraseña para validar rutas.

## Variables de entorno 🪛

Para configurar las variables de entorno, tendrás que crear un archivo .env y rellenar los elementos que se encuentran el el archivo .example.env

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/9.png)

## Comandos para ejecutar ⌨️

⚠️ ANTES DE COMENZAR, RECUERDA TENER INICIADO EL SERVIDOR DE MONGODB Y MYSQL ⚠️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el siguiente comando:_
```
npm start
```

## Sequelize (Nivel 1 ⭐️)

Para que funcione la parte de sequelize, tienes que tener el servidor de mySQL encendido y tendrás que crear una base de datos que se llame 'dicegame', puedes hacerlo desde MySQL Workbenck escribiendo el siguiente comando:
```
CREATE DATABASE dicegame;
```
Puedes importar el json 'Dice game.postman_collection.json' en postman para tener todas las rutas configuradas correctamente.

## Mongoose (Nivel 2 ⭐️⭐️)

La parte de mongoose está finalizada correctamente, recuerda que se pueden comprobar todas las rutas importando en postman el archivo: 
```
Dice game.postman_collection.json
```

## Autenticación (Nivel 3 ⭐️⭐️⭐️)

Para realizar la autenticación introducir en el endpoint /login los siguientes parámetros:
```
{
    "username": "admin",
    "password": "12345"
}
```

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/2.png)

Para validar el token en el resto de endpoints, tenemos dos maneras de hacerlo:
<br>
1º - Añadir al header la KEY 'Authorization' y como VALUE le pasamos el token que hayamos generado en el endpoint login.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/3.png)

2º - A través de la URL añadimos después del endpoint ?Authorization= seguido del token que hayamos generado.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/4.png)

⚠️ NOTA ⚠️: Si no se añade correctamente el JWT, el acceso al endpoint será denegado.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/6.png)

## Cambio de persistencia MySQL/MongoDB ♻️
Para cambiar la persistencia de la base de datos he intentado hacerlo de varias maneras, en primer lugar intenté pasar todas las funciones de los controladores de ambas bases de datos a un archivo intermedio para que a través de condicionales dependiendo de las variables de entorno, se ejecutaran unas u otras, pero daba error y resulta que las rutas tienen que recibir los controladores directamente. Tambien intenté hacerlo en el mismo archivo de las rutas a través de condicionales, pero tampoco funcionaba. Finalmente la forma por la que me he decantado a hacerlo no me gusta mucho, pero es funcional, hay que tener en cuenta dos factores:

### Variables de entorno 🪄
Dependiendo de la persistencia que quieras utilizar hay que hacer un pequeño cambio en las variables de entorno, si queremos utilizar mySQL, usaremos lo siguiente:
```
DB=mysql
```
Y si queremos utilizar mongoDB, usaremos lo siguiente:
```
DB=mongodb
```
### Comentar y descomentar imports 🔇🔈
Por otro lado (Esta es la parte fea del asunto) hay que comentar u descomentar la importación correspondiente en el archivo players dentro de la carpeta routes:

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/8.png)

En el caso de la foto anterior estaríamos utilizando la persistencia con mySQL, si quisieramos utilizar la persistencia con mongoDB, tendríamos que comentar la importación descomentada y descomentar la importación comentada (MongoDB), recuerda tambien el cambio en las variables de entorno.

## Endpoints
Los endpoint que he utilizado para realizar este juego de dados son los siguientes:

### GET

Devuelve un listado de todos los jugadores del sistema con su porcentaje medio de éxitos:
```
/players
```

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/docs/7.png)

Devuelve un listado de jugadas realizadas por un jugador:
```
/players/:id/games
```

Devuelve el porcentaje médio de éxito del conjunto de todos los jugadores:
```
/players/ranking
```

Devuelve el jugador con mejor porcentaje de éxito:
```
/players/ranking/winner
```

Devuelve el jugador con mejor porcentaje de éxito:
```
/players/ranking/loser
```

### POST

Permite acceder a un administrador con usuario y contraseña y devuelve un token haciendo obligatoria la autenticación por JWT en el resto de endpoints:
```
/login
```

Crea un jugador (Hay que pasar en el body el argumento "name" añadiendo como valor el nombre que le queramos dar al jugador que vallamos a crear, si no le damos ningún valor, el nombre será "ANONYMOUS"):
```
/players
```

Un jugador específico realiza una tirada:
```
/players/:id/games
```

### PUT

Modificamos el nombre del jugador, hay que pasar en el body el parametro "name":
```
/players/:id
```

### DELETE

Borrar las jugadas del jugador seleccionado:
```
/players/:id/games
```

## Licencia 📄
_Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENCIA](https://github.com/DanielEspanadero/nodeInitialDemo/blob/4.2-Node-REST-DB-JWT/LICENSE) para más detalles._
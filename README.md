# SPRINT4_2: Node REST + DB + JWT

La aplicación usa el puerto local 3000. Todos los endpoints derivan de la base http://localhost:3000/. Se adjunta un archivo los las peticiones hechas en postman para testear los distintos endpoints. 

# Script npm run mongoStart (persistencia con mongo).
# Script npm run mysqlStart (persistencia con mysql).

# Requisitos previos;

Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQL Server](https://dev.mysql.com/downloads/)

# Instalación 

Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:
```
npm install
```

# Variables de entorno

Para configurar las variables de entorno, tendrás que crear un archivo .env y rellenar los elementos que se encuentran el el archivo .example.env


# Autenticación

Para realizar la autenticación introducir en el endpoint /login los siguientes parámetros:
```
{
    "username": "admin",
    "password": "12345"
}
```

# Endpoints
### GET

Devuelve un listado de todos los jugadores del sistema con su porcentaje medio de éxitos:
```
/players
```

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






# Backend Buscador Peliculas

---------------

## Índice

---------------

- [Teconolgías aplicadas](#tecnologías-aplicadas)
- [Gestión de archivos](#gestión-de-archivos)
- [Perfiles](#perfiles)
- [Usuarios](#usuarios)
- [Peliculas](#peliculas)
- [Pedidos](#pedidos)

## Tecnologías aplicadas

---------------

Tecnologías aplicadas: JavaScript, Node.js, Express, APIs,Git, Postman, MongoDB, mongoose, Json Web Token. Desplegado en Heroku y metodologías ágiles con la herramienta Trello.

### Gestión de archivos

-----------

El proyecto está separado en 5 bloques:

Routes: Gestión de rutas para los diferentes controllers conectados a la misma vez con index.js.

Middlewares: Lógica de los roles, la generacion y verificacion de tokens.

Models: Modelos de la base de datos.

Controllers: Contienen la lógica de todas las peticiones que se realizarán desde el frontend.

Config: Conexión a la base de datos.

### Perfiles

-----------

El usuario accede despues de validarse con un token, en caso de no tener perfil valido puede crear uno él mismo así como borrar solo su perfil y modificarlo. Hay disponibles dos roles, usuario y administrador.

## Usuarios

-----------

El usuario puede crear un perfil, borrarlo y modificarlo. El administrador puede gestionar todos los usuarios.
## Peliculas

-----------

El usuario podrá realizar busqueda de todas las películas, o de una sola ya sea por identificador, título o actores.

## Pedidos

-----------

Los usuarios solo pueden tener un alquiler al mismo tiempo, también se gestiona el poder añadir peliculas en caso de ser administrador.

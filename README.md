# Backend Buscador Peliculas

---------------

Tecnologías aplicadas: JavaScript, Node.js, Express, APIs,Git, Postman, MongoDB, mongoose, Json Web Token. Desplegado en Heroku y metodologías ágiles con la herramienta Trello.

![](/Readme/captura2.jpg)

## Modelo Vista controlador

-----------

Utilizamos el Modelo Vista-Controlador, un patrón de arquitectura de software, que separa los datos y principalmente lo que es la lógica de negocio de una aplicación de su representación y el módulo encargado de gestionar los eventos y las comunicaciones

### Gestión de archivos

-----------

El proyecto está separado en 5 bloques:

Routes: Gestión de rutas para los diferentes controllers conectados a la misma vez con index.js.

Middlewares: Lógica de los roles, la generacion y verificacion de tokens.

Models: Modelos de la base de datos.

Controllers: Contienen la lógica de todas las peticiones que se realizarán desde el frontend.

Config: Conexión a la base de datos.

![](/Readme/captura1.jpg)

### Perfiles

-----------

El usuario accede despues de validarse con un token, en caso de no tener perfil valido puede crear uno él mismo así como borrar solo su perfil y modificarlo. Hay disponibles dos roles, usuario y administrador.

![](/Readme/captura3.jpg)

### Gestion de Peliculas

-----------

El usuario podrá realizar busqueda de todas las películas, o de una sola ya sea por identificador, título o actores.

![](/Readme/captura4.jpg)

## Gestion de pedidos

-----------

Los usuarios solo pueden tener un alquiler al mismo tiempo, también se gestiona el poder añadir peliculas en caso de ser administrador.

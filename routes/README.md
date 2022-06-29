# Reto BackEnd Buscador Peliculas

Tecnologias aplicadas JavaScript ES6, node.js, Express, API,Git, Postman, MongoDB, json Web Token desplegado en Heroku y metodologia agil con la herramienta Trello.
![](/Readme/captura2.jpg)

## Modelo Vista controlador
Utilizamos el Modelo-vista-controlador, un patrón de arquitectura de software, que separa los datos y principalmente lo que es la lógica de negocio de una aplicación de su representación y el módulo encargado de gestionar los eventos y las comunicaciones

### Carpetas Proyecto
El proyecto esta separado en 4 Bloques a los que se accede desde Index.
la carpeta Routes donde estan las routas y accede al fichero controller donde esta la logica de la aplicacion. 
La carpeta middlewares tiene la logica de los roles, la generacion y verificacion de tokens y en  la carpeta models generamos los ficheros mongo que utilizamos.
![](/Readme/captura1.jpg)

### Perfiles

El usuario accede despues de validarse con un token, en caso de no tener perfil valido puede crear uno el mismo asi como borrar solo su  perfil y modificarlo.
Tenemos dos roles el de Admin Y User.
![](/Readme/captura3.jpg)

### Gestion de Peliculas

el Usuario podra generar una busqueda por todas las peliculas por id asi como genero y actor.
![](/Readme/captura4.jpg)

## Gestion de pedidos

los usuarios solo podran tener un alquiler tienen fecha de alquiler y devolucion.


## Documentacion

* [stackoverflow](https://es.stackoverflow.com/) - referencia en consulta errores

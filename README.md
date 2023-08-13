# Aplicación web de Balancer

Aplicación web de Balancer construida con React.

## Proyecto de Node

Este proyecto de Node hace uso de los siguientes paquetes relevantes (entre otros):

- React DOM
- React Router DOM
- React Icons
- React Bootstrap
- Axios

## Arranque

Para arrancar el proyecto, primero es necesario instalar las dependencias:

```console
$ npm i
```

A continuación, se puede lanzar un servidor de desarrollo:

```console
$ npm start
```

## Despliegue

Para desplegar el proyecto en un entorno, primero es necesario construirlo:

```console
$ npm build
```

Este comando generará un directorio `build`. El siguiente paso es levantar un servidor web y apuntarlo a dicho directorio.

Dado que este proyecto utiliza React Router DOM, es necesario que el servidor redirija todas las peticiones que lleguen a la aplicación al fichero `index.html` dentro del directorio `build`.

En el caso del servidor HTTP Apache, esto puede conseguirse utilizando la directiva `FallbackResource` en el fichero `.htaccess` dentro del directorio `build`:

```apache
FallbackResource ./index.html
```

Es necesario haber habilitado previamente el `.htaccess` en el host virtual, en su caso:

```apache
...

<Directory /.../app/build>
  AllowOverride All
</Directory>

...
```

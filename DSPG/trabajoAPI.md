# Proyecto de API con Node.js y docker

## instalación de la imagen donde se contiene node.js

```
docker run -it --name dev-node -v $(pwd):/app -w /app node:18-alpine sh
```

``node:18-alpine`` es la imagen oficial de node.

``-it`` modo interactivo.

``--name dev-node`` el nombre de la imagen.

``-v $(pwd):/app`` monta mi carpeta actual dentro del contenedor.

``-w /app`` carpeta de trabajo dentro del contenedor.

``sh`` habre un terminal dentro del cointenedor.

## inicio de js e instalacion de elementos

```
npm init -y
```
Generará los archivos de node.js

```
npm install express mysql2 dotenv
```
Instalará los elementos ``express``, ``mysql``, ``dotenv``

## creacion de estructura

```
mkdir -p src
```
Crearemos la estructura donde se guardará el codigo de express, bd y app donde se almacenaran el CRUD

## el codigo

el codigo se explica por si solo (creo), sino lo explico en clase

## metodo de uso

yo, opte por no usar una interfaz, lo unico que se ve es el json de la api. Necesitaremos usar una extension de vscode para realizar peticiones a APIs, como puede ser thunderClient, una vez que lo tengamos instalado aparecera a la derecha el icono, realizamos una new request e ingresaremos la ip con el puerto 8443 mas /api/cars `(ip:8443/api/cars)` y si queremos consultar uno en concreto ponemos una barra mas para buscar por id `(ip:8443/api/cars/21)`, cuando vayamos a realizar la peticion hay que tener en cuenta que cuando queramos hacer post o put, hay que poner en el apartado body el codigo con el siguiente formato como en el ejemplo.
```json
{
  "marca": "Peugeot",
  "modelo": "406",
  "year": 1998
}
```

## imagen en dockerhub

para descargar la imagen tenemos que acceder a este repositorio. adjunto el comando para instalarla.

```
docker pull mineclasero/apicoches-api:latest
```

O simplemente para usarlo sin descargar la imagen, descargamos el documento ``despliegue`` que adjunte en la tarea, dentro encontraremos los archivos necesarios, dentro de el realizaremos el comando ``docker compose up -d`` para levantar todos los servicios e instalar las imagenes.

## directorio github

Aqui estan los documentos con los que actua docker para poder realizar todas las tareas de despliegue

```
https://github.com/JavierCondeCortes/apicoches
```

## url de pruebas con la api

esta url es donde tengo desplegado el proyecto para hacer mis pruebas ademas podemos realizar peticiones a la api como comente anteriormente

```
javiercondecortes.com:8443/api/cars
```

```
javiercondecortes.com:8443/api/cars/11
```
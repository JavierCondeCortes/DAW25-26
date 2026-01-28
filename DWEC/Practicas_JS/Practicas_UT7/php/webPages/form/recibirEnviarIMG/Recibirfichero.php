<?php

// Carpeta física donde se guardan las imágenes
$carpeta_fisica = __DIR__ . '/imgs/';

// Archivo donde guardamos la lista de imágenes
$archivo_lista = __DIR__ . '/lista.json';

// Crear lista.json si no existe
if (!file_exists($archivo_lista)) {
    file_put_contents($archivo_lista, json_encode([]));
}

// Cargar lista actual
$lista = json_decode(file_get_contents($archivo_lista), true);

// Nombre del archivo subido
$nombre_archivo = basename($_FILES['mifichero']['name']);

// Ruta física donde se guardará
$ruta_fisica = $carpeta_fisica . $nombre_archivo;

// Ruta web para mostrar en HTML
$ruta_web = 'imgs/' . $nombre_archivo;

// Guardar archivo en /imgs/
if (move_uploaded_file($_FILES['mifichero']['tmp_name'], $ruta_fisica)) {

    // Añadir a la lista si no está repetido
    if (!in_array($ruta_web, $lista)) {
        $lista[] = $ruta_web;
        file_put_contents($archivo_lista, json_encode($lista));
    }

    // Devolver TODAS las imágenes
    echo json_encode($lista);

} else {
    echo json_encode(["ERROR"]);
}
?>

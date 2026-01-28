<?php
$nombre = ($_POST['nombre']);
$edad = ($_POST['edad']);

// $jsonImport=file_get_contents(http);

echo $nombre;
echo $edad;
echo '<br>';
echo $json = json_encode([
    "personas" => [
        [
            'nombre' => $nombre,
            'edad' => $edad,
            'mensaje' => 'form'
        ],
        [
            'nombre' => 'javier',
            'edad' => '20',
            'mensaje' => 'default'
        ]
    ]
]);

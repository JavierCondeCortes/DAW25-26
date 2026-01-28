<?php 
$fichero_subido = 'C:\\Users\\javier.concor\\subidaArchivos\\' . basename($_FILES['mifichero']['name']);
$locFicheros = [];

if (move_uploaded_file($_FILES['mifichero']['tmp_name'], $fichero_subido)) {
    echo "<h1>se ha subido el fichero " . $fichero_subido . "</h1>";
    $locFicheros[] = $fichero_subido; // aquí guardas la ruta física
} else {
    echo "<h1>¡Error!</h1>";
}
?>
<?php foreach ($locFicheros as $ruta): ?>
    <p><?= $ruta ?></p>
<?php endforeach; ?>

<?php
// Incluimos las clases necesarias
include_once("Soporte.php");
include_once("CintaVideo.php");
include_once("Dvd.php");
include_once("Juego.php");
include_once("Cliente.php");
include_once("VideoClub.php");

// Crear soportes
$cinta = new CintaVideo(1, 10, "Matrix", 120);
$dvd   = new Dvd(2, 15, "El Señor de los Anillos", "Widescreen", "Español, Inglés");
$juego = new Juego(3, 50, "FIFA 25", 1, 4, "PlayStation 5");

// Mostrar resúmenes
echo "<h2>Productos</h2>";
$cinta->muestraResumen();
$dvd->muestraResumen();
$juego->muestraResumen();

// Crear cliente
$cliente = new Cliente("Javier", 101);

// Crear videoclub
$videoclub = new VideoClub("Mi Videoclub");

// Añadir productos y socios
$videoclub->agregarProducto($cinta);
$videoclub->agregarProducto($dvd);
$videoclub->agregarProducto($juego);
$videoclub->agregarSocio($cliente);

// Simular alquiler
echo "<h2>Alquiler</h2>";
$cliente->alquilarSoporte($dvd);
$cliente->alquilarSoporte($juego);
?>

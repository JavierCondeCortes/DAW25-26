<?php
// Incluimos las clases necesarias
include_once("VideoClub.php");

// Crear videoclub
$videoclub = new VideoClub("Mi Videoclub");

// Añadir productos directamente desde el videoclub
$videoclub->incluirCintaVideo("Matrix", 10, 120);
$videoclub->incluirDvd("El Señor de los Anillos", 15, "Español, Inglés", "Widescreen");
$videoclub->incluirJuego("FIFA 25", 50, "PlayStation 5", 1, 4);

// Listar productos
echo "<h2>Productos disponibles</h2>";
$videoclub->listarProductos();

// Crear socios
$socio1 = $videoclub->incluirSocio("Javier");
$socio2 = $videoclub->incluirSocio("Laura", 5);

// Listar socios
echo "<h2>Socios registrados</h2>";
$videoclub->listarSocios();

// Simular alquileres
echo "<h2>Alquileres</h2>";
$videoclub->alquilarSocioProducto($socio1->getNumero(), 2); // Javier alquila el DVD
$videoclub->alquilarSocioProducto($socio1->getNumero(), 3); // Javier alquila el Juego

// Mostrar alquileres de Javier
$socio1->listaAlquileres();

// Javier devuelve el juego
$socio1->devolverSoporte($videoclub->alquilarSocioProducto($socio1->getNumero(), 3));
$socio1->listaAlquileres();
?>

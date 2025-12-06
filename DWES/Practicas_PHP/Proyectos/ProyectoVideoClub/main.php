<?php
// Script de prueba en raíz del proyecto

use Dwes\ProyectoVideoclub\VideoClub;
use Dwes\ProyectoVideoclub\Cliente;

include_once("VideoClub.php");
include_once("CintaVideo.php");
include_once("Dvd.php");
include_once("Juego.php");
include_once("Cliente.php");

// Crear videoclub
$videoclub = new VideoClub("Mi Videoclub");

// Añadir productos
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
$videoclub->alquilarSocioProducto($socio1->getNumero(), 2);
$videoclub->alquilarSocioProducto($socio1->getNumero(), 3);

// Mostrar alquileres de Javier
$socio1->listaAlquileres();

// Javier devuelve el juego
$videoclub->devolverSocioProducto($socio1->getNumero(), 3);
$socio1->listaAlquileres();

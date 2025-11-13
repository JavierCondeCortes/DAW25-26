<?php
// CONEXION A BASE DE DATOS
try {
    $conn = new PDO("mysql:host=localhost;dbname=geografia", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("conexion fallida") . $e->getMessage;
}




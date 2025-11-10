<link rel="stylesheet" href="./hundirLaFlota.css">

<form action="" method="get">
    <label for="intentos">¿Cuántos intentos quieres?</label>
    <!-- estatico por el ejercicio establecido -->
    <input type="number" name="nIntentos" id="intentos" min='4' required> 
    <input type="submit" name="enviar" value="Enviar">
</form>


<?php
session_start();

if (isset($_GET["enviar"])) {
    $valorIntentos = $_GET["nIntentos"] ?? null;
    $_SESSION["nIntentos"] = $valorIntentos;

    header("Location: hundirLaFlota.php");
    exit();
}
?>

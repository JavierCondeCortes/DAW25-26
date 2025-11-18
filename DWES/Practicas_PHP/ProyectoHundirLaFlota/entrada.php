<link rel="stylesheet" href="./hundirLaFlota.css">

<form action="" method="get">
    <label for="intentos">¿Cuántos intentos quieres?</label>
    <!-- estatico por el ejercicio establecido -->
    <input type="number" name="nIntentos" id="intentos"> 
    <input type="submit" name="enviar" value="jugar">
</form>


<?php
session_start();

if (isset($_GET["enviar"])) {
    $valorIntentos = $_GET["nIntentos"] ?? null;

    //lo que nos permite es que si el numero de intenes es menor al numero de barcos este se establecere como 40
    //puse cla condicion dero por tema de los criterios pero no tiene sentido alguno en este caso
    if($valorIntentos === 0 || $valorIntentos< 4){
        $_SESSION["nIntentos"] = 40;
    }else{
        $_SESSION["nIntentos"] = $valorIntentos;
    }

    header("Location: hundirLaFlota.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="" method="get">

    <label>
        <input type="radio" name="encrypt"> 
    </label>encriptar
    
    <label>
        <input type="radio" name="encrypt"> 
    </label>desencriptar
        <br>
    <label>texto a encriptar
        <input type="text" name="texto" minlength="10">
    </label>
        <br>
    <label>codigo encriptación
        <input type="text" name="clave">
    </label>
        <br>
    <button type="submit" name="enviar">realizar conversion</button>
</form>
    

<?php 
if(isset($_GET["encrypt"] ))
    if (isset($_GET["texto"])) {
        $texto = $_GET["texto"];
        echo "<p>Texto original: $texto</p>";

        for ($i = 0; $i < strlen($texto); $i++) {
            $letra = $texto+$clave[$i];
            $codigo = ord($letra); // convierte letra en código ASCII
            echo "$codigo";
        }
    }

?>
</body>
</html>
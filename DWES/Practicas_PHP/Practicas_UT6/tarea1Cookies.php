<!--Crea una página web en PHP que muestre cuántas veces ha sido visitada por el mismo usuario. 
Para ello, utiliza una cookie llamada contador_visitas que guarde el número de visitas y se mantenga activa durante un año.
Cada vez que el usuario recargue la página, el contador deberá aumentar en una unidad y mostrarse en pantalla.-->

<?php

    $visitas = 0;
    if(isset($_COOKIE['contador_visitas'])){
        $visitas = (int)$_COOKIE['contador_visitas'];
    }
    $visitas++;
    setcookie("contador_visitas", $visitas, mktime(00,00,00,10,16,2026));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $visitas ?>
</body>
</html>
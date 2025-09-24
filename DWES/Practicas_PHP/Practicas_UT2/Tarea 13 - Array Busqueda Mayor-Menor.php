<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
        $lista = array();
        for ($long = 0; $long <= 9; $long++) {
            $lista[$long] = rand(1, 30);
        }
        print_r($lista);

        
?>
<br><br>
<?php 
    //busqueda valor max y min del array con for
        $Cantidad = count($lista) -1;
        $number = 0;
        for($i=0 ;$i<=$Cantidad; $i++){
            $Posicion = ($lista[$i]);
                if ($Posicion > $number){
                    $number = $Posicion;
                }
        }
        echo "<p>". $number."</p>";

    ?>

<br><br>
<?php 
        $Cantidad2 = count($lista) -1;
        $number2 = 100;
        for($j=0 ;$j<=$Cantidad2; $j++){
            $Posicion2 = ($lista[$j]);
                if ($Posicion2 < $number2){
                    $number2 = $Posicion2;
                }
        }
        echo "<p>". $number2."</p>";

    ?>

</body>

</html>
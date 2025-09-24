<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    
        $frutas = array(
            "manzana" => "roja",
            "plátano" => "amarillo",
            "naranja" => "naranja"
        );

        arsort($frutas);
        foreach($frutas as $clave => $valor){
            echo "clave: ".$clave." - Valor ".$valor;
            echo "<br>";
        };

        echo "<br>";

        asort($frutas);
        foreach($frutas as $clave => $valor){
            echo "clave: ".$clave." - Valor ".$valor;
            echo "<br>";
        };

        echo "<br>";

        ksort($frutas);
        foreach($frutas as $clave => $valor){
            echo "clave: ".$clave." - Valor ".$valor;
            echo "<br>";
        };

        echo "<br>";

        krsort($frutas);
        foreach($frutas as $clave => $valor){
            echo "clave: ".$clave." - Valor ".$valor;
            echo "<br>";
        };
        
    ?>
</body>
</html>
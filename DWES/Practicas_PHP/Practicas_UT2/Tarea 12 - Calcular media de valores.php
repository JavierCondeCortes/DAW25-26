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

        //calcular media

        $cantidad = count($lista);
        $numLista = 0;
        $suma = 0;
        if($numLista <= $cantidad){
            $suma = $suma+$lista[$numLista];
            $numLista++;
        };

        echo "<p>".$suma."</p>";
        echo "<p>".$suma/$cantidad."</p>";
    ?>

</body>

</html>
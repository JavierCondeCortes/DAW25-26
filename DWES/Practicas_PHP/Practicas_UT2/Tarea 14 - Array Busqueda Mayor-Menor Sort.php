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
    
        sort($lista);
        print_r($lista);

        echo("<br><br>");

        rsort($lista);
        print_r($lista);
    ?>

</body>

</html>
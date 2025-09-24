<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php

$nota = rand(1,10);

switch($nota){
    case ($nota >= 0 && $nota<= 4):
        echo "<p>Suspenso</p>";
        break;
    
    case ($nota >= 5 && $nota<= 6):
        echo "<p>Aprobado</p>";
        break;
    
    case ($nota >= 7 && $nota<= 8):
        echo "<p>Notable</p>";
        break;
    
    case ($nota >= 9 && $nota<= 10);
        echo "<p>SobreSaliente</p>";
        break;
};

?>

<body>
    
</body>
</html>
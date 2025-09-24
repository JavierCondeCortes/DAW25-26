<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php 
    $num1 = rand(1,100);
    $num2 = rand(1,100);

    if($num1 == $num2){
        echo "<p>" . $num1 . " y " . $num2 . " son iguales </p>" ;
    } elseif($num1 < $num2){
        echo "<p>". $num2 ."es mayor al numero 1</p>";
    }else{
        echo "<p>". $num1 ."es mayor al numero 2</p>";
    };
?>

<body>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php 

function tabla($x,$y){
    echo "<ul>";
    for($i=0; $i<=$y; $i++){
        echo "<li>";
            echo "<p>".($x*$i)."</p>";
        echo "</li>";
    };
    echo "</ul>";
}

tabla(10,10);
?>
<body>
    
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php 
$array = ["pizza", "hamburguesa", "tacos"];

function imprimir_array($array) {
  echo "<table border='1'>";
  for ($i = 0; $i < count($array); $i++) {
    echo "<tr>";
    echo "<td>$i</td>";
    echo "<td>{$array[$i]}</td>";
    echo "</tr>";
  }
  echo "</table>";
}


imprimir_array($array);
?>

<body>
    


</body>
</html>
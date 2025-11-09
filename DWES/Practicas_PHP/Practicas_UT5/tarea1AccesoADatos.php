<style>
    th {
        background-color: black;
        color: white;
    }

    table {
        border-collapse: collapse;
    }
</style>

<html>

</html>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "dwes";

try {

    //crear conexiones
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

    //configuracion de modo error
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "conexion estableclida correctamente <br>";

    //mostrar información del servidor
    echo $conn->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "<br>";

    //opcion de visualizacion mas limpia del array
    // print_r($row);
    // echo "<pre>";
    // echo "<pre>";



} catch (PDOException $e) {

    //mostrar mensaje de error si falla la conexion
    die("conexion fallida" . $e->getMessage());
}

if (isset($_GET['apunt']) && isset($_GET['select'])) {
    $cursoSeleccionado = $_GET['select'];

    try {
    } catch (PDOException $e) {
        echo "<p style='color:red;'>Error al actualizar: " . $e->getMessage() . "</p>";
    }
}

//CONDICIÓN DE ACCION PARA QUE BAJE EL VALOR DE LAS PLAZAS DISPONIBLES
if (isset($_GET["añadir"]) && isset($_GET["id"])) {
    $id = (int)$_GET["id"];
    $sql =  "UPDATE tarea01cursos
                SET plzsDisponibles = plzsDisponibles-1
                WHERE id =  :id AND plzsDisponibles > 0";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}


$sql = "SELECT * FROM tarea01cursos /*WHERE id=?*/";
// CAMBIA: Preparar la consulta
$stmt = $conn->prepare($sql);
// CAMBIA: Asignar valor al parámetro :id
// $idBuscado = 2;
// $stmt->bindParam(1, $idBuscado);
// CAMBIA: Ejecutar la consulta preparada
$stmt->execute();
// CAMBIA: Sustituimos $result por $stmt

if ($stmt) {
    echo "<table>";
    echo "<tr>";
    echo "<th>" . "Nombre" . "</th>";
    echo "<th>" . "PlazasTotales" . "</th>";
    echo "<th>" . "PlazasDisponibles" . "</th>";
    echo "<th>" . "" . "</th>";
    echo "</tr>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row["nombre"] . "</td>";
        echo "<td>" . $row["plzsTotales"] . "</td>";
        echo "<td>" . $row["plzsDisponibles"] . "</td>";
        echo "<td>";
        echo '<form action="" method="get">';
            echo '<input type="hidden" name="id" value="' . $row["id"] . '">';
            echo '<button type="submit" name="añadir">añadir plaza</button>';
        echo '</form>';
        echo "</td>";

        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Error en la consulta.";
}

//PLAZAS TOTALES
$sql = "SELECT SUM(plzsTotales) AS total FROM tarea01cursos";
$stmt = $conn->prepare($sql);
$stmt->execute();

$resultado = $stmt->fetch(PDO::FETCH_ASSOC);

if ($resultado) {
    $plazasTotales = $resultado["total"];
    echo "<p>Total de plazas: $plazasTotales</p>";
}

//PLAZAS DISPONIBLES 
$sql = "SELECT SUM(plzsTotales)-SUM(plzsDisponibles) AS total FROM tarea01cursos;";
$stmt = $conn->prepare($sql);
$stmt->execute();

$resultadoDisp = $stmt->fetch(PDO::FETCH_ASSOC);

if ($resultado) {
    $plazasDisp = $resultadoDisp["total"];
    echo "<p>Total de plazas Ocupadas: $plazasDisp</p>";
}

//falta porcentaje de ocupacion 
//mas que cuando las plazas sean 0, se vuelva invisible el boton y se raye todos los elementos de la fila


?>
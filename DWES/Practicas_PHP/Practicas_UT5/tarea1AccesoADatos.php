<html>
     <form action="" method="get">

        <label>daw<input type="radio" name="select" id="daw"></label>
        <label>dam<input type="radio" name="select" id="dam"></label>
            <br>
        <button type="submit" name="apunt">Añadir Plaza</button>
     </form>
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
            echo "<table border='1px'>";
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
                echo "<th>" . "ID: ". "</th>";
                echo "<td>" . $row["id"]. "</td>";
                echo "<th>" . ", Nombre: ". "</th>";
                echo "<td>" . $row["nombre"]. "</td>";
                echo "<th>" . ", PlazasTotales: ". "</th>";
                echo "<td>" . $row["plzsTotales"]. "</td>";
                echo "<th>" . ", PlazasDisponibles: ". "</th>";
                echo "<td>" . $row["plzsDisponibles"]. "</td>";
            echo "</tr>";
        }
            echo "</table>";
    } else {
        echo "Error en la consulta.";
    }

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

        // Actualizar plazas disponibles solo si hay plazas
        $sql = "UPDATE tarea01cursos 
                SET plzsDisponibles = plzsDisponibles - 1 
                WHERE nombre = :curso AND plzsDisponibles > 0";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':curso', $cursoSeleccionado);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            echo "<p style='color:green;'>Plaza añadida correctamente al curso <strong>$cursoSeleccionado</strong>.</p>";
        } else {
            echo "<p style='color:red;'>No hay plazas disponibles para <strong>$cursoSeleccionado</strong> o el curso no existe.</p>";
        }

        $conn = null; // cerrar conexión
    } catch (PDOException $e) {
        echo "<p style='color:red;'>Error al actualizar: " . $e->getMessage() . "</p>";
    }
}

?>

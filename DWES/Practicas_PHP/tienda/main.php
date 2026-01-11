<?php 
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}


$conn = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "select codigo, nombre, descripcion, precio 
        from productos";
$stmt = $conn->prepare($sql);
$stmt->execute();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    bienvenido <?php echo($_SESSION['usuario']); ?>
    <form action="" method="get">
        cerrar sesion <button type="submit" name="cerrar">cerrar sesion</button>
    </form>
    <?php 
    if (isset($_GET['cerrar'])) {
        session_destroy();
        header("Location: login.php");
        exit();
    }
    ?>
    <!-- <form action="" method="get">
        <label for="filtro">filtro</label>
        <input type="text" name="filtro" id="filtro">
        <input type="submit" value="buscar">
    </form> -->
    <h1>productos</h1>
    <?php 
    
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<p>" . $row['codigo'] . " <strong> - " . htmlspecialchars($row['nombre']) . "</strong> - " . htmlspecialchars($row['descripcion']) . " - $" . htmlspecialchars($row['precio']) . 
            "<a href='detalles.php?codigo=" . $row['codigo'] . "'>ver detalles</a>" .
            "<form action='' method='get'><button type='submit' name='enviar'>enviar</button></form></p>";
        }
    ?>

    <h2>agregar productos</h2>
    <form action="" method="get">
        <label for="nombre">nombre</label>
        <input type="text" name="nombre">
        <label for="descripcion">descripcion</label>
        <input type="text" name="descripcion">
        <label for="precio">precio</label>
        <input type="text" name="precio">
        <label for="cantidad">cantidad</label>
        <input type="text" name="cantidad">

        <input type="submit" value="agregar" name="agregar">
    </form>

    <?php 
    if (isset($_GET['agregar'])) {
        $sql = "insert into productos (nombre, descripcion, precio, cantidad) values (:nombre, :descripcion, :precio, :cantidad)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $_GET['nombre']);
        $stmt->bindParam(':descripcion', $_GET['descripcion']);
        $stmt->bindParam(':precio', $_GET['precio']);
        $stmt->bindParam(':cantidad', $_GET['cantidad']);
        $stmt->execute();
        echo "producto agregado";
    }
    ?>


    <h2>eliminar productos</h2>
    <form action="" method="get">
        <label for="codigo">codigo</label>
        <input type="text" name="codigo">
        <button type="submit" name="eliminar">eliminar</button>
    </form>

<?php 
    if (isset($_GET['eliminar'])){
        $sql = "delete from productos where codigo = :codigo";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':codigo', $_GET['codigo']);
        $stmt->execute();
        echo "producto eliminado";
    }
?>

<?php 
echo "ultima pagina vista: " . $_COOKIE['ultimo_visto'];
?>

</body>
</html>
<!-- <?php
setcookie("ultimo_visto", $_GET['codigo']);
$_SESSION['codigoProducto'] = $_GET['codigo'];

if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

$codigo = $_SESSION['codigoProducto'];

try {
    $conn = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "select codigo, nombre, descripcion, precio 
            from productos
            where codigo = :codigo";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':codigo', $codigo);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

<?php
echo "<h1>detalles del producto</h1>";
echo "<p>codigo: " . $_GET['codigo'] . "</p>";
echo "<p>nombre: " . $row['nombre'] . "</p>";
echo "<p>descripcion: " . $row['descripcion'] . "</p>";
echo "<p>precio: " . $row['precio'] . "</p>";
?>

<form action="" method="get">
    <label for="">descripcion</label>
    <textarea name="descripcion"></textarea>
    <input type="submit" value="agregar comentario" name="comentario">
</form>

<?php
if (isset($_GET['comentario'])) {
    $sql = "insert into resenias (idProducto, autor, texto) 
        values (:idProducto, :autor, :texto)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idProducto', $_GET['ultimo_visto']);
    $stmt->bindParam(':autor', $_SESSION['usuario']);
    $stmt->bindParam(':texto', $_GET['texto']);
    $stmt->execute();

    setcookie("ultimo_visto", "pechuga de patata");
}
?> -->

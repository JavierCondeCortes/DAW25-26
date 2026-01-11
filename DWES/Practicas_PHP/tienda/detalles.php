<?php
session_start();

// Guardar el último visto en cookie y en sesión
if (isset($_GET['codigo'])) {
    setcookie("ultimo_visto", $_GET['codigo']);
}

if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

try {
    $conn = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $codigo = $_GET['codigo'];

    $sql = "SELECT codigo, nombre, descripcion, precio 
            FROM productos
            WHERE codigo = :codigo";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':codigo', $codigo);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

<h1>Detalles del producto</h1>
<p>codigo: <?= htmlspecialchars($codigo) ?></p>
<p>nombre: <?= htmlspecialchars($row['nombre']) ?></p>
<p>descripcion: <?= htmlspecialchars($row['descripcion']) ?></p>
<p>precio: <?= htmlspecialchars($row['precio']) ?></p>

<h2>Agregar comentario</h2>
<form action="" method="post">
    <textarea name="texto"></textarea>
    <button type="submit" name="comentario">Agregar comentario</button>
</form>

<?php

//sql para sacar si ya comentó este usuario este producto
$sql = "select count(*) as numComentarios 
        from resenias 
        where idProducto = :idProducto 
        and autor = :autor";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idProducto', $codigo);
$stmt->bindParam(':autor', $_SESSION['usuario']);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

// Insertar comentario
if (isset($_POST['comentario']) && !empty($_POST['texto']) && $result['numComentarios'] == 0) {

    $sql = "INSERT INTO resenias (idProducto, autor, texto)
            VALUES (:idProducto, :autor, :texto)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idProducto', $codigo);
    $stmt->bindParam(':autor', $_SESSION['usuario']);
    $stmt->bindParam(':texto', $_POST['texto']);
    $stmt->execute();

    echo "<p>Comentario agregado correctamente</p>";
}else{
    if ($result['numComentarios'] > 0) {
        echo "<p>Ya has comentado este producto.</p>";
    }
}
?>

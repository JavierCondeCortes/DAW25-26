<?php
session_start();

// Conexión a la base de datos
$servidor = "localhost";
$dbname = "proyectorestaurantes";
$usuario = "root";
$contraseña = "";

try {
    $conn = new PDO("mysql:host=$servidor;dbname=$dbname", $usuario, $contraseña);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>

<!-- Navegación -->
<nav>
    <a href="./Selection.php">Volver al catálogo</a>
    <a href="./Logout.php">Cerrar sesión</a> 
</nav>

<h2>Productos en tu carrito</h2>

<?php if (isset($_SESSION["carrito"]) && count($_SESSION["carrito"]) > 0): ?>
    <table border="1" cellpadding="10">
        <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock original</th>
            <th>Unidades seleccionadas</th>
            <th>Subtotal</th>
        </tr>

        <?php
        $precioTotal = 0;
        foreach ($_SESSION["carrito"] as $producto):
            $subtotal = $producto["precio"] * $producto["compra"];
            $precioTotal += $subtotal;
        ?>
            <tr>
                <td><?= htmlspecialchars($producto["nombre"]) ?></td>
                <td><?= htmlspecialchars($producto["descripcion"]) ?></td>
                <td><?= number_format($producto["precio"], 2) ?> €</td>
                <td><?= $producto["cantidad"] ?></td>
                <td><?= $producto["compra"] ?></td>
                <td><?= number_format($subtotal, 2) ?> €</td>
            </tr>
        <?php endforeach; ?>
        <tr>
            <td colspan="5" style="text-align:right;"><strong>Total del pedido:</strong></td>
            <td><strong><?= number_format($precioTotal, 2) ?> €</strong></td>
        </tr>
    </table>

    <!-- Botón para confirmar compra -->
    <form method="post">
        <button type="submit" name="confirmarCompra">Confirmar compra</button>
    </form>

    <?php
    if (isset($_POST["confirmarCompra"])) {
        // Insertar pedido en la tabla 'pedido'
        $fecha = date("Y-m-d H:i:s");
        $estado = true; // Pedido confirmado

        $sqlPedido = "INSERT INTO pedido (fecha, precioTotal, estado) VALUES (:fecha, :precioTotal, :estado)";
        $stmtPedido = $conn->prepare($sqlPedido);
        $stmtPedido->bindParam(":fecha", $fecha);
        $stmtPedido->bindParam(":precioTotal", $precioTotal);
        $stmtPedido->bindParam(":estado", $estado, PDO::PARAM_BOOL);
        $stmtPedido->execute();

        // Actualizar stock de productos
        foreach ($_SESSION["carrito"] as $producto) {
            $nombre = $producto["nombre"];
            $cantidadComprada = $producto["compra"];

            $sql = "UPDATE producto SET cantidad = cantidad - :cantidadComprada WHERE nombre = :nombre";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":cantidadComprada", $cantidadComprada);
            $stmt->bindParam(":nombre", $nombre);
            $stmt->execute();
        }

        // Vaciar el carrito
        $_SESSION["carrito"] = [];

        echo "<h3 style='color:green;'>Pedido registrado correctamente</h3>";
        echo "<a href='./Selection.php'>Volver al catálogo</a>";
    }
    ?>

<?php else: ?>
    <p>No hay productos en el carrito.</p>
    <a href="./Selection.php">Volver al catálogo</a>
<?php endif; ?>

<?php
// Conexión a la base de datos
$servidor = "localhost";
$dbname = "proyectorestaurantes";
$usuario = "root";
$contraseña = "";

try {
    $conn = new PDO("mysql:host=$servidor;dbname=$dbname", $usuario, $contraseña);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("error de conexion " . $e->getMessage());
}
?>

<?php
// Gestión de sesión y carrito
session_start();

if (isset($_GET["agregarCarrito"])) {
    $nuevoProducto = [
        "nombre" => $_GET["carritoNombre"],
        "descripcion" => $_GET["carritoDescripcion"],
        "precio" => $_GET["carritoPrecio"],
        "cantidad" => $_GET["carritoCantidad"],
        "compra" => $_GET["compraStock"]
    ];

    if (!isset($_SESSION["carrito"])) {
        $_SESSION["carrito"] = [];
    }

    $_SESSION["carrito"][] = $nuevoProducto;
}
?>

<!-- Navegación -->
<nav>
    <a href="./Carrito.php">Ver carrito</a>
    <a href="./Logout.php">Cerrar sesión</a> 
</nav>

<!-- Formulario de filtro por categoría -->
<form method="post">
    <label for="lista">Lista de categorías</label>
    <select name="categoria" id="lista">
        <option value="default">--Seleccione--</option>
        <?php
        $sql = "SELECT nombre FROM categoria ORDER BY nombre DESC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<option>{$row["nombre"]}</option>";
        }
        ?>
    </select>
    <input type="submit" name="filtro" value="Filtrar">
</form>

<?php
// Consulta de productos por categoría
$sql = "SELECT p.nombre, p.descripcion, p.precio, p.cantidad
        FROM producto p JOIN categoria c ON (c.codigo = p.codigoCat)
        WHERE c.nombre = :nombreCategoria";
$stmt = $conn->prepare($sql);
$stmt->bindParam(":nombreCategoria", $_POST["categoria"]);
$stmt->execute();
?>

<!-- Tabla de productos -->
<table cellspacing="10">
    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Unidades</th>
    </tr>

    <?php while ($producto = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
        <tr>
            <td><?= $producto["nombre"] ?></td>
            <td><?= $producto["descripcion"] ?></td>
            <td><?= $producto["precio"] ?></td>
            <td><?= $producto["cantidad"] ?></td>

            <td>
                <?php
                // Validación de stock en carrito
                $cantidadEnCarrito = 0;
                if (isset($_SESSION["carrito"])) {
                    foreach ($_SESSION["carrito"] as $item) {
                        if ($item["nombre"] === $producto["nombre"]) {
                            $cantidadEnCarrito += $item["compra"];
                        }
                    }
                }
                $disponible = $producto["cantidad"] - $cantidadEnCarrito;
                ?>

                <form method="get">
                    <input type="hidden" name="carritoNombre" value="<?= $producto["nombre"] ?>">
                    <input type="hidden" name="carritoDescripcion" value="<?= $producto["descripcion"] ?>">
                    <input type="hidden" name="carritoPrecio" value="<?= $producto["precio"] ?>">
                    <input type="hidden" name="carritoCantidad" value="<?= $producto["cantidad"] ?>">

                    <?php if ($disponible > 0): ?>
                        <input type="number" name="compraStock" value="0" min="0" max="<?= $disponible ?>">
                        <button type="submit" name="agregarCarrito">Añadir</button>
                    <?php else: ?>
                        <strong style="color:red;">Sin stock disponible</strong>
                    <?php endif; ?>
                </form>
            </td>

            <?php if ($producto["cantidad"] < 5): ?>
                <td>¡Solo quedan <?= $producto["cantidad"] ?>!</td>
            <?php endif; ?>
        </tr>
    <?php } ?>
</table>

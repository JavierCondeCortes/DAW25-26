<!-- seleccion -->
<!-- Iniciamos sesión en la base de datos -->
<?php
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

<!-- hacemos una sesion donde guardaremos la informacion de los productos a comprar -->

<?php
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

<!-- formulario de clasificacion de categoria de productos -->

<form method="post">
    <label for="lista">Lista categorias</label>
    <select name="categoria" id="lista">
        <option value="default">--Seleccione--</option>
        <?php
        $sql = "SELECT nombre FROM categoria ORDER BY nombre DESC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        ?>
        <!-- creacion en bucle de todas las categorias -->
        <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
            <option><?= $row["nombre"] ?></option>
        <?php } ?>
    </select>
    <input type="submit" name="filtro" value="Filtrar">
</form>

<?php
//select para mostrar por categorias
$sql = "SELECT p.nombre, p.descripcion, p.precio, p.cantidad
                FROM productos p JOIN categoria c ON (c.codigo = p.codCategoria)
                WHERE c.nombre = :nombreCategoria";
$stmt = $conn->prepare($sql);
$stmt->bindParam(":nombreCategoria", $_POST["categoria"]);
$stmt->execute();
?>

<table cellspacing="10">
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
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
                <form method="get">
                    <input type="hidden" name="carritoNombre" value="<?= $producto["nombre"] ?>">
                    <input type="hidden" name="carritoDescripcion" value="<?= $producto["descripcion"] ?>">
                    <input type="hidden" name="carritoPrecio" value="<?= $producto["precio"] ?>">
                    <input type="hidden" name="carritoCantidad" value="<?= $producto["cantidad"] ?>">
                    <input type="number" name="compraStock" value="1" min="1" max="<?= $producto["cantidad"] ?>">
                    <button type="submit" name="agregarCarrito">Añadir</button>
                </form>
            </td>

            <?php if ($producto["cantidad"] < 5): ?>
                <td>¡Solo quedan <?= $producto["cantidad"] ?>!</td>
            <?php endif; ?>
        </tr>
    <?php } ?> <!--  cierre de while para la lista de productos -->
</table>
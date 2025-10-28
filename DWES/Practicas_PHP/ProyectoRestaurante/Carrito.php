<?php
session_start();

if (!isset($_SESSION["carrito"]) || !is_array($_SESSION["carrito"])) {
    $_SESSION["carrito"] = [];
}
?>

<!-- buscamos la manera de poder almacenar los datos en otras valores para que asi podamos tener un registro y luego poder realizar la llamada
a los datos para poder modificar el valor. esta forma nos ayuda a evitar la creacion de varias sesiones ya que es inviable su creacion-->
<table cellspacing="10">
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Unidades</th>
    </tr>
    <?php foreach ($_SESSION["carrito"] as $producto): ?>
        <tr>
            <td><?= htmlspecialchars($producto["nombre"]) ?></td>
            <td><?= htmlspecialchars($producto["descripcion"]) ?></td>
            <td><?= number_format($producto["precio"], 2) ?> €</td>
            <td><?= $producto["cantidad"] ?></td>
            <td><?= number_format($producto["compra"], 2) ?> €</td>
        </tr>
        
    <?php endforeach; ?>
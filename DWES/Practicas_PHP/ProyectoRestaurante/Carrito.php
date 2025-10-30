<?php
session_start();

if (!isset($_SESSION["carrito"]) || !is_array($_SESSION["carrito"])) {
    $_SESSION["carrito"] = [];
}
?>

<!-- buscamos que los carritos se indiviualicen para, asi, no iniciar sesion con otra cuenta y tener el carrito de la anterior, mediante sesiones -->

<table cellspacing="10">
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>PrecioUnitario</th>
        <th>Stock</th>
        <th>PrecioConjunto</th>
    </tr>
    <?php foreach ($_SESSION["carrito"] as $producto): ?>
        <tr>
            <td><?= htmlspecialchars($producto["nombre"])?></td>
            <td><?= htmlspecialchars($producto["descripcion"]) ?></td>
            <td><?= number_format($producto["precio"], 2) ?> €</td>
            <td><?= $producto["cantidad"] ?></td>
            <td><?= number_format($producto["compra"]*$producto["precio"], 2) ?> €</td>
            <!-- agrego boton de eliminar, debido a que se pueden agregar productos equivocados -->
            <td><button>Eliminar</button></td>
        </tr>
        
    <?php endforeach; ?>

    <hr>
    <!-- realizacion de consulta donde a la hora de realizar la compra, este, actualizara los datos -->
    <?php 
        $sql = "ALTER TABLE"
    ?>
    
    <tr>
        <!-- Al realizar compra actualizará la base de datos eliminando los productos comprardos -->
        <td><a href="">Realizar Compra</a></td>
    </tr>
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


<!-- formulario de clasificacion de categoria de productos -->

<form action="" method="get">
    <label for="lista">Lista categorias</label>
    <select name="categoria" id="lista">
        <?php 
            $sql = "SELECT nombre FROM categoria ORDER BY nombre DESC";
            $stmt = $conn->prepare($sql);
            $stmt -> execute();
        ?>
        <!-- creacion en bucle de todas las categorias -->
        <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {?>
            <option ><?= $row["nombre"] ?></option>
        <?php }?>
    </select>
    <input type="submit" name="filtro" value="Filtrar">
</form>

<?php 
    //select para mostrar por categorias
    $sql = "SELECT p.nombre, p.descripcion, p.precio, p.cantidad
                FROM productos p JOIN categoria c ON (c.codigo = p.codCategoria)
                WHERE c.nombre = :nombreCategoria";
    $stmt = $conn->prepare($sql);
    $stmt ->bindParam(":nombreCategoria",$_GET["categoria"]);
    $stmt -> execute();
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);
    
    //select para hacer bucle de la cantidad de productos para mostrar en la lista //mirar
    $sql = "SELECT count(p.nombre) AS cantidad
                FROM productos p JOIN categoria c ON (c.codigo = p.codCategoria)
                WHERE c.nombre = :nombreCategoria";
    $stmt = $conn->prepare($sql);
    $stmt ->bindParam(":nombreCategoria",$_GET["categoria"]);
    $stmt -> execute();
    $cantidad = $stmt->fetch(PDO::FETCH_ASSOC);

    for($i=0;$i>$cantidad;$i++){
        echo ($producto["nombre"]);
    }
?>


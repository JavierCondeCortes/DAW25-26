<?php
//CONEXION A LA BASE DE DATOS

try {

    $conn = new PDO('mysql:host=localhost;dbname=geografia', 'root', '');

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    echo "<p>error</p> " . $e->getMessage();
}

//CONSULTA DE EXISTENCIA DE CIUDAD

$sql = "SELECT nombre 
        FROM provincias
        WHERE nombre = :nombre";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':nombre', ($_GET["ciudad"]));
$stmt->execute();

$coincidencia = $stmt->fetch(PDO::FETCH_ASSOC); //COMPARACION DE QUE EXISTA COINCIDA CON LA CONSULTA
?>



<?php if(isset($_GET["buscar"])) : ?>
    <?php if($coincidencia) :?> <!--evitar que meta un dato inexsistente-->
        <h1>Buscando información sobre <?=($_GET["ciudad"])?></h1>

        <?php 
            $sql = 'SELECT * FROM localidades JOIN provincias USING (n_provincia) WHERE provincias.nombre = :nombre'; 
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre', $_GET["ciudad"], PDO::PARAM_STR); 
            $stmt->execute();
        ?>

    <!--FALTA MOSTRAR DATOS DE LAS LOCALIDADES-->

    <?php else :?>
        <?php
            header("Location: tarea2ProvinciasLocalidades.html"); 
            exit;
        ?>
        
        
    <?php endif ;?>
<?php else :?>
    
<?php endif ;?>
<!-- En esta pagina se creara desde el punto de vista del administrador, una pagina que nos permita
resgistrar a los restaurantes que hayan solicitado el servicio-->

<!-- Conexion a la base de datos -->
<?php 
$usuario = "root";
$contraseña = "";
$dbName = "proyectorestaurantes";
$host = "localhost";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbName", "$usuario", "$contraseña");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error conexión: " . $e->getMessage());
}

//creacion de variables para una mejor maniobralidad de los datos

$nombre = $_POST["nombre"] ?? null;
$correo = $_POST["correo"] ?? null;
$contraseñaSegura = isset($_POST["contraseña"]) ? password_hash($_POST["contraseña"], PASSWORD_DEFAULT) : null;
$codPostal = $_POST["codigoPostal"] ?? null;
$registro = $_POST["registro"] ?? null;

if ($registro) {
    try {
        $sql = "INSERT INTO info_restaurantes (nombre, correo, contrasenia, codigoPostal) 
                VALUES (:nombre, :correo, :contrasenia, :codPostal)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':contrasenia', $contraseñaSegura);
        $stmt->bindParam(':codPostal', $codPostal);
        $stmt->execute();
        echo "<p style='color:green;'>Registro exitoso.</p>";
    } catch(PDOException $e) {
        echo "<p style='color:red;'>Error al registrar: " . $e->getMessage() . "</p>";
    }
}
?>


<!-- Elementos HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Formulario de registro -->
    <form action="Registro.php" method="post">

    <label for="name">Nombre</label>
    <input type="text" name="nombre" id="name">
    
    <label for="email">Correo</label>
    <input type="email" name="correo" id="email">

    <label for="codPostal">CodPostal</label>
    <input type="number" name="codigoPostal" id="codPostal">
    
    <label for="password">Contraseña</label>
    <input type="password" name="contraseña" id="password">
    
    <button type="reset">Limpiar</button>
    <button type="submit" name="registro">Enviar</button>

    </form>
    
</body>
</html>


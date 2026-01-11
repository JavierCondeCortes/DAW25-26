<form action="" method="post">
    <label for="usuario">usuario</label>
    <input type="text" name="usuario">

    <label for="contraseña">contraseña</label>
    <input type="password" name="contrasenia">

    <input type="submit" value="login">
</form>

<?php
try {
    $conn = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";

    $sql = "Select nombre from usuarios where nombre = :nombre and contrasenia = :contrasenia";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $_POST['usuario']);
    $stmt->bindParam(':contrasenia', $_POST['contrasenia']);
    $stmt->execute();

    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        session_start();
        $_SESSION['usuario'] = $_POST['usuario'];
        header("Location: main.php");
        exit();
        
    } else {
        echo "Usuario o contraseña incorrectos";
    }



} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
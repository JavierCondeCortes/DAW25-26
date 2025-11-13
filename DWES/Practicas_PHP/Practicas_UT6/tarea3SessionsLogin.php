<?php
// CONEXION A BASE DE DATOS
try {
    $conn = new PDO("mysql:host=localhost;dbname=geografia", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("conexion fallida") . $e->getMessage;
}


?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="" method="post">

        <label for="UsuarioContraseña">Usuario/Correo</label>
        <input type="text" name="UserEmail" id="UsuarioContraseña" require>

        <label for="contraseña">Contraseña</label>
        <input type="password" name="password" id="contraseña" require>

        <button type="submit" name="enviar">Iniciar Sesion</button>
    </form>

</body>

</html>

<?php
if (isset($_POST['enviar'])) {
    if (isset($_POST['UserEmail'])) {
        if (isset($_POST['password'])) {

            // SELECT Usuario,Contraseña FROM infousers WHERE Usuario = "Concor" AND Contraseña = "ConcorMine"
            $contraseñaSegura = password_hash($_POST["password"], PASSWORD_DEFAULT);

            $sql = 'SELECT Usuario,Contrasena 
            FROM infousers 
            WHERE Usuario = :Usuario AND Contrasena = :Contrasena';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':Usuario', $_POST["UserEmail"], PDO::PARAM_STR);
            $stmt->bindParam(':Contrasena', $contraseñaSegura, PDO::PARAM_STR);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            //CREACION DE SESIONES
            session_start();
            $_SESSION["usuario"] = $user["Usuario"];
            $_SESSION["pagina"]= $_SERVER["PHP_SELF"];
            
            //VISUALIZACION EN PAGINA

            if ($user == true) {
                header("Location:./tarea3SessionsFinLogin.php");
            } else {
                echo ("Usuario no existe");
            }
        } else {
            echo "error en la contraseña";
        }
    } else {
        echo "error en el nombre o correo";
    }
}

?>
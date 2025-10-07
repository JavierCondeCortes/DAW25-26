<?php
session_start(); // Opcional si quieres usar sesiones

if (isset($_POST["email"]) && isset($_POST["contraseña"])) {
    $email = $_POST["email"];
    $contraseña = $_POST["contraseña"];

    if (!empty($email) && !empty($contraseña)) {
        try {
            // Conexión a la base de datos
            $conn = new PDO("mysql:host=localhost;dbname=servidorpruebas", "root", "");
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Buscar el usuario por email
            $sql = "SELECT contraseña, nombre FROM usuarios WHERE email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->execute([$email]);
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario && password_verify($contraseña, $usuario["contraseña"])) {
                echo "Bienvenido, " . htmlspecialchars($usuario["nombre"]);
                // Aquí podrías redirigir o iniciar sesión
                // $_SESSION["usuario"] = $usuario["nombre"];
                // header("Location: dashboard.php");
                // exit;
            } else {
                echo "Correo o contraseña incorrectos.";
            }

        } catch (PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
        }
    } else {
        echo "Por favor, completa todos los campos.";
    }
}
?>

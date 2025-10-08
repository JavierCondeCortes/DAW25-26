<?php
// ACCESO A DATOS
$servername = "localhost";
$database = "servidorpruebas";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // VERIFICACIÓN DE REGISTRO DE FORMULARIO
    if (
        isset($_POST["enviar"]) &&
        isset($_POST["nombre"]) &&
        isset($_POST["email"]) &&
        isset($_POST["contraseña"])
    ) {
        $nombre = trim($_POST["nombre"]);
        $email = trim($_POST["email"]);
        $contraseña = $_POST["contraseña"];

        if (!empty($nombre) && !empty($email) && !empty($contraseña)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

                // Verificar si el email ya está registrado
                $check = $conn->prepare("SELECT COUNT(*) FROM usuarios WHERE email = ?");
                $check->execute([$email]);

                if ($check->fetchColumn() > 0) {
                    echo "Este email ya está registrado.";
                } else {
                    // Encriptar contraseña
                    $contraseñaSegura = password_hash($contraseña, PASSWORD_DEFAULT);

                    // Insertar usuario
                    $sql = "INSERT INTO usuarios (email, nombre, contraseña) VALUES (?, ?, ?)";
                    $stmt = $conn->prepare($sql);
                    $stmt->execute([$email, $nombre, $contraseñaSegura]);

                    echo "Registro exitoso. Bienvenido, $nombre.";
                    header("Location: ./login.html");
                }

            } else {
                echo "El formato del email no es válido.";
            }
        } else {
            echo "Por favor, completa todos los campos.";
        }
    }

} catch (PDOException $e) {
    die("Error en la conexión: " . $e->getMessage());
}
?>

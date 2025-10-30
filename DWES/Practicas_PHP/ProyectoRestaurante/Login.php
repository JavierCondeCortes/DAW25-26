<!-- Login -->
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

<!-- crearemos formulario de login -->

<form action="" method="post">
    <label for="email">email</label>
    <input type="email" name="correo" id="email">

    <label for="password">contraseña</label>
    <input type="password" name="contrasenia" id="password">

    <label for="recordar">recordarme</label>
    <input type="checkbox" name="remember" id="recordar">

    <input type="submit" name="iniciar" value="Iniciar Sesión">


</form>

<!-- creamos las autenticaciones que debe resolver el login -->

<?php

$email = $_POST["correo"] ?? null;
$contraseniaIngresada = $_POST["contrasenia"] ?? null;
$recordarme = $_POST["remember"] ?? null;
$iniciar = $_POST["iniciar"] ?? null;

if (isset($iniciar)) {
    $sql = "SELECT nombre, contrasenia
                FROM info_restaurantes 
                WHERE correo = :email";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
}


//Opcion de recordar donde se almacena en una sesion guardada en un token
if ($resultado ?? null && password_verify($contraseniaIngresada, $resultado["contrasenia"])) {
    header("Location: ./Selection.php");

    // if ($recordarme == true) {
    //     // creamos una cookie donde se guardara un token del usuario para recordarle en la web
    //     $token = password_hash($resultado["email"], PASSWORD_DEFAULT);

    //     if (!isset($_COOKIE["loginToken"])) {
    //         setcookie("loginToken", $token, [
    //             "expires" => time() + 3600 * 24 * 7,   // 1 semana
    //             "secure" => true,
    //             "httponly" => true,                // no accesible por JavaScript
    //             "samesite" => "Strict"
    //         ]);
    //     }
    // }
} else {
    echo "Correo o contraseña incorrectos.";
}

echo password_hash("torres",PASSWORD_DEFAULT);

?>

<!-- <pre>
    <?= var_dump($_POST); ?>
</pre> -->
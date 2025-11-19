<?php
// ---------------------------
// INICIO DE SESIÓN
// ---------------------------
session_start();

// ---------------------------
// FUNCIONES (UT4)
// ---------------------------
function tablaMultiplicar($n) {
    $resultado = "";
    for ($i = 1; $i <= 10; $i++) {
        $resultado .= "$n x $i = " . ($n * $i) . "<br>";
    }
    return $resultado;
}

function sumarCinco($a, $b, $c, $d, $e) {
    return $a + $b + $c + $d + $e;
}

// ---------------------------
// COOKIES (UT6)
// ---------------------------
if (isset($_POST['recordar'])) {
    setcookie("usuario", $_POST['nombre'], time() + 3600, "/");
}

// ---------------------------
// VALIDACIÓN DE FORMULARIO (UT3)
// ---------------------------
$errores = [];
if (isset($_POST['enviar'])) {
    if (empty($_POST['nombre'])) {
        $errores[] = "El campo 'Nombre' es obligatorio.";
    }
    if (empty($_POST['numero'])) {
        $errores[] = "Debes introducir un número.";
    } elseif (!is_numeric($_POST['numero'])) {
        $errores[] = "El campo 'Número' debe ser numérico.";
    }
}

// ---------------------------
// PROCESAMIENTO SI NO HAY ERRORES
// ---------------------------
if (isset($_POST['enviar']) && count($errores) === 0) {
    $_SESSION['usuario'] = $_POST['nombre'];
    $_SESSION['numero'] = $_POST['numero'];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo Completo DWES</title>
</head>
<body>
<h1>Ejemplo Completo DWES</h1>

<?php
// Mostrar errores si los hay
if (count($errores) > 0) {
    echo "<h3>Errores:</h3><ul>";
    foreach ($errores as $error) {
        echo "<li>$error</li>";
    }
    echo "</ul>";
}
?>

<!-- FORMULARIO (UT3) -->
<form action="" method="post">
    <label>Nombre:</label>
    <input type="text" name="nombre" value="<?php echo $_COOKIE['usuario'] ?? ''; ?>"><br><br>

    <label>Número:</label>
    <input type="text" name="numero"><br><br>

    <label><input type="checkbox" name="recordar"> Recordar nombre en cookie</label><br><br>

    <input type="submit" name="enviar" value="Enviar">
</form>

<hr>

<?php
// Si ya tenemos datos válidos en sesión
if (isset($_SESSION['usuario'])) {
    echo "<h2>Bienvenido, " . $_SESSION['usuario'] . "</h2>";

    // Mostrar tabla de multiplicar (función + bucle)
    echo "<h3>Tabla de multiplicar del número " . $_SESSION['numero'] . "</h3>";
    echo tablaMultiplicar($_SESSION['numero']);

    // Ejemplo de suma con función
    echo "<h3>Ejemplo de suma de 5 números:</h3>";
    echo "La suma de 1+2+3+4+5 es: " . sumarCinco(1,2,3,4,5);

    // Ejemplo de control con if-else
    echo "<h3>Clasificación del número:</h3>";
    if ($_SESSION['numero'] % 2 == 0) {
        echo "El número es par.";
    } else {
        echo "El número es impar.";
    }
}
?>
</body>
</html>

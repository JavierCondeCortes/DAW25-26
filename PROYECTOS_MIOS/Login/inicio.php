<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "servidorpruebas";

try {
    $conn = new PDO(
        "mysql:host=$servername;dbname=$database",
        $username,
        $password
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "error de conexión: " . $e->getMessage();
}
?>

<body>
    <?php
    $sql = "SELECT nombre FROM usuarios";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // Mostrar resultados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $nombre = $row["nombre"];
    }

echo $nombre;
    ?>
</body>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Verificador de Anagramas</title>
</head>
<body>
  <h2>¿Son anagramas?</h2>

  <form method="get" action="">
    <label for="palabra1">Primera palabra:</label>
    <input type="text" id="palabra1" name="palabra1" required>
    <br><br>
    <label for="palabra2">Segunda palabra:</label>
    <input type="text" id="palabra2" name="palabra2" required>
    <br><br>
    <button type="submit">Verificar</button>
  </form>

  <?php
  function sonAnagramas($x, $y) {
    // Normalizar: quitar espacios y pasar a minúsculas
    $x = strtolower(str_replace(' ', '', $x));
    $y = strtolower(str_replace(' ', '', $y));

    if (strlen($x) !== strlen($y)) {
      return false;
    }

    $letrasX = str_split($x);
    $letrasY = str_split($y);

    sort($letrasX);
    sort($letrasY);

    return $letrasX === $letrasY;
  }

  if (isset($_GET["palabra1"]) && isset($_GET["palabra2"])) {
    $p1 = $_GET["palabra1"];
    $p2 = $_GET["palabra2"];

    echo "<h3>Resultado:</h3>";
    if (sonAnagramas($p1, $p2)) {
      echo "<p>'$p1' y '$p2' <strong>son anagramas</strong>.</p>";
    } else {
      echo "<p>'$p1' y '$p2' <strong>NO son anagramas</strong>.</p>";
    }
  }
  ?>
</body>
</html>

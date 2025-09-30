<?php
if (isset($_POST["enviar"])) {
?>

  <form action="" method="post">
    <h2>Datos Personales</h2>

    <label for="nombre">Nombre:</label>
    <?php
    if (isset($_POST["nombre"])) {
      echo '<input type="text" id="nombre" name="nombre" value="' . $_POST['nombre'] . '"><br>';
      if (empty($_POST["nombre"])) {
        echo "El nombre es obligatorio.<br>";
      }
    }
    echo '<br>';
    ?>

    <label for="apellido">Apellido:</label>
    <?php
    if (isset($_POST["apellido"])) {
      echo '<input type="text" id="apellido" name="apellido" value="' . $_POST['apellido'] . '"><br>';
      if (empty($_POST["apellido"])) {
        echo "El apellido es obligatorio.<br>";
      }
    }
    echo '<br>';
    ?>

    <label for="dni">DNI:</label>
    <?php
    if (isset($_POST["dni"])) {
      echo '<input type="text" id="dni" name="dni" value="' . $_POST['dni'] . '"><br>';
      if (empty($_POST["dni"])) {
        echo "El dni es obligatorio.<br>";
      }
    }
    echo '<br>'
    ?>

    <label for="fecha_nacimiento">Fecha de nacimiento:</label>
    <?php
    if (isset($_POST["fecha_nacimiento"])) {
      echo '<input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value="' . $_POST['fecha_nacimiento'] . '"><br>';
      if (empty($_POST["fecha_nacimiento"])) {
        echo "La fecha de naciemiento es obligatoria.<br>";
      }
    }
    echo '<br>'
    ?>

    <label for="email">Correo electrónico:</label>
    <?php
    if (isset($_POST["email"])) {
      echo '<input type="email" id="email" name="email" value="' . $_POST['email'] . '"><br>';
      if (empty($_POST["email"])) {
        echo "El email es obligatorio.<br>";
      }
    }
    echo '<br>'
    ?>

    <label for="telefono">Teléfono:</label>
    <?php
    if (isset($_POST["telefono"])) {
      echo '<input type="tel" id="telefono" name="telefono" value="' . $_POST['telefono'] . '"><br>';
      if (empty($_POST["telefono"])) {
        echo "El telefono es obligatorio.<br>";
      }
    }
    echo '<br>'
    ?>

    <h2>Datos Académicos</h2>

    <label for="curso">Curso actual:</label>
    <select id="curso" name="curso">
      <option value="">-- Selecciona --</option>
      <option value="1º ESO" <?php if (isset($_POST['curso']) && $_POST['curso'] == "1º ESO") echo 'selected'; ?>>1º ESO</option>
      <option value="2º ESO" <?php if (isset($_POST['curso']) && $_POST['curso'] == "2º ESO") echo 'selected'; ?>>2º ESO</option>
      <option value="3º ESO" <?php if (isset($_POST['curso']) && $_POST['curso'] == "3º ESO") echo 'selected'; ?>>3º ESO</option>
      <option value="4º ESO" <?php if (isset($_POST['curso']) && $_POST['curso'] == "4º ESO") echo 'selected'; ?>>4º ESO</option>
      <option value="Bachillerato" <?php if (isset($_POST['curso']) && $_POST['curso'] == "Bachillerato") echo 'selected'; ?>>Bachillerato</option>
      <option value="FP Básica" <?php if (isset($_POST['curso']) && $_POST['curso'] == "FP Básica") echo 'selected'; ?>>FP Básica</option>
      <option value="Grado Medio" <?php if (isset($_POST['curso']) && $_POST['curso'] == "Grado Medio") echo 'selected'; ?>>Grado Medio</option>
      <option value="Grado Superior" <?php if (isset($_POST['curso']) && $_POST['curso'] == "Grado Superior") echo 'selected'; ?>>Grado Superior</option>
    </select><br>

    <?php
    if (isset($_POST["enviar"]) && empty($_POST["curso"])) {
      echo "El curso es obligatorio.<br>";
    }
    echo "<br>";
    ?>

    <label for="asignaturas">Asignaturas favoritas:</label><br>

    <?php
    $asignaturasSeleccionadas = isset($_POST["asignaturas"]) ? $_POST["asignaturas"] : [];

    function marcarCheckbox($valor, $seleccionadas)
    {
      return in_array($valor, $seleccionadas) ? 'checked' : '';
    }

    echo '<input type="checkbox" name="asignaturas[]" value="Matemáticas" ' . marcarCheckbox("Matemáticas", $asignaturasSeleccionadas) . '> Matemáticas<br>';
    echo '<input type="checkbox" name="asignaturas[]" value="Lengua" ' . marcarCheckbox("Lengua", $asignaturasSeleccionadas) . '> Lengua<br>';
    echo '<input type="checkbox" name="asignaturas[]" value="Inglés" ' . marcarCheckbox("Inglés", $asignaturasSeleccionadas) . '> Inglés<br>';
    echo '<input type="checkbox" name="asignaturas[]" value="Historia" ' . marcarCheckbox("Historia", $asignaturasSeleccionadas) . '> Historia<br>';
    echo '<input type="checkbox" name="asignaturas[]" value="Informática" ' . marcarCheckbox("Informática", $asignaturasSeleccionadas) . '> Informática<br>';

    if (isset($_POST["enviar"]) && empty($_POST["asignaturas"])) {
      echo "Las asignaturas son obligatorias.<br>";
    }

    echo '<br>';
    ?>


    <label for="observaciones">Observaciones:</label><br>
    <textarea id="observaciones" name="observaciones" rows="4" cols="50"></textarea><br><br>

    <input type="submit" name="enviar" value="Enviar datos">
  </form>


  <td>
    <tr>
      <p>Nombre</p>
    </tr>
    <tr><?php echo $_POST["nombre"] ?></tr>
  </td>
  <td>
  <th>
    <p>apellido</p>
  </th>
  <tr><?php echo $_POST["apellido"] ?></tr>
  </td>
  <td>
  <th>
    <p>dni</p>
  </th>
  <tr><?php echo $_POST["dni"] ?></tr>
  </td>
  <td>
  <th>
    <p>fecha_nacimiento</p>
  </th>
  <tr><?php echo $_POST["fecha_nacimiento"] ?></tr>
  </td>
  <td>
  <th>
    <p>email</p>
  </th>
  <tr><?php echo $_POST["email"] ?></tr>
  </td>
  <td>
  <th>
    <p>curso</p>
  </th>
  <tr><?php echo $_POST["curso"] ?></tr>
  </td>
  <td>
  <th>
    <p>asignaturas</p>
  </th>
  <tr>
    <?php
    if (isset($_POST["asignaturas"])) {
      foreach ($_POST["asignaturas"] as $asignatura) {
        echo "<td>$asignatura </td>";
      }
    }
    ?>
  </tr>

  </td>
  <td>
  <th>
    <p>observaciones</p>
  </th>
  <tr><?php echo $_POST["observaciones"] ?></tr>
  </td>



<?php
}
?>
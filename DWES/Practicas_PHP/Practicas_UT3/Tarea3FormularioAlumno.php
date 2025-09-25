<?php 
    if (isset($_POST["enviar"])){
        if(empty($_POST["nombre"])||empty($_POST["apellido"])||empty($_POST["dni"]
            ||empty($_POST["fecha_nacimiento"]||empty($_POST["email"]
            ||empty($_POST["telefono"]))))){

            echo "./Tarea3FormularioAlumno.php"."a";


        }else{

        }
    }
?>


<form action="" method="post">
  <h2>Datos Personales</h2>

  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required><br><br>

  <label for="apellido">Apellido:</label>
  <input type="text" id="apellido" name="apellido" required><br><br>

  <label for="dni">DNI:</label>
  <input type="text" id="dni" name="dni" required><br><br>

  <label for="fecha_nacimiento">Fecha de nacimiento:</label>
  <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required><br><br>

  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="telefono">Teléfono:</label>
  <input type="tel" id="telefono" name="telefono"><br><br>

  <h2>Datos Académicos</h2>

  <label for="curso">Curso actual:</label>
  <select id="curso" name="curso" required>
    <option value="">-- Selecciona --</option>
    <option value="1º ESO">1º ESO</option>
    <option value="2º ESO">2º ESO</option>
    <option value="3º ESO">3º ESO</option>
    <option value="4º ESO">4º ESO</option>
    <option value="Bachillerato">Bachillerato</option>
    <option value="FP Básica">FP Básica</option>
    <option value="Grado Medio">Grado Medio</option>
    <option value="Grado Superior">Grado Superior</option>
  </select><br><br>

  <label for="asignaturas">Asignaturas favoritas:</label><br>
  <input type="checkbox" name="asignaturas[]" value="Matemáticas"> Matemáticas<br>
  <input type="checkbox" name="asignaturas[]" value="Lengua"> Lengua<br>
  <input type="checkbox" name="asignaturas[]" value="Inglés"> Inglés<br>
  <input type="checkbox" name="asignaturas[]" value="Historia"> Historia<br>
  <input type="checkbox" name="asignaturas[]" value="Informática"> Informática<br><br>

  <label for="observaciones">Observaciones:</label><br>
  <textarea id="observaciones" name="observaciones" rows="4" cols="50"></textarea><br><br>

  <input type="submit" name="enviar" value="Enviar datos">
</form>


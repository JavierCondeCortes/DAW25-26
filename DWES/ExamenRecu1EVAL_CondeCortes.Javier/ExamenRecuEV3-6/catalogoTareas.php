<?php
require "bbdd.php";

//siento el desastre de examen e intentado realizar todo aunque no este bien del todo.
//siento si es mucho lio pero e intentado expresar el codigo con los comentarios lo mejor posible.


//TAREA 2 ---------------------------------------------------------------------------------
//id del usuario  para sustituir lo de inicio de sesion
$usuario = 1;

$catalogoPersona = "SELECT * FROM tareas where id_usuario = :usuario";
$prioridadAlta = "SELECT * FROM tareas where id_usuario = :usuario AND prioridad = 'alta'";
$prioridadMedia = "SELECT * FROM tareas where id_usuario = :usuario AND prioridad = 'media'";
$prioridadBaja = "SELECT * FROM tareas where id_usuario = :usuario AND prioridad = 'baja'";


?>

<!-- filtro de prioridad -->
<h3>FILTRO PROPIEDADES</h3>
<form action="" method="get">
    <button type="submit" name="alta">Alta</button>
    <button type="submit" name="media">Media</button>
    <button type="submit" name="baja">Baja</button>
    <button type="submit" name="sinFiltro">Quitar filtro</button>
</form>

<?php
//salida default
$stmt = $conn->prepare($catalogoPersona);
$valor = 'sin filtro';

//salida de boton pulsado
if (isset($_GET['alta'])) {
    $stmt = $conn->prepare($prioridadAlta);
    $valor = 'prioridad alta';
} elseif (isset($_GET['media'])) {
    $stmt = $conn->prepare($prioridadMedia);
    $valor = 'prioridad media';
} elseif (isset($_GET['baja'])) {
    $stmt = $conn->prepare($prioridadBaja);
    $valor = 'prioridad baja';
} elseif (isset($_GET['sinFiltro'])) {
    $stmt = $conn->prepare($catalogoPersona);
    $valor = 'sin filtro';
}

$stmt->bindParam(':usuario', $usuario);
$stmt->execute();

echo "filtro aplicado: {$valor} <br>";

echo '------------------- <br> <br>';
//muestra de tareas
$hayTareas = $stmt->rowCount();


if ($hayTareas > 0) {
    echo '<table>';
    echo '<tr>';
    echo '<td>' . 'titulo' . '</td>';
    echo '<td>' . 'descripcion ' . '</td>';
    echo '<td>' . 'prioridad ' . '</td>';
    echo '<td>' . 'estado ' . '</td>';
    echo '</tr>';
    while ($tarea = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo '<tr>';
        echo '<td>' . $tarea['titulo'] . '</td>';
        echo '<td>' . $tarea['descripcion'] . '</td>';
        echo '<td>' . $tarea['prioridad'] . '</td>';
        echo '<td>' . $tarea['estado'] . '</td>';
        echo '</tr>';
    }
    echo '</table>';
} else {
    echo 'sin tareas';
}
?>



<!-- TAREA 3 --------------------------------------------------------------------------------- -->

<?php

$crearTarea = "INSERT INTO tareas (id_usuario,titulo,descripcion,prioridad,estado,fecha_creacion,fecha_completada) VALUES (:usuario,:titulo,:descripcion,:prioridad,:estado,:creacion,:completada)";
$verificacionExistencia = "SELECT titulo FROM tareas where titulo = :titulo";
$modificarExistencia = "UPDATE tareas SET descripcion=:descripcion, prioridad=Prioridad, estado=:Estado,fecha_completada=:completada";
?>




<h3>AGREGAR / EDITAR TAREA</h3>
<form action="" method="post">
    <label for="titulo">titulo</label>
    <input type="text" id="titulo" name="titulo">
    <label for="descripcion">descripcion</label>
    <input type="text" name="descripcion" id="descripcion">
    <label for="prioridad">prioridad</label>
    <input type="text" name="prioridad" id="prioridad">
    <label for="estado">estado</label>
    <input type="text" name="estado" placeholder="pendiente /completada">
    <button type="submit" name="enviar">enviar</button>
</form>

<?php
//FALTA VALIDAR LIMITES
//NO APARECEN ELEMENTO A LA ENVIAR
//CUANDO QUIERO EDITAR LA CONDICION DE BUSQUEDA DE EXISTENCIA DE TITULO EN LA BASE DE DATOS (QUE ES LO QUE ESTA JUSTO DEBAJO) NO LO INTERPRETA BIEN PARA HACER EL IF, PERO DEBERIA
//toda la logica esta bien, todo debe funcionar bien, pero no hace caso, no quiere funcionar como se debe

//al fin y al cabo se completa el primer punto del apartado 3, (titulo descripcion y prioridad) dentro de lo malo

$creacion = date('Y-m-d');
if (isset($_POST['enviar'])) {
    $stmt = $conn->prepare($verificacionExistencia);
    $stmt->bindParam(':titulo', $_POST['titulo']);
    $stmt->execute();

    if (isset($_POST['estado']) == 'completada') { //supuestamente cuando el estado sea completada debe poner los valor de la fecha a la variable para posteriormente ponerlo (validadcion)
        $completado = date('Y-m-d');
    } else {
        $completado = null;
    }


    if ($stmt) { //----------------------------------------------------------- comentar para que el apartado de insertar funcione algo
        if (!empty($_POST['titulo'])) { //validacion de titulo 
            if ($_POST['prioridad'] = 'alta' | 'media' | 'baja') { //validacion de prioridad
                if ($_POST['prioridad'] = 'pendiente' | 'completada') { //validacion de estado
                    $stmt = $conn->prepare($modificarExistencia);
                    $stmt->bindParam(':descripcion', $_POST['descripcion']);
                    $stmt->bindParam(':prioridad', $_POST['prioridad']);
                    $stmt->bindParam(':estado', $_POST['estado']);
                    $stmt->bindParam(':completada', $completado);
                    $stmt->execute();
                }
            }
        } else { //---------------------------------------------------------

            //hay que hacer doble click para que se agregue, volvio a suceder lo del delay en el click
            if (!empty($_POST['titulo'])) { //validacion de titulo
                if ($_POST['prioridad'] = 'alta' | 'media' | 'baja') { //validacion de prioridad
                    if ($_POST['prioridad'] = 'pendiente' | 'completada') { //validacion de estado
                        $completado = null;
                        $stmt = $conn->prepare($crearTarea);
                        $stmt->bindParam(':usuario', $usuario);
                        $stmt->bindParam(':titulo', $_POST['titulo']);
                        $stmt->bindParam(':descripcion', $_POST['descripcion']);
                        $stmt->bindParam(':prioridad', $_POST['prioridad']);
                        $stmt->bindParam(':estado', $_POST['estado']);
                        $stmt->bindParam(':creacion', $creacion);
                        $stmt->bindParam(':completada', $completado);
                        $stmt->execute();
                    }
                }
            }
        } // <<---------- comentar para tratar de hacer funcionar el insertar
    }
}
?>
<?php

if (isset($_POST["enviar"])) {
    $errores = [];
    if (empty($_POST["nombre"]) || empty($_POST["apellido"]) || empty($_POST["telefono"])) {
        $errores[] = "faltan datos por rellenar";
    }
    if (count($errores) > 0) {
        echo "errores encontrados" . "<br>";
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
?>
        <table border="solid, 1px">
            <tr>
                <th>
                    nombre
                </th>
                <td>
                    <?php echo $_POST["nombre"] ?>
                </td>
            </tr>
            <tr>
                <th>
                    apellidos
                </th>
                <td>
                    <?php echo $_POST["apellido"] ?>
                </td>
            </tr>
            <tr>
                <th>
                    telefono
                </th>
                <td>
                    <?php echo $_POST["telefono"] ?>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <?php
                        if (isset($_FILES["documento"]) && is_uploaded_file($_FILES["documento"]["tmp_name"])) {
                            $nombreArchivo = time() . "_" . ($_FILES["documento"]["name"]);
                            $dirDestino = "img/" . $nombreArchivo;
                            

                            if (move_uploaded_file($nombreArchivo, $dirDestino)) {
                                echo "Archivo subido";
                            } else {
                                echo "Error al mover el archivo";
                            }
                        } else {
                            echo "Imagen no subida";
                        }

                    ?>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                    comida favorita
                </th>
            </tr>
            <tr>
                <td colspan="2">
                    <?php
                    if (isset($_POST["comida"])) {
                        echo $_POST["comida"];
                    } else {
                        echo "no hubo comida seleccionada";
                    }
                    ?>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                    Deportes favoritos
                </th>
            </tr>
            <tr>
                <td colspan="2">
                    <?php
                    if (isset($_POST['Deportes'])) {
                        foreach ($_POST['Deportes'] as $deporte) {
                            echo $deporte . "<br>";
                        }
                    } else {
                        echo "No se seleccionó ningún deporte.";
                    }
                    ?>
                </td>
            </tr>
        </table>


<?php
    }
} else {
    require "./Tarea2FormularioPersona.php";
}

?>
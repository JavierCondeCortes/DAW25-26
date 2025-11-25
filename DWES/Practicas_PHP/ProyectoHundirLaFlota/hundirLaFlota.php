<link rel="stylesheet" href="./hundirLaFlota.css">
<!-- falta la creacion de la continuidad de los barcos, punto 9 -->

<?php
session_start();
//valores que damos al juego
$x = 10;
$y = 10;

$nBarcos = 4;
$longBarcos = 4;

//Sesiones para guardar las posiciones tecleadas
if (!isset($_SESSION['pulsCasillas']) || !isset($_SESSION['posBarcos'])) {
    $_SESSION['pulsCasillas'] = [];
    $_SESSION['posBarcos'] = [];
    //sesiones para guardar datos de pantalla y juego
    $_SESSION['nIntentos'];
    $_SESSION['barcosHundidos'];
}

// parametro para poder agregar las casillas pulsadas dentro de la sesion para que se queden guardadas
if (isset($_GET['casilla'])) {
    foreach ($_GET['casilla'] as $clave => $valor) {
        // Evita duplicados
        if (!in_array($valor, $_SESSION['pulsCasillas'])) {
            //no funciona con variable declarada $casillas que guarda la misma informacion que el original pero con delay porque espera al siguiente paso para asignar el valor 
            array_push($_SESSION['pulsCasillas'], $valor);
            //por cada click baja el contador de intentos
            $_SESSION['nIntentos']--;
        } else {
            //en el caso de que la casilla seleccionada este repe se mostrara un mensaje advirtiendo que ya se seleccionó
            echo ('-Casilla ya seleccionada ');
        }
    }
}

// Bucle para dar name y valor a los botones del juego
for ($ix = 0; $ix < $x; $ix++) {
    for ($iy = 0; $iy < $y; $iy++) {
        $clave = $ix . $iy;
        $tabla[$ix][$iy] = "<button type='submit' name='casilla[$clave]' value='$clave'>?</button>";
    }
}

//Generacion aleatoria de barcos en el panel, destruye y despues genera la nueva sesion para su implementacion
//al presionar reset, al momento que los intentos se hayan acabado o hasta que los barcos sean 0
if (isset($_GET['reset']) || $_SESSION['nIntentos'] == -1 || $_SESSION['barcosHundidos'] == 0) {
    session_destroy();
    session_start();

    //iniciarmos de nuevo las sesiones
    $_SESSION['pulsCasillas'] = [];
    $_SESSION['posBarcos'] = [];
    $_SESSION['barcosHundidos'] = $nBarcos*4;

    //en la generacion de los barcos buscamos que se genere de forma aleatoria
    for ($i = 0; $i < $nBarcos; $i++) {
        $ejeX = rand(0, $x - 1);
        $ejeY = rand(0, $y - 1);
        $posicionTabla = $ejeX . "_" . $ejeY;

        if (!in_array($posicionTabla, $_SESSION['posBarcos'])) {
            $_SESSION['posBarcos'][] = $posicionTabla;
        } else {
            $i--;
        }

        // //FASE EXPERIMENTAL----------------

        //en la generacion de los barcos buscamos que se genere de forma aleatoria
        for ($i = 0; $i < $nBarcos; $i++) {
            $ejeX = rand(0, $x - 1);
            $ejeY = rand(0, $y - 1);

            // Dirección aleatoria: 0 = horizontal, 1 = vertical
            $posRand = rand(0, 1);

            $posicionesBarco = [];

            if ($posRand === 0) { // Horizontal
                // Si cabe hacia la derecha, lo ponemos ahí; si no, hacia la izquierda
                if ($ejeX + $longBarcos <= $x) {
                    for ($j = 0; $j < $longBarcos; $j++) {
                        $posicionesBarco[] = ($ejeX + $j) . "_" . $ejeY;
                    }
                } else {
                    for ($j = 0; $j < $longBarcos; $j++) {
                        $posicionesBarco[] = ($ejeX - $j) . "_" . $ejeY;
                    }
                }
            } else { // Vertical
                // Si cabe hacia abajo, lo ponemos ahí; si no, hacia arriba
                if ($ejeY + $longBarcos <= $y) {
                    for ($j = 0; $j < $longBarcos; $j++) {
                        $posicionesBarco[] = $ejeX . "_" . ($ejeY + $j);
                    }
                } else {
                    for ($j = 0; $j < $longBarcos; $j++) {
                        $posicionesBarco[] = $ejeX . "_" . ($ejeY - $j);
                    }
                }
            }

            // Comprobar que ninguna posición esté ocupada antes de añadir
            $ocupado = false;
            foreach ($posicionesBarco as $pos) {
                if (in_array($pos, $_SESSION['posBarcos'])) {
                    $ocupado = true;
                    break;
                }
            }

            if ($ocupado) {
                // Si hay solapamiento, repetimos este barco
                $i--;
            } else {
                $_SESSION['posBarcos'] = array_merge($_SESSION['posBarcos'], $posicionesBarco);
            }
        }

        //     //FASE EXPERIMENTAL-------------------
    }



    header("Location: entrada.php");
}

//aviso de que no quedan intenos
if ($_SESSION['nIntentos'] === 0) {
    echo ('-Te quedaste sin intentos ');
}

// Bucle para dar name y valor a los botones del juego
for ($ix = 0; $ix < $x; $ix++) {
    for ($iy = 0; $iy < $y; $iy++) {
        $clave = $ix . "_" . $iy;
        $tabla[$ix][$iy] = "<button type='submit' name='casilla[$clave]' value='$clave'>?</button>";

        // acceso al array para cambiar de color la casilla que este seleccionada
        if (isset($_SESSION['pulsCasillas'])) {
            //pintar agua
            if (in_array($clave, $_SESSION['pulsCasillas'])) {
                $tabla[$ix][$iy] = "<button type='submit' id='pulso' name='casilla[$clave]' value='$clave'></button>";
            }
            // pintar barco
            if (in_array($clave, $_SESSION['posBarcos']) && (in_array($clave, $_SESSION['pulsCasillas']))) {
                $tabla[$ix][$iy] = "<button type='submit' id='barco' name='casilla[$clave]' value='$clave'>x</button>";
            }
        }
    }
}

//condicion a cumplir para que el contador de barcos dados reduzca
if (in_array(end($_SESSION['pulsCasillas']), $_SESSION['posBarcos']) == true) {
    $_SESSION['barcosHundidos']--;
    echo ("-Tocado ");
}

?>

<!-- ---------------------------------------------------FORMULARIO TABLA JUEGO--------------------------------------------------------------------- -->

<form action="" method="get">
    <div id="principal">
        <!-- tabla donde pintaremos todos los cuadros del tablero de juego -->
        <table>
            <?php
            foreach ($tabla as $fila) {
                ?>
                <tr><?php
                foreach ($fila as $valor) {
                    ?>
                        <td id="tabla"><?= $valor ?></td>
                        <?php
                }
                ?>
                </tr>
                <?php
            }
            ?>
        </table>
        <!-- tabla donde estableceremos los datos del juego + boton de reset -->
        <table id="info">
            <tr>
                <td>Nº de intento/s: <?php print_r($_SESSION['nIntentos']); ?></td>
                <td></td>
            </tr>
            <tr>
                <td>barcos Totales: <?php echo $nBarcos*4 ?></td>
                <td></td>
            </tr>
            <tr>
                <td>restantes: <?php print_r($_SESSION['barcosHundidos']) ?> </td>
                <td></td>
            </tr>
            <tr>
                <td>
                    <form action="" method="get">
                        <button type="submit" id="restablecer" name="reset">Resetear</button>
                    </form>
                </td>
            </tr>
        </table>
    </div>
</form>
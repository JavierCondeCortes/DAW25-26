<link rel="stylesheet" href="./hundirLaFlota.css">

<?php
//valores que damos al juego
$x = 10;
$y = 10;

$nBarcos = 4;
$longBarcos = 4;

//Sesiones para guardar las posiciones tecleadas
session_start();
if (!isset($_SESSION['pulsCasillas']) || !isset($_SESSION['posBarcos'])) {
    $_SESSION['pulsCasillas'] = [];
    $_SESSION['posBarcos'] = [];
}

// parametro para poder agregar las casillas pulsadas dentro de la sesion para que se queden guardadas
if (isset($_GET['casilla'])) {
    foreach ($_GET['casilla'] as $clave => $valor) {
        // Evita duplicados
        if (!in_array($valor, $_SESSION['pulsCasillas'])) {
            //no funciona con variable declarada $casillas que guarda la misma informacion que el original pero con delay porque espera al siguiente paso para asignar el valor 
            array_push($_SESSION['pulsCasillas'], $valor);
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

//generamos una interacion cuando se de al boton de restart
if (isset($_GET['reset'])) {
    //destruimos las sesiones
    session_destroy();
    session_start();

    //iniciarmos de nuevo las sesiones
    $_SESSION['pulsCasillas'] = [];
    $_SESSION['posBarcos'] = [];


    //creamos un bucle para la aleatoriedad de los barcos con ejex e ejey, ademas de un parametro $orientacion barcos para determinar
    //si es horizontal u vertical.

    for ($i = 0; $i < $nBarcos; $i++) {
        $orientacionBarcos = rand(0,1);
        $barcox = rand(0, $x - 1);
        $barcoy = rand(0, $y - 1);
        $posicionTabla = $barcox . $barcoy;

        if($orientacion = 1){  
            //horizontal 
            // for($k=0; $k<$longBarcos; $k++){ //error de compilacion queda cargando
                if (!in_array($posicionTabla, $_SESSION['posBarcos'])) {
                    $_SESSION['posBarcos'][] = $posicionTabla;
                } else {
                    $i--;
                }
            // }
        }//else{
        //     if (!in_array($posicionTabla, $_SESSION['posBarcos'])) {
        //             $_SESSION['posBarcos'][] = $posicionTabla;
        //         } else {
        //             $i--;
        //         }
        // }
    }
}

// Bucle para dar name y valor a los botones del juego
for ($ix = 0; $ix < $x; $ix++) {
    for ($iy = 0; $iy < $y; $iy++) {
        $clave = $ix . $iy;
        $tabla[$ix][$iy] = "<button type='submit' name='casilla[$clave]' value='$clave'>?</button>";

        // acceso al array para cambiar de color la casilla que este seleccionada
        if (isset($_SESSION['pulsCasillas'])) {
            //pintar agua
            if (in_array($clave, $_SESSION['pulsCasillas'])) {
                $tabla[$ix][$iy] = "<button type='submit' id='pulso' name='casilla[$clave]' value='$clave'>x</button>";
            }
            // pintar barco
            if (in_array($clave, $_SESSION['pulsCasillas']) && in_array($clave, $_SESSION['posBarcos'])) {
                $tabla[$ix][$iy] = "<button id='barco' disabled>x</button>";
            }
        }
    }
}

// echo ($orientacionBarcos);
// print_r($_SESSION['pulsCasillas']);
print_r($_SESSION['posBarcos']);


?>

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
                        <td id="tabla"><?= $valor ?></td><?php
                                                        }
                                                            ?>
                </tr><?php
                    }
                        ?>
        </table>
        <!-- tabla donde estableceremos los datos del juego + boton de reset -->
        <table id="info">
            <tr>
                <td>Nº de intento/s:</td>
                <td></td>
            </tr>
            <tr>
                <td>A hundir:</td>
                <td></td>
            </tr>
            <tr>
                <td>Hundidos:</td>
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
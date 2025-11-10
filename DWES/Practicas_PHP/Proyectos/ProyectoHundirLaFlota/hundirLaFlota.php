<link rel="stylesheet" href="./hundirLaFlota.css">
<!-- falta la creacion de la continuidad de los barcos punto 9 y 7 -->

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
if (isset($_GET['reset']) || $_SESSION['nIntentos']==-1 || $_SESSION['barcosHundidos'] == 0) {
    session_destroy();
    session_start();

    //iniciarmos de nuevo las sesiones
    $_SESSION['pulsCasillas'] = [];
    $_SESSION['posBarcos'] = [];
    $_SESSION['barcosHundidos'] = $nBarcos;


    for ($i = 0; $i < $nBarcos; $i++) {
        $posicionTabla = (rand(0, $x - 1) . "_" . rand(0, $y - 1));
        if (!in_array($posicionTabla, $_SESSION['posBarcos'])) {
            $_SESSION['posBarcos'][] = $posicionTabla;
        } else {
            $i--;
        }
    }
    header("Location: entrada.php");
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
if(in_array(end($_SESSION['pulsCasillas']),$_SESSION['posBarcos'])==true){
    $_SESSION['barcosHundidos']--;
}
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
                <td>Nº de intento/s: <?php  print_r($_SESSION['nIntentos']);?></td>
                <td></td>
            </tr>
            <tr>
                <td>A hundir: <?php echo $nBarcos ?></td>
                <td></td>
            </tr>
            <tr>
                <td>Hundidos: <?php print_r($_SESSION['barcosHundidos'])?> </td>
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
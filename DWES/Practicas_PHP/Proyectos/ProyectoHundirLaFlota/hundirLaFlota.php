<link rel="stylesheet" href="./hundirLaFlota.css">

<?php
//valores que damos al juego
$x = 10;
$y = 10;

$nBarcos = 4;
$longBarcos =4;

//Sesiones para guardar las posiciones tecleadas
session_start();

//bucle parqa dar name y valor a los botones del juego
for ($ix = 0; $ix < $x; $ix++) {
    for ($iy = 0; $iy < $y; $iy++) {
        $tabla[$ix][$iy]="<button type='submit' value='$ix$iy' name='casilla'>?</button>";

        if(isset($_POST["casilla"])){
            
            $tabla[$ix][$iy]="<button type='submit' id='pulso' value='$ix$iy' name='casilla'>x</button>";
            $registro=[];
        }
    }
}


?>
<form action="" method="post">
    <div id="principal">
        <!-- tabla donde pintaremos todos los cuadros del tablero de juego -->
        <table>
            <?php 
                foreach($tabla as $fila){
                    ?><tr><?php 
                        foreach($fila as $valor){
                            ?><td id="tabla"><?= $valor ?></td><?php
                        }
                    ?></tr><?php 
                }
            ?>
        </table>
        <!-- tabla donde estableceremos los datos del juego + boton de reset -->
        <table id="info">
            <tr>
                <td>Nº de intento/s:</td><td></td>
            </tr>
            <tr>
                <td>A hundir:</td><td></td>
            </tr>
            <tr>
                <td>Hundidos:</td><td></td>
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
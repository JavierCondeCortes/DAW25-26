<?php
include_once("Soporte.php");

class CintaVideo extends Soporte {
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private int $duracion
    ) {
        parent::__construct($numero, $precio, $titulo);
    }

    public function muestraResumen() {
        parent::muestraResumen();
        echo "<p>Duración: ".$this->duracion." minutos</p>";
    }
}
?>

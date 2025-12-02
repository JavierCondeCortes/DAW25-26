<?php
include_once("Soporte.php");

class Juego extends Soporte {
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private int $minNumJugadores,
        private int $maxNumJugadores,
        public string $consola
    ) {
        parent::__construct($numero, $precio, $titulo);
    }

    public function jugadoresPosibles() {
        echo "<p>Jugadores posibles: ".$this->minNumJugadores." - ".$this->maxNumJugadores."</p>";
    }

    public function muestraResumen() {
        parent::muestraResumen();
        $this->jugadoresPosibles();
        echo "<p>Consola: ".$this->consola."</p>";
    }
}
?>

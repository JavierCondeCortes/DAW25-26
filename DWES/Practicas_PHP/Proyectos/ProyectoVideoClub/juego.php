<?php 
include_once("soporte.php");

class cintaVideo extends Soporte{
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private int $minNumJugadores,
        private int $maxNumJugadores,
        public string $consola,
    ){
        parent::__construct($numero);
        parent::__construct($precio);
        parent::__construct($titulo);
    }

    public function jugadoresPosibles(){
        echo "<p>Jugadores Posibles".$this->maxNumJugadores - $this->minNumJugadores."</p>";
    }

    public function muestraResumen()
    {
        return parent::muestraResumen();
        echo "<p>".$this->minNumJugadores."</p>";
        echo "<p>".$this->maxNumJugadores."</p>";
    }
}
?>
?>
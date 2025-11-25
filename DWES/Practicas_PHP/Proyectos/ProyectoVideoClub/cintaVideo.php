<?php 
include_once("soporte.php");

class cintaVideo extends Soporte{
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private int $duracion,
    ){
        parent::__construct($numero);
        parent::__construct($precio);
        parent::__construct($titulo);
    }

    public function muestraResumen()
    {
        return parent::muestraResumen();
        echo "<p>".$this->duracion."</p>";
    }
}
?>
<?php 
include_once("soporte.php");

class Dvd extends Soporte{
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private string $formaPantalla,
        private string $idiomas,
    ){
        parent::__construct($numero);
        parent::__construct($precio);
        parent::__construct($titulo);
    }

    public function muestraResumen()
    {
        return parent::muestraResumen();
        echo "<p>".$this->formaPantalla."</p>";
        echo "<p>".$this->idiomas."</p>";
    }
}
?>

?>
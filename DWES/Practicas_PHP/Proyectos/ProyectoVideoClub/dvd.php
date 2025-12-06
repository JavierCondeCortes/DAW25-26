<?php
namespace Dwes\ProyectoVideoclub;

include_once("Soporte.php");

class Dvd extends Soporte {
    public function __construct(
        int $numero,
        int $precio,
        string $titulo,
        private string $formaPantalla,
        private string $idiomas
    ) {
        parent::__construct($numero, $precio, $titulo);
    }

    public function muestraResumen(): void {
        parent::muestraResumen();
        echo "<p>Pantalla: {$this->formaPantalla}</p>";
        echo "<p>Idiomas: {$this->idiomas}</p>";
    }
}

<?php
class Soporte {
    public function __construct(
        protected int $numero,
        private int $precio,
        public string $titulo
    ) {}

    public function getPrecio() {
        echo "<p>Precio: ".$this->precio." €</p>";
    }

    public function getPrecioConIva() {
        $precioConIva = $this->precio * 1.21; // precio + 21% IVA
        echo "<p>Precio con IVA: ".$precioConIva." €</p>";
    }

    public function getNumero() {
        return $this->numero;
    }

    public function muestraResumen() {
        echo "<p>Título: ".$this->titulo."</p>";
        echo "<p>Precio base: ".$this->precio." €</p>";
        $this->getPrecioConIva();
    }
}
?>

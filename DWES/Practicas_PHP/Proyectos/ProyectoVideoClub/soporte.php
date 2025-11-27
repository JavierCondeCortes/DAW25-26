<!-- class Soporte{
    public function __construct(
        protected int $numero,
        private  int $precio,
        public String $titulo,
    )
    {}

    public function getPrecio(){
        echo "<p>precio: ".$this->precio."</p>";
    }
    public function getPrecioConIva(){
        echo "<p>precio con Iva: ".$this->precio*0.21."</p>";
    }
    public function getNumero(){
        echo "<p>numero: ".$this->numero."</p>";
    }
    public function muestraResumen(){
        echo "<p>precio: ".$this->titulo."</p>";
        echo "<p>precio: ".$this->precio."</p>";
        echo "<p>precio con iva: ".$this->precio*0.21."</p>";
    }
} -->

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
        echo "<p>Número: ".$this->numero."</p>";
    }

    public function muestraResumen() {
        echo "<p>Título: ".$this->titulo."</p>";
        echo "<p>Precio base: ".$this->precio." €</p>";
        $this->getPrecioConIva();
    }
}
?>

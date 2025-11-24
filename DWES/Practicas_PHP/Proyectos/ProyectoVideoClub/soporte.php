<?php

class Soporte{
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
}

?>
<?php 
namespace ejercicio01Importar;

const IVA =0.21;

class Producto {
    public $nombre;
    public function muestra() : void {
        print "<p>Prod: ".$this->nombre. "</p>";
    }
}
?>
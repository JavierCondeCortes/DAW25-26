<!-- class Cliente{
    public function __construct(
        public string $nombre,
        private int $numero,
        private array $soportesAlquilados=[], 
        private int $duracion,
        private int $maxAlquilerConcurrente
    )
    {}
} -->


<?php 
class Cliente {
    public function __construct(
        public string $nombre,
        private int $numero,
        private array $soportesAlquilados = [], 
        private int $maxAlquilerConcurrente = 3
    ){}

    public function alquilarSoporte($soporte) {
        if(count($this->soportesAlquilados) < $this->maxAlquilerConcurrente) {
            $this->soportesAlquilados[] = $soporte;
            echo "<p>Soporte alquilado: ".$soporte->titulo."</p>";
        } else {
            echo "<p>No puedes alquilar más soportes.</p>";
        }
    }
    public function tieneAlquilado($soporte){
        if(in_array($soporte,$this->soportesAlquilados)){
            echo("el soporte esta alquilado");
        }else{
            echo("el soporte no esta alquilado");
        }
    }

    public function devolverSoporte($soporte){
        $posicion = array_search($soporte,$this->soportesAlquilados);
        if($posicion == true){
            array_splice($this->soportesAlquilados,$posicion,1);
        }
    }
    
    public function listaAlquileres(){
        print_r($this->soportesAlquilados);
        echo("<br>");
    }

    public function resumenCliente(){
        echo("nombre".$this->nombre);
        echo("numero".$this->numero);
        echo("soportes Alquilados".$this->soportesAlquilados);
    }
}
?>


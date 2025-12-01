<?php
class Cliente {
    public function __construct(
        public string $nombre,
        private int $numero,
        private array $soportesAlquilados = [],
        private int $maxAlquilerConcurrente = 3
    ) {}

    public function getNumero() {
        return $this->numero;
    }

    public function alquilarSoporte($soporte) {
        if(count($this->soportesAlquilados) < $this->maxAlquilerConcurrente) {
            $this->soportesAlquilados[] = $soporte;
            echo "<p>Soporte alquilado: ".$soporte->titulo."</p>";
        } else {
            echo "<p>No puedes alquilar más soportes.</p>";
        }
    }

    public function tieneAlquilado($soporte) {
        if(in_array($soporte, $this->soportesAlquilados, true)) {
            echo "<p>El soporte está alquilado.</p>";
        } else {
            echo "<p>El soporte no está alquilado.</p>";
        }
    }

    public function devolverSoporte($soporte) {
        $posicion = array_search($soporte, $this->soportesAlquilados, true);
        if($posicion !== false) {
            array_splice($this->soportesAlquilados, $posicion, 1);
            echo "<p>Soporte devuelto: ".$soporte->titulo."</p>";
        }
    }

    public function listaAlquileres() {
        echo "<h3>Soportes alquilados:</h3>";
        foreach($this->soportesAlquilados as $s) {
            echo "- ".$s->titulo."<br>";
        }
    }

    public function resumenCliente() {
        echo "<p>Nombre: ".$this->nombre."</p>";
        echo "<p>Número: ".$this->numero."</p>";
        $this->listaAlquileres();
    }
}
?>

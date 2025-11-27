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
        private int $duracion = 0,
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
}
?>


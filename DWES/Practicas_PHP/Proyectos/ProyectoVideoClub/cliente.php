<?php 
class Cliente{
    public function __construct(
        public string $nombre,
        private int $numero,
        private array $soportesAlquilados=[], 
        private int $duracion,
        private int $maxAlquilerConcurrente
    )
    {}
}
?>

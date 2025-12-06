<?php
namespace Dwes\ProyectoVideoclub;

class Soporte {
    public bool $alquilado = false;

    public function __construct(
        protected int $numero,
        private int $precio,
        public string $titulo
    ) {}

    public function getNumero(): int {
        return $this->numero;
    }

    public function muestraResumen(): void {
        echo "<p>Título: {$this->titulo}</p>";
        echo "<p>Precio base: {$this->precio} €</p>";
        echo "<p>Precio con IVA: ".($this->precio * 1.21)." €</p>";
        echo "<p>Alquilado: ".($this->alquilado ? "Sí" : "No")."</p>";
    }
}

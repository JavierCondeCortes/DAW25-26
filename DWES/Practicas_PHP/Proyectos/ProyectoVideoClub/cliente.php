<?php
namespace Dwes\ProyectoVideoclub;

use Dwes\ProyectoVideoclub\Util\CupoSuperadoException;
use Dwes\ProyectoVideoclub\Util\SoporteYaAlquiladoException;

class Cliente {
    public function __construct(
        public string $nombre,
        private int $numero,
        private array $soportesAlquilados = [],
        private int $maxAlquilerConcurrente = 3
    ) {}

    public function getNumero(): int {
        return $this->numero;
    }

    public function alquilarSoporte(Soporte $soporte): void {
        if ($soporte->alquilado) {
            throw new SoporteYaAlquiladoException("El soporte ya está alquilado.");
        }
        if (count($this->soportesAlquilados) >= $this->maxAlquilerConcurrente) {
            throw new CupoSuperadoException("Has superado el cupo de alquileres.");
        }
        $soporte->alquilado = true;
        $this->soportesAlquilados[] = $soporte;
    }

    public function devolverSoporte(Soporte $soporte): void {
        $posicion = array_search($soporte, $this->soportesAlquilados, true);
        if ($posicion !== false) {
            $soporte->alquilado = false;
            array_splice($this->soportesAlquilados, $posicion, 1);
        }
    }

    public function listaAlquileres(): void {
        if (empty($this->soportesAlquilados)) {
            echo "<p>No tiene alquileres activos.</p>";
        } else {
            echo "<p>Alquileres:</p><ul>";
            foreach ($this->soportesAlquilados as $s) {
                echo "<li>{$s->titulo}</li>";
            }
            echo "</ul>";
        }
    }

    // 👇 Método que faltaba
    public function resumenCliente(): void {
        echo "<p>Nombre: {$this->nombre}</p>";
        echo "<p>Número: {$this->numero}</p>";
        $this->listaAlquileres();
    }
}

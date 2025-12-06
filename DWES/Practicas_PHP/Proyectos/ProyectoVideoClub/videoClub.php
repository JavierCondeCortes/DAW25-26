<?php
namespace Dwes\ProyectoVideoclub;

use Dwes\ProyectoVideoclub\Util\ClienteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;

include_once("Soporte.php");
include_once("CintaVideo.php");
include_once("Dvd.php");
include_once("Juego.php");
include_once("Cliente.php");

class VideoClub {
    private int $numProductos = 0;
    private int $numSocios = 0;
    private int $numProductosAlquilados = 0;
    private int $numTotalAlquileres = 0;

    public function __construct(
        private string $nombre,
        private array $productos = [],
        private array $socios = []
    ) {}

    // -------------------------------

    public function incluirProducto(Soporte $producto): void {
        $this->productos[] = $producto;
        $this->numProductos++;
    }

    public function incluirCintaVideo(string $titulo, int $precio, int $duracion): void {
        $numero = $this->numProductos + 1;
        $video = new CintaVideo($numero, $precio, $titulo, $duracion);
        $this->incluirProducto($video);
    }

    public function incluirDvd(string $titulo, int $precio, string $idiomas, string $pantalla): void {
        $numero = $this->numProductos + 1;
        $dvd = new Dvd($numero, $precio, $titulo, $pantalla, $idiomas);
        $this->incluirProducto($dvd);
    }

    public function incluirJuego(string $titulo, int $precio, string $consola, int $minJ, int $maxJ): void {
        $numero = $this->numProductos + 1;
        $juego = new Juego($numero, $precio, $titulo, $minJ, $maxJ, $consola);
        $this->incluirProducto($juego);
    }

    // -------------------------------

    public function incluirSocio(string $nombre, int $maxAlquileresConcurrentes = 3): Cliente {
        $numero = $this->numSocios + 1;
        $socio = new Cliente($nombre, $numero, [], $maxAlquileresConcurrentes);
        $this->socios[] = $socio;
        $this->numSocios++;
        return $socio;
    }

    // -------------------------------

    public function listarProductos(): void {
        echo "<h3>Productos disponibles:</h3>";
        foreach ($this->productos as $p) {
            $p->muestraResumen();
        }
    }

    public function listarSocios(): void {
        echo "<h3>Socios registrados:</h3>";
        foreach ($this->socios as $s) {
            $s->resumenCliente();
        }
    }

    // -------------------------------

    public function alquilarSocioProducto(int $numSocio, int $numeroSoporte): void {
        try {
            $socio = $this->buscarSocio($numSocio);
            $soporte = $this->buscarSoporte($numeroSoporte);

            $socio->alquilarSoporte($soporte);
            $this->numProductosAlquilados++;
            $this->numTotalAlquileres++;
        } catch (\Exception $e) {
            echo "<p>Error: {$e->getMessage()}</p>";
        }
    }

    public function alquilarSocioProductos(int $numSocio, array $numerosProductos): void {
        try {
            $socio = $this->buscarSocio($numSocio);
            $soportes = [];
            foreach ($numerosProductos as $num) {
                $soportes[] = $this->buscarSoporte($num);
            }
            // Verificar atomicidad: si alguno está alquilado, cancelar
            foreach ($soportes as $s) {
                if ($s->alquilado) {
                    echo "<p>Operación cancelada: uno de los productos ya está alquilado.</p>";
                    return;
                }
            }
            foreach ($soportes as $s) {
                $socio->alquilarSoporte($s);
                $this->numProductosAlquilados++;
                $this->numTotalAlquileres++;
            }
        } catch (\Exception $e) {
            echo "<p>Error: {$e->getMessage()}</p>";
        }
    }

    // -------------------------------

    public function devolverSocioProducto(int $numSocio, int $numeroSoporte): void {
        try {
            $socio = $this->buscarSocio($numSocio);
            $soporte = $this->buscarSoporte($numeroSoporte);
            $socio->devolverSoporte($soporte);
            $this->numProductosAlquilados--;
        } catch (\Exception $e) {
            echo "<p>Error: {$e->getMessage()}</p>";
        }
    }

    public function devolverSocioProductos(int $numSocio, array $numerosProductos): void {
        foreach ($numerosProductos as $num) {
            $this->devolverSocioProducto($numSocio, $num);
        }
    }

    // -------------------------------

    private function buscarSocio(int $numSocio): Cliente {
        foreach ($this->socios as $s) {
            if ($s->getNumero() === $numSocio) return $s;
        }
        throw new ClienteNoEncontradoException("Socio no encontrado.");
    }

    private function buscarSoporte(int $numeroSoporte): Soporte {
        foreach ($this->productos as $p) {
            if ($p->getNumero() === $numeroSoporte) return $p;
        }
        throw new SoporteNoEncontradoException("Soporte no encontrado.");
    }


    public function getNumProductosAlquilados(): int {
        return $this->numProductosAlquilados;
    }

    public function getNumTotalAlquileres(): int {
        return $this->numTotalAlquileres;
    }
}

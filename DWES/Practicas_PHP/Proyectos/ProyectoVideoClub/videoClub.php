<!-- class videoClub{
    public function __construct(
        private string $nombre,
        private array $productos=[],
        private  int $numProductos,
        private array $socios=[],
        private int $numSocios,
    )
    {}
} -->


<?php

include_once("Soporte.php");
include_once("CintaVideo.php");
include_once("Dvd.php");
include_once("Juego.php");
include_once("Cliente.php");

class VideoClub {
    public function __construct(
        private string $nombre,
        private array $productos = [],
        private int $numProductos = 0,
        private array $socios = [],
        private int $numSocios = 0
    ) {
    }

    public function incluirProducto($producto)
    {
        $this->productos[] = $producto;
        $this->numProductos++;
    }

    public function incluirCintaVideo(string $titulo, int $precio, int $duracion)
    {
        $numero = $this->numProductos + 1; // asignar número único
        $video = new CintaVideo($numero, $precio, $titulo, $duracion);
        $this->incluirProducto($video);
    }

    public function incluirDvd(string $titulo, int $precio, string $idiomas, string $pantalla)
    {
        $numero = $this->numProductos + 1;
        $dvd = new Dvd($numero, $precio, $titulo, $pantalla, $idiomas);
        $this->incluirProducto($dvd);
    }

    public function incluirJuego(string $titulo, int $precio, string $consola, int $minJ, int $maxJ)
    {
        $numero = $this->numProductos + 1;
        $juego = new Juego($numero, $precio, $titulo, $minJ, $maxJ, $consola);
        $this->incluirProducto($juego);
    }


    public function incluirSocio(string $nombre, int $maxAlquileresConcurrentes = 3)
    {
        $numero = $this->numSocios + 1; // asignar número único al socio
        $socio = new Cliente($nombre, $numero, [], $maxAlquileresConcurrentes);
        $this->socios[] = $socio;
        $this->numSocios++;
        return $socio; // opcional, para usar el objeto recién creado
    }


    public function listarProductos()
    {
        echo "<h3>Productos disponibles:</h3>";
        foreach ($this->productos as $p) {
            $p->muestraResumen();
        }
    }

    public function listarSocios()
    {
        echo "<h3>Socios registrados:</h3>";
        foreach ($this->socios as $s) {
            $s->resumenCliente();
        }
    }

    public function alquilarSocioProducto($numeroCliente, $numeroSoporte)
    {
        foreach ($this->socios as $socio) {
            if ($socio->getNumero() == $numeroCliente) {
                foreach ($this->productos as $producto) {
                    if ($producto->getNumero() == $numeroSoporte) {
                        $socio->alquilarSoporte($producto);
                        return;
                    }
                }
            }
        }
        echo "<p>No se pudo realizar el alquiler.</p>";
    }
}
?>
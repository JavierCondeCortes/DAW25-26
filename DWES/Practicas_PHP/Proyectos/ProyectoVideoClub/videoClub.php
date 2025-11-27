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
class VideoClub {
    public function __construct(
        private string $nombre,
        private array $productos = [],
        private int $numProductos = 0,
        private array $socios = [],
        private int $numSocios = 0
    ){}

    public function agregarProducto($producto) {
        $this->productos[] = $producto;
        $this->numProductos++;
    }

    public function agregarSocio($cliente) {
        $this->socios[] = $cliente;
        $this->numSocios++;
    }
}
?>

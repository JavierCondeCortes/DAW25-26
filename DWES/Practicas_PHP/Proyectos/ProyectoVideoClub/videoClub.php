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

    public function incluirProducto($producto) {
        $this->productos[] = $producto;
        $this->numProductos++;
    }

    public function agregarSocio($cliente) {
        $this->socios[] = $cliente;
        $this->numSocios++;
    }

    public function incluirCintaVideo($video){
        $this->incluirProducto($video);
    }
    public function incluirJuego($juego){
        $this->incluirProducto($juego);
    }
    public function incluirDvd($dvd){
        $this->incluirProducto($dvd);
    }

    public function listaProductos(){
        print_r($this->listaProductos());
    }
    // public function listaSocios(){
    //     print_r($this->listaSocios());
    // }
    public function alquilerSocioProducto(){

    }
    
}
?>

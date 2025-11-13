let tablero = [];

function Figura(x, y) {
    this.posicionX = x,
    this.posicionY = y
};
Object.setPrototypeOf(Figura, piezas = ["K", "Q", "T", "T", "A", "A", "C", "C", "P", "P", "P", "P", "P", "P", "P", "P"]);

Figura.prototype.MoverA = function () {
    tablero[[this.posicionX][this.posicionY]]
}

function ColocarPieza(Figura, tablero) {
    
}

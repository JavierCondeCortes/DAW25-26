const anuncios = ["toma un respiro con tomate caña","wenos dias soy de carglass","rexona nunca te abandona","soy manue","me llaman romeo, romero pisero","CARLOOOOS"];
let colorFondo = [
    "blue",         // Azul
    "red",          // Rojo
    "purple",       // Púrpura
    "beige",        // Beige
    "orange",       // Naranja
    "lightgreen",   // Verde claro
    "hotpink",      // Rosa fuerte
    "gold",         // Dorado
    "cyan",         // Cian
    "tomato"        // Tomate (un rojo anaranjado)
];

anuncios.forEach(anuncio => {
    const publicidad = document.createElement("p");
    publicidad.textContent = anuncio;
    publicidad.style.position = "relative";
    publicidad.style.display = "inline";
    let numColor = Math.floor(Math.random()*colorFondo.length);
    publicidad.style.backgroundColor = colorFondo[numColor];
    colorFondo.splice(numColor, 1)[0];
    publicidad.style.border = "1px solid black";
    let altura = Math.floor(Math.random()*260);
    publicidad.style.top=altura+"px";
    let anchura = Math.floor(Math.random()*150);
    publicidad.style.left=anchura+"px";
    document.getElementById("principal").appendChild(publicidad);
});
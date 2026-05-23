import {temperaturasLocalidad} from "./temperaturas.js"

let L1 = new temperaturasLocalidad("valladolid")
let L2 = new temperaturasLocalidad("Asturias")

L1.genAleatoria();
L2.genAleatoria();

console.log(L1.nombreLocalidad+" "+L1.temperaturaDia+" "+L1.media);
console.log(L2.nombreLocalidad+" "+L2.temperaturaDia+" "+L2.media);

let localidades = [L1,L2];

//dom para mostrar los datos

let body = document.getElementsByTagName("body")[0];
let tabla = document.createElement("table");
tabla.style.border = "1px solid black";
body.append(tabla);

//encabezado
let encabezado = document.createElement("tr");
let apartadoNombre = document.createElement('td');
tabla.append(encabezado);
encabezado.append(apartadoNombre);
for (let index = 0; index < 30; index++) {
    let apartadoDia = document.createElement('td');
    apartadoDia.textContent = `${index+1}`
    encabezado.append(apartadoDia);
}
let apartadoMedia = document.createElement('td');
apartadoMedia.textContent = "Media";
encabezado.append(apartadoMedia);

//localidades

localidades.forEach(localidad => {
    let linea = document.createElement("tr")
    tabla.append(linea);

    let apartadoLNombre = document.createElement("td");
    apartadoLNombre.textContent = localidad.nombreLocalidad;
    linea.append(apartadoLNombre);

    for (let index = 0; index < 30; index++) {
        let apartadoLDia = document.createElement('td');
        apartadoLDia.textContent = localidad.temperaturaDia[index];
        linea.append(apartadoLDia);
    }

    let apartadoLMedia = document.createElement("td");
    apartadoLMedia.textContent = localidad.media;
    linea.append(apartadoLMedia);
});


//estilo td

let listaTd = document.querySelectorAll("td");
listaTd.forEach((elemento)=>{
    elemento.style.border="1px solid black"
})
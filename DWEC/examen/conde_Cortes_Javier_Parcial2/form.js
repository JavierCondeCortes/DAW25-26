import { Bailarin } from "./bailarin.js";

//creo que uno de mis grandes problemas es que lo veo separado y no lo se implementar todo

let form = document.querySelector('form');

let dni = form['dni'];
let nombre = form['name'];
let estilo = form['estilo'];
let sexo = form['sexo'];
let fecha = form['dateInscription'];

//drag and drop
let bachataZone = document.getElementById('Bachata');
let rockZone = document.getElementById('Rock');
let salsaZone = document.getElementById('Salsa');
let swingZone = document.getElementById('Swing');
//evento drop

bachataZone.addEventListener('drop', function () {
    if (!bachataZone.childElementCount) {
        bachataZone.append(bachataZone.children[0]);
    }
})
bachataZone.addEventListener('dragover', function (e) {
    e.preventDefault();
})

rockZone.addEventListener('drop', function () {
    if (!rockZone.childElementCount===0) {
        rockZone.append(rockZone.children[0]);
    }
})
rockZone.addEventListener('dragover', function (e) {
    e.preventDefault();
})


//evento submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let listaBailarines = [];

    //e tenido problemas para ponerle otro nombre para que no se sobreescriban
    //la b seria nBailarin

    let nBailarin = listaBailarines.length + 1;
    const b = new Bailarin();
    b.darAlta(nombre, dni, fecha, estilo, sexo);
    listaBailarines.push(b);

    let valorCat = estilo.selectedIndex;
    let lista = estilo[valorCat].value;
    let categoria = document.getElementById(lista);

    //dom

    let tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta')
    tarjeta.setAttribute('draggable','true')
    let nombreTar = document.createElement('h4');
    nombreTar.textContent = nombre.value;
    let dniTar = document.createElement('p');
    dniTar.textContent = dni.value;
    let sexoTar = document.createElement('p');
    if (sexo.value === 'Masculino') {
        sexoTar.textContent = "🕺";
    } else {
        sexoTar.textContent = "💃";
    }
    let FechaTar = document.createElement('p');
    FechaTar.textContent = fecha.value;

    categoria.appendChild(tarjeta);
    tarjeta.appendChild(nombreTar);
    tarjeta.appendChild(dniTar);
    tarjeta.appendChild(sexoTar);
    tarjeta.appendChild(FechaTar);

    console.log('enviado')
    let mensaje = document.getElementById('Mensaje');
    mensaje.textContent= 'se agrego nuevo bailarin';
})

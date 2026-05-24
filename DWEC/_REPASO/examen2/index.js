import { bailarin } from "./bailarines.js"

let estilos = ["salsa", "bachata", "rock", "swing"];
let sexos = ["masculino", "femenino"];
let colores = ["red", "yellow", "pink", "orange"];

//listas dinamicas formularios
let lista = document.getElementById("estilo");

estilos.forEach((estilo) => {
    let opcion = document.createElement("option");
    opcion.value = estilo;
    opcion.textContent = estilo;

    lista.append(opcion);
});

let listaSex = document.getElementById("sexo");

sexos.forEach((sexo) => {
    let opcion = document.createElement("option");
    opcion.value = sexo;
    opcion.textContent = sexo;

    listaSex.append(opcion);
})
//declarar localStorage
let bailarinesActuales = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

//declarar fo
let fo = document.forms[0];
fo.addEventListener("submit", function (e) {
    e.preventDefault();

    //agarrar datos de formulario
    let nombre = fo['nombre'].value;
    let dni = fo['dni'].value;
    let fechaAlta = fo['fecha'].value;
    let estilo = fo['estilo'].value;
    let sexo = fo['sexo'].value;

    //guardar en localStorage
    let newBailarin = new bailarin(nombre, dni, fechaAlta, estilo, sexo);
    bailarinesActuales.push(newBailarin);
    localStorage.setItem("listaUsuarios", JSON.stringify(bailarinesActuales));
})

//spawnear datos en su lugar

bailarinesActuales.forEach((tarjetavista) => {
    let categoria = document.querySelector(`.${tarjetavista.estilo}`);

    //diseño de tarjeta
    if (categoria) {
        let tarjeta = document.createElement("div");
        tarjeta.draggable = "true";
        tarjeta.style.border = "solid 1px black";
        tarjeta.className = "tarjeta";
        categoria.append(tarjeta);

        let nombreTarjeta = document.createElement("p");
        nombreTarjeta.textContent = tarjetavista.nombre;
        tarjeta.append(nombreTarjeta);

        let dniTarjeta = document.createElement("p");
        dniTarjeta.textContent = tarjetavista.dni;
        tarjeta.append(dniTarjeta);

        let fechaTarjeta = document.createElement("p");
        fechaTarjeta.textContent = tarjetavista.fechaAlta;
        tarjeta.append(fechaTarjeta);

        let sexoTarjeta = document.createElement("p");
        sexoTarjeta.textContent = tarjetavista.sexo;
        tarjeta.append(sexoTarjeta);

        //funcionalidad tarjetas
        tarjeta.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData('text', tarjetavista.dni);
            tarjeta.id = "arrastre";
        })
        tarjeta.addEventListener("dragend", function () {
            tarjeta.id = "";
        })
    } else {
        console.log("categoria no existe")
    }


    //funcionalidad apartados
    let apartados = document.querySelectorAll(".baile");

    apartados.forEach((apartado) => {
        apartado.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        apartado.addEventListener("drop", function (e) {
            e.preventDefault();

            //actuar sobre el elemento de drop -- e.currentTarget
            let estiloActual = e.currentTarget.classList[1];

            let dni = e.dataTransfer.getData('text');

            let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
            let usuario = listaUsuarios.find(u => u.dni === dni);

            if (usuario) {
                usuario.estilo = estiloActual;
                localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            }

            let mover = document.querySelector("#arrastre");
            apartado.append(mover);
        })
    })
})

//zona eliminacion

let zonaEliminacion = document.getElementById("eliminar");

zonaEliminacion.addEventListener("dragover", function (e) {
    e.preventDefault();
})

zonaEliminacion.addEventListener("drop",function(e){
    e.preventDefault();

    let dni = e.dataTransfer.getData('text');
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
    let listaSinUsuario = listaUsuarios.filter(u => u.dni !== dni);

    localStorage.setItem("listaUsuarios", JSON.stringify(listaSinUsuario));

    let mover = document.querySelector("#arrastre");
    mover.remove();
})


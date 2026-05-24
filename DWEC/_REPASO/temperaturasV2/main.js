import {temperaturasLocalidad} from "./temperaturas.js"

let L1 = new temperaturasLocalidad("valladolid")
let L2 = new temperaturasLocalidad("Asturias")

L1.genAleatoria();
L2.genAleatoria();

console.log(L1.nombreLocalidad+" "+L1.temperaturaDia+" "+L1.media);
console.log(L2.nombreLocalidad+" "+L2.temperaturaDia+" "+L2.media);

//declaracion session
// 1. DECLARACIONES GLOBALES Y ALMACENAMIENTO (Unificado a localStorage)
let listaLocalidades = JSON.parse(localStorage.getItem("listaLocalidades")) || [];
let localidades = []; // Aquí puedes dejar tus instancias manuales si las necesitas

// Interacción con el formulario
let fo = document.forms[0];

// 2. CREACIÓN DE LA ESTRUCTURA DE LA TABLA EN EL DOM
let tabla = document.createElement("table");
tabla.style.border = "1px solid black";
document.body.append(tabla); // Más limpio que buscar el body por TagName

// Crear Encabezado de la tabla (Días 1 a 30 y Media)
let encabezado = document.createElement("tr");
tabla.append(encabezado);

let apartadoNombre = document.createElement('td');
apartadoNombre.textContent = "Localidad";
encabezado.append(apartadoNombre);

for (let index = 0; index < 30; index++) {
    let apartadoDia = document.createElement('td');
    apartadoDia.textContent = `${index + 1}`;
    encabezado.append(apartadoDia);
}

let apartadoMedia = document.createElement('td');
apartadoMedia.textContent = "Media";
encabezado.append(apartadoMedia);


// 3. FUNCIÓN PARA MOSTRAR LOS DATOS GUARDADOS EN LA TABLA
// Agrupamos esto en una función para que el código quede ordenado
let datos = JSON.parse(localStorage.getItem("listaLocalidades")) || [];

datos.forEach(localidad => {
    let filaForm = document.createElement("tr");
    tabla.append(filaForm);

    let nombreForm = document.createElement("td");
    nombreForm.textContent = localidad.nombre;
    filaForm.append(nombreForm);

    // CORREGIDO: Recorremos las temperaturas reales que tiene este objeto guardado
    for (let i = 0; i < localidad.temperaturas.length; i++) {
        let temperaturaDiaForm = document.createElement("td");
        temperaturaDiaForm.textContent = `${localidad.temperaturas[i]}°C`;
        filaForm.append(temperaturaDiaForm);
    }

    let mediaForm = document.createElement("td");
    mediaForm.textContent = `${localidad.media}°C`;
    filaForm.append(mediaForm);
});


// 4. EVENTO SUBMIT DEL FORMULARIO
fo.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let formLocalidad = fo['localidad'].value;
    let formListaNumeros = fo['temperaturas'].value;
    let generacion = fo['generacion'].value;
    
    // Si usas tu clase constructora para otra cosa, puedes dejarlo:
    if (typeof temperaturasLocalidad === "function") {
        let nuevalocalidad = new temperaturasLocalidad(formLocalidad);
        localidades.push(nuevalocalidad);
    }
    
    let formMedia; 
    let temperaturasArray = []; 

    if (generacion === "manual") {
        // Convertimos los textos del input separados por comas a números reales
        temperaturasArray = formListaNumeros.split(",").map(num => Number(num.trim()));
        
        formMedia = temperaturasArray.reduce((acc, suma) => acc + suma, 0) / temperaturasArray.length;
        
        let localidadObjeto = {
            "nombre": formLocalidad,
            "temperaturas": temperaturasArray,
            "media": formMedia.toFixed(1)
        };
        
        listaLocalidades.push(localidadObjeto);
        localStorage.setItem("listaLocalidades", JSON.stringify(listaLocalidades));
        
    } else {
        let listaAutomatica = [];
        for (let j = 0; j < 30; j++) {
            let num = Math.floor(Math.random() * 60 - 20); // Temperaturas entre -20 y 40
            listaAutomatica.push(num);
        }
        formMedia = Math.floor(listaAutomatica.reduce((acc, suma) => acc + suma, 0) / listaAutomatica.length);
        
        let localidadObjeto = {
            "nombre": formLocalidad,
            "temperaturas": listaAutomatica,
            "media": formMedia
        };
        
        listaLocalidades.push(localidadObjeto);
        localStorage.setItem("listaLocalidades", JSON.stringify(listaLocalidades));
    }

    // Recargamos la página para que la tabla vuelva a leer el localStorage actualizado
    location.reload(); 
});

//estilo td

let listaTd = document.querySelectorAll("td");
listaTd.forEach((elemento)=>{
    elemento.style.border="1px solid black"
})
import bailarines from "./bailarines.js"

//creacion bailarin
// ===============================
// 1. CARGAR MAP DESDE LOCALSTORAGE
// ===============================
let bailarinesMap = new Map(JSON.parse(localStorage.getItem("listaBailarines")) || []);

// ===============================
// 2. FORMULARIO: GUARDAR BAILARÍN
// ===============================
let formulario =  document.getElementsByTagName("form")[0]

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = formulario['nombre'].value;
    let dni = formulario['dni'].value;
    let fecha = formulario['fecha'].value;
    let estilo = formulario['estilo'].value;
    let sexo = formulario['sexo'].value;

    // Guardar en el Map
    bailarinesMap.set(dni, [nombre, fecha, estilo, sexo]);

    // Guardar en localStorage
    localStorage.setItem("listaBailarines", JSON.stringify([...bailarinesMap]));

    // Crear ficha visual
    crearFicha(nombre, dni, fecha, estilo, sexo);

    // Limpiar formulario
    formulario.reset();
});

//asignacion de estilos a cada ficha en x categoria

// ===============================
// 3. FUNCIÓN PARA CREAR UNA FICHA
// ===============================
function crearFicha(nombre, dni, fecha, estilo, sexo) {
    let ficha = document.createElement("div");
    ficha.className = "elemento";
    ficha.draggable = true;

    ficha.innerHTML = `
        <p>${nombre}</p>
        <p>${dni}</p>
        <p>${fecha}</p>
        <p>${sexo}</p>
    `;

    // Color por estilo
    switch (estilo) {
        case "bachata": ficha.style.backgroundColor = "yellow"; break;
        case "rock": ficha.style.backgroundColor = "red"; break;
        case "swing": ficha.style.backgroundColor = "green"; break;
        case "salsa": ficha.style.backgroundColor = "blue"; break;
    }

    // Activar drag & drop
    ficha.addEventListener("dragstart", () => ficha.classList.add("arrastrando"));
    ficha.addEventListener("dragend", () => ficha.classList.remove("arrastrando"));

    // Insertar en su categoría
    let categoria = document.getElementById(estilo);
    categoria.appendChild(ficha);
}


// ===============================
// 4. CARGAR FICHAS AL INICIAR
// ===============================
bailarinesMap.forEach((datos, dni) => {
    let [nombre, fecha, estilo, sexo] = datos;
    crearFicha(nombre, dni, fecha, estilo, sexo);
});

// drag and drop CONTENEDORES

let contenedores = document.querySelectorAll(".contenedor");

contenedores.forEach(contenedor => {
    contenedor.addEventListener("dragover", e => e.preventDefault());

    contenedor.addEventListener("drop", () => {
        const elemento = document.querySelector(".arrastrando");
        if (!elemento) return;

        // 1. Mover visualmente
        contenedor.appendChild(elemento);

        // 2. Obtener el DNI de la ficha (2º <p>)
        const dni = elemento.children[1].textContent;

        // 3. Obtener datos actuales del Map
        let [nombre, fecha, estiloAntiguo, sexo] = bailarinesMap.get(dni);

        // 4. Nuevo estilo = id del contenedor
        let nuevoEstilo = contenedor.id;

        // 5. Actualizar el Map
        bailarinesMap.set(dni, [nombre, fecha, nuevoEstilo, sexo]);

        // 6. Guardar en localStorage
        localStorage.setItem("listaBailarines", JSON.stringify([...bailarinesMap]));
    });
    // contenedor.addEventListener("dragenter", dragEnter); // <= función
    // contenedor.addEventListener("dragleave", dragLeave); // <= función
});

let eliminacion = document.querySelector(".baja")
eliminacion.addEventListener("drop",()=>{

    const elemento = document.querySelector(".arrastrando");
    if (!elemento) return;

    const dni = elemento.children[1].textContent;

    bailarinesMap.delete(dni);

    localStorage.setItem("listaBailarines", JSON.stringify([...bailarinesMap]));

    elemento.remove();
})

// Obtener ID del evento desde la URL
const params = new URLSearchParams(window.location.search);
const idEvento = params.get("id");

const token = localStorage.getItem("token");

// ===============================
//  CARGAR DATOS DEL EVENTO
// ===============================

async function cargarEvento() {
    const response = await fetch(`http://localhost:8000/api/eventos/${idEvento}`);
    const evento = await response.json();

    document.getElementById("nombre").value = evento.nombre;
    document.getElementById("descripcion").value = evento.descripcion;
    document.getElementById("fecha").value = evento.fecha;

    if (evento.urlImage) {
        const preview = document.getElementById("preview");
        preview.src = `http://localhost:8000/storage/${evento.urlImage}`;
        preview.classList.remove("hidden");
    }
}

cargarEvento();

// ===============================
//  PREVISUALIZAR IMAGEN
// ===============================

document.getElementById("imagen").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const preview = document.getElementById("preview");
        preview.src = URL.createObjectURL(file);
        preview.classList.remove("hidden");
    }
});

// ===============================
//  GUARDAR CAMBIOS
// ===============================

document.getElementById("formEditarEvento").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("descripcion", document.getElementById("descripcion").value);
    formData.append("fecha", document.getElementById("fecha").value);

    const imagen = document.getElementById("imagen").files[0];
    if (imagen) {
        formData.append("urlImage", imagen);
    }

    const response = await fetch(`http://localhost:8000/api/eventos/${idEvento}`, {
        method: "POST", // Laravel necesita POST + _method para PUT con archivos
        headers: {
            "Authorization": "Bearer " + token
        },
        body: formData
    });

    if (response.ok) {
        alert("Evento actualizado correctamente");
        window.location.href = "home.html";
    } else {
        alert("Error al actualizar el evento");
    }
});

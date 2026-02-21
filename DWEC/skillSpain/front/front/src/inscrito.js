function isLoggedIn() {
    return !!localStorage.getItem("token");
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function actualizarNavbar() {
    const authButton = document.getElementById("authButton");
    if (!authButton) return;

    if (isLoggedIn()) {
        authButton.innerHTML = `
            <button id="logoutBtn"
                class="px-4 py-2 bg-white rounded-full">
                Cerrar sesión
            </button>
        `;

        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "login.html";
        });
    } else {
        authButton.innerHTML = `
            <a href="./login.html"
                class="px-4 py-2 bg-white rounded-full">
                Iniciar sesión
            </a>
        `;
    }
}

async function cargarInscripciones() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Debes iniciar sesión");
        window.location.href = "login.html";
        return;
    }

    const response = await fetch("http://localhost:8000/api/mis-inscripciones", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const inscripciones = await response.json();
    const contenedor = document.getElementById("eventos");
    contenedor.innerHTML = "";

    if (!inscripciones.length) {
        contenedor.innerHTML = `
            <p class="text-white text-lg px-6">No estás inscrito en ningún evento.</p>
        `;
        return;
    }

    inscripciones.forEach(item => {
        const evento = item.evento;

        const card = `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="http://localhost:8000/storage/${evento.urlImage}" 
                     class="w-full h-48 object-cover">

                <div class="p-4">
                    <h2 class="text-xl font-bold">${evento.nombre}</h2>
                    <p class="text-gray-600">${evento.descripcion}</p>
                    <p class="text-sm text-gray-500 mt-2">📅 ${evento.fecha}</p>
                </div>
            </div>
        `;

        contenedor.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarNavbar();
    cargarInscripciones();
});

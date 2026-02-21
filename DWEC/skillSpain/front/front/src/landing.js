// ===============================
//  AUTENTICACIÓN
// ===============================

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
            window.location.reload();
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

// ===============================
//  CARGAR EVENTOS
// ===============================

async function cargarEventos() {
    const user = getUser();
    const isAdmin = user?.rol === "admin";

    try {
        const response = await fetch("http://localhost:8000/api/eventos");
        const eventos = await response.json();

        const contenedor = document.getElementById("eventos");
        contenedor.innerHTML = "";

        eventos.forEach(evento => {
            let botones = "";

            if (isLoggedIn()) {
                if (isAdmin) {
                    botones = `
                        <button data-id="${evento.id}" class="btn-editar w-full bg-yellow-500 text-white py-2 rounded-lg mt-3">
                            Editar
                        </button>

                        <button data-id="${evento.id}" class="btn-eliminar w-full bg-red-600 text-white py-2 rounded-lg mt-3">
                            Eliminar
                        </button>
                    `;
                } else {
                    botones = `
                        <button data-id="${evento.id}" class="btn-inscribir w-full bg-blue-600 text-white py-2 rounded-lg mt-3">
                            Inscribirse
                        </button>
                    `;
                }
            }

            const card = `
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="http://localhost:8000/storage/${evento.urlImage}" 
                         class="w-full h-48 object-cover">

                    <div class="p-4">
                        <h2 class="text-xl font-bold">${evento.nombre}</h2>
                        <p class="text-gray-600">${evento.descripcion}</p>
                        <p class="text-sm text-gray-500 mt-2">📅 ${evento.fecha}</p>

                        ${botones}
                    </div>
                </div>
            `;

            contenedor.innerHTML += card;
        });

        // Activar botones después de renderizar
        setTimeout(() => {
            document.querySelectorAll(".btn-inscribir").forEach(btn => {
                btn.addEventListener("click", () => {
                    inscribirse(btn.dataset.id, btn);
                });
            });

            document.querySelectorAll(".btn-editar").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.id;
                    window.location.href = `/editar-evento.html?id=${id}`;
                });
            });

            document.querySelectorAll(".btn-eliminar").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.id;
                    eliminarEvento(id);
                });
            });
        }, 50);

    } catch (error) {
        console.error("Error cargando eventos:", error);
    }
}

// ===============================
//  INSCRIBIRSE A UN EVENTO
// ===============================

async function inscribirse(idEvento, boton) {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/api/inscribirse", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id_evento: idEvento })
    });

    const data = await response.json();

    if (response.status === 201) {
        boton.disabled = true;
        boton.innerText = "Inscrito";
        boton.classList.add("bg-gray-400");
    }

    if (response.status === 409) {
        boton.disabled = true;
        boton.innerText = "Ya inscrito";
        boton.classList.add("bg-gray-400");
    }
}

// ===============================
//  ELIMINAR EVENTO (ADMIN)
// ===============================

async function eliminarEvento(idEvento) {
    const token = localStorage.getItem("token");

    if (!confirm("¿Seguro que quieres eliminar este evento?")) return;

    const response = await fetch(`http://localhost:8000/api/eventos/${idEvento}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    if (response.ok) {
        alert("Evento eliminado");
        cargarEventos();
    }
}

// ===============================
//  INICIALIZACIÓN
// ===============================

actualizarNavbar();
cargarEventos();

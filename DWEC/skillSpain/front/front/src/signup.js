document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup JS cargado");

    const form = document.querySelector("#signupForm");

    // Buscar el div
    let output = document.querySelector("#output");

    // Si NO existe, lo creamos
    if (!output) {
        console.warn("No existe #output, creando uno nuevo...");
        output = document.createElement("div");
        output.id = "output";
        output.style.marginTop = "20px";
        output.style.padding = "15px";
        output.style.borderRadius = "8px";
        output.style.background = "#1e1e1e";
        output.style.color = "white";

        // Insertarlo justo debajo del formulario
        form.insertAdjacentElement("afterend", output);
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const usuario = document.querySelector("#usuario").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const password_confirmation = document.querySelector("#password_confirmation").value;

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    usuario,
                    email,
                    password,
                    password_confirmation
                })
            });

            const data = await response.json();

            if (!response.ok) {
                output.innerHTML = `<p>Error: ${data.error || "Datos inválidos"}</p>`;
                return;
            }

            output.innerHTML = `<p>Cuenta creada correctamente. Redirigiendo...</p>`;

            setTimeout(() => {
                window.location.href = "/login.html";
            }, 1500);

        } catch (error) {
            output.innerHTML = `<p>Error de conexión con el servidor</p>`;
        }
    });
});

const API_URL = "http://localhost:8000/api"; // Cambia si tu API está en otro dominio

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    const msg = document.querySelector("#message");

    if (response.ok) {
        localStorage.setItem("token", data.token);
        msg.textContent = "Login correcto. Redirigiendo...";
        msg.classList.remove("text-red-600");
        msg.classList.add("text-green-600");

        // Redirige a tu página principal
        setTimeout(() => {
            window.location.href = "/home.html";
        }, 1000);

    } else {
        msg.textContent = data.error || "Error al iniciar sesión";
        msg.classList.add("text-red-600");
    }
});
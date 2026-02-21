document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Error al iniciar sesión");
            return;
        }

        // ============================
        //  GUARDAR TOKEN Y USUARIO
        // ============================
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirigir a la landing
        window.location.href = "home.html";

    } catch (error) {
        console.error("Error:", error);
        alert("Error de conexión con el servidor");
    }
});

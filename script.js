const API_URL = "http://localhost:3000/users";

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Verificar que los botones existen antes de agregar eventos
    const registerButton = document.getElementById("crear-cuenta");
    const loginButton = document.getElementById("login-button");

    if (registerButton) {
        registerButton.addEventListener("click", function (event) {
            event.preventDefault();
            registerUser();
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            loginUser();
        });
    }
});

// REGISTRO DE USUARIO
async function registerUser() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmar = document.getElementById("confirmar").value;

    if (!nombre || !correo || !contraseña || !confirmar) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    if (contraseña !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Comprobar si el usuario ya existe
    const response = await fetch(`${API_URL}?correo=${correo}`);
    const users = await response.json();

    if (users.length > 0) {
        alert("El correo ya está registrado.");
        return;
    }

    // Crear nuevo usuario
    const newUser = { nombre, correo, contraseña };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    });

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "loginPage.html";
}

// LOGIN DE USUARIO
async function loginUser() {
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (!correo || !contraseña) {
        alert("Por favor, ingresa tu correo y contraseña.");
        return;
    }

    const response = await fetch(`${API_URL}?correo=${correo}`);
    const users = await response.json();

    if (users.length === 0 || users[0].contraseña !== contraseña) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    alert("Inicio de sesión exitoso.");
    window.location.href = "/NewFoods/index.html";
}

setTimeout(function () {

const logoutButton = document.getElementById("main_header").querySelector("#logout-button");

if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();

        localStorage.removeItem('usuarioActual');

        window.location.href = `Pages/HTML/loginPage.html`;
    });
}
}, 300);
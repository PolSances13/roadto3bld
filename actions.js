
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const changeColorButton = document.getElementById("changeColorButton");

    changeColorButton.addEventListener("click", function() {
        header.style.backgroundColor = "red"; // Cambia el color de fondo a rojo al hacer clic
    });
});

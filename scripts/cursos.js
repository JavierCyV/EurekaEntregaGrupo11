/* // Función para reservar un curso y guardar la información en sessionStorage
function reservarCurso(nombre, precio) {
    sessionStorage.setItem("cursoNombre", nombre);
    sessionStorage.setItem("cursoPrecio", precio);
    window.location.href = "reservas.html"; // Redirige a la página de reservas
}

// Ejemplo de uso en un botón de reserva
document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const nombre = this.getAttribute("data-nombre");
        const precio = this.getAttribute("data-precio");
        reservarCurso(nombre, precio);
    });
});
 */
// Función para guardar el nombre y el precio en sessionStorage y redirigir
function guardarPrecio(event) {
    event.preventDefault(); // Evita la navegación inmediata
    const nombre = event.target.getAttribute("data-nombre"); // Obtiene el nombre del atributo data-precio
    const precio = event.target.getAttribute("data-precio"); // Obtiene el precio del atributo data-precio

    if (nombre && precio) {
        sessionStorage.setItem("cursoNombre", nombre); // Guarda el nombre en sessionStorage
        sessionStorage.setItem("cursoPrecio", precio); // Guarda el precio en sessionStorage
        window.location.href = "reservas.html"; // Redirige a la página de reservas
    } else {
        console.error("No se encontraron los datos en el botón.");
    }
}

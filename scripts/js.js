function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Muestra el modal específico
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Oculta el modal específico
    }
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("modal1");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// navbar.js
function loadNavbar() {
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Problemas de conexion ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Tu navegador tiene un problema para cargar la navbar', error);
        });
}
//llamado a la funcion (no lo borren)
loadNavbar();


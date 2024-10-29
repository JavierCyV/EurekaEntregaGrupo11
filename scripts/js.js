function openModal(index) {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    modalTitle.textContent = `Título del Rectángulo ${index}`;
    modalText.textContent = `Contenido del Rectángulo ${index}.`;

    modal.style.display = "block"; // Muestra el modal
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Oculta el modal
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

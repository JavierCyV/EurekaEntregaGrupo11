function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.visibility = "visible"; // Muestra el modal específico
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.visibility = "hidden"; // Oculta el modal específico
    }
}

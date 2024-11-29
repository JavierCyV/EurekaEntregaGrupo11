let cartItems = []; // Array para almacenar los artículos del carrito

function addToCart(item) {
    // Asegurarnos de que el objeto `item` tenga todas las propiedades necesarias
    cartItems.push(item); // Agregar el artículo al array
    updateCartDisplay(); // Actualizar la visualización del carrito
}

function updateCartDisplay() {
    const cartModalContent = document.querySelector('.modal-content-carrito .box');
    cartModalContent.innerHTML = ''; // Limpiar contenido previo

    if (cartItems.length === 0) {
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2><p>Tu carrito está vacío.</p>';
    } else {
        const itemsList = document.createElement('ul'); // Crear lista para los artículos
        cartItems.forEach(item => {
            const listItem = document.createElement('li');

            // Mostrar detalles del artículo
            listItem.innerHTML = `
                <strong>${item.name}</strong> - $${item.price} <br>
                Profesor: ${item.profesor || "No especificado"}<br>
                Fecha: ${item.fecha || "No seleccionada"}<br>
                Turno: ${item.turno || "No asignado"}
            `;

            itemsList.appendChild(listItem);
        });

        cartModalContent.innerHTML = '<h2>Carrito de compras</h2>'; // Título
        cartModalContent.appendChild(itemsList); // Agregar lista al contenido del modal

        // Agregar el botón de "Pagar"
        const pagarButton = document.createElement('a');
        pagarButton.classList.add('btn-pagar');
        pagarButton.href = './pages/pago.html';
        pagarButton.textContent = 'Pagar';
        cartModalContent.appendChild(pagarButton);
    }
}

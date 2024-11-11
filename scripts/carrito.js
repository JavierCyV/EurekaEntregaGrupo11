let cartItems = []; // Array para almacenar los artículos del carrito
let totalCost = 0;  // Variable para el costo total

// Función para seleccionar un ítem con nombre, precio, profesor y turno
function selectItem(name, price, profesor, turno) {
    const item = { name, price, profesor, turno };
    cartItems.push(item); // Agregar el artículo al array
    totalCost += price;   // Sumar el precio al costo total
    updateCartDisplay();  // Actualizar la visualización del carrito
    updateTotalCost();    // Actualizar la visualización del costo total
}

// Función para mostrar el carrito
function updateCartDisplay() {
    const cartModalContent = document.querySelector('.modal-content-carrito .box');
    cartModalContent.innerHTML = ''; // Limpiar contenido previo

    if (cartItems.length === 0) {
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2><p>Tu carrito está vacío.</p>';
    } else {
        const itemList = document.createElement('ul'); // Crear lista para los artículos
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price} (Profesor: ${item.profesor}, Turno: ${item.turno})`; // Mostrar detalles
            itemList.appendChild(listItem);
        });
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2>'; // Título
        cartModalContent.appendChild(itemList); // Agregar lista al contenido del modal
    }
}

// Función para mostrar el costo total en la sección de pagos
function updateTotalCost() {
    const totalCostDisplay = document.querySelector('.balance-f p');
    totalCostDisplay.textContent = `Total: $${totalCost}`;
}

// Event listener para el botón de finalizar selección y enviar al carrito
document.getElementById('send-to-cart').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Tu carrito está vacío. Selecciona alguna opción antes de continuar.");
    } else {
        alert("Artículos añadidos al carrito");
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Guardar en LocalStorage
        localStorage.setItem("totalCost", totalCost);
        window.location.href = "reservas.html"; // Redireccionar a la página de reservas
    }
});

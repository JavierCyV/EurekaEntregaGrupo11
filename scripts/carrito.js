let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Cargar carrito si ya existe
updateCartDisplay();

// Función para agregar un artículo al carrito
function addToCart(item) {
    cartItems.push(item); 
    // Guardar carrito en LocalStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    updateCartDisplay(); 
}

// Función para eliminar un artículo específico del carrito
function removeFromCart(index) {
    cartItems.splice(index, 1); // Eliminar el artículo por índice
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Actualizar LocalStorage
    updateCartDisplay(); // Actualizar vista
}

// Función para vaciar el carrito
function clearCart() {
    cartItems = [];
    localStorage.removeItem('cartItems'); // Eliminar carrito de LocalStorage
    updateCartDisplay();
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartModalContent = document.querySelector('.modal-content-carrito');
    cartModalContent.innerHTML = ''; // Limpiar contenido previo

    if (cartItems.length === 0) {
        cartModalContent.innerHTML = '<a href="#" class="modal-exit">x</a><h2 class="modal-title">Carrito de compras</h2><p>Tu carrito está vacío.</p>';
    } else {
        const itemsContainer = document.createElement('div'); // Contenedor desplazable
        itemsContainer.classList.add('cart-items-container');

        const itemsList = document.createElement('ul');
        cartItems.forEach((item, index) => {
            let precioFormateado = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(item.price);

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.name}</strong> - $${precioFormateado} <br>
                Profesor: ${item.profesor || "No especificado"}<br>
                Fecha: ${item.fecha || "No seleccionada"}<br>
                Turno: ${item.turno || "No asignado"}<br>
            `;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Eliminar";
            removeButton.classList.add('btn-eliminar');
            removeButton.addEventListener('click', () => removeFromCart(index));
            listItem.appendChild(removeButton);
            itemsList.appendChild(listItem);
        });

        itemsContainer.appendChild(itemsList); // Agregar lista al contenedor desplazable
        cartModalContent.innerHTML = '<a href="#" class="modal-exit">x</a><h2 class="modal-title">Carrito de compras</h2>';
        cartModalContent.appendChild(itemsContainer);

        const pagarButton = document.createElement('a');
        pagarButton.classList.add('btn-pagar-modal');
        pagarButton.href = "pages/pago.html";
        pagarButton.textContent = 'Pagar';
        cartModalContent.appendChild(pagarButton);

        const clearCartButton = document.createElement('button');
        clearCartButton.classList.add('btn-vaciar-carrito');
        clearCartButton.textContent = 'Vaciar carrito';
        clearCartButton.addEventListener('click', clearCart);
        cartModalContent.appendChild(clearCartButton);
    }
}


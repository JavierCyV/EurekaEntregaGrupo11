let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Cargar carrito si ya existe
updateCartDisplay();

// Función para agregar un artículo al carrito
function addToCart(item) {
    cartItems.push(item); 
    // Guardar carrito en LocalStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    updateCartDisplay(); 
}

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
        const itemsList = document.createElement('ul');
        cartItems.forEach(item => {
            let precioFormateado = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(item.price);

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.name}</strong> - $${precioFormateado} <br>
                Profesor: ${item.profesor || "No especificado"}<br>
                Fecha: ${item.fecha || "No seleccionada"}<br>
                Turno: ${item.turno || "No asignado"}
            `;
            itemsList.appendChild(listItem);
        });
        cartModalContent.innerHTML = '<a href="#" class="modal-exit">x</a> <h2 class="modal-title">Carrito de compras</h2>';
        cartModalContent.appendChild(itemsList);

        // Agregar botón de "Pagar"
        const pagarButton = document.createElement('a');
        pagarButton.classList.add('btn-pagar-modal');
        pagarButton.href = "./pages/pago.html";
        pagarButton.textContent = 'Pagar';
        cartModalContent.appendChild(pagarButton);
    }
}
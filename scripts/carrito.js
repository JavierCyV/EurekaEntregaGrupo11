let cartItems = []; // Array para almacenar los artículos del carrito

function addToCart(item) {
    cartItems.push(item); // Agregar el artículo al array
    updateCartDisplay(); // Actualizar la visualización del carrito
}

function updateCartDisplay() {
    const cartModalContent = document.querySelector('.modal-content-carrito .box');
    cartModalContent.innerHTML = ''; // Limpiar contenido previo

    if (cartItems.length === 0) {
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2><p>Tu carrito está vacío.</p>';
    } else {
        const itemList = document.createElement('ul'); // Crear lista para los artículos
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`; // Mostrar nombre y precio
            itemList.appendChild(listItem);
        });
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2>'; // Título
        cartModalContent.appendChild(itemList); // Agregar lista al contenido del modal
    }
}


// Arreglo para el carrito de compras
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Cargar carrito si ya existe

// Variables de reserva
let selectedTurno = null;
let selectedProfesor = null;
let selectedFecha = null;
let selectedCurso = null
let selectedPrecio = null

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
    const cartModalContent = document.querySelector('.modal-content-carrito .box');
    cartModalContent.innerHTML = ''; // Limpiar contenido previo

    if (cartItems.length === 0) {
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2><p>Tu carrito está vacío.</p>';
    } else {
        const itemsList = document.createElement('ul');
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.name}</strong> - $${item.price} <br>
                Profesor: ${item.profesor || "No especificado"}<br>
                Fecha: ${item.fecha || "No seleccionada"}<br>
                Turno: ${item.turno || "No asignado"}
            `;
            itemsList.appendChild(listItem);
        });
        cartModalContent.innerHTML = '<h2>Carrito de compras</h2>';
        cartModalContent.appendChild(itemsList);

        // Agregar botón de "Pagar"
        const pagarButton = document.createElement('a');
        pagarButton.classList.add('btn-pagar');
        pagarButton.href = './pages/pago.html';
        pagarButton.textContent = 'Pagar';
        cartModalContent.appendChild(pagarButton);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Recuperar el carrito desde localStorage
    updateCartDisplay();

    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const cursoNombre = params.get("nombreCurso");
    const precioCurso = params.get("precioFinal");

    // Mostrar los datos recibidos en el DOM
    if (cursoNombre && !isNaN(precioCurso)) {
        document.getElementById("titulo-nombre-curso").textContent = cursoNombre;  // Mostrar nombre del curso
        document.getElementById("total-precio").textContent = precioCurso.toFixed(2); // Mostrar precio del curso
    } else {
        console.error("Faltan datos en la URL o los datos no son válidos.");
    }

    let selectedTurno = null;
    let selectedProfesor = null;
    let selectedFecha = null;
    
    // Manejo de selección de turnos
    document.querySelectorAll(".card-button button").forEach((button) => {
      button.addEventListener("click", (event) => {
        selectedTurno = event.target.closest(".card-description").querySelector(".card-title h3").textContent;
        alert(`Turno seleccionado: ${selectedTurno}`);
      });
    });
    
    // Manejo de selección de profesor
    document.querySelectorAll(".card-link button").forEach((button) => {
      button.addEventListener("click", (event) => {
        selectedProfesor = event.target.closest(".card-description").querySelector(".card-title h4").textContent;
        alert(`Profesor seleccionado: ${selectedProfesor}`);
      });
    });
    
    // Manejo de selección de fecha
    document.querySelector("#fecha-curso").addEventListener("change", (event) => {
      selectedFecha = event.target.value;
      alert(`Fecha seleccionada: ${selectedFecha}`);
    });
    
    // Confirmar reserva
    document.querySelector(".btn-reservar").addEventListener("click", () => {
      if (!selectedTurno || !selectedProfesor || !selectedFecha) {
        alert("Por favor, completa todas las selecciones antes de continuar.");
        return;
      }
    
      const reserva = {
        name: cursoNombre, // Usar el nombre del curso obtenido de la URL
        price: precioCurso, // Usar el precio obtenido de la URL
        turno: selectedTurno,
        profesor: selectedProfesor,
        fecha: selectedFecha,
      };
    
      // Agregar al carrito
      addToCart(reserva);
      alert("Reserva confirmada y agregada al carrito: " + JSON.stringify(reserva));
    });
});


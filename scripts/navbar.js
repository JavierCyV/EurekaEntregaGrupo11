// Función para incluir el navbar desde un archivo HTML
// navbar.js

/* function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.querySelectorAll("[w3-include-html]");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        elmnt.removeAttribute("w3-include-html");
                        setupNavbarMenu(); // Configura el menú hamburguesa
                        setupCartModal(); // Configura el modal del carrito
                        adjustNavbarLinks(); // Ajustar las rutas según la página actual
                    } else {
                        console.error("Error loading page: " + this.status);
                    }
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    }
} */

/* function adjustNavbarLinks() {
    const currentPage = window.location.pathname.split('/').pop(); // Obtener el nombre del archivo actual
    const navbarItems = document.querySelectorAll('.navbar-item[data-path]');

    navbarItems.forEach(item => {
        const path = item.getAttribute('data-path');
        
        // Ajustar la ruta según la página actual
        if (currentPage === 'index.html') {
            item.href = `pages/${path}`; // Asumir que las páginas están en una carpeta "pages"
        } else {
            item.href = path; // Usar la ruta original para otras páginas
        }
    });
} */
// Función para el menú hamburguesa
function setupNavbarMenu() {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener('click', () => {
            navbarBurger.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
        });
    }
}

// Función para el modal del carrito
function setupCartModal() {
    const cartButton = document.getElementById("cart-button");
    const cartModal = document.getElementById("cart-modal");
    
    // Selecciona solo el botón de cerrar correcto
    const modalCloseButton = cartModal.querySelector(".modal-close-carrito");

    if (cartButton && cartModal) {
        cartButton.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar navegación
            cartModal.classList.add("is-active"); // Mostrar el modal
        });

        // Cerrar el modal al hacer clic en el botón de cerrar
        if (modalCloseButton) {
            modalCloseButton.addEventListener("click", function() {
                cartModal.classList.remove("is-active"); // Ocultar el modal
            });
        }

        // Cerrar el modal al hacer clic en el fondo
        const modalBackground = cartModal.querySelector(".modal-background-carrito");
        if (modalBackground) {
            modalBackground.addEventListener("click", function() {
                cartModal.classList.remove("is-active"); // Ocultar el modal
            });
        }
    }
}

setupNavbarMenu(); // Configura el menú hamburguesa
setupCartModal(); // Configura el modal del carrito

// Llama a la función para cargar el contenido al cargar el DOM
/* document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
}); */
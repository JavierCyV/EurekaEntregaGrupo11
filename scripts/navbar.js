// navbar.js 

// Función para incluir el navbar desde un archivo HTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.querySelectorAll("[w3-include-html]");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    elmnt.removeAttribute("w3-include-html");

                    // Configura el menú hamburguesa después de incluir el HTML
                    setupNavbarMenu();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    }
}

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

// Llama a la función para cargar el contenido al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    includeHTML();
    setupNavbarMenu();
});

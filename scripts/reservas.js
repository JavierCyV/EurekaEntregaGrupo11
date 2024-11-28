window.onload= function() {

    const date = new Date()
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    const currentDate = currentYear + "-" + currentMonth + "-" + currentDay;
    
    document.querySelector('#fecha-curso').setAttribute("min", currentDate); // Setea la fecha de hoy como valor minimo para seleccionar fecha
}

document.addEventListener("DOMContentLoaded", function () {
    // Variables globales para guardar las selecciones
    let cursoNombre = sessionStorage.getItem("cursoNombre");
    let precioCurso = parseFloat(sessionStorage.getItem("cursoPrecio"));
    let turnoSeleccionado = null;
    let profesorSeleccionado = null;
    let fechaSeleccionada = null;

    if (isNaN(cursoNombre) || isNaN(precioCurso)) {
        console.error("No se encontraron los datos del curso en sessionStorage.");
        document.getElementById("total-precio").textContent = "0";
        return; // Salir si no hay datos válidos
    }

    // Mostrar el nombre y el precio del curso
    document.getElementById("titulo-nombre-curso").textContent = cursoNombre;
    document.getElementById("total-precio").textContent = precioCurso.toFixed(2);

    // Seleccionar turno
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            turnoSeleccionado = this.id;

            // Ajustar precio según turno
            let precioFinal = precioCurso;
            if (turnoSeleccionado.includes("turno-m")) {
                precioFinal *= 1.05; // Recargo del 5% para turno mañana
            } else if (turnoSeleccionado.includes("turno-n")) {
                precioFinal *= 0.95; // Descuento del 5% para turno noche
            }
            document.getElementById("total-precio").textContent = precioFinal.toFixed(2);
        });
    });

    // Seleccionar profesor
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            profesorSeleccionado = this.id;
            if (profesorSeleccionado.includes("profesor")) {
                profesorSeleccionado = this.parentElement.parentElement.querySelector("h4").textContent;
            }
        });
    });

    // Seleccionar fecha
    document.getElementById("fecha-curso").addEventListener("change", function () {
        fechaSeleccionada = this.value;
    });

    // Agregar datos al carrito
    document.querySelectorAll(".btn-reservar").forEach(button => {
        button.addEventListener("click", function (event) {
            if (!turnoSeleccionado || !profesorSeleccionado || !fechaSeleccionada) {
                alert("Por favor, completa todas las selecciones antes de continuar.");
                event.preventDefault();
                return;
            }

            // Crear objeto del carrito
            const carritoItem = {
                curso: cursoNombre,
                precio: document.getElementById("total-precio").textContent,
                turno: turnoSeleccionado,
                profesor: profesorSeleccionado,
                fecha: fechaSeleccionada,
            };

            // Guardar en sessionStorage
            sessionStorage.setItem("carrito", JSON.stringify(carritoItem));
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Cargar el precio desde sessionStorage
    let nombreCurso = parseFloat(sessionStorage.getItem("cursoNombre"));
    let precioCurso = parseFloat(sessionStorage.getItem("cursoPrecio"));

    if (isNaN(precioCurso)) {
        console.error("No se encontró el precio del curso en sessionStorage.");
        document.getElementById("total-precio").textContent = "0";
        return; // Salir si no hay precio válido
    }

    if (isNaN(nombreCurso)) {
        console.error("No se encontró el nombre del curso en sessionStorage.");
        document.getElementById("titulo-nombre-curso").textContent = "Curso: ";
        return; // Salir si no hay nombre válido
    }

    // Mostrar el nombre en el subtitulo
    document.getElementById("titulo-nombre-curso").textContent = nombreCurso.toFixed(2);

    // Mostrar el precio inicial en el total
    document.getElementById("total-precio").textContent = precioCurso.toFixed(2);

    // Agregar recargo/descuento según el turno seleccionado
    document.querySelectorAll("input[type='submit']").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            let turno = this.id;
            let precioFinal = precioCurso;

            if (turno.includes("turno-m")) {
                // Turno mañana: recargo del 5%
                precioFinal *= 1.05;
            } else if (turno.includes("turno-n")) {
                // Turno noche: descuento del 5%
                precioFinal *= 0.95;
            }

            // Mostrar el precio ajustado en el campo "Total"
            document.getElementById("total-precio").textContent = precioFinal.toFixed(2);
        });
    });
});

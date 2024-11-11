document.getElementById('formularioDePago').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const securityCode = document.getElementById('securityCode').value;
    const installments = document.getElementById('installments').value;

    // Mostrar los datos del formulario
    console.log("Número de tarjeta:", cardNumber);
    console.log("Nombre del titular:", cardHolder);
    console.log("Fecha de vencimiento:", expiryDate);
    console.log("Código de seguridad:", securityCode);
    console.log("Cuotas seleccionadas:", installments);

    alert("Formulario enviado correctamente!");
});

document.getElementById('formularioDeFacturacion').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente");
});

function hacerReserva (nombre, precio, descuento){
    const nombre = nombre;
    const precio = precio;
    const descuento = descuento;

    var precioTotal = precio * descuento;

    return precioTotal
}


document.addEventListener("DOMContentLoaded", function() {
    // Cargar el precio desde sessionStorage
    let precioCurso = parseFloat(sessionStorage.getItem("cursoPrecio"));

    if (isNaN(precioCurso)) {
        console.error("No se encontró el precio del curso en sessionStorage.");
        document.getElementById("total-precio").textContent = "0";
        return; // Salir si no hay precio válido
    }

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

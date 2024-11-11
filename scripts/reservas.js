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
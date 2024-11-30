window.onload= function() {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Recuperar el carrito desde localStorage
    // Actualizacion del precio total
    let total = calcularTotal(cartItems);
    document.getElementById("total-precio").innerHTML = `${total || "0.00"}`;

    cargarDetallesCompra(cartItems);
}

document.getElementById('payment').addEventListener('click', function (event) {
    event.preventDefault();

    // Validación del formulario de pago
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardHolder = document.getElementById('cardHolder').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const securityCode = document.getElementById('securityCode').value.trim();
    const installments = document.getElementById('installments').value.trim();

    // Validación del formulario de facturación
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const numeroDoc = document.getElementById('numeroDoc').value.trim();

    // Validar campos
    if (!cardNumber || !cardHolder || !expiryDate || !securityCode || !installments) {
        alert("Por favor, complete todos los campos de pago.");
        return;
    }
    if (!nombre || !email || !confirmEmail || !telefono || !numeroDoc) {
        alert("Por favor, complete todos los campos de facturación.");
        return;
    }
    if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateCardNumber = (number) => /^\d{16}$/.test(number); // Ejemplo para tarjetas de 16 dígitos
    const validateSecurityCode = (code) => /^\d{3,4}$/.test(code);

    if (!validateEmail(email)) {
        alert("Ingrese un email válido.");
        return;
    }
    if (!validateCardNumber(cardNumber)) {
        alert("Número de tarjeta inválido.");
        return;
    }
    if (!validateSecurityCode(securityCode)) {
        alert("Código de seguridad inválido.");
        return;
    }

    // Mostrar datos en consola (simulación de envío)
    console.log("Datos de pago:");
    console.log({ cardNumber, cardHolder, expiryDate, securityCode, installments });

    console.log("Datos de facturación:");
    console.log({ nombre, email, telefono, numeroDoc });

    alert("Formulario enviado correctamente.");
});

function cargarDetallesCompra(cartItems){

    const itemsCompraSection = document.getElementById("detalle-section");

     // Crear el contenedor de preguntas frecuentes
     const itemsCompraList = document.createElement("div");
     itemsCompraList.classList.add("items-container");
 
     // Generar las preguntas y respuestas
     cartItems.forEach(item => {
         const itemCompra = document.createElement("details");
         const itemNameCurso = document.createElement("summary");
         const separator = document.createElement("div");
         const detailElementTurno = document.createElement("p");
         const detailElementModalidad = document.createElement("p");
         const detailElementProfesor = document.createElement("p");
         const detailElementFecha = document.createElement("p");
         const detailElementPrecio = document.createElement("p");

         separator.classList.add("separator");
         precioFormateado = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(item.price);

         itemNameCurso.textContent = "Curso - "+item.name;
         detailElementTurno.textContent = "Turno: "+item.turno;
         detailElementModalidad.textContent = "Modalidad: "+item.modalidad;
         detailElementProfesor.textContent = "Profesor: "+item.name;
         detailElementFecha.textContent = "Fecha de inicio: "+item.name;
         detailElementPrecio.textContent = "Precio: $" + precioFormateado;
 
         itemCompra.appendChild(itemNameCurso);
         itemCompra.appendChild(separator);
         itemCompra.appendChild(detailElementTurno);
         itemCompra.appendChild(detailElementModalidad);
         itemCompra.appendChild(detailElementProfesor);
         itemCompra.appendChild(detailElementFecha);
         itemCompra.appendChild(detailElementPrecio);
         itemsCompraList.appendChild(itemCompra);
     });
 
     // Añadir el contenedor de preguntas frecuentes a la sección
     itemsCompraSection.appendChild(itemsCompraList);
}

function calcularTotal(cartItems) {
    let precioTotal = 0;
    cartItems.forEach(item => {
        precioTotal += Number(item.price);
    });  
    console.log("El precio total es: " + precioTotal);
    return precioTotal = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(precioTotal);
} 

const validatePaymentForm = () => {
    // Lógica de validación
};

const validateBillingForm = () => {
    // Lógica de validación
};

const submitForm = () => {
    if (validatePaymentForm() && validateBillingForm()) {
        alert("Formulario enviado correctamente.");
        // Lógica para enviar los datos al servidor
    }
};

document.getElementById('payment').addEventListener('click', submitForm);

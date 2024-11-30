window.onload = function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = calcularTotal(cartItems);
    document.getElementById("total-precio").innerHTML = total || "0.00";
    cargarDetallesCompra(cartItems);
};

document.getElementById('payment').addEventListener('click', function (event) {
    event.preventDefault();
    
    if (validatePaymentForm() && validateBillingForm()) {
        // Simulación de envío de datos
        alert("Formulario enviado correctamente.");
        console.log("Datos enviados");

        // Vaciar el carrito después del pago
        localStorage.removeItem('cartItems'); // Esto elimina los elementos del carrito del localStorage

        // Redirigir a la página principal después de vaciar el carrito
        window.location.href = "../index.html"; // Redirige a la página principal
    }
});


// Validación del formulario de pago
function validatePaymentForm() {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardHolder = document.getElementById('cardHolder').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const securityCode = document.getElementById('securityCode').value.trim();
    const installments = document.getElementById('installments').value.trim();

    const validateCardNumber = (number) => /^\d{16}$/.test(number);
    const validateSecurityCode = (code) => /^\d{3,4}$/.test(code);

    if (!cardNumber || !cardHolder || !expiryDate || !securityCode || !installments) {
        alert("Por favor, complete todos los campos de pago.");
        return false;
    }

    if (!validateCardNumber(cardNumber)) {
        alert("Número de tarjeta inválido.");
        return false;
    }

    if (!validateSecurityCode(securityCode)) {
        alert("Código de seguridad inválido.");
        return false;
    }

    // Validación de la fecha de expiración
    const [monthText, , year] = expiryDate.split(' '); // "enero de 2030"

    const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", 
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const expMonth = monthNames.indexOf(monthText.toLowerCase()) + 1; // Convierte el mes de texto en número
    const expYear = parseInt(year, 10);

    // Fecha actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript empiezan desde 0
    const currentYear = currentDate.getFullYear();

    // Validar si la fecha es válida (año mayor o igual al actual y mes mayor o igual al actual si el año es igual)
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        alert("Fecha de expiración inválida o vencida.");
        return false;
    }

    return true;
}



// Validación del formulario de facturación
function validateBillingForm() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const numeroDoc = document.getElementById('numeroDoc').value.trim();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone); // Acepta entre 10 y 15 dígitos

    if (!nombre || !email || !confirmEmail || !telefono || !numeroDoc) {
        alert("Por favor, complete todos los campos de facturación.");
        return false;
    }

    if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Ingrese un email válido.");
        return false;
    }

    if (!validatePhone(telefono)) {
        alert("Ingrese un número de teléfono válido.");
        return false;
    }

    return true;
}

function cargarDetallesCompra(cartItems) {
    const itemsCompraSection = document.getElementById("detalle-section");
    itemsCompraSection.innerHTML = ''; // Limpiar contenido previo

    const itemsCompraList = document.createElement("div");
    itemsCompraList.classList.add("items-container");

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
        const precioFormateado = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(item.price || 0);

        itemNameCurso.textContent = "Curso - " + (item.name || "Sin nombre");
        detailElementTurno.textContent = "Turno: " + (item.turno || "No especificado");
        detailElementModalidad.textContent = "Modalidad: " + (item.modalidad || "No especificada");
        detailElementProfesor.textContent = "Profesor: " + (item.profesor || "No especificado");
        detailElementFecha.textContent = "Fecha de inicio: " + (item.fecha || "No especificada");
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

    itemsCompraSection.appendChild(itemsCompraList);
}

function calcularTotal(cartItems) {
    let precioTotal = 0;
    cartItems.forEach(item => {
        precioTotal += Number(item.price || 0);
    });
    return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(precioTotal);
}

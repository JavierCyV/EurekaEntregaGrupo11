// Función para aplicar la fecha de hoy como limite en el calendario
window.onload= function() {

  const date = new Date()
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const currentDate = currentYear + "-" + currentMonth + "-" + currentDay;
  
  document.querySelector('#fecha-curso').setAttribute("min", currentDate); // Setea la fecha de hoy como valor minimo para seleccionar fecha
}

// Variables de reserva
let selectedTurno = null;
let selectedProfesor = null;
let selectedFecha = null;
let selectedCurso = null
let selectedPrecio = null

document.addEventListener("DOMContentLoaded", function () {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Recuperar el carrito desde localStorage

    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const cursoNombre = params.get("nombreCurso");
    const precioCurso = params.get("precioFinal");

    // Mostrar los datos recibidos en el DOM
    try {
      if (cursoNombre) {
        document.getElementById("titulo-nombre-curso").textContent = cursoNombre;  // Mostrar nombre del curso
      } else {
        console.error("Falta el nombre del curso en la URL o los datos no son válidos.");
      }
      if (precioCurso) {
        document.getElementById("total-precio").textContent = precioCurso; // Mostrar precio del curso
      } else {
        console.error("Falta el precio en la URL o los datos no son válidos.");
      }
    } catch (error) {
      console.error("Fallo en encontrar el objeto en el DOM.");
    }
    

    let selectedTurno = null;
    let selectedModalidad = null;
    let selectedProfesor = null;
    let selectedFecha = null;
    
    // Manejo de selección de turnos
    document.querySelectorAll(".card-button button").forEach((button) => {
      button.addEventListener("click", (event) => {
        selectedTurno = event.target.closest(".card-description").querySelector(".card-title h3 span#turno").textContent;
        selectedModalidad = event.target.closest(".card-description").querySelector(".card-title h4").textContent;
        console.log(`Turno seleccionado: ${selectedTurno} - ${selectedModalidad}`);
      });
    });
    
    // Manejo de selección de profesor
    document.querySelectorAll(".card-link button").forEach((button) => {
      button.addEventListener("click", (event) => {
        selectedProfesor = event.target.closest(".card-description").querySelector(".card-title h4").textContent;
        console.log(`Profesor seleccionado: ${selectedProfesor}`);
      });
    });
    
    // Manejo de selección de fecha
    document.querySelector("#fecha-curso").addEventListener("change", (event) => {
      selectedFecha = event.target.value;
      console.log(`Fecha seleccionada: ${selectedFecha}`);
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
        modalidad: selectedModalidad,
        profesor: selectedProfesor,
        fecha: selectedFecha,
      };
    
      // Agregar al carrito
      addToCart(reserva);
      alert(`Reserva confirmada y agregada al carrito!\nDetalles:\nCurso: ${reserva.name}\nPrecio: $${reserva.price}\nTurno: ${reserva.turno} - ${reserva.modalidad}\nProfesor: ${reserva.profesor}\nFecha de inicio: ${reserva.fecha}`);

      window.location.href = `./cursos.html`;
    });
});


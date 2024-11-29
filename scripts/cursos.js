const cursos = [
    {
      id: "course1",
      nombre: "Desarrollo Web Full Stack con JavaScript",
      descripcion: "Domina el desarrollo web full stack aprendiendo JavaScript desde el front-end con React hasta el back-end con Node.js y Express.",
      descuento: "50% OFF",
      precioOriginal: "$100.000,00",
      precioFinal: "$50.000,00",
      cuotas: "6 cuotas de $8.333,33",
      duracion: "12 semanas (48 horas)",
      nivel: "MEDIO"
    },
    {
      id: "course2",
      nombre: "Bases de Datos Relacionales con SQL",
      descripcion: "Aprende a diseñar, crear y gestionar bases de datos relacionales utilizando MySQL y PostgreSQL.",
      descuento: "30% OFF",
      precioOriginal: "$70.000,00",
      precioFinal: "$49.000,00",
      cuotas: "6 cuotas de $8.166,67",
      duracion: "8 semanas (32 horas)",
      nivel: "MEDIO"
    },
    {
      id: "course3",
      nombre: "Fundamentos de Machine Learning con Python",
      descripcion: "Explora los conceptos básicos de machine learning usando Python y librerías como Scikit-learn y Pandas.",
      descuento: "40% OFF",
      precioOriginal: "$120.000,00",
      precioFinal: "$72.000,00",
      cuotas: "6 cuotas de $12.000,00",
      duracion: "10 semanas (40 horas)",
      nivel: "DIFICIL"
    },
    {
      id: "course4",
      nombre: "Introducción al Desarrollo de Juegos con Unity",
      descripcion: "Crea tus propios videojuegos en 2D y 3D utilizando Unity y el lenguaje C#.",
      descuento: "20% OFF",
      precioOriginal: "$90.000,00",
      precioFinal: "$72.000,00",
      cuotas: "6 cuotas de $12.000,00",
      duracion: "8 semanas (32 horas)",
      nivel: "MEDIO"
    },
    {
      id: "course5",
      nombre: "Automatización de Tareas con Python",
      descripcion: "Automatiza tareas repetitivas y optimiza procesos aprendiendo a programar scripts en Python.",
      descuento: "25% OFF",
      precioOriginal: "$60.000,00",
      precioFinal: "$45.000,00",
      cuotas: "6 cuotas de $7.500,00",
      duracion: "6 semanas (24 horas)",
      nivel: "FACIL"
    }
  ];
  
  const sliderContainer = document.querySelector('.slider-container');
  cursos.forEach(curso => {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('slide-item');
    courseDiv.id = curso.id;
    courseDiv.setAttribute('onclick', `openModal('${curso.id}')`);
    courseDiv.innerHTML = `
      <div class="discount-section"><span class="discount">${curso.descuento}</span></div>
      <div class="title-description">
        <div class="title">${curso.nombre}</div>
        <div class="description">${curso.descripcion}</div>
      </div>
      <div class="pricing">
        <div class="price">
          <span class="original-price">${curso.precioOriginal}</span> - ${curso.precioFinal}
        </div>
        <div class="installments">${curso.cuotas}</div>
        <div class="duration">${curso.duracion}</div>
      </div>
      <div class="footer">
        <div class="difficulty">Nivel: ${curso.nivel}</div>
      </div>`;
    sliderContainer.appendChild(courseDiv);
  });
  


  function openModal(courseId) {
    const courseData = cursos.find(curso => curso.id === courseId);
    if (courseData) {
      document.querySelector('.modal-titulo').textContent = courseData.nombre;
      document.querySelector('.discount').textContent = courseData.descuento;
      document.querySelector('.modal-description').textContent = courseData.descripcion;
      document.querySelector('.original-price').textContent = courseData.precioOriginal;
      document.querySelector('.final-price').textContent = courseData.precioFinal;
      document.querySelector('.modal-button').textContent = `Reserva tu cursada`;
      const modal = document.getElementById('modalTemplate');
      modal.classList.add('is-active'); // Mostramos el modal
    }
  }
  
  function closeModal() {
    const modal = document.getElementById('modalTemplate');
    modal.classList.remove('is-active'); // Ocultamos el modal
  }

  function redirectToReserva() {
    const finalPrice = document.querySelector(".final-price").textContent;
    const nombreCurso = document.querySelector('.modal-titulo').textContent;
    
    window.location.href = `reservas.html?precioFinal=${encodeURIComponent(finalPrice)}&nombreCurso=${encodeURIComponent(nombreCurso)}`;
  }
  
  
  
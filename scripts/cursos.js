const cursos = [
    {
      id: "course1",
      nombre: "Introducción a la Programación en Python",
      descripcion: "Aprende los fundamentos básicos de Python...",
      descuento: "60% OFF",
      precioOriginal: "$80.000,00",
      precioFinal: "$32.000,00",
      cuotas: "6 cuotas de $5.333,33",
      duracion: "4 semanas (16 horas)",
      nivel: "FACIL"
    },
    {
        id: "course2",
        nombre: "Introducción a la Programación en Python",
        descripcion: "Aprende los fundamentos básicos de Python...",
        descuento: "60% OFF",
        precioOriginal: "$80.000,00",
        precioFinal: "$32.000,00",
        cuotas: "6 cuotas de $5.333,33",
        duracion: "4 semanas (16 horas)",
        nivel: "FACIL"
      },
      {
        id: "course3",
        nombre: "Introducción a la Programación en Python",
        descripcion: "Aprende los fundamentos básicos de Python...",
        descuento: "60% OFF",
        precioOriginal: "$80.000,00",
        precioFinal: "$32.000,00",
        cuotas: "6 cuotas de $5.333,33",
        duracion: "4 semanas (16 horas)",
        nivel: "FACIL"
      },
      {
        id: "course4",
        nombre: "Introducción a la Programación en Python",
        descripcion: "Aprende los fundamentos básicos de Python...",
        descuento: "60% OFF",
        precioOriginal: "$80.000,00",
        precioFinal: "$32.000,00",
        cuotas: "6 cuotas de $5.333,33",
        duracion: "4 semanas (16 horas)",
        nivel: "FACIL"
      },
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
      document.querySelector('.modal-title').textContent = courseData.nombre;
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
  
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender Python?",
            description: "Conoce cómo Python puede impulsar tu carrera en Desarrollo Web, Ciencia de Datos, Inteligencia Artificial y más.",
            link: "#"
        },
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender JavaScript?",
            description: "JavaScript es esencial para el desarrollo web moderno. Descubre por qué deberías aprenderlo.",
            link: "#"
        },
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender Java?",
            description: "Java sigue siendo uno de los lenguajes más demandados en el mercado laboral.",
            link: "#"
        },
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender C#?",
            description: "C# es un lenguaje poderoso para el desarrollo de aplicaciones en Windows y videojuegos.",
            link: "#"
        },
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender Ruby?",
            description: "Ruby es un lenguaje popular para el desarrollo web y la creación de aplicaciones.",
            link: "#"
        },
        {
            readingTime: "5 minutos de lectura",
            title: "¿Vale la pena aprender PHP?",
            description: "PHP es un lenguaje esencial para el desarrollo de aplicaciones web dinámicas.",
            link: "#"
        }
    ];

    const cardContainer = document.getElementById('card-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div class="card-content">
                <p class="subtitle">${card.readingTime}</p>
                <h3 class="title">${card.title}</h3>
                <p>${card.description}</p>
            </div>
            <footer class="card-footer">
                <a href="${card.link}" class="card-footer-item">Leer más</a>
            </footer>
        `;
        cardContainer.appendChild(cardElement);
    });
});



//PARTE PREGUNTAS FRECUENTES
document.addEventListener("DOMContentLoaded", function() {
    const faqData = [
        { question: "¿Cuál es la modalidad de cursada?", answer: "La modalidad es en línea y autoguiada." },
        { question: "¿Puedo obtener un certificado al finalizar el curso?", answer: "Sí, se otorga un certificado al completar el curso." },
        { question: "¿Existe un límite de tiempo para completar el curso?", answer: "No, puedes completar el curso a tu propio ritmo." },
        { question: "¿Cómo puedo acceder al material de estudio después de que termine el curso?", answer: "El material queda disponible indefinidamente." },
        { question: "¿Hay descuentos disponibles si me inscribo en más de un curso?", answer: "Sí, ofrecemos descuentos en inscripciones múltiples." },
        { question: "¿Puedo transferir mi inscripción a otra persona?", answer: "No, las inscripciones son intransferibles." },
        { question: "¿Qué soporte técnico ofrecen si tengo problemas durante el curso?", answer: "Ofrecemos soporte técnico 24/7." }
    ];

    const preguntasFrecuentesSection = document.getElementById("preguntas-frecuentes");

    // Crear el título
    const titleElement = document.createElement("h2");
    titleElement.textContent = "Preguntas frecuentes";
    titleElement.classList.add("comunidad-h2");
    preguntasFrecuentesSection.appendChild(titleElement);

    // Crear el contenedor de preguntas frecuentes
    const faqContainer = document.createElement("div");
    faqContainer.classList.add("faq-container");

    // Generar las preguntas y respuestas
    faqData.forEach(item => {
        const detailElement = document.createElement("details");
        const summaryElement = document.createElement("summary");
        const answerElement = document.createElement("p");

        summaryElement.textContent = item.question;
        answerElement.textContent = item.answer;

        detailElement.appendChild(summaryElement);
        detailElement.appendChild(answerElement);
        faqContainer.appendChild(detailElement);
    });

    // Añadir el contenedor de preguntas frecuentes a la sección
    preguntasFrecuentesSection.appendChild(faqContainer);

    // Crear el contenedor de newsletter
    const newsletterContainer = document.createElement("div");
    newsletterContainer.classList.add("newsletter");

    const newsletterText = document.createElement("p");
    newsletterText.textContent = "Suscríbete a nuestro Newsletter";

    const subscribeButton = document.createElement("button");
    subscribeButton.classList.add("button", "is-primary");
    subscribeButton.textContent = "Quiero Suscribirme";

    newsletterContainer.appendChild(newsletterText);
    newsletterContainer.appendChild(subscribeButton);

    // Añadir el contenedor de newsletter debajo del contenedor de preguntas
    preguntasFrecuentesSection.appendChild(newsletterContainer);
});

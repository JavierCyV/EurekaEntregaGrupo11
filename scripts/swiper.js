var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    } 
});
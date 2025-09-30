import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function slider() {
    // Check if the .mySwiper element exists in the DOM
    if (!document.querySelector('.mySwiper')) {
        // If the element does not exist, exit the function early
        return;
    }

    // Initialize Swiper only if .mySwiper exists
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            220: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            868: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            1440: {
                slidesPerView: 2.3,
                spaceBetween: 20
            }
        }
    });
}

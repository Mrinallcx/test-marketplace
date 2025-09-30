export function homeHeaderSlider() {
  // First, check if the specific element exists on the page
  const container = document.querySelector('.swiper-wrapper');
  if (!container) {
    // If the container doesn't exist, exit the function to avoid affecting other pages or functionalities
    return;
  }

  // Your slides data remains unchanged
  const slidesData = [
    { imgSrc: "/new-img/agriculture.png", brand: "Agriculture", alt: "header image agriculture", overlayClass: " overlay1" },
    { imgSrc: "/new-img/carbon-credit.png", brand: "Carbon Credit", alt: "header image carbon credit", overlayClass: "overlay2" },
    { imgSrc: "/new-img/energy.png", brand: "Energy", alt: "header image energy", overlayClass: "overlay3" },
    { imgSrc: "/new-img/gold.png", brand: "Gold", alt: "header image gold", overlayClass: "overlay4" },
    { imgSrc: "/new-img/silver.png", brand: "Silver", alt: "header image silver", overlayClass: "overlay5" },
  ];

  // Moved inside the function to ensure it only executes when the container is present
  function createSlidesFromJson(slideData) {
    slideData.forEach((slide, index) => {
      const slideEl = document.createElement('div');
      slideEl.classList.add('swiper-slide');

      slideEl.innerHTML = `
            <img src="${slide.imgSrc}" alt="${slide.alt}" loading="lazy">
            <div class="overlay ${slide.overlayClass}">
              <h4>${slide.brand}</h4>
              <a href="gold.html" class="m-flip js-flip">
                <span class="m-flip_item">Discover</span>
                <span class="m-flip_item">Discover</span>
              </a>
            </div>
          `;

      container.appendChild(slideEl);
    });
  }

  // This code now only runs if the `.swiper-wrapper` is present on the page
  document.addEventListener('DOMContentLoaded', function () {
    createSlidesFromJson(slidesData);
  });
}

// Call homeHeaderSlider function, or it could be exported and called from another script where it's imported

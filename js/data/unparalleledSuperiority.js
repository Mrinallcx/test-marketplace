const accordionData = [
    {
        "title": "Unmatched Comfort and Fit",
        "content": "Experience the perfect blend of comfort and style with our eyeglasses. Designed with precision, they ensure a snug fit that keeps you at ease all day long, making you forget you're even wearing them."
    },
    {
        "title": "Cutting-edge Vision Technology",
        "content": "Elevate your visual clarity with our advanced lens technology. Whether you're nearsighted, farsighted, or in need of blue light filtering, our eyeglasses provide impeccable vision correction tailored to your unique needs."
    },
    {
        "title": "Durable and Fashion-Forward Designs",
        "content": "Our eyeglasses are not just practical; they're a statement of style. Crafted with high-quality materials, they promise durability while keeping you at the forefront of fashion trends. Enjoy the perfect blend of longevity and aesthetics with every pair."
    }
];

export function unparalleledSuperiority() {
    function generateAccordion(accordionData) {
        // Check if the accordion wrapper exists
        const accordionWrapper = document.getElementById('accordion_wrapper');
        if (!accordionWrapper) {
            // If the element doesn't exist, exit the function early
            return;
        }

        accordionWrapper.innerHTML = ''; // Clear the wrapper if it exists

        accordionData.forEach((item, index) => {
            const accordion = document.createElement('div');
            accordion.className = 'accordion';
            accordion.innerHTML = `
            <div class="question">
              <h4>${item.title}</h4>
            </div>
            <div class="answer">
              <p>${item.content}</p>
            </div>
          `;

            const question = accordion.querySelector('.question');
            const answer = accordion.querySelector('.answer');

            question.addEventListener('click', function () {
                if (!answer.classList.contains('expanded')) {
                    document.querySelectorAll('.accordion .answer').forEach(function (el) {
                        el.classList.remove('expanded');
                        el.style.maxHeight = 0;
                    });

                    answer.classList.add('expanded');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.classList.remove('expanded');
                    answer.style.maxHeight = 0;
                }
            });

            accordionWrapper.appendChild(accordion);
        });

        accordionWrapper.querySelector('.accordion:first-child .question').click();
    }

    // Initial call to populate the accordion
    generateAccordion(accordionData);
}

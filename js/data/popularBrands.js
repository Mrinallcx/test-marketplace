// Data for Popular Brands for Home Page
const brandsData = [
    {
        row: 1,
        brands: [
            { name: "Rayban", image: "../../public/home/popBrand1.jpg", link: "https://www.ray-ban.com/row", overlayClass: "overlay1" },
            { name: "Tom Ford", image: "../../public/home/popBrand2.avif", link: "https://www.tomfordfashion.com/eyewear/", overlayClass: "overlay2" },
            { name: "Persol", image: "../../public/home/popBrand3.avif", link: "https://www.persol.com/usa", overlayClass: "overlay3" }
        ]
    },
    {
        row: 2,
        brands: [
            { name: "Dior", image: "../../public/home/popBrand4.jpg", link: "https://www.designereyes.com/collections/dior/eyeglasses", overlayClass: "overlay4" },
            { name: "Oakley", image: "../../public/home/popBrand5.webp", link: "https://th.oakley.com/en", overlayClass: "overlay5" },
            { name: "Gucci", image: "../../public/home/popBrand6.avif", link: "https://www.gucci.com/us/en/ca/women/accessories-for-women/eyewear-for-women/sunglasses-for-women-c-women-accessories-sunglasses", overlayClass: "overlay6" }
        ]
    }
];

// Fetchind Data into div
export function popularBrandsDataForHome() {
    const popularBrandsWrapper = document.querySelector('.popularBrandsWrapper');

    // Check if .popularBrandsWrapper exists in the DOM
    if (!popularBrandsWrapper) {
        return; // Exit the function early if .popularBrandsWrapper doesn't exist
    }

    brandsData.forEach(group => {
        let row = `<div class="row row${group.row}">`;
        group.brands.forEach((brand, index) => {
            row += `
                <a class="box box-${index + 1}" href="${brand.link}" target="_blank" style="--img: url('${brand.image}');">
                    <h4>${brand.name}</h4>
                    <div class="overlay ${brand.overlayClass}"></div>
                </a>`;
        });
        row += `</div>`;
        popularBrandsWrapper.innerHTML += row;
    });
}



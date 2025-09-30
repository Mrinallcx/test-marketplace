const brands = [
    {
        name: "Rayban",
        imageUrl: "public/home/popBrand1.jpg",
        pageUrl: "https://www.ray-ban.com/row",
        overlay: "overlay1"
    },
    {
        name: "Tom Ford",
        imageUrl: "public/home/popBrand2.avif",
        pageUrl: "https://www.tomfordfashion.com/eyewear/",
        overlay: "overlay2"
    },
    {
        name: "Persol",
        imageUrl: "public/home/popBrand3.avif",
        pageUrl: "https://www.persol.com/usa",
        overlay: "overlay3"
    },
    {
        name: "Dior",
        imageUrl: "public/home/popBrand4.jpg",
        pageUrl: "https://www.designereyes.com/collections/dior/eyeglasses",
        overlay: "overlay4"
    },
    {
        name: "Oakley",
        imageUrl: "public/home/popBrand5.webp",
        pageUrl: "https://th.oakley.com/en",
        overlay: "overlay5"
    },
    {
        name: "Gucci",
        imageUrl: "public/home/popBrand6.avif",
        pageUrl: "https://www.gucci.com/us/en/ca/women/accessories-for-women/eyewear-for-women/sunglasses-for-women-c-women-accessories-sunglasses",
        overlay: "overlay6"
    },
    {
        name: "Prada",
        imageUrl: "public/brands/brand7.avif",
        pageUrl: "https://www.prada.com/us/en/pradasphere/eyewear.html",
        overlay: "overlay7"
    },
    {
        name: "Burberry",
        imageUrl: "public/brands/brand8.jpg",
        pageUrl: "https://row.burberry.com/l/mens-sunglasses/",
        overlay: "overlay8"
    },
    {
        name: "Oliver Peoples",
        imageUrl: "public/brands/brand9.jpg",
        pageUrl: "https://www.oliverpeoples.com/usa/eyeglasses",
        overlay: "overlay9"
    },
    {
        name: "kate Spade",
        imageUrl: "public/brands/brand10.jpg",
        pageUrl: "https://www.katespade.com/shop/accessories/sunglasses-reading-glasses",
        overlay: "overlay10"
    },
    {
        name: "Ace & Tate",
        imageUrl: "public/brands/brand11.avif",
        pageUrl: "https://www.aceandtate.com/nl-en",
        overlay: "overlay11"
    },
    {
        name: "Warby Parker",
        imageUrl: "public/brands/brand12.avif",
        pageUrl: "https://www.warbyparker.com/",
        overlay: "overlay12"
    },
    {
        name: "Kirk Originals",
        imageUrl: "public/brands/brand13.avif",
        pageUrl: "https://kirkoriginals.com/",
        overlay: "overlay13"
    },
    {
        name: "Versace",
        imageUrl: "public/brands/brand14.avif",
        pageUrl: "https://www.versace.com/pk/en/women/accessories/eyewear/",
        overlay: "overlay14"
    },
    {
        name: "Carrera",
        imageUrl: "public/brands/brand15.avif",
        pageUrl: "https://www.carreraworld.com/en/",
        overlay: "overlay15"
    },
    {
        name: "Cubitts",
        imageUrl: "public/brands/brand16.avif",
        pageUrl: "https://cubitts.com/collections/sunglasses",
        overlay: "overlay16"
    },
];

export function gridForBrandPage() {
    function renderBrands(brands) {
        const brandsGrid = document.getElementById('brands_grid');
        // Check if brandsGrid exists on the page before proceeding
        if (!brandsGrid) {
            return;
        }

        brandsGrid.innerHTML = brands.map(brand => `
            <a href="${brand.pageUrl}" target="_blank" class="brand-item">
                <img src="${brand.imageUrl}" alt="${brand.name}" class="brand-image">
                <h4 class="brand-name">${brand.name}</h4>
                <div class="overlay ${brand.overlay}"></div>
            </a>
        `).join('');
    }

    renderBrands(brands);
}
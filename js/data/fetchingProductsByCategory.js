import { addToCart } from "../addToCart.js";
import { quantityToggle } from "../quantityToggle.js";

const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    // Instead of hardcoding categories, we use a mapping of category names to container IDs.
    const categoryContainers = {
        "New Arrivals": document.querySelector("#new_arrivals_product_container"),
        "Best Seller": document.querySelector("#best_seller_product_container"),
        "Eyeglass": document.querySelector("#eyeglasses_product_container"),
        "Sunglass": document.querySelector("#sunglasses_product_container"),
        // Add more categories and their corresponding container IDs here.
        //== "Lens": document.querySelector("#reading_glass_product_container"),
        //== "Water": document.querySelector("#contact_lens_product_container"),
    };

    if (!productTemplate || !products) {
        return false;
    }

    products.forEach((curProd) => {
        const { category, description, id, image, name, price } = curProd;

        // Get the target container from the mapping using the product's category.
        // This replaces the previous if-else or switch-case logic.
        let targetContainer = categoryContainers[category];

        // If the product's category does not have a target container, skip the current iteration
        if (!targetContainer) return;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
        const categoryBadge = productClone.querySelector(".category");
        // Default badge text from the product's category
        let badgeText = category;
        // Rename badge based on page
        if (document.body) {
            if (document.body.classList.contains('page-gold')) badgeText = 'Gold Bar';
            if (document.body.classList.contains('page-silver')) badgeText = 'Silver Bar';
            if (document.body.classList.contains('page-platinum')) badgeText = 'Platinum Bar';
        }
        categoryBadge.textContent = badgeText;
        // Name/description overrides per page
        let displayName = name;
        let displayDescription = description;
        if (document.body) {
            if (document.body.classList.contains('page-silver')) {
                // Prefer replacing occurrences of Gold with Silver; fallback to a default name
                displayName = /gold/i.test(displayName) ? displayName.replace(/gold/ig, 'Silver') : '1 Ounce Silver Bar';
                displayDescription = displayDescription.replace(/gold/ig, 'silver');
            } else if (document.body.classList.contains('page-platinum')) {
                displayName = /gold/i.test(displayName) ? displayName.replace(/gold/ig, 'Platinum') : '1 Ounce Platinum Bar';
                displayDescription = displayDescription.replace(/gold/ig, 'platinum');
            }
        }
        productClone.querySelector(".productName").textContent = displayName;
        // Image override per page
        let displayImage = image;
        if (document.body) {
            if (document.body.classList.contains('page-silver')) {
                // Use the provided Silver image for all items on the Silver page
                displayImage = "/product-2/silver-3.png";
            } else if (document.body.classList.contains('page-platinum')) {
                // Use the provided Platinum image for all items on the Platinum page
                displayImage = "/product-2/platinum-4.png";
            }
        }
        const imgEl = productClone.querySelector(".productImage");
        imgEl.src = displayImage;
        imgEl.alt = name;
        productClone.querySelector(".productDescription").textContent = displayDescription;
        // Override prices based on page without mutating source data
        let displayPrice = price;
        if (document.body) {
            if (document.body.classList.contains('page-silver')) {
                // Silver: >$40 and <$50
                displayPrice = '$' + (41 + (id % 9)); // 41..49
            } else if (document.body.classList.contains('page-platinum')) {
                // Platinum: $200-$300
                displayPrice = '$' + (200 + (id % 101)); // 200..300
            }
        }
        productClone.querySelector(".productPrice").textContent = `${displayPrice}`;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            quantityToggle(event, id);
        });

        productClone.querySelector('.add_to_cart_btn').addEventListener('click', (event) => {
            addToCart(event, id);
        });

        // Make product card clickable to product detail page
        const rootCard = productClone.querySelector('.card');
        if (rootCard) {
            rootCard.style.cursor = 'pointer';
            rootCard.addEventListener('click', (e) => {
                // prevent click when clicking add to cart or quantity controls
                const isAction = e.target.closest('.add_to_cart_btn') || e.target.closest('.stockElement');
                if (isAction) return;
                window.location.href = `product.html?id=${id}`;
            });
        }

        targetContainer.append(productClone);
    });
};

import products from "./data/products.json";
import { generateFooter } from "./data/footer.js";
import { navigation } from "./nav.js";
import { updateCartValue } from "./updateCartValue.js";
import { addToCart } from "./addToCart.js";
import { quantityToggle } from "./quantityToggle.js";

function getQueryParam(paramName) {
    const url = new URL(window.location.href);
    return url.searchParams.get(paramName);
}

function renderProductDetail(product) {
    const container = document.querySelector('#productDetailContainer');
    if (!container || !product) return;

    container.innerHTML = `
      <div class="productDetail">
        <div class="left">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="right">
          <h1 class="productName">${product.name}</h1>
          <p class="productCategory">${product.category}</p>
          <p class="productDescription">${product.description}</p>
          <div class="productPriceElement">
            <h3 class="productPrice">${product.price}</h3>
          </div>
          <div class="productQuantityElement">
            <div class="stockElement">
              <button class="cartDecrement">-</button>
              <h5 class="productQuantity">1</h5>
              <button class="cartIncrement">+</button>
            </div>
          </div>
          <div class="btn btn1 mT2">
            <button class="add_to_cart_btn"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    // Wire quantity and add-to-cart
    const id = product.id;
    const stockElement = container.querySelector('.stockElement');
    stockElement.addEventListener('click', (event) => quantityToggle(event, id));

    const addBtn = container.querySelector('.add_to_cart_btn');
    // create temporary card-like wrapper to reuse addToCart logic expecting #card<ID>
    const hiddenCard = document.createElement('div');
    hiddenCard.id = `card${id}`;
    hiddenCard.style.display = 'none';
    hiddenCard.innerHTML = `
        <div class="productPrice">${product.price}</div>
        <div class="productQuantity">1</div>
    `;
    document.body.appendChild(hiddenCard);

    addBtn.addEventListener('click', (event) => {
        addToCart(event, id);
        updateCartValue();
    });
}

async function main() {
    await Promise.all([
        navigation(),
        generateFooter(),
    ]);

    const idStr = getQueryParam('id');
    const id = idStr ? Number(idStr) : NaN;
    const product = products.find(p => p.id === id);
    renderProductDetail(product);
}

main();




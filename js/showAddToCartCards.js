import products from "./data/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCardProductFromLocalStorage } from "./getCardProductFromLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCardProductFromLocalStorage();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});

//============================= Update addToCartPage
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, description, id, image, name, price } = curProd;

        let productClone = document.importNode(templateContainer.content, true);
        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            incrementDecrement(event, id, price);
        });

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;
        productClone.querySelector(".remove_to_cart_btn").addEventListener('click', () => removeProdFromCart(id));

        cartElement.append(productClone);
    });
};

showCartProduct();
// Calculating the cart total in our addtoCart page
updateCartProductTotal();
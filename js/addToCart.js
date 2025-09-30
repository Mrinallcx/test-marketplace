import { getCardProductFromLocalStorage } from "./getCardProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCardProductFromLocalStorage();

export const addToCart = (event, id) => {
    let arrLocalStorageProduct = getCardProductFromLocalStorage();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    price = price.replace("$", "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
        // Toastify
        showToast("add", id);
    }

    if (existingProd) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // Update the nav Cart Value
    updateCartValue(arrLocalStorageProduct);

    // Toastify
    showToast("add", id);
};
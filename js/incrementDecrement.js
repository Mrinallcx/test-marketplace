import { getCardProductFromLocalStorage } from "./getCardProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, price) => {
    const currentCartElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCartElement.querySelector(".productQuantity");
    const productPrice = currentCartElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0; // This will store the total price

    let localCartProducts = getCardProductFromLocalStorage();
    let existingProd = localCartProducts.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        // Assuming existingProd.price is the total price from localStorage, 
        // we divide by quantity to get the unit price back for calculations.
        price = existingProd.price / existingProd.quantity; // Correct unit price
    }

    if (event.target.className.includes("cartIncrement")) {
        quantity += 1;
    } else if (event.target.className.includes("cartDecrement") && quantity > 1) {
        quantity -= 1; // Prevent quantity from being less than 1
    }

    // Calculate the total price based on the corrected unit price and quantity
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    // Check if the product already exists, update if it does, or add if it doesn't
    let productIndex = localCartProducts.findIndex((curProd) => curProd.id === id);
    if (productIndex !== -1) {
        localCartProducts[productIndex] = { id, quantity, price: localStoragePrice };
    } else {
        localCartProducts.push({ id, quantity, price: localStoragePrice });
    }

    // Update local storage
    localStorage.setItem("cartProductLS", JSON.stringify(localCartProducts));

    // Update UI elements
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice.toString();

    // Calculating the cart total in our addtoCart page
    updateCartProductTotal();
};

import { updateCartValue } from "./updateCartValue.js";

export const getCardProductFromLocalStorage = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);

    // Update the nav Cart Value
    updateCartValue(cartProducts);

    return cartProducts;
};
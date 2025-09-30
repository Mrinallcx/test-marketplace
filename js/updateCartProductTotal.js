import { getCardProductFromLocalStorage } from "./getCardProductFromLS";

// addToCart Pricing card of addToCart page
export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let cartProducts = getCardProductFromLocalStorage();
    let initialValue = 0;

    let totalProductPrice = cartProducts.reduce((accum, curElem, index, arr, tj) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue);

    productSubTotal.textContent = `$${totalProductPrice}`;
    productFinalTotal.textContent = `$${totalProductPrice + 1}`;
};
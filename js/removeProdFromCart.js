import { getCardProductFromLocalStorage } from "./getCardProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCardProductFromLocalStorage();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();

        // Toastify
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
};
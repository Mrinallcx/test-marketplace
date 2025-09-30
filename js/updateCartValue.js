const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartProducts.length}`;
};

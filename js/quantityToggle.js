//================= Cart increment decrement function
export const quantityToggle = (event, id) => {
    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className.includes("cartIncrement")) {
        quantity += 1;
    } else if (event.target.className.includes("cartDecrement") && quantity > 1) {
        quantity -= 1; // Prevent quantity from being less than 1
    }


    productQuantity.innerText = quantity;
    parseInt(productQuantity.setAttribute("data-quantity", quantity));
    return quantity;
};
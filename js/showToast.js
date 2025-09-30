export function showToast (operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // Set the text content based on add or delete
    if (operation === "add") {
        toast.textContent = `Product with ID ${id} has been added.`;
    } else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);

    // Remove toast after a seconds
    setTimeout(() => {
        toast.remove();
    }, 2000);
}
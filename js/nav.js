export function navigation() {
    const toggleClass = (element, className) => element.classList.toggle(className);
    const hamburger = document.querySelector(".hamburger");
    const navcnt = document.querySelector("nav");
    const overlay = document.querySelector(".nav_overlay");

    hamburger.onclick = () => {
        toggleClass(navcnt, "active");
        toggleClass(overlay, "active");
        toggleClass(hamburger, "active");
    };

    overlay.onclick = () => {
        toggleClass(navcnt, "active");
        toggleClass(overlay, "active");
        toggleClass(hamburger, "active");
    };
}

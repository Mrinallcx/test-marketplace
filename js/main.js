// Locomotive smooth scroll
import LocomotiveScroll from 'locomotive-scroll';

// Import modules for the navigation menu, flip text link hover effect, and swiper sliding functionality
import { navigation } from "./nav.js";
import { flipText } from "./flip.js";
import { slider } from "./swiper.js";

// Import LordIcons for advanced icon animations
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// Import data for the home page components
import { homeHeaderSlider } from "./data/homeHeaderSlides.js";
import { personalizedEyecareContent } from "./data/personalizedEyecare.js";
import { unparalleledSuperiority } from "./data/unparalleledSuperiority.js";
import { popularBrandsDataForHome } from "./data/popularBrands.js";

// Import data for the Brands Page
import { gridForBrandPage } from "./data/brandsPage.js";

// Import additional components and data for the website
import { instaGram_Post } from "./data/instaGram_Post.js";
import { customerHelp } from "./data/customerHelp.js";
import { generateFooter } from "./data/footer.js";
import products from "./data/products.json";
import { showProductContainer } from "./data/fetchingProductsByCategory.js";


// Main function to initialize the website asynchronously
async function main() {
    try {
        // Execute all asynchronous operations
        await Promise.all([
            LocomotiveJs(),
            defineElement(lottie.loadAnimation),
            flipText(),
            navigation(),
            slider(),
            homeHeaderSlider(),
            personalizedEyecareContent(),
            unparalleledSuperiority(),
            popularBrandsDataForHome(),
            instaGram_Post('.instaGram_Post_wrapper'),
            gridForBrandPage(),
            customerHelp(),
            generateFooter(),
            showProductContainer(products),
            // Add any other asynchronous operations here
        ]);
    } catch (error) {
        // Log any errors that occur during site initialization
        console.error("Error during site initialization: ", error);
    } finally {
        // Hide the loader once everything is loaded
        const loader = document.getElementById('loader-wrapper');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500); // Smooth fade out
        }
    }
}

// LocomotiveJS
function LocomotiveJs() {
    let locoScroll;
    locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: true,
    });

    new ResizeObserver(() => locoScroll.update()).observe(
        document.querySelector("#main")
    );
}

// Execute the main function to initialize the site
main();
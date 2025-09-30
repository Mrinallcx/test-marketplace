import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
                gold: resolve(__dirname, "gold.html"),
                silver: resolve(__dirname, "silver.html"),
                platinum: resolve(__dirname, "platinum.html"),
                sunglasses: resolve(__dirname, "sunglasses.html"),
                about: resolve(__dirname, "about.html"),
                brands: resolve(__dirname, "brands.html"),
                contact: resolve(__dirname, "contact.html"),
                signIn: resolve(__dirname, "signIn.html"),
                signUp: resolve(__dirname, "signUp.html"),
                product: resolve(__dirname, "product.html"),
                privacyPolicy: resolve(__dirname, "privacypolicy.html"),
                refundPolicy: resolve(__dirname, "refundpolicy.html"),
                shippingPolicy: resolve(__dirname, "shippingpolicy.html"),
                termsOfService: resolve(__dirname, "termsofservice.html"),
            },
        },
    },
});
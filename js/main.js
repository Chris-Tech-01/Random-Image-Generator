import {
    fetchImage,
    validateEmail,
    addImageToGallery
} from './index.js';

document.addEventListener("DOMContentLoaded", () => {

    const randomImage = document.getElementById("random-image");
    const nextImageBtn = document.getElementById("next-image");
    const form = document.querySelector("form");
    const emailInput = document.querySelector(".enter-email");
    const gallery = document.getElementById("gallery");

    let nextImageUrl = null;

    async function preloadNextImage() {
        
        try {
            
            const url = await fetchImage();
            nextImageUrl = url;

        } catch (err) {
           
            console.error("Failed to preload image:", err);

        }

    }

    async function loadNewImage() {

        if (nextImageUrl) {
            
            randomImage.src = nextImageUrl;
            nextImageUrl = null;

            preloadNextImage();

        } else {

            const url = await fetchImage();
            randomImage.src = url;

            preloadNextImage();

        }
    }

    preloadNextImage();
    loadNewImage();
    
    nextImageBtn.addEventListener("click", loadNewImage);

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid Email Address.");
            return;
        }

        if (!randomImage.src) {
            alert("No image to assign yet. Try 'Next Image' first.");
            return;
        }

        addImageToGallery(email, randomImage.src, gallery);
        loadNewImage();

    })
});

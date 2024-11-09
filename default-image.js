// Function to replace broken images with a default image
function handleImageError() {
    const defaultImagePath = '../images/default_image.jpg';

    // Select all images on the page
    const images = document.querySelectorAll('img');

    // Add error event listener to each image
    images.forEach((img) => {
        img.addEventListener('error', () => {
            // Replace broken image src with the default image path
            img.src = defaultImagePath;

            // Remove the error listener to avoid infinite loop
            img.onerror = null;
        });
    });
}

// Call the function after DOM content is loaded
document.addEventListener('DOMContentLoaded', handleImageError);

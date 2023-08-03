// Replace these URLs with your own image URLs
const imageUrls = [
    "images/ALSEEF2.jpeg",
    "images/BURJ1.jpeg",
    "images/KUNAFA.jpeg",
    // Add more image URLs as needed
];

  // Function to create gallery images dynamically
function createGalleryImages() {
    const gallery = document.querySelector(".gallery");
    imageUrls.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Travel Image";
    img.addEventListener("mouseover", () => toggleImageAnimation(img));
    gallery.appendChild(img);
    });
}
function toggleImageAnimation(img) {
    if (!img.classList.contains("animate-image")) {
    img.classList.add("animate-image");
    img.addEventListener("animationend", () => {
        img.classList.remove("animate-image");
      }, { once: true }); // Remove the event listener after the animation ends
    }
}

  // Create the gallery when the page loads
window.addEventListener("load", createGalleryImages);

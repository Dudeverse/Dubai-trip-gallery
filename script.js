// Add images here
const imageUrls = [
    "images/ALSEEF1.jpeg",
    "images/MALL2.jpeg",
    "images/ALSEEF2.jpeg",
    "images/MALL1.jpeg",
    "images/LOCALSHOP.jpeg",
    "images/ALSEEF3.jpeg",
    "images/DUBAIMALL3.jpeg",
    "images/WATER_TAXI_2.jpeg",
    "images/ALFAHIDI.jpeg",
    "images/BURJ1.jpeg",
    "images/KUNAFA.jpeg",
    "images/NABLUS.jpeg",
];

// function for adding images dynamically
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

//function for animation effect
function toggleImageAnimation(img) {
    if (!img.classList.contains("animate-image")) {
    img.classList.add("animate-image");
    img.addEventListener("animationend", () => {
        img.classList.remove("animate-image");
      }, { once: true }); 
    }
}

// gallery appears after page load
window.addEventListener("load", createGalleryImages);

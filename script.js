// function for animation effect
function toggleDivAnimation(img) {
    if (!img.classList.contains("animate-div")) {
        img.classList.add("animate-div");
        img.addEventListener("animationend", () => {
            img.classList.remove("animate-div");
        }, { once: true });
    }
}

// gallery appears after page load
window.addEventListener("load", () => {
    // Select all the divs with the class "polaroid"
    const polaroidDivs = document.querySelectorAll(".polaroid");

    // Attach the animation event listener to each "polaroid" div
    polaroidDivs.forEach((img) => {
        img.addEventListener("mouseover", () => toggleDivAnimation(img));
    });
});

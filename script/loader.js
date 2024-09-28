document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".loader img");
    let currentIndex = 0;

    function changeImage() {
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 285); // Change every 285ms
    changeImage(); // Start with the first image
});

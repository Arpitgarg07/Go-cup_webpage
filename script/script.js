
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("slideshow-container");
    var iframe = document.createElement('iframe');
    iframe.src = "slideshow-main/simple-animated-slider-with-swiper-js-and-gsap-tweenmax/dist/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "0";
    container.appendChild(iframe);
});

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("slideshow-middle");
    var iframe = document.createElement('iframe');
    iframe.src = "slideshow-aboutus/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "auto"; // Auto-adjust height based on content
    iframe.style.border = "0";
    iframe.style.minHeight = "500px"; // Set a minimum height if needed
    container.appendChild(iframe);
});

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("ad-machine");
    var iframe = document.createElement('iframe');
    iframe.src = "coffeemachine/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "0";
    container.appendChild(iframe);
});

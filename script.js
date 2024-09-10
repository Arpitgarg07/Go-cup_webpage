document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("slideshow-container");
    var iframe = document.createElement('iframe');
    iframe.src = "slideshow-main/simple-animated-slider-with-swiper-js-and-gsap-tweenmax/dist/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "0";
    container.appendChild(iframe);
});

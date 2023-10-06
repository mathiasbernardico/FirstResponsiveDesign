document.addEventListener("DOMContentLoaded", function() {
    new bootstrap.Carousel(document.querySelector("#myCarousel"), {
        interval: 1000,
        pause: false
    });
});
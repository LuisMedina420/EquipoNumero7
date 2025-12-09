

document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const images = track.querySelectorAll("img");

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });



    let index = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(${-index * 100}%)`;
    };

    carousel.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    carousel.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    /* Swipe táctil */
    let startX = 0;
    track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    track.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) index = (index + 1) % images.length;
        else if (endX - startX > 50) index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
});

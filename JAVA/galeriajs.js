const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");
const images = document.querySelectorAll(".gallery img");

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Abrir modal
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

function toggleMenu() {
    var navLinks = document.getElementById('nav-link');
    navLinks.classList.toggle('show');
}

function hideMenu() {
    var navLinks = document.getElementById('nav-link');
    navLinks.classList.remove('show');
}
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0; // Reset to the first slide
    }
    const offset = -currentIndex * 100; // Calculate offset
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);

      
let currentSlideIndex = 1;
const totalSlides = 3;

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(n) {
    showSlide(n);
}

function showSlide(n) {
    const container = document.querySelector('.carousel-container');
    const dots = document.querySelectorAll('.dot');
    
    if (n > totalSlides) {
        currentSlideIndex = 1;
    } else if (n < 1) {
        currentSlideIndex = totalSlides;
    } else {
        currentSlideIndex = n;
    }
    
    // Mover el contenedor
    const translateValue = (currentSlideIndex - 1) * -33.333;
    container.style.transform = `translateX(${translateValue}%)`;
    
    // Actualizar dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlideIndex - 1) {
            dot.classList.add('active');
        }
    });
}

// Autoplay
let autoplayInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Pausar autoplay cuando el mouse está sobre el carousel
document.querySelector('.custom-carousel').addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// Reanudar autoplay cuando el mouse sale del carousel
document.querySelector('.custom-carousel').addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
});

// Inicializar el primer slide
showSlide(1);
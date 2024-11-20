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
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        // Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

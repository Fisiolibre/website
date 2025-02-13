const booksContainer = document.querySelector('.books-container');
const books = Array.from(booksContainer.querySelectorAll('.book-card'));
const testimonialsContainer = document.getElementById('testimonial-container');
const testimonials = Array.from(testimonialsContainer.querySelectorAll('.slide'));
const prevTestimonialBtn = document.querySelector('.slider-btn.prev');
const nextTestimonialBtn = document.querySelector('.slider-btn.next');

const bookWidth = 220 + 16;
let bookInterval;
let currentTestimonialIndex = 0;

function moveBooks() {
    booksContainer.style.transition = 'transform 1s ease-in-out';
    booksContainer.style.transform = `translateX(-${bookWidth}px)`;

    setTimeout(() => {
        booksContainer.style.transition = 'none';
        booksContainer.appendChild(booksContainer.firstElementChild);
        booksContainer.style.transform = 'translateX(0)';
    }, 1000);
}

function updateTestimonialPosition() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active');
    });
    testimonials[currentTestimonialIndex].classList.add('active');
    testimonialsContainer.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
}

function moveTestimonials(direction) {
    currentTestimonialIndex += direction;

    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    
    testimonialsContainer.style.transition = 'transform 0.5s ease-in-out';
    updateTestimonialPosition();
}

function startCarousel() {
    bookInterval = setInterval(moveBooks, 2000);
}

document.addEventListener('DOMContentLoaded', startCarousel);
nextTestimonialBtn.addEventListener('click', () => moveTestimonials(1));
prevTestimonialBtn.addEventListener('click', () => moveTestimonials(-1));

// Inicializa el primer testimonio
updateTestimonialPosition();

//estylo responsive
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        document.body.classList.toggle("menu-open"); // Agrega clase al body
    });
});

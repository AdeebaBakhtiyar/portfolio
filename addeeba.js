// JavaScript for carousel functionality
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let slideInterval;

// Function to update the slide position
function updateSlide() {
    const slideWidth = document.querySelector('.project-item').offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Slide to the previous project
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = carousel.children.length - 1;
    }
    updateSlide();
});

// Slide to the next project
nextBtn.addEventListener('click', () => {
    if (currentSlide < carousel.children.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlide();
});

// Auto slide function
function startSlide() {
    slideInterval = setInterval(() => {
        nextBtn.click();
    }, 3000);
}

// Stop slide on hover
carousel.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseout', () => {
    startSlide();
});

// Start auto slide on page load
startSlide();

// Slide navigation logic
// site_interactions.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slides-container .slide'); // Selecting slide instead of img
const totalSlides = slides.length;
let slideInterval;

function updateSlidePosition() {
    const sliderWidth = document.querySelector('.news-slider').offsetWidth;
    document.querySelector('.slides-container').style.transform = `translateX(${-currentSlide * sliderWidth}px)`;
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function startSlideShow() {
    slideInterval = setInterval(showNextSlide, 5000); // 5s to change pages
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.querySelector('.prev').addEventListener('click', () => {
    stopSlideShow();
    showPrevSlide();
    startSlideShow();
});

document.querySelector('.next').addEventListener('click', () => {
    stopSlideShow();
    showNextSlide();
    startSlideShow();
});

// Initialize slide position on load and adjust when window is resized
window.onload = () => {
    updateSlidePosition();
    startSlideShow();
};
window.onresize = updateSlidePosition;

// Registration form validation
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!');
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('All fields are required.');
        return;
    }

    alert('Login successful!');
});


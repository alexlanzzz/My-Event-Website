<<<<<<< Updated upstream
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
    slideInterval = setInterval(showNextSlide, 5000); // 自动切换间隔时间为5秒
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

=======
<<<<<<< HEAD
// Registration form validation and submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('formFeedback');

    // Basic validation
    if (username === '' || email === '' || password === '') {
        feedback.textContent = 'All fields are required.';
        return;
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    // Password length validation
    if (password.length < 6) {
        feedback.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // If validation passes, clear feedback and proceed with form submission (e.g., AJAX request)
    feedback.textContent = '';

    // Mock submission
    console.log('Registration successful:', { username, email, password });
    feedback.textContent = 'Registration successful!';
    feedback.style.color = 'green';
});

// Login form validation and submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('loginFeedback');

    // Basic validation
    if (email === '' || password === '') {
        feedback.textContent = 'All fields are required.';
        return;
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    // Password length validation
    if (password.length < 6) {
        feedback.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // If validation passes, clear feedback and proceed with form submission (e.g., AJAX request)
    feedback.textContent = '';

    // Mock submission
    console.log('Login successful:', { email, password });
    feedback.textContent = 'Login successful!';
    feedback.style.color = 'green';
});

// Initialize slide position on load
window.onload = updateSlidePosition;
window.onresize = updateSlidePosition; // Adjust slide position when window is resized

function updateSlidePosition() {
    const sliderWidth = document.querySelector('.news-slider').offsetWidth;
    document.querySelector('.slides-container').style.transform = `translateX(${-currentSlide * sliderWidth}px)`;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides-container img');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
});
=======
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
    slideInterval = setInterval(showNextSlide, 5000); // 自动切换间隔时间为5秒
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

>>>>>>> 2ec6fc85048dda301df08974c63e838cfd363def
>>>>>>> Stashed changes

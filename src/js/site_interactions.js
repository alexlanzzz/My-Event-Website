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

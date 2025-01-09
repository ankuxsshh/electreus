// Ensure the navbar opens and closes smoothly
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

// Toggle class to show or hide the navbar collapse menu on button click
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Add scrolling effect for navbar color change
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

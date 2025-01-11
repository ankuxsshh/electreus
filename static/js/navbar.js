// Select DOM elements
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('#navbarNav')

// Function to toggle the navbar menu
function toggleNavbar() {
    navbarCollapse.classList.toggle('show')
}

// Function to close the navbar menu when clicking outside
function closeNavbarOnClickOutside(event) {
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show')
    }
}

// Add event listeners
navbarToggler.addEventListener('click', toggleNavbar)
document.addEventListener('click', closeNavbarOnClickOutside)

// Add scrolling effect for navbar color change
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})
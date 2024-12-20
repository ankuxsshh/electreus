// Script for changing navbar style on scroll
window.onscroll = function() { changeNavbarOnScroll() };

function changeNavbarOnScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {  // Adjust this value for when the navbar changes
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

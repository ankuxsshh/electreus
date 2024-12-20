// JavaScript for Scroll Fade-up Effect
document.addEventListener("DOMContentLoaded", function() {
    const fadeUpElements = document.querySelectorAll('.fade-up-section, .fade-up-item');
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      fadeUpElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop <= windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    }
  
    // Run checkVisibility when scrolling
    window.addEventListener('scroll', checkVisibility);
  
    // Run on page load to ensure any element that is already in view gets the effect
    checkVisibility();
  });
  
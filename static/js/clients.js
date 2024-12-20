document.addEventListener("DOMContentLoaded", function () {
    const clientCards = document.querySelectorAll('.client-card');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        clientCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight * 0.8) {
                card.classList.add('visible');
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});

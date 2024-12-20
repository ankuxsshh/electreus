document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.experience-section');
    const cards = document.querySelectorAll('.custom-card');

    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.5) {
            section.classList.add('active');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('active');
                }, index * 100); // Delay animation for each card
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const exclusiveDealsSection = document.getElementById("exclusiveDeals");

    const onScroll = () => {
        const sectionPosition = exclusiveDealsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (sectionPosition.top < windowHeight * 0.7) {
            exclusiveDealsSection.classList.add("visible");
            window.removeEventListener("scroll", onScroll);
        }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on load to handle if already in view
});


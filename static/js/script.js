document.querySelectorAll('.process-card').forEach(card => {
    card.addEventListener('click', () => {
      const cardIndex = parseInt(card.getAttribute('data-card-index')); // Ensure the index is treated as an integer
      showOverlay(cardIndex); // Pass the integer index to the showOverlay function
    });
  });
  
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const overlayText = document.getElementById('overlay-text');
  
  function showOverlay(cardIndex) {
    const images = [
      'https://img-c.udemycdn.com/course/750x422/3312516_73d4_3.jpg',
      'https://images.wondershare.com/edrawmax/article2023/wiring-diagrams/electrical-wiring-diagram-basics.jpg',
      'https://www.thelocalelectrician.com.au/wordpress/wp-content/uploads/Different-Types-Of-Electrical-Testing.png'
    ];
  
    const texts = [
      'Since there is a lot of machinery that operates on electricity and there is no electricity connection at site, a temporary electric pole is installed with the approval of KSEB/Electrical Inspectorate of Kerala. Before the slab is finalized with concrete, electrical conduits are laid over the bottom steel rods of roof slab, mainly ceiling fan points and electrical circuits.',
      'Calculating the total connected load of a building is crucial to ensure the electrical system is properly designed. This includes sizing transformers, generators, panel boards, and switchgear to handle peak loads safely. A client-based site meeting will help determine the optimal placement of power outlets and ensure correct wiring for circuits.',
      'At the final stage of the project, all electrical connections are checked including testing and commissioning of transformer / generator / panel board / VDB / DB, termination of switchboards, installation of fans, light fixtures, and getting energization sanction & approval from Electrical Inspectorate / KSEB.'
    ];
  
    // Adjust for zero-indexed array in JavaScript
    overlayImage.style.backgroundImage = `url(${images[cardIndex - 1]})`; // Adjusted for 1-based index in HTML
    overlayText.textContent = texts[cardIndex - 1]; // Adjusted for 1-based index in HTML
    overlay.style.display = 'flex';
  }
  
  function hideOverlay() {
    overlay.style.display = 'none';
  }
  
  // Optionally add a close event listener if you want to close the overlay when clicked outside
  overlay.addEventListener('click', hideOverlay);
  
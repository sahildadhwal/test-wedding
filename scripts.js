document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Map initialization (previous code remains the same)
    const address = "730 5th Street, Fairfield, CA";
    var map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
        dragging: false, // Disable map dragging
        touchZoom: false, // Disable touch zoom
        scrollWheelZoom: false // Disable scroll wheel zoom
    });
    
    // Rest of the map code remains the same
});
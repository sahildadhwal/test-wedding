document.addEventListener('DOMContentLoaded', function() {
    // Address to geocode
    const address = "730 5th Street, Fairfield, CA";

    // Create a Leaflet map instance without zoom control
    var map = L.map('map', {
        zoomControl: false,  // This hides the zoom controls
        attributionControl: false // Disable attribution control
    });
 
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Geocode the address to get latitude and longitude
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data[0]) {
                const lat = data[0].lat;
                const lon = data[0].lon;

                // Update map view to the geocoded location (center map on the pin)
                map.setView([lat, lon], 13); // 13 is the zoom level

                // Add a marker at the geocoded location and set it as the center
                L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>Wedding Location</b><br>${address}`)
                    .openPopup();
            } else {
                console.error("Address not found or geocoding error.");
            }
        })
        .catch(error => {
            console.error("Error with the geocoding request:", error);
        });
});

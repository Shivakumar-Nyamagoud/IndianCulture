// Create map instance
const map = L.map('map').setView([22.9734, 78.6569], 5); // Center of India

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);


// Define the function to handle highlighting states
function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 0.7
    });
}

// Define the function to reset highlight when mouse is out
function resetHighlight(e) {
    geoJsonLayer.resetStyle(e.target);
}

// Define what happens when each state is clicked
function onEachFeature(feature, layer) {
    // Add tooltips for state names
    layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: "center",
        className: "leaflet-tooltip"
    });

    // Handle click event for each state
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: function() {
            // Redirect to the corresponding state's HTML page
            const redirectUrl = feature.properties.redirect;
            if (redirectUrl) {
                window.location.href = redirectUrl;
            } else {
                console.error("No redirect URL found for state:", feature.properties.name);
            }
        }
    });
}

// Fetch the map.geojson file and add it to the map
fetch('map.geojson')
    .then(response => response.json())
    .then(data => {
        // Add the GeoJSON layer with state polygons
        const geoJsonLayer = L.geoJson(data, {
            onEachFeature: onEachFeature
        }).addTo(map);
    })
    .catch(error => console.error("Error loading map.geojson:", error));

// Learning Hub Locations Data
const learningHubs = [
    {
        id: 0,
        name: "Barangay Poblacion Hub",
        lat: 14.5995,
        lng: 120.9842,
        address: "123 Main Street, Poblacion, Manila",
        phone: "+63 123 456 7890",
        email: "poblacion@blhub.ph",
        hours: "Monday - Friday: 8:00 AM - 6:00 PM",
        facilities: ["Computer Lab", "WiFi Access", "Digital Library", "Training Rooms"],
        description: "Our main hub in Poblacion offers comprehensive digital learning facilities.",
        images: [
            "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=Computer+Lab",
            "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Digital+Library",
            "https://via.placeholder.com/400x250/fbbf24/1e3a8a?text=Training+Room",
            "https://via.placeholder.com/400x250/10b981/ffffff?text=Study+Area"
        ]
    },
    {
        id: 1,
        name: "Barangay San Roque Hub",
        lat: 14.6091,
        lng: 120.9962,
        address: "456 San Roque Street, San Roque, Manila",
        phone: "+63 123 456 7891",
        email: "sanroque@blhub.ph",
        hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
        facilities: ["Computer Lab", "WiFi Access", "Meeting Rooms"],
        description: "Community-focused hub serving the San Roque area with modern facilities.",
        images: [
            "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Computer+Lab",
            "https://via.placeholder.com/400x250/ef4444/ffffff?text=Meeting+Room",
            "https://via.placeholder.com/400x250/06b6d4/ffffff?text=WiFi+Area"
        ]
    },
    {
        id: 2,
        name: "Barangay Maligaya Hub",
        lat: 14.5935,
        lng: 120.9745,
        address: "789 Maligaya Avenue, Maligaya, Manila",
        phone: "+63 123 456 7892",
        email: "maligaya@blhub.ph",
        hours: "Tuesday - Sunday: 10:00 AM - 7:00 PM",
        facilities: ["Computer Lab", "WiFi Access", "Digital Library", "Study Areas"],
        description: "Modern learning hub with extended hours for working professionals.",
        images: [
            "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Study+Areas",
            "https://via.placeholder.com/400x250/84cc16/ffffff?text=Computer+Lab",
            "https://via.placeholder.com/400x250/ec4899/ffffff?text=Digital+Library",
            "https://via.placeholder.com/400x250/6366f1/ffffff?text=Work+Space",
            "https://via.placeholder.com/400x250/14b8a6/ffffff?text=WiFi+Zone"
        ]
    },
    {
        id: 3,
        name: "Barangay Bagong Silang Hub",
        lat: 14.6125,
        lng: 120.9725,
        address: "321 Bagong Silang Road, Bagong Silang, Manila",
        phone: "+63 123 456 7893",
        email: "bagongsilang@blhub.ph",
        hours: "Monday - Friday: 7:00 AM - 8:00 PM",
        facilities: ["Computer Lab", "WiFi Access", "Children's Area", "Senior Citizen Corner"],
        description: "Family-friendly hub with specialized areas for different age groups.",
        images: [
            "https://via.placeholder.com/400x250/f97316/ffffff?text=Children's+Area",
            "https://via.placeholder.com/400x250/a855f7/ffffff?text=Senior+Corner"
        ]
    },
    {
        id: 4,
        name: "Barangay Central Hub",
        lat: 14.6042,
        lng: 120.9822,
        address: "654 Central Plaza, Central District, Manila",
        phone: "+63 123 456 7894",
        email: "central@blhub.ph",
        hours: "24/7 Access Available",
        facilities: ["Computer Lab", "WiFi Access", "Digital Library", "Training Rooms", "24/7 Study Area"],
        description: "Our flagship hub with 24/7 access and premium facilities.",
        images: [
            "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=24/7+Study+Area"
        ]
    }
];

// Map and tracking variables
let markers = [];
let userLocationMarker;
let userLocation = null;
let watchId = null;
let routeControl = null;

// Custom icons
const hubIcon = L.divIcon({
    className: 'custom-hub-icon',
    html: '<div class="hub-marker"><i class="fas fa-graduation-cap"></i></div>',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

const userIcon = L.divIcon({
    className: 'custom-user-icon',
    html: '<div class="user-marker"><i class="fas fa-user"></i></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    setupEventListeners();
    startRealTimeTracking();
    addCustomStyles();
});

// Initialize the map
function initializeMap() {
    // Create map centered on Manila
    map = L.map('map', {
        center: [14.6042, 120.9822],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Add all learning hub markers
    addHubMarkers();

    // Add map animations
    map.on('zoomstart', function() {
        map.getContainer().classList.add('zoom-animation');
    });

    map.on('zoomend', function() {
        setTimeout(() => {
            map.getContainer().classList.remove('zoom-animation');
        }, 300);
    });
}

// Add learning hub markers to the map
function addHubMarkers() {
    learningHubs.forEach(hub => {
        const marker = L.marker([hub.lat, hub.lng], { icon: hubIcon })
            .addTo(map)
            .bindPopup(createPopupContent(hub))
            .on('click', function() {
                selectHub(hub.id);
                updateLocationDetails(hub);
                animateMarker(marker);
            });

        markers.push({ id: hub.id, marker: marker });
    });
}

// Create popup content for markers
function createPopupContent(hub) {
    return `
        <div class="popup-content">
            <h4>${hub.name}</h4>
            <p><i class="fas fa-map-marker-alt"></i> ${hub.address}</p>
            <p><i class="fas fa-phone"></i> ${hub.phone}</p>
            <p><i class="fas fa-clock"></i> ${hub.hours}</p>
            <button onclick="getDirections(${hub.id})" class="popup-btn">
                <i class="fas fa-route"></i> Get Directions
            </button>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Hub selection dropdown
    const hubSelect = document.getElementById('hub-select');
    if (hubSelect) {
        hubSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue === 'all') {
                showAllHubs();
            } else {
                const hubId = parseInt(selectedValue);
                focusOnHub(hubId);
                updateLocationDetails(learningHubs[hubId]);
            }
        });
    }

    // Location button
    const locateBtn = document.getElementById('locate-btn');
    if (locateBtn) {
        locateBtn.addEventListener('click', locateUser);
    }

    // Directions button
    const directionsBtn = document.getElementById('directions-btn');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function() {
            const hubSelect = document.getElementById('hub-select');
            const selectedValue = hubSelect.value;
            
            if (selectedValue !== 'all') {
                getDirections(parseInt(selectedValue));
            } else {
                showMessage('Please select a specific hub first.', 'error');
            }
        });
    }
}

// Start real-time location tracking
function startRealTimeTracking() {
    if ("geolocation" in navigator) {
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 30000 // Cache position for 30 seconds
        };

        watchId = navigator.geolocation.watchPosition(
            updateUserLocation,
            handleLocationError,
            options
        );
    } else {
        showMessage('Geolocation is not supported by this browser.', 'error');
    }
}

// Update user location with real-time tracking
function updateUserLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    userLocation = { lat, lng, accuracy };

    // Remove existing user marker
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
    }

    // Add new user marker with animation
    userLocationMarker = L.marker([lat, lng], { icon: userIcon })
        .addTo(map)
        .bindPopup(`
            <div class="popup-content">
                <h4><i class="fas fa-location-arrow"></i> Your Location</h4>
                <p>Accuracy: ±${Math.round(accuracy)} meters</p>
                <p>Last updated: ${new Date().toLocaleTimeString()}</p>
            </div>
        `);

    // Add accuracy circle
    const accuracyCircle = L.circle([lat, lng], {
        radius: accuracy,
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        weight: 2
    }).addTo(map);

    // Store reference to remove later
    if (userLocationMarker.accuracyCircle) {
        map.removeLayer(userLocationMarker.accuracyCircle);
    }
    userLocationMarker.accuracyCircle = accuracyCircle;

    // Animate marker
    setTimeout(() => {
        animateMarker(userLocationMarker);
    }, 100);

    console.log(`Location updated: ${lat}, ${lng} (±${accuracy}m)`);
}

// Handle location errors
function handleLocationError(error) {
    let message = '';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = "Location access denied by user.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            message = "Location request timed out.";
            break;
        default:
            message = "An unknown error occurred.";
            break;
    }
    showMessage(message, 'error');
}

// Locate user and center map
function locateUser() {
    const locateBtn = document.getElementById('locate-btn');
    const originalHTML = locateBtn.innerHTML;
    
    locateBtn.innerHTML = '<div class="loading"></div> Locating...';
    locateBtn.disabled = true;

    if (userLocation) {
        map.setView([userLocation.lat, userLocation.lng], 16);
        animateMarker(userLocationMarker);
        showMessage('Centered on your location!', 'success');
        
        setTimeout(() => {
            locateBtn.innerHTML = originalHTML;
            locateBtn.disabled = false;
        }, 1000);
    } else {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                map.setView([lat, lng], 16);
                updateUserLocation(position);
                showMessage('Location found!', 'success');
                
                locateBtn.innerHTML = originalHTML;
                locateBtn.disabled = false;
            },
            function(error) {
                handleLocationError(error);
                locateBtn.innerHTML = originalHTML;
                locateBtn.disabled = false;
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }
}

// Focus on a specific hub
function focusOnHub(hubId) {
    const hub = learningHubs[hubId];
    if (hub) {
        map.setView([hub.lat, hub.lng], 16);
        
        // Find and animate the marker
        const markerObj = markers.find(m => m.id === hubId);
        if (markerObj) {
            setTimeout(() => {
                markerObj.marker.openPopup();
                animateMarker(markerObj.marker);
            }, 500);
        }
    }
}

// Show all hubs
function showAllHubs() {
    // Create bounds to include all hubs
    const group = new L.featureGroup(markers.map(m => m.marker));
    map.fitBounds(group.getBounds().pad(0.1));
    
    // Update location details to show general info
    updateLocationDetails(null);
}

// Select hub in dropdown
function selectHub(hubId) {
    const hubSelect = document.getElementById('hub-select');
    if (hubSelect) {
        hubSelect.value = hubId.toString();
    }
}

function updateLocationDetails(hub) {
    const locationDetails = document.getElementById('location-details');

    if (!hub) {
        locationDetails.innerHTML = `
            <h3><i class="fas fa-map-marked-alt"></i> All Learning Hubs</h3>
            <p>Select a hub from the dropdown or click on a marker to view details.</p>
            <div class="stats">
                <div class="stat-item">
                    <i class="fas fa-building"></i>
                    <span>${learningHubs.length} Total Hubs</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-users"></i>
                    <span>Serving Multiple Communities</span>
                </div>
            </div>
        `;
        return;
    }

    const distance = userLocation ? 
        calculateDistance(userLocation.lat, userLocation.lng, hub.lat, hub.lng) : null;

    // Create slideshow HTML
    const slideshowHtml = hub.images && hub.images.length > 0 ? `
        <div class="hub-slideshow">
            <div class="slideshow-container">
                ${hub.images.map((image, index) => `
                    <div class="slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                        <img src="${image}" alt="${hub.name} - Image ${index + 1}">
                    </div>
                `).join('')}
                ${hub.images.length > 1 ? `
                    <button class="slide-btn prev" onclick="changeSlide(-1)">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slide-btn next" onclick="changeSlide(1)">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                ` : ''}
            </div>
            ${hub.images.length > 1 ? `
                <div class="slide-indicators">
                    ${hub.images.map((_, index) => `
                        <span class="indicator ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index + 1})" data-slide="${index}"></span>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    ` : '';

    locationDetails.innerHTML = `
        <h3><i class="fas fa-graduation-cap"></i> ${hub.name}</h3>
        ${slideshowHtml}
        <div class="detail-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${hub.address}</span>
        </div>
        <div class="detail-item">
            <i class="fas fa-phone"></i>
            <span>${hub.phone}</span>
        </div>
        <div class="detail-item">
            <i class="fas fa-envelope"></i>
            <span>${hub.email}</span>
        </div>
        <div class="detail-item">
            <i class="fas fa-clock"></i>
            <span>${hub.hours}</span>
        </div>
        ${distance ? `
        <div class="detail-item">
            <i class="fas fa-route"></i>
            <span>${distance.toFixed(1)} km away</span>
        </div>
        ` : ''}
        <div class="facilities">
            <h4><i class="fas fa-cogs"></i> Facilities</h4>
            <div class="facility-list">
                ${hub.facilities.map(facility => 
                    `<span class="facility-tag"><i class="fas fa-check"></i> ${facility}</span>`
                ).join('')}
            </div>
        </div>
        <p class="description">${hub.description}</p>
        <div class="actions">
            <button onclick="getDirections(${hub.id})" class="detail-btn primary">
                <i class="fas fa-route"></i> Get Directions
            </button>
            <button onclick="focusOnHub(${hub.id})" class="detail-btn secondary">
                <i class="fas fa-crosshairs"></i> Center Map
            </button>
        </div>
    `;

    // Initialize slideshow
    initSlideshow();
}

// Get directions to a hub
function getDirections(hubId) {
    const hub = learningHubs[hubId];
    
    if (!userLocation) {
        showMessage('Please allow location access to get directions.', 'error');
        locateUser();
        return;
    }

    // Remove existing route
    if (routeControl) {
        map.removeControl(routeControl);
    }

    // Add routing control (requires leaflet-routing-machine)
    // For now, we'll open in external maps app
    const destination = `${hub.lat},${hub.lng}`;
    const origin = `${userLocation.lat},${userLocation.lng}`;
    
    // Try different map apps
    const mapsUrls = [
        `https://www.google.com/maps/dir/${origin}/${destination}`,
        `https://maps.apple.com/?saddr=${origin}&daddr=${destination}`,
        `https://waze.com/ul?ll=${destination}&navigate=yes`
    ];
    
    // Open in new tab
    window.open(mapsUrls[0], '_blank');
    
    showMessage(`Opening directions to ${hub.name}...`, 'success');
}

// Calculate distance between two points
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Animate marker
function animateMarker(marker) {
    const element = marker.getElement();
    if (element) {
        element.classList.add('marker-bounce');
        setTimeout(() => {
            element.classList.remove('marker-bounce');
        }, 600);
    }
}
     document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        document.addEventListener('keydown', function (e) {
            // Disable F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Disable Ctrl+Shift+I / Ctrl+U / Ctrl+S / Ctrl+C
            if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
                (e.ctrlKey && ['u', 's', 'c'].includes(e.key.toLowerCase()))) {
                e.preventDefault();
            }
        });
        document.addEventListener('copy', (e) => e.preventDefault());
        document.addEventListener('cut', (e) => e.preventDefault());
        document.addEventListener('paste', (e) => e.preventDefault());
// Show success/error messages
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    // Insert after maps controls
    const mapsControls = document.querySelector('.maps-controls');
    mapsControls.parentNode.insertBefore(messageDiv, mapsControls.nextSibling);

    // Auto remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add custom styles for markers
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-hub-icon .hub-marker {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            border: 3px solid white;
            animation: pulse 2s ease-in-out infinite;
        }

        .custom-hub-icon .hub-marker i {
            transform: rotate(45deg);
        }

        .custom-user-icon .user-marker {
            width: 30px;
            height: 30px;
            background: linear-gradient(135deg, #10b981, #34d399);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            border: 2px solid white;
            animation: pulse 1.5s ease-in-out infinite;
        }

        .marker-bounce {
            animation: bounce 0.6s ease-in-out;
        }

        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
        }

        .popup-content {
            font-family: 'Roboto', sans-serif;
            min-width: 200px;
        }

        .popup-content h4 {
            color: #1e3a8a;
            margin-bottom: 8px;
            font-size: 16px;
        }

        .popup-content p {
            margin: 4px 0;
            font-size: 14px;
            color: #64748b;
        }

        .popup-content i {
            color: #3b82f6;
            width: 16px;
            margin-right: 6px;
        }

        .popup-btn {
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 8px;
            transition: all 0.3s ease;
        }

        .popup-btn:hover {
            background: #3b82f6;
            transform: translateY(-2px);
        }

        .facility-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin-top: 8px;
        }

        .facility-tag {
            background: #f1f5f9;
            color: #334155;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .facility-tag i {
            color: #10b981;
            font-size: 10px;
        }

        .actions {
            display: flex;
            gap: 8px;
            margin-top: 16px;
        }

        .detail-btn {
            flex: 1;
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.3s ease;
        }

        .detail-btn.primary {
            background: #1e3a8a;
            color: white;
        }

        .detail-btn.primary:hover {
            background: #3b82f6;
            transform: translateY(-2px);
        }

        .detail-btn.secondary {
            background: #f1f5f9;
            color: #334155;
            border: 1px solid #e2e8f0;
        }

        .detail-btn.secondary:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }

        .stats {
            margin: 16px 0;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            padding: 8px;
            background: #f8fafc;
            border-radius: 6px;
        }

        .stat-item i {
            color: #3b82f6;
            width: 20px;
        }

        .zoom-animation {
            transition: all 0.3s ease;
        }

        .description {
            font-style: italic;
            color: #64748b;
            margin: 12px 0;
            padding: 8px;
            background: #f8fafc;
            border-radius: 6px;
            border-left: 4px solid #3b82f6;
        }

        /* Styles for the slideshow */
        .hub-slideshow {
            margin-bottom: 16px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slideshow-container {
            position: relative;
        }

        .slide {
            display: none;
            animation: fade 0.8s ease-in-out;
        }

        .slide.active {
            display: block;
        }

        .slide img {
            width: 100%;
            height: auto;
            display: block; /* Ensure no extra space below image */
        }

        /* Fade animation */
        @keyframes fade {
            from {opacity: .4}
            to {opacity: 1}
        }

        /* Navigation buttons */
        .slide-btn {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
            background-color: rgba(0, 0, 0, 0.4);
            border: none;
        }

        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }

        .slide-btn:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        /* Slide indicators */
        .slide-indicators {
            text-align: center;
            padding: 10px;
            background: rgba(0, 0, 0, 0.1);
        }

        .indicator {
            cursor: pointer;
            height: 12px;
            width: 12px;
            margin: 0 4px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .indicator.active {
            background-color: #3b82f6;
        }

        /* Adjust styles for smaller screens */
        @media (max-width: 600px) {
            .slide-btn {
                padding: 12px;
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Cleanup function
window.addEventListener('beforeunload', function() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
});

// Slideshow functions
let slideIndex = 0;

function initSlideshow() {
    showSlides(slideIndex);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");

    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }

    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
}

// Export functions for global access
window.getDirections = getDirections;
window.focusOnHub = focusOnHub;
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;
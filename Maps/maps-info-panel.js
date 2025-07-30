
// Information Panel Management
class InfoPanel {
    constructor() {
        this.defaultContent = document.getElementById('defaultContent');
        this.hubDetails = document.getElementById('hubDetails');
        this.currentHubData = null;
        this.userLocation = null;
        this.init();
    }

    init() {
        // Watch for user location updates
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    if (this.currentHubData) {
                        this.updateDistance();
                    }
                },
                (error) => console.log('Geolocation error:', error),
                { enableHighAccuracy: true, maximumAge: 30000 }
            );
        }
    }

    showHubInfo(hubData) {
        this.currentHubData = hubData;
        this.populateHubDetails(hubData);
        this.showDetails();
    }

    showDefault() {
        this.currentHubData = null;
        this.hideDetails();
    }

    populateHubDetails(data) {
        // Extract data from the BLH locations
        const hubInfo = this.extractHubInfo(data);
        
        document.getElementById('hubName').textContent = hubInfo.name;
        document.getElementById('hubAddress').textContent = hubInfo.address;
        document.getElementById('hubAdmin').textContent = hubInfo.admin;
        document.getElementById('hubEmail').textContent = hubInfo.email;
        document.getElementById('hubHours').textContent = hubInfo.hours;
        
        this.updateDistance();
        this.populateFacilities(hubInfo.facilities);
        
        // Update description if available
        if (hubInfo.description) {
            document.getElementById('hubDescription').textContent = hubInfo.description;
        }
    }

    extractHubInfo(data) {
        // Map the marker data to readable information
        const hubMappings = {
            'BLH Bagong Silang': {
                name: 'BLH Bagong Silang',
                address: 'Bagong Silang, Balanga City, Bataan',
                admin: 'Roldan Jay A. Santos',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access', , 'Reading Corner'],
                internetSpeed: '200MBPS',
                units: '19 Units',
                readingCorner: false,
                coords: [14.67429, 120.51096]
            },
            'BLH Bagumbayan': {
                name: 'BLH Bagumbayan',
                address: 'Bagumbayan, Balanga City, Bataan',
                admin: 'Raphael Louise Leaño',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '200MBPS',
                units: '18 Units',
                readingCorner: false,
                coords: [14.67948, 120.54523]
            },
            'BLH Cabog-Cabog': {
                name: 'BLH Cabog-Cabog',
                address: 'Cabog-Cabog, Balanga City, Bataan',
                admin: 'Michelle Del Rosario Soriano',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '50MBPS',
                units: '15 Units',
                readingCorner: false,
                coords: [14.62925, 120.4685]
            },
            'BLH Camacho': {
                name: 'BLH Camacho',
                address: 'Camacho, Balanga City, Bataan',
                admin: 'Isaac P. Oria',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '8 Units',
                readingCorner: false,
                coords: [14.68406, 120.52203]
            },
            'BLH Cataning': {
                name: 'BLH Cataning',
                address: 'Cataning, Balanga City, Bataan',
                admin: 'Mark Joshua Dela Rosa',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '12 Units',
                readingCorner: false,
                coords: [14.67476, 120.54051]
            },
            'BLH Central': {
                name: 'BLH Central',
                address: 'Central, Balanga City, Bataan',
                admin: 'Catherine Fabrez',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '200MBPS',
                units: '18 Units',
                readingCorner: false,
                coords: [14.66362, 120.53878]
            },
            'BLH COB Housing': {
                name: 'BLH COB Housing',
                address: 'COB Housing, Balanga City, Bataan',
                admin: 'Gerard Federick Ragel',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '200MBPS',
                units: '13 Units',
                readingCorner: false,
                coords: [14.666249425991182, 120.52085527551395]
            },
            'BLH Cupang North': {
                name: 'BLH Cupang North',
                address: 'Cupang North, Balanga City, Bataan',
                admin: 'Julius Richard Molo',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access', 'Reading Corner'],
                internetSpeed: '300MBPS',
                units: '15 Units',
                readingCorner: true,
                coords: [14.67309911069562, 120.54270247643852]
            },
            'BLH Cupang Proper': {
                name: 'BLH Cupang Proper',
                address: 'Cupang Proper, Balanga City, Bataan',
                admin: 'Kevin Hernando',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '300MBPS',
                units: '10 Units',
                readingCorner: false,
                coords: [14.66744, 120.5437]
            },
            'BLH Cupang West': {
                name: 'BLH Cupang West',
                address: 'Cupang West, Balanga City, Bataan',
                admin: 'Juan Nicholas De Jesus',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '8 Units',
                readingCorner: false,
                coords: [14.67106, 120.54333]
            },
            'BLH Dangcol': {
                name: 'BLH Dangcol',
                address: 'Dangcol, Balanga City, Bataan',
                admin: 'Donell Jorda',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '15 Units',
                readingCorner: false,
                coords: [14.67785, 120.44728]
            },
            'BLH DFS': {
                name: 'BLH DFS',
                address: 'DFS, Balanga City, Bataan',
                admin: 'Jethro Wayne Bustamante',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '12 Units',
                readingCorner: false,
                coords: [14.68351, 120.54339]
            },
            'BLH Ibayo': {
                name: 'BLH Ibayo',
                address: 'Ibayo, Balanga City, Bataan',
                admin: 'Erljon D. Venzon',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '8 Units',
                readingCorner: false,
                coords: [14.68055, 120.53699]
            },
            'BLH Malabia': {
                name: 'BLH Malabia',
                address: 'Malabia, Balanga City, Bataan',
                admin: 'Mark Anthony Cayanan',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '30 Units',
                readingCorner: false,
                coords: [14.68382, 120.53882]
            },
            'BLH Pto. Rivas Lote': {
                name: 'BLH Pto. Rivas Lote',
                address: 'Pto. Rivas Lote, Balanga City, Bataan',
                admin: 'Patrick Lance Venegas',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '12 Units',
                readingCorner: false,
                coords: [14.68825, 120.55035]
            },
            'BLH Pto Rivas Ibaba': {
                name: 'BLH Pto Rivas Ibaba',
                address: 'Pto Rivas Ibaba, Balanga City, Bataan',
                admin: 'N/A',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '18 Units',
                readingCorner: false,
                coords: [14.69246, 120.55751]
            },
            'BLH Pto Rivas Itaas': {
                name: 'BLH Pto Rivas Itaas',
                address: 'Pto Rivas Itaas, Balanga City, Bataan',
                admin: 'Kristine Garcia',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access', 'Reading Corner'],
                internetSpeed: '100MBPS',
                units: '18 Units',
                readingCorner: true,
                coords: [14.691108490104202, 120.55664853687337]
            },
            'BLH San Jose': {
                name: 'BLH San Jose',
                address: 'San Jose, Balanga City, Bataan',
                admin: 'Richelle Vicente',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access', 'Reading Corner'],
                internetSpeed: '100MBPS',
                units: '30 Units',
                readingCorner: true,
                coords: [14.675921982516138, 120.5362406624673]
            },
            'BLH Talisay': {
                name: 'BLH Talisay',
                address: 'Talisay, Balanga City, Bataan',
                admin: 'Christian Joshua P. Mendigoria',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access', 'Reading Corner'],
                internetSpeed: '100MBPS',
                units: '15 Units',
                readingCorner: true,
                coords: [14.682999667459317, 120.54742498800228]
            },
            'BLH Tenejero': {
                name: 'BLH Tenejero',
                address: 'Tenejero, Balanga City, Bataan',
                admin: 'Joeco Malibiran',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '15 Units',
                readingCorner: false,
                coords: [14.67945, 120.53453]
            },
            'BLH Tortugas': {
                name: 'BLH Tortugas',
                address: 'Tortugas, Balanga City, Bataan',
                admin: 'Rogee Adrados Cruz',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '15 Units',
                readingCorner: false,
                coords: [14.69207, 120.56001]
            },
            'BLH Tuyo': {
                name: 'BLH Tuyo',
                address: 'Tuyo, Balanga City, Bataan',
                admin: 'Jailo Pineda',
                email: 'TBA',
                phone: 'TBA',
                hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
                facilities: ['Computer Lab', 'Printer Access'],
                internetSpeed: '100MBPS',
                units: '30 Units',
                readingCorner: false,
                coords: [14.69474, 120.53785]
            }
        };

        // Find matching hub data based on the name or coordinates
        for (const [key, hub] of Object.entries(hubMappings)) {
            if (data.name && data.name.includes(key.replace('BLH ', ''))) {
                return hub;
            }
            if (data.coords && hub.coords && 
                Math.abs(data.coords[0] - hub.coords[0]) < 0.001 && 
                Math.abs(data.coords[1] - hub.coords[1]) < 0.001) {
                return hub;
            }
        }

        // Default fallback
        return {
            name: data.name || 'Barangay Learning Hub',
            address: 'City of Bacoor, Cavite',
            admin: 'BLH Administrator',
            email: 'cobbarangaylearninghub@gmail.com',
            phone: '0960-568-3438',
            hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
            facilities: ['Computer Lab', 'Printer Access'],
            internetSpeed: '100MBPS',
            units: 'Multiple Units',
            readingCorner: false,
            coords: data.coords || [14.6797, 120.5435]
        };
    }

    updateDistance() {
        if (this.userLocation && this.currentHubData) {
            const distance = this.calculateDistance(
                this.userLocation.lat,
                this.userLocation.lng,
                this.currentHubData.coords[0],
                this.currentHubData.coords[1]
            );
            document.getElementById('hubDistance').textContent = `${distance.toFixed(2)} km away`;
        } else {
            document.getElementById('hubDistance').textContent = 'Location access needed';
        }
    }

    calculateDistance(lat1, lng1, lat2, lng2) {
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

    populateFacilities(facilities) {
        const facilitiesList = document.getElementById('facilitiesList');
        facilitiesList.innerHTML = '';
        
        facilities.forEach(facility => {
            const tag = document.createElement('div');
            tag.className = 'facility-tag';
            tag.innerHTML = `<i class="fas fa-check"></i> ${facility}`;
            facilitiesList.appendChild(tag);
        });
    }

    showDetails() {
        this.defaultContent.style.display = 'none';
        this.hubDetails.classList.add('active');
    }

    hideDetails() {
        this.defaultContent.style.display = 'block';
        this.hubDetails.classList.remove('active');
    }
}

// Initialize the info panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.infoPanel = new InfoPanel();
});

// Export for global access
window.InfoPanel = InfoPanel;

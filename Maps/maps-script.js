// Initialize map (use existing map variable)
map = L.map('map').setView([14.67988059154782, 120.54502713235722], 13);

// Handle window resize
window.addEventListener('resize', function() {
    map.invalidateSize();
});

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define custom icons
const customIcon = L.icon({
    iconUrl: 'blhimages/blhmarker.png',
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const bookEquippedIcon = L.icon({
    iconUrl: 'blhimages/blhmarkerBookEquipped.png',
    iconSize: [50, 50],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Global variables
let routingControl = null;
let userMarker = null;
let droppedMarker = null;

// Destinations data with content
const destinations = [
    {
        coords: [14.67429, 120.51096],
        content: `
            <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="32px" height="32px">
                    <h4 style="margin: 0; color: #333;">BLH Bagong Silang</h4>
                </div>
                <img src="blhimages/BLH Bagong Silang with Admin.jpg" alt="BLH Bagong Silang" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
                <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> Roldan Jay A. Santos</p>
                <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 200MBPS</p>
                <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 19 Units</p>     
                <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>      
            </div>`
    },
    {
        coords: [14.67948, 120.54523],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="32px" height="32px">
                <h4 style="margin: 0; color: #333;">BLH Bagumbayan</h4>
            </div>
            <img src="blhimages/BLH Bagumbayan with Admin.jpg" alt="BLH Bagumbayan" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> RAPHAEL LOUISE LEAÑO</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 200MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 18 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.62925, 120.4685],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="32px" height="32px">
                <h4 style="margin: 0; color: #333;">BLH Cabog-Cabog</h4>
            </div>
            <img src="blhimages/BLH Cabog-Cabog with Admin.jpg" alt="BLH Cabog-Cabog" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> MICHELLE DEL ROSARIO SORIANO</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 50MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.68406, 120.52203],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="32px" height="32px">
                <h4 style="margin: 0; color: #333;">BLH Camacho</h4>
            </div>
            <img src="blhimages/BLH Camacho with Admin.jpg" alt="BLH Camacho" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> ISAAC P. ORIA</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 8 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.67476, 120.54051],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="32px" height="32px">
                <h4 style="margin: 0; color: #333;">BLH Cataning</h4>
            </div>
            <img src="blhimages/BLH Cataning with Admin.jpg" alt="BLH Cataning" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> MARK JOSHUA DELA ROSA</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 12 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.66362, 120.53878],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Central</h4>
            </div>
            <img src="blhimages/BLH Central with Admin.jpg" alt="BLH Central" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> CATHERINE FABREZ</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 200MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 18 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.67309911069562, 120.54270247643852],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Cupang North</h4>
            </div>
            <img src="blhimages/BLH Cupang North with Admin.jpg" alt="BLH Cupang North" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> JULIUS RICHARD MOLO</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 300MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Equipped</p>
        </div>`,
        hasReadingCorner: true
    },
    {
        coords: [14.66744, 120.5437],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Cupang Proper</h4>
            </div>
            <img src="blhimages/BLH Cupang Proper with Admin.jpg" alt="BLH Cupang Proper" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> KEVIN HERNANDO</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 300MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 10 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.67106, 120.54333],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Cupang West</h4>
            </div>
            <img src="blhimages/BLH Cupang West with Admin.jpg" alt="BLH Cupang West" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> JUAN NICHOLAS DE JESUS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 8 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.67785, 120.44728],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24" height="24">
                <h4 style="margin: 0; color: #333;">BLH Dangcol</h4>
            </div>
            <img src="blhimages/BLH Dangcol with Admin.jpg" alt="BLH Dangcol" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> DONELL JORDA</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.68351, 120.54339],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH DFS</h4>
            </div>
            <img src="blhimages/BLH DFS with Admin.jpg" alt="BLH DFS with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> JETHRO WAYNE BUSTAMANTE</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 12 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.68055, 120.53699],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Ibayo</h4>
            </div>
            <img src="blhimages/BLH Ibayo with Admin.jpg" alt="BLH Ibayo with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> ERLJON D. VENZON</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 8 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.68382, 120.53882],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Malabia</h4>
            </div>
            <img src="blhimages/BLH MALABIA with Admin.jpg" alt="BLH Malabia with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> MARK ANTHONY CAYANAN</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 30 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.68825, 120.55035],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Lote</h4>
            </div>
            <img src="blhimages/BLH Lote with Admin.jpg" alt="BLH Lote with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> PATRICK LANCE VENEGAS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 12 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.69246, 120.55751],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Ibaba</h4>
            </div>
            <img src="blhimages/BLH Ibaba with .jpg" alt="BLH Ibaba with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> N/A</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 18 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.691108490104202, 120.55664853687337],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Itaas</h4>
            </div>
            <img src="blhimages/BLH Itaas with Admin.jpg" alt="BLH Itaas with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> Kristine Garcia</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 18 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Equipped</p>
        </div>`,
        hasReadingCorner: true
    },
    {
        coords: [14.675921982516138, 120.5362406624673],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH San Jose</h4>
            </div>
            <img src="blhimages/BLH San Jose with Admin.jpg" alt="BLH San Jose with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> Richelle Vicente</p>
            <p style="margin: 0; font-size: 14px: color: #555;"><strong>Internet Speed:</strong><strong>Units:</strong> 30 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Equipped</p>
        </div>`,
        hasReadingCorner: true
    },
    {
        coords: [14.682999667459317, 120.54742498800228],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Talisay</h4>
            </div>
            <img src="blhimages/BLH Talisay with Admin.jpg" alt="BLH Talisay with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> Christian Joshua P. Mendigoria</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Equipped</p>
        </div>`,
        hasReadingCorner: true
    },
    {
        coords: [14.67945, 120.53453],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Tenejero</h4>
            </div>
            <img src="blhimages/BLH Tenejero with Admin.jpg" alt="BLH Tenejero with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> JOECO MALIBIRAN</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.69474, 120.53785],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Tuyo</h4>
            </div>
            <img src="blhimages/BLH Tuyo with Admin.jpg" alt="BLH Tuyo with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> JAILO PINEDA</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 30 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.69207, 120.56001],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH Tortugas</h4>
            </div>
            <img src="blhimages/BLH Tortugas with Admin.jpg" alt="BLH Tortugas with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> ROGEE ADRADOS CRUZ</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> 100MBPS</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 15 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    },
    {
        coords: [14.666249425991182, 120.52085527551395],
        content: `
        <div class="info-content" style="font-family: Arial, sans-serif; max-width: 300px; padding: 10px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="blhimages/BLH_logo.png" alt="BLH Logo" width="24px" height="24px">
                <h4 style="margin: 0; color: #333;">BLH COB Housing</h4>
            </div>
            <img src="blhimages/BLH COB HOUSING.jpg" alt="BLH COB Housing with Admin" style="width: 100%; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>BLH Admin:</strong> Gerard Federick Ragel</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Internet Speed:</strong> No Internet</p>
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Units:</strong> 13 Units</p>
            <p style="text-align:left; padding: 0; margin: 0; font-size: 14px; color: #555;"><strong>Reading Corner:</strong> Not Equipped</p>
        </div>`
    }
];

// Add destination markers to map
function addDestinationMarkers() {
    destinations.forEach(destination => {
        let iconToUse = destination.hasReadingCorner ? bookEquippedIcon : customIcon;

        const marker = L.marker(destination.coords, { icon: iconToUse })
            .bindPopup(destination.content)
            .addTo(map);

        // Add bounce animation on marker click
        marker.on('click', function() {
            marker.setIcon(iconToUse);
            setTimeout(() => {
                marker.bounceOut();
            }, 100);

            // Remove user location marker if it exists
            if (userMarker) {
                map.removeLayer(userMarker);
                userMarker = null;
            }

            updateLocationInput(destination.coords);
            updateRoute(destination.coords);

            // Update info panel with hub data
            if (window.infoPanel) {
                const hubData = extractHubDataFromContent(destination.content);
                hubData.coords = destination.coords;
                window.infoPanel.showHubInfo(hubData);
            }
        });
    });
}

// Initialize markers
addDestinationMarkers();

// Update location input field
function updateLocationInput(latlng) {
    document.getElementById('locationInput').value = `${latlng[0].toFixed(6)},${latlng[1].toFixed(6)}`;
}

// Map click event
map.on('click', function(e) {
    if (droppedMarker) {
        map.removeLayer(droppedMarker);
    }
    
    if (userMarker) {
        map.removeLayer(userMarker);
        userMarker = null;
    }

    droppedMarker = L.marker(e.latlng, { icon: customIcon }).addTo(map);
    updateLocationInput([e.latlng.lat, e.latlng.lng]);
    updateRoute([e.latlng.lat, e.latlng.lng]);
});

// Get user location
document.getElementById('getLocation').addEventListener('click', function() {
    const button = this;
    const icon = button.querySelector('i');
    
    // Add loading animation
    icon.className = 'fas fa-spinner fa-spin';
    button.disabled = true;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            document.getElementById('locationInput').value = userLocation.join(',');

            map.setView(userLocation, 16);

            if (droppedMarker) {
                map.removeLayer(droppedMarker);
                droppedMarker = null;
            }

            if (userMarker) {
                userMarker.setLatLng(userLocation);
            } else {
                userMarker = L.marker(userLocation, { 
                    icon: L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })
                }).addTo(map).bindPopup("You are here").openPopup();
            }

            const destinationStr = document.getElementById('destination').value.split(',').map(Number);
            if (destinationStr.length === 2) {
                updateRoute(userLocation);
            }

            // Reset button
            icon.className = 'fas fa-crosshairs';
            button.disabled = false;

        }, function(error) {
            alert("Geolocation failed: " + error.message);
            icon.className = 'fas fa-crosshairs';
            button.disabled = false;
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        });
    } else {
        alert("Your browser doesn't support geolocation.");
        icon.className = 'fas fa-crosshairs';
        button.disabled = false;
    }
});

// Update route function
function updateRoute(userLocation) {
    const destinationStr = document.getElementById('destination').value.split(',').map(Number);

    if (destinationStr.length === 2 && !isNaN(destinationStr[0]) && !isNaN(destinationStr[1])) {
        const destination = L.latLng(destinationStr[0], destinationStr[1]);

        if (routingControl) {
            map.removeControl(routingControl);
        }

        routingControl = L.Routing.control({
            waypoints: [L.latLng(userLocation[0], userLocation[1]), destination],
            routeWhileDragging: true,
            createMarker: function() { return null; },
            showAlternatives: false,
            lineOptions: {
                styles: [{ 
                    color: '#3b82f6', 
                    opacity: 0.8, 
                    weight: 6,
                    dashArray: '10, 5'
                }]
            }
        }).addTo(map);
    }
}

// Destination change event
document.getElementById('destination').addEventListener('change', function() {
    if (userMarker) {
        const currentLocation = userMarker.getLatLng();
        updateRoute([currentLocation.lat, currentLocation.lng]);
    }

    // Update info panel when destination is selected
    if (this.value && window.infoPanel) {
        const coords = this.value.split(',').map(Number);
        if (coords.length === 2) {
            const selectedHub = destinations.find(dest => 
                Math.abs(dest.coords[0] - coords[0]) < 0.001 && 
                Math.abs(dest.coords[1] - coords[1]) < 0.001
            );

            if (selectedHub) {
                const hubData = extractHubDataFromContent(selectedHub.content);
                hubData.coords = selectedHub.coords;
                window.infoPanel.showHubInfo(hubData);
            }
        }
    } else if (!this.value && window.infoPanel) {
        window.infoPanel.showDefault();
    }
});

// Show path button
document.getElementById('showpath').addEventListener('click', function() {
    const locationInput = document.getElementById('locationInput').value.split(',').map(Number);
    if (locationInput.length === 2 && !isNaN(locationInput[0]) && !isNaN(locationInput[1])) {
        updateRoute(locationInput);
    } else {
        alert('Please enter valid coordinates or get your current location first.');
    }
});

// Toggle mobile menu
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-active');
}

// Security measures
document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("keydown", event => {
    if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
        event.preventDefault();
    }
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

// Helper function to extract hub data from popup content
function extractHubDataFromContent(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const nameEl = tempDiv.querySelector('h4');
    const name = nameEl ? nameEl.textContent.trim() : 'Unknown Hub';

    return { name };
}

// Marker bounce animation (custom function)
L.Marker.prototype.bounceOut = function() {
    const marker = this;
    const originalIcon = marker.options.icon;
    let bounceHeight = 0;
    const maxBounce = 20;
    const bounceSpeed = 2;
    
    const animate = () => {
        bounceHeight += bounceSpeed;
        if (bounceHeight <= maxBounce) {
            marker._icon.style.transform = `translateY(-${bounceHeight}px)`;
            requestAnimationFrame(animate);
        } else {
            marker._icon.style.transform = 'translateY(0px)';
        }
    };
    
    animate();
};
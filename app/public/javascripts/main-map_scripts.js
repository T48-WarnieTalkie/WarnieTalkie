var corner1 = L.latLng([46.883518, 12.111882]);
var corner2 = L.latLng([46.060799, 10.886235]);
var bounds = L.latLngBounds(corner1, corner2);

var map = L.map('mainMap');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxBounds: bounds
}).addTo(map);

map.setView([46.064638, 11.150307], 16);
    
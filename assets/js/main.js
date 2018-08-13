var mymap = L.map('map').setView([48.573405,7.752111], 13);
let marker;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.emerald', //mapbox.streets-satellite , mapbox.emerald
    accessToken: 'pk.eyJ1IjoiYWNhcm91eCIsImEiOiJjamtyenI4angzemVjM2tueGQ3dmx1ODBvIn0.88HGRPkBmXHPspuTrDWVIw'
}).addTo(mymap);

$(document).ready(function () {
    mymap.on('click',function (e) {
        console.log(e);
        if (marker) {
            marker.remove();
        }
            marker = L.marker(e.latlng).addTo(mymap);
    });

});
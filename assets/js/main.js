let marker,
    mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWNhcm91eCIsImEiOiJjamtyenI4angzemVjM2tueGQ3dmx1ODBvIn0.88HGRPkBmXHPspuTrDWVIw',
    mapboxAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

var grayscale = L.tileLayer(mapboxUrl, {id: 'mapbox.emerald', attribution: mapboxAttribution}),
    streets = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', attribution: mapboxAttribution});

var mymap = L.map('map', {
    center: [48.573405, 7.752111],
    zoom: 10,
    minZoom: 2,
    layers: [grayscale],
    fullscreenControl: true,
});

var baseMaps = {
    "Plan": grayscale,
    "Satelite": streets
};

L.control.layers(baseMaps).addTo(mymap);


$(document).ready(function () {
    mymap.on('click',function (e) {
        console.log(e);
        if (marker) {
            marker.remove();
        }
            marker = L.marker(e.latlng).addTo(mymap);
    });

    //mymap.locate({setView: true, maxZoom: 16});

});
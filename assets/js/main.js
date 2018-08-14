let marker,
    mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWNhcm91eCIsImEiOiJjamtyenI4angzemVjM2tueGQ3dmx1ODBvIn0.88HGRPkBmXHPspuTrDWVIw',
    mapboxAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

let grayscale = L.tileLayer(mapboxUrl, {id: 'mapbox.emerald', attribution: mapboxAttribution}),
    streets = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', attribution: mapboxAttribution});

let mymap = L.map('map', {
    center: [48.573405, 7.752111],
    zoom: 10,
    minZoom: 2,
    layers: [grayscale],
    fullscreenControl: true,
});

let baseMaps = {
    "Plan": grayscale,
    "Satelite": streets
};

L.control.layers(baseMaps).addTo(mymap);

var options = {
    key: '85bcc114c0ae4f35b19ae40b944fdc68',
    limit: 8,
    proximity: '48.573405, 7.752111', // favour results near here
    position: 'topright',
    placeholder: 'Search...', // the text in the empty search box
    errorMessage: 'Nothing found.',
    showResultIcons: true,
    collapsed: true,
    expand: 'click',
};

var control = L.Control.openCageSearch(options).addTo(mymap);


let lc = L.control.locate({
    position: 'bottomright',
    flyTo: true,
    showPopup: false,
    cacheLocation: true,
    strings: {
        title: "Voir ou je suis"
    },
    locateOptions: {
        enableHighAccuracy: true,
        maxZoom: 18
    }
}).addTo(mymap);


mymap.on('click',function (e) {
});


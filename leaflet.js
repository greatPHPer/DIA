// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:300px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('12.852134', '80.140111');

// Set map's center to target with zoom 14.
map.setView(target, 14);

//const orsDirections = new Openrouteservice.Directions({
//            api_key: '5b3ce3597851110001cf6248c9047c74e71e450ea5779ab25da783fe'
//          })


//            const json =  orsDirections.calculate({
//              coordinates: [[12.852134, 80.140111], [12.2287612318, 79.5596749969]],
//              profile: 'driving-car',
//              extra_info: ['waytype', 'steepness'],
//              format: 'json',
//              api_version: 'v2'
//            })








//L.polyline(json.routes, {color: 'blue'}).addTo(map); 

let router = L.Routing.control({
            //router: L.Routing.openrouteservice('5b3ce3597851110001cf6248c9047c74e71e450ea5779ab25da783fe'),
            waypoints: [
                L.latLng(12.852134, 80.140111),
                L.latLng(12.2287612318, 79.5596749969)
            ],
            //routeWhileDragging: false,
            //show: false,
            //fitSelectedRoutes: false,
            //createMarker: function (i, waypoint, n) {
            //    return null;
            //},
            lineOptions: {
                styles: [{ color: '#9f150b', opacity: 1, weight: 4 ,className: 'animate'}]
            }
        });

        router.addTo(map);
console.log('rtr:',router);
setTimeout(function(){

var routtte=[];
for(var i=0;i<router._routes[0].coordinates.length;i++){
routtte.push(L.latLng(router._routes[0].coordinates[i].lat,router._routes[0].coordinates[i].lng));
}
console.log('routtte:',routtte);

var myMovingMarker = L.Marker.movingMarker(
routtte
//[
//                L.latLng(8.690958, 49.404662),
//                L.latLng(8.687868, 49.390139)
//            ]
, 6000, {
    autostart: false
});
map.addLayer(myMovingMarker);
myMovingMarker.start();
},5000);

// Place a marker on the same location.
L.marker(target).addTo(map);
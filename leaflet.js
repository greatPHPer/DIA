


let position = 0;
    let positions;
    var map = new maplibregl.Map({
        container: 'map',
      style:
            'https://api.maptiler.com/maps/streets/style.json?key=65y0V1sxzA1eMgmJScla',
//         style: {
//             "id": "raster",
//             "version": 8,
//             "name": "Raster tiles",
//             "center": [80.140111, 12.852134],
//             "zoom": 0,
//             "sources": {
//                 "raster-tiles": {
//                     "type": "raster",
//                     "tiles": [
//                         "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
// ],
//                     "tileSize": 256,
//                     "minzoom": 0,
//                     "maxzoom": 19
//                 }
//             },
//             "layers": [{
//                 "id": "background",
//                 "type": "background",
//                 "paint": {
//                     "background-color": "#e0dfdf"
//                 }
//             }, {
//                 "id": "simple-tiles",
//                 "type": "raster",
//                 "source": "raster-tiles"
//             }]
//         },
        center: [80.140111, 12.852134],
      //center: [-96, 37.8],
        zoom: 15.99,
       //zoom:3,
        // pitch: 40,
        // bearing: 0,
        // antialias: true,
        //maxPitch: 85,
        //maxZoom: 25,
    });

// window.map123=map;
    

































































/*const map = new maplibregl.Map({
        container: 'map',
        style:
            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        center: [80.140111, 12.852134],
        zoom: 5
    });
*/
    // add markers to map

        // create a DOM element for the marker
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
            `url('https://i.postimg.cc/QdLTtM26/truck.png')`;
        el.style.width = `64px`;
        el.style.height = `64px`;

        el.addEventListener('click', () => {
            window.alert('a');
        });

        // add marker to map
        // var marker=new maplibregl.Marker({element: el})
        //     .setLngLat([80.140111,12.852134])
        //     .addTo(map);





var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:300px;';

// Create Leaflet map on map element.
var osmmap = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(osmmap);

// Target's GPS coordinates.
var target = L.latLng('12.852134', '80.140111');

// Set map's center to target with zoom 14.
osmmap.setView(target, 14);




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

        router.addTo(osmmap);
console.log('rtr:',router);
//setTimeout(function(){

var routtte=[];
 function check(callback) {
    var element = router;
    if (element && '_routes' in element) {
        setTimeout(callback.bind(null, element), 0);
    } else {
        setTimeout(check.bind(null, callback), 0);
    }
}
check(function(element) {
    // It's there now, use it
    // x = element.jsMF2
  //console.log('rr:',element);
const arc = [];
 for(var i=0;i<router._routes[0].coordinates.length;i++){
// //routtte.push(L.latLng(router._routes[0].coordinates[i].lat,router._routes[0].coordinates[i].lng));
 // routtte.push([router._routes[0].coordinates[i].lng,router._routes[0].coordinates[i].lat]);
arc.push([router._routes[0].coordinates[i].lng,router._routes[0].coordinates[i].lat]);
// //var marker = new maplibregl.Marker();
// //marker.setLngLat([
// //            router._routes[0].coordinates[i].lng,
// //            router._routes[0].coordinates[i].lat
// //        ]);

//         // Ensure it's added to the map. This is safe to call if it's already added.
// //        marker.addTo(map);
 }
console.log('routtte:',router);
var i=0;
// function animateMarker(timestamp) {
//         i=(i+1)%router._routes[0].coordinates.length;
// console.log('routttei:',i);

//         // Update the data to a new position based on the animation timestamp. The
//         // divisor in the expression `timestamp / 1000` controls the animation speed.
//         marker.setLngLat([
//             router._routes[0].coordinates[i].lng,
//             router._routes[0].coordinates[i].lat

//         ]);
//   console.log({'lng':router._routes[0].coordinates[i].lng,'lat':          router._routes[0].coordinates[i].lat
// ,'altitude':0,'pitch':5});
//   marker.addTo(map);
// //map.camera_go_to({'lng':router._routes[0].coordinates[i].lng,'lat':          router._routes[0].coordinates[i].lat
// //,'altitude':0,'pitch':5,'bearing':2});
//         // Ensure it's added to the map. This is safe to call if it's already added.
        

//         // Request the next frame of the animation.
//         requestAnimationFrame(animateMarker);
//     }
// requestAnimationFrame(animateMarker);
  // for (let i = 0; i < router._routes[0].coordinates.length; i ++) {
  //   arc.push([router._routes[0].coordinates[i].lng,router._routes[0].coordinates[i].lat]);
  // }  
  
  
  
  
  
  
  
  
  const easingFunctions = {
    // start slow and gradually increase speed
        easeInCubic (t) {
            return t * t * t;
        },
        // start fast with a long, slow wind-down
        easeOutQuint (t) {
            return 1 - Math.pow(1 - t, 5);
        },
        // slow start and finish with fast middle
        easeInOutCirc (t) {
            return t < 0.5 ?
                (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 :
                (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
        },
        // fast start with a "bounce" at the end
        easeOutBounce (t) {
            const n1 = 7.5625;
            const d1 = 2.75;

            if (t < 1 / d1) {
                return n1 * t * t;
            } else if (t < 2 / d1) {
                return n1 * (t -= 1.5 / d1) * t + 0.75;
            } else if (t < 2.5 / d1) {
                return n1 * (t -= 2.25 / d1) * t + 0.9375;
            } else {
                return n1 * (t -= 2.625 / d1) * t + 0.984375;
            }
        }
    };
  
  
    const easingFn =
            easingFunctions[
                'easeInCubic'
            ];
const duration = parseInt(40000, 10);
            const animate = true;
            // const offsetX = parseInt(
            //     document.getElementById('offset-x').value,
            //     10
            // );
            // const offsetY = parseInt(
            //     document.getElementById('offset-y').value,
            //     10
            // );
  const animationOptions = {
                duration:duration,
                easing: easingFn,
                offset: [0, 0],
                animate:false,
                essential: true // animation will happen even if user has `prefers-reduced-motion` setting on
            };
  
  
  
  
  
  
  
  
  
  
  
  const origin = [80.140111, 12.852134];

    // Washington DC
    const destination = [79.5596749969, 12.2287612318];

    // A simple line from origin to destination.
    const route = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [origin, destination]
                }
            }
        ]
    };

    // A single point that animates along the route.
    // Coordinates are initially set to origin.
    const point = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': origin
                }
            }
        ]
    };

    // Calculate the distance in kilometers between route start/end point.
    const lineDistance = turf.lineDistance(route.features[0], 'kilometers');

    

    // Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    const steps = 500;

    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        const segment = turf.along(route.features[0], i, 'kilometers');
        //arc.push(segment.geometry.coordinates);
    }

    // Update the route with calculated arc coordinates
    route.features[0].geometry.coordinates = arc;

    // Used to increment the value of the point measurement against the route.
    let counter = 0;

    map.on('load', async () => {
        // Add a source and layer displaying a point which will be animated in a circle.
        map.addSource('route', {
            'type': 'geojson',
            'data': route
        });

        map.addSource('point', {
            'type': 'geojson',
            'data': point
        });

        map.addLayer({
            'id': 'route',
            'source': 'route',
            'type': 'line',
            'paint': {
                'line-width': 2,
                'line-color': '#007cbf'
            }
        });
      var imagetr;
     try{ 
       imagetr = await map.loadImage('https://i.postimg.cc/Df6nJFRL/truck.png');
       map.addImage('truck', imagetr.data);
       map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
                'icon-image': 'truck',
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-overlap': 'always',
                'icon-ignore-placement': true,
              //'icon-size':0.2
            }
        });
        }catch(e){console.log('eeee:',e,imagetr);}
     //    map.addImage('truck', imagetr.data);
   // map.loadImage(
   //      "https://i.postimg.cc/QdLTtM26/truck.png", // or base 64,
   //      (error, image) => {
   //        if (error) console.log('err:',error);
   //        map.addImage("truck", image);
   //        console.log('err2:',error,image);
   //      }
   //    );
      // map.addLayer({
      //       'id': 'unclustered-point',
      //       'source': 'cluster-source',
      //       'type': 'symbol',
      //   'filter': ["!", ["has", "point_count"]],
      //       'layout': {
      //           'icon-image': 'truck',
      //           'icon-rotate': ['get', 'bearing'],
      //           'icon-rotation-alignment': 'map',
      //           'icon-overlap': 'always',
      //           'icon-ignore-placement': true
      //       }
      //   });
        // map.addLayer({
        //     'id': 'point',
        //     'source': 'point',
        //     'type': 'symbol',
        //     'layout': {
        //         'icon-image': 'truck',
        //         'icon-rotate': ['get', 'bearing'],
        //         'icon-rotation-alignment': 'map',
        //         'icon-overlap': 'always',
        //         'icon-ignore-placement': true
        //     }
        // });

        function animate() {
            // Update point geometry to a new position based on counter denoting
            // the index to access the arc.
            point.features[0].geometry.coordinates =
                route.features[0].geometry.coordinates[counter];

            // Calculate the bearing to ensure the icon is rotated to match the route arc
            // The bearing is calculate between the current point and the next point, except
            // at the end of the arc use the previous point and the current point
            point.features[0].properties.bearing = turf.bearing(
                turf.point(
                    route.features[0].geometry.coordinates[
                        counter >= steps ? counter - 1 : counter
                    ]
                ),
                turf.point(
                    route.features[0].geometry.coordinates[
                        counter >= steps ? counter : counter + 1
                    ]
                )
            );

            // Update the source with this new data.
            map.getSource('point').setData(point);

            // Request the next frame of animation so long the end has not been reached.
            if (counter < steps) {
                requestAnimationFrame(animate);
            }
          // console.log('lg:',point.features[0].geometry.coordinates);
            const center = [
                            point.features[0].geometry.coordinates[0],
                            point.features[0].geometry.coordinates[1]
                        ];
              animationOptions.center = center;
              var ft=map.flyTo(animationOptions);
          
          console.log('ft:',ang);
          try{
            function angle(cx, cy, ex, ey) {
              var dy = ey - cy;
              var dx = ex - cx;
              var theta = Math.atan2(dy, dx); // range (-PI, PI]
              theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
              //if (theta < 0) theta = 360 + theta; // range [0, 360)
              return theta;
            }
            var ang=angle(
              route.features[0].geometry.coordinates[
                        counter >= steps ? counter - 1 : counter
                    ][0]
              ,
              route.features[0].geometry.coordinates[
                        counter >= steps ? counter - 1 : counter
                    ][1]
            
            ,
              route.features[0].geometry.coordinates[
                        counter >= steps ? counter : counter + 1
                    ][0]
            ,
             route.features[0].geometry.coordinates[
                        counter >= steps ? counter : counter + 1
                    ][1]
             
             
             );
            console.log('ang:',ang);
          map.rotateTo(ang,{duration: 10});
          }
          catch(e){
            
          }
          // map.rotateTo((timestamp / 100) % 360, {duration: 0});
//            map.rotateTo(
//              (
//              route.features[0].geometry.coordinates[
//                         counter >= steps ? counter : counter + 1
//                     ][1]
//              -
//              route.features[0].geometry.coordinates[
//                         counter >= steps ? counter - 1 : counter
//                     ][1]
//              )
//              /
//              (
//              route.features[0].geometry.coordinates[
//                         counter >= steps ? counter : counter + 1
//                     ][0]
//              -
//              route.features[0].geometry.coordinates[
//                         counter >= steps ? counter - 1 : counter
//                     ][0]
//              )
                        
                        
                        
                        
//                         , {duration: 1});
            counter = counter + 1;
        }

//         document
//             .getElementById('replay')
//             .addEventListener('click', () => {
//                 // Set the coordinates of the original point back to origin
//                 point.features[0].geometry.coordinates = origin;

//                 // Update the source layer
//                 map.getSource('point').setData(point);

//                 // Reset the counter
//                 counter = 0;

//                 // Restart the animation.
//                 animate(counter);
//             });

        // Start the animation.
        animate(counter);
    });



































//},5000);
});






















/*

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
*/

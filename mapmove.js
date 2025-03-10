function initialize() {
			var map = new google.maps.Map(document.getElementById("map"), {
			  center: {lat: 51.5087531, lng: -0.1281153},
			  zoom: 7,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			});
			
			getDirections(map);
		}

		function moveMarker(map, marker, latlng) {
			marker.setPosition(latlng);
			map.panTo(latlng);
		}

		function autoRefresh(map, pathCoords) {
			var i, route, marker;
			
			route = new google.maps.Polyline({
				path: [],
				geodesic : true,
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2,
				editable: false,
				map:map
			});
			
			marker=new google.maps.Marker({map:map, icon:"http://maps.google.com/mapfiles/ms/micons/blue.png"});

			for (i = 0; i < pathCoords.length; i++) {				
				setTimeout(function(coords) {
					route.getPath().push(coords);
					moveMarker(map, marker, coords);
				}, 200 * i, pathCoords[i]);
			}
		}
		
		function getDirections(map) {
			var directionsService = new google.maps.DirectionsService();
			
			var start = new google.maps.LatLng(51.5087531, -0.1281153);
			var end = new google.maps.LatLng(48.8583694, 2.2944796);

			var request = {
				origin:start,
				destination:end,
				travelMode: google.maps.TravelMode.DRIVING
			};
			directionsService.route(request, function(result, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					autoRefresh(map, result.routes[0].overview_path);
				}
			});
		}

		google.maps.event.addDomListener(window, 'load', initialize);

initialize();
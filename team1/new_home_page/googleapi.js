$(document).ready( startApp );

function startApp(){
    initMap();
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.6839473, lng: -117.7946942},
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    var input = document.getElementById('map-search');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });


    var markers = [];
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                title: place.name,
                url: place.url
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
                map.setZoom(18);
                map.setCenter(marker.getPosition());
            });
            markers.push(marker);
            var infowindow = new google.maps.InfoWindow();

            infowindow.setContent('<div><strong>' +place.name+ '</strong><br>' +place.formatted_address+ '<br></div>');

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

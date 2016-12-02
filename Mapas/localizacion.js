function get_loc() {
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(coordenadas);
       }else{
          alert('Este navegador es algo antiguo, actualiza para usar el API de localización');                  }
}


function coordenadas(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: lat, lng: lon},
    	zoom: 16
  	});

    var pos = new google.maps.LatLng(lat, lon);
    var pos2 = new google.maps.LatLng(6.2120737,-75.5766955,16);

	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();

	var request = {
	 origin: pos,
	 destination: pos2,
	 travelMode: google.maps.DirectionsTravelMode["DRIVING"],
	 unitSystem: google.maps.DirectionsUnitSystem["METRIC"],
	 provideRouteAlternatives: true
	};
	
	directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	        directionsDisplay.setMap(map);
	        directionsDisplay.setDirections(response);
	    } else {
	            alert("No existen rutas entre ambos puntos");
	    }
	});
}

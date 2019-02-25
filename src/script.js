var map;
var zipcode;
var feature;
var risk;

/*
   Function:   initMap()
   Parameters: none
   Behavior:   intitializes the google maps background map on the document
               focuses the map on NYC
               adds the zipcode boundaries to the document overlayed on the background map
   Return:     none
*/
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 40.75, lng: -73.9},
       zoom: 10.5
   });
   map.data.addGeoJson(geojsonobj);
}

/*
   Function:   styleMap()
   Parameters: none
   Behavior:   colors choropleth map for zipcode boundaries
   Return:     none
*/
function styleMap() {
   map.data.forEach(function(feature) {
       var score = feature.getProperty('accident_score') * 255.0;
       var gbval = 255 - Math.round(score);
       color = rgbToHex(255, gbval,  gbval);
       map.data.overrideStyle(feature, {fillColor: color});
       map.data.overrideStyle(feature, {fillOpacity: .65});
   });
}

/*
   Function:   addHoverBox()
   Parameters: none
   Behavior:   displays zipcode and accident score respective to cursor's zipcode region
   Return:     none
*/
function addHoverBox() {
   map.data.addListener('mouseover', function(event) {
       var content = "Zipcode: " + event.feature.getProperty('code') + "\n" + "Accident Score: " + event.feature.getProperty('accident_score') * 100;
       document.getElementById('info-box').textContent = content;
   });
}

/*
   Function:   componentToHex(c)
   Parameters: c = color component
   Behavior:   converts color component to hexadecimal format for coloration
   Return:     hexadecimal representation of color value
*/
function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
}

/*
   Function:   rbgToHex(r, g, b)
   Parameters: r = red value, g = green value, b = blue value
   Behavior:   converts the rgb values to hexadecimal color format
   Return:     hexademical representation of rgb values
*/
function rgbToHex(r, g, b) {
   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/*
   Function:   addDirections()
   Parameters: none
   Behavior:   displays route between selected start and end locations from drop-down menu
               intiates calculation of risk scoring for respective route
   Return:     none
*/
function addDirections() {
   var directionsService = new google.maps.DirectionsService;
   var directionsDisplay = new google.maps.DirectionsRenderer();
   directionsDisplay.setMap(map);
   var onChangeHandler = function() {
       calculateAndDisplayRoute(directionsService, directionsDisplay);
   };
   document.getElementById('start').addEventListener('change', onChangeHandler);
   document.getElementById('end').addEventListener('change', onChangeHandler);
}

/*
   Function:   calculateAndDisplayRoute(directionsService, directionsDisplay)
   Parameters: directionsService = service API object referernce, directionsDisplay = display API object reference
   Behavior:   makes API call to display route
               calls calculation and restyles map after execution
   Return:     none
*/
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
   directionsService.route({
       origin: document.getElementById('start').value,
       destination: document.getElementById('end').value,
       travelMode: 'DRIVING'
   },
   function(response, status) {
   if (status === 'OK') {
       directionsDisplay.setDirections(response);
       calculateScore(response.routes[0].legs[0].steps);
   }
   else {
       window.alert('Directions request failed due to ' + status);
   }
   });
   styleMap();
}

/*
   Function:   calculateScore(steps)
   Parameters: steps = nested JSON directions
   Behavior:   iterates though polylines and decodes them into lng-lat pairs
               iterates though lng-lat pairs, calculating the euclidian distance
               multiplies distance by zipcode risk level associated with the starting lng-lat pair
               adds the scores together and the distances and displays them
   Return:     none
*/
function calculateScore(steps) {
   var polylines = [];
   var i;
   if (steps) {
   for (i = 0; i < steps.length; i++) {
       polylines.push(steps[i].polyline.points);
   }
   }
   var longlatpairs = [];
   for (i = 0; i < polylines.length; i++) {
       pairs = google.maps.geometry.encoding.decodePath(polylines[i]);
   var j;
   for (j = 0; j < pairs.length; j++) {
       longlatpairs.push(pairs[j]);
   }
   }
   var total_score = 0;
   var total_distance = 0;
   var recent_feat;
   var new_feat;
   var score_to_add;
   var distance;
   var lng1, lat1, lng2, lat2;
   for (i = 0; i < longlatpairs.length - 1; i++) {
   lng1 = longlatpairs[i].lng();
   lat1 = longlatpairs[i].lat();
   lng2 = longlatpairs[i + 1].lng();
   lat2 = longlatpairs[i + 1].lat();
   if (!recent_feat) {
       recent_feat = getFeature(lng1, lat1);
   }
   if (!recent_feat) {
       continue;
   }
   polygon = recent_feat.geometry.coordinates[0];
   if (pointInPolygon([lng2, lat2], polygon)) {
       new_feat = recent_feat;
   }
   else {
       new_feat = getFeature(lng2, lat2);
   }

   distance = Math.sqrt(Math.pow(lng1 - lng2, 2) + Math.pow(lat1 - lat2, 2));
   if (recent_feat.properties.code == new_feat.properties.code) {
       score_to_add = recent_feat.properties.accident_score * distance;
   }
   else {
       score_to_add = (recent_feat.properties.accident_score * .5 * distance) + (new_feat.properties.accident_score * .5 * distance);
   }
   recent_feat = new_feat;
   total_score += (score_to_add * 100);
   total_distance += distance;
   }
   total_distance = total_distance * 69;
   document.getElementById("accident_score").value = total_score;
   document.getElementById("distance").value = total_distance;
   document.getElementById("risk").value = riskLevel(total_score, total_distance);
}

/*
   Function:   getFeature(lng, lat)
   Parameters: lng = longitude, lat = latitude
   Behavior:   iterates through polygons to see if lng-lat pair is inside
   Return:     respective feature linked with zipcode
*/
function getFeature(lng, lat) {
   geojsonobj.features.forEach(function(feat) {
       var vertices = feat.geometry.coordinates[0];
       if (pointInPolygon([lng, lat], vertices)) {
       feature = feat;
       }
   });
   return feature;
}

/*
   Function:   pointInPolygon(point, vs)
   Parameters: point = lng-lat pair, vs = vertices
   Behavior:   determines if a point is located insdie polygon made by vertices through odd-even-intersection algorithm
   Return:     true if point is bounded, false otherwise
*/
function pointInPolygon(point, vs) {
   var x = point[0], y = point[1];
   var inside = false;
   for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
       var xi = vs[i][0], yi = vs[i][1];
       var xj = vs[j][0], yj = vs[j][1];
      
       var intersect = ((yi > y) != (yj > y))
           && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
       if (intersect) inside = !inside;
   }
   return inside;
}

/*
   Function:   riskLevel(score, distance)
   Parameters: score = total score for a route, distance = total distance for a route
   Behavior:   divides score by distance, multiplies by 100, and takes repsective quantile
   Return:     respective risk quantile
*/
function riskLevel(score, distance) {
   var riskValue = score / distance * 100;
   if (riskValue == 0 || !riskValue) {
   return "None";
   }
   else if (riskValue < 20) {
   return "Very Low";
   }
   else if (riskValue < 40) {
   return "Low";
   }
   else if (riskValue < 60) {
   return "Medium";
   }
   else if (riskValue < 80) {
   return "High";
   }
   else {
   return "Very High";
   }
}

/*
   Function:   initialize()
   Parameters: none
   Behavior:   initialize the model
   Return:     none
*/
function initialize() {
   initMap();
   styleMap();
   addHoverBox();
   addDirections();
}

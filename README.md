Final Project - Interactive Data Visualization  
===

Authors: Eric Peterson & Caleb Ralphs

## Link
https://calebralphs.github.io/final/src/index.html

Note: the Google Maps API is glitchy, and the API call will throw errors, saying that the API Key in use is outdated and has been replaced. The viewer needs to refresh the page until the Map shows up (sometimes it takes a couple dozen times). 

## Overview

This overlayed choropleth map is a model of the risk of accidents in NYC. Each polygon on the map is representative of zip code boundary. The coloring of each region is representative of the accident density for the associated zip code. The accident density is a metric of the number of accidents per mile of roadway in the zipcode. That accident density score for each zip code is then normalized on a scale of 0 to 100. You can see that the darkest red region, with an accident density score of 100, is located in Manhatten, the area of NYC with the most traffic. You can also see that zip code that is the lightest color, a transparent white color, is located on the outskirts of Island.

 You can find in the top right part of the screen, a information box, which allows the user to chose a start and end location to route a drive. Once selected, the fastest route between the two locations is overlayed on top of the map. Once the user selects the start and end locations, metrics about the trip are displayed in the three other text boxes, located within the same information box. The metrics are as follows: score, represents the aggregate risk associated with the trip (i.e a 1 mile trip through a zipcode with score 50 would equal a 2 mile trip through a zipcode with score 25); distance, the length of the trip from start to end; risk level, the risk level bracket that the trip falls into, calculated by dividing the aggregate score by the route distance.
 
 On the bottom right part of the screen, you can find a information box which changes as you hover your cursor over each zipcode region. The information displayed in the box is the zipcodes actual code (i.e  01609) and the total number of reported accidents in that zipcode for the year of 2017. Additionally, since this visualization was built using Google's Maps API, the user can use the built in functionality of google maps, like toggling between the street level map and the satellite view or toggling between showing the labels and the terrain for the map.

 The codebase that we created for this project was not built off of any existing codebase, but rather, just just referenced some Google Maps API implementation examples from their documentation and found some references on Stack Overflow to use for specific functionality. See the 'References' section to see those relevant resources that we used.

## Data Sets
- Click [here](https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95) for the accident data used. You can see that in the Jupyter Notebook that this file was renamed to 'NYC_Motor_Vehicle_Collisions.csv' and placed in a directory up one level and into another '../data/[filename]'

- Click [here](https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-/exjm-f27b/data) for the street data used. You can see that in the Jupyter Notebook that this file was renamed to 'NYC_Streets.csv' and placed in the same directory specified above.

- Click [here](https://github.com/fedhere/PUI2015_EC/blob/master/mam1612_EC/nyc-zip-code-tabulation-areas-polygons.geojson) for the zip code geospatial data used. You can see that in the Jupyter Notebook that the file was saved in '.geojson' format, renamed as 'NYC_Zip_Polygons.geojson', and placed in the same directory specified above.

## Library Dependencies for Jupyter

1. pandas
2. numpy
3. plotly
4. json
5. matplotlib
5. shapely
6. fiona
7. six
8. pyproj
9. geopandas
10. pysal

## References

- https://developers.google.com/maps/documentation/javascript/tutorial
- https://stackoverflow.com/questions/38491370/how-to-add-geojsonmultilinestring-layer-to-a-google-map
- https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
- https://stackoverflow.com/questions/22521982/check-if-point-inside-a-polygon



const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { Client } = require("@googlemaps/google-maps-services-js");

const googleClient = new Client({});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

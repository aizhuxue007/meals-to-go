const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode")
const { placesRequest } = require("./places")
const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({})

exports.geocode = onRequest((request, response) => {
    geocodeRequest(request, response, client)
});

exports.placesNearby = onRequest((request, response) => {
    placesRequest(request, response, client)
})

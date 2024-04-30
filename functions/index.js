const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { Client } = require("@googlemaps/google-maps-services-js");

const googleClient = new Client({});
const stripeClient = require("stripe")("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")

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

const { onRequest } = require("firebase-functions/v2/https");
const { defineString } = require('firebase-functions/params');
const { geocodeRequest } = require("./geocode")
const { payRequest } = require("./pay")
const { placesRequest } = require("./places")
const { Client } = require("@googlemaps/google-maps-services-js");

const stripeSK = defineString("STRIPE_SK");
const googleClient = new Client({});
const stripeClient = require("stripe")(stripeSK.value());

exports.pay = onRequest((request, response) => {
  payRequest(request, response, stripeClient)
});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, googleClient)
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, googleClient)
})

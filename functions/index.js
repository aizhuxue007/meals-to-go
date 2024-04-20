const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { geocodeRequest } = require("./geocode")

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geocode = onRequest((request, response) => {
    geocodeRequest(request, response)
});

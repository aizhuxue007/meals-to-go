const url = require('url');
const { defineString } = require('firebase-functions/params');
const { locations: locationsMock } = require("./geocode.mock");

const googleApiKey = defineString('GOOGLE_API_KEY')

module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = url.parse(request.url, true).query;
    if (mock === 'true') {
        const location = locationsMock[city.toLowerCase()]
        return response.json(location);
    }

    console.log(client)
    client.geocode({
        params: {
            address: city,
            key: googleApiKey.value()
        },
        timeout: 1000,
    })
        .then(res => {
            return response.json(res.data)
        })
        .catch(err => {
            response.status(400)
            return response.send(err.response.data.error_message)
        })
}
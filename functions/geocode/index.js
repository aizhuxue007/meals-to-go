const { locations: locationsMock } = require("./geocode.mock");
const url = require('url');

module.exports.geocodeRequest = (request, response) => {
    const query = url.parse(request.url, true).query;
    const { city } = query
    console.log('in geoRequest', query)
    const location = locationsMock[city.toLowerCase()]
    response.json(location);
}
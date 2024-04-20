const { locations: locationsMock } = require("./geocode.mock");
const url = require('url');

module.exports.geocodeRequest = (request, response) => {
    const query = url.parse(request.url, true).query;
    const { city } = query
    const location = locationsMock[city.toLowerCase()]
    console.log(city, location)
    response.json(location);
}
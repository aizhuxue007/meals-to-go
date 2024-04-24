const { locations: locationsMock } = require("./geocode.mock");
const url = require('url');

module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = url.parse(request.url, true).query;
    if (mock === 'true') {
        const location = locationsMock[city.toLowerCase()]
        return response.json(location);
    }
    response.send('something else')
}
const url = require('url')
const { defineString } = require('firebase-functions/params');
const { mocks, addMockImages } = require('./mock')

const googleApiKey = defineString('GOOGLE_API_KEY')

module.exports.placesRequest = (req, res, client) => {
    const { location, mock } = url.parse(req.url, true).query;
    if (mock === 'true') {
        const data = mocks[location]
        if (data) {
            data.results = data.results.map(addMockImages)
        }
        return res.json(data)
    }
    client.placesNearby({
        params: {
            location: location,
            radius: 1500,
            type: 'restaurant',
            key: googleApiKey.value()
        },
        timeout: 1000,
    })
        .then(resp => {
            console.log(resp)
            resp.data.results = resp.data.results.map(addMockImages)
            return res.json(resp.data)
        })
        .catch(err => {
            res.status(400)
            return res.send(err)
        })
}
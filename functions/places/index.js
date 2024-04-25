const url = require('url')
const { defineString } = require('firebase-functions/params');
const { mocks, addMockImages } = require('./mock')
const googleApiKey = defineString('GOOGLE_API_KEY')

const addGoogleImage = (restaurant) => {
    const ref = restaurant.photos[0].photo_reference
    if (!ref) {
        restaurant.photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"]
    } else {
        restaurant.photos = [`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${googleApiKey.value()}`]
    }
    return restaurant
}

module.exports.placesRequest = (req, res, client) => {
    const { location } = url.parse(req.url, true).query;
    if (mockMode) {
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
            resp.data.results = resp.data.results.map(addGoogleImage)
            return res.json(resp.data)
        })
        .catch(err => {
            res.status(400)
            return res.send('hit err', err)
        })
}
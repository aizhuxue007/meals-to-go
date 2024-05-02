module.exports.payRequest = (request, response, client) => {
    const body = JSON.parse(request.body)
    console.log(body.token, body.price, body.name)
    response.json({ "message": "Hello from server", "status": "success", "timestamp": "2023-05-02T12:34:56Z", "token": body.token, "name": body.name, "price": body.price })
};
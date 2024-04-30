module.exports.payRequest = (request, response, client) => {
    console.log(request)
    response.send('hello from pay')
};
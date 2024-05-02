module.exports.payRequest = (request, response, stripe) => {
    const body = JSON.parse(request.body)
    const { price, token } = body;
    stripe.paymentIntents.create({
        amount: price,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method_data: {
            type: "card",
            card: {
                token
            }
        },
        confirm: true,
    }).then(paymentIntent => {
        response.json(paymentIntent)
    }).catch(e => {
        response.status(400);
        response.send(e)
    });
};
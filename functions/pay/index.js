module.exports.payRequest = (request, response, stripe) => {
    const body = JSON.parse(request.body)
    const { price, token } = body;
    console.log('payRequest', price, token);
    stripe.paymentIntents.create({
        amount: body.price,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method_data: {
            type: "card",
            card: {
                token: body.token
            }
        },
        confirm: true,
    }).then(paymentIntent => {
        response.json(paymentIntent)
    }).catch(e => {
        console.log(e)
        response.status(400);
        response.send(e)
    });
};
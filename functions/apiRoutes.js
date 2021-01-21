const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.secretKey);

router.get('/', (req, res) => {
    return res.status(200).send('Backend connected!');
})

router.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log(`Payment Request Received => ${total}`)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

module.exports = router;
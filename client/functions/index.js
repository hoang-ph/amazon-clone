const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51K3V74DF4iW6Xo35x4LgF1ec2kGwfqxqjothq6k8cJFvYDVHzqjq4dBVBm6x7zqocwUtjiY2F3Y9RSSwMlv2LjYK00DZkcS7Su'
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(express.json());
app.use(cors());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// endpoint
// http://localhost:5001/challenge-f565e/us-central1/api

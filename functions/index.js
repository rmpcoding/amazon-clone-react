const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.secretKey);
const routes = require('./apiRoutes')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(routes)


exports.api = functions.https.onRequest(app)
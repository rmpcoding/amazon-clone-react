const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.secretKey);


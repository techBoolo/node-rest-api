const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const errorHandler = require('./middlewares/errorHandler')
const unknownRoute = require('./middlewares/unknownRoute')

const app = express();


// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));

require('./models/dbConnection');
app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use(unknownRoute);
app.use(errorHandler);

module.exports = app;

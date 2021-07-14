const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const userRoute = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler')
const unknownRoute = require('./middlewares/unknownRoute')

const app = express();


// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./models/dbConnection');
app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use('/users', userRoute);

app.use(unknownRoute);
app.use(errorHandler);

module.exports = app;

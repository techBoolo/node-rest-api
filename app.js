const express = require('express');
const logger = require('morgan');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const errorHandler = require('./middlewares/errorHandler')
const unknownRoute = require('./middlewares/unknownRoute')

const app = express();


// middlewares
app.use(logger('dev'));

app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use(unknownRoute);
app.use(errorHandler);

module.exports = app;

const express = require('express');
const logger = require('morgan');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

const app = express();

// middlewares
app.use(logger('dev'));

app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use((req, res, next) => {
  res.status(200).json({ message: 'getting started' })
})

module.exports = app;

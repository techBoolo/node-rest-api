const express = require('express');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

const app = express();

app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use((req, res, next) => {
  res.status(200).json({ message: 'getting started' })
})

module.exports = app;

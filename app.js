const express = require('express');
const productRoute = require('./routes/product');

const app = express();

app.use('/products', productRoute);

app.use((req, res, next) => {
  res.status(200).json({ message: 'getting started' })
})

module.exports = app;

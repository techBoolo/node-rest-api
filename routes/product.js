const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "handle GET request to /products"
  })
})

router.post('/', (req, res, next) => {
  const { name, price } = req.body;
  res.status(201).json({
    message: "handle POST request to /products",
    product: {
      name,
      price
    }
  })
})

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: "Get specific product",
    id: req.params.id
  })
})

router.patch('/:id', (req, res, next) => {
  res.status(200).json({
    message: "handle PATCH request to /products"
  })
})

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: "handle DELETE request to /products"
  })
})

module.exports = router;

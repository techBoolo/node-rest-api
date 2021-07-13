const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "handle GET request to /products"
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "handle POST request to /products"
  })
})

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: "Get specific product",
    id: req.params.id
  })
})

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "handle PATCH request to /products"
  })
})

router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: "handle DELETE request to /products"
  })
})

module.exports = router;

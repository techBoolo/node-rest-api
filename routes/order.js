const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched"
  })
})

router.post('/', (req, res, next) => {
  const { productId, quantity } = req.body;
  res.status(201).json({
    message: "create new order",
    order: {
      productId,
      quantity
    }
  })
})

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: "order detail",
    id: req.params.id
  })
})

router.delete('/:id', (req, res, next) => {
  res.status(204).json({
    message: "order deleted"
  })
})

module.exports = router;

exports.index =  (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched"
  })
}

exports.show = (req, res, next) => {
  res.status(200).json({
    message: "order detail",
    id: req.params.id
  })
}

exports.create = (req, res, next) => {
  const { productId, quantity } = req.body;
  res.status(201).json({
    message: "create new order",
    order: {
      productId,
      quantity
    }
  })
}

exports.destroy = (req, res, next) => {
  res.status(204).json({
    message: "order deleted"
  })
}


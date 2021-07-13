exports.index = (req, res, next) => {
  res.status(200).json({
    message: "handle GET request to /products"
  })
}

exports.show = (req, res, next) => {
  res.status(200).json({
    message: "Get specific product",
    id: req.params.id
  })
}

exports.create = (req, res, next) => {
  const { name, price } = req.body;
  res.status(201).json({
    message: "handle POST request to /products",
    product: {
      name,
      price
    }
  })
}

exports.update = (req, res, next) => {
  res.status(200).json({
    message: "handle PATCH request to /products"
  })
} 

exports.destroy = (req, res, next) => {
  res.status(200).json({
    message: "handle DELETE request to /products"
  })
}

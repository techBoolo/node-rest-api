const Product = require('../models/product');
const { NoEntryFound } = require('../helpers/errorExceptions');

exports.index = (req, res, next) => {
  Product.find({})
    .then(products => {
      res.status(200).json({
        message: "list of products",
        products
      })
    })
    .catch(error => next(error))
}

exports.show = (req, res, next) => {
  const id = req.params.id;
  Product.findOne({_id: id})
    .then(product => {
      if(product) {
        res.status(200).json({
          message: "fetch specific product",
          product
        })
      } else {
        const error = new NoEntryFound("valid entry is not found.");
        error.status = 404;
        next(error);
      }
    })
    .catch(error => next(error))
}

exports.create = (req, res, next) => {
  const { name, price } = req.body;
  const product = new Product({
    name,
    price
  })
  product.save()
    .then((result) => {
      res.status(201).json({
        message: "product created.",
        result
      })
    })
    .catch( error => next(error) )
}

exports.update = (req, res, next) => {
  const id = req.params.id;
  const data = JSON.stringify(req.body, ['name', 'price'])
  Product.findOneAndUpdate({_id: id}, {$set: JSON.parse(data)}, { new: true })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "product updated",
        result
      })
    })
    .catch(error => next(error))
} 

exports.destroy = (req, res, next) => {
  const id = req.params.id;
  Product.deleteOne({_id: id})
    .then(result => {
      res.status(200).json({
        message: "product deleted",
        result
      })
    })
    .catch(erorr => next(error))
}

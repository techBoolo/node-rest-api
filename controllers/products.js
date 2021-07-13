const Product = require('../models/product');
const { NoEntryFound } = require('../helpers/errorExceptions');

const url = `http://localhost:${process.env.PORT}`;
exports.index = (req, res, next) => {
  Product.find({})
    .select("name price _id")
    .then(products => {
      res.status(200).json({
        message: "list of products",
        count: products.length,
        products: products.map(product => {
          return {
            ...product._doc,
            request: {
              type: 'GET',
              url: `${url}/products/${product._id}`
            }
          }
        })
      })
    })
    .catch(error => next(error))
}

exports.show = (req, res, next) => {
  const id = req.params.id;
  Product.findOne({_id: id})
    .select("name price _id")
    .then(product => {
      if(product) {
        res.status(200).json({
          message: "fetch specific product",
          product,
          request: {
            type: "GET",
            description: "retrieve all the products",
            url: `${url}/products`
          }
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
        product: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: "GET",
            url: `${url}/products/${result._id}`
          }
        }
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
        result,
        request: {
          type: "GET",
          url: `${url}/products/${result._id}`
        }
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

const Order = require('../models/order');
const Product = require('../models/product');
const { NoEntryFound } = require('../helpers/errorExceptions');

const url = `http://localhost:${process.env.PORT}`;
exports.index =  (req, res, next) => {
  Order.find({})
    .select("product quantity _id")
    .populate('product', 'name')
    .then(orders => {
      res.status(200).json({
        message: "Orders were fetched",
        count: orders.length,
        orders: orders.map(order => {
          return {
            ...order._doc,
            request: {
              type: 'GET',
              url: `${url}/orders/${order._id}`
            }
          }
        })
      })
    })
    .catch(error => next(error))
}

exports.show = (req, res, next) => {
  Order.findOne({ _id: req.params.id })
    .select("product quantity _id")
    .populate('product')
    .then(order => {
      if(order) {
        res.status(200).json({
          message: "order detail",
          ...order._doc,
          request: {
            type: 'GET',
            url: `${url}/orders`
          }
        })
      } else {
        const error = new NoEntryFound('valid entry for order does not found')
        error.status = 404;
        next(error)
      }
    })
    .catch(error => next(error))
}

exports.create = (req, res, next) => {
  Product.findOne({ _id: req.body.product })
    .then(prod => {
      if(prod){
        const { product, quantity } = req.body;
        const order = new Order({ product, quantity })
        order.save()
          .then(result => {
            res.status(201).json({
              message: "create new order",
              order: result,
              request: {
                type: 'GET',
                url: `${url}/orders/${result._id}`
              }
            })
          })
          .catch(error => next(error))
      } else {
        const error = new NoEntryFound('product does note exist') 
        error.status = 404
        next(error);
      }    
    })
    .catch(error => next(error))
}

exports.destroy = (req, res, next) => {
  Order.deleteOne({_id: req.params.id})
    .then(result => {
      res.status(200).json({
        message: "order deleted",
        result
      })
    })
    .catch(error => next(error))
}


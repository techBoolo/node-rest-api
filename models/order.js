const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number
})

module.exports = mongoose.model('Order', orderSchema);

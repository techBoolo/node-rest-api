const express = require('express');
const ordersController = require('../controllers/orders');

const router = express.Router();

router.get('/', ordersController.index)
router.get('/:id', ordersController.show)
router.post('/', ordersController.create)
router.delete('/:id', ordersController.destroy) 

module.exports = router;

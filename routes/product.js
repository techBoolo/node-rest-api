const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.index)
router.post('/', productsController.create)
router.get('/:id', productsController.show )
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router;

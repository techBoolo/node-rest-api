const express = require('express');
const productsController = require('../controllers/products');
const imageUpload = require('../middlewares/imageUpload')

const router = express.Router();

router.get('/', productsController.index)
router.get('/:id', productsController.show )
router.post('/', imageUpload , productsController.create)
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router;

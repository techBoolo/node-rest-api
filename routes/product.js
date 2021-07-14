const express = require('express');
const multer = require('multer');
const productsController = require('../controllers/products');

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_PATH});

router.get('/', productsController.index)
router.get('/:id', productsController.show )
router.post('/', upload.single('productImage') , productsController.create)
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router;

const express = require('express');
const multer = require('multer');
const productsController = require('../controllers/products');

const router = express.Router();
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, process.env.UPLOAD_PATH)
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + '.' + file.originalname)
  }
})
const upload = multer({ storage: storage });

router.get('/', productsController.index)
router.get('/:id', productsController.show )
router.post('/', upload.single('productImage') , productsController.create)
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router;

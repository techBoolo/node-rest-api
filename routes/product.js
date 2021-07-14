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
const fileFilter = (req, file, cb) => {
  if(!file.mimetype.match(/image\/(jpg|jpeg|png|gif)/)){
     return cb(new Error("Only images are allowed"), false) 
      }  
    cb(null, true)
}
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 }
});

router.get('/', productsController.index)
router.get('/:id', productsController.show )
router.post('/', upload.single('productImage') , productsController.create)
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router;

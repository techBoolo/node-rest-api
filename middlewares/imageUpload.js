const multer = require('multer');

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

module.exports = upload.single('productImage');

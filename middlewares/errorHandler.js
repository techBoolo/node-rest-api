const errorHandler = (error, req, res, next) => {
  if(error.name === 'RouteNotFound'){
    return res.status(404).json({
      error: {
        message: error.message
      }
    })
  }
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
}
module.exports = errorHandler;


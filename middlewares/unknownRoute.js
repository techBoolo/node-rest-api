const { RouteNotFound } = require('../helpers/errorExceptions');
const unknownRoute = (req, res, next) => {
  const error = new RouteNotFound("Route not found");
  error.status = 404;
  next(error);
}

module.exports = unknownRoute;

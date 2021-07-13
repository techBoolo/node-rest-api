class RouteNotFound extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

const unknownRoute = (req, res, next) => {
  const error = new RouteNotFound("Route not found");
  error.status = 404;
  next(error);
}

module.exports = unknownRoute;

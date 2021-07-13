class RouteNotFound extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

class NoEntryFound extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

module.exports = {
  NoEntryFound,
  RouteNotFound
}

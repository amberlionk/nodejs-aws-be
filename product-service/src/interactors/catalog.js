class Catalog {
  constructor (databaseDriver) {
    this.databaseDriver = databaseDriver
  }

  getProducts () {
    return this.databaseDriver.getProducts()
  }
}

module.exports = { Catalog }

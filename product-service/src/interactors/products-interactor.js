// const { Product } = require("./../entities/product")
class ProductsInteractor {
  constructor (storageGateway) {
    this.storageGateway = storageGateway
  }

  getAll () {
    const products = this.storageGateway.getProducts()

    return products
  }
}

module.exports = { ProductsInteractor }

const { Product } = require("./../entities/product")
class ProductsInteractor {
  constructor (storageGateway) {
    this.storageGateway = storageGateway
  }

  getAll () {
    const rawProducts = this.storageGateway.getProducts()
    const products = rawProducts.map(product => new Product(product))

    return products
  }
}

module.exports = { ProductsInteractor, Product }

// const { Product } = require("./../entities/product")
const { ProductNotFoundError } = require("./../errors")
class ProductsInteractor {
  constructor (storageGateway) {
    this.storageGateway = storageGateway
  }

  getAll () {
    const products = this.storageGateway.getProducts()

    return products
  }

  getProduct (id) {
    let product

    try {
      product = this.storageGateway.getProduct({ id })
    } catch (e) {
      throw new ProductNotFoundError(e)
    }

    if (!product) throw new ProductNotFoundError()

    return product
  }
}

module.exports = { ProductsInteractor }

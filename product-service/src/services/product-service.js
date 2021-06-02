class ProductService {
  constructor (productsList) {
    this.products = productsList
  }

  getProducts () {
    return this.products
  }
}

module.exports = ProductService

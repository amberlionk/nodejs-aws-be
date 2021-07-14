const CustomError = require("./custom-error")

class ProductInteractorError extends CustomError {
  constructor (message = "Product interactor error") {
    super(message)

    this.name = "ProductInteractorError"
  }
}

class ProductNotFoundError extends ProductInteractorError {
  constructor (message = "Product not found") {
    super(message)

    this.name = "ProductNotFoundError"
  }
}

module.exports = {
  ProductInteractorError,
  ProductNotFoundError
}

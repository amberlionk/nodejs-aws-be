const CustomError = require("./custom-error")
const ProductInteractorErrors = require("./product-interactor-errors")

module.exports = {
  CustomError,
  ...ProductInteractorErrors
}

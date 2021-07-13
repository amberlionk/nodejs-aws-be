const { getProductById } = require("./src/lambdas/get-product-by-id.js")
const { getAllProducts } = require("./src/lambdas/get-all-products.js")

module.exports = {
  getProductById,
  getAllProducts
}

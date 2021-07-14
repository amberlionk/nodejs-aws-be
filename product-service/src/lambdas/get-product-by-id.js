const { ProductsInteractor } = require("../interactors/products-interactor")
const { storageGatewayFactory } = require("../drivers/storage-gateway")
const productPresenter = require("./presenters/product-presenter")

async function getProductById (event, context) {
  const { productId } = event

  const storageGatewayInstance = storageGatewayFactory()
  const productsInteractor = new ProductsInteractor(storageGatewayInstance)
  const product = productsInteractor.getProduct(productId)

  const respProduct = productPresenter(product)
  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(respProduct)
  }
}

module.exports = { getProductById }

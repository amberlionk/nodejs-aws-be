const { ProductsInteractor } = require("../interactors/products-interactor")
const { storageGatewayFactory } = require("../drivers/storage-gateway")
const productPresenter = require("./presenters/product-presenter")
const { ProductNotFoundError } = require("../errors")

async function getProductById (event, context) {
  try {
    const { pathParameters: { productId } } = event

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
  } catch (e) {
    if (e instanceof ProductNotFoundError) {
      return {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        statusCode: 404
      }
    }

    throw e
  }
}

module.exports = { getProductById }

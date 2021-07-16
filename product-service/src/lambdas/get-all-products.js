const { ProductsInteractor } = require("../interactors/products-interactor")
const { storageGatewayFactory } = require("../drivers/storage-gateway")
const productPresenter = require("./presenters/product-presenter.js")

async function getAllProducts (event, context) {
  const storageGatewayInstance = storageGatewayFactory()
  const productsInteractor = new ProductsInteractor(storageGatewayInstance)
  const productsList = productsInteractor.getAll()

  const respProducts = productsList.map(product => productPresenter(product))

  const response = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(respProducts)
  }

  return response
}

module.exports = {
  getAllProducts
}

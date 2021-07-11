const { ProductsInteractor } = require("../interactors/products-interactor")
const { storageGatewayFactory } = require("../drivers/storage-gateway")

function getAllProducts (event, context) {
  const storageGatewayInstance = storageGatewayFactory()
  const productsInteractor = new ProductsInteractor(storageGatewayInstance)
  const respProducts = productsPresenter(productsInteractor.getAll())

  const response = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(respProducts)
  }

  return response
}

function productsPresenter (products = []) {
  const productsList = products.map(product => {
    return { ...product }
  })

  return productsList
}

module.exports = {
  getAllProducts
}

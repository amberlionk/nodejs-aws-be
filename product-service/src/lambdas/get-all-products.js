const { ProductsInteractor } = require("../interactors/products")
const { storageGatewayFactory } = require("../drivers/storage-gateway")

function getAllProducts (event, context) {
  const storageGateway = storageGatewayFactory()
  const productsInteractor = new ProductsInteractor(storageGateway)
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

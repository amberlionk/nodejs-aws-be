const productsFileStorage = require("./productList.json")
const { Product } = require("./../entities/product")

class StorageGateway {
  getProducts () { throw new Error("Implement me") }
  getProduct () { throw new Error("Implement me") }
}

class FileStorageGateway extends StorageGateway {
  constructor () {
    super()

    this.fileStorage = productsFileStorage
  }

  getProducts () {
    const products = this.fileStorage.map(product => new Product(product))

    return products
  }

  getProduct ({ id }) {
    let product

    if (id) {
      product = this.fileStorage.find(product => product.id === id)
    }

    if (product) product = new Product(product)
    return product
  }
}

let fileStorageInstance = null

function storageGatewayFactory () {
  if (!fileStorageInstance) fileStorageInstance = new FileStorageGateway()

  return fileStorageInstance
}

module.exports = { storageGatewayFactory, StorageGateway, FileStorageGateway }

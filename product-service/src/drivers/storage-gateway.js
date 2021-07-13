const productsFileStorage = require("./productList.json")
const { Product } = require("./../entities/product")

class StorageGateway {
  getProducts () { throw new Error("Implement me") }
}

class FileStorageGateway extends StorageGateway {
  getProducts () {
    const products = productsFileStorage.map(product => new Product(product))

    return products
  }
}

let fileStorageInstance = null

function storageGatewayFactory () {
  if (!fileStorageInstance) fileStorageInstance = new FileStorageGateway()

  return fileStorageInstance
}

module.exports = { storageGatewayFactory, StorageGateway, FileStorageGateway }

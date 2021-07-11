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

const fileStorageInstance = new FileStorageGateway()

function storageGatewayFactory () {
  return fileStorageInstance
}

module.exports = { storageGatewayFactory, StorageGateway, FileStorageGateway }

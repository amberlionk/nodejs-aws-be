const productsFileStorage = require("./productList.json")

class StorageGateway {
  getProducts () { throw new Error("Implement me") }
}

class FileStorageGateway extends StorageGateway {
  getProducts () {
    return productsFileStorage
  }
}

const fileStorage = new FileStorageGateway()

function storageGatewayFactory () {
  return fileStorage
}

module.exports = { storageGatewayFactory, StorageGateway, FileStorageGateway }

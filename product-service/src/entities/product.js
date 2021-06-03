class Product {
  constructor (dataObject) {
    if (dataObject.id === null || dataObject.id === undefined) throw new Error("id is required")

    this.id = dataObject.id
    this.count = dataObject.count || 0
    this.description = dataObject.description || ""
    this.price = dataObject.price || 0
    this.title = dataObject.title || ""
    this.img = dataObject.img || ""
  }
}

module.exports = Product

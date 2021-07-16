class Product {
  constructor (dataObject) {
    if (dataObject.id === null || dataObject.id === undefined) throw new Error("id is required")

    this.id = dataObject.id
    this.description = dataObject.description ?? ""
    this.title = dataObject.title ?? ""
    this.img = dataObject.img ?? ""

    if (dataObject.count) {
      this.count = parseInt(dataObject.count, 10)
    } else {
      this.count = 0
    }

    if (dataObject.price) {
      this.price = parseFloat(dataObject.price).toFixed(2)
    } else {
      this.price = 0
    }
  }
}

module.exports = { Product }

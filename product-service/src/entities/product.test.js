const { Product } = require("./product")

describe("Product", () => {
  it("should be class instance of Product", () => {
    expect(Product.name).toBe("Product")
  })

  describe("constructor", () => {
    it("should fail if no ID is provided", () => {
      expect(() => new Product({ })).toThrow("id is required")
    })

    it("should fill defaults", () => {
      const product = new Product({ id: 1 })
      expect(product).toBeInstanceOf(Product)
      expect(product).toEqual({ count: 0, description: "", id: 1, img: "", price: 0, title: "" })
    })

    it("should have contract", () => {
      const productFromDb = {
        id: 1,
        count: 10,
        description: "descr",
        img: "http://example.com/img.png",
        price: 100,
        title: "title"
      }

      const productExpected = {
        id: 1,
        count: 10,
        description: "descr",
        img: "http://example.com/img.png",
        price: parseFloat(100).toFixed(2),
        title: "title"
      }

      const product = new Product(productFromDb)
      expect(product).toBeInstanceOf(Product)
      expect(product).toEqual(productExpected)
    })
  })
})

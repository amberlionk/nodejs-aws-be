import Product from "./product"

describe("Product", () => {
  it("should be class instance of Product", () => {
    expect(Product.name).toBe("Product")

    const product = new Product({ id: "1" })

    expect(product).toBeInstanceOf(Product)
  })

  describe("constructor", () => {
    it("should fail if no ID is provided", () => {
      expect(() => new Product({ })).toThrow("id is required")
    })

    it("should fill defaults", () => {
      // const product = new Product({ id: 1 })

      // expect(product)
    })
  })
})

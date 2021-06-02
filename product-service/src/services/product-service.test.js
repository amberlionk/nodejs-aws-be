import ProductService from "./product-service"

describe("ProductService", () => {
  it("should be class instance ProductService", () => {
    expect(ProductService.name).toBe("ProductService")
    expect(new ProductService([])).toBeInstanceOf(ProductService)
  })

  describe("getProducts", () => {
    const products = [
      {
        count: 4,
        description: "",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        price: 2.4,
        title: "Paddle 1",
        img: "https://images.unsplash.com/photo-1597502467203-86721d02634b"
      }
    ]

    it("should return lest of products", () => {
      const productService = new ProductService(products)

      expect(productService.getProducts()).toBe(products)
    })
  })
})

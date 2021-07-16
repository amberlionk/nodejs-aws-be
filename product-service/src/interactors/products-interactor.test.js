const { ProductsInteractor } = require("./products-interactor")
const { Product } = require("../entities/product")
const { ProductNotFoundError } = require("../errors")

const expectedProducts = [
  new Product({
    id: 1,
    count: 10,
    description: "descr",
    img: "http://example.com/img.png",
    price: "100",
    title: "title"
  }),
  new Product({
    count: 6,
    description: "",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    price: 10,
    title: "Paddle 2",
    img: "https://images.unsplash.com/photo-1599582013263-80b822645216"
  })
]

const storageGatewayMok = {
  getProducts: jest.fn().mockReturnValue(expectedProducts),
  getProduct: jest.fn()
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe("ProductsInteractor", () => {
  it("should be class instance ProductsInteractor", () => {
    expect(ProductsInteractor.name).toBe("ProductsInteractor")
  })

  describe("constructor", () => {
    it("should crete Products instance", () => {
      const productsInteractor = new ProductsInteractor(storageGatewayMok)

      expect(productsInteractor).toBeInstanceOf(ProductsInteractor)
      expect(productsInteractor.storageGateway).toEqual(storageGatewayMok)
    })
  })

  describe("getAll", () => {
    it("should return products", () => {
      const productsInteractor = new ProductsInteractor(storageGatewayMok)
      const products = productsInteractor.getAll()

      expect(products).toBeInstanceOf(Array)
      expect(products).toHaveLength(2)
      products.forEach(product => {
        expect(product).toBeInstanceOf(Product)
      })
    })
  })

  describe("getProduct", () => {
    it("should return Product", () => {
      storageGatewayMok.getProduct.mockReturnValueOnce(expectedProducts[0])
      const productsInteractor = new ProductsInteractor(storageGatewayMok)
      const product = productsInteractor.getProduct(expectedProducts[0].id)

      expect(product).toBeInstanceOf(Product)
      expect(product).toEqual(expectedProducts[0])
      expect(storageGatewayMok.getProduct).toHaveBeenCalledTimes(1)
    })

    it("should throw if no products found", () => {
      storageGatewayMok.getProduct
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(undefined)
      const productsInteractor = new ProductsInteractor(storageGatewayMok)

      expect(() => productsInteractor.getProduct("foooo")).toThrow(ProductNotFoundError)
      expect(() => productsInteractor.getProduct("foooo")).toThrow(ProductNotFoundError)
      expect(storageGatewayMok.getProduct).toHaveBeenCalledTimes(2)
    })

    it("should throw if error in storage gateway", () => {
      storageGatewayMok.getProduct.mockImplementationOnce(() => { throw new Error("fooooo !!!") })
      const productsInteractor = new ProductsInteractor(storageGatewayMok)

      expect(() => productsInteractor.getProduct("foooo")).toThrow(ProductNotFoundError)
    })
  })
})

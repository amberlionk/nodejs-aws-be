const { ProductsInteractor } = require("./products-interactor")
const { Product } = require("../entities/product")

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
  getProducts: jest.fn().mockReturnValue(expectedProducts)
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

    // it("should return products", () => {
    //   const ProductsInteractorMock = jest.fn().mockImplementation(() => {
    //     return {
    //       getAll: jest.fn(() => [new Product({
    //         id: 1,
    //         count: 10,
    //         description: "descr",
    //         img: "http://example.com/img.png",
    //         price: 100,
    //         title: "title"
    //       })])
    //     }
    //   })
    //   const productsInteractor = new ProductsInteractorMock(storageGatewayMok)
    //   const products = productsInteractor.getAll()

    //   expect(products).toHaveLength(1)
    //   expect(products).toContainEqual(expect.any(Product))
    //   expect(storageGatewayMok.getProducts).toHaveBeenCalledTimes(0)
    //   expect(productsInteractor.getAll).toHaveBeenCalledTimes(1)
    //   expect(ProductsInteractorMock.mock.instances[0].getAll).toHaveBeenCalledTimes(1)
    // })
  })
})

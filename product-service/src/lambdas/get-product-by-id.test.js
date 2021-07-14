const { getProductById } = require("./get-product-by-id")
const { ProductsInteractor } = require("../interactors/products-interactor")
const { Product } = require("../entities/product")

jest.mock("../interactors/products-interactor")
jest.mock("../drivers/storage-gateway")

beforeEach(() => {
  jest.clearAllMocks()
})

describe("getProductById", () => {
  it("should return product by ID", () => {
    const getProductMock = jest.fn().mockReturnValue(new Product({
      id: 1,
      count: 10,
      description: "descr",
      img: "http://example.com/img.png",
      price: 100,
      title: "title"
    }))

    ProductsInteractor.mockImplementationOnce(() => {
      return {
        getProduct: getProductMock
      }
    })

    const expectedResult = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 200,
      body: "{\"id\":1,\"description\":\"descr\",\"title\":\"title\",\"img\":\"http://example.com/img.png\",\"count\":10,\"price\":\"100.00\"}"
    }

    const result = getProductById({ id: 1 })

    expect(result).resolves.toEqual(expectedResult)
  })
})

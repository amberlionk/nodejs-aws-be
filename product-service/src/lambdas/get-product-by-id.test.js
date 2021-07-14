const { getProductById } = require("./get-product-by-id")
const { ProductsInteractor } = require("../interactors/products-interactor")
const { Product } = require("../entities/product")
const { ProductNotFoundError } = require("../errors")

jest.mock("../interactors/products-interactor")
jest.mock("../drivers/storage-gateway")

const getProductMock = jest.fn()
ProductsInteractor.mockImplementation(() => {
  return {
    getProduct: getProductMock
  }
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe("getProductById", () => {
  it("should return product by ID", () => {
    getProductMock.mockReturnValueOnce(new Product({
      id: 1,
      count: 10,
      description: "descr",
      img: "http://example.com/img.png",
      price: 100,
      title: "title"
    }))

    const expectedResult = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 200,
      body: "{\"id\":1,\"description\":\"descr\",\"title\":\"title\",\"img\":\"http://example.com/img.png\",\"count\":10,\"price\":\"100.00\"}"
    }

    const result = getProductById({ pathParameters: { productId: 1 } })

    expect(result).resolves.toEqual(expectedResult)
  })

  it("should return 404 if not found", () => {
    getProductMock.mockImplementationOnce(() => { throw new ProductNotFoundError() })

    const expectedResult = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 404
    }

    const result = getProductById({ pathParameters: { productId: "fooo" } })

    expect(result).resolves.toEqual(expectedResult)
  })

  it("should throw if unknown error", () => {
    getProductMock.mockImplementationOnce(() => { throw new Error("internal error") })

    const result = getProductById({ pathParameters: { productId: "fooo" } })

    expect(result).rejects.toThrow("internal error")
  })
})

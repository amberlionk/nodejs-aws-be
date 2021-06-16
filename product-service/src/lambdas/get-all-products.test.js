const { getAllProducts } = require("./get-all-products")
const { ProductsInteractor } = require("../interactors/products")
const { storageGatewayFactory } = require("../drivers/storage-gateway")

jest.mock("../interactors/products")
jest.mock("../drivers/storage-gateway")

const { Product } = jest.requireActual("../interactors/products")

beforeEach(() => {
  jest.clearAllMocks()
})

describe("getAllProducts", () => {
  it("should return all products", () => {
    const getAllMock = jest.fn().mockReturnValue([new Product({
      id: 1,
      count: 10,
      description: "descr",
      img: "http://example.com/img.png",
      price: 100,
      title: "title"
    })])

    ProductsInteractor.mockImplementation(() => {
      return {
        getAll: getAllMock
      }
    })

    const expectedResult = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 200,
      body: "[{\"id\":1,\"description\":\"descr\",\"title\":\"title\",\"img\":\"http://example.com/img.png\",\"count\":10,\"price\":\"100.00\"}]"
    }

    const result = getAllProducts()

    expect(result).toEqual(expectedResult)
    expect(storageGatewayFactory).toHaveBeenCalledTimes(1)
    expect(ProductsInteractor).toHaveBeenCalledTimes(1)
    expect(getAllMock).toHaveBeenCalledTimes(1)
    // не работает (((
    // console.log(">", ProductsInteractor.mock.instances[0].getAll.mock.calls)
    // expect(ProductsInteractor.mock.instances[0].getAll).toHaveBeenCalledTimes(1)
  })
})

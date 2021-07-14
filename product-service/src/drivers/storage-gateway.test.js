
const { storageGatewayFactory, StorageGateway, FileStorageGateway } = require("./storage-gateway")
const { Product } = require("./../entities/product")

const products = [
  {
    count: 4,
    description: "",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 2.4,
    title: "Paddle 1",
    img: "https://images.unsplash.com/photo-1597502467203-86721d02634b"
  },
  {
    count: 6,
    description: "",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    price: 10,
    title: "Paddle 2",
    img: "https://images.unsplash.com/photo-1599582013263-80b822645216"
  }
]

jest.mock("./productList.json", () => {
  return products
})

describe("StorageGateway", () => {
  it("should be class instance StorageGateway", () => {
    expect(StorageGateway.name).toBe("StorageGateway")

    const storageGateway = new StorageGateway()

    expect(storageGateway).toBeInstanceOf(StorageGateway)
    expect(storageGateway.getProducts).toBeDefined()
    expect(() => { storageGateway.getProducts() }).toThrow("Implement me")
    expect(() => { storageGateway.getProduct() }).toThrow("Implement me")
  })
})

describe("FileStorageGateway", () => {
  it("should be class instance FileStorageGateway", () => {
    expect(FileStorageGateway.name).toBe("FileStorageGateway")

    const storageGateway = new FileStorageGateway()

    expect(storageGateway).toBeInstanceOf(StorageGateway)
    expect(storageGateway).toBeInstanceOf(FileStorageGateway)
  })

  describe("getProducts", () => {
    it("should return products", () => {
      const storageGateway = new FileStorageGateway()

      expect(storageGateway.getProducts).toBeDefined()

      const products = storageGateway.getProducts()

      expect(products).toBeInstanceOf(Array)
      expect(products).toHaveLength(2)
      products.forEach(product => {
        expect(product).toBeInstanceOf(Product)
      })
    })
  })

  describe("getProduct", () => {
    it("should return product by ID", () => {
      const storageGateway = new FileStorageGateway()

      const product = storageGateway.getProduct({ id: products[0].id })
      expect(product).toBeInstanceOf(Product)
      expect(product.id).toEqual(products[0].id)
    })

    it("should return undefined if no product", () => {
      const storageGateway = new FileStorageGateway()

      let product = storageGateway.getProduct({ id: "foo" })
      expect(product).toBeUndefined()

      product = storageGateway.getProduct({})
      expect(product).toBeUndefined()
    })
  })
})

describe("storageGatewayFactory", () => {
  it("should return FileStorageGateway singleton", () => {
    const storageGateway = storageGatewayFactory()
    expect(storageGateway).toBeInstanceOf(FileStorageGateway)

    const storageGateway2 = storageGatewayFactory()
    expect(storageGateway).toBe(storageGateway2)
  })
})

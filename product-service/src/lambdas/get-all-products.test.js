import { getAllProducts } from "./get-all-products"

describe("getAllProducts", () => {
  it("should return all products", () => {
    const products = getAllProducts()
    console.log(products)
  })
})
